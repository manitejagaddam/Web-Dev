import React from "react";
import { Link } from "react-router-dom";

import mani from "../assets/images/mani2.png";
import vishwanath from "../assets/images/vishwanath.jpg";
import sharukh from "../assets/images/sharukh.jpg";


// import { Link } from "react-router-dom";
import { Card, CardHeader, CardContent } from "../components/ui/Card";
import {
  ArrowRight,
  CheckCircle,
  Star,
  Shield,
  TrendingUp,
  Users,
  Clock,
  Award,
} from "lucide-react";

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-700 to-primary-900 text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="container relative py-20 md:py-28">
          <div className="max-w-2xl">
            <h1 className="text-6xl md:text-6xl lg:text-8xl font-bold text-white">
              LoanLona
            </h1>
            <p className="text-3xl md:text-2xl lg:text-3xl mb-8 font-bold text-white mt-2">
               - Right Loan, Fully Your Own
            </p>
            <p className="text-xl md:text-2xl mb-8  text-primary-100">
            Find the perfect loan suitable for you with ease! LoanLona simplifies the loan process, helps you track all your loans, and offers customized repayment options—all from the comfort of your home.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/FinTech/apply" className="btn btn-accent">
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/FinTech/loan-suggestion"
                className="btn btn-outline border-white text-white hover:bg-white/10"
              >
                Find My Loan
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="section-title">Why Choose LoanLona ?</h2>
            <p className="section-subtitle">
            We offer a range of benefits designed to make your loan journey smooth, hassle-free, and tailored to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card">
              <div className="flex items-center mb-4">
                <TrendingUp className="h-8 w-8 text-primary-600 mr-3" />
                <h3 className="text-xl font-semibold">Perfect Loan Match</h3>
              </div>
              <p className="text-secondary-600">
              Our advanced AI-driven system matches you with the best loan options based on your financial profile, including ULI and credit history as per requirements.
              </p>
            </div>

            <div className="card">
              <div className="flex items-center mb-4">
                <Clock className="h-8 w-8 text-primary-600 mr-3" />
                <h3 className="text-xl font-semibold">Quick & Easy Approvals
                </h3>
              </div>
              <p className="text-secondary-600">
              With our seamless digital process, get loan approvals faster without the usual paperwork hassle & get ready with all requirements by us.

              </p>
            </div>

            <div className="card">
              <div className="flex items-center mb-4">
                <Shield className="h-8 w-8 text-primary-600 mr-3" />
                <h3 className="text-xl font-semibold">Secure & Transparent
                </h3>
              </div>
              <p className="text-secondary-600">
              Your financial data is protected with bank-grade encryption, ensuring a safe and transparent loan experience.

              </p>
            </div>

            <div className="card">
              <div className="flex items-center mb-4">
                <Users className="h-8 w-8 text-primary-600 mr-3" />
                <h3 className="text-xl font-semibold">Personalized Loan Assistance
                </h3>
              </div>
              <p className="text-secondary-600">
              We analyze your needs and provide customized loan solutions, mainly helping MSMEs and non-tax filers get the right funding.

              </p>
            </div>

            <div className="card">
              <div className="flex items-center mb-4">
                <CheckCircle className="h-8 w-8 text-primary-600 mr-3" />
                <h3 className="text-xl font-semibold">Smart Loan Tracking
                </h3>
              </div>
              <p className="text-secondary-600">
              Manage all your loans in one place with our intuitive dashboard—track repayments, due dates, and extra/early payment options.

              </p>
            </div>

            <div className="card">
              <div className="flex items-center mb-4">
                <Award className="h-8 w-8 text-primary-600 mr-3" />
                <h3 className="text-xl font-semibold">100% Digital & Hassle-Free
                </h3>
              </div>
              <p className="text-secondary-600">
              From loan application to disbursal, everything happens online—no bank visits, no stress!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section bg-secondary-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="section-title">Explore Our Services</h2>
            <p className="section-subtitle">
              We offer a variety of loan options to meet your specific needs and
              financial goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card bg-white hover:border-primary-500 hover:border-2 transition-all">
              <img
                src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Personal Loan"
                className="w-full h-48 object-cover rounded-t-lg -mt-6 -mx-6 mb-4 rounded-b-none"
              />
              <h3 className="text-xl font-semibold mb-2">Personal Loans</h3>
              <p className="text-secondary-600 mb-4">
                Flexible financing for life's big moments and unexpected
                expenses.
              </p>
              <Link
                to="/loan-products#personal"
                className="text-primary-600 font-medium flex items-center hover:text-primary-700"
              >
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="card bg-white hover:border-primary-500 hover:border-2 transition-all">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Home Loan"
                className="w-full h-48 object-cover rounded-t-lg -mt-6 -mx-6 mb-4 rounded-b-none"
              />
              <h3 className="text-xl font-semibold mb-2">Home Loans</h3>
              <p className="text-secondary-600 mb-4">
                Make your dream home a reality with our competitive mortgage
                options.
              </p>
              <Link
                to="/loan-products#home"
                className="text-primary-600 font-medium flex items-center hover:text-primary-700"
              >
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="card bg-white hover:border-primary-500 hover:border-2 transition-all">
              <img
                src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Auto Loan"
                className="w-full h-48 object-cover rounded-t-lg -mt-6 -mx-6 mb-4 rounded-b-none"
              />
              <h3 className="text-xl font-semibold mb-2">Auto Loans</h3>
              <p className="text-secondary-600 mb-4">
                Get behind the wheel faster with our hassle-free auto financing
                solutions.
              </p>
              <Link
                to="/loan-products#auto"
                className="text-primary-600 font-medium flex items-center hover:text-primary-700"
              >
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="card bg-white hover:border-primary-500 hover:border-2 transition-all">
              <img
                src="https://images.unsplash.com/photo-1664575602554-2087b04935a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Business Loan"
                className="w-full h-48 object-cover rounded-t-lg -mt-6 -mx-6 mb-4 rounded-b-none"
              />
              <h3 className="text-xl font-semibold mb-2">Business Loans</h3>
              <p className="text-secondary-600 mb-4">
                Fuel your business growth with tailored financing options for
                entrepreneurs.
              </p>
              <Link
                to="/loan-products#business"
                className="text-primary-600 font-medium flex items-center hover:text-primary-700"
              >
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link to="/FinTech/loan-products" className="btn btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Loan Suggestion Tool CTA */}
      <section className="section bg-primary-900 text-white">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Not Sure Which Loan is Right for You?
              </h2>
              <p className="text-xl text-primary-100 mb-6">
              Having Queries regarding your Loan Journey?
              Our Interactive AI loan Expert is here for you to discuss all your queries without hesitation.
              </p>
              <Link to="/FinTech/loan-suggestion" className="btn btn-accent">
                Try Our Loan Suggestion Tool
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="lg:w-2/5">
              <img
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                alt="Loan Suggestion Tool"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto py-12 px-6">
          {/* Hero Section */}
          <div className="text-center">
            <h1 className="text-4xl font-bold text-primary-700">
              About LoanLona{" "}
            </h1>
            <p className="mt-4 text-secondary-700 text-lg">
              Empowering individuals and businesses with seamless <b>Lending</b> financial
              solutions.
            </p>
          </div>

          {/* Company Overview */}
          <Card className="mt-8 p-6 shadow-lg">
            <CardHeader>
              <h2 className="text-2xl font-semibold text-primary-800">
                Who We Are
              </h2>
            </CardHeader>
            <CardContent>
              <p className="text-secondary-700 text-lg">
                LoanLona is a modern financial platform committed to revolutionize lending system of India. Our goal is to simplify Loan Journey by providing fast, accurate, tailored, secure, and transparent loan solutions.
              </p>
            </CardContent>
          </Card>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <Card className="p-6 shadow-md">
              <CardHeader>
                <h2 className="text-xl font-semibold text-primary-800">
                  Our Mission
                </h2>
              </CardHeader>
              <CardContent>
                <p className="text-secondary-700 text-lg">
                  To provide accessible, hassle-free, and affordable Lending
                  solutions to individuals and businesses.
                </p>
              </CardContent>
            </Card>
            <Card className="p-6 shadow-md">
              <CardHeader>
                <h2 className="text-xl font-semibold text-primary-800">
                  Our Vision
                </h2>
              </CardHeader>
              <CardContent>
                <p className="text-secondary-700 text-lg">
                India as a nation where borrowing opportunities are within everyone's reach tailored and quick, powered by technology and innovation.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Meet the Team */}
          <div className="mt-12 text-center">
        <h2 className="text-3xl font-bold text-primary-800">Meet Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          {/* Team Member 1 */}
          <Card className="p-6 shadow-md text-center">
            <img
              src={sharukh}
              alt="Team Member"
              className="w-32 h-32 mx-auto rounded-full"
            />
            <CardHeader>
              <h3 className="text-xl font-semibold text-primary-700">Sharukh</h3>
              <p className="text-secondary-600">CEO & Founder</p>
            </CardHeader>
          </Card>
          
          {/* Team Member 2 */}
          <Card className="p-6 shadow-md text-center">
            <img
              src={mani}
              alt="Team Member"
              className="w-32 h-32 mx-auto rounded-full"
            />
            <CardHeader>
              <h3 className="text-xl font-semibold text-primary-700">Maniteja Gaddam</h3>
              <p className="text-secondary-600">Chief Technology Officer</p>
            </CardHeader>
          </Card>

          {/* Team Member 3 */}
          <Card className="p-6 shadow-md text-center">
            <img
              src={vishwanath}
              alt="Team Member"
              className="w-32 h-32 mx-auto rounded-full"
            />
            <CardHeader>
              <h3 className="text-xl font-semibold text-primary-700">KLS VISHWANATH</h3>
              <p className="text-secondary-600">CHRO & Co-Founder</p>
            </CardHeader>
          </Card>
        </div>
      </div>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-semibold text-primary-700">Join Us</h2>
            <p className="text-secondary-700 text-lg mt-2">
            Want to discover how Loanlona can guide Loan Journey in the simplest way?
            Get in touch ASAP.
            </p>
            <Link
              to="/FinTech/about"
              className="mt-4 inline-block bg-primary-600 text-white px-6 py-2 rounded-md hover:bg-primary-700"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="section-title">What Our Customers Say</h2>
            <p className="section-subtitle">
              Don't just take our word for it. Here's what some of our satisfied
              customers have to say.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card">
              <div className="flex text-accent-500 mb-4">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
              </div>
              <p className="text-secondary-600 mb-4 italic">
                "The loan application process was incredibly smooth. I got
                approved quickly and the terms were better than I expected.
                LoanLona made financing my new home a breeze!"
              </p>
              <div className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
                  alt="Sarah Johnson"
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">Sarah Johnson</h4>
                  <p className="text-sm text-secondary-500">
                    Home Loan Customer
                  </p>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="flex text-accent-500 mb-4">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
              </div>
              <p className="text-secondary-600 mb-4 italic">
                "As a small business owner, I needed capital to expand. LoanLona
                understood my vision and provided a business loan with terms
                that worked perfectly for my growth plans."
              </p>
              <div className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
                  alt="Michael Rodriguez"
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">Michael Rodriguez</h4>
                  <p className="text-sm text-secondary-500">
                    Business Loan Customer
                  </p>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="flex text-accent-500 mb-4">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
              </div>
              <p className="text-secondary-600 mb-4 italic">
                "The loan suggestion tool recommended the perfect personal loan
                for my situation. The customer service team was incredibly
                helpful throughout the entire process."
              </p>
              <div className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
                  alt="Jennifer Lee"
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">Jennifer Lee</h4>
                  <p className="text-sm text-secondary-500">
                    Personal Loan Customer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application CTA */}
      <section className="section bg-primary-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="section-title">Ready to Get Started?</h2>
            <p className="section-subtitle mb-8">
              Apply now and take the first step toward achieving your financial
              goals with LoanLona.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/FinTech/apply" className="btn btn-primary">
                Apply for a Loan
              </Link>
              <Link to="/FinTech/loan-suggestion" className="btn btn-outline">
                Find My Loan
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
