export interface User {
  id: string;
  email: string;
  first_name?: string;
  last_name?: string;
  phone_number?: string;
  address?: string;
  city?: string;
  state?: string;
  zip_code?: string;
  created_at: string;
}

export interface LoanApplication {
  id: string;
  user_id: string;
  loan_type: LoanType;
  loan_amount: number;
  loan_purpose: string;
  loan_term: number;
  employment_status: EmploymentStatus;
  annual_income: number;
  credit_score_range: CreditScoreRange;
  status: ApplicationStatus;
  created_at: string;
  updated_at: string;
  additional_info?: Record<string, any>;
}

export interface LoanOffer {
  id: string;
  user_id: string;
  application_id: string;
  loan_amount: number;
  interest_rate: number;
  loan_term: number;
  monthly_payment: number;
  total_repayment: number;
  status: OfferStatus;
  expires_at: string;
  created_at: string;
}

export interface ActiveLoan {
  id: string;
  user_id: string;
  application_id: string;
  offer_id: string;
  loan_amount: number;
  interest_rate: number;
  loan_term: number;
  monthly_payment: number;
  remaining_balance: number;
  next_payment_date: string;
  status: LoanStatus;
  start_date: string;
  end_date: string;
}

export interface LoanPayment {
  id: string;
  loan_id: string;
  amount: number;
  due_date: string;
  status: PaymentStatus;
  payment_date?: string;
}

export enum LoanType {
  PERSONAL = 'personal',
  HOME = 'home',
  AUTO = 'auto',
  BUSINESS = 'business',
  EDUCATION = 'education',
  DEBT_CONSOLIDATION = 'debt_consolidation',
}

export enum EmploymentStatus {
  FULL_TIME = 'full_time',
  PART_TIME = 'part_time',
  SELF_EMPLOYED = 'self_employed',
  UNEMPLOYED = 'unemployed',
  RETIRED = 'retired',
}

export enum CreditScoreRange {
  EXCELLENT = 'excellent', // 750+
  GOOD = 'good', // 700-749
  FAIR = 'fair', // 650-699
  POOR = 'poor', // 600-649
  BAD = 'bad', // Below 600
}

export enum ApplicationStatus {
  DRAFT = 'draft',
  SUBMITTED = 'submitted',
  UNDER_REVIEW = 'under_review',
  ADDITIONAL_INFO_REQUIRED = 'additional_info_required',
  APPROVED = 'approved',
  REJECTED = 'rejected',
  CANCELLED = 'cancelled',
}

export enum OfferStatus {
  PENDING = 'pending',
  ACCEPTED = 'accepted',
  REJECTED = 'rejected',
  EXPIRED = 'expired',
}

export enum LoanStatus {
  ACTIVE = 'active',
  PAID_OFF = 'paid_off',
  DEFAULTED = 'defaulted',
  CLOSED = 'closed',
}

export enum PaymentStatus {
  PENDING = 'pending',
  PAID = 'paid',
  LATE = 'late',
  MISSED = 'missed',
}