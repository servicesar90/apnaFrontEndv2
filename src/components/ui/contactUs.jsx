import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
    Phone,
    Mail,
    MapPin,
    Clock,
    Send,
    Facebook,
    Twitter,
    Linkedin,
    Instagram,
    ArrowRight,

} from "lucide-react";
import { Button, Card, CardContent, Input, CardHeader, Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const ContactUs = () => {
    const formRef = useRef({});
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });


    const faqs = [
        {
            question: "How quickly do you respond to inquiries?",
            answer:
                "We typically respond to all inquiries within 24 hours during business days. For urgent matters, you can call us directly and we'll assist you immediately.",
        },
        {
            question: "What services do you offer?",
            answer:
                "We offer a comprehensive range of services including consulting, development, support, and maintenance. Contact us to discuss your specific needs and how we can help.",
        },
        {
            question: "Do you offer support after project completion?",
            answer:
                "Yes, we provide ongoing support and maintenance services. We believe in building long-term relationships with our clients and ensuring their continued success.",
        },
        {
            question: "How can I get a quote for my project?",
            answer:
                "Simply fill out our contact form with details about your project, or give us a call. We'll schedule a consultation to understand your needs and provide a detailed quote.",
        },
        {
            question: "What makes your company different?",
            answer:
                "Our commitment to excellence, personalized service, and proven track record set us apart. We focus on understanding your unique needs and delivering tailored solutions.",
        },
    ];

    const scrollToForm = (label) => {
        setTimeout(() => {
            formRef.current?.[label].scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }, 300);
    };

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

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Create FormData for the external service
        const form = e.target;
        const formData = new FormData(form);

        try {
            // Submit to formsubmit.co
            const response = await fetch(
                "https://formsubmit.co/sales@talentnestpeopleservices.com",
                {
                    method: "POST",
                    body: formData,
                },
            );

            if (response.ok) {
                // Reset form on success
                setFormData({ name: "", email: "", subject: "", message: "" });
                alert("Thank you for your message! We'll get back to you soon.");
            } else {
                throw new Error("Failed to submit form");
            }
        } catch (error) {
            alert("There was an error sending your message. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleNewsletterSubmit = async (e) => {
        e.preventDefault();
        // Simulate newsletter subscription
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setNewsletterEmail("");
        alert("Thank you for subscribing to our newsletter!");
    };

    const fadeInUp = {
        hidden: { opacity: 0, y: 60 },
        visible: { opacity: 1, y: 0 },
    };

    const stagger = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const navItems = [
        { label: "Home", href: "/home" },
        { label: "Features", href: "/features" },
        { label: "AboutUs", href: "/about-us" },
        { label: "ContactUs", href: "/contact-us" },
    ];


    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">


            {/* Hero Section */}

            <motion.section
                initial="hidden"
                animate="visible"
                variants={fadeInUp}

                className="relative py-20 px-4 sm:px-6 lg:px-8 text-center"
            >
                <div className="absolute inset-0 pointer-events-none overflow-hidden z-40" >
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
                </div>
                <div className="max-w-4xl mx-auto z-50" >
                    <motion.h1
                        variants={fadeInUp}
                        className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent"
                    >
                        Get in Touch with Us
                    </motion.h1>
                    <motion.p
                        variants={fadeInUp}
                        className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed"
                    >
                        We're here to help you succeed. Whether you have questions, need
                        support, or want to explore how we can work together, we'd love to
                        hear from you.
                    </motion.p>

                    <Button
                        size="lg"
                        onClick={() => scrollToForm("form")}
                        className="z-50 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:shadow-lg cursor-pointer"
                    >
                        <p className="text-white ">Enquiry Now</p>
                        <ArrowRight className="ml-2 w-4 h-4 text-white " />
                    </Button>

                </div>
            </motion.section>

            {/* Contact Information Section */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={stagger}
                className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50/40"
            >
                <div className="max-w-7xl mx-auto">
                    <motion.div variants={fadeInUp} className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Contact Information
                        </h2>
                        <p className="text-xl text-gray-600">
                            Multiple ways to reach us - choose what works best for you
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                icon: MapPin,
                                title: "Visit Us",
                                details: [
                                    "435A, 4th Floor Orbit Plaza",
                                    "Crossing Republic ,NH 24",
                                    "Ghaziabad, UP-201016, India",
                                ],
                                color: "from-red-500 to-red-600",
                            },
                            {
                                icon: Phone,
                                title: "Call Us",
                                details: [
                                    "+91 120-4178-702",
                                    "+91 120-4178-702",
                                    "Mon-Fri 9AM-6PM",
                                ],
                                color: "from-green-500 to-green-600",
                            },
                            {
                                icon: Mail,
                                title: "Email Us",
                                details: [
                                    "info@unigrowtalent.com",
                                    "support@unigrowtalent.com",
                                    "sales@unigrowtalent.com",
                                ],
                                color: "from-blue-500 to-blue-600",
                            },
                            {
                                icon: Clock,
                                title: "Business Hours",
                                details: ["Mon-sat: 10AM-7PM", "Sunday: Closed"],
                                color: "from-purple-500 to-purple-600",
                            },
                        ].map((item, index) => (
                            <motion.div key={index} variants={fadeInUp}>
                                <Card className="h-full text-center hover:shadow-lg transition-all duration-300 group">
                                    <CardHeader>
                                        <div
                                            className={`w-12 h-12 mx-auto rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                                        >
                                            <item.icon className="w-6 h-6 text-white" />
                                        </div>
                                        <h2 className="text-lg mb-3">{item.title}</h2>
                                    </CardHeader>
                                    <CardContent>
                                        {item.details.map((detail, idx) => (
                                            <p key={idx} className="text-gray-600 mb-1">
                                                {detail}
                                            </p>
                                        ))}
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* Contact Form Section */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="py-16 px-4 sm:px-6 lg:px-8 bg-white"
            >
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-4">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Send Us a Message
                        </h2>
                        <p className="text-xl text-gray-600">
                            Fill out the form below and we'll get back to you as soon as
                            possible
                        </p>
                    </div>

                    <Card className="shadow-xl border-0">
                        <CardHeader>
                            {/* <CardTitle className="text-2xl text-center">
                Contact Form
              </CardTitle> */}
                            {/* <CardDescription className="text-center">
                We typically respond within 24 hours
              </CardDescription> */}
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div ref={(el) => (formRef.current["form"] = el)} className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="block text-sm font-medium text-gray-700 mb-2"
                                        >
                                            Full Name *
                                        </label>
                                        <Input
                                            id="name"
                                            name="name"
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            placeholder="Your full name"
                                            className="transition-all duration-300 focus:scale-105"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-medium text-gray-700 mb-2"
                                        >
                                            Email Address *
                                        </label>
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            placeholder="your.email@example.com"
                                            className="transition-all duration-300 focus:scale-105"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="subject"
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                    >
                                        Subject *
                                    </label>
                                    <Input
                                        id="subject"
                                        name="subject"
                                        type="text"
                                        required
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        placeholder="What's this about?"
                                        className="transition-all duration-300 focus:scale-105"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                    >
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={6}
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        placeholder="Tell us more about your inquiry..."
                                        className="transition-all duration-300 focus:scale-105 w-full p-2 border rounded"
                                    />

                                </div>

                                <div className="text-center">
                                    <Button
                                        type="submit"
                                        size="lg"
                                        disabled={isSubmitting}
                                        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8"
                                    >
                                        {isSubmitting ? (
                                            <div className="flex items-center text-white">
                                                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                                                Sending...
                                            </div>
                                        ) : (
                                            <div className="text-white flex flex-row gap-1 items-center px-2">
                                                Send Message
                                                <Send className="ml-2 w-4 h-4" />
                                            </div>
                                        )}
                                    </Button>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </motion.section>

            {/* FAQ Section */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50"
            >
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="bg-gradient-to-r from-[#336ECF] to-[#0c39cf] bg-clip-text text-transparent text-3xl md:text-4xl font-bold mb-4">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-xl text-gray-600">
                            Quick answers to common questions about our services
                        </p>
                    </div>

                    <Card>
                        <CardContent className="p-6">
                            <div className="space-y-4">
                                {faqs.map((faq, index) => (
                                    <Accordion key={index}>
                                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                            <Typography className="text-left font-medium">{faq.question}</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography className="text-gray-600">{faq.answer}</Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
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
    );
};

export default ContactUs;
