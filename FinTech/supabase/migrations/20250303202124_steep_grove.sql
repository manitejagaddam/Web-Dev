/*
  # Initial Schema for USA Financial Loan Platform

  1. New Tables
    - `profiles`
      - User profile information including contact details
    - `loan_applications`
      - Loan application data submitted by users
    - `loan_offers`
      - Loan offers generated for approved applications
    - `active_loans`
      - Active loans that users have accepted
    - `loan_payments`
      - Payment schedule and history for active loans

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users to access their own data
*/

--Create Authentication tabel
CREATE TABLE auth_users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email TEXT UNIQUE NOT NULL,
    username TEXT UNIQUE NOT NULL,
    hashed_password TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);


-- Create profiles table
CREATE TABLE IF NOT EXISTS profiles (
  id uuid PRIMARY KEY REFERENCES auth.users ON DELETE CASCADE,
  first_name text,
  last_name text,
  phone_number text,
  address text,
  city text,
  state text,
  zip_code text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create loan_applications table
CREATE TABLE IF NOT EXISTS loan_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users ON DELETE CASCADE,
  loan_type text NOT NULL,
  loan_amount numeric NOT NULL,
  loan_purpose text NOT NULL,
  loan_term integer NOT NULL,
  employment_status text NOT NULL,
  annual_income numeric NOT NULL,
  credit_score_range text NOT NULL,
  status text NOT NULL,
  additional_info jsonb,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create loan_offers table
CREATE TABLE IF NOT EXISTS loan_offers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users ON DELETE CASCADE,
  application_id uuid NOT NULL REFERENCES loan_applications(id) ON DELETE CASCADE,
  loan_amount numeric NOT NULL,
  interest_rate numeric NOT NULL,
  loan_term integer NOT NULL,
  monthly_payment numeric NOT NULL,
  total_repayment numeric NOT NULL,
  status text NOT NULL,
  expires_at timestamptz NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create active_loans table
CREATE TABLE IF NOT EXISTS active_loans (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users ON DELETE CASCADE,
  application_id uuid NOT NULL REFERENCES loan_applications(id) ON DELETE CASCADE,
  offer_id uuid NOT NULL REFERENCES loan_offers(id) ON DELETE CASCADE,
  loan_amount numeric NOT NULL,
  interest_rate numeric NOT NULL,
  loan_term integer NOT NULL,
  monthly_payment numeric NOT NULL,
  remaining_balance numeric NOT NULL,
  next_payment_date timestamptz NOT NULL,
  status text NOT NULL,
  start_date timestamptz NOT NULL,
  end_date timestamptz NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create loan_payments table
CREATE TABLE IF NOT EXISTS loan_payments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  loan_id uuid NOT NULL REFERENCES active_loans(id) ON DELETE CASCADE,
  amount numeric NOT NULL,
  due_date timestamptz NOT NULL,
  status text NOT NULL,
  payment_date timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE loan_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE loan_offers ENABLE ROW LEVEL SECURITY;
ALTER TABLE active_loans ENABLE ROW LEVEL SECURITY;
ALTER TABLE loan_payments ENABLE ROW LEVEL SECURITY;

-- Create RLS Policies

-- Profiles policies
CREATE POLICY "Users can view their own profile"
  ON profiles
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile"
  ON profiles
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = id);

-- Loan applications policies
CREATE POLICY "Users can view their own loan applications"
  ON loan_applications
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create loan applications"
  ON loan_applications
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own loan applications"
  ON loan_applications
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id);

-- Loan offers policies
CREATE POLICY "Users can view their own loan offers"
  ON loan_offers
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

-- Active loans policies
CREATE POLICY "Users can view their own active loans"
  ON active_loans
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

-- Loan payments policies
CREATE POLICY "Users can view their own loan payments"
  ON loan_payments
  FOR SELECT
  TO authenticated
  USING (EXISTS (
    SELECT 1 FROM active_loans
    WHERE active_loans.id = loan_payments.loan_id
    AND active_loans.user_id = auth.uid()
  ));

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for updated_at
CREATE TRIGGER update_profiles_updated_at
BEFORE UPDATE ON profiles
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_loan_applications_updated_at
BEFORE UPDATE ON loan_applications
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_loan_offers_updated_at
BEFORE UPDATE ON loan_offers
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_active_loans_updated_at
BEFORE UPDATE ON active_loans
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_loan_payments_updated_at
BEFORE UPDATE ON loan_payments
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Create a trigger to create a profile after a user signs up
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, first_name, last_name)
  VALUES (
    NEW.id,
    NEW.raw_user_meta_data->>'first_name',
    NEW.raw_user_meta_data->>'last_name'
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
AFTER INSERT ON auth.users
FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();