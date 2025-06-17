import React from "react";
import {useNavigate} from "react-router-dom"

const LandingPage = () => {

  const navigate= useNavigate()
  return (
    <div className="text-gray-800">
      {/* Hero Section */}
      <section className="bg-blue-100 py-12 px-4 text-center md:text-left">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            The <span className="text-blue-600">Easiest Way</span> to Get Your New Job
          </h1>
          <p className="text-gray-600 text-lg">
            Each month, more than 3 million job seekers turn to our website in their search
            for work, making over 140,000 applications every single day.
          </p>
          <p className="mt-4 text-sm text-gray-500">
            Popular Searches: <span className="underline">Content Writer</span>,{" "}
            <span className="underline">Finance</span>,{" "}
            <span className="underline">Human Resource</span>,{" "}
            <span className="underline">Management</span>
          </p>
        </div>
      </section>

      {/* We're Hiring CTA */}
      <section className="bg-white py-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4">
          <div className="text-2xl font-semibold">We are <span className="text-blue-600">HIRING</span></div>
          <p className="text-sm text-gray-600">Let’s Work Together & Explore Opportunities</p>
          <button onClick={()=> navigate("/jobs")} className="bg-blue-600 text-white px-6 py-2 rounded">Apply Now</button>
        </div>
      </section>

      {/* Most Popular Vacancies */}
      <section className="bg-gray-100 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6 text-center">Most Popular Vacancies</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center text-sm">
            {[
              "Financial Manager", "Management Analysis", "IT Manager", "Operations Research Analysis",
              "Maxillofacial Surgeons", "Software Developer", "Psychiatrists", "Data Scientist"
            ].map((role, i) => (
              <div key={i}>
                <h3 className="font-semibold">{role}</h3>
                <p className="text-gray-500">{Math.floor(Math.random() * 100000)} Open Positions</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action - Post Jobs */}
      <section className="bg-blue-700 text-white py-12 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Start posting jobs today</h2>
          <p className="mb-6">Start posting jobs for only ₹1000.</p>
          <button disabled className="bg-gray-300 text-blue-700 px-6 py-2 font-medium rounded">Sign Up For Free</button>
        </div>
      </section>

      {/* Top Recruiters */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-6">Top Recruiters</h2>
          <p className="text-sm text-gray-500 mb-6">Discover your next career move, freelance gig, or internship</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="border rounded-md p-4">
                <div onClick={()=>navigate("/jobs")} className="h-6 w-6 mx-auto bg-gray-300 rounded-full mb-2" />
                <p className="text-sm font-medium">Company {i + 1}</p>
                <p className="text-xs text-gray-500">4.{i % 5 + 1}★</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Find the One That's Right For You */}
      <section className="bg-gray-100 py-12 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold">
              Millions Of Jobs. <br />
              <span className="text-blue-700 text-3xl">Find The One That’s Right For You</span>
            </h2>
            <p className="text-sm text-gray-600 mt-4">
              Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 600,000 companies worldwide.
            </p>
            <div className="flex gap-4 mt-6">
              <button className="bg-blue-700 text-white px-4 py-2 rounded">Search Jobs</button>
              <button className="border border-blue-700 text-blue-700 px-4 py-2 rounded">Learn More</button>
            </div>
          </div>
          <div className="md:w-1/2">
            <img src="/illustration-placeholder.png" alt="Illustration" className="w-full rounded-md shadow-md" />
          </div>
        </div>
      </section>

      {/* Jobs by Location */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6 text-center">Jobs by Location</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {["Delhi NCR", "Noida", "Gurugram", "Mumbai"].map((city, i) => (
              <div key={i} className="shadow-md rounded-md overflow-hidden">
                <div className="bg-gray-300 h-32"></div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{city}</h3>
                  <p className="text-sm text-gray-500">{Math.floor(Math.random() * 10 + 1)} vacancies</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How JobPortal Works */}
      <section className="bg-gray-100 py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-8">How JobPortal Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {["Create account", "Upload CV/Resume", "Find suitable job", "Apply job"].map((step, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="h-12 w-12 bg-blue-600 rounded-full text-white flex items-center justify-center mb-3">{i + 1}</div>
                <h3 className="font-medium">{step}</h3>
                <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-blue-600 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">New Things Will Always Update Regularly</h2>
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded w-full sm:w-auto text-black"
            />
            <button className="bg-white text-blue-600 px-6 py-2 rounded">Subscribe</button>
          </div>
        </div>
      </section>

  
    </div>
  );
};

export default LandingPage;