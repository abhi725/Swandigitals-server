"use client";

import SiteLayout from '@/components/layout/SiteLayout';
import Hero from '@/components/ui/Hero';
import FeatureGrid from '@/components/ui/FeatureGrid';
import {
    Bot, Zap, Shield, BarChart3, Globe, Headphones,
    Briefcase, Settings, Mic, Link2, Lock, Cpu,
    Phone, AlertTriangle, Check, ArrowRight,
    MessageSquare, Clock, TrendingUp, Sparkles, PhoneCall,
    Database, Calendar, CheckCircle2, Stethoscope, ShoppingBag, Building2
} from 'lucide-react';
import Link from 'next/link';
import FAQ from '@/components/ui/FAQ';
import IntegrationCloud from '@/components/ui/IntegrationCloud';
import { useState, useEffect, useRef } from 'react';
import DashboardMockup from '@/components/ui/DashboardMockup';

function useReveal() {
    const ref = useRef<HTMLElement>(null);
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.querySelectorAll('.reveal').forEach((el, i) => {
                            setTimeout(() => el.classList.add('visible'), i * 80);
                        });
                    }
                });
            },
            { threshold: 0.05 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);
    return ref;
}

export default function HomePageContent() {
    const [activeUseCase, setActiveUseCase] = useState(0);
    const problemsRef = useReveal();
    const solutionsRef = useReveal();
    const stepsRef = useReveal();
    const statsRef = useReveal();
    const useCasesRef = useReveal();
    const compareRef = useReveal();
    const ctaRef = useReveal();

    const features = [
        { icon: <Bot className="w-5 h-5" />, title: "AI That Understands Context", description: "Your customers don't repeat themselves. SwanDigitals AI remembers full conversation context, auto-resolving FAQs in Hindi, English, and regional languages." },
        { icon: <Mic className="w-5 h-5" />, title: "Voice Assistant on Your +91 Number", description: "Answers inbound phone calls and places outbound reminder calls 24/7 in 10 Indian languages. Connects to standard Indian telecom lines." },
        { icon: <Zap className="w-5 h-5" />, title: "Up & Running in 10 Minutes", description: "Connect your WhatsApp Business API, web chat widget, or phone line in minutes. No complex developer coding required." },
        { icon: <Shield className="w-5 h-5" />, title: "Data Hosted in India", description: "All customer conversational logs and database records are strictly hosted on Indian AWS/GCP servers in Mumbai (ap-south-1)." },
        { icon: <Globe className="w-5 h-5" />, title: "Every Channel in One Inbox", description: "WhatsApp, Email, Web Chat, Instagram, and Phone call logs — managed cleanly by your team from a single screen." },
        { icon: <BarChart3 className="w-5 h-5" />, title: "Real-Time SME Analytics", description: "Track response times, call deflection rates, lead conversion numbers, and agent performance in one clean dashboard." },
    ];

    const useCases = [
        {
            icon: <Building2 className="w-5 h-5" />,
            title: "Real Estate & Builders",
            description: "Capture buyer leads from WhatsApp and Instagram DMs 24/7. Automatically qualify BHK preferences, budgets, and book site visits over chat or voice call.",
            stats: ["24/7 Site Visits Booked", "WhatsApp & Insta Sync", "Automated Lead Scoring"],
            link: "/solutions/sales"
        },
        {
            icon: <Stethoscope className="w-5 h-5" />,
            title: "Clinics & Healthcare",
            description: "Never miss a patient appointment call. AI Voicebot answers phone inquiries in Hindi & regional languages, providing clinic timings and booking slots.",
            stats: ["Sub-500ms Voice Speed", "10 Indian Languages", "Zero Missed Calls"],
            link: "/solutions/healthcare"
        },
        {
            icon: <ShoppingBag className="w-5 h-5" />,
            title: "D2C & E-Commerce",
            description: "Automate 90% of routine WhatsApp support tickets, order status tracking, and product recommendations without expanding your support team.",
            stats: ["90% Ticket Deflection", "<2s WhatsApp Response", "Flat Monthly Pricing"],
            link: "/solutions/retail"
        },
        {
            icon: <Headphones className="w-5 h-5" />,
            title: "Local Services & B2B",
            description: "Provide 24/7 instant FAQ responses, schedule consults, and route complex cases to your staff with full history attached.",
            stats: ["Unified Team Inbox", "5-Min Knowledge Training", "Zero Lock-In"],
            link: "/solutions/customer-service"
        },
    ];

    const steps = [
        { num: 1, icon: <Phone className="w-6 h-6" />, title: "Connect WhatsApp & Phone Line", day: "Step 1", description: "Connect your WhatsApp Business API, web widget, or +91 phone number in a few clicks." },
        { num: 2, icon: <Settings className="w-6 h-6" />, title: "Auto-Train Your AI", day: "Step 2", description: "Paste your website URL or upload your product catalog PDF. The AI learns your business in minutes." },
        { num: 3, icon: <Zap className="w-6 h-6" />, title: "Go Live & Automate 24/7", day: "Step 3", description: "Your AI Chatbot and Voice Assistant start capturing leads and answering customer inquiries round the clock." },
    ];

    return (
        <SiteLayout>
            {/* 1. HERO SECTION */}
            <Hero
                badge="Built for Growing Indian Businesses"
                title="Never Miss a Customer Inquiry — AI Chatbot & Voice Assistant Built for Indian SMEs"
                subtitle="Handle WhatsApp, Web Chat, Email, and Phone Calls 24/7 with an AI assistant that speaks your customer's language. Setup in 10 minutes."
                primaryCTA={{ text: "Book a Free Demo", href: "/demo" }}
                secondaryCTA={{ text: "Sign Up Free →", href: "https://chat.swandigitals.com", external: true }}
                showMockup={true}
            />

            {/* 2. SME TRUST MARQUEE */}
            <section className="py-4 border-y border-slate-100 bg-white overflow-hidden">
                <div className="marquee-container">
                    <div className="marquee-inner">
                        {[...Array(2)].map((_, set) => (
                            <div key={set} className="flex items-center gap-10 px-5">
                                {["DATA HOSTED IN INDIA", "SUB-500MS VOICE LATENCY", "FLAT ₹ MONTHLY PRICING", "NO PER-MESSAGE TAX", "10 INDIAN LANGUAGES", "LIVE IN 10 MINUTES", "MADE FOR INDIAN SMEs"].map((item) => (
                                    <span key={item} className="flex items-center gap-3 text-xs font-semibold tracking-widest text-slate-400 uppercase whitespace-nowrap">
                                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0" />
                                        {item}
                                    </span>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. PROBLEM VS SOLUTION — THE SME REALITY */}
            <section ref={solutionsRef} className="py-20 lg:py-24 bg-slate-950 text-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <span className="reveal inline-block px-3.5 py-1 text-xs font-semibold tracking-wider uppercase text-orange-400 bg-orange-400/10 border border-orange-400/20 rounded-full mb-4">
                            The SME Operational Shift
                        </span>
                        <h2 className="reveal text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                            Stop Losing Customers to Delayed Replies & Missed Calls
                        </h2>
                        <p className="reveal text-base md:text-lg text-slate-400 max-w-2xl mx-auto">
                            See how Indian SMEs replace manual multi-phone chaos with automated 24/7 AI response engines.
                        </p>
                    </div>

                    <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mb-12">
                        {/* The Old Way */}
                        <div className="bg-slate-900 border border-rose-500/20 rounded-3xl p-8 text-left space-y-4">
                            <p className="text-xs font-bold text-rose-400 uppercase tracking-widest flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-rose-500" />
                                ❌ The Manual SME Problem
                            </p>
                            <ul className="space-y-3.5 text-sm text-slate-300">
                                <li className="flex gap-3"><span className="text-rose-500 font-bold">✕</span> Customers message on WhatsApp after 7 PM and leave for competitors when unreplied.</li>
                                <li className="flex gap-3"><span className="text-rose-500 font-bold">✕</span> Front desk misses phone calls during peak hours or clinic consultation times.</li>
                                <li className="flex gap-3"><span className="text-rose-500 font-bold">✕</span> Staff spends 4+ hours daily answering the exact same FAQ questions over and over.</li>
                                <li className="flex gap-3"><span className="text-rose-500 font-bold">✕</span> Software tools charging per-message penalties that explode as sales grow.</li>
                            </ul>
                        </div>

                        {/* The SwanDigitals Way */}
                        <div className="bg-slate-900 border border-emerald-500/30 rounded-3xl p-8 text-left space-y-4 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
                            <p className="text-xs font-bold text-emerald-400 uppercase tracking-widest flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                                ✓ The SwanDigitals Solution
                            </p>
                            <ul className="space-y-3.5 text-sm text-white/90">
                                <li className="flex gap-3"><span className="text-emerald-400 font-bold">✓</span> 24/7 AI Chatbot auto-replies on WhatsApp in under 2 seconds.</li>
                                <li className="flex gap-3"><span className="text-emerald-400 font-bold">✓</span> Vernacular AI Voicebot picks up calls on your +91 number in Hindi, English, & Tamil.</li>
                                <li className="flex gap-3"><span className="text-emerald-400 font-bold">✓</span> AI auto-trains on your website URL or PDF catalog in 5 minutes with zero coding.</li>
                                <li className="flex gap-3"><span className="text-emerald-400 font-bold">✓</span> Flat monthly workspace pricing — scale without per-conversation penalties.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. PRODUCT 1 — OMNICHANNEL CHATBOT PLATFORM */}
            <section className="py-20 lg:py-24 bg-white border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                        {/* Copy Column */}
                        <div className="lg:col-span-6 space-y-6 text-left">
                            <span className="inline-flex items-center gap-2 px-3.5 py-1 bg-orange-50 border border-orange-200 rounded-full text-xs font-semibold text-orange-700">
                                <MessageSquare className="w-3.5 h-3.5 text-orange-500" />
                                PRODUCT 01 — TEXT CHATBOT PLATFORM
                            </span>

                            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
                                Autonomous WhatsApp & Web Chatbot for Indian Businesses
                            </h2>

                            <p className="text-base text-slate-600 leading-relaxed">
                                Automate up to 90% of routine customer inquiries across WhatsApp Business API, Web Chat, Email, and Instagram DMs without adding extra support staff.
                            </p>

                            <div className="space-y-3 pt-2">
                                <div className="flex items-start gap-3 text-sm text-slate-700">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                                    <span><strong>Single Team Inbox:</strong> Manage all WhatsApp messages, emails, and web chats from one dashboard.</span>
                                </div>
                                <div className="flex items-start gap-3 text-sm text-slate-700">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                                    <span><strong>Hinglish & Regional Dialects:</strong> Native understanding of code-switching, Hinglish, Tamil, and Marathi.</span>
                                </div>
                                <div className="flex items-start gap-3 text-sm text-slate-700">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                                    <span><strong>Flat Monthly Price:</strong> Zero per-message tax. Scale your WhatsApp volume freely.</span>
                                </div>
                            </div>

                            <div className="pt-4 flex flex-wrap items-center gap-4">
                                <div className="bg-slate-50 border border-slate-200 rounded-2xl px-5 py-3 text-left">
                                    <div className="text-2xl font-bold text-orange-600">90%</div>
                                    <div className="text-[11px] text-slate-500 uppercase font-semibold">FAQ Deflection</div>
                                </div>
                                <div className="bg-slate-50 border border-slate-200 rounded-2xl px-5 py-3 text-left">
                                    <div className="text-2xl font-bold text-slate-900">&lt;2 sec</div>
                                    <div className="text-[11px] text-slate-500 uppercase font-semibold">WhatsApp Speed</div>
                                </div>
                                <div className="bg-slate-50 border border-slate-200 rounded-2xl px-5 py-3 text-left">
                                    <div className="text-2xl font-bold text-emerald-600">100%</div>
                                    <div className="text-[11px] text-slate-500 uppercase font-semibold">Indian Server Hosting</div>
                                </div>
                            </div>

                            <div className="pt-2">
                                <Link href="/solutions/customer-service" className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-full text-sm font-semibold transition-colors shadow-orange">
                                    Explore Chatbot Workflows
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>

                        {/* Real Dashboard Image */}
                        <div className="lg:col-span-6">
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-900 group">
                                <div className="flex items-center justify-between px-4 py-3 bg-slate-950 border-b border-slate-800">
                                    <div className="flex items-center gap-1.5">
                                        <div className="w-3 h-3 rounded-full bg-rose-500" />
                                        <div className="w-3 h-3 rounded-full bg-amber-500" />
                                        <div className="w-3 h-3 rounded-full bg-emerald-500" />
                                        <span className="text-[11px] text-slate-400 font-mono ml-2">app.swandigitals.com/inbox</span>
                                    </div>
                                    <span className="text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2.5 py-0.5 rounded-full font-medium">WhatsApp Sync Active</span>
                                </div>
                                <img
                                    src="/dashboard-screenshot.png"
                                    alt="SwanDigitals Text Chatbot Inbox Dashboard"
                                    className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. PRODUCT 1 PART B — 5-MINUTE KNOWLEDGE BASE SYNTHESIZER */}
            <section className="py-20 lg:py-24 bg-slate-50/70 border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                        {/* Interactive Synthesizer Clean Card */}
                        <div className="lg:col-span-6 order-2 lg:order-1">
                            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-card space-y-6 text-left">
                                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 font-bold">
                                            <Database className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 text-sm">Instant Business Knowledge Synthesizer</h4>
                                            <p className="text-[11px] text-slate-500">Auto-trains on website URLs & PDFs</p>
                                        </div>
                                    </div>
                                    <span className="text-[10px] font-bold text-orange-600 bg-orange-50 px-2.5 py-1 rounded-full border border-orange-100">
                                        Auto-Sync Active
                                    </span>
                                </div>

                                <div className="space-y-3">
                                    <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between text-xs">
                                        <span className="text-slate-700 font-mono">https://yourwebsite.com/services</span>
                                        <span className="text-emerald-600 font-semibold flex items-center gap-1">
                                            <Check className="w-3.5 h-3.5" /> 142 vectors mapped
                                        </span>
                                    </div>
                                    <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between text-xs">
                                        <span className="text-slate-700 font-mono">product-price-catalog-2026.pdf</span>
                                        <span className="text-emerald-600 font-semibold flex items-center gap-1">
                                            <Check className="w-3.5 h-3.5" /> 88 pages indexed
                                        </span>
                                    </div>
                                </div>

                                <div className="p-4 bg-orange-50/50 border border-orange-100 rounded-2xl space-y-2">
                                    <div className="text-xs font-bold text-orange-700 uppercase tracking-wider">Automated Lead Scoring Webhook</div>
                                    <p className="text-xs text-slate-600 leading-relaxed">
                                        When a customer asks about pricing or appointments on WhatsApp, SwanDigitals scores their intent and pushes qualified lead data directly to your CRM (HubSpot or n8n).
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Copy Column */}
                        <div className="lg:col-span-6 order-1 lg:order-2 space-y-6 text-left">
                            <span className="inline-flex items-center gap-2 px-3.5 py-1 bg-orange-50 border border-orange-200 rounded-full text-xs font-semibold text-orange-700">
                                <Sparkles className="w-3.5 h-3.5 text-orange-500" />
                                EASY SETUP — ZERO CODING
                            </span>

                            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
                                Auto-Train AI on Your Business Info in 5 Minutes
                            </h2>

                            <p className="text-base text-slate-600 leading-relaxed">
                                No complex flowchart coding needed. Simply paste your website URL or upload your product PDF catalog. SwanDigitals AI reads and understands your business offerings instantly.
                            </p>

                            <div className="space-y-3 pt-2">
                                <div className="flex items-start gap-3 text-sm text-slate-700">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                                    <span><strong>Zero Flowchart Maintenance:</strong> AI generates natural responses directly from your catalog.</span>
                                </div>
                                <div className="flex items-start gap-3 text-sm text-slate-700">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                                    <span><strong>Automatic Lead Capture:</strong> Collects customer name, mobile number, and requirements over chat.</span>
                                </div>
                                <div className="flex items-start gap-3 text-sm text-slate-700">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                                    <span><strong>Instant Human Escalation:</strong> Passes complex inquiries to your staff with full chat context.</span>
                                </div>
                            </div>

                            <div className="pt-2">
                                <Link href="/solutions/sales" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-full text-sm font-semibold transition-colors">
                                    View Lead Capture Workflows
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. PRODUCT 2 — VERNACULAR VOICE AI AGENT */}
            <section className="py-20 lg:py-24 bg-slate-950 text-white relative overflow-hidden border-y border-slate-800">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent pointer-events-none" />
                <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                        {/* Copy Column */}
                        <div className="lg:col-span-6 space-y-6 text-left">
                            <span className="inline-flex items-center gap-2 px-3.5 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-xs font-semibold text-emerald-400">
                                <Mic className="w-3.5 h-3.5 text-emerald-400" />
                                PRODUCT 02 — VERNACULAR VOICE AI AGENT
                            </span>

                            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
                                Low-Latency Voice AI Phone Assistant for Indian SMEs
                            </h2>

                            <p className="text-base text-slate-300 leading-relaxed">
                                Answer inbound customer phone calls 24/7 on your +91 phone number with human-like, natural voice synthesis in Hindi, English, Tamil, Marathi, and 6+ Indian languages.
                            </p>

                            <div className="space-y-3 pt-2">
                                <div className="flex items-start gap-3 text-sm text-slate-300">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                                    <span><strong>Sub-500ms Voice Latency:</strong> Ultra-fast response pipeline so calls sound natural without awkward silences.</span>
                                </div>
                                <div className="flex items-start gap-3 text-sm text-slate-300">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                                    <span><strong>10 Indian Vernacular Dialects:</strong> Native voice models in Hindi, English, Tamil, Telugu, Marathi, and Gujarati.</span>
                                </div>
                                <div className="flex items-start gap-3 text-sm text-slate-300">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                                    <span><strong>Works on Your +91 Number:</strong> Compatible with Airtel, Tata Tele, Twilio, and standard Indian telecom lines.</span>
                                </div>
                            </div>

                            <div className="pt-4 flex flex-wrap items-center gap-4">
                                <div className="bg-slate-900 border border-slate-800 rounded-2xl px-5 py-3 text-left">
                                    <div className="text-2xl font-bold text-emerald-400">&lt;500ms</div>
                                    <div className="text-[11px] text-slate-400 uppercase font-semibold">Voice Latency</div>
                                </div>
                                <div className="bg-slate-900 border border-slate-800 rounded-2xl px-5 py-3 text-left">
                                    <div className="text-2xl font-bold text-white">70%</div>
                                    <div className="text-[11px] text-slate-400 uppercase font-semibold">Call Cost Savings</div>
                                </div>
                                <div className="bg-slate-900 border border-slate-800 rounded-2xl px-5 py-3 text-left">
                                    <div className="text-2xl font-bold text-orange-400">24/7</div>
                                    <div className="text-[11px] text-slate-400 uppercase font-semibold">Always-On Phone Line</div>
                                </div>
                            </div>

                            <div className="pt-2">
                                <Link href="/features/voice-ai" className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold rounded-full text-sm transition-colors">
                                    Explore Voice AI Assistant
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>

                        {/* Real Voicebot Overview Image */}
                        <div className="lg:col-span-6">
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-900 group">
                                <div className="flex items-center justify-between px-4 py-3 bg-slate-950 border-b border-slate-800">
                                    <div className="flex items-center gap-1.5">
                                        <div className="w-3 h-3 rounded-full bg-rose-500" />
                                        <div className="w-3 h-3 rounded-full bg-amber-500" />
                                        <div className="w-3 h-3 rounded-full bg-emerald-500" />
                                        <span className="text-[11px] text-slate-400 font-mono ml-2">app.swandigitals.com/voice/overview</span>
                                    </div>
                                    <span className="text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2.5 py-0.5 rounded-full font-medium">30 Live Calls Handled</span>
                                </div>
                                <img
                                    src="/voicebot-overview.png"
                                    alt="SwanVoice AI Call Overview & Analytics Dashboard"
                                    className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. PRODUCT 2 PART B — VOICE AGENT MANAGER */}
            <section className="py-20 lg:py-24 bg-slate-900 text-white border-b border-slate-800">
                <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                        {/* Real Voicebot Agents Image */}
                        <div className="lg:col-span-6 order-2 lg:order-1">
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-950 group">
                                <div className="flex items-center justify-between px-4 py-3 bg-slate-950 border-b border-slate-800">
                                    <div className="flex items-center gap-1.5">
                                        <div className="w-3 h-3 rounded-full bg-rose-500" />
                                        <div className="w-3 h-3 rounded-full bg-amber-500" />
                                        <div className="w-3 h-3 rounded-full bg-emerald-500" />
                                        <span className="text-[11px] text-slate-400 font-mono ml-2">app.swandigitals.com/voice/agents</span>
                                    </div>
                                    <span className="text-[10px] bg-orange-500/10 text-orange-400 border border-orange-500/20 px-2.5 py-0.5 rounded-full font-medium">6 Custom Agents Configured</span>
                                </div>
                                <img
                                    src="/voicebot-agents.png"
                                    alt="SwanVoice AI Configured Voice Agents Console"
                                    className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
                                />
                            </div>
                        </div>

                        {/* Copy Column */}
                        <div className="lg:col-span-6 order-1 lg:order-2 space-y-6 text-left">
                            <span className="inline-flex items-center gap-2 px-3.5 py-1 bg-orange-500/10 border border-orange-500/20 rounded-full text-xs font-semibold text-orange-400">
                                <PhoneCall className="w-3.5 h-3.5 text-orange-400" />
                                CUSTOM VOICE AGENTS FOR YOUR SME
                            </span>

                            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
                                Deploy Custom Voice AI Assistants for Sales & Bookings
                            </h2>

                            <p className="text-base text-slate-300 leading-relaxed">
                                Build dedicated voice AI assistants tailored to your exact industry — such as Lead Qualification (Hindi), Clinic Appointment Booker, or Sales Support.
                            </p>

                            <div className="space-y-3 pt-2">
                                <div className="flex items-start gap-3 text-sm text-slate-300">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                                    <span><strong>Custom Business Persona:</strong> Set custom voice tone, language rules, and greeting messages.</span>
                                </div>
                                <div className="flex items-start gap-3 text-sm text-slate-300">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                                    <span><strong>Calendar Booking:</strong> Integrates with Google Calendar to book customer appointment slots live over the call.</span>
                                </div>
                                <div className="flex items-start gap-3 text-sm text-slate-300">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                                    <span><strong>Call Recordings & Transcripts:</strong> Automatically saves call audio and text transcripts into your dashboard.</span>
                                </div>
                            </div>

                            <div className="pt-2">
                                <Link href="/build-ai-voice-agent" className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-full text-sm font-semibold transition-colors shadow-orange">
                                    Build Your Custom Voice Agent
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. WHY SWANDIGITALS FEATURE GRID */}
            <FeatureGrid
                features={features}
                sectionLabel="Built for Indian Business"
                heading="Enterprise-Grade AI Automation Made Simple & Affordable."
                subheading="No robotic scripts. SwanDigitals text chatbots and voice AI assistants understand context, intent, and regional Indian nuances."
            />

            {/* 9. USE CASES BY INDUSTRY (ICP TABS) */}
            <section ref={useCasesRef} className="py-20 lg:py-24 bg-slate-50/60 border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <span className="reveal inline-block px-3.5 py-1 text-xs font-semibold tracking-wider uppercase text-orange-600 bg-orange-50 border border-orange-100 rounded-full mb-4">
                            Industry Workflows
                        </span>
                        <h2 className="reveal text-3xl md:text-4xl font-bold text-slate-900 mb-3">Tailored Automation Playbooks for Your Sector</h2>
                        <p className="reveal text-slate-500 text-base">Select your business type to explore customized Chatbot & Voicebot workflows</p>
                    </div>

                    <div className="reveal flex flex-wrap justify-center gap-3 mb-10">
                        {useCases.map((uc, i) => (
                            <button
                                key={i}
                                type="button"
                                onClick={() => setActiveUseCase(i)}
                                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${activeUseCase === i
                                    ? 'bg-slate-900 text-white shadow-md scale-105'
                                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'}`}
                            >
                                {uc.icon}
                                {uc.title}
                            </button>
                        ))}
                    </div>

                    <div className="reveal bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-card text-left">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                            <div className="lg:col-span-6 space-y-4">
                                <h3 className="text-2xl font-bold text-slate-900">{useCases[activeUseCase].title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{useCases[activeUseCase].description}</p>
                                <div className="flex flex-wrap gap-2 pt-2">
                                    {useCases[activeUseCase].stats.map((stat, i) => (
                                        <span key={i} className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-full text-xs font-semibold">
                                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                                            {stat}
                                        </span>
                                    ))}
                                </div>
                                <div className="pt-4">
                                    <Link href={useCases[activeUseCase].link} className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-semibold text-xs transition-colors shadow-orange">
                                        Explore {useCases[activeUseCase].title} Playbook
                                        <ArrowRight className="w-3.5 h-3.5" />
                                    </Link>
                                </div>
                            </div>
                            <div className="lg:col-span-6 flex items-center justify-center rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                                <img src="/dashboard-screenshot.png" alt="SwanDigitals Dashboard" className="w-full h-auto object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 10. 3-STEP EASY ONBOARDING */}
            <section ref={stepsRef} className="py-20 lg:py-24 bg-white border-b border-slate-100">
                <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="reveal inline-block px-3.5 py-1 text-xs font-semibold tracking-wider uppercase text-orange-600 bg-orange-50 border border-orange-100 rounded-full mb-4">
                            Simple Setup
                        </span>
                        <h2 className="reveal text-3xl md:text-4xl font-bold text-slate-900 mb-3">Live Automation in 3 Easy Steps</h2>
                        <p className="reveal text-lg text-slate-500 max-w-xl mx-auto">Get your AI Chatbot & Voice assistant running without complex technical setup.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left relative">
                        {steps.map((step, i) => (
                            <div key={i} className="reveal bg-slate-50 border border-slate-200 rounded-3xl p-7 relative space-y-3 shadow-card hover:shadow-card-hover transition-all">
                                <div className="flex items-center justify-between">
                                    <div className="w-12 h-12 bg-orange-500 text-white rounded-2xl flex items-center justify-center font-bold text-lg shadow-orange">
                                        {step.num}
                                    </div>
                                    <span className="text-xs font-bold text-orange-600 bg-orange-50 px-3 py-1 rounded-full border border-orange-100">{step.day}</span>
                                </div>
                                <h3 className="text-lg font-bold text-slate-900">{step.title}</h3>
                                <p className="text-xs text-slate-600 leading-relaxed">{step.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="reveal text-center mt-12">
                        <Link href="/demo" className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-bold text-sm shadow-orange transition-all cursor-pointer">
                            Schedule Your Free 10-Minute Setup Demo
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* 11. INTEGRATIONS & FAQS */}
            <IntegrationCloud
                integrations={[
                    { name: 'WhatsApp', color: '#25D366', image: '/integrations/whatsapp.png', category: 'Messaging' },
                    { name: 'Facebook', color: '#0866FF', image: '/integrations/messenger.png', category: 'Messaging' },
                    { name: 'HubSpot', color: '#FF7A59', image: '/integrations/hubspot.png', category: 'CRM' },
                    { name: 'Calendly', color: '#006BFF', category: 'Scheduling' },
                    { name: 'Razorpay', color: '#0066FF', image: '/integrations/razorpay.png', category: 'Payment' },
                    { name: 'n8n', color: '#EA4B71', category: 'Automation' },
                ]}
                note="More integrations coming — request custom API webhooks"
            />

            <FAQ items={[
                { question: "What is the difference between SwanDigitals Text Chatbot and Voice AI Assistant?", answer: "The Text Chatbot handles digital messaging channels (WhatsApp, Web Chat, Email, Instagram). The Voice AI Assistant answers and places real-time phone calls with sub-500ms speech latency in 10 Indian languages. Both share the exact same central knowledge base." },
                { question: "Are customer records hosted in India?", answer: "Yes, 100% of customer conversational logs and database records remain strictly within Indian AWS/GCP Mumbai (ap-south-1) servers." },
                { question: "How long does setup take for a small business?", answer: "Setup takes around 10 minutes. Step 1: Connect WhatsApp or phone line. Step 2: Upload your website URL or PDF catalog. Step 3: Test and go live!" },
                { question: "Can the Voice AI assistant speak Indian languages?", answer: "Yes, SwanDigitals supports 10 Indian languages including Hindi, Tamil, Telugu, Marathi, Gujarati, Bengali, and Hinglish with natural voice synthesis." },
            ]} />

            {/* 12. FINAL CONVERSION CTA */}
            <section ref={ctaRef} className="py-20 lg:py-24 bg-slate-900 text-white text-center">
                <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Automate Customer Chats & Phone Calls?</h2>
                    <p className="text-base text-slate-400 mb-8 max-w-xl mx-auto">Get a free 10-minute setup demonstration tailored to your exact business workflows.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/demo" className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-semibold text-sm shadow-orange transition-all">
                            Book Free Prototype Demo
                        </Link>
                        <a href="https://chat.swandigitals.com" target="_blank" rel="noopener noreferrer" className="px-8 py-4 border border-slate-700 text-white hover:bg-slate-800 rounded-full font-semibold text-sm transition-all">
                            Sign Up Free
                        </a>
                    </div>
                </div>
            </section>
        </SiteLayout>
    );
}
