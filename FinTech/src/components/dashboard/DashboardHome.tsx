import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "../ui/Card";

import { Bar, Pie } from "react-chartjs-2";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  ArcElement
);
import { 
  FileText, 
  CreditCard, 
  DollarSign, 
  AlertCircle, 
  ChevronRight,
  TrendingUp,
  Calendar,
  CheckCircle
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { 
  getUserApplications, 
  getUserLoanOffers, 
  getUserActiveLoans 
} from '../../lib/supabase';
import { LoanApplication, LoanOffer, ActiveLoan } from '../../types';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const DashboardHome: React.FC = () => {
  const { user } = useAuth();
  const [applications, setApplications] = useState<LoanApplication[]>([]);
  const [offers, setOffers] = useState<LoanOffer[]>([]);
  const [loans, setLoans] = useState<ActiveLoan[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      if (!user?.id) return;
      
      try {
        setLoading(true);
        
        // Fetch applications
        const { data: applicationsData, error: applicationsError } = await getUserApplications(user.id);
        if (applicationsError) throw applicationsError;
        setApplications(applicationsData as LoanApplication[]);
        
        // Fetch offers
        const { data: offersData, error: offersError } = await getUserLoanOffers(user.id);
        if (offersError) throw offersError;
        setOffers(offersData as LoanOffer[]);
        
        // Fetch active loans
        const { data: loansData, error: loansError } = await getUserActiveLoans(user.id);
        if (loansError) throw loansError;
        setLoans(loansData as ActiveLoan[]);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchDashboardData();
  }, [user]);

  // Calculate total loan amount
  const totalLoanAmount = loans.reduce((sum, loan) => sum + loan.loan_amount, 0);
  
  // Calculate total remaining balance
  const totalRemainingBalance = loans.reduce((sum, loan) => sum + loan.remaining_balance, 0);
  
  // Calculate next payment
  const nextPayment = loans.length > 0 
    ? loans.reduce((nearest, loan) => {
        if (!nearest) return loan;
        return new Date(loan.next_payment_date) < new Date(nearest.next_payment_date) ? loan : nearest;
      }, null as ActiveLoan | null)
    : null;

  // Chart data for loan balance over time
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Loan Balance',
        data: [totalLoanAmount, totalLoanAmount * 0.95, totalLoanAmount * 0.9, totalLoanAmount * 0.85, totalLoanAmount * 0.8, totalLoanAmount * 0.75],
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
        tension: 0.3,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Loan Balance Trend',
      },
    },
    scales: {
      y: {
        beginAtZero: false,
      },
    },
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  const totalApplications = 3;
  const totalRepayments = 45000;
  const barData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Loan Repayments (₹)",
        data: [2000, 3000, 2500, 4000, 3500],
        backgroundColor: "#4caf50",
      },
    ],
  };

  const pieData = {
    labels: ["Personal Loan", "Business Loan", "Home Loan"],
    datasets: [
      {
        data: [40, 30, 30],
        backgroundColor: ["#f39c12", "#3498db", "#e74c3c"],
      },
    ],
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
      <p className="mt-1 text-sm text-gray-600">
        Welcome back, {user?.first_name || 'User'}! Here's an overview of your financial status.
      </p>
      
      {/* Quick Stats */}
      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-blue-100 rounded-md p-3">
                <FileText className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Applications</dt>
                  <dd className="flex items-baseline">
                    <div className="text-2xl font-semibold text-gray-900">{applications.length}</div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-4 sm:px-6">
            <div className="text-sm">
              <Link to="/dashboard/applications" className="font-medium text-blue-600 hover:text-blue-500">
                View all<span className="sr-only"> applications</span>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-green-100 rounded-md p-3">
                <CreditCard className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Loan Offers</dt>
                  <dd className="flex items-baseline">
                    <div className="text-2xl font-semibold text-gray-900">{offers.length}</div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-4 sm:px-6">
            <div className="text-sm">
              <Link to="/dashboard/offers" className="font-medium text-blue-600 hover:text-blue-500">
                View all<span className="sr-only"> offers</span>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-purple-100 rounded-md p-3">
                <DollarSign className="h-6 w-6 text-purple-600" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Active Loans</dt>
                  <dd className="flex items-baseline">
                    <div className="text-2xl font-semibold text-gray-900">{loans.length}</div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-4 sm:px-6">
            <div className="text-sm">
              <Link to="/dashboard/loans" className="font-medium text-blue-600 hover:text-blue-500">
                View all<span className="sr-only"> loans</span>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-yellow-100 rounded-md p-3">
                <TrendingUp className="h-6 w-6 text-yellow-600" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Total Balance</dt>
                  <dd className="flex items-baseline">
                    <div className="text-2xl font-semibold text-gray-900">
                      ₹{totalRemainingBalance.toLocaleString()}
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-4 sm:px-6">
            <div className="text-sm">
              <Link to="/dashboard/payments" className="font-medium text-blue-600 hover:text-blue-500">
                View details<span className="sr-only"> of balance</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Loan Balance Chart */}
      <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <Card>
          <CardContent>
            <h3 className="text-lg font-semibold">Total Applications</h3>
            <p className="text-2xl font-bold">{totalApplications}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <h3 className="text-lg font-semibold">Total Repayments</h3>
            <p className="text-2xl font-bold">₹{totalRepayments}</p>
          </CardContent>
        </Card>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <Card>
          <CardContent>
            <h3 className="text-lg font-semibold mb-2">Loan Repayments Over Time</h3>
            <Bar data={barData} />
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <h3 className="text-lg font-semibold mb-2">Loan Type Distribution</h3>
            <Pie data={pieData} />
          </CardContent>
        </Card>
      </div>
    </div>
      <div className="mt-8">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Loan Balance Overview</h2>
          <div className="h-64">
            {totalLoanAmount > 0 ? (
              <Line options={chartOptions} data={chartData} />
            ) : (
              <div className="flex items-center justify-center h-full">
                <p className="text-gray-500">No active loans to display</p>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Recent Applications */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900">Recent Applications</h3>
          </div>
          <div className="overflow-hidden">
            <ul className="divide-y divide-gray-200">
              {applications.length > 0 ? (
                applications.slice(0, 3).map((application) => (
                  <li key={application.id}>
                    <Link to={`/dashboard/applications/₹{application.id}`} className="block hover:bg-gray-50">
                      <div className="px-4 py-4 sm:px-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <p className="text-sm font-medium text-blue-600 truncate">
                              {application.loan_type.charAt(0).toUpperCase() + application.loan_type.slice(1)} Loan
                            </p>
                            <div className={`ml-2 flex-shrink-0 inline-block px-2 py-0.5 text-xs font-medium rounded-full ₹{
                              application.status === 'approved' ? 'bg-green-100 text-green-800' :
                              application.status === 'rejected' ? 'bg-red-100 text-red-800' :
                              'bg-yellow-100 text-yellow-800'
                            }`}>
                              {application.status.charAt(0).toUpperCase() + application.status.slice(1)}
                            </div>
                          </div>
                          <div className="ml-2 flex-shrink-0 flex">
                            <ChevronRight className="h-5 w-5 text-gray-400" />
                          </div>
                        </div>
                        <div className="mt-2 sm:flex sm:justify-between">
                          <div className="sm:flex">
                            <p className="flex items-center text-sm text-gray-500">
                              ₹{application.loan_amount.toLocaleString()} • {application.loan_term} months
                            </p>
                          </div>
                          <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                            <p>
                              Applied on {new Date(application.created_at).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </li>
                ))
              ) : (
                <li className="px-4 py-5 sm:px-6 text-center text-gray-500">
                  No applications yet.{' '}
                  <Link to="/apply" className="text-blue-600 hover:text-blue-500">
                    Apply for a loan
                  </Link>
                </li>
              )}
            </ul>
            {applications.length > 3 && (
              <div className="bg-gray-50 px-4 py-4 sm:px-6">
                <div className="text-sm">
                  <Link to="/dashboard/applications" className="font-medium text-blue-600 hover:text-blue-500">
                    View all applications<span className="sr-only"> applications</span>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Upcoming Payments */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900">Upcoming Payments</h3>
          </div>
          <div className="overflow-hidden">
            {nextPayment ? (
              <div className="px-4 py-5 sm:p-6">
                <div className="sm:flex sm:items-center sm:justify-between">
                  <div className="sm:flex sm:items-center">
                    <div className="flex-shrink-0 rounded-md bg-blue-100 p-3">
                      <Calendar className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        Next payment due
                      </div>
                      <div className="mt-1 text-sm text-gray-600">
                        {new Date(nextPayment.next_payment_date).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 sm:mt-0">
                    <span className="text-xl font-bold text-gray-900">₹{nextPayment.monthly_payment.toLocaleString()}</span>
                  </div>
                </div>
                
                <div className="mt-6">
                  <div className="bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className="h-2 bg-blue-600 rounded-full" 
                      style={{ width: `₹{(1 - (nextPayment.remaining_balance / nextPayment.loan_amount)) * 100}%` }}
                    ></div>
                  </div>
                  <div className="mt-2 flex justify-between text-sm text-gray-600">
                    <div>Progress</div>
                    <div>{Math.round((1 - (nextPayment.remaining_balance / nextPayment.loan_amount)) * 100)}% paid</div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <Link
                    to={`/dashboard/loans/₹{nextPayment.id}`}
                    className="w-full flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    View payment details
                  </Link>
                </div>
              </div>
            ) : (
              <div className="px-4 py-5 sm:p-6 text-center">
                <div className="rounded-full bg-gray-100 flex items-center justify-center mx-auto h-12 w-12">
                  <CheckCircle className="h-6 w-6 text-gray-400" />
                </div>
                <h3 className="mt-2 text-sm font-medium text-gray-900">No upcoming payments</h3>
                <p className="mt-1 text-sm text-gray-500">
                  You don't have any active loans with upcoming payments.
                </p>
                <div className="mt-6">
                  <Link
                    to="/apply"
                    className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Apply for a loan
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Personalized Recommendations */}
      <div className="mt-8 bg-white shadow rounded-lg overflow-hidden">
        <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">Personalized Recommendations</h3>
        </div>
        <div className="px-4 py-5 sm:p-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-3">
                <div className="flex-shrink-0 bg-green-100 rounded-md p-2">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                </div>
                <h4 className="ml-3 text-sm font-medium text-gray-900">Debt Consolidation</h4>
              </div>
              <p className="text-sm text-gray-600">Consolidate your high-interest debts into a single, lower-interest loan.</p>
              <div className="mt-4">
                <Link
                  to="/apply?type=debt_consolidation"
                  className="text-sm font-medium text-blue-600 hover:text-blue-500"
                >
                  Learn more <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-3">
                <div className="flex-shrink-0 bg-purple-100 rounded-md p-2">
                  <DollarSign className="h-5 w-5 text-purple-600" />
                </div>
                <h4 className="ml-3 text-sm font-medium text-gray-900">Personal Loan</h4>
              </div>
              <p className="text-sm text-gray-600">Get funds for personal expenses with competitive interest rates.</p>
              <div className="mt-4">
                <Link
                  to="/apply?type=personal"
                  className="text-sm font-medium text-blue-600 hover:text-blue-500"
                >
                  Learn more <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-3">
                <div className="flex-shrink-0 bg-blue-100 rounded-md p-2">
                  <AlertCircle className="h-5 w-5 text-blue-600" />
                </div>
                <h4 className="ml-3 text-sm font-medium text-gray-900">Credit Score Tips</h4>
              </div>
              <p className="text-sm text-gray-600">Learn how to improve your credit score and qualify for better rates.</p>
              <div className="mt-4">
                <Link
                  to="/resources/credit-score"
                  className="text-sm font-medium text-blue-600 hover:text-blue-500"
                >
                  Learn more <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;