"use client";

import type { Metadata } from 'next';
import { useState, useEffect, useRef } from 'react';
import SiteLayout from '@/components/layout/SiteLayout';
import Link from 'next/link';
import { 
  Stethoscope, Calendar, FileText, Shield, Clock, Heart, 
  Zap, Bot, Phone, Send, BrainCircuit, UserPlus, Globe2, 
  Share2, DatabaseZap, ShieldCheck, ChevronDown, Rocket, 
  TrendingUp, ArrowRight, MessageSquare, Check, X, Lock, Server, FileCheck2, EyeOff
} from 'lucide-react';

export default function HealthcareContent() {
  // FAQ accordion state
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const [activeProduct, setActiveProduct] = useState<'chatbot' | 'voicebot'>('chatbot');

  // Form states
  const [formData, setFormData] = useState({ name: '', phone: '', clinic: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Stethoscope pulse bead tracking (simulated position)
  const [beadTop, setBeadTop] = useState(0);

  useEffect(() => {
    // Simple loop to animate a virtual pulse down the screen
    const interval = setInterval(() => {
      setBeadTop(prev => (prev >= 100 ? 0 : prev + 0.15));
    }, 30);
    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id.replace('cta-', '')]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.phone && formData.clinic) {
      setIsSubmitted(true);
      setFormData({ name: '', phone: '', clinic: '' });
    }
  };

  const faqItems = [
    {
      num: "01",
      question: "Is it difficult to set up? I'm not tech-savvy.",
      answer: "Not at all. Our onboarding team handles the entire setup. You just answer 10 questions about your clinic, upload your FAQ document, and we do the rest. Most doctors are live within 48 hours without touching a single line of code."
    },
    {
      num: "02",
      question: "Will it replace my front-desk staff?",
      answer: "No — it augments your staff. SwanDigitals handles the repetitive 80%: timings, fees, appointment requests, directions. Your front desk focuses on patients who are physically in the clinic and on tasks that truly need a human. They'll love it."
    },
    {
      num: "03",
      question: "What if the AI gives wrong medical advice?",
      answer: "SwanDigitals is a communication and scheduling agent — not a diagnostic tool. It answers only from your pre-approved content. If a patient asks a medical question outside that scope, the agent politely refers them to book a consultation. You control what it knows and says."
    },
    {
      num: "04",
      question: "Is patient data safe? What about DPDP compliance?",
      answer: "Patient conversations are encrypted end-to-end and stored exclusively on India-based servers. We do not sell or share data with any third party. We're built with India's Digital Personal Data Protection (DPDP) Act in mind. You remain the data controller at all times."
    },
    {
      num: "05",
      question: "Which WhatsApp plan do I need?",
      answer: "We use the WhatsApp Business API (Meta partner). We help you get verified and set up in less than a week. The first 1,000 conversations per month are free via Meta's platform. After that, ultra-low per-conversation rates apply — we'll show you the exact cost estimate before you commit."
    },
    {
      num: "06",
      question: "Can I customise the chatbot's language and personality?",
      answer: "Absolutely. Growth and Enterprise plans include a custom AI persona — you can name the agent, set a warm or professional tone, choose default language, and even set greeting messages per channel. It sounds like your clinic, not a generic bot."
    }
  ];

  const stethoscopePath = `M 200,100
    C 400,100 600,50 800,150
    C 1000,250 1200,200 1300,300
    C 1400,400 1350,500 1200,600
    C 1050,700 850,650 700,780
    C 550,910 400,900 250,1050
    C 100,1200 150,1400 300,1550
    C 450,1700 700,1680 900,1820
    C 1100,1960 1250,1950 1350,2100
    C 1450,2250 1380,2400 1200,2520
    C 1020,2640 780,2600 600,2750
    C 420,2900 300,3000 200,3150
    C 100,3300 150,3500 300,3650
    C 450,3800 700,3780 900,3930
    C 1100,4080 1300,4050 1400,4200
    C 1500,4350 1420,4500 1250,4620
    C 1080,4740 850,4700 700,4850
    C 550,5000 400,5050 280,5200
    C 160,5350 120,5550 200,5700
    C 280,5850 500,5900 700,6050
    C 900,6200 1100,6250 1280,6400
    C 1380,6500 1400,6650 1320,6800
    C 1240,6950 1050,7000 900,7050
    C 750,7100 640,7080 580,7150
    L 540,7250
    C 520,7310 500,7350 510,7400
    M 580,7150
    L 620,7250
    C 640,7310 660,7350 650,7400`;

  return (
    <SiteLayout>
      {/* Scope encapsulation styling */}
      <style jsx global>{`
        :root {
          --color-teal-brand: #0D9488;
          --color-orange-brand: #EA580C;
          --color-orange-light: #F97316;
          --color-cream-bg: #FEFAF5;
          --color-cream-card: #FFFFFF;
          --color-stone-fg: #1C1917;
          --color-stone-muted: #57534E;
          --color-stone-border: #E7E0D5;
        }
        
        .healthcare-root {
          background-color: var(--color-cream-bg);
          color: var(--color-stone-fg);
          font-family: 'Source Sans 3', system-ui, sans-serif;
          position: relative;
          overflow-x: hidden;
        }

        .stethoscope-wrap {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 0;
          overflow: hidden;
        }

        .stethoscope-svg {
          width: 100%;
          height: 100%;
          opacity: 0.14;
        }

        .pipe-main {
          stroke-dasharray: 20000;
          stroke-dashoffset: 20000;
          animation: drawPipe 10s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .pipe-shine {
          animation: shimmer 4s linear infinite;
        }

        @keyframes drawPipe {
          to { stroke-dashoffset: 0; }
        }

        @keyframes shimmer {
          0%   { stroke-dashoffset: 120; }
          100% { stroke-dashoffset: -120; }
        }

        .pulse-bead {
          position: absolute;
          width: 14px;
          height: 14px;
          background: var(--color-orange-brand);
          border-radius: 50%;
          box-shadow: 0 0 16px var(--color-orange-brand), 0 0 32px var(--color-orange-light);
          transform: translate(-50%, -50%);
          left: 50%;
        }

        .text-gradient-orange {
          background: linear-gradient(135deg, var(--color-orange-brand) 0%, var(--color-orange-light) 60%, #FBBF24 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .bento-privacy {
          background: linear-gradient(135deg, #0d9488 0%, #0f766e 100%);
        }

        @keyframes typingDot {
          0%, 60%, 100% { transform: translateY(0); }
          30% { transform: translateY(-4px); }
        }
      `}</style>

      <div className="healthcare-root relative pb-24">
        {/* Decorative snaking stethoscope tube */}
        <div className="stethoscope-wrap" aria-hidden="true">
          <svg className="stethoscope-svg" viewBox="0 0 1440 7200" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <defs>
              <filter id="glow-pipe">
                <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
                <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
              </filter>
              <linearGradient id="pipeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#F97316" stopOpacity="0.8"/>
                <stop offset="50%" stopColor="#EA580C" stopOpacity="0.65"/>
                <stop offset="100%" stopColor="#FB923C" stopOpacity="0.45"/>
              </linearGradient>
            </defs>
            <path className="pipe-main"
              d={stethoscopePath}
              stroke="url(#pipeGrad)"
              strokeWidth="9"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#glow-pipe)"
              fill="none"
            />
            <path className="pipe-shine"
              d={stethoscopePath}
              stroke="rgba(255,255,255,0.35)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray="40 80"
              fill="none"
            />
          </svg>
          {/* Animated pulse bead */}
          <div className="pulse-bead" style={{ top: `${beadTop}%` }} />
        </div>

        {/* ======================================================
             SECTION 1: HERO
        ====================================================== */}
        <section className="relative z-10 pt-16 md:pt-24 pb-20 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-orange-700 text-sm font-semibold mb-6">
                <Zap className="w-4.5 h-4.5 text-orange-600" />
                Launching in India · 10 Languages · No Code Setup
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-tight mb-6" style={{ fontFamily: 'Lexend' }}>
                Your Clinic's <span className="text-gradient-orange">24/7 AI Employee</span> <br/>
                That Never Calls In Sick
              </h1>

              <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl leading-relaxed">
                SwanDigitals AI Chatbot Agent handles patient queries, captures leads, books appointments, and closes the loop — on WhatsApp, your website &amp; social media. <strong>Auto-trained on your own content. Your data stays yours.</strong>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Link href="#cta" className="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-bold text-lg text-center shadow-lg shadow-orange-500/20 hover:scale-102 transition-all">
                  Get Your AI Agent — Free for 14 Days
                </Link>
                <Link href="#features" className="px-8 py-4 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 rounded-xl font-bold text-lg text-center shadow-sm hover:scale-102 transition-all">
                  Explore Features
                </Link>
              </div>

              <div className="flex items-center gap-2 mt-4 text-sm text-slate-500 font-medium">
                <ShieldCheck className="w-4.5 h-4.5 text-emerald-600" />
                No credit card required · DPDP-aware · Deployed in 48 hours
              </div>

              {/* Stats strip */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full mt-12 pt-8 border-t border-slate-200">
                <div>
                  <div className="text-3xl font-black text-slate-900">24/7</div>
                  <div className="text-sm text-slate-500 font-medium mt-1">Always On</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-slate-900">10</div>
                  <div className="text-sm text-slate-500 font-medium mt-1">Indian Languages</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-slate-900">3×</div>
                  <div className="text-sm text-slate-500 font-medium mt-1">More Leads Captured</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-slate-900">48h</div>
                  <div className="text-sm text-slate-500 font-medium mt-1">To Go Live</div>
                </div>
              </div>
            </div>

            {/* Right Chat Mockup */}
            <div className="lg:col-span-5 relative flex justify-center">
              {/* Phone Container */}
              <div className="w-full max-w-[370px] bg-slate-900 p-3.5 rounded-[40px] shadow-2xl relative border-4 border-slate-800">
                <div className="bg-slate-50 w-full rounded-[28px] overflow-hidden flex flex-col h-[520px]">
                  {/* Phone Header */}
                  <div className="bg-teal-800 text-white p-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-teal-600 flex items-center justify-center font-bold text-lg">
                      <Bot className="w-6 h-6 text-teal-100" />
                    </div>
                    <div className="flex-1 text-left">
                      <div className="font-bold text-sm">Dr. Sharma's Clinic</div>
                      <div className="flex items-center gap-1 text-xs text-teal-200">
                        <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                        Swan AI · Online
                      </div>
                    </div>
                    <Phone className="w-5 h-5 text-teal-200 cursor-pointer" />
                  </div>

                  {/* Messages */}
                  <div className="flex-1 p-4 overflow-y-auto space-y-4 flex flex-col text-left">
                    <div className="self-end max-w-[80%] bg-teal-600 text-white p-3 rounded-2xl rounded-tr-none text-sm shadow-sm">
                      Hello, I need to book an appointment with Dr. Sharma for knee pain.
                    </div>
                    <div className="self-start max-w-[80%] bg-white border border-slate-100 text-slate-800 p-3 rounded-2xl rounded-tl-none text-sm shadow-sm">
                      Namaste! 🙏 Dr. Sharma has slots available on <strong>Wednesday, 3 PM</strong> and <strong>Thursday, 11 AM</strong>. Which works better for you?
                    </div>
                    <div className="self-end max-w-[80%] bg-teal-600 text-white p-3 rounded-2xl rounded-tr-none text-sm shadow-sm">
                      Wednesday 3 PM please. My name is Priya Mehta.
                    </div>
                    <div className="self-start max-w-[80%] bg-emerald-50 border border-emerald-200 text-emerald-950 p-3 rounded-2xl rounded-tl-none text-sm shadow-sm">
                      <strong>Booking confirmed, Priya!</strong><br/>
                      📅 Wed, 25 June · 3:00 PM<br/>
                      📍 Sharma Orthopaedics, Bandra West<br/>
                      Reminder sent on WhatsApp ✅
                    </div>
                  </div>

                  {/* Input area */}
                  <div className="p-3 border-t border-slate-100 bg-white flex gap-2 items-center">
                    <div className="flex-1 bg-slate-50 border border-slate-200 rounded-full px-4 py-2 text-xs text-slate-400 text-left">
                      Type a message...
                    </div>
                    <button className="w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center text-white">
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Floating Badges */}
              <div className="absolute top-10 -left-6 bg-white p-3 rounded-xl shadow-lg border border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-800 animate-bounce">
                <Check className="w-4 h-4 text-emerald-500" />
                Appointment Booked
              </div>
              <div className="absolute bottom-16 -right-6 bg-white p-3 rounded-xl shadow-lg border border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-800 animate-pulse">
                <MessageSquare className="w-4 h-4 text-teal-600" />
                WhatsApp Ready
              </div>
              <div className="absolute -bottom-4 left-1/3 bg-white p-2.5 rounded-lg shadow-md border border-slate-100 text-xs font-bold text-slate-700">
                Hindi · Marathi · Tamil
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================
             SECTION 2: PROBLEM STATEMENT
        ====================================================== */}
        <section className="relative z-10 py-20 max-w-7xl mx-auto px-6" id="problem">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-xs uppercase tracking-widest text-orange-600 font-bold mb-3">The Problem</div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6" style={{ fontFamily: 'Lexend' }}>
              Your Clinic Loses Patients<br/>While You Sleep
            </h2>
            <p className="text-lg text-slate-600">
              60% of patient queries arrive outside clinic hours. Without an instant response, they book with your competitor — and never come back.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-stone-200/80 shadow-sm text-left hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 bg-orange-50 border border-orange-200 rounded-xl flex items-center justify-center text-orange-600 mb-6">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Queries at Midnight</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Patients message at 11 PM about symptoms, appointments, and reports. Your front desk is asleep. The lead is lost.</p>
            </div>

            <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-stone-200/80 shadow-sm text-left hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 bg-orange-50 border border-orange-200 rounded-xl flex items-center justify-center text-orange-600 mb-6">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Missed Follow-Ups</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Post-visit patients don't get reminders, refill nudges, or check-ins. They drift away — even though they liked you.</p>
            </div>

            <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-stone-200/80 shadow-sm text-left hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 bg-orange-50 border border-orange-200 rounded-xl flex items-center justify-center text-orange-600 mb-6">
                <Globe2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Language Barriers</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Your patients speak Hindi, Marathi, Telugu — but your website is only in English. They feel excluded before they even meet you.</p>
            </div>

            <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-stone-200/80 shadow-sm text-left hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 bg-orange-50 border border-orange-200 rounded-xl flex items-center justify-center text-orange-600 mb-6">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Repetitive Questions</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Your staff answers the same 10 questions 50 times a day — timings, fees, parking, insurance. It burns them out.</p>
            </div>
          </div>
        </section>

        {/* ======================================================
             SECTION 3: FEATURES (Bento Grid)
        ====================================================== */}
        <section className="relative z-10 py-20 max-w-7xl mx-auto px-6" id="features">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-xs uppercase tracking-widest text-teal-700 font-bold mb-3">The Solution</div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6" style={{ fontFamily: 'Lexend' }}>
              One AI Agent. Every Patient Touchpoint.
            </h2>
            <p className="text-lg text-slate-600">
              SwanDigitals is trained on YOUR clinic's content — brochures, FAQs, doctor profiles, service menus. It goes live in 48 hours. Zero coding. Zero headache.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
            {/* Card 1 – Large: Intent Understanding */}
            <div className="md:col-span-4 bg-white border border-stone-200/80 p-8 rounded-2xl flex flex-col justify-between text-left shadow-sm hover:shadow-md transition-shadow">
              <div>
                <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center text-teal-600 mb-6">
                  <BrainCircuit className="w-6 h-6" />
                </div>
                <div className="text-xs font-bold text-teal-700 uppercase tracking-wide mb-2">Core AI</div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-950 mb-3">Understands Intent, Not Just Keywords</h3>
                <p className="text-slate-600 max-w-2xl leading-relaxed">
                  Powered by large language models, our agent grasps what patients actually mean — not just what they literally type. &quot;My knee is bad&quot; maps to orthopaedic consult, instantly.
                </p>
              </div>
              <div className="mt-8 bg-slate-50 p-4 rounded-xl border border-slate-100 flex flex-wrap items-center gap-3 text-sm font-semibold text-slate-800">
                <span className="text-slate-400">Patient:</span> &quot;knee bad doc help&quot;
                <span className="text-orange-600">→</span>
                <span className="bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-xs">Orthopaedic consult booked</span>
              </div>
            </div>

            {/* Card 2 – Appointment Booking */}
            <div className="md:col-span-2 bg-white border border-stone-200/80 p-8 rounded-2xl flex flex-col justify-between text-left shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center text-teal-600 mb-6">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-bold text-teal-700 uppercase tracking-wide mb-2">Automation</div>
                <h3 className="text-xl font-bold text-slate-950 mb-2">Books, Reschedules &amp; Reminds</h3>
                <p className="text-slate-600 text-sm leading-relaxed">Full appointment lifecycle — booking, modification, reminders — all on WhatsApp. No human touch needed.</p>
              </div>
            </div>

            {/* Card 3 – Lead Capture */}
            <div className="md:col-span-2 bg-white border border-stone-200/80 p-8 rounded-2xl flex flex-col justify-between text-left shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center text-teal-600 mb-6">
                <UserPlus className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-bold text-teal-700 uppercase tracking-wide mb-2">Revenue</div>
                <h3 className="text-xl font-bold text-slate-950 mb-2">Captures Every Lead, Day &amp; Night</h3>
                <p className="text-slate-600 text-sm leading-relaxed">Every inquiry becomes a lead in your CRM. Names, numbers, ailments — structured and ready for follow-up.</p>
              </div>
            </div>

            {/* Card 4 – Multi-language */}
            <div className="md:col-span-2 bg-orange-50 border border-orange-100 p-8 rounded-2xl flex flex-col justify-between text-left shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-white border border-orange-200 rounded-xl flex items-center justify-center text-orange-600 mb-6">
                <Globe2 className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-bold text-orange-700 uppercase tracking-wide mb-2">10 Languages</div>
                <h3 className="text-xl font-bold text-slate-950 mb-3">Speaks India's Languages</h3>
                <p className="text-slate-700 text-sm leading-relaxed mb-4">Hindi · Marathi · Tamil · Telugu · Kannada · Bengali · Gujarati. Rupee pricing. Indian context.</p>
                <div className="flex flex-wrap gap-2">
                  {['हिंदी', 'मराठी', 'தமிழ்', 'ગુજરાતી'].map((lang, idx) => (
                    <span key={idx} className="bg-white/80 border border-orange-200 px-2 py-0.5 rounded text-xs font-medium text-slate-800">{lang}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Card 5 – Omnichannel */}
            <div className="md:col-span-2 bg-white border border-stone-200/80 p-8 rounded-2xl flex flex-col justify-between text-left shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center text-teal-600 mb-6">
                <Share2 className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-bold text-teal-700 uppercase tracking-wide mb-2">Channels</div>
                <h3 className="text-xl font-bold text-slate-950 mb-2">Website · WhatsApp · Facebook</h3>
                <p className="text-slate-600 text-sm leading-relaxed">One agent, everywhere your patients are. Consistent answers across all channels.</p>
              </div>
            </div>

            {/* Card 6 – Auto-train */}
            <div className="md:col-span-2 bg-white border border-stone-200/80 p-8 rounded-2xl flex flex-col justify-between text-left shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center text-teal-600 mb-6">
                <DatabaseZap className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-bold text-teal-700 uppercase tracking-wide mb-2">Self-Learning</div>
                <h3 className="text-xl font-bold text-slate-950 mb-2">Auto-Trained on Your Content</h3>
                <p className="text-slate-600 text-sm leading-relaxed">Upload your FAQ PDF, paste your website URL, add your service list — the AI learns it in minutes. No coding required.</p>
              </div>
            </div>

            {/* Card 7 – Data Privacy (full-width) */}
            <div className="md:col-span-4 bento-privacy p-8 rounded-2xl text-white text-left shadow-sm hover:shadow-md transition-shadow">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                <div className="sm:col-span-7">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white mb-6">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div className="text-xs font-bold text-teal-200 uppercase tracking-wide mb-2">Data Security</div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3">Your Data. Your Control. Always.</h3>
                  <p className="text-teal-50 text-sm leading-relaxed">
                    Patient conversations never leave your account. DPDP-aware. End-to-end encrypted. Hosted in India. We do not share your data with third parties.
                  </p>
                </div>
                <div className="sm:col-span-5 flex flex-col gap-3">
                  {[
                    { icon: <Lock className="w-4 h-4" />, text: "End-to-End Encrypted" },
                    { icon: <Server className="w-4 h-4" />, text: "India-Hosted Servers" },
                    { icon: <FileCheck2 className="w-4 h-4" />, text: "DPDP-Aware" },
                    { icon: <EyeOff className="w-4 h-4" />, text: "Zero Data Sharing" }
                  ].map((badge, idx) => (
                    <div key={idx} className="bg-white/10 border border-white/10 px-4 py-2.5 rounded-xl flex items-center gap-3 text-xs font-semibold">
                      {badge.icon}
                      {badge.text}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================
             SECTION 4: HOW IT WORKS
        ====================================================== */}
        <section className="relative z-10 py-20 max-w-7xl mx-auto px-6" id="how-it-works">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-xs uppercase tracking-widest text-orange-600 font-bold mb-3">How It Works</div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6" style={{ fontFamily: 'Lexend' }}>
              From Sign-Up to AI-Powered Clinic in 48 Hours
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="bg-white/70 border border-stone-200/80 p-6 rounded-2xl relative text-left">
              <div className="text-4xl font-black text-slate-100 absolute top-4 right-4">01</div>
              <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-orange-600 mb-6">
                <DatabaseZap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-2">Upload Your Content</h3>
              <p className="text-slate-500 text-sm leading-relaxed">Paste your website URL, upload your FAQ PDF or Word doc, or fill our onboarding form.</p>
              <div className="mt-6 flex items-center gap-1.5 text-xs text-orange-700 font-bold">
                <Clock className="w-3.5 h-3.5" />
                &lt; 10 minutes
              </div>
            </div>

            <div className="bg-white/70 border border-stone-200/80 p-6 rounded-2xl relative text-left">
              <div className="text-4xl font-black text-slate-100 absolute top-4 right-4">02</div>
              <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-orange-600 mb-6">
                <BrainCircuit className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-2">AI Trains on Your Knowledge</h3>
              <p className="text-slate-500 text-sm leading-relaxed">Our system ingests, embeds, and indexes your knowledge base. The agent learns your specialities.</p>
              <div className="mt-6 flex items-center gap-1.5 text-xs text-orange-700 font-bold">
                <Clock className="w-3.5 h-3.5" />
                Within 24 hours
              </div>
            </div>

            <div className="bg-white/70 border border-stone-200/80 p-6 rounded-2xl relative text-left">
              <div className="text-4xl font-black text-slate-100 absolute top-4 right-4">03</div>
              <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-orange-600 mb-6">
                <Rocket className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-2">Go Live Everywhere</h3>
              <p className="text-slate-500 text-sm leading-relaxed">We embed the chatbot on your website, connect your WhatsApp Business number, and link channels.</p>
              <div className="mt-6 flex items-center gap-1.5 text-xs text-orange-700 font-bold">
                <Clock className="w-3.5 h-3.5" />
                48 hours total
              </div>
            </div>

            <div className="bg-orange-600 text-white p-6 rounded-2xl relative text-left shadow-lg shadow-orange-500/20">
              <div className="text-4xl font-black text-orange-500/30 absolute top-4 right-4">04</div>
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white mb-6">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">Watch Revenue Grow</h3>
              <p className="text-orange-100 text-sm leading-relaxed">Monitor leads captured, appointments booked, and patient satisfaction scores in real-time.</p>
              <div className="mt-6 flex items-center gap-1.5 text-xs text-orange-200 font-bold">
                <TrendingUp className="w-3.5 h-3.5" />
                Ongoing ROI
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================
             SECTION 5: PRICING
        ====================================================== */}
        <section className="relative z-10 py-20 max-w-7xl mx-auto px-6" id="pricing">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="text-xs uppercase tracking-widest text-orange-600 font-bold mb-3">Pricing</div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6" style={{ fontFamily: 'Lexend' }}>
              Simple Pricing. No Surprises. <br/>
              <span className="text-gradient-orange">Rupee Pricing. India-First.</span>
            </h2>
            <p className="text-lg text-slate-600">
              Select the product that fits your workflow. Flat-rate plans with zero message markups.
            </p>
          </div>

          {/* Toggle Button */}
          <div className="flex justify-center mb-12">
            <div className="bg-slate-100 p-1.5 rounded-full inline-flex border border-slate-200">
              <button
                onClick={() => setActiveProduct('chatbot')}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  activeProduct === 'chatbot'
                    ? 'bg-orange-500 text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                AI Chatbot
              </button>
              <button
                onClick={() => setActiveProduct('voicebot')}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  activeProduct === 'voicebot'
                    ? 'bg-orange-500 text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                AI Voice Bot
              </button>
            </div>
          </div>

          {activeProduct === 'chatbot' ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Free */}
              <div className="bg-white border border-stone-200 p-8 rounded-2xl text-left flex flex-col justify-between">
                <div>
                  <div className="text-lg font-bold text-slate-800 mb-4">Free</div>
                  <div className="flex items-baseline mb-4">
                    <span className="text-2xl font-semibold">₹</span>
                    <span className="text-4xl font-extrabold text-slate-950">0</span>
                    <span className="text-slate-500 text-sm ml-1">forever</span>
                  </div>
                  <p className="text-slate-500 text-sm mb-6">For clinics getting started with website live chat</p>
                  <ul className="space-y-3.5 text-sm text-slate-600 border-t border-slate-100 pt-6">
                    <li className="flex items-center gap-2.5"><Check className="w-4.5 h-4.5 text-emerald-500" /> Website Live Chat Widget</li>
                    <li className="flex items-center gap-2.5"><Check className="w-4.5 h-4.5 text-emerald-500" /> Conversations: Unlimited</li>
                    <li className="flex items-center gap-2.5"><Check className="w-4.5 h-4.5 text-emerald-500" /> 1 Human Agent Seat</li>
                    <li className="flex items-center gap-2.5"><Check className="w-4.5 h-4.5 text-emerald-500" /> CRM Sync (HubSpot, Webhooks)</li>
                    <li className="flex items-center gap-2.5"><Check className="w-4.5 h-4.5 text-emerald-500" /> Basic Lead Capture Forms</li>
                    <li className="flex items-center gap-2.5"><Check className="w-4.5 h-4.5 text-emerald-500" /> Standard Email Support</li>
                  </ul>
                </div>
                <a href="https://chat.swandigitals.com" target="_blank" rel="noopener noreferrer" className="w-full mt-8 py-3 px-4 border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-xl font-bold text-center transition-colors">
                  Start Free
                </a>
              </div>

              {/* Growth Hub */}
              <div className="bg-white border border-stone-200 p-8 rounded-2xl text-left flex flex-col justify-between">
                <div>
                  <div className="text-lg font-bold text-slate-800 mb-4">Growth Hub</div>
                  <div className="flex items-baseline mb-4">
                    <span className="text-2xl font-semibold">₹</span>
                    <span className="text-4xl font-extrabold text-slate-950">1,999</span>
                    <span className="text-slate-500 text-sm ml-1">/month</span>
                  </div>
                  <p className="text-slate-500 text-sm mb-6">Perfect for solo practitioners &amp; small clinics</p>
                  <ul className="space-y-3.5 text-sm text-slate-600 border-t border-slate-100 pt-6">
                    <li className="flex items-center gap-2.5"><Check className="w-4.5 h-4.5 text-emerald-500" /> Conversations: Unlimited</li>
                    <li className="flex items-center gap-2.5"><Check className="w-4.5 h-4.5 text-emerald-500" /> WhatsApp + Website chatbot</li>
                    <li className="flex items-center gap-2.5"><Check className="w-4.5 h-4.5 text-emerald-500" /> 10 Indian languages</li>
                    <li className="flex items-center gap-2.5"><Check className="w-4.5 h-4.5 text-emerald-500" /> Appointment booking</li>
                    <li className="flex items-center gap-2.5"><Check className="w-4.5 h-4.5 text-emerald-500" /> Lead capture &amp; CRM export</li>
                    <li className="flex items-center gap-2.5"><Check className="w-4.5 h-4.5 text-emerald-500" /> Meta Fees: 0% Markup Pass-Through</li>
                  </ul>
                </div>
                <Link href="#cta" className="w-full mt-8 py-3 px-4 border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-xl font-bold text-center transition-colors">
                  Start Free Trial
                </Link>
              </div>

              {/* Performance Pro */}
              <div className="bg-white border-2 border-orange-500 p-8 rounded-2xl text-left flex flex-col justify-between relative shadow-xl shadow-orange-500/5">
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Most Popular
                </div>
                <div>
                  <div className="text-lg font-bold text-slate-800 mb-4">Performance Pro</div>
                  <div className="flex items-baseline mb-4">
                    <span className="text-2xl font-semibold">₹</span>
                    <span className="text-4xl font-extrabold text-slate-950">4,999</span>
                    <span className="text-slate-500 text-sm ml-1">/month</span>
                  </div>
                  <p className="text-slate-500 text-sm mb-6">For busy multi-doctor clinics &amp; diagnostic centres</p>
                  <ul className="space-y-3.5 text-sm text-slate-600 border-t border-slate-100 pt-6">
                    <li className="flex items-center gap-2.5"><Check className="w-4.5 h-4.5 text-emerald-500" /> WhatsApp, Web Chat &amp; Facebook Messenger</li>
                    <li className="flex items-center gap-2.5"><Check className="w-4.5 h-4.5 text-emerald-500" /> Visual Flow Builder for branching</li>
                    <li className="flex items-center gap-2.5"><Check className="w-4.5 h-4.5 text-emerald-500" /> Advanced custom REST API nodes</li>
                    <li className="flex items-center gap-2.5"><Check className="w-4.5 h-4.5 text-emerald-500" /> Smart appointment scheduling</li>
                    <li className="flex items-center gap-2.5"><Check className="w-4.5 h-4.5 text-emerald-500" /> Lead capture + CRM integration</li>
                    <li className="flex items-center gap-2.5"><Check className="w-4.5 h-4.5 text-emerald-500" /> Custom AI persona &amp; branding</li>
                  </ul>
                </div>
                <Link href="#cta" className="w-full mt-8 py-3.5 px-4 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-bold text-center shadow-md shadow-orange-500/10 transition-colors">
                  Start Free Trial
                </Link>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Pay-as-you-go */}
              <div className="bg-white border border-stone-200 p-8 rounded-2xl text-left flex flex-col justify-between">
                <div>
                  <div className="text-lg font-bold text-slate-800 mb-4">Pay-as-you-go</div>
                  <div className="flex items-baseline mb-4">
                    <span className="text-2xl font-semibold">₹</span>
                    <span className="text-4xl font-extrabold text-slate-950">5.00</span>
                    <span className="text-slate-500 text-sm ml-1">/minute</span>
                  </div>
                  <p className="text-slate-500 text-sm mb-6">Perfect for testing &amp; low-volume clinics</p>
                  <ul className="space-y-3.5 text-sm text-slate-600 border-t border-slate-100 pt-6">
                    <li className="flex items-center gap-2.5"><Check className="w-4.5 h-4.5 text-emerald-500" /> No monthly commitment</li>
                    <li className="flex items-center gap-2.5"><Check className="w-4.5 h-4.5 text-emerald-500" /> 10 Indian Languages support</li>
                    <li className="flex items-center gap-2.5"><Check className="w-4.5 h-4.5 text-emerald-500" /> Inbound &amp; Outbound Calling</li>
                    <li className="flex items-center gap-2.5"><Check className="w-4.5 h-4.5 text-emerald-500" /> Call Recording &amp; Transcription</li>
                    <li className="flex items-center gap-2.5"><Check className="w-4.5 h-4.5 text-emerald-500" /> Live Agent Transfer</li>
                    <li className="flex items-center gap-2.5"><Check className="w-4.5 h-4.5 text-emerald-500" /> Fast, Natural Voice Latency</li>
                  </ul>
                </div>
                <Link href="#cta" className="w-full mt-8 py-3 px-4 border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-xl font-bold text-center transition-colors">
                  Start Pay-as-you-go
                </Link>
              </div>

              {/* Committed Usage */}
              <div className="bg-white border-2 border-orange-500 p-8 rounded-2xl text-left flex flex-col justify-between relative shadow-xl shadow-orange-500/5">
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Best Value
                </div>
                <div>
                  <div className="text-lg font-bold text-slate-800 mb-4">Committed Usage</div>
                  <div className="flex items-baseline mb-4">
                    <span className="text-2xl font-semibold">₹</span>
                    <span className="text-4xl font-extrabold text-slate-950">4.00</span>
                    <span className="text-slate-500 text-sm ml-1">/minute</span>
                  </div>
                  <p className="text-slate-500 text-sm mb-6">For steady inbound/outbound clinic operations</p>
                  <ul className="space-y-3.5 text-sm text-slate-600 border-t border-slate-100 pt-6">
                    <li className="flex items-center gap-2.5"><Check className="w-4.5 h-4.5 text-emerald-500" /> Min 5,000 mins/month commitment</li>
                    <li className="flex items-center gap-2.5"><Check className="w-4.5 h-4.5 text-emerald-500" /> 20% savings vs Pay-as-you-go</li>
                    <li className="flex items-center gap-2.5"><Check className="w-4.5 h-4.5 text-emerald-500" /> Dedicated Clinic Phone Number</li>
                    <li className="flex items-center gap-2.5"><Check className="w-4.5 h-4.5 text-emerald-500" /> Priority Call Routing</li>
                    <li className="flex items-center gap-2.5"><Check className="w-4.5 h-4.5 text-emerald-500" /> Post-Call Analytics Dashboard</li>
                    <li className="flex items-center gap-2.5"><Check className="w-4.5 h-4.5 text-emerald-500" /> CRM Sync on Every Call</li>
                  </ul>
                </div>
                <Link href="#cta" className="w-full mt-8 py-3.5 px-4 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-bold text-center shadow-md shadow-orange-500/10 transition-colors">
                  Lock in Committed Rate
                </Link>
              </div>

              {/* Scale Voice */}
              <div className="bg-white border border-stone-200 p-8 rounded-2xl text-left flex flex-col justify-between">
                <div>
                  <div className="text-lg font-bold text-slate-800 mb-4">Scale Voice</div>
                  <div className="flex items-baseline mb-4">
                    <span className="text-4xl font-extrabold text-slate-950">Custom</span>
                  </div>
                  <p className="text-slate-500 text-sm mb-6">For large hospital networks &amp; collection desks</p>
                  <ul className="space-y-3.5 text-sm text-slate-600 border-t border-slate-100 pt-6">
                    <li className="flex items-center gap-2.5"><Check className="w-4.5 h-4.5 text-emerald-500" /> Custom volume commitment rates</li>
                    <li className="flex items-center gap-2.5"><Check className="w-4.5 h-4.5 text-emerald-500" /> Dedicated Indian (+91) phone numbers</li>
                    <li className="flex items-center gap-2.5"><Check className="w-4.5 h-4.5 text-emerald-500" /> High-volume outbound calling</li>
                    <li className="flex items-center gap-2.5"><Check className="w-4.5 h-4.5 text-emerald-500" /> Custom workflow updates via n8n</li>
                    <li className="flex items-center gap-2.5"><Check className="w-4.5 h-4.5 text-emerald-500" /> SLA &amp; dedicated solutions architect</li>
                  </ul>
                </div>
                <Link href="/contact" className="w-full mt-8 py-3 px-4 border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-xl font-bold text-center transition-colors">
                  Contact Sales
                </Link>
              </div>
            </div>
          )}

          <div className="flex justify-center items-center gap-2 text-slate-500 text-sm font-semibold mt-10">
            <ShieldCheck className="w-5 h-5 text-emerald-500" />
            14-day free trial on all plans. No credit card required. Cancel anytime.
          </div>
        </section>

        {/* ======================================================
             SECTION 6: FAQ
        ====================================================== */}
        <section className="relative z-10 py-20 max-w-7xl mx-auto px-6" id="faq">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Header */}
            <div className="lg:col-span-4 text-left lg:sticky lg:top-24 h-fit">
              <div className="text-xs uppercase tracking-widest text-orange-600 font-bold mb-3">FAQ</div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-6" style={{ fontFamily: 'Lexend' }}>
                Questions<br/>Doctors<br/>Actually Ask
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                No sales jargon — honest answers to the things every doctor asks before going live.
              </p>

              {/* Still have questions card */}
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
                <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600 mb-4">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 mb-1">Still have questions?</h4>
                <p className="text-slate-500 text-sm mb-4">Our team replies on WhatsApp within 2 hours.</p>
                <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-teal-600 hover:bg-teal-700 text-white rounded-xl font-bold text-sm transition-colors">
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Right Accordion */}
            <div className="lg:col-span-8 space-y-4">
              {faqItems.map((item, idx) => (
                <div key={idx} className="bg-white border border-stone-200 rounded-2xl overflow-hidden shadow-sm">
                  <button 
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full p-6 flex justify-between items-center text-left hover:bg-slate-50/50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-slate-300 font-black text-lg">{item.num}</span>
                      <span className="font-bold text-slate-900 pr-4">{item.question}</span>
                    </div>
                    <div className={`w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-800 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>
                  <div className={`px-6 pb-6 text-sm text-slate-600 border-t border-slate-50 pt-4 text-left leading-relaxed ${openFaq === idx ? 'block' : 'hidden'}`}>
                    {item.answer}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ======================================================
             SECTION 7: FINAL CTA
        ====================================================== */}
        <section className="relative z-10 py-16 max-w-5xl mx-auto px-6" id="cta">
          <div className="bg-white border border-stone-200 p-8 md:p-12 rounded-3xl shadow-xl relative overflow-hidden text-center">
            {/* Decorative background glow */}
            <div className="absolute -top-12 -left-12 w-48 h-48 rounded-full bg-orange-100 blur-3xl opacity-60"></div>
            <div className="absolute -bottom-12 -right-12 w-48 h-48 rounded-full bg-teal-50 blur-3xl opacity-60"></div>

            <div className="w-16 h-16 bg-orange-50 border border-orange-200 rounded-2xl flex items-center justify-center text-orange-600 mx-auto mb-8 shadow-sm relative z-10">
              <Stethoscope className="w-8 h-8" />
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-4 relative z-10" style={{ fontFamily: 'Lexend' }}>
              Your Patients Are Messaging Right Now.<br/>
              <span className="text-gradient-orange">Is Anyone Answering?</span>
            </h2>
            
            <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto relative z-10">
              Join India's forward-thinking doctors who never miss a patient enquiry. Launch your AI agent in 48 hours — free for 14 days, no credit card required.
            </p>

            {isSubmitted ? (
              <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-2xl text-emerald-950 font-bold max-w-md mx-auto relative z-10">
                🎉 Trial Claimed Successfully!<br/>
                <span className="text-sm font-medium text-emerald-800">We will message you on WhatsApp within 2 hours to set up your account.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="max-w-4xl mx-auto flex flex-col md:flex-row gap-4 items-end relative z-10">
                <div className="w-full text-left">
                  <label htmlFor="cta-name" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 ml-1">Your Name</label>
                  <input 
                    type="text" 
                    id="cta-name" 
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Dr. Priya Sharma" 
                    className="w-full p-4 border border-slate-200 rounded-xl bg-slate-50/50 focus:bg-white focus:outline-orange-500 text-sm transition-all"
                    required
                  />
                </div>
                <div className="w-full text-left">
                  <label htmlFor="cta-phone" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 ml-1">WhatsApp Number</label>
                  <input 
                    type="tel" 
                    id="cta-phone" 
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 98765 43210" 
                    className="w-full p-4 border border-slate-200 rounded-xl bg-slate-50/50 focus:bg-white focus:outline-orange-500 text-sm transition-all"
                    required
                  />
                </div>
                <div className="w-full text-left">
                  <label htmlFor="cta-clinic" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 ml-1">Clinic / Specialty</label>
                  <input 
                    type="text" 
                    id="cta-clinic" 
                    value={formData.clinic}
                    onChange={handleInputChange}
                    placeholder="Orthopaedics · Mumbai" 
                    className="w-full p-4 border border-slate-200 rounded-xl bg-slate-50/50 focus:bg-white focus:outline-orange-500 text-sm transition-all"
                    required
                  />
                </div>
                <button type="submit" className="w-full md:w-auto px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-bold whitespace-nowrap shadow-lg shadow-orange-500/15 flex items-center justify-center gap-2 hover:scale-102 transition-all">
                  <Rocket className="w-4 h-4" />
                  Claim Free Trial
                </button>
              </form>
            )}
            
            <p className="text-xs text-slate-400 mt-4">We'll WhatsApp you within 2 hours to schedule your onboarding call.</p>
          </div>
        </section>
      </div>
    </SiteLayout>
  );
}

