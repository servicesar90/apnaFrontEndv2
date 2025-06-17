import React, { useState, useEffect, useRef } from "react";
import {useNavigate} from "react-router-dom"
// import CandidateLoginModal from "../modals/loginModals/CandidateLoginModal";
import { showErrorToast, showSuccessToast } from '../components/ui/toast.jsx';
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  Search,
  MapPin,
  Users,
  Building2,
  Star,
  Clock,
  DollarSign,
  CheckCircle,
  ChevronLeft,
  Menu,
  X,
  Mail,
  Phone,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Briefcase,
  Globe,
  Code,
  TrendingUp,
  Award,
  Heart,
  Eye,
  ChevronDown,
  Target,
  Sparkles,
  Rocket,
  Shield,
  ArrowRight,
  Trophy,
  Zap,
} from "lucide-react";
import { Button } from "../components/landingPageContent/button";
import { Card, CardContent } from "../components/landingPageContent/card";
import { Badge } from "../components/landingPageContent/badge";
import useEmblaCarousel from "embla-carousel-react";

const JobPlatformLandingPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedExperience, setSelectedExperience] =
    useState("Select experience");
    const [showLoginModal, setShowLoginModal] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [currentStatIndex, setCurrentStatIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const navigate= useNavigate()

  // Multiple carousel refs
  const [testimonialsRef, testimonialsApi] = useEmblaCarousel({ loop: true });
  const [companiesRef, companiesApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    dragFree: true,
    containScroll: "trimSnaps",
  });
  const [jobsRef, jobsApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });
  const [categoriesRef, categoriesApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    dragFree: true,
  });

  // Scroll refs for animations
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const categoriesContainerRef = useRef(null);
  const companiesContainerRef = useRef(null);
  const jobsContainerRef = useRef(null);
  const testimonialsContainerRef = useRef(null);
  const ctaRef = useRef(null);

  // Scroll-triggered animations
  // const { scrollYProgress } = useScroll();

  const heroInView = useInView(heroRef);
  const statsInView = useInView(statsRef);
  const categoriesInView = useInView(categoriesContainerRef);
  const companiesInView = useInView(companiesContainerRef);
  const jobsInView = useInView(jobsContainerRef);
  const testimonialsInView = useInView(testimonialsContainerRef);
  const ctaInView = useInView(ctaRef);

  // Auto-scroll carousels
  useEffect(() => {
    const intervals = [];

    if (testimonialsApi) {
      intervals.push(setInterval(() => testimonialsApi.scrollNext(), 4000));
    }
    if (companiesApi) {
      intervals.push(setInterval(() => companiesApi.scrollNext(), 3000));
    }
    if (categoriesApi) {
      intervals.push(setInterval(() => categoriesApi.scrollNext(), 2500));
    }

    return () => intervals.forEach(clearInterval);
  }, [testimonialsApi, companiesApi, categoriesApi]);

  // Stats animation
  useEffect(() => {
    if (statsInView) {
      const interval = setInterval(() => {
        setCurrentStatIndex((prev) => (prev + 1) % 3);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [statsInView]);

  // Floating particles animation
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 3 + Math.random() * 2,
  }));

  // Job categories with enhanced data
  const jobCategories = [
    {
      icon: <Globe className="w-6 h-6" />,
      name: "Remote",
      count: "12K+",
      color: "bg-blue-100 text-blue-700",
      growth: "+15%",
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      name: "MNC",
      count: "8.5K+",
      color: "bg-purple-100 text-purple-700",
      growth: "+8%",
    },
    {
      icon: <Users className="w-6 h-6" />,
      name: "HR",
      count: "2.1K+",
      color: "bg-green-100 text-green-700",
      growth: "+12%",
    },
    {
      icon: <Code className="w-6 h-6" />,
      name: "Software & IT",
      count: "15K+",
      color: "bg-orange-100 text-orange-700",
      growth: "+22%",
    },
    {
      icon: <Award className="w-6 h-6" />,
      name: "Fresher",
      count: "9.2K+",
      color: "bg-pink-100 text-pink-700",
      growth: "+18%",
    },
    {
      icon: <Target className="w-6 h-6" />,
      name: "Project Mgmt",
      count: "1.8K+",
      color: "bg-indigo-100 text-indigo-700",
      growth: "+10%",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      name: "Sales",
      count: "6.7K+",
      color: "bg-red-100 text-red-700",
      growth: "+14%",
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      name: "Banking",
      count: "3.4K+",
      color: "bg-emerald-100 text-emerald-700",
      growth: "+9%",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      name: "Cybersecurity",
      count: "1.2K+",
      color: "bg-gray-100 text-gray-700",
      growth: "+25%",
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      name: "Startup",
      count: "4.1K+",
      color: "bg-yellow-100 text-yellow-700",
      growth: "+30%",
    },
  ];

  // Enhanced companies data
  const topCompanies = [
    {
      id: 1,
      name: "TechCorp Inc.",
      logo: "🏢",
      category: "Technology",
      hiringCount: "2.1K+",
      rating: 4.8,
      reviews: "12.5K+",
      description:
        "Leading technology company specializing in cloud solutions and AI innovation.",
      tags: ["Tech", "AI/ML", "Cloud", "Product"],
      trending: true,
      verified: true,
      featured: true,
    },
    {
      id: 2,
      name: "FinanceFlow",
      logo: "💼",
      category: "Fintech",
      hiringCount: "890",
      rating: 4.6,
      reviews: "8.2K+",
      description:
        "Revolutionary fintech company transforming digital payments.",
      tags: ["Fintech", "Payments", "B2C", "Unicorn"],
      trending: false,
      verified: true,
      featured: true,
    },
    {
      id: 3,
      name: "HealthTech Pro",
      logo: "🏥",
      category: "Healthcare",
      hiringCount: "1.5K+",
      rating: 4.9,
      reviews: "6.8K+",
      description: "Healthcare technology leader improving patient outcomes.",
      tags: ["Healthcare", "MedTech", "B2B"],
      trending: true,
      verified: true,
      featured: false,
    },
    {
      id: 4,
      name: "EduLearn",
      logo: "📚",
      category: "EdTech",
      hiringCount: "560",
      rating: 4.7,
      reviews: "3.1K+",
      description:
        "Educational technology startup creating personalized learning.",
      tags: ["EdTech", "E-learning", "B2C"],
      trending: false,
      verified: true,
      featured: false,
    },
    {
      id: 5,
      name: "GreenEnergy Co",
      logo: "🌱",
      category: "Renewable",
      hiringCount: "340",
      rating: 4.5,
      reviews: "2.8K+",
      description:
        "Sustainable energy solutions for the bright and successful future.",
      tags: ["Green Tech", "Energy", "Sustainability"],
      trending: true,
      verified: true,
      featured: true,
    },
  ];

  // Enhanced featured jobs
  const featuredJobs = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      company: "TechCorp Inc.",
      location: "Bangalore, India",
      salary: "₹25-35 LPA",
      experience: "4-7 years",
      type: "Full-time",
      skills: ["React", "Node.js", "TypeScript", "MongoDB"],
      posted: "2 days ago",
      applicants: 145,
      views: 1200,
      urgent: true,
      companyLogo: "🏢",
      description: "Join our innovative team to build scalable applications.",
      perks: ["Health Insurance", "Flexible Hours", "Remote Work"],
      trending: true,
      verified: true,
      popularity: 95,
    },
    {
      id: 2,
      title: "Senior UX/UI Designer",
      company: "FinanceFlow",
      location: "Mumbai, India",
      salary: "₹18-28 LPA",
      experience: "3-6 years",
      type: "Full-time",
      skills: ["Figma", "Sketch", "Prototyping", "User Research"],
      posted: "1 week ago",
      applicants: 89,
      views: 890,
      urgent: false,
      companyLogo: "💼",
      description: "Design intuitive financial products for millions.",
      perks: ["Stock Options", "Learning Budget", "Health Insurance"],
      trending: false,
      verified: true,
      popularity: 88,
    },
    {
      id: 3,
      title: "Data Science Manager",
      company: "HealthTech Pro",
      location: "Hyderabad, India",
      salary: "₹30-45 LPA",
      experience: "5-8 years",
      type: "Full-time",
      skills: ["Python", "Machine Learning", "SQL", "Leadership"],
      posted: "3 days ago",
      applicants: 67,
      views: 750,
      urgent: true,
      companyLogo: "🏥",
      description: "Lead data science initiatives in healthcare AI.",
      perks: ["Performance Bonus", "Team Lead Role", "International Travel"],
      trending: true,
      verified: true,
      popularity: 92,
    },
    {
      id: 4,
      title: "Product Manager - Growth",
      company: "EduLearn",
      location: "Pune, India",
      salary: "₹22-32 LPA",
      experience: "4-6 years",
      type: "Full-time",
      skills: ["Product Strategy", "Analytics", "A/B Testing"],
      posted: "5 days ago",
      applicants: 123,
      views: 980,
      urgent: false,
      companyLogo: "📚",
      description: "Drive user acquisition for educational platform.",
      perks: ["Equity", "Flexible WFH", "Professional Development"],
      trending: false,
      verified: true,
      popularity: 85,
    },
    {
      id: 5,
      title: "DevOps Architect",
      company: "TechCorp Inc.",
      location: "Chennai, India",
      salary: "₹28-40 LPA",
      experience: "6-9 years",
      type: "Full-time",
      skills: ["AWS", "Kubernetes", "Docker", "Terraform"],
      posted: "1 day ago",
      applicants: 201,
      views: 1500,
      urgent: true,
      companyLogo: "🏢",
      description: "Architect cloud infrastructure for scale.",
      perks: ["AWS Certification", "Conference Budget", "Premium Health"],
      trending: true,
      verified: true,
      popularity: 98,
    },
    {
      id: 6,
      title: "Sustainability Engineer",
      company: "GreenEnergy Co",
      location: "Delhi NCR, India",
      salary: "₹20-30 LPA",
      experience: "3-5 years",
      type: "Full-time",
      skills: [
        "Renewable Energy",
        "Environmental Engineering",
        "Project Management",
      ],
      posted: "4 days ago",
      applicants: 78,
      views: 650,
      urgent: false,
      companyLogo: "🌱",
      description: "Build sustainable energy solutions for tomorrow.",
      perks: ["Green Incentives", "Research Budget", "Impact Work"],
      trending: true,
      verified: true,
      popularity: 87,
    },
  ];

  // Enhanced testimonials
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Software Engineer",
      company: "TechCorp Inc.",
      avatar: "👩‍💻",
      experience: "400% salary increase",
      content:
        "JobPortal transformed my career completely! From a small-town developer to working at a top tech company. The AI matching was spot-on, and I got my dream job within 2 weeks.",
      rating: 5,
      location: "Bangalore",
      joinedDate: "6 months ago",
      verified: true,
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      role: "Talent Acquisition Manager",
      company: "FinanceFlow",
      avatar: "👨‍💼",
      experience: "Hired 100+ candidates",
      content:
        "As a recruiter, JobPortal has been game-changing. The quality of candidates is exceptional, and our hiring time reduced by 60%. Best platform for talent acquisition.",
      rating: 5,
      location: "Mumbai",
      joinedDate: "1 year ago",
      verified: true,
    },
    {
      id: 3,
      name: "Sneha Patel",
      role: "Senior UX Designer",
      company: "HealthTech Pro",
      avatar: "👩‍🎨",
      experience: "Dream company achieved",
      content:
        "From struggling freelancer to senior designer at a unicorn! JobPortal's career guidance and skill assessments helped me identify my strengths and land my dream role.",
      rating: 5,
      location: "Hyderabad",
      joinedDate: "8 months ago",
      verified: true,
    },
    {
      id: 4,
      name: "Amit Singh",
      role: "Data Scientist",
      company: "EduLearn",
      avatar: "👨‍🔬",
      experience: "Perfect role match",
      content:
        "The AI-powered matching is incredible! It found opportunities I never would have discovered. The platform understands skills better than traditional job boards.",
      rating: 5,
      location: "Pune",
      joinedDate: "4 months ago",
      verified: true,
    },
    {
      id: 5,
      name: "Kavya Reddy",
      role: "Product Manager",
      company: "GreenEnergy Co",
      avatar: "👩‍💼",
      experience: "Career pivot success",
      content:
        "Successfully transitioned from engineering to product management with JobPortal's guidance. The interview prep and skill recommendations were invaluable.",
      rating: 5,
      location: "Delhi",
      joinedDate: "3 months ago",
      verified: true,
    },
  ];

  const stats = [
    {
      label: "Active Jobs",
      value: "50K+",
      icon: <Briefcase className="w-8 h-8" />,
    },
    {
      label: "Happy Users",
      value: "2M+",
      icon: <Users className="w-8 h-8" />,
    },
    {
      label: "Success Stories",
      value: "10K+",
      icon: <Trophy className="w-8 h-8" />,
    },
  ];

  const experienceOptions = [
    "Fresher (0 years)",
    "1-2 years",
    "3-5 years",
    "6-10 years",
    "10+ years",
  ];


    const handleSearchClick = () => {
    const isLoggedIn = localStorage.getItem("User"); // Or however you check auth

    if (isLoggedIn) {
      navigate("/jobs");
    } else {
      showErrorToast("Please SignIn");
    }
  };

  return (
    <div className="min-h-screen bg-white relative overflow-x-hidden">
      {/* Floating Particles Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute w-2 h-2 bg-blue-200 rounded-full opacity-30"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
              }}
              animate={{
                y: [-20, 20],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: particle.duration,
                delay: particle.delay,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>
      </div>

      {/* Header */}
     

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative py-20 lg:py-32 bg-gradient-to-br from-blue-50 via-white to-purple-50"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-10 text-blue-200"
            animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Code className="w-8 h-8" />
          </motion.div>
          <motion.div
            className="absolute top-40 right-20 text-purple-200"
            animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          >
            <Rocket className="w-10 h-10" />
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                Find your{" "}
                <motion.span
                  className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent relative"
                  animate={{ scale: isHovered ? 1.05 : 1 }}
                  transition={{ duration: 0.2 }}
                >
                  dream job
                </motion.span>{" "}
                now
              </motion.h1>

              <motion.p
                className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                5 lakh+{" "}
                <span className="font-semibold text-blue-600">
                  jobs for you to explore
                </span>
              </motion.p>

              {/* Search Bar */}
              <motion.div
                className="max-w-5xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Card className="p-2 shadow-2xl border-0 bg-white/90 backdrop-blur">
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
                      {/* Skills Input */}
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
                          <Search className="w-5 h-5 text-gray-400" />
                        </div>
                        <input
                          type="text"
                          placeholder="Skills, designations, companies"
                          className="w-full pl-12 pr-4 py-4 border-0 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 rounded-lg bg-gray-50 transition-all duration-300"
                        />
                      </div>

                      {/* Experience Dropdown */}
                      <div className="relative">
                        <select
                          value={selectedExperience}
                          onChange={(e) =>
                            setSelectedExperience(e.target.value)
                          }
                          className="w-full px-4 py-4 border-0 text-gray-900 focus:ring-2 focus:ring-blue-500 rounded-lg bg-gray-50 appearance-none cursor-pointer transition-all duration-300"
                        >
                          <option value="Select experience" disabled>
                            Select experience
                          </option>
                          {experienceOptions.map((exp) => (
                            <option key={exp} value={exp}>
                              {exp}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                      </div>

                      {/* Location Input */}
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
                          <MapPin className="w-5 h-5 text-gray-400" />
                        </div>
                        <input
                          type="text"
                          placeholder="Enter location"
                          value={selectedLocation}
                          onChange={(e) => setSelectedLocation(e.target.value)}
                          className="w-full pl-12 pr-4 py-4 border-0 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 rounded-lg bg-gray-50 transition-all duration-300"
                        />
                      </div>

                      {/* Search Button */}
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button className="w-full h-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold text-lg shadow-lg"
                          onClick={handleSearchClick}>
                          <Search className="w-5 h-5 mr-2" />
                          Search
                        </Button>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div
              ref={statsRef}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
              initial={{ opacity: 0, y: 40 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center p-6 bg-white/50 backdrop-blur rounded-2xl border border-white/20 shadow-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={statsInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    className="mx-auto mb-4 text-blue-600"
                    animate={
                      currentStatIndex === index
                        ? { scale: [1, 1.2, 1], rotate: [0, 10, 0] }
                        : {}
                    }
                    transition={{ duration: 0.5 }}
                  >
                    {stat.icon}
                  </motion.div>
                  <motion.div
                    className="text-3xl font-bold text-gray-900 mb-2"
                    animate={
                      currentStatIndex === index ? { scale: [1, 1.1, 1] } : {}
                    }
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section
        ref={categoriesContainerRef}
        className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={categoriesInView ? { opacity: 1, y: 0 } : {}}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
              whileHover={{ scale: 1.02 }}
            >
              🔥 Trending on JobPortal today
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Explore the hottest job categories with amazing growth
            </motion.p>
          </motion.div>

          <div className="relative">
            <div className="embla overflow-hidden" ref={categoriesRef}>
              <div className="embla__container flex">
                {jobCategories.map((category, index) => (
                  <motion.div
                    key={category.name}
                    className="embla__slide flex-[0_0_300px] min-w-0 mr-6"
                    initial={{ opacity: 0, x: 50 }}
                    animate={categoriesInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.1 }}
                  >
                    <motion.div
                      className="relative group cursor-pointer"
                      whileHover={{ scale: 1.05, y: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Card className="p-6 h-full bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border-0 group-hover:border-blue-200">
                        <CardContent className="p-0 text-center">
                          <motion.div
                            className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 ${category.color}`}
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                          >
                            {category.icon}
                          </motion.div>
                          <motion.h3
                            className="text-xl font-semibold text-gray-900 mb-2"
                            whileHover={{ scale: 1.05 }}
                          >
                            {category.name}
                          </motion.h3>
                          <motion.p
                            className="text-2xl font-bold text-blue-600 mb-2"
                            whileHover={{ scale: 1.1 }}
                          >
                            {category.count}
                          </motion.p>
                          <motion.p
                            className="text-sm text-green-600 font-medium"
                            whileHover={{ scale: 1.05 }}
                          >
                            <TrendingUp className="w-4 h-4 inline mr-1" />
                            {category.growth} this month
                          </motion.p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex justify-center mt-8 space-x-4">
              <motion.button
                onClick={() => categoriesApi?.scrollPrev()}
                className="w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-blue-50 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="w-6 h-6 text-blue-600" />
              </motion.button>
              <motion.button
                onClick={() => categoriesApi?.scrollNext()}
                className="w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-blue-50 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="w-6 h-6 text-blue-600" />
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* Top Companies Section */}
      <section ref={companiesContainerRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={companiesInView ? { opacity: 1, y: 0 } : {}}
          >
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4"
              whileHover={{ scale: 1.02 }}
            >
              🏆 Top companies hiring now
            </motion.h2>
            <motion.p
              className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Join thousands of professionals at industry leaders
            </motion.p>
          </motion.div>

          <div className="relative">
            <div className="embla overflow-x-auto" ref={companiesRef}>
              <div className="embla__container flex space-x-4">
                {topCompanies.map((company, index) => (
                  <motion.div
                    key={company.id}
                    className="embla__slide flex-[0_0_90%] sm:flex-[0_0_400px] min-w-0"
                    initial={{ opacity: 0, x: 50 }}
                    animate={companiesInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.1 }}
                  >
                    <motion.div
                      className="group cursor-pointer"
                      whileHover={{ scale: 1.02, y: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Card className="h-full bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group-hover:border-blue-200 overflow-hidden relative">
                        {company.featured && (
                          <Badge className="absolute top-4 left-4 z-10 bg-yellow-500 text-white">
                            ⭐ Featured
                          </Badge>
                        )}
                        {company.trending && (
                          <Badge className="absolute top-4 right-4 z-10 bg-red-500 text-white">
                            🔥 Trending
                          </Badge>
                        )}

                        <CardContent className="p-6">
                          <div className="flex items-start justify-between mb-6">
                            <div className="flex items-center space-x-4">
                              <motion.div
                                className="relative"
                                whileHover={{ scale: 1.1, rotate: 5 }}
                              >
                                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center text-2xl">
                                  {company.logo}
                                  {company.verified && (
                                    <motion.div
                                      className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center"
                                      animate={{ scale: [1, 1.2, 1] }}
                                      transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                      }}
                                    >
                                      <CheckCircle className="w-4 h-4 text-white" />
                                    </motion.div>
                                  )}
                                </div>
                              </motion.div>
                              <div>
                                <motion.h3
                                  className="text-lg sm:text-xl font-bold text-gray-900 mb-1"
                                  whileHover={{ scale: 1.05 }}
                                >
                                  {company.name}
                                </motion.h3>
                                <motion.p
                                  className="text-gray-600 font-medium text-sm sm:text-base"
                                  whileHover={{ scale: 1.05 }}
                                >
                                  {company.category}
                                </motion.p>
                              </div>
                            </div>
                          </div>

                          <div className="space-y-4 mb-6">
                            <motion.div
                              className="flex items-center space-x-2 text-green-600 font-semibold"
                              whileHover={{ scale: 1.05 }}
                            >
                              <Users className="w-5 h-5" />
                              <span>
                                🚀 {company.hiringCount} actively hiring
                              </span>
                            </motion.div>
                            <motion.div
                              className="flex items-center space-x-2"
                              whileHover={{ scale: 1.05 }}
                            >
                              <div className="flex items-center space-x-1">
                                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                                <span className="font-semibold text-gray-900">
                                  {company.rating}
                                </span>
                                <span className="text-gray-600 text-sm">
                                  ({company.reviews} reviews)
                                </span>
                              </div>
                            </motion.div>
                          </div>

                          <motion.p
                            className="text-gray-700 mb-4 leading-relaxed text-sm sm:text-base"
                            whileHover={{ scale: 1.02 }}
                          >
                            {company.description}
                          </motion.p>

                          <div className="flex flex-wrap gap-2 mb-6">
                            {company.tags.map((tag) => (
                              <Badge
                                key={tag}
                                variant="secondary"
                                className="bg-blue-50 text-blue-700 hover:bg-blue-100 text-xs"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>

                          <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold text-sm sm:text-base">
                            <Building2 className="w-5 h-5 mr-2" />
                            View Jobs
                            <ArrowRight className="w-5 h-5 ml-2" />
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex justify-center mt-8 space-x-4">
              <motion.button
                onClick={() => companiesApi?.scrollPrev()}
                className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </motion.button>
              <motion.button
                onClick={() => companiesApi?.scrollNext()}
                className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Jobs Section */}
      <section
        ref={jobsContainerRef}
        className="py-20 bg-gradient-to-br from-[#e8f1ff] to-[#eef2ff]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={jobsInView ? { opacity: 1, y: 0 } : {}}
          >
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1E3A8A] mb-4"
              whileHover={{ scale: 1.02 }}
            >
              💼 Featured jobs for you
            </motion.h2>
            <motion.p
              className="text-base sm:text-lg md:text-xl text-[#475569] max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Handpicked opportunities from top employers
            </motion.p>
          </motion.div>

          <div className="relative">
            <div
              className="embla overflow-x-auto sm:overflow-hidden"
              ref={jobsRef}
            >
              <div
                className="embla__container flex gap-4 sm:gap-6"
                style={{
                  scrollSnapType: "x mandatory",
                  WebkitOverflowScrolling: "touch",
                }}
              >
                {featuredJobs.map((job, index) => (
                  <motion.div
                    key={job.id}
                    className="embla__slide flex-[0_0_90%] sm:flex-[0_0_420px] min-w-0"
                    style={{ scrollSnapAlign: "start" }}
                    initial={{ opacity: 0, x: 50 }}
                    animate={jobsInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.1 }}
                  >
                    <motion.div
                      className="group cursor-pointer h-full"
                      whileHover={{ scale: 1.02, y: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Card className="h-full bg-white/90 shadow-xl hover:shadow-2xl border border-blue-100 hover:border-blue-300 transition-all duration-300 rounded-2xl overflow-hidden">
                        <CardContent className="p-4 sm:p-6">
                          <div className="flex flex-col">
                            <div className="mb-6">
                              <div className="flex flex-wrap gap-2 mb-3">
                                {job.urgent && (
                                  <Badge className="bg-[#EF4444] text-white text-xs">
                                    <Zap className="w-3 h-3 mr-1" />
                                    🔥 Urgent
                                  </Badge>
                                )}
                                {job.trending && (
                                  <Badge className="bg-[#10B981] text-white text-xs">
                                    📈 Trending
                                  </Badge>
                                )}
                                <Badge
                                  variant="outline"
                                  className="text-blue-600 border-blue-200"
                                >
                                  {job.type}
                                </Badge>
                              </div>
                              <motion.h3
                                className="text-lg sm:text-xl font-bold text-gray-900 mb-3"
                                whileHover={{ scale: 1.02 }}
                              >
                                {job.title}
                              </motion.h3>
                              <div className="flex items-center space-x-3 mb-4">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center text-lg">
                                  {job.companyLogo}
                                </div>
                                <div className="flex-1">
                                  <motion.p
                                    className="font-semibold text-gray-900"
                                    whileHover={{ scale: 1.02 }}
                                  >
                                    {job.company}
                                  </motion.p>
                                </div>
                                {job.verified && (
                                  <CheckCircle className="w-5 h-5 text-blue-500" />
                                )}
                              </div>
                              <hr className="my-4 border-gray-100" />
                            </div>

                            <div className="space-y-3 mb-6">
                              <motion.div className="flex items-center text-[#334155] text-sm sm:text-base">
                                <MapPin className="w-5 h-5 mr-2 text-blue-500" />
                                {job.location}
                              </motion.div>
                              <motion.div className="flex items-center text-[#334155] text-sm sm:text-base">
                                <DollarSign className="w-5 h-5 mr-2 text-green-500" />
                                {job.salary}
                              </motion.div>
                              <motion.div className="flex items-center text-[#334155] text-sm sm:text-base">
                                <Award className="w-5 h-5 mr-2 text-purple-500" />
                                {job.experience}
                              </motion.div>
                              <motion.div className="flex items-center text-[#334155] text-sm sm:text-base">
                                <Clock className="w-5 h-5 mr-2 text-orange-500" />
                                Posted {job.posted}
                              </motion.div>
                            </div>

                            <motion.p
                              className="text-gray-700 mb-4 text-sm sm:text-base leading-relaxed"
                              whileHover={{ scale: 1.01 }}
                            >
                              {job.description}
                            </motion.p>

                            <div className="mb-4 flex flex-wrap gap-2">
                              {job.skills.map((skill, skillIndex) => (
                                <Badge
                                  key={skillIndex}
                                  variant="secondary"
                                  className="bg-[#eff6ff] text-[#2563eb] hover:bg-[#dbeafe]"
                                >
                                  {skill}
                                </Badge>
                              ))}
                            </div>

                            <div className="mb-6 p-4 bg-[#f8fafc] rounded-lg">
                              <motion.p className="text-sm font-semibold text-[#0f172a] mb-2">
                                Key Benefits:
                              </motion.p>
                              <div className="space-y-1">
                                {job.perks.map((perk, perkIndex) => (
                                  <motion.p
                                    key={perkIndex}
                                    className="text-sm text-[#475569] flex items-center"
                                    whileHover={{ scale: 1.01, x: 5 }}
                                  >
                                    ✓ {perk}
                                  </motion.p>
                                ))}
                              </div>
                            </div>

                            <div className="flex flex-wrap justify-between items-center mb-6 text-sm text-[#64748b]">
                              <div className="flex items-center space-x-4">
                                <motion.span className="flex items-center">
                                  <Users className="w-4 h-4 mr-1" />
                                  {job.applicants}
                                </motion.span>
                                <motion.span className="flex items-center">
                                  <Eye className="w-4 h-4 mr-1" />
                                  {job.views}
                                </motion.span>
                              </div>
                              <Badge
                                variant="outline"
                                className="text-purple-600 border-purple-200 mt-2 sm:mt-0"
                              >
                                {job.experience.split(" ")[0]} exp
                              </Badge>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3">
                              <Button className="flex-1 bg-gradient-to-r from-[#3B82F6] to-[#6366F1] hover:from-[#2563EB] hover:to-[#4F46E5] text-white font-semibold">
                                <Briefcase className="w-5 h-5 mr-2" />
                                Apply Now
                                <ArrowRight className="w-5 h-5 ml-2" />
                              </Button>
                              <Button
                                variant="outline"
                                size="icon"
                                className="border-pink-200 text-pink-600 hover:bg-pink-50"
                              >
                                <Heart className="w-5 h-5" />
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex justify-center mt-8 space-x-4">
              <motion.button
                onClick={() => jobsApi?.scrollPrev()}
                className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[#3B82F6] to-[#6366F1] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>
              <motion.button
                onClick={() => jobsApi?.scrollNext()}
                className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[#3B82F6] to-[#6366F1] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>

            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={jobsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
            >
              <Button
                size="lg"
                 onClick={handleSearchClick}
                className="bg-gradient-to-r from-[#10B981] to-[#3B82F6] hover:from-[#059669] hover:to-[#2563EB] text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                View All 50,000+ Jobs
                <ArrowRight className="w-6 h-6 ml-2" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Success Stories / Testimonials Section */}
      <section
        ref={testimonialsContainerRef}
        className="py-20 bg-gradient-to-br from-purple-50 to-blue-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
              whileHover={{ scale: 1.02 }}
            >
              🌟 Success stories from our community
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Real experiences from job seekers who found their dream careers
            </motion.p>
          </motion.div>

          <div className="relative">
            <div className="embla overflow-hidden" ref={testimonialsRef}>
              <div className="embla__container flex">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.id}
                    className="embla__slide flex-[0_0_400px] min-w-0 mr-6"
                    initial={{ opacity: 0, x: 50 }}
                    animate={testimonialsInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.1 }}
                  >
                    <motion.div
                      className="group cursor-pointer h-full"
                      whileHover={{ scale: 1.02, y: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Card className="h-full bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group-hover:border-purple-200 overflow-hidden">
                        <CardContent className="p-6">
                          <motion.div
                            className="mb-4"
                            whileHover={{ scale: 1.05 }}
                          >
                            <Badge className="bg-purple-100 text-purple-700 mb-4 text-sm font-semibold">
                              ✨ {testimonial.experience}
                            </Badge>

                            <div className="flex items-center justify-between mb-4">
                              <motion.div
                                className="flex items-center space-x-2"
                                whileHover={{ scale: 1.05 }}
                              >
                                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                                <span className="text-sm font-semibold text-gray-700">
                                  5.0
                                </span>
                                {testimonial.verified && (
                                  <Badge
                                    variant="outline"
                                    className="text-green-600 border-green-200 text-xs"
                                  >
                                    ✓ Verified
                                  </Badge>
                                )}
                              </motion.div>
                            </div>

                            <motion.blockquote
                              className="text-gray-700 leading-relaxed mb-6 italic"
                              whileHover={{ scale: 1.01 }}
                            >
                              "{testimonial.content}"
                            </motion.blockquote>

                            <motion.div
                              className="flex mb-4"
                              whileHover={{ scale: 1.05 }}
                            >
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <Star
                                  key={i}
                                  className="w-5 h-5 text-yellow-400 fill-current"
                                />
                              ))}
                            </motion.div>

                            <motion.div
                              className="flex items-center space-x-4"
                              whileHover={{ scale: 1.02 }}
                            >
                              <div className="text-3xl">
                                {testimonial.avatar}
                              </div>
                              <div className="flex-1">
                                <motion.h4
                                  className="font-semibold text-gray-900"
                                  whileHover={{ scale: 1.05 }}
                                >
                                  {testimonial.name}
                                </motion.h4>
                                <motion.p
                                  className="text-gray-600 text-sm"
                                  whileHover={{ scale: 1.05 }}
                                >
                                  {testimonial.role}
                                </motion.p>
                                <motion.p
                                  className="text-blue-600 text-sm font-medium"
                                  whileHover={{ scale: 1.05 }}
                                >
                                  {testimonial.company}
                                </motion.p>
                                <motion.p
                                  className="text-gray-500 text-xs flex items-center mt-1"
                                  whileHover={{ scale: 1.05 }}
                                >
                                  <MapPin className="w-3 h-3 mr-1" />
                                  {testimonial.location}
                                  <span className="mx-1">•</span>
                                  {testimonial.joinedDate}
                                </motion.p>
                              </div>
                            </motion.div>
                          </motion.div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex justify-center mt-8 space-x-4">
              <motion.button
                onClick={() => testimonialsApi?.scrollPrev()}
                className="w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:shadow-xl transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="w-6 h-6 text-purple-600" />
              </motion.button>
              <motion.button
                onClick={() => testimonialsApi?.scrollNext()}
                className="w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:shadow-xl transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="w-6 h-6 text-purple-600" />
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={ctaRef}
        className="py-20 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-700/20"
            animate={{
              background: [
                "linear-gradient(45deg, rgba(59, 130, 246, 0.2) 0%, rgba(147, 51, 234, 0.2) 100%)",
                "linear-gradient(225deg, rgba(59, 130, 246, 0.2) 0%, rgba(147, 51, 234, 0.2) 100%)",
                "linear-gradient(45deg, rgba(59, 130, 246, 0.2) 0%, rgba(147, 51, 234, 0.2) 100%)",
              ],
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        </div>

        <motion.div
          className="absolute top-20 left-20 text-white/20"
          animate={{ y: [0, -20, 0], rotate: [0, 180, 360] }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          <Rocket className="w-16 h-16" />
        </motion.div>
        <motion.div
          className="absolute bottom-20 right-20 text-white/20"
          animate={{ y: [0, 20, 0], rotate: [0, -180, -360] }}
          transition={{ duration: 8, repeat: Infinity, delay: 2 }}
        >
          <Sparkles className="w-12 h-12" />
        </motion.div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              whileHover={{ scale: 1.02 }}
            >
              🚀 Ready to take the next step in your career?
            </motion.h2>
            <motion.p
              className="text-xl md:text-2xl text-blue-100 mb-10 leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Join millions of job seekers and employers who trust JobPortal for
              their career journey
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold text-lg px-8 py-4 shadow-2xl"
                   onClick={handleSearchClick}
                >
                  <Search className="w-6 h-6 mr-2" />
                  Find Dream Job
                  <ArrowRight className="w-6 h-6 ml-2" />
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold text-lg px-8 py-4 shadow-2xl"
                >
                  <Building2 className="w-6 h-6 mr-2" />
                  Hire Top Talent
                  <ArrowRight className="w-6 h-6 ml-2" />
                </Button> */}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      
    </div>
  );
};

export default JobPlatformLandingPage;
