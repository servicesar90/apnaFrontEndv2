import  { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
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
import { Button, Card, CardContent, Badge } from "@mui/material";
import useEmblaCarousel from "embla-carousel-react";
import { useNavigate } from "react-router-dom";

const JobPlatformLandingPage = () => {
  const [selectedExperience, setSelectedExperience] =
    useState("Select experience");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [currentStatIndex, setCurrentStatIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  

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
      icon: <Globe className="w-5 h-5" />,
      name: "Remote",
      count: "12K+",
      color: "bg-blue-100 text-blue-700",
      growth: "+15%",
    },
    {
      icon: <Building2 className="w-5 h-5" />,
      name: "MNC",
      count: "8.5K+",
      color: "bg-purple-100 text-purple-700",
      growth: "+8%",
    },
    {
      icon: <Users className="w-5 h-5" />,
      name: "HR",
      count: "2.1K+",
      color: "bg-green-100 text-green-700",
      growth: "+12%",
    },
    {
      icon: <Code className="w-5 h-5" />,
      name: "Software & IT",
      count: "15K+",
      color: "bg-orange-100 text-orange-700",
      growth: "+22%",
    },
    {
      icon: <Sparkles className="w-5 h-5" />,
      name: "Fresher",
      count: "9.2K+",
      color: "bg-pink-100 text-pink-700",
      growth: "+18%",
    },
    {
      icon: <Target className="w-5 h-5" />,
      name: "Project Mgmt",
      count: "1.8K+",
      color: "bg-indigo-100 text-indigo-700",
      growth: "+10%",
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      name: "Sales",
      count: "6.7K+",
      color: "bg-red-100 text-red-700",
      growth: "+14%",
    },
    {
      icon: <DollarSign className="w-5 h-5" />,
      name: "Banking",
      count: "3.4K+",
      color: "bg-emerald-100 text-emerald-700",
      growth: "+9%",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      name: "Cybersecurity",
      count: "1.2K+",
      color: "bg-gray-100 text-gray-700",
      growth: "+25%",
    },
    {
      icon: <Rocket className="w-5 h-5" />,
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
      trending: true,
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
    
  ];

  const stats = [
    {
      label: "Active Jobs",
      value: "50K+",
      icon: <Briefcase className="w-6 h-6" />,
    },
    {
      label: "Happy Users",
      value: "2M+",
      icon: <Users className="w-6 h-6" />,
    },
    {
      label: "Success Stories",
      value: "10K+",
      icon: <Trophy className="w-6 h-6" />,
    },
  ];

  const experienceOptions = [
    "Fresher (0 years)",
    "1-2 years",
    "3-5 years",
    "6-10 years",
    "10+ years",
  ];

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Advanced Geometric Background Graphics */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Primary geometric layer */}
        <div className="absolute -top-1/2 -left-1/4 w-full h-full bg-gradient-to-br from-blue-600/20 via-blue-500/10 to-transparent transform rotate-12 scale-150 animate-pulse"></div>
        <div className="absolute -top-1/3 -right-1/4 w-full h-full bg-gradient-to-bl from-indigo-600/15 via-blue-400/8 to-transparent transform -rotate-12 scale-150"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-blue-600/10 via-blue-500/5 to-transparent"></div>

        {/* Secondary geometric shapes */}
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-gradient-to-tr from-cyan-400/10 via-blue-500/15 to-indigo-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-bl from-purple-400/10 via-indigo-500/15 to-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        {/* Triangular geometric elements */}
        <div className="absolute top-0 left-1/2 w-0 h-0 border-l-[200px] border-r-[200px] border-b-[300px] border-l-transparent border-r-transparent border-b-blue-500/5 transform -translate-x-1/2 rotate-45"></div>
        <div className="absolute bottom-0 right-1/3 w-0 h-0 border-l-[150px] border-r-[150px] border-t-[250px] border-l-transparent border-r-transparent border-t-indigo-500/8 transform rotate-12"></div>

        {/* Hexagonal patterns */}
        <div
          className="absolute top-1/3 right-1/4 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-indigo-500/20 transform rotate-45 blur-sm animate-spin"
          style={{ animationDuration: "20s" }}
        ></div>
        <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-gradient-to-l from-cyan-400/15 to-blue-500/15 transform rotate-12 blur-sm animate-bounce"></div>

        {/* Layered mountain effect */}
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-blue-600/15 via-blue-500/10 via-blue-400/5 to-transparent transform skew-x-12"></div>
        <div className="absolute bottom-0 right-0 w-full h-48 bg-gradient-to-t from-indigo-600/12 via-purple-500/8 to-transparent transform -skew-x-6"></div>

        {/* Floating geometric elements */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-6 h-6 bg-blue-400/40 rounded rotate-45"
          animate={{
            y: [0, -20, 0],
            rotate: [45, 135, 45],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/3 w-4 h-4 bg-indigo-400/50"
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/3 w-8 h-8 bg-cyan-400/30 rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Wire-frame grid overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 grid-rows-8 h-full w-full">
            {Array.from({ length: 96 }).map((_, i) => (
              <div key={i} className="border border-blue-300/20"></div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Particles Background */}
      <motion.div className="fixed inset-0 pointer-events-none">
        <AnimatePresence>
          <div className="relative w-full h-full">
            {particles.map((particle) => (
              <motion.div
                key={particle.id}
                className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
                style={{
                  left: `${particle.x}%`,
                  top: `${particle.y}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: particle.duration,
                  delay: particle.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        </AnimatePresence>
      </motion.div>


      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative z-10 min-h-[100vh] flex items-center justify-center px-4 sm:px-6 lg:px-8"
      >
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Main gradient orbs */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-400/15 rounded-full blur-3xl animate-pulse delay-1000"></div>

          {/* Geometric accent shapes */}
          <motion.div
            className="absolute top-1/3 right-1/3 w-32 h-32 bg-gradient-to-r from-cyan-400/30 to-blue-500/30 transform rotate-45 blur-xl"
            animate={{
              rotate: [45, 135, 45],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Triangular elements */}
          <div className="absolute top-10 left-1/2 w-0 h-0 border-l-[100px] border-r-[100px] border-b-[150px] border-l-transparent border-r-transparent border-b-blue-400/20 transform -translate-x-1/2 rotate-12"></div>
          <div className="absolute bottom-10 left-1/4 w-0 h-0 border-l-[80px] border-r-[80px] border-t-[120px] border-l-transparent border-r-transparent border-t-indigo-400/25 transform -rotate-12"></div>

          {/* Layered mountain silhouettes */}
          <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-blue-600/20 via-blue-500/15 via-blue-400/10 to-transparent transform skew-x-3"></div>
          <div className="absolute bottom-0 right-0 w-3/4 h-32 bg-gradient-to-t from-indigo-600/18 via-purple-500/12 to-transparent transform -skew-x-6"></div>
          <div className="absolute bottom-0 left-1/4 w-1/2 h-24 bg-gradient-to-t from-cyan-600/15 via-blue-500/10 to-transparent transform skew-x-12"></div>

          {/* Floating geometric particles */}
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-${Math.floor(Math.random() * 4) + 2} h-${
                Math.floor(Math.random() * 4) + 2
              } bg-blue-400/40 rounded`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                rotate: [0, 180, 360],
                scale: [1, 1.3, 1],
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 4 + Math.random() * 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2,
              }}
            />
          ))}

          {/* Radial grid pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="flex items-center justify-center h-full">
              <div className="w-96 h-96 border border-blue-300 rounded-full"></div>
              <div className="absolute w-80 h-80 border border-blue-300 rounded-full"></div>
              <div className="absolute w-64 h-64 border border-blue-300 rounded-full"></div>
              <div className="absolute w-48 h-48 border border-blue-300 rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Find your{" "}
              <motion.span
                className="bg-gradient-to-r from-[#336ECF] to-[#0c39cf] bg-clip-text text-transparent relative"
                animate={{ backgroundPosition: isHovered ? "200% 0" : "0 0" }}
                transition={{ duration: 1.5 }}
              >
                dream job
              </motion.span>{" "}
              now
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-600 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              5 lakh+{" "}
              <span className="font-semibold text-[#336ECF]">
                jobs for you to explore
              </span>
            </motion.p>

            {/* Search Bar */}
            <motion.div
              className="max-w-4xl mx-auto mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <div className="bg-white rounded-2xl shadow-xl border border-blue-100/50 p-2 backdrop-blur-sm">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
                  {/* Skills Input */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                      <Search className="w-5 h-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      placeholder="Job title, skills, or company"
                      className="w-full pl-10 pr-4 py-4 border-0 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 rounded-lg bg-gray-50 transition-all duration-300"
                    />
                  </div>

                  {/* Experience Dropdown */}
                  <div className="relative">
                    <select
                      value={selectedExperience}
                      onChange={(e) => setSelectedExperience(e.target.value)}
                      className="w-full px-4 py-4 border-0 text-gray-900 focus:ring-2 focus:ring-blue-500 rounded-lg bg-gray-50 appearance-none cursor-pointer transition-all duration-300"
                    >
                      <option disabled>Select experience</option>
                      {experienceOptions.map((exp) => (
                        <option key={exp} value={exp}>
                          {exp}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                  </div>

                  {/* Location Input */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                      <MapPin className="w-5 h-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      placeholder="Location"
                      value={selectedLocation}
                      onChange={(e) => setSelectedLocation(e.target.value)}
                      className="w-full pl-10 pr-4 py-4 border-0 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 rounded-lg bg-gray-50 transition-all duration-300"
                    />
                  </div>

                  {/* Search Button */}
                  <Button className="w-full py-4 bg-gradient-to-r from-[#336ECF] to-[#0c39cf] hover:to-indigo-700 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
                    <Search className="w-7 h-7 mr-2" />
                    Search
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              ref={statsRef}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-blue-100/50 hover:bg-white/80 transition-all duration-300"
                  whileHover={{ y: -5, scale: 1.05 }}
                  animate={{
                    scale: currentStatIndex === index ? 1.1 : 1,
                    borderColor:
                      currentStatIndex === index
                        ? "rgb(59 130 246)"
                        : "rgb(219 234 254 / 0.5)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="flex justify-center mb-2"
                    animate={{
                      color:
                        currentStatIndex === index
                          ? "rgb(59 130 246)"
                          : "rgb(75 85 99)",
                    }}
                  >
                    {stat.icon}
                  </motion.div>
                  <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section
        ref={categoriesContainerRef}
        className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50/50 to-white/50 overflow-hidden"
      >
        {/* Section-specific graphics from the first snippet */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-blue-600/5 via-blue-500/3 to-transparent transform skew-x-12"></div>
          <div className="absolute bottom-0 right-0 w-full h-16 bg-gradient-to-t from-indigo-600/8 via-blue-400/4 to-transparent transform -skew-x-6"></div>

          {/* Floating geometric accents from the first snippet */}
          <motion.div
            className="absolute top-1/4 right-1/4 w-8 h-8 bg-blue-400/30 rounded transform rotate-45"
            animate={{
              y: [0, -10, 0],
              rotate: [45, 135, 45],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <div className="absolute bottom-1/3 left-1/4 w-6 h-6 bg-indigo-400/25 rounded-full blur-sm animate-pulse"></div>
        </div>

        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={categoriesInView ? { opacity: 1, y: 0 } : {}}
          >
            <Badge className="mb-4 bg-[#336ECF] text-white-700 hover:bg-[#003B70] px-6 py-2 text-sm font-semibold">
              🔥 Trending on JobPortal today
            </Badge>
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-[#1E3A8A] mb-4"
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
                            className="text-sm text-blue-600 font-medium"
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
      <section
        ref={companiesContainerRef}
        className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white/50 to-blue-50/50 overflow-hidden"
      >
        {/* Section graphics */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-1/2 h-24 bg-gradient-to-b from-indigo-600/6 via-purple-500/3 to-transparent transform -skew-x-12"></div>
          <div className="absolute bottom-0 left-0 w-2/3 h-20 bg-gradient-to-t from-blue-600/8 via-cyan-400/4 to-transparent transform skew-x-6"></div>

          {/* Triangular accents */}
          <div className="absolute top-1/3 left-1/3 w-0 h-0 border-l-[40px] border-r-[40px] border-b-[60px] border-l-transparent border-r-transparent border-b-blue-400/10 transform rotate-12"></div>
          <motion.div
            className="absolute bottom-1/4 right-1/3 w-10 h-10 bg-gradient-to-r from-blue-400/20 to-indigo-500/20 rounded transform rotate-45"
            animate={{
              rotate: [45, 135, 225, 315, 45],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={companiesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-4 bg-[#336ECF] text-white-700 hover:bg-[#003B70]  px-6 py-2 text-sm font-semibold">
              🏆 Top companies hiring now
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Join thousands of professionals at industry leaders
            </h2>
          </motion.div>

          <div className="relative">
            <div className="overflow-hidden" ref={companiesRef}>
              <motion.div
                className="flex gap-6 pb-4"
                initial={{ opacity: 0 }}
                animate={companiesInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                {topCompanies.map((company, index) => (
                  <motion.div
                    key={company.id}
                    className="flex-none w-80 sm:w-96"
                    initial={{ opacity: 0, x: 50 }}
                    animate={companiesInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                  >
                    <Card className="group hover:shadow-xl transition-all duration-300 border-blue-100/50 hover:border-blue-200 bg-white/80 backdrop-blur-sm h-full p-5">
                      <CardContent className="p-6">
                        <div className="flex flex-wrap gap-2 mb-4">
                          {company.featured && (
                            <Badge className="bg-blue-100 text-white-700 hover:bg-[#003B70]">
                              ⭐ Featured
                            </Badge>
                          )}
                          {company.trending && (
                            <Badge className="bg-blue-100 text-white-700 hover:bg-[#003B70]">
                              🔥 Trending
                            </Badge>
                          )}
                        </div>

                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center space-x-4">
                            <div className="relative">
                              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                                {company.logo}
                                {company.verified && (
                                  <CheckCircle className="w-4 h-4 text-blue-600 absolute -top-1 -right-1 bg-white rounded-full" />
                                )}
                              </div>
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                                {company.name}
                              </h3>
                              <p className="text-gray-600">
                                {company.category}
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-3 mb-4">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-blue-600">
                              Active Hiring
                            </span>
                            <span className="font-semibold text-[#003B70] flex items-center">
                              <Zap className="w-4 h-4 mr-1" />
                              🚀 {company.hiringCount} actively hiring
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-600">
                              Company Rating
                            </span>
                            <div className="flex items-center space-x-1">
                              <Star className="w-4 h-4 fill-cyan-400 text-white-400" />
                              <span className="font-semibold">
                                {company.rating}
                              </span>
                              <span className="text-gray-500 text-sm">
                                ({company.reviews} reviews)
                              </span>
                            </div>
                          </div>
                        </div>

                        <p className="text-gray-600 mb-4 line-clamp-2">
                          {company.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-6">
                          {company.tags.map((tag) => (
                            <Badge
                              key={tag}
                              variant="secondary"
                              className="bg-blue-50 text-blue-700 hover:bg-blue-100"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 group-hover:shadow-lg transition-all duration-300">
                          <Eye className="w-4 h-4 mr-2" />
                          View Jobs
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <div className="flex justify-center mt-8 space-x-4">
              <motion.button
                onClick={() => companiesApi?.scrollPrev()}
                className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>
              <motion.button
                onClick={() => companiesApi?.scrollNext()}
                className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white/50 to-blue-50/30 overflow-hidden">
        {/* Background graphics */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 w-2/3 h-24 bg-gradient-to-b from-blue-600/8 via-indigo-500/4 to-transparent transform -skew-x-6"></div>
          <div className="absolute bottom-0 right-1/3 w-3/4 h-20 bg-gradient-to-t from-purple-600/10 via-blue-400/5 to-transparent transform skew-x-12"></div>

          {/* Animated geometric elements */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-16 h-16 bg-gradient-to-r from-blue-400/20 to-indigo-500/20 rounded-full blur-sm"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-12 h-12 bg-cyan-400/25 transform rotate-45"
            animate={{
              rotate: [45, 225, 45],
              y: [0, -10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-4 bg-indigo-100 text-indigo-700 hover:bg-indigo-200 px-6 py-2 text-sm font-semibold">
              🚀 How JobPortal Works
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your dream job is just 3 steps away
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our AI-powered platform makes job searching and hiring effortless
              with smart matching and personalized recommendations
            </p>
          </motion.div>

          <div className=" grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                step: "01",
                icon: <Search className="w-8 h-8" />,
                title: "Create Your Profile",
                description:
                  "Sign up and tell us about your skills, experience, and career goals. Our AI analyzes your profile for perfect matches.",
                features: [
                  "Smart Profile Builder",
                  "Skill Assessment",
                  "Career Goal Setting",
                  "Resume Upload",
                ],
                color: "from-blue-500 to-cyan-500",
                bgColor: "bg-blue-50",
                textColor: "text-blue-700",
              },
              {
                step: "02",
                icon: <Target className="w-8 h-8" />,
                title: "Get Matched",
                description:
                  "Our advanced algorithm finds jobs that match your profile, skills, and preferences. Receive personalized recommendations daily.",
                features: [
                  "AI Job Matching",
                  "Personalized Alerts",
                  "Salary Insights",
                  "Company Culture Fit",
                ],
                color: "from-blue-500 to-cyan-500",
                bgColor: "bg-indigo-50",
                textColor: "text-indigo-700",
              },
              {
                step: "03",
                icon: <Rocket className="w-8 h-8" />,
                title: "Land Your Dream Job",
                description:
                  "Apply with one click, track applications, and get interview tips. Our career coaches help you succeed at every step.",
                features: [
                  "One-Click Apply",
                  "Interview Prep",
                  "Application Tracking",
                  "Career Coaching",
                ],
                color: "from-blue-500 to-cyan-500",
                bgColor: "bg-purple-50",
                textColor: "text-purple-700",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="group hover:shadow-xl transition-all duration-500 border-blue-100/50 hover:border-blue-200 bg-white/80 backdrop-blur-sm h-full relative overflow-hidden p-2">
                  {/* Step number background */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity">
                    <span className="text-4xl font-bold text-gray-600">
                      {step.step}
                    </span>
                  </div>

                  <CardContent className="p-8">
                    <motion.div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 5 }}
                    >
                      {step.icon}
                    </motion.div>

                    <div className="flex items-center mb-4">
                      <Badge
                        className={`${step.bgColor} ${step.textColor} mr-3 px-3 py-1 text-xs font-bold`}
                      >
                        STEP {step.step}
                      </Badge>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {step.title}
                      </h3>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {step.description}
                    </p>

                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold text-gray-900 mb-3">
                        Key Features:
                      </h4>
                      {step.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          className="flex items-center text-sm text-gray-600"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{
                            delay: index * 0.2 + featureIndex * 0.1,
                          }}
                          viewport={{ once: true }}
                        >
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </motion.div>
                      ))}
                    </div>

                    {/* Progress indicator */}
                    <div className="mt-6 pt-4 border-t border-gray-100">
                      <div className="flex items-center">
                        <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <motion.div
                            className={`h-full bg-gradient-to-r ${step.color} rounded-full`}
                            initial={{ width: 0 }}
                            whileInView={{
                              width: `${((index + 1) / 3) * 100}%`,
                            }}
                            transition={{ duration: 1, delay: index * 0.3 }}
                            viewport={{ once: true }}
                          />
                        </div>
                        <span className="ml-3 text-xs font-medium text-gray-500">
                          {Math.round(((index + 1) / 3) * 100)}%
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Connection line (except for last item) */}
                {index < 2 && (
                  <motion.div
                    className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-300 to-indigo-300 z-10"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: (index + 1) * 0.3 }}
                    viewport={{ once: true }}
                  >
                    <ArrowRight className="absolute -right-2 -top-2 w-4 h-4 text-blue-400" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Jobs Section */}
      <section
        ref={jobsContainerRef}
        className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50/50 to-white/50 overflow-hidden"
      >
        {/* Jobs section graphics */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-full h-16 bg-gradient-to-b from-blue-600/7 via-blue-500/4 to-transparent transform skew-x-3"></div>
          <div className="absolute bottom-0 right-1/4 w-3/4 h-20 bg-gradient-to-t from-indigo-600/9 via-purple-400/5 to-transparent transform -skew-x-12"></div>

          {/* Hexagonal floating elements */}
          <motion.div
            className="absolute top-1/3 right-1/4 w-12 h-12 bg-blue-400/25 transform rotate-45 blur-sm"
            animate={{
              rotate: [45, 225, 45],
              y: [0, -15, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <div className="absolute bottom-1/3 left-1/3 w-8 h-8 bg-cyan-400/20 rounded-full blur-sm animate-bounce"></div>
        </div>
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={jobsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-4 bg-[#336ECF] text-white-700 hover:bg-[#003B70] px-6 py-2 text-sm font-semibold">
              💼 Featured jobs for you
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Handpicked opportunities from top employers
            </h2>
          </motion.div>

          <div className="relative">
            <div className="overflow-hidden" ref={jobsRef}>
              <motion.div
                className="flex gap-6 pb-4"
                initial={{ opacity: 0 }}
                animate={jobsInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                {featuredJobs.map((job, index) => (
                  <motion.div
                    key={job.id}
                    className="flex-none w-80 sm:w-96"
                    initial={{ opacity: 0, x: 50 }}
                    animate={jobsInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                  >
                    <Card className="group hover:shadow-xl transition-all duration-300 border-blue-100/50 hover:border-blue-200 bg-white/80 backdrop-blur-sm h-full p-3">
                      <CardContent className="p-6">
                        <div className="space-y-4">
                          <div>
                            <div className="flex flex-wrap gap-2 mb-3">
                              {job.urgent && (
                                <Badge className="bg-blue-100 text-white-700 hover:bg-[#]">
                                  <Zap className="w-3 h-3 mr-1" />
                                  🔥 Urgent
                                </Badge>
                              )}
                              {job.trending && (
                                <Badge className="bg-green-100 text-green-700 hover:bg-green-200">
                                  📈 Trending
                                </Badge>
                              )}
                              <Badge
                                variant="secondary"
                                className="bg-blue-50 text-blue-700"
                              >
                                {job.type}
                              </Badge>
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                              {job.title}
                            </h3>

                            <div className="flex items-center space-x-3 mb-3">
                              <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center text-lg">
                                {job.companyLogo}
                              </div>

                              <div className="flex-1">
                                <div className="flex items-center space-x-2">
                                  <span className="font-semibold text-gray-900">
                                    {job.company}
                                  </span>
                                </div>
                              </div>

                              {job.verified && (
                                <CheckCircle className="w-5 h-5 text-blue-600" />
                              )}
                            </div>

                            <div className="grid grid-cols-2 gap-3 text-sm text-gray-600 mb-4">
                              <div className="flex items-center">
                                <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                                {job.location}
                              </div>
                              <div className="flex items-center">
                                <DollarSign className="w-4 h-4 mr-2 text-gray-400" />
                                {job.salary}
                              </div>
                              <div className="flex items-center">
                                <Clock className="w-4 h-4 mr-2 text-gray-400" />
                                {job.experience}
                              </div>
                              <div className="flex items-center">
                                <Clock className="w-4 h-4 mr-2 text-gray-400" />
                                Posted {job.posted}
                              </div>
                            </div>
                          </div>

                          <p className="text-gray-600 text-sm line-clamp-2">
                            {job.description}
                          </p>

                          <div className="flex flex-wrap gap-2">
                            {job.skills.map((skill, skillIndex) => (
                              <Badge
                                key={skillIndex}
                                variant="outline"
                                className="text-xs border-blue-200 text-blue-700 hover:bg-blue-50"
                              >
                                {skill}
                              </Badge>
                            ))}
                          </div>

                          <div className="space-y-2">
                            <div className="text-sm font-semibold text-gray-900">
                              Key Benefits:
                            </div>
                            <div className="space-y-1">
                              {job.perks.map((perk, perkIndex) => (
                                <div
                                  key={perkIndex}
                                  className="text-sm text-gray-600 flex items-center"
                                >
                                  ✓ {perk}
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                            <div className="flex items-center space-x-4 text-sm text-gray-500">
                              <div className="flex items-center">
                                <Users className="w-4 h-4 mr-1" />
                                {job.applicants}
                              </div>
                              <div className="flex items-center">
                                <Eye className="w-4 h-4 mr-1" />
                                {job.views}
                              </div>
                            </div>
                            <Badge className="bg-green-100 text-green-700">
                              {job.experience.split(" ")[0]} exp
                            </Badge>
                          </div>

                          <div className="flex gap-3 pt-4">
                            <Button className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 group-hover:shadow-lg transition-all duration-300">
                              <Briefcase className="w-4 h-4 mr-2" />
                              Apply Now
                              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-blue-200 text-blue-600 hover:bg-blue-50"
                            >
                              <Heart className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <div className="flex justify-center mt-8 space-x-4">
              <motion.button
                onClick={() => jobsApi?.scrollPrev()}
                className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>
              <motion.button
                onClick={() => jobsApi?.scrollNext()}
                className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
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
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <Button
                size="lg"
                variant="outline"
                className="border-blue-200 text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg"
              >
                View All 50,000+ Jobs
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Success Stories / Testimonials Section */}
      <section
        ref={testimonialsContainerRef}
        className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white/50 to-blue-50/50 overflow-hidden"
      >
        {/* Testimonials section graphics */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-1/3 w-2/3 h-18 bg-gradient-to-b from-indigo-600/6 via-blue-500/3 to-transparent transform -skew-x-6"></div>
          <div className="absolute bottom-0 left-1/3 w-full h-22 bg-gradient-to-t from-blue-600/8 via-cyan-400/4 to-transparent transform skew-x-9"></div>

          {/* Star pattern accents */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-6 h-6 bg-yellow-400/30 rounded-full blur-sm"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <div className="absolute bottom-1/4 right-1/4 w-0 h-0 border-l-[30px] border-r-[30px] border-b-[45px] border-l-transparent border-r-transparent border-b-green-400/15 transform -rotate-12"></div>
        </div>
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-4 bg-[#336ECF] text-white-700 hover:bg-[#003B70] px-6 py-2 text-sm font-semibold">
              🌟 Success stories from our community
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Real experiences from job seekers who found their dream careers
            </h2>
          </motion.div>

          <div className="relative">
            <div className="overflow-hidden" ref={testimonialsRef}>
              <motion.div
                className="flex gap-6 pb-4"
                initial={{ opacity: 0 }}
                animate={testimonialsInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.id}
                    className="flex-none w-80 sm:w-96"
                    initial={{ opacity: 0, x: 50 }}
                    animate={testimonialsInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                  >
                    <Card className="group hover:shadow-xl transition-all duration-300 border-blue-100/50 hover:border-blue-200 bg-white/80 backdrop-blur-sm h-full p-1">
                      <CardContent className="p-6">
                        <div className="space-y-4">
                          <div>
                            <Badge className="mb-3 bg-[#336ECF] text-white-700 hover:bg-[#003B70]">
                              ✨ {testimonial.experience}
                            </Badge>

                            <div className="flex items-center justify-between mb-4">
                              <div className="flex">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                                  />
                                ))}
                                <span className="ml-2 font-semibold">5.0</span>
                                {testimonial.verified && (
                                  <Badge className="ml-2 bg-blue-100 text-blue-700 text-xs">
                                    ✓ Verified
                                  </Badge>
                                )}
                              </div>
                            </div>

                            <blockquote className="text-gray-700 mb-4 italic text-sm leading-relaxed">
                              "{testimonial.content}"
                            </blockquote>

                            <div className="flex mb-4">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <Star
                                  key={i}
                                  className="w-4 h-4 fill-yellow-400 text-yellow-400"
                                />
                              ))}
                            </div>

                            <div className="flex items-center space-x-3">
                              <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center text-lg">
                                {testimonial.avatar}
                              </div>

                              {/* <div className="flex-1">
                                <div className="font-semibold text-gray-900">
                                  {testimonial.name}
                                </div>
                                <div className="text-sm text-gray-600">
                                  {testimonial.role}
                                </div>
                                <div className="text-sm font-medium text-blue-600">
                                  {testimonial.company}
                                </div>
                                <div className="text-xs text-gray-500 flex items-center mt-1">
                                  <MapPin className="w-3 h-3 mr-1" />
                                  {testimonial.location}•
                                  {testimonial.joinedDate}
                                </div>
                              </div> */}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <div className="flex justify-center mt-8 space-x-4">
              <motion.button
                onClick={() => testimonialsApi?.scrollPrev()}
                className="w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:shadow-xl transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="w-5 h-5 text-blue-600" />
              </motion.button>
              <motion.button
                onClick={() => testimonialsApi?.scrollNext()}
                className="w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:shadow-xl transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="w-5 h-5 text-blue-600" />
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={ctaRef}
        className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 overflow-hidden"
      >
        {/* Advanced Layered Background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Primary gradient layers */}
          <div className="absolute -top-1/2 -left-1/4 w-full h-full bg-gradient-to-br from-blue-400/30 via-transparent to-transparent transform rotate-12 scale-150"></div>
          <div className="absolute -bottom-1/2 -right-1/4 w-full h-full bg-gradient-to-tl from-purple-400/30 via-transparent to-transparent transform -rotate-12 scale-150"></div>

          {/* Geometric mountain layers */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-blue-500/40 via-blue-400/30 via-cyan-400/20 to-transparent transform skew-x-12"></div>
          <div className="absolute bottom-0 right-0 w-full h-24 bg-gradient-to-t from-indigo-500/35 via-purple-400/25 to-transparent transform -skew-x-6"></div>
          <div className="absolute bottom-0 left-1/3 w-2/3 h-20 bg-gradient-to-t from-cyan-500/30 via-blue-400/20 to-transparent transform skew-x-3"></div>

          {/* Triangular accent elements */}
          <div className="absolute top-0 left-1/4 w-0 h-0 border-l-[150px] border-r-[150px] border-b-[200px] border-l-transparent border-r-transparent border-b-white/10 transform rotate-45"></div>
          <div className="absolute top-0 right-1/4 w-0 h-0 border-l-[100px] border-r-[100px] border-b-[150px] border-l-transparent border-r-transparent border-b-blue-300/15 transform -rotate-45"></div>

          {/* Floating geometric elements */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-16 h-16 bg-white/20 rounded transform rotate-45 blur-sm"
            animate={{
              rotate: [45, 135, 45],
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-12 h-12 bg-cyan-300/30 rounded-full blur-sm"
            animate={{
              y: [0, -20, 0],
              scale: [1, 1.4, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />

          {/* Hexagonal pattern overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="grid grid-cols-8 grid-rows-6 h-full w-full">
              {Array.from({ length: 48 }).map((_, i) => (
                <div
                  key={i}
                  className="border border-white/30 transform rotate-45"
                  style={{
                    clipPath:
                      "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                  }}
                ></div>
              ))}
            </div>
          </div>

          {/* Radial burst pattern */}
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-px h-32 bg-white/40"
                style={{
                  transform: `rotate(${i * 30}deg)`,
                  transformOrigin: "bottom center",
                }}
              ></div>
            ))}
          </div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              🚀 Ready to take the next step in your career?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join millions of job seekers and employers who trust JobPortal for
              their career journey
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-full px-4 sm:px-0 mx-auto">
              <Button
                size="lg"
                className="bg-white/30 text-blue-600 hover:bg-blue-50 px-6 py-4 sm:px-8 sm:py-6 text-base sm:text-lg font-semibold flex items-center justify-center whitespace-nowrap w-full sm:w-auto"
              >
                <Search className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" />
                <span className="truncate">Find Dream Job</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 flex-shrink-0" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/40 text-white hover:bg-white/10 px-6 py-4 sm:px-8 sm:py-6 text-base sm:text-lg font-semibold flex items-center justify-center whitespace-nowrap w-full sm:w-auto"
              >
                <Building2 className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" />
                <span className="truncate">Hire Top Talent</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 flex-shrink-0" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-white py-16 bg-[#f1f7fe] ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-1">
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <motion.div
                  className="flex items-center space-x-3"
                  whileHover={{ scale: 1.05 }}
                >
                  <Link to="/">
                    <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                      <img
                        src="/unigrowLogo (1).png"
                        alt="Logo"
                        style={{ height: "40px" }}
                      />
                    </span>
                  </Link>
                </motion.div>
                <motion.p
                  className="text-gray-500 leading-relaxed"
                  whileHover={{ scale: 1.02 }}
                >
                  Beyond listings, we're a career ecosystem. Discover not just
                  jobs, but resources, insights, and a community dedicated to
                  propelling your professional journey forward.
                </motion.p>
                <motion.div
                  className="flex space-x-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {[Facebook, Twitter, Linkedin, Instagram].map(
                    (Icon, index) => (
                      <motion.a
                        key={index}
                        href="#"
                        className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                        whileHover={{ scale: 1.2, rotate: 15 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Icon className="w-5 h-5" />
                      </motion.a>
                    )
                  )}
                </motion.div>
              </motion.div>
            </div>

            {/* Footer links columns */}
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold text-black mb-4">
                  For Job Seekers
                </h3>
                <div className="space-y-3">
                  {[
                    "Browse Jobs",
                    "Companies",
                    "Career Advice",
                    "Interview Tips",
                  ].map((item) => (
                    <motion.a
                      key={item}
                      href="#"
                      className="block text-gray-500  hover:text-[#093EB2] transition-colors"
                      whileHover={{ scale: 1.05, x: 5 }}
                    >
                      {item}
                    </motion.a>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-black mb-4">
                  For Employers
                </h3>
                <div className="space-y-3">
                  {[
                    "Post a Job",
                    "Browse Resumes",
                    "Recruitment Solutions",
                    "Pricing",
                    "Success Stories",
                    "Employer Branding",
                  ].map((item) => (
                    <motion.a
                      key={item}
                      href="#"
                      className="block text-gray-500  hover:text-[#093EB2] transition-colors"
                      whileHover={{ scale: 1.05, x: 5 }}
                    >
                      {item}
                    </motion.a>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-black mb-4">
                  Company & Support
                </h3>
                <div className="space-y-3">
                  {[
                    "About Us",
                    "Contact Us",
                    "Help Center",
                    "Privacy Policy",
                    "Terms of Service",
                    "Trust & Safety",
                  ].map((item) => (
                    <motion.a
                      key={item}
                      href="#"
                      className="block text-gray-500  hover:text-[#093EB2] transition-colors"
                      whileHover={{ scale: 1.05, x: 5 }}
                    >
                      {item}
                    </motion.a>
                  ))}
                </div>
                <div className="pt-4 space-y-3">
                  <motion.a
                    href="mailto:support@jobportal.com"
                    className="flex items-center text-gray-500 hover:text-[#093EB2] transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    support@unigrowtalent.com
                  </motion.a>
                  <motion.a
                    href="tel:1-800-JOB-HELP"
                    className="flex items-center text-gray-500 hover:text-[#093EB2] transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    +91 120-4178-702
                  </motion.a>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800 mt-12">
            <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
              <motion.p
                className="text-gray-500 text-center lg:text-left"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                © 2025 JobPortal. All rights reserved. Connecting talent with
                opportunity since 2025.
              </motion.p>
              <motion.div
                className="flex items-center space-x-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <span className="text-gray-400">Available on:</span>
                <div className="flex space-x-2">
                  <motion.a
                    href="#"
                    className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors text-sm"
                    whileHover={{ scale: 1.05 }}
                  >
                    App Store
                  </motion.a>
                  <motion.a
                    href="#"
                    className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors text-sm"
                    whileHover={{ scale: 1.05 }}
                  >
                    Play Store
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default JobPlatformLandingPage;
