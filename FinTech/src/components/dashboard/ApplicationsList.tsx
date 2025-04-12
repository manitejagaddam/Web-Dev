import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  Search, 
  Filter, 
  ChevronDown, 
  ChevronRight,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { getUserApplications } from '../../lib/supabase';
import { LoanApplication, ApplicationStatus, LoanType } from '../../types';

const ApplicationsList: React.FC = () => {
  const { user } = useAuth();
  const [applications, setApplications] = useState<LoanApplication[]>([]);
  const [filteredApplications, setFilteredApplications] = useState<LoanApplication[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<ApplicationStatus | 'all'>('all');
  const [typeFilter, setTypeFilter] = useState<LoanType | 'all'>('all');
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const fetchApplications = async () => {
      if (!user?.id) return;
      
      try {
        setLoading(true);
        const { data, error } = await getUserApplications(user.id);
        if (error) throw error;
        setApplications(data as LoanApplication[]);
        setFilteredApplications(data as LoanApplication[]);
      } catch (error) {
        console.error('Error fetching applications:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchApplications();
  }, [user]);

  useEffect(() => {
    // Apply filters
    let result = applications;
    
    // Apply search term
    if (searchTerm) {
      result = result.filter(app => 
        app.loan_type.includes(searchTerm.toLowerCase()) ||
        app.loan_purpose.toLowerCase().includes(searchTerm.toLowerCase()) ||
        app.id.includes(searchTerm)
      );
    }
    
    // Apply status filter
    if (statusFilter !== 'all') {
      result = result.filter(app => app.status === statusFilter);
    }
    
    // Apply type filter
    if (typeFilter !== 'all') {
      result = result.filter(app => app.loan_type === typeFilter);
    }
    
    setFilteredApplications(result);
  }, [applications, searchTerm, statusFilter, typeFilter]);

  const getStatusIcon = (status: ApplicationStatus) => {
    switch (status) {
      case 'submitted':
      case 'draft':
      case 'under_review':
        return <Clock className="h-5 w-5 text-yellow-500" />;
      case 'approved':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'rejected':
        return <XCircle className="h-5 w-5 text-red-500" />;
      case 'additional_info_required':
        return <AlertCircle className="h-5 w-5 text-orange-500" />;
      default:
        return <Clock className="h-5 w-5 text-gray-500" />;
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

  return (
    <div>
      <div className="sm:flex sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Loan Applications</h1>
          <p className="mt-1 text-sm text-gray-600">
            View and manage all your loan applications
          </p>
        </div>
        <div className="mt-4 sm:mt-0">
          <Link
            to="/apply"
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <FileText className="mr-2 h-4 w-4" />
            New Application
          </Link>
        </div>
      </div>
      
      {/* Search and Filters */}
      <div className="mt-6 bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div className="relative rounded-md shadow-sm max-w-xs w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                placeholder="Search applications"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="mt-3 sm:mt-0 flex items-center">
              <button
                type="button"
                className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter className="mr-2 h-4 w-4 text-gray-500" />
                Filters
                <ChevronDown className={`ml-1 h-4 w-4 text-gray-500 transition-transform ${showFilters ? 'transform rotate-180' : ''}`} />
              </button>
            </div>
          </div>
          
          {showFilters && (
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="status-filter" className="block text-sm font-medium text-gray-700">
                  Status
                </label>
                <select
                  id="status-filter"
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value as ApplicationStatus | 'all')}
                >
                  <option value="all">All Statuses</option>
                  <option value="draft">Draft</option>
                  <option value="submitted">Submitted</option>
                  <option value="under_review">Under Review</option>
                  <option value="additional_info_required">Additional Info Required</option>
                  <option value="approved">Approved</option>
                  <option value="rejected">Rejected</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="type-filter" className="block text-sm font-medium text-gray-700">
                  Loan Type
                </label>
                <select
                  id="type-filter"
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                  value={typeFilter}
                  onChange={(e) => setTypeFilter(e.target.value as LoanType | 'all')}
                >
                  <option value="all">All Types</option>
                  <option value="personal">Personal</option>
                  <option value="home">Home</option>
                  <option value="auto">Auto</option>
                  <option value="business">Business</option>
                  <option value="education">Education</option>
                  <option value="debt_consolidation">Debt Consolidation</option>
                </select>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Applications List */}
      <div className="mt-6 bg-white shadow overflow-hidden sm:rounded-md">
        {filteredApplications.length > 0 ? (
          <ul className="divide-y divide-gray-200">
            {filteredApplications.map((application) => (
              <li key={application.id}>
                <Link to={`/dashboard/applications/${application.id}`} className="block hover:bg-gray-50">
                  <div className="px-4 py-4 sm:px-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          {getStatusIcon(application.status)}
                        </div>
                        <div className="ml-4">
                          <p className="text-sm font-medium text-blue-600 truncate">
                            {formatLoanType(application.loan_type)} Loan - ${application.loan_amount.toLocaleString()}
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            Purpose: {application.loan_purpose}
                          </p>
                        </div>
                      </div>
                      <div className="ml-2 flex-shrink-0 flex">
                        <p className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          application.status === 'approved' ? 'bg-green-100 text-green-800' :
                          application.status === 'rejected' ? 'bg-red-100 text-red-800' :
                          application.status === 'additional_info_required' ? 'bg-orange-100 text-orange-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {application.status.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                        </p>
                        <ChevronRight className="ml-2 h-5 w-5 text-gray-400" />
                      </div>
                    </div>
                    <div className="mt-2 sm:flex sm:justify-between">
                      <div className="sm:flex">
                        <p className="flex items-center text-sm text-gray-500">
                          Term: {application.loan_term} months
                        </p>
                        <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                          Credit Score: {application.credit_score_range.charAt(0).toUpperCase() + application.credit_score_range.slice(1)}
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
            ))}
          </ul>
        ) : (
          <div className="px-4 py-5 sm:p-6 text-center">
            <FileText className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-medium text-gray-900">No applications found</h3>
            <p className="mt-1 text-sm text-gray-500">
              {applications.length > 0 
                ? "No applications match your current filters." 
                : "You haven't submitted any loan applications yet."}
            </p>
            <div className="mt-6">
              <Link
                to="/apply"
                className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <FileText className="mr-2 h-4 w-4" />
                New Application
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ApplicationsList;