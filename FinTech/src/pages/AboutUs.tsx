// import React from "react";
import { Link } from "react-router-dom";
import { Card, CardHeader, CardContent } from "../components/ui/Card";

import mani from "../assets/images/mani2.png";
import vishwanath from "../assets/images/vishwanath.jpg";
import sharukh from "../assets/images/sharukh.jpg";

const About = () => {
  return (
    <div className="container mx-auto py-12 px-6">
      {/* Hero Section */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-primary-700">About LoanLona</h1>
        <p className="mt-4 text-secondary-700 text-lg">
        Empowering individuals and businesses with seamless <b>Lending</b> financial
        solutions.
        </p>
      </div>

      {/* Company Overview */}
      <Card className="mt-8 p-6 shadow-lg">
        <CardHeader>
          <h2 className="text-2xl font-semibold text-primary-800">Who We Are</h2>
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
            <h2 className="text-xl font-semibold text-primary-800">Our Mission</h2>
          </CardHeader>
          <CardContent>
            <p className="text-secondary-700 text-lg">
              To provide accessible, hassle-free, and affordable Lending solutions to individuals and businesses.
            </p>
          </CardContent>
        </Card>
        <Card className="p-6 shadow-md">
          <CardHeader>
            <h2 className="text-xl font-semibold text-primary-800">Our Vision</h2>
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
        <Link to="/contact" className="mt-4 inline-block bg-primary-600 text-white px-6 py-2 rounded-md hover:bg-primary-700">
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default About;
