import React from "react";
import { BookOpen, FileText, Info, HelpCircle } from "react-feather";

const resources = [
  {
    title: "Understanding Credit Scores",
    description: "Learn how credit scores work and how they impact loan eligibility.",
    link: "/resources/credit-scores",
    icon: <Info className="h-6 w-6 text-primary-600" />,
  },
  {
    title: "Loan Comparison Guide",
    description: "Compare different loan types to find the best fit for your needs.",
    link: "/resources/loan-comparison",
    icon: <BookOpen className="h-6 w-6 text-primary-600" />,
  },
  {
    title: "Financial Planning Tips",
    description: "Manage your finances effectively with expert budgeting tips.",
    link: "/resources/financial-planning",
    icon: <FileText className="h-6 w-6 text-primary-600" />,
  },
  {
    title: "FAQs on Loan Applications",
    description: "Find answers to common questions about the loan process.",
    link: "/resources/faqs",
    icon: <HelpCircle className="h-6 w-6 text-primary-600" />,
  },
];

const ResourcesPage = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-primary-800 mb-6">Financial Resources & Guides</h1>
      <p className="text-secondary-600 mb-8">
        Access expert knowledge on credit, loans, and financial planning to make informed decisions.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {resources.map((resource, index) => (
          <a
            key={index}
            href={resource.link}
            className="flex items-center border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow"
          >
            <div className="mr-4">{resource.icon}</div>
            <div>
              <h3 className="text-lg font-semibold text-primary-800">{resource.title}</h3>
              <p className="text-secondary-600 text-sm">{resource.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ResourcesPage;
