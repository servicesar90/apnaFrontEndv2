import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
// import { Link } from "react-router-dom";
// import useEmblaCarousel from "embla-carousel-react";
// import Autoplay from "embla-carousel-autoplay";
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
  MapPin,
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

  const timelineInView = useInView(timelineRef, {
    once: true,
    margin: "-100px",
  });
  

 
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
          href: "jobs"
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
          href: "contact-us"
        },
        {
          title: "Company",
          links: ["About Us", "Careers", "Press", "Partners"],
          href: "about-us"
        },
      ];
    
      const socialLinks = [
        { icon: Twitter, href: "#", label: "Twitter" },
        { icon: Linkedin, href: "#", label: "LinkedIn" },
        { icon: Facebook, href: "#", label: "Facebook" },
        { icon: Instagram, href: "#", label: "Instagram" },
      ];

  const renderStars = (rating) => {
    return (
      <div className="flex items-center space-x-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
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
                  className={`absolute w-${Math.floor(Math.random() * 4) + 2
                    } h-${Math.floor(Math.random() * 4) + 2
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
                  <div className="bg-gradient-to-br from-brand-500 to-purple-600 rounded-2xl p-8 text-white ">
                    <div className="gap-6">
                    
                      <div className="relative">
                        <img
                          src="/about1.jpg"
                          alt="Team collaboration"
                          className="w-full h-auto rounded-2xl shadow-2xl"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

             
            </div>
          </section>
          
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
                className={`absolute w-${Math.floor(Math.random() * 4) + 2} h-${Math.floor(Math.random() * 4) + 2
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
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-blue-600" />


                <div className="space-y-16">
                  {milestones.map((milestone, index) => (
                    <motion.div
                      key={milestone.year}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                      animate={timelineInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"
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
                        className={`w-5/12 ${index % 2 === 0 ? "pr-12" : "pl-12"
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
                    icon: Zap,
                    title: "Agility",
                    description:
                      "As a specialized consulting firm, we maintain agility and a client-first approach tailored to your needs.",
                    color: "from-purple-500 to-purple-600",
                  },
                  {
                    icon: Building2,
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

              </motion.div>
            </div>
          </section>

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
                    <span className="text-gray-400">info@unigrowTalent.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-400">+91 120-4178-702</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-400">Crossing Republic, Ghaziabad, U.P</span>
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
      </div>
    </div>
  );
};

export default Index;
