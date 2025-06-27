import React, { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

import {
  ArrowDown,
  ArrowRight,
  Linkedin,
  Twitter,
  Mail,
  Facebook,
  Instagram,
  Star,
  Bell,
  MapPin,
  Heart,
  Target,
  Sparkles,
  CheckCircle,
  Phone,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const Features = () => {
  // Particle Background Component Logic
  const canvasRef = useRef(null);
  const logos = [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-original.svg",
  ];
  const duplicated = [...logos, ...logos];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let particles = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      const colors = ["#0ea5e9", "#38bdf8", "#7dd3fc", "#bae6fd", "#0284c7"];
      const shapes = ["circle", "triangle", "square"];

      particles = [];
      const particleCount = Math.min(50, window.innerWidth / 20);

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 4 + 2,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.3 + 0.1,
          color: colors[Math.floor(Math.random() * colors.length)],
          shape: shapes[Math.floor(Math.random() * shapes.length)],
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.02,
        });
      }
    };

    const drawParticle = (particle) => {
      ctx.save();
      ctx.globalAlpha = particle.opacity;
      ctx.fillStyle = particle.color;
      ctx.translate(particle.x, particle.y);
      ctx.rotate(particle.rotation);

      switch (particle.shape) {
        case "circle":
          ctx.beginPath();
          ctx.arc(0, 0, particle.size, 0, Math.PI * 2);
          ctx.fill();
          break;
        case "triangle":
          ctx.beginPath();
          ctx.moveTo(0, -particle.size);
          ctx.lineTo(-particle.size, particle.size);
          ctx.lineTo(particle.size, particle.size);
          ctx.closePath();
          ctx.fill();
          break;
        case "square":
          ctx.fillRect(
            -particle.size,
            -particle.size,
            particle.size * 2,
            particle.size * 2
          );
          break;
      }
      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.rotation += particle.rotationSpeed;

        if (particle.x < -10) particle.x = canvas.width + 10;
        if (particle.x > canvas.width + 10) particle.x = -10;
        if (particle.y < -10) particle.y = canvas.height + 10;
        if (particle.y > canvas.height + 10) particle.y = -10;

        drawParticle(particle);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    createParticles();
    animate();

    const handleResize = () => {
      resizeCanvas();
      createParticles();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const footerSections = [
    {
      title: "Find Jobs",
      links: [
        "Browse All Jobs",
        "Remote Jobs",
        "Entry Level",
        "Senior Roles",
        "Salary Search",
      ],
      href: "jobs",
    },
    {
      title: "Support",
      links: [
        "Help Center",
        "Contact Us",
        "Live Chat",
        "Career Advice",
        "Success Stories",
      ],
      href: "contact-us",
    },
    {
      title: "Company",
      links: ["About Us", "Careers", "Press", "Partners"],
      href: "about-us",
    },
  ];

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  // Newsletter Component Logic
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail("");
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  // Floating particles animation
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 3 + Math.random() * 2,
  }));

  // Companies Carousel Logic
  const [companiesRef, companiesApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  // Ref hooks for animations
  const headerRef = useRef(null);
  const companiesContainerRef = useRef(null);
  const featuresRef = useRef(null);
  const ctaRef = useRef(null);
  const footerRef = useRef(null);

  // In-view hooks
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });
  const companiesInView = useInView(companiesContainerRef, {
    once: true,
    margin: "-100px",
  });
  const featuresInView = useInView(featuresRef, {
    once: true,
    margin: "-100px",
  });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });
  const footerInView = useInView(footerRef, { once: true, margin: "-100px" });

  // Companies data

  // Feature cards data
  const features = [
    {
      icon: Bell,
      title: "Email Notifications",
      description:
        "Get instant email alerts for job matches, application updates, and interview invitations. Never miss an opportunity again.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      benefits: [
        "Real-time job alerts",
        "Application status updates",
        "Interview reminders",
        "Personalized recommendations",
      ],
    },
    {
      icon: MapPin,
      title: "Area-Based Search",
      description:
        "Find jobs in your preferred locations with our advanced geo-targeting system. Discover opportunities near you or anywhere in the world.",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      benefits: [
        "Location-specific search",
        "Distance-based filtering",
        "Remote job discovery",
        "Commute time calculator",
      ],
    },
    {
      icon: Heart,
      title: "Priority for Handicap",
      description:
        "Dedicated support and priority placement for differently-abled professionals with inclusive employer partnerships.",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      benefits: [
        "Inclusive job matching",
        "Accessibility support",
        "Partner company network",
        "Career counseling",
      ],
    },
    {
      icon: Target,
      title: "Most Preferred Jobs",
      description:
        "Get matched with high-quality positions from top-tier companies that align with your career goals and preferences.",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      benefits: [
        "Premium job listings",
        "Company culture match",
        "Salary benchmarking",
        "Career growth tracking",
      ],
    },
    {
      icon: Sparkles,
      title: "Best Recommended for You",
      description:
        "AI-powered recommendations that learn from your preferences, skills, and career history to suggest perfect job matches.",
      color: "from-indigo-500 to-purple-500",
      bgColor: "bg-indigo-50",
      benefits: [
        "AI-powered matching",
        "Skill assessment",
        "Career path planning",
        "Personalized insights",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-x-hidden">
      {/* Particle Canvas Background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0"
        style={{ background: "transparent" }}
      />

      {/* Background Graphics */}
      <div className="fixed inset-0 z-0">
        {/* Primary gradient orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-2000" />

        {/* Geometric shapes */}
        <div className="absolute top-1/3 left-1/4 w-32 h-32 border border-blue-300/30 rounded-full animate-spin-slow transform rotate-45" />
        <div className="absolute top-1/2 right-1/4 w-24 h-24 border border-purple-300/30 animate-bounce" />

        {/* Floating particles */}
        <div className="absolute inset-0">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-30"
              animate={{
                y: [-20, 20, -20],
                x: [-10, 10, -10],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: particle.duration,
                delay: particle.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <main className="relative z-10">
        {/* Header Section */}
        <motion.section
          ref={headerRef}
          className="relative py-20 md:py-32 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={headerInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={
                headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent leading-tight">
                Powerful Features for
                <br />
                Your Career Success
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Discover advanced tools and intelligent features designed to
                accelerate your job search and connect you with the perfect
                opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  onClick={() => {
                    const section = document.getElementById("features");
                    section?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="bg-gradient-to-r from-blue-600 to-indigo-600  hover:from-blue-700 hover:to-indigo-700 font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <p className="text-white  z-50">Explore Features</p>
                  <ArrowDown className="ml-2 h-5 w-5 text-white z-50" />
                </Button>

                {/* <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-8 py-3 rounded-xl transition-all duration-300"
                >
                  Watch Demo
                </Button> */}
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Collaborated Companies Section */}
        <motion.section
          ref={companiesContainerRef}
          className="py-16 bg-gray-50/50"
          initial={{ opacity: 0 }}
          animate={companiesInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={
                companiesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                🏆 Trusted by Industry Leaders
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Join millions of professionals who trust our platform to connect
                with top companies worldwide
              </p>
            </motion.div>

            {/* logos */}
            <div className="w-full overflow-hidden bg-transparent py-6">
              <div className="flex animate-scroll gap-16">
                {duplicated.map((logo, index) => (
                  <div key={index} className="flex-shrink-0">
                    <img
                      src={logo}
                      alt={`logo-${index}`}
                      className="h-16 w-auto object-contain hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Features Cards Section */}
        <motion.section
          ref={featuresRef}
          className="py-20"
          initial={{ opacity: 0 }}
          animate={featuresInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="features">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={
                featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                Features That Set Us Apart
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Discover the intelligent tools and personalized features that
                make job searching effortless and effective
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="group"
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    featuresInView
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 30 }
                  }
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <div
                    className={`${feature.bgColor} rounded-3xl p-8 h-full transition-all duration-300 hover:shadow-2xl border border-gray-100 group-hover:border-gray-200`}
                  >
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {feature.title}
                    </h3>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {feature.description}
                    </p>

                    <div className="space-y-3">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <div
                          key={benefitIndex}
                          className="flex items-center space-x-3"
                        >
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-gray-700">
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* <Button
                      variant="ghost"
                      className="mt-6 w-full justify-between group-hover:bg-white/50 transition-colors duration-300"
                    >
                      Learn More
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button> */}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          ref={ctaRef}
          className="py-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 relative overflow-hidden"
          initial={{ opacity: 0 }}
          animate={ctaInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* CTA Background Graphics */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/90 via-indigo-600/90 to-purple-600/90" />
            <div className="absolute top-10 right-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse delay-2000" />
          </div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Career?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Join millions of professionals who have found their dream jobs
                through our intelligent platform. Your next opportunity is just
                a click away.
              </p>

             

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {[
                  { number: "2M+", label: "Active Users" },
                  { number: "50K+", label: "Companies" },
                  { number: "1M+", label: "Jobs Posted" },
                  { number: "95%", label: "Success Rate" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                  >
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                      {stat.number}
                    </div>
                    <div className="text-blue-100 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* footer section */}
        <footer className="bg-gray-900 w-full text-white py-20">
          <div className="container mx-auto px-6">
            {/* Main Footer Content */}
            <div className="grid lg:grid-cols-5 gap-12 mb-12">
              {/* Company Info */}
              <div className="lg:col-span-2">
                <div className="flex items-center space-x-3 mb-6">
                  <img src="./unigrowLogo.png" width={200} height={80} />
                </div>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  The world's leading career advancement platform, connecting
                  exceptional professionals with dream opportunities since 2020.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-400">
                      info@unigrowTalent.com
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-400">+91 120-4178-702</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-400">
                      Crossing Republic, Ghaziabad, U.P
                    </span>
                  </div>
                </div>
              </div>

              {/* Footer Links */}
              {footerSections.map((section, index) => (
                <div key={section.title}>
                  <h4 className="text-lg font-semibold mb-6">
                    {section.title}
                  </h4>
                  <ul className="space-y-3">
                    {section.links.map((link) => (
                      <li key={link}>
                        <a
                          href={section.href}
                          className="text-gray-400 hover:text-white transition-colors duration-200"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-gray-800 pt-8">
              <div className="flex flex-col lg:flex-row justify-between items-center">
                <p className="text-gray-400 mb-4 lg:mb-0">
                  © 2025 UnigrowTalent. All rights reserved.
                </p>
                <div className="flex space-x-6">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Features;
