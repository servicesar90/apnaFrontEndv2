import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Button, Input } from "@mui/material";

import {
  Network,
  UserCheck,
  Headphones,    
  Users,
  ArrowDown,
  Play,
  Building2,
  Award,
  Target,
  Globe,
  Linkedin,
  Twitter,
  Mail,
  Trophy,
  Star,
  Medal,
  Rocket,
  CheckCircle,
  Brain,
  BarChart3,
  Search,
  TrendingUp,
  Phone,
  GraduationCap,
  Facebook,
  Instagram,
  Briefcase,
  Youtube,
  Zap,
} from "lucide-react";

const Index = () => {
  // Particle Background Component Logic
  const canvasRef = useRef(null);

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

  // Navigation Component Logic
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Features", href: "/Feautures" },
    { label: "About Us", href: "/AboutUs" },
    { label: "Contact Us", href: "/contact-us" },
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

  // Carousel Logic for Awards
  const [emblaRefAwards] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
      breakpoints: {
        "(min-width: 768px)": { slidesToScroll: 2 },
        "(min-width: 1024px)": { slidesToScroll: 3 },
      },
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  // Carousel Logic for Customer Logos
  const [emblaRefLogos] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
      breakpoints: {
        "(min-width: 640px)": { slidesToScroll: 2 },
        "(min-width: 768px)": { slidesToScroll: 3 },
        "(min-width: 1024px)": { slidesToScroll: 4 },
        "(min-width: 1280px)": { slidesToScroll: 5 },
      },
    },
    [Autoplay({ delay: 2500, stopOnInteraction: false })]
  );

  // Carousel Logic for Testimonials
  const [emblaRefTestimonials] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
      breakpoints: {
        "(min-width: 768px)": { slidesToScroll: 1 },
        "(min-width: 1024px)": { slidesToScroll: 2 },
      },
    },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );

  // useInView hooks for animations
  const headerRef = useRef(null);
  const aboutRef = useRef(null);
  const whoWeAreRef = useRef(null);
  const whatWeDoRef = useRef(null);
  const teamRef = useRef(null);
  const awardsRef = useRef(null);
  const logosRef = useRef(null);
  const timelineRef = useRef(null);
  const testimonialsRef = useRef(null);
  const trustRef = useRef(null);
  const techRef = useRef(null);
  const ctaRef = useRef(null);
  const newsletterRef = useRef(null);
  const footerRef = useRef(null);

  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });
  const aboutInView = useInView(aboutRef, { once: true, margin: "-100px" });
  const whoWeAreInView = useInView(whoWeAreRef, {
    once: true,
    margin: "-100px",
  });
  const whatWeDoInView = useInView(whatWeDoRef, {
    once: true,
    margin: "-100px",
  });
  const teamInView = useInView(teamRef, { once: true, margin: "-100px" });
  const awardsInView = useInView(awardsRef, { once: true, margin: "-100px" });
  const logosInView = useInView(logosRef, { once: true, margin: "-100px" });
  const timelineInView = useInView(timelineRef, {
    once: true,
    margin: "-100px",
  });
  const testimonialsInView = useInView(testimonialsRef, {
    once: true,
    margin: "-100px",
  });
  const trustInView = useInView(trustRef, { once: true, margin: "-100px" });
  const techInView = useInView(techRef, { once: true, margin: "-100px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });
  const newsletterInView = useInView(newsletterRef, {
    once: true,
    margin: "-100px",
  });
  const footerInView = useInView(footerRef, { once: true, margin: "-100px" });

  // Data for different sections
  const teamMembers = [
    {
      name: "Sarah Chen",
      title: "CEO & Co-Founder",
      bio: "Former VP of Engineering at Google. Sarah leads our vision to democratize access to career opportunities worldwide. She holds an MBA from Stanford and has 15+ years in tech leadership.",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      social: { linkedin: "#", twitter: "#", email: "sarah@jobportal.com" },
    },
    {
      name: "Marcus Rodriguez",
      title: "CTO & Co-Founder",
      bio: "Previously Lead Architect at Microsoft Azure. Marcus drives our technical innovation and AI-powered matching algorithms. PhD in Computer Science from MIT.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      social: { linkedin: "#", github: "#", email: "marcus@jobportal.com" },
    },
    {
      name: "Dr. Emily Watson",
      title: "VP of People & Culture",
      bio: "Organizational psychologist with 12+ years helping companies build inclusive cultures. Former Head of Talent at Spotify. PhD in Industrial Psychology from NYU.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      social: { linkedin: "#", twitter: "#", email: "emily@jobportal.com" },
    },
    {
      name: "David Kim",
      title: "VP of Product",
      bio: "Product visionary who previously led user experience at Airbnb. David ensures our platform delivers exceptional value to both job seekers and employers. MS in Design from RISD.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      social: { linkedin: "#", twitter: "#", email: "david@jobportal.com" },
    },
    {
      name: "Lisa Thompson",
      title: "VP of Marketing",
      bio: "Brand strategist with expertise in B2B and consumer marketing. Former CMO at HubSpot. Lisa drives our global brand awareness and user acquisition strategies.",
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face",
      social: { linkedin: "#", twitter: "#", email: "lisa@jobportal.com" },
    },
    {
      name: "James Park",
      title: "VP of Engineering",
      bio: "Full-stack engineering leader who scaled systems at Uber. James oversees our platform architecture and ensures we can handle millions of users seamlessly.",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
      social: { linkedin: "#", github: "#", email: "james@jobportal.com" },
    },
  ];

  const awards = [
    {
      title: "Best HR Technology Platform",
      organization: "HR Tech Awards 2023",
      year: "2023",
      description: "Recognized for innovation in AI-powered talent matching",
      icon: Trophy,
      color: "from-yellow-400 to-yellow-600",
    },
    {
      title: "Top 10 Startups to Watch",
      organization: "TechCrunch Disrupt",
      year: "2023",
      description: "Featured among the most promising tech startups globally",
      icon: Star,
      color: "from-purple-400 to-purple-600",
    },
    {
      title: "Excellence in User Experience",
      organization: "UX Design Awards",
      year: "2023",
      description:
        "Outstanding achievement in creating intuitive job search experience",
      icon: Award,
      color: "from-blue-400 to-blue-600",
    },
    {
      title: "Best Mobile App",
      organization: "App Store Awards",
      year: "2022",
      description: "Recognized for exceptional mobile job search functionality",
      icon: Medal,
      color: "from-green-400 to-green-600",
    },
    {
      title: "Innovation in AI",
      organization: "AI Excellence Awards",
      year: "2022",
      description:
        "Leading innovation in artificial intelligence for recruitment",
      icon: Trophy,
      color: "from-red-400 to-red-600",
    },
    {
      title: "Customer Choice Award",
      organization: "SaaS Awards",
      year: "2022",
      description: "Highest customer satisfaction rating in HR tech category",
      icon: Star,
      color: "from-indigo-400 to-indigo-600",
    },
  ];

  const companies = [
    {
      name: "TechCorp",
      logo: "https://via.placeholder.com/180x80/0ea5e9/ffffff?text=TechCorp",
      employees: "50,000+",
      industry: "Technology",
    },
    {
      name: "GlobalBank",
      logo: "https://via.placeholder.com/180x80/059669/ffffff?text=GlobalBank",
      employees: "25,000+",
      industry: "Financial Services",
    },
    {
      name: "MedTech Solutions",
      logo: "https://via.placeholder.com/180x80/dc2626/ffffff?text=MedTech",
      employees: "15,000+",
      industry: "Healthcare",
    },
    {
      name: "EduFuture",
      logo: "https://via.placeholder.com/180x80/7c3aed/ffffff?text=EduFuture",
      employees: "8,000+",
      industry: "Education",
    },
    {
      name: "RetailGiant",
      logo: "https://via.placeholder.com/180x80/ea580c/ffffff?text=RetailGiant",
      employees: "100,000+",
      industry: "Retail",
    },
    {
      name: "CloudSystems",
      logo: "https://via.placeholder.com/180x80/0891b2/ffffff?text=CloudSystems",
      employees: "12,000+",
      industry: "Cloud Computing",
    },
  ];

  const milestones = [
    {
      year: "2018",
      title: "Company Founded",
      description:
        "Started in a small San Francisco office with a vision to revolutionize job matching through AI technology.",
      icon: Rocket,
      color: "from-blue-500 to-blue-600",
      achievements: [
        "Founded by 3 engineers",
        "Initial $2M seed funding",
        "First prototype launched",
      ],
    },
    {
      year: "2019",
      title: "First 10K Users",
      description:
        "Reached our first major milestone with rapid user growth and positive market reception.",
      icon: Users,
      color: "from-green-500 to-green-600",
      achievements: [
        "10,000+ registered users",
        "500+ companies onboarded",
        "Mobile app launched",
      ],
    },
    {
      year: "2020",
      title: "Series A Funding",
      description:
        "Secured $15M in Series A funding to expand our AI capabilities and market reach.",
      icon: Target,
      color: "from-purple-500 to-purple-600",
      achievements: [
        "$15M Series A raised",
        "Team grew to 50 members",
        "AI matching algorithm v2.0",
      ],
    },
    {
      year: "2021",
      title: "Global Expansion",
      description:
        "Expanded operations to 15 countries and launched our enterprise solutions platform.",
      icon: Globe,
      color: "from-orange-500 to-orange-600",
      achievements: [
        "15 countries served",
        "Enterprise platform launch",
        "100K+ active users",
      ],
    },
    {
      year: "2022",
      title: "Industry Recognition",
      description:
        "Received multiple awards for innovation and became a leading HR tech platform.",
      icon: Award,
      color: "from-yellow-500 to-yellow-600",
      achievements: [
        "HR Tech Award winner",
        "500K+ job placements",
        "Fortune 500 clients",
      ],
    },
    {
      year: "2023",
      title: "AI Revolution",
      description:
        "Launched next-generation AI features and crossed 1 million user milestone.",
      icon: Zap,
      color: "from-pink-500 to-pink-600",
      achievements: [
        "1M+ registered users",
        "AI-powered interviews",
        "Real-time skills matching",
      ],
    },
    {
      year: "2024",
      title: "Future Vision",
      description:
        "Continuing to innovate with advanced AI, global expansion, and new product lines.",
      icon: Building2,
      color: "from-indigo-500 to-indigo-600",
      achievements: [
        "2M+ user target",
        "50+ countries expansion",
        "Advanced AI features",
      ],
    },
  ];
  // Floating particles animation
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 3 + Math.random() * 2,
  }));
  const testimonials = [
    {
      name: "Sarah Martinez",
      role: "Software Engineer",
      company: "TechCorp",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      content:
        "JobPortal transformed my career search. Their AI matching system connected me with my dream job at TechCorp within just two weeks. The interview preparation tools were invaluable.",
      rating: 5,
      type: "job_seeker",
    },
    {
      name: "Michael Chen",
      role: "VP of Talent Acquisition",
      company: "GlobalBank",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      content:
        "We've hired over 200 exceptional candidates through JobPortal. The quality of matches is outstanding, and the platform has significantly reduced our time-to-hire by 60%.",
      rating: 5,
      type: "employer",
    },
    {
      name: "Emily Rodriguez",
      role: "Product Manager",
      company: "StartupXYZ",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      content:
        "The career guidance and skill development resources helped me transition from marketing to product management. JobPortal doesn't just find jobs – it builds careers.",
      rating: 5,
      type: "job_seeker",
    },
    {
      name: "David Thompson",
      role: "HR Director",
      company: "MedTech Solutions",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      content:
        "JobPortal's enterprise solutions have revolutionized our recruitment process. The analytics and insights help us make data-driven hiring decisions.",
      rating: 5,
      type: "employer",
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  const renderStars = (rating) => {
    return (
      <div className="flex items-center space-x-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white/10 0 relative overflow-hidden">
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
      {/* Particle Background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0"
        style={{ background: "transparent" }}
      />

      <div className="relative z-10">
    

        {/* Main Content */}
        <main className="pt-20">
          {/* Header Section */}
          <section
            ref={headerRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-brand-50 via-white to-brand-100"
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
                  className={`absolute w-${
                    Math.floor(Math.random() * 4) + 2
                  } h-${
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

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={headerInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8 }}
                  className="text-center lg:text-left"
                >
                  <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8">
                    <span className="bg-gradient-to-r from-[#336ECF] to-[#0c39cf] bg-clip-text text-transparent relative ">
                      Connecting
                    </span>
                    <br />
                    <span className="bg-gradient-to-r from-[#336ECF] to-[#0c39cf] bg-clip-text text-[#0784C9] relative ">
                      Talent with Opportunity
                    </span>
                  </h1>

                  <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-2xl">
                    We're revolutionizing the way companies find exceptional
                    talent and professionals discover their dream careers. Join
                    millions who trust us to shape the future of work.
                  </p>

                  <div className="grid grid-cols-3 gap-8 mb-12">
                    {[
                      { icon: Users, label: "Active Users", value: "2M+" },
                      { icon: Building2, label: "Companies", value: "50K+" },
                      {
                        icon: Award,
                        label: "Successful Placements",
                        value: "500K+",
                      },
                    ].map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 30 }}
                        animate={headerInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                        className="text-center"
                      >
                        <stat.icon className="w-8 h-8 mx-auto mb-3 text-brand-600" />
                        <div className="text-3xl font-bold text-gray-900 mb-1">
                          {stat.value}
                        </div>
                        <div className="text-sm text-gray-600 font-medium">
                          {stat.label}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-brand-600 to-brand-700 hover:from-brand-700 hover:to-brand-800 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                    >
                      Explore Our Story
                      <ArrowDown className="w-5 h-5 ml-2" />
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2 border-brand-600 text-brand-600 hover:bg-brand-600 hover:text-[#003B70] px-8 py-4 text-lg font-semibold transition-all duration-300"
                    >
                      <Play className="w-5 h-5 mr-2" />
                      Watch Video
                    </Button>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={headerInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative"
                >
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop&crop=center"
                      alt="Team collaboration"
                      className="w-full h-auto rounded-2xl shadow-2xl"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
          {/* About Section */}
          <section
            ref={aboutRef}
            id="about"
            className="py-24 bg-white relative overflow-hidden"
          >
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

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={aboutInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-[#336ECF] to-[#0c39cf] bg-clip-text text-transparent relative">
                    About
                  </span>{" "}
                  <span className="bg-gradient-to-r from-[#336ECF] to-[#0c39cf] bg-clip-text text-transparent relative ">
                    Unigrow Talent
                  </span>
                </h2>

                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Founded in 2025, we've grown from a job board to the world's
                  most trusted career platform, powered by innovation and driven
                  by our commitment to transforming how people work.
                </p>
              </motion.div>

              <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={aboutInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">
                    Our Story
                  </h3>

                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    Every big idea starts small. Ours began with a simple
                    question: Why is finding the right job still so hard?
                    Frustrated by outdated systems and missed connections, we
                    set out to create a platform that makes job discovery
                    smarter, faster, and more human. We may be new, but our
                    mission is clear — to connect the right people with the
                    right opportunities, every single day.
                  </p>

                  <p className="text-lg text-gray-600 leading-relaxed">
                    What began as a weekend project has evolved into a platform
                    that has transformed millions of careers and helped
                    thousands of companies build exceptional teams. Today, we're
                    proud to be the bridge that connects ambition with
                    opportunity.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={aboutInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="relative"
                >
                  <div className="bg-gradient-to-br from-brand-500 to-purple-600 rounded-2xl p-8 text-white shadow-2xl">
                    <div className="gap-6">
                      {/* <div className="text-center">
                        <div className="text-3xl font-bold mb-2">
                          Our Impact Today
                        </div>
                        <div className="space-y-4">
                          <div>
                            <div className="text-sm opacity-80 mb-1">
                              Jobs Posted Daily
                            </div>
                            <div className="text-2xl font-bold">10K+</div>
                          </div>
                          <div>
                            <div className="text-sm opacity-80 mb-1">
                              Countries Served
                            </div>
                            <div className="text-2xl font-bold">50+</div>
                          </div>
                          <div>
                            <div className="text-sm opacity-80 mb-1">
                              Success Rate
                            </div>
                            <div className="text-2xl font-bold">89%</div>
                          </div>
                        </div>
                      </div> */}
                      <div className="relative">
                        <img
                          src="/About.jpg"
                          alt="Team collaboration"
                          className="w-full h-auto rounded-2xl shadow-2xl"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Core Values */}
              {/* <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={aboutInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-center mb-16"
              >
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Our Core Values
                </h3>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  These principles guide every decision we make and every
                  feature we build
                </p>
              </motion.div> */}

              {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: Target,
                    title: "Purpose-Driven",
                    description:
                      "Every connection we facilitate is guided by our commitment to meaningful career growth and business success.",
                  },
                  {
                    icon: Heart,
                    title: "Human-Centric",
                    description:
                      "We believe in the power of human potential and create technologies that enhance, not replace, human connection.",
                  },
                  {
                    icon: Lightbulb,
                    title: "Innovation",
                    description:
                      "Constantly evolving our platform with cutting-edge AI and machine learning to deliver smarter matches.",
                  },
                  {
                    icon: Shield,
                    title: "Trust & Security",
                    description:
                      "Your data privacy and security are paramount. We maintain the highest standards of protection and transparency.",
                  },
                  {
                    icon: Globe,
                    title: "Global Impact",
                    description:
                      "Breaking down geographical barriers to create opportunities for talent and companies worldwide.",
                  },
                  {
                    icon: Users,
                    title: "Community",
                    description:
                      "Building an inclusive ecosystem where diversity drives innovation and everyone can thrive.",
                  },
                ].map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={aboutInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-brand-500 to-brand-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <value.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">
                      {value.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </motion.div>
                ))}
              </div> */}
            </div>
          </section>
          {/* Team Section */}
          {/* <section
            ref={teamRef}
            className="py-24 bg-gradient-to-br from-gray-50 to-brand-50"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={teamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                  <span className="text-gray-900">Meet Our</span>{" "}
                  <span className="bg-gradient-to-r from-brand-600 to-purple-600 bg-clip-text text-transparent">
                    Leadership Team
                  </span>
                </h2>

                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Passionate leaders from world-class companies, united by a
                  shared vision to transform the future of work and create
                  opportunities for everyone.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 30 }}
                    animate={teamInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2"
                  >
                    <div className="relative">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      <div className="absolute bottom-4 left-4 right-4 flex space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {member.social.linkedin && (
                          <a
                            href={member.social.linkedin}
                            className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200"
                          >
                            <Linkedin className="w-5 h-5 text-gray-700" />
                          </a>
                        )}
                        {member.social.twitter && (
                          <a
                            href={member.social.twitter}
                            className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200"
                          >
                            <Twitter className="w-5 h-5 text-gray-700" />
                          </a>
                        )}
                        {member.social.github && (
                          <a
                            href={member.social.github}
                            className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200"
                          >
                            <Github className="w-5 h-5 text-gray-700" />
                          </a>
                        )}
                        <a
                          href={`mailto:${member.social.email}`}
                          className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200"
                        >
                          <Mail className="w-5 h-5 text-gray-700" />
                        </a>
                      </div>
                    </div>

                    <div className="p-8">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {member.name}
                      </h3>
                      <p className="text-brand-600 font-semibold mb-4">
                        {member.title}
                      </p>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {member.bio}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section> */}
          {/* Awards Section */}
          {/* <section
            ref={awardsRef}
            className="py-24 bg-white relative overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={awardsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-[#336ECF] to-[#0c39cf] bg-clip-text text-transparent relative">Awards &</span>{" "}
                  <span className="bg-gradient-to-r from-[#336ECF] to-[#0c39cf] bg-clip-text text-transparent relativet">
                    Recognition
                  </span>
                </h2>

                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Our commitment to excellence has been recognized by industry
                  leaders and organizations worldwide.
                </p>
              </motion.div>

              <div className="overflow-hidden" ref={emblaRefAwards}>
                <div className="flex">
                  {awards.map((award, index) => (
                    <motion.div
                      key={award.title}
                      initial={{ opacity: 0, y: 30 }}
                      animate={awardsInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex-[0_0_90%] md:flex-[0_0_45%] lg:flex-[0_0_30%] px-4"
                    >
                      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full group hover:-translate-y-2">
                        <div
                          className={`w-16 h-16 bg-gradient-to-br ${award.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                        >
                          <award.icon className="w-8 h-8 text-white" />
                        </div>

                        <div className="mb-4">
                          <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-sm font-medium rounded-full mb-4">
                            {award.year}
                          </span>
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                          {award.title}
                        </h3>

                        <p className="text-brand-600 font-semibold mb-4">
                          {award.organization}
                        </p>

                        <p className="text-gray-600 leading-relaxed">
                          {award.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section> */}
          {/* Customer Logos Section */}
          {/* <section
            ref={logosRef}
            className="py-24 bg-gradient-to-br from-gray-50 to-brand-50"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={logosInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-[#336ECF] to-[#0c39cf] bg-clip-text text-transparent relative">Trusted by</span>{" "}
                  <span className="bg-gradient-to-r from-[#336ECF] to-[#0c39cf] bg-clip-text text-transparent relative">
                    Global Leaders
                  </span>
                </h2>

                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  From startups to Fortune 500 companies, organizations
                  worldwide trust us to connect them with exceptional talent.
                </p>
              </motion.div>

              <div className="overflow-hidden" ref={emblaRefLogos}>
                <div className="flex">
                  <div className="flex space-x-12">
                    {companies.map((company, index) => (
                      <motion.div
                        key={company.name}
                        initial={{ opacity: 0, y: 30 }}
                        animate={logosInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="flex-shrink-0 bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2"
                      >
                        <div className="text-center">
                          <img
                            src={company.logo}
                            alt={company.name}
                            className="w-40 h-16 object-contain mx-auto mb-4 group-hover:scale-105 transition-transform duration-300"
                          />

                          <div className="space-y-2">
                            <h3 className="font-bold text-gray-900">
                              {company.name}
                            </h3>
                            <p className="text-sm text-gray-600">
                              {company.industry}
                            </p>
                            <p className="text-xs text-gray-500">
                              {company.employees} employees
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section> */}
          {/* Timeline Section */}
          <section
            ref={timelineRef}
            className="py-24 bg-white relative overflow-hidden"
          >
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

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={timelineInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-[#336ECF] to-[#0c39cf] bg-clip-text text-transparent relative">
                    Our
                  </span>{" "}
                  <span className="bg-gradient-to-r from-[#336ECF] to-[#0c39cf] bg-clip-text text-transparent relative">
                    Journey
                  </span>
                </h2>

                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  From a small startup to a global platform, discover the key
                  milestones that have shaped our mission to transform the
                  future of work.
                </p>
              </motion.div>

              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-1/2 transform -translate-x-0.5 w-1 h-full bg-gradient-to-b from-brand-500 via-purple-500 to-brand-600" />

                <div className="space-y-16">
                  {milestones.map((milestone, index) => (
                    <motion.div
                      key={milestone.year}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                      animate={timelineInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      className={`flex items-center ${
                        index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                      }`}
                    >
                      {/* Timeline dot */}
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-brand-500 rounded-full z-10">
                        <div
                          className={`w-8 h-8 bg-gradient-to-br ${milestone.color} rounded-full flex items-center justify-center -m-2 shadow-lg`}
                        >
                          <milestone.icon className="w-4 h-4 text-white" />
                        </div>
                      </div>

                      <div
                        className={`w-5/12 ${
                          index % 2 === 0 ? "pr-12" : "pl-12"
                        }`}
                      >
                        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                          <div className="flex items-center mb-4">
                            <span
                              className={`inline-block px-4 py-2 bg-gradient-to-r ${milestone.color} text-white text-sm font-bold rounded-full mr-4`}
                            >
                              {milestone.year}
                            </span>
                          </div>

                          <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            {milestone.title}
                          </h3>

                          <p className="text-gray-600 mb-6 leading-relaxed">
                            {milestone.description}
                          </p>

                          <div className="space-y-2">
                            <h4 className="font-bold text-gray-900 text-sm mb-3">
                              Key Achievements:
                            </h4>
                            <ul className="space-y-2">
                              {milestone.achievements.map(
                                (achievement, achievementIndex) => (
                                  <li
                                    key={achievementIndex}
                                    className="flex items-center text-sm text-gray-600"
                                  >
                                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                                    {achievement}
                                  </li>
                                )
                              )}
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="w-5/12" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section
            ref={whoWeAreRef}
            className="relative py-24 bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden"
          >
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none opacity-30">
              <div className="absolute top-10 right-20 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-indigo-600/20 rounded-full blur-3xl animate-pulse" />
              <div className="absolute bottom-10 left-20 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={whoWeAreInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="bg-gradient-to-r from-[#336ECF] to-[#0c39cf] bg-clip-text text-transparent text-4xl md:text-5xl font-bold  mb-6">
                  Who{" "}
                  <span className="bg-gradient-to-r from-[#336ECF] to-[#0c39cf] bg-clip-text text-transparent relative">
                    We Are
                  </span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  We are innovators, dreamers, and builders united by a shared
                  vision to transform the future of work and create meaningful
                  connections between talent and opportunity.
                </p>
              </motion.div>

              {/* Company Values */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={whoWeAreInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
              >
                {[
                  {
                    icon: Briefcase,
                    title: "Consulting",
                    description:
                      "We partner with companies to overcome unique challenges through customized business consulting that drives success.",
                    color: "from-blue-500 to-blue-600",
                  },
                  {
                    icon: TrendingUp,
                    title: "Growth",
                    description:
                      "Our mission is to help businesses unlock their full potential and thrive in competitive markets.",
                    color: "from-red-500 to-red-600",
                  },
                  {
                    icon: GraduationCap,
                    title: "Expertise",
                    description:
                      "From business strategy and operations to digital transformation, our team brings cross-functional expertise to every engagement.",
                    color: "from-yellow-500 to-yellow-600",
                  },
                  {
                    icon: BarChart3,
                    title: "Impact",
                    description:
                      "We focus on delivering real, measurable results that lead to long-term, sustainable business growth.",
                    color: "from-green-500 to-green-600",
                  },
                  {
                    icon: Zap ,
                    title: "Agility",
                    description:
                      "As a specialized consulting firm, we maintain agility and a client-first approach tailored to your needs.",
                    color: "from-purple-500 to-purple-600",
                  },
                  {
                    icon: Building2 ,
                    title: "Foundation",
                    description:
                      "As part of Talentnest People Services Private Limited, we combine global strength with local expertise.",
                    color: "from-indigo-500 to-indigo-600",
                  },
                ].map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={whoWeAreInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Company Culture */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={whoWeAreInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="grid lg:grid-cols-2 gap-16 items-center"
              >
                {/* <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">
                    Our Culture & Values
                  </h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    At Unigrow Talent, we've built more than just a platform -
                    we've created a culture that celebrates diversity, embraces
                    innovation, and puts people first. Our team spans across
                    continents, bringing together unique perspectives and
                    experiences.
                  </p>
                  <div className="space-y-4">
                    {[
                      {
                        icon: Coffee,
                        text: "Remote-first culture with flexible working hours",
                      },
                      {
                        icon: GraduationCap,
                        text: "Continuous learning and professional development",
                      },
                      {
                        icon: Sparkles,
                        text: "Innovation time for passion projects and experimentation",
                      },
                      {
                        icon: Handshake,
                        text: "Collaborative environment that values every voice",
                      },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <item.icon className="w-6 h-6 text-brand-500" />
                        <span className="text-gray-700">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative">
                  <div className="grid grid-cols-2 gap-4">
                    <img
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=300&h=200&fit=crop"
                      alt="Team collaboration"
                      className="rounded-xl shadow-lg"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=300&h=200&fit=crop"
                      alt="Remote work"
                      className="rounded-xl shadow-lg mt-8"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=300&h=200&fit=crop"
                      alt="Innovation"
                      className="rounded-xl shadow-lg -mt-8"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=300&h=200&fit=crop"
                      alt="Team diversity"
                      className="rounded-xl shadow-lg"
                    />
                  </div>
                </div> */}
              </motion.div>
            </div>
          </section>
          {/* Testimonials Section */}
          {/* <section
            ref={testimonialsRef}
            className="py-24 bg-gradient-to-br from-gray-50 to-brand-50"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-[#336ECF] to-[#0c39cf] bg-clip-text text-transparent relative">
                    Success
                  </span>{" "}
                  <span className="bg-gradient-to-r from-[#336ECF] to-[#0c39cf] bg-clip-text text-transparent relativet">
                    Stories
                  </span>
                </h2>

                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Hear from professionals and employers who have transformed
                  their careers and teams through our platform.
                </p>
              </motion.div>

              <div className="overflow-hidden" ref={emblaRefTestimonials}>
                <div className="flex">
                  {testimonials.map((testimonial, index) => (
                    <motion.div
                      key={testimonial.name}
                      initial={{ opacity: 0, y: 30 }}
                      animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex-[0_0_90%] md:flex-[0_0_45%] lg:flex-[0_0_45%] px-4"
                    >
                      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full group hover:-translate-y-2">
                        <div className="flex items-center justify-between mb-6">
                          <Quote className="w-8 h-8 text-brand-500" />
                        </div>

                        <div className="flex items-center space-x-2 mb-6">
                          {renderStars(testimonial.rating)}
                          <span className="text-sm text-gray-500 ml-2">
                            {testimonial.rating}.0
                          </span>
                        </div>

                        <p className="text-gray-700 text-lg leading-relaxed mb-8 italic">
                          "{testimonial.content}"
                        </p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <img
                              src={testimonial.avatar}
                              alt={testimonial.name}
                              className="w-12 h-12 rounded-full object-cover mr-4"
                            />
                            <div>
                              <h4 className="font-bold text-gray-900">
                                {testimonial.name}
                              </h4>
                              <p className="text-sm text-gray-600">
                                {testimonial.role}
                              </p>
                              <p className="text-sm text-brand-600 font-medium">
                                {testimonial.company}
                              </p>
                            </div>
                          </div>

                          <div className="text-right">
                            <span className="inline-block px-3 py-1 bg-brand-100 text-brand-700 text-xs font-medium rounded-full">
                              {testimonial.type === "job_seeker"
                                ? "Job Seeker"
                                : "Employer"}
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section> */}
          {/* Trust & Security Section */}
          {/* <section
            ref={trustRef}
            className="py-24 bg-white relative overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={trustInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                  <span className="text-gray-900">Trust &</span>{" "}
                  <span className="bg-gradient-to-r from-brand-600 to-purple-600 bg-clip-text text-transparent">
                    Security
                  </span>
                </h2>

                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Your privacy and security are our top priorities. We've built
                  a platform that meets the highest standards of data protection
                  and reliability.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    icon: Shield,
                    title: "Enterprise-Grade Security",
                    description:
                      "Bank-level encryption (AES-256) protects all your data in transit and at rest.",
                    color: "from-blue-500 to-blue-600",
                  },
                  {
                    icon: Lock,
                    title: "Secure Authentication",
                    description:
                      "Multi-factor authentication and SSO integration for maximum account protection.",
                    color: "from-green-500 to-green-600",
                  },
                  {
                    icon: Eye,
                    title: "Privacy Controls",
                    description:
                      "Granular privacy settings let you control exactly who sees your information.",
                    color: "from-purple-500 to-purple-600",
                  },
                  {
                    icon: Server,
                    title: "Reliable Infrastructure",
                    description:
                      "99.9% uptime SLA with redundant systems across multiple data centers.",
                    color: "from-orange-500 to-orange-600",
                  },
                ].map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={trustInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2"
                  >
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section> */}
          {/* Technology Stack Section */}
          {/* <section
            ref={techRef}
            className="py-24 bg-gradient-to-br from-gray-50 to-brand-50"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={techInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-[#336ECF] to-[#0c39cf] bg-clip-text text-transparent relative">
                    Technology &
                  </span>{" "}
                  <span className="bg-gradient-to-r from-[#336ECF] to-[#0c39cf] bg-clip-text text-transparent relative">
                    Innovation
                  </span>
                </h2>

                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Powered by cutting-edge technology and innovative AI, our
                  platform delivers exceptional performance and user experience
                  at scale.
                </p>
              </motion.div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                {[
                  { label: "API Requests/Day", value: "50M+", icon: Zap },
                  {
                    label: "Data Points Processed",
                    value: "1B+",
                    icon: Database,
                  },
                  {
                    label: "ML Models in Production",
                    value: "25+",
                    icon: Brain,
                  },
                  { label: "Global Data Centers", value: "5", icon: Globe },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 30 }}
                    animate={techInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <stat.icon className="w-8 h-8 mx-auto mb-4 text-brand-600" />
                    <div className="text-3xl font-bold text-gray-900 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Platform Features
                </h3>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: Brain,
                    title: "AI-Powered Matching",
                    description:
                      "Advanced machine learning algorithms analyze skills, experience, and preferences to find perfect job matches.",
                    color: "from-purple-500 to-purple-600",
                    tech: ["TensorFlow", "PyTorch", "Scikit-learn"],
                  },
                  {
                    icon: Search,
                    title: "Intelligent Search",
                    description:
                      "Natural language processing enables intuitive job searches that understand context and intent.",
                    color: "from-blue-500 to-blue-600",
                    tech: ["Elasticsearch", "BERT", "GPT Models"],
                  },
                  {
                    icon: BarChart3,
                    title: "Real-time Analytics",
                    description:
                      "Comprehensive dashboards provide insights into hiring trends, candidate engagement, and market data.",
                    color: "from-green-500 to-green-600",
                    tech: ["Apache Kafka", "ClickHouse", "D3.js"],
                  },
                  {
                    icon: MessageSquare,
                    title: "Smart Communication",
                    description:
                      "Automated messaging, interview scheduling, and personalized notifications enhance user experience.",
                    color: "from-orange-500 to-orange-600",
                    tech: ["WebSocket", "SendGrid", "Twilio"],
                  },
                  {
                    icon: Smartphone,
                    title: "Mobile-First Design",
                    description:
                      "Responsive design and native mobile apps ensure seamless experience across all devices.",
                    color: "from-pink-500 to-pink-600",
                    tech: ["React Native", "PWA", "Flutter"],
                  },
                  {
                    icon: Shield,
                    title: "Enterprise Security",
                    description:
                      "Bank-grade security with end-to-end encryption, secure APIs, and compliance frameworks.",
                    color: "from-red-500 to-red-600",
                    tech: ["OAuth 2.0", "AES-256", "GDPR"],
                  },
                ].map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={techInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2"
                  >
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {feature.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed mb-6">
                      {feature.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {feature.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section> */}
          {/* Call to Action Section */}
          {/* <section ref={ctaRef} className="py-24 bg-gradient-to-br from-brand-600 via-purple-600 to-brand-700 relative overflow-hidden"> */}
          {/* <div className="absolute inset-0 overflow-hidden"> */}
          {/* Primary gradient layers */}
          {/* <div className="absolute -top-1/2 -left-1/4 w-full h-full bg-gradient-to-br from-blue-400/30 via-transparent to-transparent transform rotate-12 scale-150"></div>
              <div className="absolute -bottom-1/2 -right-1/4 w-full h-full bg-gradient-to-tl from-purple-400/30 via-transparent to-transparent transform -rotate-12 scale-150"></div> */}
          {/* Geometric mountain layers */}
          {/* <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-blue-500/40 via-blue-400/30 via-cyan-400/20 to-transparent transform skew-x-12"></div>
              <div className="absolute bottom-0 right-0 w-full h-24 bg-gradient-to-t from-indigo-500/35 via-purple-400/25 to-transparent transform -skew-x-6"></div>
              <div className="absolute bottom-0 left-1/3 w-2/3 h-20 bg-gradient-to-t from-cyan-500/30 via-blue-400/20 to-transparent transform skew-x-3"></div> */}
          {/* Triangular accent elements */}
          {/* <div className="absolute top-0 left-1/4 w-0 h-0 border-l-[150px] border-r-[150px] border-b-[200px] border-l-transparent border-r-transparent border-b-white/10 transform rotate-45"></div>
              <div className="absolute top-0 right-1/4 w-0 h-0 border-l-[100px] border-r-[100px] border-b-[150px] border-l-transparent border-r-transparent border-b-blue-300/15 transform -rotate-45"></div> */}
          {/* Floating geometric elements */}
          {/* <motion.div
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
              /> */}
          {/* <motion.div
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
              /> */}
          {/* Hexagonal pattern overlay */}
          {/* <div className="absolute inset-0 opacity-10">
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
              </div> */}
          {/* Radial burst pattern */}
          {/* <div className="absolute inset-0 flex items-center justify-center opacity-10">
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
              </div> */}
          {/* </div> */}
          {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={ctaInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="text-center text-white"
              >
                <h2 className="text-4xl lg:text-6xl font-bold mb-8">
                  <span className="block">Ready to Transform</span>
                  <span className="bg-gradient-to-r from-[#336ECF] to-[#0c39cf] bg-clip-text text-transparent relative">
                    Your Career?
                  </span>
                </h2>

                <p className="text-xl lg:text-2xl mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed">
                  Join millions of professionals who have discovered their dream
                  jobs and employers who have found exceptional talent through
                  our platform.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={ctaInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
              >
                <Button
                  size="lg"
                  className="border-2 border-white text-black hover:bg-gray-100 hover:text-[#003B70] px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <Users className="w-5 h-5 mr-2" />
                  Find Your Dream Job
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#003B70] px-8 py-4 text-lg font-semibold transition-all duration-300"
                >
                  <Building2 className="w-5 h-5 mr-2" />
                  Post Jobs & Hire
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={ctaInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white"
              >
                {[
                  { label: "Active Users", value: "2M+", icon: Users },
                  { label: "Companies", value: "50K+", icon: Building2 },
                  { label: "Jobs Filled", value: "500K+", icon: Briefcase },
                  { label: "User Rating", value: "4.8/5", icon: Star },
                ].map((stat, index) => (
                  <div key={stat.label} className="text-center">
                    <stat.icon className="w-8 h-8 mx-auto mb-3 opacity-80" />
                    <div className="text-2xl lg:text-3xl font-bold mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm opacity-80">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div> */}
          {/* </section> */}
          {/* Newsletter Section */}
          {/* <section
            ref={newsletterRef}
            className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden"
          >
            <div className="absolute inset-0 overflow-hidden">
              {/* Primary gradient layers */}
          {/* <div className="absolute -top-1/2 -left-1/4 w-full h-full bg-gradient-to-br from-blue-400/30 via-transparent to-transparent transform rotate-12 scale-150"></div>
              <div className="absolute -bottom-1/2 -right-1/4 w-full h-full bg-gradient-to-tl from-purple-400/30 via-transparent to-transparent transform -rotate-12 scale-150"></div> */}
          {/* Geometric mountain layers */}
          {/* <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-blue-500/40 via-blue-400/30 via-cyan-400/20 to-transparent transform skew-x-12"></div>
              <div className="absolute bottom-0 right-0 w-full h-24 bg-gradient-to-t from-indigo-500/35 via-purple-400/25 to-transparent transform -skew-x-6"></div>
              <div className="absolute bottom-0 left-1/3 w-2/3 h-20 bg-gradient-to-t from-cyan-500/30 via-blue-400/20 to-transparent transform skew-x-3"></div> */}
          {/* Triangular accent elements */}
          {/* <div className="absolute top-0 left-1/4 w-0 h-0 border-l-[150px] border-r-[150px] border-b-[200px] border-l-transparent border-r-transparent border-b-white/10 transform rotate-45"></div>
              <div className="absolute top-0 right-1/4 w-0 h-0 border-l-[100px] border-r-[100px] border-b-[150px] border-l-transparent border-r-transparent border-b-blue-300/15 transform -rotate-45"></div> */}
          {/* Floating geometric elements */}
          {/* <motion.div
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
              /> */}
          {/* <motion.div
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
              /> */}
          {/* Hexagonal pattern overlay */}
          {/* <div className="absolute inset-0 opacity-10">
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
              </div> */}
          {/* Radial burst pattern */}
          {/* <div className="absolute inset-0 flex items-center justify-center opacity-10">
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
              </div> */}
          {/* </div> */}
          {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={newsletterInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6 }}
                  className="text-white"
                >
                  <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                    <span className="block">Stay Ahead in Your</span>
                    <span className="block bg-gradient-to-r from-brand-400 to-purple-400 bg-clip-text text-transparent">
                      Career Journey
                    </span>
                  </h2>

                  <p className="text-xl mb-8 opacity-90 leading-relaxed">
                    Join our community of professionals and get exclusive
                    insights, career tips, and job opportunities delivered to
                    your inbox.
                  </p>

                  <div className="grid md:grid-cols-3 gap-6">
                    {[
                      {
                        icon: TrendingUp,
                        title: "Market Insights",
                        description:
                          "Weekly reports on job market trends and salary data",
                      },
                      {
                        icon: Users,
                        title: "Career Tips",
                        description:
                          "Expert advice on resume building and interview skills",
                      },
                      {
                        icon: Briefcase,
                        title: "Job Alerts",
                        description:
                          "Personalized job opportunities matching your skills",
                      },
                    ].map((benefit, index) => (
                      <motion.div
                        key={benefit.title}
                        initial={{ opacity: 0, y: 30 }}
                        animate={newsletterInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                        className="text-center lg:text-left"
                      >
                        <div className="w-12 h-12 bg-gradient-to-br from-brand-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto lg:mx-0 mb-4">
                          <benefit.icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="font-bold mb-2">{benefit.title}</h3>
                        <p className="text-sm opacity-80">
                          {benefit.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={newsletterInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
                >
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-brand-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Mail className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Join Our Newsletter
                    </h3>
                    <p className="text-white/80">
                      Get the latest insights delivered weekly
                    </p>
                  </div>

                  {!isSubmitted ? (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <Input
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="bg-white/10 border-white/30 text-white placeholder:text-white/60 h-12 text-lg focus:bg-white/20 transition-all duration-200"
                      />
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-gradient-to-r from-brand-600 to-purple-600 hover:from-brand-700 hover:to-purple-700 text-white h-12 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
                      >
                        Subscribe Now
                      </Button>
                      <p className="text-xs text-white/60 text-center">
                        We respect your privacy. Unsubscribe at any time.
                      </p>
                    </form>
                  ) : (
                    <div className="text-center py-8">
                      <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-white mb-2">
                        Welcome Aboard!
                      </h3>
                      <p className="text-white/80">
                        Check your email for a confirmation message.
                      </p>
                    </div>
                  )}
                </motion.div>
              </div>
            </div> */}
          {/* </section> */}
          <section ref={whatWeDoRef} className="relative py-24 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none opacity-40">
              <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-emerald-400/20 to-teal-600/20 rounded-full blur-3xl animate-pulse" />
              <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={whatWeDoInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="bg-gradient-to-r from-[#336ECF] to-[#0c39cf] bg-clip-text text-transparent text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  What{" "}
                  <span className="bg-gradient-to-r from-[#336ECF] to-[#0c39cf] bg-clip-text text-transparent">
                    We Do
                  </span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  We provide comprehensive solutions that bridge the gap between
                  exceptional talent and outstanding opportunities, powered by
                  cutting-edge technology and human insight.
                </p>
              </motion.div>

              {/* Services Overview */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={whatWeDoInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="grid md:grid-cols-2 gap-12 items-center mb-20"
              >
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">
                    For Job Seekers
                  </h3>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    We empower professionals at every stage of their career
                    journey with tools, insights, and opportunities that
                    accelerate their growth and success.
                  </p>
                  <div className="space-y-6">
                    {[
                      {
                        icon: Search,
                        title: "Smart Job Matching",
                        description:
                          "AI-powered algorithm matches you with positions that align with your skills, experience, and career goals.",
                      },
                      {
                        icon: Brain,
                        title: "Career Intelligence",
                        description:
                          "Get personalized insights on market trends, salary benchmarks, and skill development recommendations.",
                      },
                      // {
                      //   icon: BookOpen,
                      //   title: "Learning Resources",
                      //   description:
                      //     "Access curated courses, interview prep, and career coaching to accelerate your professional growth.",
                      // },
                      {
                        icon: Network,
                        title: "Professional Network",
                        description:
                          "Connect with industry leaders, mentors, and peers to expand your professional network.",
                      },
                    ].map((feature, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <feature.icon className="w-6 h-6 text-emerald-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">
                            {feature.title}
                          </h4>
                          <p className="text-gray-600">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop"
                    alt="Job seeker using platform"
                    className="rounded-2xl shadow-xl"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-lg">
                    <div className="text-2xl font-bold text-emerald-600">
                      92%
                    </div>
                    <div className="text-sm text-gray-600">Success Rate</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={whatWeDoInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="grid md:grid-cols-2 gap-12 items-center"
              >
                <div className="order-2 md:order-1 relative">
                  <img
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop"
                    alt="Employer using platform"
                    className="rounded-2xl shadow-xl"
                  />
                  <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg">
                    <div className="text-2xl font-bold text-blue-600">60%</div>
                    <div className="text-sm text-gray-600">Faster Hiring</div>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">
                    For Employers
                  </h3>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    We help companies of all sizes find, attract, and hire the
                    best talent with our comprehensive recruitment solutions and
                    data-driven insights.
                  </p>
                  <div className="space-y-6">
                    {[
                      {
                        icon: UserCheck,
                        title: "Talent Sourcing",
                        description:
                          "Access a global pool of pre-screened, qualified candidates across all industries and skill levels.",
                      },
                      {
                        icon: BarChart3,
                        title: "Recruitment Analytics",
                        description:
                          "Make data-driven hiring decisions with comprehensive analytics and market intelligence.",
                      },
                      // {
                      //   icon: Settings,
                      //   title: "ATS Integration",
                      //   description:
                      //     "Seamlessly integrate with your existing HR systems and applicant tracking software.",
                      // },
                      {
                        icon: Headphones,
                        title: "Dedicated Support",
                        description:
                          "Get personalized support from our recruitment specialists to optimize your hiring process.",
                      },
                    ].map((feature, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <feature.icon className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">
                            {feature.title}
                          </h4>
                          <p className="text-gray-600">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Platform Features */}
              {/* <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={whatWeDoInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-20"
              >
                <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
                  Platform Features
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                    {
                      icon: Brain,
                      title: "AI Matching",
                      description:
                        "Advanced algorithms for perfect job-candidate matches",
                      color: "from-purple-500 to-purple-600",
                    },
                    {
                      icon: Smartphone,
                      title: "Mobile App",
                      description:
                        "Full-featured mobile app for job searching on the go",
                      color: "from-blue-500 to-blue-600",
                    },
                    {
                      icon: Calendar,
                      title: "Interview Scheduling",
                      description:
                        "Automated scheduling and calendar integration",
                      color: "from-green-500 to-green-600",
                    },
                    {
                      icon: PieChart,
                      title: "Analytics Dashboard",
                      description:
                        "Comprehensive insights and performance metrics",
                      color: "from-orange-500 to-orange-600",
                    },
                    {
                      icon: Monitor,
                      title: "Video Interviews",
                      description:
                        "Built-in video conferencing for remote interviews",
                      color: "from-red-500 to-red-600",
                    },
                    {
                      icon: Filter,
                      title: "Advanced Filters",
                      description:
                        "Sophisticated search and filtering capabilities",
                      color: "from-indigo-500 to-indigo-600",
                    },
                    {
                      icon: Clock,
                      title: "Real-time Updates",
                      description:
                        "Instant notifications for new opportunities",
                      color: "from-teal-500 to-teal-600",
                    },
                    {
                      icon: MapPin,
                      title: "Location Intelligence",
                      description: "Smart location-based job recommendations",
                      color: "from-pink-500 to-pink-600",
                    },
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={whatWeDoInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.1 * index }}
                      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
                    >
                      <div
                        className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {feature.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div> */}
            </div>
          </section>
        </main>

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
    </div>
  );
};

export default Index;
