import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ArrowRight, AlertTriangle, HelpCircle, CheckCircle } from 'react-feather';

const LoanSuggestionTool = () => {
  // Local state for managing steps, loading status, and suggestions.
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  // react-hook-form setup.
  const { register, handleSubmit, formState: { errors } } = useForm();

  // Handle form submission.
  const onSubmit = (data) => {
    console.log('Form Data:', data);
    setIsLoading(true);

    // Simulate an API call to fetch loan suggestions.
    setTimeout(() => {
      // Example loan suggestions based on the user's input.
      const dummySuggestions = [
        {
          name: "Loan Option A",
          description: "Competitive interest rate with flexible terms.",
          eligibility: "High",
          interestRate: "3.5%",
          term: "30 years",
          monthlyPayment: 1200,
          features: ["No prepayment penalty", "Fixed rate"],
          type: "optionA",
        },
        {
          name: "Loan Option B",
          description: "Shorter term with competitive rates.",
          eligibility: "Medium",
          interestRate: "4.0%",
          term: "15 years",
          monthlyPayment: 1500,
          features: ["Refinance option available"],
          type: "optionB",
        }
      ];

      // For demonstration, suggestions are always returned.
      setSuggestions(dummySuggestions);
      setIsLoading(false);
      setStep(2);
    }, 2000);
  };

  // Handle Apply Now button click.
  const handleApply = (type) => {
    console.log("Applying for loan type:", type);
    // This is a placeholder for further application logic (e.g., navigation, modal, etc.)
    alert(`Applying for loan type: ${type}`);
  };

  // Determine color classes based on eligibility.
  const getEligibilityColor = (eligibility) => {
    if (eligibility === "High") return "bg-green-100 text-green-800";
    if (eligibility === "Medium") return "bg-yellow-100 text-yellow-800";
    if (eligibility === "Low") return "bg-red-100 text-red-800";
    return "bg-gray-100 text-gray-800";
  };

  return (
    <div className="container mx-auto p-4">
      {step === 1 && (
        <div className="bg-white shadow-md rounded-lg p-6">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="form-label">
                What is your total existing monthly debt payment?
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary-500">$</span>
                <input
                  type="number"
                  className="form-input pl-8"
                  placeholder="Enter monthly debt payments"
                  {...register('existingDebt', { 
                    required: 'Please enter your monthly debt payments',
                    min: { value: 0, message: 'Value cannot be negative' }
                  })}
                />
              </div>
              {errors.existingDebt && (
                <p className="form-error">{errors.existingDebt.message}</p>
              )}
              <p className="mt-1 text-sm text-secondary-500">
                Include mortgage/rent, car payments, credit cards, student loans, etc.
              </p>
            </div>

            <div className="pt-4">
              <button type="submit" className="btn btn-primary w-full">
                Find My Loan Options
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </form>
        </div>
      )}

      {step === 2 && (
        <div>
          {isLoading ? (
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary-600 mx-auto mb-4"></div>
              <p className="text-xl">Analyzing your information...</p>
              <p className="text-secondary-600 mt-2">
                We're finding the best loan options for your situation.
              </p>
            </div>
          ) : (
            <div>
              <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                <h2 className="text-2xl font-bold mb-4">
                  Your Personalized Loan Suggestions
                </h2>
                <p className="text-secondary-600 mb-6">
                  Based on the information you provided, here are the loan options that best match your needs and financial profile.
                </p>
                
                {suggestions.length === 0 ? (
                  <div className="text-center py-8">
                    <AlertTriangle className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">No Matching Loans Found</h3>
                    <p className="text-secondary-600 mb-4">
                      Based on the information provided, we couldn't find suitable loan options. Please adjust your criteria or contact our loan specialists for personalized assistance.
                    </p>
                    <button onClick={() => setStep(1)} className="btn btn-primary">
                      Adjust Your Criteria
                    </button>
                  </div>
                ) : (
                  <div className="space-y-8">
                    {suggestions.map((suggestion, index) => (
                      <div key={index} className="border border-secondary-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-primary-800">
                              {suggestion.name}
                            </h3>
                            <p className="text-secondary-600">
                              {suggestion.description}
                            </p>
                          </div>
                          <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mt-2 md:mt-0 ${getEligibilityColor(suggestion.eligibility)}`}>
                            {suggestion.eligibility} Match
                          </span>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                          <div className="bg-secondary-50 p-4 rounded-lg">
                            <p className="text-sm text-secondary-500">Interest Rate</p>
                            <p className="text-lg font-semibold">{suggestion.interestRate}</p>
                          </div>
                          <div className="bg-secondary-50 p-4 rounded-lg">
                            <p className="text-sm text-secondary-500">Term Length</p>
                            <p className="text-lg font-semibold">{suggestion.term}</p>
                          </div>
                          <div className="bg-secondary-50 p-4 rounded-lg">
                            <p className="text-sm text-secondary-500">Est. Monthly Payment</p>
                            <p className="text-lg font-semibold">
                              ${suggestion.monthlyPayment.toLocaleString()}
                            </p>
                          </div>
                        </div>
                        
                        <div className="mb-6">
                          <h4 className="font-semibold mb-2">Key Features:</h4>
                          <ul className="space-y-1">
                            {suggestion.features.map((feature, i) => (
                              <li key={i} className="flex items-start">
                                <CheckCircle className="h-5 w-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-3">
                          <button onClick={() => handleApply(suggestion.type)} className="btn btn-primary">
                            Apply Now
                            <ArrowRight className="ml-2 h-5 w-5" />
                          </button>
                          <a href={`/loan-products#${suggestion.type}`} className="btn btn-outline text-center">
                            Learn More
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              <div className="bg-primary-50 rounded-lg p-6 border border-primary-100">
                <div className="flex items-start">
                  <HelpCircle className="h-6 w-6 text-primary-600 mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-2">Need More Help?</h3>
                    <p className="text-secondary-600 mb-4">
                      Our loan specialists are available to discuss your specific needs and help you find the perfect financial solution.
                    </p>
                    <a href="tel:8001234567" className="text-primary-600 font-medium hover:text-primary-700">
                      Call (800) 123-4567
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <button onClick={() => setStep(1)} className="text-primary-600 font-medium hover:text-primary-700">
                  Start Over
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default LoanSuggestionTool;
