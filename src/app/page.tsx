"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import {
  FiArrowRight,
  FiCheckCircle,
  FiTruck,
  FiMapPin,
  FiRefreshCw,
  FiBarChart2,
  FiShield,
} from "react-icons/fi";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const features = [
    {
      icon: <FiTruck className="w-8 h-8 text-blue-600 ml-2 mt-2" />,
      title: "Predictive Return Mapping",
      description:
        "AI models predict return hotspots based on purchase behavior and product types.",
    },
    {
      icon: <FiMapPin className="w-8 h-8 text-blue-600" />,
      title: "Dynamic Reverse Routing",
      description:
        "Optimize return pickups by merging them with existing delivery routes.",
    },
    {
      icon: <FiRefreshCw className="w-8 h-8 text-blue-600" />,
      title: "Smart Local Drop Points",
      description:
        "Efficiently redirect returns to nearby stores or distribution centers based on item condition",
    },
    {
      icon: <FiBarChart2 className="w-8 h-8 text-blue-600" />,
      title: "Real-Time Analytics",
      description:
        "Monitor return patterns and inventory recovery through an intuitive dashboard.",
    },
  ];

  const benefits = [
    "Reduces logistics costs by up to 40%",
    "Decreases empty return trips by 65%",
    "Speeds up return processing time by 50%",
    "Improves vehicle utilization rates",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center">
              <span
                className={`text-2xl font-bold ${
                  scrolled ? "text-blue-600" : "text-white"
                }`}
              >
                ReLocate
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="text-gray-700 hover:text-blue-600  hover:bg-white p-1 px-3 rounded-lg font-medium transition-colors"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="text-gray-700 hover:text-blue-600  hover:bg-white p-1 px-3 rounded-lg font-medium transition-colors"
              >
                How It Works
              </a>
              <a
                href="#benefits"
                className="text-gray-700 hover:text-blue-600  hover:bg-white p-1 px-3 rounded-lg font-medium transition-colors"
              >
                Benefits
              </a>
              <Link
                href="/sign-in"
                className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition-colors"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600 focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#features"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
              >
                How It Works
              </a>
              <a
                href="#benefits"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
              >
                Benefits
              </a>
              <button className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-blue-600 hover:bg-gray-100">
                Get Started
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div className="mb-12 lg:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Transform Your Reverse Logistics with AI
              </h1>
              <p className="text-xl text-blue-100 mb-8 max-w-lg">
                ReLocate leverages predictive analytics to optimize return
                logistics, reducing costs and improving efficiency for Walmart's
                supply chain.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  href="/sign-in"
                  className="bg-white text-blue-700 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors flex items-center"
                >
                  Request Demo <FiArrowRight className="ml-2" />
                </Link>
                <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:bg-opacity-10 hover:text-blue-700 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-2xl p-6 text-gray-800">
              <h3 className="text-xl font-bold mb-4 text-center">
                Key Benefits
              </h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <FiCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Smart Features for Smarter Logistics
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powered by AI and machine learning to revolutionize your reverse
              logistics operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow flex flex-col items-center text-center justify-center"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center ">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 mt-6 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section
        id="how-it-works"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How ReLocate Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A seamless integration into your existing logistics workflow
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 top-0 h-full w-1 bg-blue-200 -ml-px"></div>

            <div className="space-y-12">
              {[
                {
                  step: "1",
                  title: "Predictive Analysis",
                  description:
                    "Our AI analyzes historical data to predict return patterns and hotspots.",
                  icon: <FiBarChart2 className="w-6 h-6 text-blue-600" />,
                },
                {
                  step: "2",
                  title: "Route Optimization",
                  description:
                    "Returns are intelligently bundled with existing delivery routes.",
                  icon: <FiMapPin className="w-6 h-6 text-blue-600" />,
                },
                {
                  step: "3",
                  title: "Smart Processing",
                  description:
                    "Items are classified and routed to optimal destinations based on condition and demand.",
                  icon: <FiRefreshCw className="w-6 h-6 text-blue-600" />,
                },
                {
                  step: "4",
                  title: "Real-time Tracking",
                  description:
                    "Monitor all return activities through our comprehensive dashboard.",
                  icon: <FiShield className="w-6 h-6 text-blue-600" />,
                },
              ].map((item, index) => (
                <div key={index} className="relative lg:flex items-center">
                  <div className="lg:w-1/2 lg:pr-12 lg:text-right mb-6 lg:mb-0">
                    <div
                      className={`lg:mr-12 ${
                        index % 2 === 1 ? "lg:order-2 lg:ml-12" : ""
                      }`}
                    >
                      <div className="flex items-center justify-center lg:justify-end mb-2">
                        <span className="bg-blue-100 text-blue-600 font-bold rounded-full w-10 h-10 flex items-center justify-center mr-3">
                          {item.step}
                        </span>
                        <h3 className="text-xl font-semibold text-gray-900">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>

                  <div className="lg:block w-12 h-12 bg-white border-4 border-blue-200 rounded-full z-10 flex items-center justify-center">
                    <div className="flex items-center h-full justify-center w-full">
                      {item.icon}
                    </div>
                  </div>

                  <div className="lg:w-1/2 lg:pl-12 lg:mt-0">
                    <div
                      className={`bg-white p-6 rounded-xl shadow-md ${
                        index % 2 === 1 ? "lg:order-1" : ""
                      }`}
                    >
                      <div className="aspect-w-16 aspect-h-9">
                        <div className="bg-gray-200 rounded-lg w-full h-48 flex items-center justify-center text-gray-400">
                          {item.step} - {item.title} Visualization
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose ReLocate?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The smart solution for modern reverse logistics challenges
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Cost Reduction",
                description:
                  "Significantly lower logistics costs by optimizing return routes and reducing empty miles.",
                stat: "40%",
                statLabel: "Average cost reduction",
              },
              {
                title: "Efficiency Boost",
                description:
                  "Improve operational efficiency with automated scheduling and routing.",
                stat: "65%",
                statLabel: "Faster processing",
              },
              {
                title: "Sustainability",
                description:
                  "Reduce carbon footprint by minimizing empty truck runs and optimizing routes.",
                stat: "30%",
                statLabel: "Lower emissions",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-xl text-center"
              >
                <div className="text-5xl font-bold text-blue-600 mb-4">
                  {benefit.stat}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 mb-4">{benefit.description}</p>
                <span className="text-sm text-gray-500">
                  {benefit.statLabel}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Reverse Logistics?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join Walmart's network of efficient logistics operations with
            ReLocate's AI-powered solution.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-white text-blue-700 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
              Schedule a Demo
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:bg-opacity-10 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">ReLocate</h3>
              <p className="text-gray-400">
                Smart Reverse Logistics System by Walmart
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
                Product
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#features"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#how-it-works"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    How It Works
                  </a>
                </li>
                <li>
                  <a
                    href="#benefits"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Benefits
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
                Company
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
                Legal
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} ReLocate by Walmart. All rights
              reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <span className="sr-only">Facebook</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
