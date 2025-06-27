import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { showErrorToast } from "../components/ui/toast";
import {
  Menu,
  X,
  Target,
  ChevronDown,
  Bell,
  Search,
  Building2,
  Sparkles,
  ArrowRight,
  Users,
  Briefcase,
  TrendingUp,
  Zap,
  Star,
  BarChart3,
  Shield,
  Clock,
  CheckCircle,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Quote,
  Award,
  HelpCircle,
  User,
  BookOpen,
  Mail,
  Phone,
  MapPin,
  Twitter,
  Linkedin,
  Facebook,
  Instagram,
  Heart,
  MapPin as Location,
  DollarSign,
  Filter,
  Play,
} from "lucide-react";




const EmployeeLandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [openIndex, setOpenIndex] = useState(0);
  const navigate=useNavigate()
  

  
  
  const handleClick=()=>{
     const storedUser = localStorage.getItem("User");
    console.log(storedUser);
    

    if(storedUser){
      navigate('/Jobs');

    }else{
      showErrorToast('Please Sign In');

    }
  }

  

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", hasDropdown: false },
    { name: "Find Jobs", hasDropdown: false },
    { name: "Browse Companies", hasDropdown: false },
    { name: "Career Resources", hasDropdown: false },
  ];

  const floatingElements = [
    { icon: Star, delay: 0, x: 100, y: 50 },
    { icon: Zap, delay: 1, x: -80, y: 80 },
    { icon: Sparkles, delay: 2, x: 120, y: -60 },
    { icon: Heart, delay: 0.5, x: -100, y: -40 },
  ];

  const companies = [
    { name: "TechCorp", logo: "TC", color: "from-blue-500 to-blue-600" },
    { name: "InnovateLab", logo: "IL", color: "from-purple-500 to-purple-600" },
    { name: "DataFlow", logo: "DF", color: "from-green-500 to-green-600" },
    { name: "CloudSync", logo: "CS", color: "from-orange-500 to-orange-600" },
    { name: "AI Dynamics", logo: "AD", color: "from-red-500 to-red-600" },
    { name: "FutureWork", logo: "FW", color: "from-teal-500 to-teal-600" },
    { name: "CodeCraft", logo: "CC", color: "from-indigo-500 to-indigo-600" },
    { name: "NextGen", logo: "NG", color: "from-pink-500 to-pink-600" },
  ];

  const features = [
    {
      icon: Target,
      title: "Smart Job Matching",
      description:
        "Our AI analyzes your skills, experience, and preferences to match you with perfect job opportunities that align with your career goals.",
      color: "from-blue-500 to-blue-600",
      stats: "98% match accuracy",
      delay: 0,
    },
    {
      icon: BarChart3,
      title: "Career Insights",
      description:
        "Get real-time salary insights, market trends, and career progression data to make informed decisions about your professional journey.",
      color: "from-purple-500 to-purple-600",
      stats: "Live market data",
      delay: 0.1,
    },
    {
      icon: Zap,
      title: "Fast Application Process",
      description:
        "Apply to multiple jobs with one-click applications, track your progress, and receive instant feedback from employers.",
      color: "from-orange-500 to-orange-600",
      stats: "3x faster applications",
      delay: 0.2,
    },
    {
      icon: Shield,
      title: "Verified Opportunities",
      description:
        "All job postings are verified and screened to ensure legitimacy, fair compensation, and quality work environments.",
      color: "from-green-500 to-green-600",
      stats: "100% verified jobs",
      delay: 0.3,
    },
    {
      icon: Clock,
      title: "24/7 Career Support",
      description:
        "Access career coaches, resume experts, and interview preparation resources whenever you need guidance in your job search.",
      color: "from-red-500 to-red-600",
      stats: "Always available",
      delay: 0.4,
    },
    {
      icon: Users,
      title: "Professional Network",
      description:
        "Connect with industry professionals, join career communities, and get referrals from your network to accelerate your job search.",
      color: "from-teal-500 to-teal-600",
      stats: "1M+ professionals",
      delay: 0.5,
    },
  ];

  const dashboardFeatures = [
    {
      label: "Job Applications",
      value: "12",
      icon: Briefcase,
      color: "blue",
      trend: "+4 this week",
    },
    {
      label: "Profile Views",
      value: "89",
      icon: Users,
      color: "green",
      trend: "+23 this week",
    },
    {
      label: "Interview Invites",
      value: "3",
      icon: Calendar,
      color: "purple",
      trend: "+2 pending",
    },
    {
      label: "Avg Response Time",
      value: "1.2d",
      icon: Clock,
      color: "orange",
      trend: "2x faster",
    },
  ];

  const activities = [
    {
      name: "TechCorp",
      action: "Viewed your profile",
      time: "2 min ago",
      avatar: "TC",
      status: "viewed",
    },
    {
      name: "InnovateLab",
      action: "Sent interview invite",
      time: "1 hour ago",
      avatar: "IL",
      status: "interview",
    },
    {
      name: "DataFlow",
      action: "Application accepted",
      time: "3 hours ago",
      avatar: "DF",
      status: "accepted",
    },
    {
      name: "CloudSync",
      action: "New job match found",
      time: "5 hours ago",
      avatar: "CS",
      status: "match",
    },
  ];

  const benefits = [
    {
      icon: BarChart3,
      title: "Career Growth Analytics",
      description:
        "Track your career progression with detailed insights into salary growth, skill development, and market positioning.",
      features: [
        "Salary progression tracking",
        "Skill gap analysis",
        "Market position insights",
        "Career roadmap planning",
      ],
    },
    {
      icon: Calendar,
      title: "Smart Interview Management",
      description:
        "Never miss an opportunity with AI-powered interview scheduling, preparation resources, and follow-up reminders.",
      features: [
        "Automated scheduling",
        "Interview preparation",
        "Follow-up reminders",
        "Video interview practice",
      ],
    },
    {
      icon: Users,
      title: "Professional Networking",
      description:
        "Build meaningful connections with industry professionals, mentors, and potential colleagues in your field.",
      features: [
        "Industry networking events",
        "Mentor matching",
        "Professional communities",
        "Referral opportunities",
      ],
    },
  ];

  const testimonials = [
    {
      name: "Alex Chen",
      title: "Software Engineer",
      company: "TechCorp Solutions",
      image: "AC",
      rating: 5,
      text: "Unigrow Talent helped me find my dream job in just 2 weeks! The AI matching was incredibly accurate, and I loved how easy it was to apply to multiple positions.",
      stats: { applications: 8, timeToHire: "2 weeks" },
    },
    {
      name: "Sarah Johnson",
      title: "Product Designer",
      company: "InnovateLab",
      image: "SJ",
      rating: 5,
      text: "The career insights and salary data helped me negotiate a 40% salary increase. The platform made job searching stress-free and actually enjoyable!",
      stats: { applications: 5, timeToHire: "3 weeks" },
    },
    {
      name: "Michael Rodriguez",
      title: "Data Scientist",
      company: "DataFlow Inc",
      image: "MR",
      rating: 5,
      text: "I was skeptical about job platforms, but Unigrow Talent changed my mind. The quality of opportunities and the personal career coaching made all the difference.",
      stats: { applications: 12, timeToHire: "1 month" },
    },
    {
      name: "Emily Davis",
      title: "Marketing Manager",
      company: "CloudSync",
      image: "ED",
      rating: 5,
      text: "From application to offer letter in just 10 days! The interview preparation resources and networking opportunities were invaluable for my career growth.",
      stats: { applications: 6, timeToHire: "10 days" },
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const goToPrevious = () => {
    setCurrentIndex(
      currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex(
      currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1
    );
  };

  const stats = [
    {
      icon: Briefcase,
      value: "250K+",
      label: "Dream Jobs Found",
      description: "Successful placements across industries",
      color: "from-blue-500 to-blue-600",
      delay: 0,
    },
    {
      icon: Users,
      value: "1M+",
      label: "Active Job Seekers",
      description: "Professionals advancing their careers",
      color: "from-green-500 to-green-600",
      delay: 0.1,
    },
    {
      icon: Star,
      value: "4.9",
      label: "Average Rating",
      description: "From job seekers worldwide",
      color: "from-yellow-500 to-yellow-600",
      delay: 0.2,
    },
    {
      icon: Clock,
      value: "2.5 weeks",
      label: "Average Job Search",
      description: "From signup to offer acceptance",
      color: "from-purple-500 to-purple-600",
      delay: 0.3,
    },
    {
      icon: TrendingUp,
      value: "40%",
      label: "Average Salary Increase",
      description: "Career advancement success rate",
      color: "from-red-500 to-red-600",
      delay: 0.4,
    },
    {
      icon: Award,
      value: "95%",
      label: "Job Satisfaction Rate",
      description: "Happy professionals after 1 year",
      color: "from-indigo-500 to-indigo-600",
      delay: 0.5,
    },
  ];

  const faqs = [
    {
      question:
        "How does Unigrow Talent match me with relevant job opportunities?",
      answer:
        "Our AI-powered system analyzes your skills, experience, career goals, salary expectations, and location preferences to find the most relevant opportunities. The algorithm learns from your application patterns and feedback to improve matches over time.",
    },
    {
      question: "Is Unigrow Talent free for job seekers?",
      answer:
        "Yes! Unigrow Talent is completely free for job seekers. You can create a profile, apply to jobs, access career resources, and use our networking features at no cost. We're committed to helping you advance your career without any barriers.",
    },
    {
      question: "How quickly can I expect to hear back from employers?",
      answer:
        "Most employers respond within 2-3 business days. Our platform encourages quick responses, and you'll receive real-time notifications about application status updates, profile views, and interview invitations.",
    },
    {
      question: "What career support resources do you provide?",
      answer:
        "We offer comprehensive career support including resume optimization, interview preparation, salary negotiation guidance, career coaching sessions, skill development resources, and networking opportunities with industry professionals.",
    },
    {
      question: "Can I control who sees my profile?",
      answer:
        "Absolutely! You have full control over your privacy settings. You can choose to make your profile visible to all employers, specific companies, or remain completely anonymous while browsing jobs. You can also block specific companies from seeing your profile.",
    },
    {
      question: "How do you verify that job postings are legitimate?",
      answer:
        "We thoroughly vet all employers and job postings before they go live. This includes company verification, salary range validation, and compliance checks. We also monitor for fraudulent activity and have a dedicated team to ensure all opportunities are genuine.",
    },
    {
      question: "Can I apply to jobs on mobile?",
      answer:
        "Yes! Our mobile app and responsive website allow you to search jobs, apply with one click, manage applications, and communicate with employers from anywhere. You'll also receive push notifications for new matches and updates.",
    },
    {
      question: "What if I'm currently employed and looking for a new role?",
      answer:
        "We understand the need for discretion. You can use our confidential job search features, control your visibility settings, and apply anonymously. Many of our users successfully transition to new roles while maintaining their current employment.",
    },
  ];

  const articles = [
    {
      title: "How to Optimize Your Profile for Maximum Visibility",
      excerpt:
        "Learn the essential elements of a standout professional profile that attracts employers and increases your chances of landing interviews.",
      author: "Career Team",
      date: "Dec 15, 2024",
      readTime: "5 min read",
      category: "Profile Tips",
      image: "bg-gradient-to-br from-blue-500 to-purple-600",
    },
    {
      title: "Mastering Virtual Interview Skills",
      excerpt:
        "Essential tips and techniques for excelling in video interviews, from technical setup to building rapport with interviewers remotely.",
      author: "Interview Experts",
      date: "Dec 12, 2024",
      readTime: "7 min read",
      category: "Interview Prep",
      image: "bg-gradient-to-br from-green-500 to-teal-600",
    },
    {
      title: "2024 Salary Negotiation Strategies",
      excerpt:
        "Data-driven approaches to salary negotiation, including market research, timing strategies, and conversation frameworks for maximum success.",
      author: "Salary Specialists",
      date: "Dec 10, 2024",
      readTime: "8 min read",
      category: "Career Growth",
      image: "bg-gradient-to-br from-orange-500 to-red-600",
    },
  ];

  const seals = [
    {
      icon: Shield,
      title: "SOC 2 Compliant",
      description: "Your data is protected with enterprise-grade security",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Award,
      title: "ISO 27001 Certified",
      description: "International information security standards",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock career assistance",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: CheckCircle,
      title: "GDPR Compliant",
      description: "Your privacy rights are fully protected",
      color: "from-orange-500 to-orange-600",
    },
  ];

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

  return (
    <>
      {/* Header */}

      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-teal-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Enhanced Mobile Menu */}

      {/* Hero Section */}
      <section className="relative min-h-screen pt-4 w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        {/* Enhanced Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[size:50px_50px]" />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-teal-500/10" />
        </div>

        {/* Floating Elements */}
        {floatingElements.map((element, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: element.delay, duration: 1 }}
            className={`absolute z-10 text-white/20 transform translate-x-${element.x} translate-y-${element.y}`}
            style={{
              left: `${20 + index * 20}%`,
              top: `${20 + index * 15}%`,
            }}
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: element.delay,
              }}
            >
              <element.icon className="w-8 h-8" />
            </motion.div>
          </motion.div>
        ))}

        <div className="container mx-auto px-6 relative z-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Enhanced Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              {/* Animated Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-8"
              >
                <Sparkles className="w-5 h-5 text-yellow-400" />
                <span className="text-sm font-semibold">
                  🎯 #1 Job Platform for Professionals
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl lg:text-7xl font-bold leading-tight mb-6"
              >
                Find Your Dream Job <br />
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Faster Than Ever
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl lg:text-2xl text-white/80 mb-8 max-w-2xl leading-relaxed"
              >
                Discover perfect opportunities with our{" "}
                <span className="text-blue-400 font-semibold">
                  AI-powered platform
                </span>{" "}
                that matches your skills and career goals with the right
                employers.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 mb-12 flex items-center justify-center"
              >
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 25px 50px rgba(59, 130, 246, 0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleClick()}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
                >
                  Find Jobs Now
                </motion.button>
              </motion.div>

              {/* Enhanced Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="grid grid-cols-3 gap-6"
              >
                {[
                  {
                    icon: Users,
                    value: "1M+",
                    label: "Job Seekers",
                    color: "from-blue-400 to-blue-600",
                  },
                  {
                    icon: Briefcase,
                    value: "250K+",
                    label: "Jobs Found",
                    color: "from-purple-400 to-purple-600",
                  },
                  {
                    icon: TrendingUp,
                    value: "40%",
                    label: "Salary Increase",
                    color: "from-green-400 to-green-600",
                  },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="text-center"
                  >
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg`}
                    >
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-white/60 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Enhanced Right Content - Interactive Dashboard */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Main Dashboard Card */}
              <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-white text-xl font-bold">Job Matches</h3>
                  <span className="text-green-400 text-sm font-semibold">
                    98% compatibility found
                  </span>
                  <div className="flex space-x-2">
                    {["red", "yellow", "green"].map((color, i) => (
                      <div
                        key={i}
                        className={`w-3 h-3 rounded-full bg-${color}-400`}
                      />
                    ))}
                  </div>
                </div>

                {/* Job Matches */}
                <div className="space-y-4 mb-6">
                  {[
                    {
                      role: "Senior Software Engineer",
                      company: "TechCorp",
                      match: "98%",
                      color: "green",
                      salary: "$120K-$150K",
                    },
                    {
                      role: "Product Designer",
                      company: "InnovateLab",
                      match: "95%",
                      color: "blue",
                      salary: "$90K-$120K",
                    },
                    {
                      role: "Data Scientist",
                      company: "DataFlow",
                      match: "92%",
                      color: "purple",
                      salary: "$110K-$140K",
                    },
                  ].map((job, index) => (
                    <motion.div
                      key={job.role}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 + index * 0.2 }}
                      className="bg-white/10 rounded-2xl p-4 border border-white/10 hover:bg-white/20 transition-all duration-300 cursor-pointer"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-white font-semibold">
                            {job.role}
                          </h4>
                          <p className="text-white/60 text-sm">{job.company}</p>
                          <p className="text-green-400 text-sm font-medium">
                            {job.salary}
                          </p>
                        </div>
                        <div
                          className={`px-3 py-1 bg-${job.color}-500/20 text-${job.color}-400 rounded-full text-sm font-semibold`}
                        >
                          {job.match}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Enhanced Floating Elements */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 }}
                  className="absolute -top-6 -right-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-4 shadow-xl border border-white/20"
                >
                  <div className="text-white text-center">
                    <Users className="w-6 h-6 mx-auto mb-2" />
                    <div className="text-sm font-bold">Active Employers</div>
                    <div className="text-xs opacity-80">2,847 hiring now</div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.4 }}
                  className="absolute -bottom-6 -left-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-4 shadow-xl border border-white/20"
                >
                  <div className="text-white text-center">
                    <Clock className="w-6 h-6 mx-auto mb-2" />
                    <div className="text-lg font-bold">2.5 weeks</div>
                    <div className="text-xs opacity-80">Avg. Job Search</div>
                  </div>
                </motion.div>

                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.3)_1px,transparent_0)] bg-[size:20px_20px]" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 w-full to-white relative overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Trusted Worldwide
            </h2>
            <p className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
              Join{" "}
              <span className="text-blue-600 font-semibold">
                1Lakh+ professionals
              </span>{" "}
              who found their dream jobs with top companies
            </p>
          </motion.div>

          {/* Enhanced Company Grid */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          >
            {companies.map((company, index) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${company.color} rounded-xl flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                >
                  {company.logo}
                </div>
                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  {company.name}
                </h3>
                {/* Floating particles on hover */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-bounce" />
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white relative overflow-hidden"
          >
            <div className="relative z-10">
              <div className="flex items-center justify-center space-x-4 mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    className="w-8 h-8 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <h3 className="text-3xl font-bold mb-2">
                1,000,000+ Professionals
              </h3>
              <p className="text-xl text-blue-100">
                Successfully matched with their dream careers
              </p>
            </div>
            {/* Enhanced Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.3)_1px,transparent_0)] bg-[size:30px_30px]" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 w-full bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Why Choose Unigrow Talent
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto">
              The Future of{" "}
              <span className="text-blue-600 font-semibold">
                Smart Job Search
              </span>
            </p>
            <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
              Experience the next generation of career advancement with
              AI-driven features designed to match you with perfect
              opportunities faster than ever before.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: feature.delay, duration: 0.8 }}
                whileHover={{ y: -10 }}
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
              >
                {/* Background gradient on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}
                />

                {/* Floating icon */}
                <div className="relative mb-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  {/* Pulsing ring */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-2xl opacity-20 scale-110 group-hover:scale-125 transition-transform duration-300`}
                  />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>

                {/* Stats badge */}
                <div className="flex items-center justify-between">
                  <span
                    className={`px-4 py-2 bg-gradient-to-r ${feature.color} text-white rounded-full text-sm font-semibold shadow-lg`}
                  >
                    {feature.stats}
                  </span>
                  {/* Animated progress bar */}
                  <div className="flex-1 ml-4">
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "85%" }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + index * 0.1, duration: 1 }}
                        className={`h-full bg-gradient-to-r ${feature.color} rounded-full`}
                      />
                    </div>
                  </div>
                </div>
                {/* Hover arrow
                <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-2 transition-all duration-300 mt-4 opacity-0 group-hover:opacity-100" /> */}
              </motion.div>
            ))}
          </div>

          {/* Enhanced CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-20 relative"
          >
            {/* Background pattern */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl" />
            <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white overflow-hidden">
              <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                Ready to Transform Your Career?
              </h3>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Join millions of professionals who have found their dream jobs
                through our platform
              </p>
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 25px 50px rgba(255, 255, 255, 0.3)",
                }}
                onClick={()=>{handleClick()}}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-blue-600 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Start Your Job Search
              </motion.button>

              {/* Enhanced Background Elements */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-yellow-400/20 rounded-full blur-2xl" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Dashboard Section */}
      <section className="py-24 bg-gradient-to-br w-full from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Everything You Need to{" "}
              <span className="text-blue-600">Succeed</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful tools and intelligent insights to track your job search
              progress and accelerate your career growth
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Enhanced Dashboard Preview */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Dashboard Header */}
              <div className="bg-white rounded-t-3xl p-6 shadow-lg border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-gray-900">
                    Career Dashboard
                  </h3>
                  <span className="text-sm text-gray-500">
                    Real-time insights
                  </span>
                  <div className="flex space-x-2">
                    {["red", "yellow", "green"].map((color, i) => (
                      <div
                        key={i}
                        className={`w-3 h-3 rounded-full bg-${color}-400`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Enhanced Stats Grid */}
              <div className="bg-white p-6 grid grid-cols-2 gap-4">
                {dashboardFeatures.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gray-50 rounded-2xl p-4 hover:bg-gray-100 transition-colors duration-300"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
                      <span className="text-green-600 text-xs font-semibold bg-green-100 px-2 py-1 rounded-full">
                        {stat.trend}
                      </span>
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Enhanced Activity Feed */}
              <div className="bg-white rounded-b-3xl p-6 shadow-lg">
                <h4 className="font-semibold text-gray-900 mb-4">
                  Live Activity Feed
                </h4>
                <div className="space-y-3">
                  {activities.map((activity, index) => (
                    <motion.div
                      key={activity.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-50 transition-colors duration-200"
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                        {activity.avatar}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-900">
                          <span className="font-semibold">{activity.name}</span>
                        </p>
                        <p className="text-xs text-gray-600">
                          {activity.action}
                        </p>
                        <p className="text-xs text-gray-400">{activity.time}</p>
                      </div>
                      <div
                        className={`w-2 h-2 rounded-full ${
                          activity.status === "interview"
                            ? "bg-green-400"
                            : activity.status === "accepted"
                            ? "bg-blue-400"
                            : activity.status === "match"
                            ? "bg-purple-400"
                            : "bg-gray-400"
                        }`}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Enhanced Floating Elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -top-6 -right-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-4 shadow-xl text-white"
              >
                <div className="text-center">
                  <CheckCircle className="w-6 h-6 mx-auto mb-2" />
                  <div className="text-lg font-bold">98% Match</div>
                  <div className="text-xs opacity-80">Perfect job found</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="absolute -bottom-6 -left-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-4 shadow-xl text-white"
              >
                <div className="text-center">
                  <TrendingUp className="w-6 h-6 mx-auto mb-2" />
                  <div className="text-lg font-bold">+47%</div>
                  <div className="text-xs opacity-80">Career Growth</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Enhanced Benefits List */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {benefit.description}
                      </p>
                      <ul className="space-y-2">
                        {benefit.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-500" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

       

      {/* Stats Section */}
      <section className="py-24 w-full z-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white  overflow-hidden">
       
       
       
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Trusted by Professionals{" "}
              <span className="text-blue-400">Worldwide</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Our numbers speak for themselves. Join millions of professionals
              who have transformed their careers with Unigrow Talent.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: stat.delay, duration: 0.8 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group text-center bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl lg:text-5xl font-bold mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-xl font-semibold mb-2">{stat.label}</div>
                <div className="text-white/60 text-sm">{stat.description}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <p className="text-xl text-white/80 mb-8">
              Join the growing community of successful professionals
            </p>
           <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 25px 50px rgba(255, 255, 255, 0.2)",
              }}
              whileTap={{ scale: 0.95 }}
             
              className="px-8 py-4 z-5 bg-white text-blue-600 cursor-pointer rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              onClick={handleClick}
            >
              Start Your Career Journey
            </motion.button>
          </motion.div>
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.2)_1px,transparent_0)] bg-[size:50px_50px]" />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 w-full bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked <span className="text-blue-600">Questions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about advancing your career with
              Unigrow Talent
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="mb-4"
              >
                <motion.button
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-300 bg-white rounded-2xl shadow-lg border border-gray-100"
                  whileHover={{ backgroundColor: "rgba(243, 244, 246, 0.8)" }}
                >
                  <span className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-6 h-6 text-gray-500 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </motion.button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="bg-white border-t border-gray-100 rounded-b-2xl overflow-hidden"
                    >
                      <p className="px-6 py-6 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-16"
          >
            <p className="text-lg text-gray-600 mb-6">Still have questions?</p>
            <p className="text-gray-500 mb-8">
              Our career support team is here to help you succeed with your job
              search goals.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={()=>{navigate('/contact-us')}}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Contact Career Support
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-24 w-full bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Career <span className="text-blue-600">Resources</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert insights and practical guides to help you advance your
              career, master interviews, and negotiate better offers
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {articles.map((article, index) => (
              <motion.article
                key={article.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
              >
                {/* Article Image */}
                <div
                  className={`h-48 ${article.image} relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 text-gray-900 rounded-full text-sm font-semibold">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Article Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {article.excerpt}
                  </p>

                  {/* Article Meta */}
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span className="font-medium text-gray-700">
                      {article.author}
                    </span>
                    <span>{article.date}</span>
                    <span className="font-medium">{article.readTime}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center -mt-10"
          >
          </motion.div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20 w-full bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Trusted &amp; Secure Platform
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your career data and personal information are protected by
              industry-leading security standards
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {seals.map((seal, index) => (
              <motion.div
                key={seal.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${seal.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
                >
                  <seal.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {seal.title}
                </h3>
                <p className="text-gray-600 text-sm">{seal.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <p className="text-gray-600">
              Bank-level encryption • 99.9% uptime • Regular security audits
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
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
                  <span className="text-gray-400">info@unigrowTalent.com</span>
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
                <h4 className="text-lg font-semibold mb-6">{section.title}</h4>
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

      
    </>
  );
};

export default EmployeeLandingPage;
