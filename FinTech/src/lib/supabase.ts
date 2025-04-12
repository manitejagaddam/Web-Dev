import { createClient } from '@supabase/supabase-js';
import bcrypt from "bcryptjs";

// Initialize the Supabase client
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase credentials. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY environment variables.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Auth functions
export const signUp = async (email: string, password: string, username: string) => {
  // Hash the password before storing it
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  // Insert user details into the 'auth_users' table
  const { data, error } = await supabase
    .from("auth_users")
    .insert([{ email, username, hashed_password: hashedPassword }])
    .select();

  if (error) {
    return { data: null, error };
  }

  return { data, error: null };
};

export const signIn = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  return { data, error };
};

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  return { error };
};

export const getCurrentUser = async () => {
  const { data, error } = await supabase.auth.getUser();
  return { user: data.user, error };
};

// Loan application functions
export const submitLoanApplication = async (applicationData: any) => {
  const { data, error } = await supabase
    .from('loan_applications')
    .insert([applicationData])
    .select();
  return { data, error };
};

export const getUserApplications = async (userId: string) => {
  const { data, error } = await supabase
    .from('loan_applications')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false });
  return { data, error };
};

export const getApplicationById = async (applicationId: string) => {
  const { data, error } = await supabase
    .from('loan_applications')
    .select('*')
    .eq('id', applicationId)
    .single();
  return { data, error };
};

// User profile functions
export const updateUserProfile = async (userId: string, profileData: any) => {
  const { data, error } = await supabase
    .from('profiles')
    .update(profileData)
    .eq('id', userId)
    .select();
  return { data, error };
};

export const getUserProfile = async (userId: string) => {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single();
  return { data, error };
};

// Loan offers functions
export const getUserLoanOffers = async (userId: string) => {
  const { data, error } = await supabase
    .from('loan_offers')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false });
  return { data, error };
};

// Active loans functions
export const getUserActiveLoans = async (userId: string) => {
  const { data, error } = await supabase
    .from('active_loans')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false });
  return { data, error };
};

export const getLoanPaymentSchedule = async (loanId: string) => {
  const { data, error } = await supabase
    .from('loan_payments')
    .select('*')
    .eq('loan_id', loanId)
    .order('due_date', { ascending: true });
  return { data, error };
};