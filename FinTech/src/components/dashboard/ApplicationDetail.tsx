import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Clock, 
  CheckCircle, 
  XCircle, 
  AlertCircle,
  FileText,
  DollarSign,
  Calendar,
  User,
  Briefcase,
  CreditCard,
  Home,
  Car,
  Building,
  GraduationCap,
  Wallet
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { getApplicationById } from '../../lib/supabase';
import { LoanApplication, ApplicationStatus, LoanType } from '../../types';

const ApplicationDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [application, setApplication] = useState<LoanApplication | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchApplication = async () => {
      if (!id || !user?.id) return;
      
      try {
        setLoading(true);
        const { data, error } = await getApplicationById(id);
        
        if (error) throw error;
        if (!data) throw new Error('Application not found');
        
        // Verify the application belongs to the current user
        if (data.user_id !== user.id) {
          throw new Error('You do not have permission to view this application');
        }
        
        setApplication(data as LoanApplication);
      } catch (error: any) {
        console.error('Error fetching application:', error);
        setError(error.message || 'Failed to load application details');
      } finally {
        setLoading(false);
      }
    };
    
    fetchApplication();
  }, [id, user]);

  const getStatusIcon = (status: ApplicationStatus) => {
    switch (status) {
      case 'submitted':
      case 'draft':
      case 'under_review':
        return <Clock className="h-6 w-6 text-yellow-500" />;
      case 'approved':
        return <CheckCircle className="h-6 w-6 text-green-500" />;
      case 'rejected':
        return <XCircle className="h-6 w-6 text-red-500" />;
      case 'additional_info_required':
        return <AlertCircle className="h-6 w-6 text-orange-500" />;
      default:
        return <Clock className="h-6 w-6 text-gray-500" />;
    }
  };

  const getStatusClass = (status: ApplicationStatus) => {
    switch (status) {
      case 'approved':
        return 'bg-green-100 text-green-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      case 'additional_info_required':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-yellow-100 text-yellow-800';
    }
  };

  const formatStatus = (status: string) => {
    return status.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  const getLoanTypeIcon = (type: LoanType) => {
    switch (type) {
      case 'personal':
        return <User className="h-5 w-5 text-blue-500" />;
      case 'home':
        return <Home className="h-5 w-5 text-green-500" />;
      case 'auto':
        return <Car className="h-5 w-5 text-purple-500" />;
      case 'business':
        return <Building className="h-5 w-5 text-yellow-500" />;
      case 'education':
        return <GraduationCap className="h-5 w-5 text-red-500" />;
      case 'debt_consolidation':
        return <Wallet className="h-5 w-5 text-indigo-500" />;
      default:
        return <DollarSign className="h-5 w-5 text-gray-500" />;
    }
  };

  const formatLoanType = (type: string) => {
    return type.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error || !application) {
    return (
      <div className="bg-white shadow rounded-lg p-6">
        <div className="text-center">
          <XCircle className="mx-auto h-12 w-12 text-red-500" />
          <h3 className="mt-2 text-lg font-medium text-gray-900">Error</h3>
          <p className="mt-1 text-sm text-gray-500">{error || 'Application not found'}</p>
          <div className="mt-6">
            <button
              onClick={() => navigate('/dashboard/applications')}
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Applications
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6">
        <button
          onClick={() => navigate('/dashboard/applications')}
          className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700"
        >
          <ArrowLeft className="mr-1 h-4 w-4" />
          Back to Applications
        </button>
      </div>
      
      <div className="bg-white shadow rounded-lg overflow-hidden">
        {/* Header */}
        <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                {getStatusIcon(application.status)}
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  {formatLoanType(application.loan_type)} Loan Application
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  Application ID: {application.id}
                </p>
              </div>
            </div>
            <div>
              <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClass(application.status)}`}>
                {formatStatus(application.status)}
              </span>
            </div>
          </div>
        </div>
        
        {/* Application Details */}
        <div className="px-4 py-5 sm:p-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {/* Loan Details */}
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="text-base font-medium text-gray-900 mb-4">Loan Details</h4>
              <dl className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500 flex items-center">
                    {getLoanTypeIcon(application.loan_type)}
                    <span className="ml-2">Loan Type</span>
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900">{formatLoanType(application.loan_type)}</dd>
                </div>
                
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500 flex items-center">
                    <DollarSign className="h-5 w-5 text-gray-400" />
                    <span className="ml-2">Loan Amount</span>
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900">${application.loan_amount.toLocaleString()}</dd>
                </div>
                
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500 flex items-center">
                    <Calendar className="h-5 w-5 text-gray-400" />
                    <span className="ml-2">Loan Term</span>
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900">{application.loan_term} months</dd>
                </div>
                
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500 flex items-center">
                    <FileText className="h-5 w-5 text-gray-400" />
                    <span className="ml-2">Purpose</span>
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900">{application.loan_purpose}</dd>
                </div>
                
                <div className="sm:col-span-2">
                  <dt className="text-sm font-medium text-gray-500 flex items-center">
                    <Clock className="h-5 w-5 text-gray-400" />
                    <span className="ml-2">Application Date</span>
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900">{new Date(application.created_at).toLocaleDateString()} at {new Date(application.created_at).toLocaleTimeString()}</dd>
                </div>
              </dl>
            </div>
            
            {/* Financial Information */}
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="text-base font-medium text-gray-900 mb-4">Financial Information</h4>
              <dl className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500 flex items-center">
                    <Briefcase className="h-5 w-5 text-gray-400" />
                    <span className="ml-2">Employment Status</span>
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900">{application.employment_status.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</dd>
                </div>
                
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500 flex items-center">
                    <DollarSign className="h-5 w-5 text-gray-400" />
                    <span className="ml-2">Annual Income</span>
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900">${application.annual_income.toLocaleString()}</dd>
                </div>
                
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500 flex items-center">
                    <CreditCard className="h-5 w-5 text-gray-400" />
                    <span className="ml-2">Credit Score Range</span>
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900">{application.credit_score_range.charAt(0).toUpperCase() + application.credit_score_range.slice(1)}</dd>
                </div>
              </dl>
            </div>
          </div>
          
          {/* Application Status Timeline */}
          <div className="mt-8">
            <h4 className="text-base font-medium text-gray-900 mb-4">Application Timeline</h4>
            <div className="flow-root">
              <ul className="-mb-8">
                <li>
                  <div className="relative pb-8">
                    <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
                    <div className="relative flex space-x-3">
                      <div>
                        <span className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center ring-8 ring-white">
                          <FileText className="h-5 w-5 text-white" />
                        </span>
                      </div>
                      <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                        <div>
                          <p className="text-sm text-gray-500">Application <span className="font-medium text-gray-900">submitted</span></p>
                        </div>
                        <div className="text-right text-sm whitespace-nowrap text-gray-500">
                          {new Date(application.created_at).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                
                <li>
                  <div className="relative pb-8">
                    <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
                    <div className="relative flex space-x-3">
                      <div>
                        <span className="h-8 w-8 rounded-full bg-yellow-500 flex items-center justify-center ring-8 ring-white">
                          <Clock className="h-5 w-5 text-white" />
                        </span>
                      </div>
                      <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                        <div>
                          <p className="text-sm text-gray-500">Application <span className="font-medium text-gray-900">under review</span></p>
                        </div>
                        <div className="text-right text-sm whitespace-nowrap text-gray-500">
                          {new Date(application.updated_at).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                
                {application.status === 'approved' && (
                  <li>
                    <div className="relative">
                      <div className="relative flex space-x-3">
                        <div>
                          <span className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center ring-8 ring-white">
                            <CheckCircle className="h-5 w-5 text-white" />
                          </span>
                        </div>
                        <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                          <div>
                            <p className="text-sm text-gray-500">Application <span className="font-medium text-gray-900">approved</span></p>
                          </div>
                          <div className="text-right text-sm whitespace-nowrap text-gray-500">
                            {new Date(application.updated_at).toLocaleDateString()}
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                )}
                
                {application.status === 'rejected' && (
                  <li>
                    <div className="relative">
                      <div className="relative flex space-x-3">
                        <div>
                          <span className="h-8 w-8 rounded-full bg-red-500 flex items-center justify-center ring-8 ring-white">
                            <XCircle className="h-5 w-5 text-white" />
                          </span>
                        </div>
                        <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                          <div>
                            <p className="text-sm text-gray-500">Application <span className="font-medium text-gray-900">rejected</span></p>
                          </div>
                          <div className="text-right text-sm whitespace-nowrap text-gray-500">
                            {new Date(application.updated_at).toLocaleDateString()}
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                )}
                
                {application.status === 'additional_info_required' && (
                  <li>
                    <div className="relative">
                      <div className="relative flex space-x-3">
                        <div>
                          <span className="h-8 w-8 rounded-full bg-orange-500 flex items-center justify-center ring-8 ring-white">
                            <AlertCircle className="h-5 w-5 text-white" />
                          </span>
                        </div>
                        <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                          <div>
                            <p className="text-sm text-gray-500"><span className="font-medium text-gray-900">Additional information</span> required</p>
                          </div>
                          <div className="text-right text-sm whitespace-nowrap text-gray-500">
                            {new Date(application.updated_at).toLocaleDateString()}
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                )}
              </ul>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row sm:space-x-4">
            {application.status === 'additional_info_required' && (
              <Link
                to={`/dashboard/applications/${application.id}/update`}
                className="inline-flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Provide Additional Information
              </Link>
            )}
            
            {application.status === 'approved' && (
              <Link
                to={`/dashboard/offers`}
                className="inline-flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                View Loan Offers
              </Link>
            )}
            
            {application.status === 'rejected' && (
              <Link
                to="/apply"
                className="inline-flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Apply for a New Loan
              </Link>
            )}
            
            <button
              onClick={() => window.print()}
              className="mt-3 sm:mt-0 inline-flex justify-center items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Print Application
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationDetail;