import React from 'react';
import { Line, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { useAuth } from '../contexts/AuthContext';
import { CreditCard, DollarSign, PiggyBank, Wallet } from 'lucide-react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Dashboard = () => {
//   const { user } = useAuth();

//   const loanData = {
//     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
//     datasets: [
//       {
//         label: 'Loan Balance',
//         data: [50000, 48000, 46000, 44000, 42000, 40000],
//         borderColor: 'rgb(37, 99, 235)',
//         tension: 0.1,
//       },
//     ],
//   };

//   const portfolioData = {
//     labels: ['Personal Loan', 'Home Loan', 'Auto Loan', 'Business Loan'],
//     datasets: [
//       {
//         data: [30, 40, 20, 10],
//         backgroundColor: [
//           'rgb(37, 99, 235)',
//           'rgb(59, 130, 246)',
//           'rgb(96, 165, 250)',
//           'rgb(147, 197, 253)',
//         ],
//       },
//     ],
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 py-6">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h1 className="text-2xl font-semibold text-gray-900">Welcome back, {user?.email}</h1>
        
//         {/* Stats Overview */}
//         <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
//           <div className="bg-white overflow-hidden shadow rounded-lg">
//             <div className="p-5">
//               <div className="flex items-center">
//                 <div className="flex-shrink-0">
//                   <DollarSign className="h-6 w-6 text-gray-400" />
//                 </div>
//                 <div className="ml-5 w-0 flex-1">
//                   <dl>
//                     <dt className="text-sm font-medium text-gray-500 truncate">Total Balance</dt>
//                     <dd className="text-lg font-semibold text-gray-900">$50,000</dd>
//                   </dl>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="bg-white overflow-hidden shadow rounded-lg">
//             <div className="p-5">
//               <div className="flex items-center">
//                 <div className="flex-shrink-0">
//                   <CreditCard className="h-6 w-6 text-gray-400" />
//                 </div>
//                 <div className="ml-5 w-0 flex-1">
//                   <dl>
//                     <dt className="text-sm font-medium text-gray-500 truncate">Active Loans</dt>
//                     <dd className="text-lg font-semibold text-gray-900">3</dd>
//                   </dl>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="bg-white overflow-hidden shadow rounded-lg">
//             <div className="p-5">
//               <div className="flex items-center">
//                 <div className="flex-shrink-0">
//                   <Wallet className="h-6 w-6 text-gray-400" />
//                 </div>
//                 <div className="ml-5 w-0 flex-1">
//                   <dl>
//                     <dt className="text-sm font-medium text-gray-500 truncate">Monthly Payment</dt>
//                     <dd className="text-lg font-semibold text-gray-900">$2,000</dd>
//                   </dl>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="bg-white overflow-hidden shadow rounded-lg">
//             <div className="p-5">
//               <div className="flex items-center">
//                 <div className="flex-shrink-0">
//                   <PiggyBank className="h-6 w-6 text-gray-400" />
//                 </div>
//                 <div className="ml-5 w-0 flex-1">
//                   <dl>
//                     <dt className="text-sm font-medium text-gray-500 truncate">Interest Saved</dt>
//                     <dd className="text-lg font-semibold text-gray-900">$3,500</dd>
//                   </dl>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Charts */}
//         <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
//           <div className="bg-white p-6 rounded-lg shadow">
//             <h2 className="text-lg font-medium text-gray-900 mb-4">Loan Balance History</h2>
//             <Line data={loanData} options={{ responsive: true }} />
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow">
//             <h2 className="text-lg font-medium text-gray-900 mb-4">Loan Portfolio</h2>
//             <Doughnut data={portfolioData} options={{ responsive: true }} />
//           </div>
//         </div>

//         {/* Recent Activity */}
//         <div className="mt-8">
//           <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Activity</h2>
//           <div className="bg-white shadow overflow-hidden sm:rounded-md">
//             <ul className="divide-y divide-gray-200">
//               {[
//                 { title: 'Monthly payment processed', date: '2024-03-01', amount: '$2,000' },
//                 { title: 'Interest credit applied', date: '2024-02-28', amount: '$150' },
//                 { title: 'New loan approved', date: '2024-02-15', amount: '$25,000' },
//               ].map((activity, index) => (
//                 <li key={index}>
//                   <div className="px-4 py-4 sm:px-6">
//                     <div className="flex items-center justify-between">
//                       <p className="text-sm font-medium text-blue-600 truncate">{activity.title}</p>
//                       <div className="ml-2 flex-shrink-0 flex">
//                         <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
//                           {activity.amount}
//                         </p>
//                       </div>
//                     </div>
//                     <div className="mt-2 sm:flex sm:justify-between">
//                       <div className="sm:flex">
//                         <p className="text-sm text-gray-500">{activity.date}</p>
//                       </div>
//                     </div>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );


const { user } = useAuth();

  const loanData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Loan Balance',
        data: [50000, 48000, 46000, 44000, 42000, 40000, 39000, 37000, 35000, 33000, 31000, 29000],
        borderColor: 'rgb(37, 99, 235)',
        backgroundColor: 'rgba(37, 99, 235, 0.2)',
        tension: 0.1,
        fill: true,
      },
    ],
  };

  const portfolioData = {
    labels: ['Personal Loan', 'Home Loan', 'Auto Loan', 'Business Loan', 'Student Loan'],
    datasets: [
      {
        data: [25, 35, 20, 15, 5],
        backgroundColor: [
          'rgb(37, 99, 235)',
          'rgb(59, 130, 246)',
          'rgb(96, 165, 250)',
          'rgb(147, 197, 253)',
          'rgb(191, 219, 254)',
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Welcome back, {user?.email}</h1>
        
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5 flex items-center">
              <DollarSign className="h-6 w-6 text-gray-400" />
              <div className="ml-5">
                <dt className="text-sm font-medium text-gray-500">Total Balance</dt>
                <dd className="text-lg font-semibold text-gray-900">$50,000</dd>
              </div>
            </div>
          </div>
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5 flex items-center">
              <CreditCard className="h-6 w-6 text-gray-400" />
              <div className="ml-5">
                <dt className="text-sm font-medium text-gray-500">Active Loans</dt>
                <dd className="text-lg font-semibold text-gray-900">3</dd>
              </div>
            </div>
          </div>
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5 flex items-center">
              <Wallet className="h-6 w-6 text-gray-400" />
              <div className="ml-5">
                <dt className="text-sm font-medium text-gray-500">Monthly Payment</dt>
                <dd className="text-lg font-semibold text-gray-900">$2,000</dd>
              </div>
            </div>
          </div>
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5 flex items-center">
              <PiggyBank className="h-6 w-6 text-gray-400" />
              <div className="ml-5">
                <dt className="text-sm font-medium text-gray-500">Interest Saved</dt>
                <dd className="text-lg font-semibold text-gray-900">$3,500</dd>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Loan Balance History</h2>
            <Line data={loanData} options={{ responsive: true }} />
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Loan Portfolio</h2>
            <Doughnut data={portfolioData} options={{ responsive: true }} />
          </div>
        </div>
      </div>
    </div>
  );
}


export default Dashboard;