// // import { useState } from "react";
// // import { useQuery } from "@tanstack/react-query";
// // import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/Card";
// // import { Input } from "../components/ui/input";
// // import  Button  from "../components/ui/Button";
// // import { useToast } from "../hooks/use-toast";
// // import { 
// //   Table,
// //   TableBody,
// //   TableCell,
// //   TableHead,
// //   TableHeader,
// //   TableRow,
// // } from "../components/ui/table";
// // import { Skeleton } from "../components/ui/skeleton";

// // interface LoanTracking {
// //   id: string;
// //   amount: number;
// //   rate: number;
// //   duration: number;
// //   paid: number;
// //   nextPayment: string;
// //   status: string;
// //   totalPayments: number;
// //   paidPayments: number;
// //   delayedPayments: number;
// // }

// // export default function LoanTrackings() {
// //   const [loanId, setLoanId] = useState("");
// //   const { toast } = useToast();

// //   // Mock data based on the example image
// //   const mockRepayment: LoanTracking = {
// //     id: "E4C9077F",
// //     amount: 16.37,
// //     rate: 48,
// //     duration: 180,
// //     paid: 24177.03,
// //     nextPayment: "####",
// //     status: "Active",
// //     totalPayments: 48,
// //     paidPayments: 24,
// //     delayedPayments: 0
// //   };

// //   const { data: repayment, isLoading } = useQuery<LoanTracking>({
// //     queryKey: [`/api/loans/${loanId}/repayments`],
// //     enabled: !!loanId
// //   });

// //   const handleSearch = () => {
// //     if (!loanId) {
// //       toast({
// //         variant: "destructive",
// //         title: "Error",
// //         description: "Please enter a loan ID"
// //       });
// //       return;
// //     }
// //     // The query will automatically refetch when loanId changes
// //   };

// //   return (
// //     <div className="container mx-auto px-4 py-12">
// //       <h1 className="text-4xl font-bold mb-8">Loan Repayments</h1>

// //       <Card className="mb-8">
// //         <CardContent className="pt-6">
// //           <div className="flex gap-4">
// //             <Input 
// //               placeholder="Enter Loan ID" 
// //               value={loanId}
// //               onChange={(e) => setLoanId(e.target.value)}
// //               className="max-w-xs"
// //             />
// //             <Button onClick={handleSearch}>Search</Button>
// //           </div>
// //         </CardContent>
// //       </Card>

// //       {isLoading ? (
// //         <Card>
// //           <CardContent className="pt-6">
// //             <Skeleton className="h-[200px] w-full" />
// //           </CardContent>
// //         </Card>
// //       ) : repayment ? (
// //         <div className="space-y-6">
// //           <Card>
// //             <CardHeader>
// //               <CardTitle>Loan Details</CardTitle>
// //             </CardHeader>
// //             <CardContent>
// //               <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
// //                 <div>
// //                   <p className="text-sm text-gray-500">Loan ID</p>
// //                   <p className="font-medium">{repayment.id}</p>
// //                 </div>
// //                 <div>
// //                   <p className="text-sm text-gray-500">Amount</p>
// //                   <p className="font-medium">${repayment.amount}</p>
// //                 </div>
// //                 <div>
// //                   <p className="text-sm text-gray-500">Interest Rate</p>
// //                   <p className="font-medium">{repayment.rate}%</p>
// //                 </div>
// //                 <div>
// //                   <p className="text-sm text-gray-500">Duration</p>
// //                   <p className="font-medium">{repayment.duration} months</p>
// //                 </div>
// //               </div>
// //             </CardContent>
// //           </Card>

// //           <Card>
// //             <CardHeader>
// //               <CardTitle>Payment Status</CardTitle>
// //             </CardHeader>
// //             <CardContent>
// //               <div className="overflow-x-auto">
// //                 <Table>
// //                   <TableHeader>
// //                     <TableRow>
// //                       <TableHead>Total Amount</TableHead>
// //                       <TableHead>Amount Paid</TableHead>
// //                       <TableHead>Next Payment</TableHead>
// //                       <TableHead>Status</TableHead>
// //                     </TableRow>
// //                   </TableHeader>
// //                   <TableBody>
// //                     <TableRow>
// //                       <TableCell>${repayment.amount.toLocaleString()}</TableCell>
// //                       <TableCell>${repayment.paid.toLocaleString()}</TableCell>
// //                       <TableCell>{repayment.nextPayment}</TableCell>
// //                       <TableCell>
// //                         <span className="text-green-600">{repayment.status}</span>
// //                       </TableCell>
// //                     </TableRow>
// //                   </TableBody>
// //                 </Table>
// //               </div>
// //             </CardContent>
// //           </Card>

// //           <Card>
// //             <CardHeader>
// //               <CardTitle>Payment History</CardTitle>
// //             </CardHeader>
// //             <CardContent>
// //               <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
// //                 <div className="bg-blue-50 p-4 rounded-lg">
// //                   <p className="text-sm text-blue-600">Total Payments</p>
// //                   <p className="text-2xl font-bold">{repayment.totalPayments}</p>
// //                 </div>
// //                 <div className="bg-green-50 p-4 rounded-lg">
// //                   <p className="text-sm text-green-600">Paid</p>
// //                   <p className="text-2xl font-bold">{repayment.paidPayments}</p>
// //                 </div>
// //                 <div className="bg-red-50 p-4 rounded-lg">
// //                   <p className="text-sm text-red-600">Delayed</p>
// //                   <p className="text-2xl font-bold">{repayment.delayedPayments}</p>
// //                 </div>
// //               </div>
// //             </CardContent>
// //           </Card>
// //         </div>
// //       ) : null}
// //     </div>
// //   );
// // }




// import { useState } from "react";
// import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/Card";
// import { Input } from "../components/ui/input";
// import Button from "../components/ui/Button";
// import { 
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "../components/ui/table";
// import { PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from "recharts";

// interface LoanTracking {
//   id: string;
//   amount: number;
//   rate: number;
//   duration: number;
//   paid: number;
//   nextPayment: string;
//   status: string;
//   totalPayments: number;
//   paidPayments: number;
//   delayedPayments: number;
// }

// export default function LoanTrackings() {
//   const [loanId, setLoanId] = useState("");

//   // Static Loan Data
//   const staticRepayment: LoanTracking = {
//     id: "143    ",
//     amount: 50000,
//     rate: 5.5,
//     duration: 24,
//     paid: 20000,
//     nextPayment: "March 15, 2025",
//     status: "Active",
//     totalPayments: 24,
//     paidPayments: 12,
//     delayedPayments: 2
//   };

//   // Data for Pie Chart
//   const pieData = [
//     { name: "Paid", value: staticRepayment.paid },
//     { name: "Remaining", value: staticRepayment.amount - staticRepayment.paid },
//   ];

//   const COLORS = ["#4CAF50", "#F44336"];

//   // Data for Line Chart (Mock Payment History)
//   const paymentHistory = [
//     { month: "Jan", paid: 2000, delayed: 0 },
//     { month: "Feb", paid: 2000, delayed: 1 },
//     { month: "Mar", paid: 2000, delayed: 0 },
//     { month: "Apr", paid: 2000, delayed: 1 },
//     { month: "May", paid: 2000, delayed: 0 },
//     { month: "Jun", paid: 2000, delayed: 0 },
//   ];

//   return (
//     <div className="container mx-auto px-4 py-12">
//       <h1 className="text-4xl font-bold mb-8">Loan Tracking</h1>

//       <Card className="mb-8">
//         <CardContent className="pt-6">
//           <div className="flex gap-4">
//             <Input 
//               placeholder="Enter Loan ID" 
//               value={loanId}
//               onChange={(e) => setLoanId(e.target.value)}
//               className="max-w-xs"
//             />
//             <Button onClick={() => {}}>Search</Button>
//           </div>
//         </CardContent>
//       </Card>

//       <div className="space-y-6">
//         <Card>
//           <CardHeader>
//             <CardTitle>Loan Details</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//               <div>
//                 <p className="text-sm text-gray-500">Loan ID</p>
//                 <p className="font-medium">{staticRepayment.id}</p>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-500">Amount</p>
//                 <p className="font-medium">${staticRepayment.amount.toLocaleString()}</p>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-500">Interest Rate</p>
//                 <p className="font-medium">{staticRepayment.rate}%</p>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-500">Duration</p>
//                 <p className="font-medium">{staticRepayment.duration} months</p>
//               </div>
//             </div>
//           </CardContent>
//         </Card>

//         <Card>
//           <CardHeader>
//             <CardTitle>Payment Status</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="overflow-x-auto">
//               <Table>
//                 <TableHeader>
//                   <TableRow>
//                     <TableHead>Total Amount</TableHead>
//                     <TableHead>Amount Paid</TableHead>
//                     <TableHead>Next Payment</TableHead>
//                     <TableHead>Status</TableHead>
//                   </TableRow>
//                 </TableHeader>
//                 <TableBody>
//                   <TableRow>
//                     <TableCell>${staticRepayment.amount.toLocaleString()}</TableCell>
//                     <TableCell>${staticRepayment.paid.toLocaleString()}</TableCell>
//                     <TableCell>{staticRepayment.nextPayment}</TableCell>
//                     <TableCell>
//                       <span className="text-green-600">{staticRepayment.status}</span>
//                     </TableCell>
//                   </TableRow>
//                 </TableBody>
//               </Table>
//             </div>
//           </CardContent>
//         </Card>

//         {/* Pie Chart for Loan Payment Breakdown */}
//         <Card>
//           <CardHeader>
//             <CardTitle>Loan Payment Breakdown</CardTitle>
//           </CardHeader>
//           <CardContent className="flex justify-center">
//             <PieChart width={400} height={300}>
//               <Pie
//                 data={pieData}
//                 cx="50%"
//                 cy="50%"
//                 innerRadius={60}
//                 outerRadius={100}
//                 fill="#8884d8"
//                 paddingAngle={5}
//                 dataKey="value"
//               >
//                 {pieData.map((entry, index) => (
//                   <Cell key={`cell-${index}`} fill={COLORS[index]} />
//                 ))}
//               </Pie>
//               <Tooltip />
//               <Legend />
//             </PieChart>
//           </CardContent>
//         </Card>

//         {/* Line Chart for Payment History */}
//         <Card>
//           <CardHeader>
//             <CardTitle>Payment History</CardTitle>
//           </CardHeader>
//           <CardContent className="flex justify-center">
//             <LineChart width={500} height={300} data={paymentHistory}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="month" />
//               <YAxis />
//               <Tooltip />
//               <Legend />
//               <Line type="monotone" dataKey="paid" stroke="#4CAF50" strokeWidth={2} />
//               <Line type="monotone" dataKey="delayed" stroke="#F44336" strokeWidth={2} />
//             </LineChart>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// }

// import { useState } from "react";
// import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/Card";
// import { Input } from "../components/ui/input";
// import Button from "../components/ui/Button";
// import { 
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "../components/ui/table";
// import { PieChart, Pie, Cell, Tooltip, Legend, BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";

// interface LoanTracking {
//   id: string;
//   amount: number;
//   rate: number;
//   duration: number;
//   paid: number;
//   nextPayment: string;
//   status: string;
//   totalPayments: number;
//   paidPayments: number;
//   delayedPayments: number;
//   type: string;
//   remainingAmount: number;
//   lastEmiDate: string;
//   monthlyEmi: number;
// }

// const calculateEMI = (amount: number, rate: number, duration: number): number => {
//   const monthlyRate = rate / 12 / 100;
//   return Math.round((amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -duration)));
// };

// const loanData: LoanTracking[] = [
//   { id: "101", amount: 50000, rate: 5.5, duration: 24, paid: 20000, nextPayment: "March 15, 2025", status: "Active", totalPayments: 24, paidPayments: 12, delayedPayments: 2, type: "Home Loan", remainingAmount: 30000, lastEmiDate: "March 15, 2027", monthlyEmi: calculateEMI(50000, 5.5, 24) },
//   { id: "102", amount: 75000, rate: 4.8, duration: 36, paid: 30000, nextPayment: "April 10, 2025", status: "Active", totalPayments: 36, paidPayments: 18, delayedPayments: 1, type: "Car Loan", remainingAmount: 45000, lastEmiDate: "April 10, 2028", monthlyEmi: calculateEMI(75000, 4.8, 36) },
//   { id: "103", amount: 100000, rate: 6.2, duration: 48, paid: 50000, nextPayment: "May 20, 2025", status: "Active", totalPayments: 48, paidPayments: 24, delayedPayments: 3, type: "Personal Loan", remainingAmount: 50000, lastEmiDate: "May 20, 2029", monthlyEmi: calculateEMI(100000, 6.2, 48) },
//   { id: "104", amount: 25000, rate: 3.5, duration: 12, paid: 12000, nextPayment: "June 5, 2025", status: "Completed", totalPayments: 12, paidPayments: 12, delayedPayments: 0, type: "Education Loan", remainingAmount: 0, lastEmiDate: "June 5, 2026", monthlyEmi: calculateEMI(25000, 3.5, 12) },
//   { id: "105", amount: 40000, rate: 5.0, duration: 18, paid: 15000, nextPayment: "July 8, 2025", status: "Delayed", totalPayments: 18, paidPayments: 9, delayedPayments: 4, type: "Business Loan", remainingAmount: 25000, lastEmiDate: "July 8, 2027", monthlyEmi: calculateEMI(40000, 5.0, 18) },
// ];

// export default function LoanTrackings() {
//   const [loanId, setLoanId] = useState("");
//   const [selectedLoan, setSelectedLoan] = useState<LoanTracking | null>(null);

//   const handleSearch = () => {
//     const foundLoan = loanData.find((loan) => loan.id === loanId);
//     setSelectedLoan(foundLoan || null);
//   };

//   return (
//     <div className="container mx-auto px-4 py-12">
//       <h1 className="text-4xl font-bold mb-8">Loan Tracking</h1>

//       <Card className="mb-8">
//         <CardContent className="pt-6">
//           <div className="flex gap-4">
//             <Input 
//               placeholder="Enter Loan ID" 
//               value={loanId}
//               onChange={(e) => setLoanId(e.target.value)}
//               className="max-w-xs"
//             />
//             <Button onClick={handleSearch}>Search</Button>
//           </div>
//         </CardContent>
//       </Card>

//       {selectedLoan && (
//         <div className="space-y-6">
//           <Card>
//             <CardHeader>
//               <CardTitle>Loan Details</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                 <div>
//                   <p className="text-sm text-gray-500">Loan ID</p>
//                   <p className="font-medium">{selectedLoan.id}</p>
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500">Type</p>
//                   <p className="font-medium">{selectedLoan.type}</p>
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500">Monthly EMI</p>
//                   <p className="font-medium">${selectedLoan.monthlyEmi.toLocaleString()}</p>
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500">Last EMI Date</p>
//                   <p className="font-medium">{selectedLoan.lastEmiDate}</p>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>

//           <Card>
//             <CardHeader>
//               <CardTitle>Loan Payment Breakdown</CardTitle>
//             </CardHeader>
//             <CardContent className="flex justify-center">
//               <PieChart width={400} height={300}>
//                 <Pie
//                   data={[{ name: "Paid", value: selectedLoan.paid }, { name: "Remaining", value: selectedLoan.remainingAmount }]}
//                   cx="50%"
//                   cy="50%"
//                   innerRadius={60}
//                   outerRadius={100}
//                   fill="#8884d8"
//                   paddingAngle={5}
//                   dataKey="value"
//                 >
//                   <Cell fill="#4CAF50" />
//                   <Cell fill="#F44336" />
//                 </Pie>
//                 <Tooltip />
//                 <Legend />
//               </PieChart>
//             </CardContent>
//           </Card>

//           <Card>
//             <CardHeader>
//               <CardTitle>Payment History</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <BarChart width={400} height={300} data={[{ name: "Paid EMI", value: selectedLoan.paidPayments }, { name: "Delayed EMI", value: selectedLoan.delayedPayments }]}> 
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="name" />
//                 <YAxis />
//                 <Tooltip />
//                 <Bar dataKey="value" fill="#82ca9d" />
//               </BarChart>
//             </CardContent>
//           </Card>
//         </div>
//       )}
//     </div>
//   );
// }




import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/Card";
import { Input } from "../components/ui/input";
import  Button  from "../components/ui/Button";
import { useToast } from "../hooks/use-toast";
import { Progress } from "../components/ui/progress";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import { Search, AlertCircle, CheckCircle, Clock } from "lucide-react";

// Helper function to calculate EMI
const calculateEMI = (principal: number, rate: number, tenure: number) => {
  const monthlyRate = rate / (12 * 100);
  const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, tenure)) / 
              (Math.pow(1 + monthlyRate, tenure) - 1);
  return Math.round(emi);
};

interface LoanTracking {
  id: string;
  amount: number;
  rate: number;
  duration: number;
  paid: number;
  nextPayment: string;
  status: string;
  totalPayments: number;
  paidPayments: number;
  delayedPayments: number;
  type: string;
  remainingAmount: number;
  lastEmiDate: string;
  monthlyEmi: number;
}

export default function LoanTracking() {
  const [loanId, setLoanId] = useState("");
  const { toast } = useToast();

  // Mock data array with 5 loans
  const mockLoans: LoanTracking[] = [
    {
      id: "101",
      amount: 50000,
      rate: 5.5,
      duration: 24,
      paid: 20000,
      nextPayment: "March 15, 2025",
      status: "Active",
      totalPayments: 24,
      paidPayments: 12,
      delayedPayments: 2,
      type: "Home Loan",
      remainingAmount: 30000,
      lastEmiDate: "March 15, 2027",
      monthlyEmi: calculateEMI(50000, 5.5, 24)
    },
    {
      id: "102",
      amount: 75000,
      rate: 6.0,
      duration: 36,
      paid: 25000,
      nextPayment: "April 1, 2025",
      status: "Active",
      totalPayments: 36,
      paidPayments: 10,
      delayedPayments: 0,
      type: "Business Loan",
      remainingAmount: 50000,
      lastEmiDate: "April 1, 2028",
      monthlyEmi: calculateEMI(75000, 6.0, 36)
    },
    {
      id: "103",
      amount: 30000,
      rate: 7.5,
      duration: 12,
      paid: 27500,
      nextPayment: "May 20, 2025",
      status: "Active",
      totalPayments: 12,
      paidPayments: 11,
      delayedPayments: 1,
      type: "Personal Loan",
      remainingAmount: 2500,
      lastEmiDate: "May 20, 2026",
      monthlyEmi: calculateEMI(30000, 7.5, 12)
    },
    {
      id: "104",
      amount: 25000,
      rate: 4.5,
      duration: 18,
      paid: 25000,
      nextPayment: "Completed",
      status: "Completed",
      totalPayments: 18,
      paidPayments: 18,
      delayedPayments: 0,
      type: "Auto Loan",
      remainingAmount: 0,
      lastEmiDate: "January 15, 2025",
      monthlyEmi: calculateEMI(25000, 4.5, 18)
    },
    {
      id: "105",
      amount: 40000,
      rate: 5.0,
      duration: 18,
      paid: 15000,
      nextPayment: "July 8, 2025",
      status: "Delayed",
      totalPayments: 18,
      paidPayments: 9,
      delayedPayments: 4,
      type: "Business Loan",
      remainingAmount: 25000,
      lastEmiDate: "July 8, 2027",
      monthlyEmi: calculateEMI(40000, 5.0, 18)
    }
  ];

  const [selectedLoan, setSelectedLoan] = useState<LoanTracking | null>(null);

  const handleSearch = () => {
    if (!loanId) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please enter a loan ID"
      });
      return;
    }

    const found = mockLoans.find(loan => loan.id === loanId);
    if (found) {
      setSelectedLoan(found);
    } else {
      toast({
        variant: "destructive",
        title: "Not Found",
        description: "No loan found with this ID"
      });
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "active": return "text-green-600";
      case "delayed": return "text-red-600";
      case "completed": return "text-blue-600";
      default: return "text-yellow-600";
    }
  };

  const renderLoanDetails = (loan: LoanTracking) => {
    const paymentData = [
      { name: "Paid", value: loan.paidPayments },
      { name: "Delayed", value: loan.delayedPayments },
      { name: "Remaining", value: loan.totalPayments - loan.paidPayments - loan.delayedPayments }
    ];

    const COLORS = ["#10B981", "#EF4444", "#6B7280"];

    const progressData = [
      { name: "Paid Amount", amount: loan.paid },
      { name: "Remaining", amount: loan.remainingAmount }
    ];

    return (
      <div className="space-y-6">
        {/* Loan Overview */}
        <Card>
          <CardHeader>
            <CardTitle>Loan Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <p className="text-sm text-gray-500">Loan ID</p>
                <p className="font-medium">{loan.id}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Loan Type</p>
                <p className="font-medium">{loan.type}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Status</p>
                <p className={`font-medium ${getStatusColor(loan.status)}`}>
                  {loan.status}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Next Payment</p>
                <p className="font-medium">{loan.nextPayment}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Payment Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={paymentData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      fill="#8884d8"
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {paymentData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-4">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm text-gray-600">Paid</span>
                  </div>
                  <p className="font-bold">{loan.paidPayments}</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2">
                    <AlertCircle className="h-4 w-4 text-red-600" />
                    <span className="text-sm text-gray-600">Delayed</span>
                  </div>
                  <p className="font-bold">{loan.delayedPayments}</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2">
                    <Clock className="h-4 w-4 text-gray-600" />
                    <span className="text-sm text-gray-600">Remaining</span>
                  </div>
                  <p className="font-bold">
                    {loan.totalPayments - loan.paidPayments - loan.delayedPayments}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Amount Breakdown</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={progressData}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="amount" fill="#3B82F6" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="space-y-4 mt-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Total Progress</span>
                    <span>{Math.round((loan.paid / loan.amount) * 100)}%</span>
                  </div>
                  <Progress value={(loan.paid / loan.amount) * 100} />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* EMI Details */}
        <Card>
          <CardHeader>
            <CardTitle>EMI Details</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <p className="text-sm text-gray-500">Monthly EMI</p>
                <p className="text-xl font-bold">₹{loan.monthlyEmi}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Interest Rate</p>
                <p className="text-xl font-bold">{loan.rate}%</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Loan Term</p>
                <p className="text-xl font-bold">{loan.duration} months</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Last EMI Date</p>
                <p className="text-xl font-bold">{loan.lastEmiDate}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Loan Tracking</h1>

      <Card className="mb-8">
        <CardContent className="pt-6">
          <div className="flex gap-4">
            <Input 
              placeholder="Enter Loan ID" 
              value={loanId}
              onChange={(e) => setLoanId(e.target.value)}
              className="max-w-xs"
            />
            <Button onClick={handleSearch}>
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
          </div>
        </CardContent>
      </Card>

      {selectedLoan && renderLoanDetails(selectedLoan)}
    </div>
  );
}