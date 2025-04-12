import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, CheckCircle, Info, AlertCircle, DollarSign, Home, Car, Briefcase } from 'lucide-react';

const LoanProductsPage = () => {
  const location = useLocation();
  const hash = location.hash;

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary-800 text-white py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-primary-100 mb-8">
              Explore our comprehensive range of loan options designed to meet your unique financial needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#personal" className="btn btn-outline border-white text-white hover:bg-white/10">
                Personal Loans
              </a>
              <a href="#home" className="btn btn-outline border-white text-white hover:bg-white/10">
                Home Loans
              </a>
              <a href="#auto" className="btn btn-outline border-white text-white hover:bg-white/10">
                Auto Loans
              </a>
              <a href="#business" className="btn btn-outline border-white text-white hover:bg-white/10">
                Business Loans
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Loans */}
      <section id="personal" className="section bg-white">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="flex items-center mb-4">
                <DollarSign className="h-10 w-10 text-primary-600 mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold">Personal Loans</h2>
              </div>
              <p className="text-xl text-secondary-600 mb-6">
                Flexible financing solutions for life's big moments and unexpected expenses.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary-600 mr-3 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold">Competitive Interest Rates</h3>
                    <p className="text-secondary-600">Starting from 5.99% APR based on your credit profile.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary-600 mr-3 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold">Flexible Loan Amounts</h3>
                    <p className="text-secondary-600">Borrow between $1,000 and $50,000 to meet your specific needs.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary-600 mr-3 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold">Convenient Repayment Terms</h3>
                    <p className="text-secondary-600">Choose from 12 to 60 month terms to fit your budget.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary-600 mr-3 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold">No Prepayment Penalties</h3>
                    <p className="text-secondary-600">Pay off your loan early without additional fees.</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/apply?product=personal" className="btn btn-primary">
                  Apply Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link to="/loan-suggestion" className="btn btn-outline">
                  Find My Rate
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Personal Loan" 
                className="rounded-lg shadow-xl w-full"
              />
              
              <div className="mt-8 bg-primary-50 p-6 rounded-lg border border-primary-100">
                <div className="flex items-center mb-4">
                  <Info className="h-6 w-6 text-primary-600 mr-3" />
                  <h3 className="text-lg font-semibold">Common Uses for Personal Loans</h3>
                </div>
                <ul className="space-y-2 text-secondary-700">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary-500 mr-2" />
                    Debt consolidation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary-500 mr-2" />
                    Home improvements
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary-500 mr-2" />
                    Major purchases
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary-500 mr-2" />
                    Medical expenses
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary-500 mr-2" />
                    Education costs
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Home Loans */}
      <section id="home" className="section bg-secondary-50">
        <div className="container">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="lg:w-1/2">
              <div className="flex items-center mb-4">
                <Home className="h-10 w-10 text-primary-600 mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold">Home Loans</h2>
              </div>
              <p className="text-xl text-secondary-600 mb-6">
                Make your dream home a reality with our competitive mortgage options.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary-600 mr-3 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold">Competitive Interest Rates</h3>
                    <p className="text-secondary-600">Fixed rates starting from 3.25% APR and adjustable rates from 2.75% APR.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary-600 mr-3 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold">Flexible Down Payment Options</h3>
                    <p className="text-secondary-600">Options available with as little as 3% down for qualified buyers.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary-600 mr-3 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold">Various Loan Terms</h3>
                    <p className="text-secondary-600">Choose from 15, 20, or 30-year terms to fit your financial goals.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary-600 mr-3 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold">First-Time Homebuyer Programs</h3>
                    <p className="text-secondary-600">Special programs with favorable terms for first-time buyers.</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/apply?product=home" className="btn btn-primary">
                  Apply Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link to="/loan-suggestion" className="btn btn-outline">
                  Find My Rate
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Home Loan" 
                className="rounded-lg shadow-xl w-full"
              />
              
              <div className="mt-8 bg-white p-6 rounded-lg border border-secondary-200">
                <div className="flex items-center mb-4">
                  <Info className="h-6 w-6 text-primary-600 mr-3" />
                  <h3 className="text-lg font-semibold">Home Loan Options</h3>
                </div>
                <ul className="space-y-2 text-secondary-700">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary-500 mr-2" />
                    Conventional mortgages
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary-500 mr-2" />
                    FHA loans
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary-500 mr-2" />
                    VA loans
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary-500 mr-2" />
                    Jumbo loans
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary-500 mr-2" />
                    Refinancing options
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Auto Loans */}
      <section id="auto" className="section bg-white">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="flex items-center mb-4">
                <Car className="h-10 w-10 text-primary-600 mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold">Auto Loans</h2>
              </div>
              <p className="text-xl text-secondary-600 mb-6">
                Get behind the wheel faster with our hassle-free auto financing solutions.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary-600 mr-3 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold">Competitive Interest Rates</h3>
                    <p className="text-secondary-600">Rates as low as 2.99% APR for qualified buyers.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary-600 mr-3 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold">Flexible Loan Terms</h3>
                    <p className="text-secondary-600">Terms from 24 to 84 months to fit your budget.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary-600 mr-3 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold">New and Used Vehicle Financing</h3>
                    <p className="text-secondary-600">Options for both new and pre-owned vehicles.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary-600 mr-3 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold">Quick Approval Process</h3>
                    <p className="text-secondary-600">Get pre-approved before you shop to strengthen your negotiating position.</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/apply?product=auto" className="btn btn-primary">
                  Apply Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link to="/loan-suggestion" className="btn btn-outline">
                  Find My Rate
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Auto Loan" 
                className="rounded-lg shadow-xl w-full"
              />
              
              <div className="mt-8 bg-primary-50 p-6 rounded-lg border border-primary-100">
                <div className="flex items-center mb-4">
                  <AlertCircle className="h-6 w-6 text-primary-600 mr-3" />
                  <h3 className="text-lg font-semibold">Auto Loan Tips</h3>
                </div>
                <ul className="space-y-2 text-secondary-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-500 mr-2 mt-0.5" />
                    <span>Get pre-approved before visiting dealerships</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-500 mr-2 mt-0.5" />
                    <span>Consider the total cost, not just monthly payments</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-500 mr-2 mt-0.5" />
                    <span>Factor in insurance and maintenance costs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-500 mr-2 mt-0.5" />
                    <span>Understand the difference between dealer financing and direct lending</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Loans */}
      <section id="business" className="section bg-secondary-50">
        <div className="container">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="lg:w-1/2">
              <div className="flex items-center mb-4">
                <Briefcase className="h-10 w-10 text-primary-600 mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold">Business Loans</h2>
              </div>
              <p className="text-xl text-secondary-600 mb-6">
                Fuel your business growth with tailored financing options for entrepreneurs.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary-600 mr-3 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold">Flexible Funding Options</h3>
                    <p className="text-secondary-600">Loans from $10,000 to $5 million to meet your business needs.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary-600 mr-3 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold">Competitive Rates</h3>
                    <p className="text-secondary-600">Rates starting at 4.99% APR for qualified businesses.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary-600 mr-3 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold">Customized Repayment Terms</h3>
                    <p className="text-secondary-600">Terms from 1 to 10 years based on your business needs.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary-600 mr-3 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold">Fast Application Process</h3>
                    <p className="text-secondary-600">Quick decisions and funding to keep your business moving forward.</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/apply?product=business" className="btn btn-primary">
                  Apply Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link to="/loan-suggestion" className="btn btn-outline">
                  Find My Rate
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1664575602554-2087b04935a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Business Loan" 
                className="rounded-lg shadow-xl w-full"
              />
              
              <div className="mt-8 bg-white p-6 rounded-lg border border-secondary-200">
                <div className="flex items-center mb-4">
                  <Info className="h-6 w-6 text-primary-600 mr-3" />
                  <h3 className="text-lg font-semibold">Business Loan Types</h3>
                </div>
                <ul className="space-y-2 text-secondary-700">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary-500 mr-2" />
                    Term loans
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary-500 mr-2" />
                    SBA loans
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary-500 mr-2" />
                    Business lines of credit
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary-500 mr-2" />
                    Equipment financing
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary-500 mr-2" />
                    Commercial real estate loans
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="section-title">Loan Comparison</h2>
            <p className="section-subtitle">
              Compare our Services to find the best option for your needs.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-primary-50">
                  <th className="p-4 text-left border border-secondary-200">Loan Type</th>
                  <th className="p-4 text-left border border-secondary-200">Interest Rate</th>
                  <th className="p-4 text-left border border-secondary-200">Loan Amount</th>
                  <th className="p-4 text-left border border-secondary-200">Term Length</th>
                  <th className="p-4 text-left border border-secondary-200">Best For</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 border border-secondary-200 font-medium">Personal Loans</td>
                  <td className="p-4 border border-secondary-200">5.99% - 18.99% APR</td>
                  <td className="p-4 border border-secondary-200">$1,000 - $50,000</td>
                  <td className="p-4 border border-secondary-200">12 - 60 months</td>
                  <td className="p-4 border border-secondary-200">Debt consolidation, major purchases, unexpected expenses</td>
                </tr>
                <tr className="bg-secondary-50">
                  <td className="p-4 border border-secondary-200 font-medium">Home Loans</td>
                  <td className="p-4 border border-secondary-200">3.25% - 5.50% APR</td>
                  <td className="p-4 border border-secondary-200">$50,000 - $2,000,000+</td>
                  <td className="p-4 border border-secondary-200">15, 20, or 30 years</td>
                  <td className="p-4 border border-secondary-200">Home purchase, refinancing, home equity</td>
                </tr>
                <tr>
                  <td className="p-4 border border-secondary-200 font-medium">Auto Loans</td>
                  <td className="p-4 border border-secondary-200">2.99% - 8.99% APR</td>
                  <td className="p-4 border border-secondary-200">$5,000 - $100,000</td>
                  <td className="p-4 border border-secondary-200">24 - 84 months</td>
                  <td className="p-4 border border-secondary-200">New or used vehicle purchase, refinancing</td>
                </tr>
                <tr className="bg-secondary-50">
                  <td className="p-4 border border-secondary-200 font-medium">Business Loans</td>
                  <td className="p-4 border border-secondary-200">4.99% - 12.99% APR</td>
                  <td className="p-4 border border-secondary-200">$10,000 - $5,000,000</td>
                  <td className="p-4 border border-secondary-200">1 - 10 years</td>
                  <td className="p-4 border border-secondary-200">Business expansion, equipment, working capital, commercial real estate</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-secondary-600 mb-6">
              Not sure which loan is right for you? Our loan suggestion tool can help you find the perfect match.
            </p>
            <Link to="/loan-suggestion" className="btn btn-primary">
              Try Our Loan Suggestion Tool
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-secondary-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Find answers to common questions about our Services.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">How do I qualify for a loan?</h3>
              <p className="text-secondary-600">
                Qualification criteria vary by loan type, but generally include factors such as credit score, income, employment history, and debt-to-income ratio. Our loan officers can help you understand the specific requirements for the loan you're interested in.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">How long does the application process take?</h3>
              <p className="text-secondary-600">
                Application processing times vary by loan type. Personal and auto loans typically receive decisions within 1-2 business days, while home and business loans may take 2-4 weeks due to more extensive documentation and verification requirements.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Can I apply if I have less-than-perfect credit?</h3>
              <p className="text-secondary-600">
                Yes, we consider applications from borrowers with a range of credit profiles. While a higher credit score typically results in better rates, we offer options for borrowers with less-than-perfect credit. Our loan suggestion tool can help identify suitable options.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Are there any fees associated with your loans?</h3>
              <p className="text-secondary-600">
                Fee structures vary by loan type. Personal loans typically have no application fees or prepayment penalties. Home loans may include closing costs and origination fees. Auto and business loans may have origination fees. All fees are transparently disclosed before loan acceptance.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">How can I make payments on my loan?</h3>
              <p className="text-secondary-600">
                We offer multiple payment options including automatic payments from your bank account, online payments through our secure portal, payments by phone, and mail-in payments. Most customers prefer the convenience of automatic payments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary-900 text-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to Take the Next Step?</h2>
            <p className="text-xl text-primary-100 mb-8">
              Apply now or use our loan suggestion tool to find the perfect financial solution for your needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/apply" className="btn btn-accent">
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/loan-suggestion" className="btn btn-outline border-white text-white hover:bg-white/10">
                Find My Loan
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoanProductsPage;