'use client';

import { useState } from 'react';
import SiteLayout from '@/components/layout/SiteLayout';
import Hero from '@/components/ui/Hero';
import Link from 'next/link';
import { 
    MessageSquare, Phone, Headphones, Users, Server, Briefcase, 
    Building2, ShoppingCart, Stethoscope, Landmark, CheckCircle2, 
    ArrowRight, ShieldCheck, Zap, Bot, Database, Sparkles, Layers, Check
} from 'lucide-react';

export default function SolutionsContent() {
    const [selectedProduct, setSelectedProduct] = useState<'chatbot' | 'voicebot'>('chatbot');

    const productDetails = {
        chatbot: {
            title: "Autonomous Text Chatbot Platform",
            tagline: "24/7 Conversational Lead Capture, E-Commerce Support & Omnichannel Messaging",
            icp: "Customer Support Directors, E-Commerce Managers, Marketing Leads, and SaaS Operations Teams looking to automate multi-channel inquiries with zero human intervention.",
            heroImage: "/dashboard-screenshot.png",
            stats: [
                { value: "24/7", label: "Always-On Coverage" },
                { value: "Fast", label: "Response Time" },
                { value: "10", label: "Indian Languages" }
            ],
            keyFeatures: [
                "WhatsApp Business API, Facebook Messenger, and Web Chat sync",
                "Writes leads and conversation data straight into your CRM via HubSpot or n8n webhooks",
                "Understands Hinglish, Tamil-English, and regional code-switching",
                "Multi-turn conversation memory with context retention across visits",
                "Cloud-hosted on Indian servers, no lock-in"
            ],
            bestFor: "High-volume customer support tickets, order status queries, lead scoring, product recommendations, and automated FAQ resolution."
        },
        voicebot: {
            title: "Natural-Sounding Voice AI Agent",
            tagline: "Fast, Natural Vernacular Voice AI for Outbound Tele-qualification & Inbound Support",
            icp: "Small business owners, reception teams, outbound tele-sales managers, and clinic front desks looking to replace traditional IVR with human-like voice agents on Indian (+91) numbers.",
            heroImage: "/voicebot-agents.png",
            stats: [
                { value: "Fast", label: "Voice Latency" },
                { value: "Lower Cost", label: "vs Call Center" },
                { value: "24/7", label: "Outbound Scale" }
            ],
            keyFeatures: [
                "Vernacular Indian voice synthesis (Hindi, English, Marathi, Tamil, Telugu)",
                "Inbound and outbound calling on your own Indian (+91) phone number",
                "Fast, natural speech-to-text and text-to-speech pipeline",
                "Automated meeting scheduling via Calendly integration",
                "Instant human escalation handoff with complete call audio transcript sync"
            ],
            bestFor: "Outbound tele-qualification, collection reminders, patient appointment scheduling, branch locator inquiries, and IVR deflection."
        }
    };

    const useCases = [
        { 
            icon: <Headphones className="w-8 h-8 text-orange-600" />, 
            title: "Customer Support Automation",
            desc: "Handle routine inquiries across WhatsApp, Facebook, and Web chat automatically while keeping customers happy.",
            link: "/solutions/customer-service",
            stats: "24/7 Coverage",
            icp: "Support & CX Leaders"
        },
        {
            icon: <Users className="w-8 h-8 text-orange-600" />,
            title: "Employee & Team Experience",
            desc: "Automate internal HR policy questions, leave requests, IT access requests, and payroll FAQs for growing teams.",
            link: "/solutions/employee-experience",
            stats: "Faster Resolution",
            icp: "HR & People Operations"
        },
        {
            icon: <Server className="w-8 h-8 text-orange-600" />,
            title: "IT Helpdesk Support",
            desc: "Instant password resets, software access requests, and level-1 ticket triage without waiting in line.",
            link: "/solutions/it-helpdesk",
            stats: "Faster Ticket Resolution",
            icp: "IT & Ops Leads"
        },
        {
            icon: <Briefcase className="w-8 h-8 text-orange-600" />,
            title: "Sales & Lead Qualification",
            desc: "Capture high-intent web visitors, score leads automatically, ask qualifying questions, and book calendar meetings 24/7.",
            link: "/solutions/sales",
            stats: "More Qualified Leads",
            icp: "Sales & Growth Marketers"
        }
    ];

    const industries = [
        {
            icon: <Stethoscope className="w-8 h-8 text-emerald-600" />,
            title: "Clinics, Hospitals & Pharmacies",
            desc: "Automate appointment booking, reminders that cut no-shows, report delivery, and refill queries on WhatsApp and voice.",
            link: "/solutions/healthcare",
            badge: "Bookings & Reminders",
            color: "border-emerald-200 bg-emerald-50/30"
        },
        { 
            icon: <ShoppingCart className="w-8 h-8 text-purple-600" />, 
            title: "Retail & D2C E-Commerce", 
            desc: "Automate order tracking, returns, product discovery, and WhatsApp marketing campaigns with zero per-message markup.", 
            link: "/solutions/retail", 
            badge: "WhatsApp Business API",
            color: "border-purple-200 bg-purple-50/30" 
        },
        { 
            icon: <Building2 className="w-8 h-8 text-orange-600" />, 
            title: "Real Estate & Builders", 
            desc: "Instantly capture luxury buyer DMs on Instagram/WhatsApp, share PDF brochures, qualify budget, and schedule site visits.", 
            link: "/demo", 
            badge: "Site Visit Booking",
            color: "border-orange-200 bg-orange-50/30" 
        }
    ];

    const faqs = [
        {
            question: "How do I choose between Text Chatbot and Voicebot Agent for my business?",
            answer: "If your primary channel is digital (website, WhatsApp, Instagram, email) and your queries are text-based or asynchronous, the Text Chatbot is ideal. If you run outbound phone campaigns, tele-qualification, collection reminders, or handle high-volume inbound phone calls, the Voicebot Agent is designed for low-latency voice loops."
        },
        {
            question: "Can both Text Chatbot and Voicebot share the same knowledge base?",
            answer: "Yes! Once you upload your PDFs, menus, brochures, or FAQ documents, both the text chatbot and the voice AI agent use the exact same knowledge base."
        },
        {
            question: "Is data stored in India? What about regulatory compliance?",
            answer: "Yes — customer conversation data and logs are hosted in India (AWS/GCP Mumbai region). We're built to be aware of the DPDP Act 2023, and there's no vendor lock-in — your data stays yours."
        },
        {
            question: "How long does setup take?",
            answer: "Most teams go live within 7 days. Day 1: Context mapping from your content. Day 3: Staging prototype sandbox. Day 7: Live production deployment with your CRM webhook integration."
        }
    ];

    return (
        <SiteLayout>
            <Hero
                badge="💡 Solutions Matrix"
                title="Purpose-Built AI Solutions for Every Business Goal"
                subtitle="Whether you're scaling customer support, deploying voice tele-qualification, or automating team operations, explore SwanDigitals' tailored product suites."
                primaryCTA={{ text: "Explore Products", href: "#products" }}
                secondaryCTA={{ text: "Book Custom Demo", href: "/demo" }}
            />

            {/* TL;DR Summary Block for AI & Fast Reading (AEO Optimization) */}
            <section className="py-8 bg-slate-900 text-white border-y border-slate-800">
                <div className="max-w-7xl mx-auto px-5 lg:px-8">
                    <div className="bg-slate-800/80 border border-slate-700/60 rounded-2xl p-6 md:p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 shadow-xl">
                        <div className="space-y-2">
                            <span className="text-orange-400 font-mono text-xs uppercase tracking-wider font-bold">⚡ Quick Summary / Key Takeaways</span>
                            <h2 className="text-xl md:text-2xl font-bold">Text Chatbot vs. Voicebot Agent at a Glance</h2>
                            <p className="text-slate-300 text-sm max-w-3xl leading-relaxed">
                                SwanDigitals offers two core product lines: <strong>Text Chatbots</strong> (for WhatsApp, Web Chat, and Messaging) and <strong>Voicebot Agents</strong> (for Phone Calls, Tele-sales & IVR replacement). Both run on the same shared knowledge base, hosted in India.
                            </p>
                        </div>
                        <div className="flex gap-3 shrink-0">
                            <a href="#products" className="px-5 py-2.5 bg-orange-500 hover:bg-orange-600 text-white rounded-full text-xs font-semibold transition-colors">
                                Switch View ↓
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* PRODUCT TOGGLE SWITCHER & DIFFERENTIATION SECTION */}
            <section id="products" className="py-20 lg:py-24 bg-slate-50/60 border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-5 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <span className="inline-block px-3.5 py-1 text-xs font-semibold tracking-wider uppercase text-orange-600 bg-orange-50 border border-orange-100 rounded-full mb-4">
                            Product Differentiation
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                            Choose Your Automation Force
                        </h2>
                        <p className="text-base text-slate-600 mt-3">
                            Click below to differentiate features, target ICPs, and visual mockups for Text Chatbots vs. Voicebot Agents.
                        </p>

                        {/* Interactive Selector Buttons */}
                        <div className="mt-8 flex justify-center">
                            <div className="bg-white p-1.5 rounded-full border border-slate-200 shadow-md inline-flex gap-2">
                                <button
                                    type="button"
                                    onClick={() => setSelectedProduct('chatbot')}
                                    className={`flex items-center gap-2.5 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 cursor-pointer relative z-10 ${
                                        selectedProduct === 'chatbot'
                                            ? 'bg-slate-900 text-white shadow-lg scale-105'
                                            : 'text-slate-600 hover:text-slate-900 bg-transparent hover:bg-slate-100/50'
                                    }`}
                                >
                                    <MessageSquare className={`w-4 h-4 ${selectedProduct === 'chatbot' ? 'text-orange-400' : 'text-slate-500'}`} />
                                    Text Chatbot Solution
                                </button>

                                <button
                                    type="button"
                                    onClick={() => setSelectedProduct('voicebot')}
                                    className={`flex items-center gap-2.5 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 cursor-pointer relative z-10 ${
                                        selectedProduct === 'voicebot'
                                            ? 'bg-slate-900 text-white shadow-lg scale-105'
                                            : 'text-slate-600 hover:text-slate-900 bg-transparent hover:bg-slate-100/50'
                                    }`}
                                >
                                    <Phone className={`w-4 h-4 ${selectedProduct === 'voicebot' ? 'text-emerald-400' : 'text-slate-500'}`} />
                                    Voicebot Agent Solution
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* DYNAMIC PRODUCT DETAILS & IMAGE DISPLAY */}
                    <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-card hover:shadow-card-hover transition-all duration-300">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                            {/* Left Info Column */}
                            <div className="lg:col-span-6 space-y-6 text-left">
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 border border-orange-200 rounded-full text-xs font-semibold text-orange-700">
                                    <Sparkles className="w-3.5 h-3.5 text-orange-500" />
                                    Active View: {selectedProduct === 'chatbot' ? 'Text & Messaging' : 'Telephony & Voice'}
                                </div>

                                <h3 className="text-3xl font-bold text-slate-900 tracking-tight">
                                    {productDetails[selectedProduct].title}
                                </h3>
                                <p className="text-base text-orange-600 font-semibold leading-snug">
                                    "{productDetails[selectedProduct].tagline}"
                                </p>

                                {/* ICP Target Card */}
                                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-1">
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">TARGET ICP & BUYER PROFILE</span>
                                    <p className="text-xs text-slate-700 leading-relaxed font-medium">
                                        {productDetails[selectedProduct].icp}
                                    </p>
                                </div>

                                {/* Feature List */}
                                <div className="space-y-3 pt-2">
                                    <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block">Key Capabilities:</span>
                                    {productDetails[selectedProduct].keyFeatures.map((feat, idx) => (
                                        <div key={idx} className="flex items-start gap-3 text-xs text-slate-600">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                                            <span>{feat}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Best For */}
                                <div className="pt-4 border-t border-slate-100">
                                    <p className="text-xs text-slate-500">
                                        <strong className="text-slate-900">Best For:</strong> {productDetails[selectedProduct].bestFor}
                                    </p>
                                </div>

                                <div className="pt-2 flex gap-3">
                                    <Link href="/demo" className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-semibold text-xs transition-colors inline-flex items-center gap-2 shadow-orange">
                                        Test {selectedProduct === 'chatbot' ? 'Chatbot' : 'Voicebot'} Staging
                                        <ArrowRight className="w-3.5 h-3.5" />
                                    </Link>
                                </div>
                            </div>

                            {/* Right Image / Product Visual Column */}
                            <div className="lg:col-span-6 space-y-6">
                                {/* Visual Mockup Box */}
                                <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-2xl group">
                                    <img 
                                        src={productDetails[selectedProduct].heroImage} 
                                        alt={productDetails[selectedProduct].title}
                                        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">
                                        <div className="text-left text-white space-y-1">
                                            <div className="text-xs font-semibold text-orange-400">SwanAI Live Console</div>
                                            <div className="text-sm font-bold">{productDetails[selectedProduct].title} Dashboard</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Stats Bar Grid */}
                                <div className="grid grid-cols-3 gap-4">
                                    {productDetails[selectedProduct].stats.map((st, i) => (
                                        <div key={i} className="bg-slate-900 text-white rounded-2xl p-4 text-center border border-slate-800">
                                            <div className="text-xl md:text-2xl font-bold text-orange-400">{st.value}</div>
                                            <div className="text-[10px] text-slate-400 font-medium uppercase mt-0.5">{st.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SIDE-BY-SIDE PRODUCT DIFFERENTIATION MATRIX TABLE */}
            <section className="py-20 bg-white border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-5 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                            Product Comparison Matrix
                        </h2>
                        <p className="text-slate-600 mt-2 text-sm">
                            Side-by-side comparison to help you pick the right fit for your business
                        </p>
                    </div>

                    <div className="border border-slate-200 rounded-3xl overflow-hidden shadow-sm bg-white">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-slate-900 text-white text-xs uppercase tracking-wider">
                                        <th className="p-4 md:p-6 font-bold w-1/4">Evaluation Vector</th>
                                        <th className="p-4 md:p-6 font-bold w-3/8 text-orange-400 border-l border-slate-800">Text Chatbot Solution</th>
                                        <th className="p-4 md:p-6 font-bold w-3/8 text-emerald-400 border-l border-slate-800">Voicebot Agent Solution</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100 text-xs text-slate-700">
                                    <tr>
                                        <td className="p-4 md:p-6 font-bold text-slate-900 bg-slate-50/50">Primary Channels</td>
                                        <td className="p-4 md:p-6 border-l border-slate-100">WhatsApp, Web Chat, Instagram DM, Email, Telegram</td>
                                        <td className="p-4 md:p-6 border-l border-slate-100">Phone Calls, Inbound Telecom, Outbound SIP, Mobile Dialer</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 md:p-6 font-bold text-slate-900 bg-slate-50/50">Interaction Latency</td>
                                        <td className="p-4 md:p-6 border-l border-slate-100">Instant, natural multi-sentence text responses</td>
                                        <td className="p-4 md:p-6 border-l border-slate-100">Fast, natural real-time conversational voice</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 md:p-6 font-bold text-slate-900 bg-slate-50/50">Target Buyer (ICP)</td>
                                        <td className="p-4 md:p-6 border-l border-slate-100">Small business owners, Support & CX Leads, D2C Growth Leads</td>
                                        <td className="p-4 md:p-6 border-l border-slate-100">Business owners, Reception & Front Desk Teams, Tele-sales Leads</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 md:p-6 font-bold text-slate-900 bg-slate-50/50">Dialect & Languages</td>
                                        <td className="p-4 md:p-6 border-l border-slate-100">English, Hindi, Hinglish, Tamil, Telugu, Marathi, Bengali</td>
                                        <td className="p-4 md:p-6 border-l border-slate-100">Native Indian regional speech accents & voice synthesis</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 md:p-6 font-bold text-slate-900 bg-slate-50/50">Data Residency</td>
                                        <td className="p-4 md:p-6 border-l border-slate-100">Hosted in India (AWS/GCP Mumbai region)</td>
                                        <td className="p-4 md:p-6 border-l border-slate-100">Indian telecom trunking & localized speech models</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 md:p-6 font-bold text-slate-900 bg-slate-50/50">Pricing Structure</td>
                                        <td className="p-4 md:p-6 border-l border-slate-100">Flat monthly plan — zero per-conversation markup</td>
                                        <td className="p-4 md:p-6 border-l border-slate-100">Flat monthly server capacity — zero per-minute penalty</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* USE CASES BY FUNCTION (AEO DEFINITION LIST FORMAT) */}
            <section className="py-20 lg:py-24 bg-slate-50/60 border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-5 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase text-orange-600 bg-orange-50 border border-orange-100 rounded-full mb-4">
                            Functional Use Cases
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                            Solutions Tailored to Your Operational Function
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {useCases.map((uc, i) => (
                            <Link key={i} href={uc.link} className="group bg-white p-8 rounded-3xl border border-slate-100 shadow-card hover:shadow-card-hover hover:border-orange-200 transition-all duration-300 text-left">
                                <div className="flex items-start gap-6">
                                    <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                        {uc.icon}
                                    </div>
                                    <div className="flex-1 space-y-3">
                                        <div className="flex items-center justify-between">
                                            <span className="text-[10px] font-bold uppercase tracking-wider text-orange-600 bg-orange-50 px-2.5 py-1 rounded-full border border-orange-100">
                                                ICP: {uc.icp}
                                            </span>
                                            <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
                                                {uc.stats}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                                            {uc.title}
                                        </h3>
                                        {/* AEO Definition List format */}
                                        <dl className="text-xs text-slate-600 leading-relaxed">
                                            <dt className="sr-only">Description</dt>
                                            <dd>{uc.desc}</dd>
                                        </dl>
                                        <div className="pt-2 flex items-center gap-1.5 text-xs font-semibold text-orange-600 group-hover:translate-x-1 transition-transform">
                                            <span>Explore functional solution</span>
                                            <ArrowRight className="w-3.5 h-3.5" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* INDUSTRY SOLUTIONS GRID */}
            <section className="py-20 lg:py-24 bg-white border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-5 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase text-blue-600 bg-blue-50 border border-blue-100 rounded-full mb-4">
                            Industry Solutions
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                            Industry-Specific Solutions
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {industries.map((ind, i) => (
                            <Link key={i} href={ind.link} className={`group p-8 rounded-3xl border ${ind.color} shadow-sm hover:shadow-card-hover transition-all duration-300 text-left`}>
                                <div className="flex items-start gap-6">
                                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
                                        {ind.icon}
                                    </div>
                                    <div className="flex-1 space-y-3">
                                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest bg-white/80 px-2.5 py-1 rounded-full border border-slate-200">
                                            {ind.badge}
                                        </span>
                                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                                            {ind.title}
                                        </h3>
                                        <p className="text-xs text-slate-600 leading-relaxed">
                                            {ind.desc}
                                        </p>
                                        <div className="pt-2 flex items-center gap-1.5 text-xs font-semibold text-orange-600 group-hover:translate-x-1 transition-transform">
                                            <span>View industry blueprint</span>
                                            <ArrowRight className="w-3.5 h-3.5" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4-STEP IMPLEMENTATION TIMELINE STEPPER */}
            <section className="py-20 lg:py-24 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-500/10 via-transparent to-transparent pointer-events-none" />
                <div className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase text-orange-400 bg-orange-400/10 border border-orange-400/20 rounded-full mb-4">
                            Implementation Framework
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                            How We Deploy Your Custom Solution
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
                        {[
                            { step: "01", title: "Context Mapping", desc: "Solutions architects scan your FAQs, DB schemas, and customer ticket history to map vector rules." },
                            { step: "02", title: "Custom Design", desc: "Configure custom text chatbot or voicebot workflows with your exact brand tone and vernacular rules." },
                            { step: "03", title: "Staging Sandbox", desc: "Deploy in a private staging sandbox for internal QA, webhook testing, and speech latency tuning." },
                            { step: "04", title: "Live Execution", desc: "Production launch with continuous analytics, A/B conversation testing, and human escalation sync." }
                        ].map((st, i) => (
                            <div key={i} className="bg-slate-800/80 border border-slate-700/60 p-6 rounded-2xl text-left space-y-3 relative shadow-lg">
                                <div className="w-10 h-10 bg-orange-500 text-white font-bold text-sm rounded-xl flex items-center justify-center">
                                    {st.step}
                                </div>
                                <h3 className="font-bold text-base text-white">{st.title}</h3>
                                <p className="text-slate-400 text-xs leading-relaxed">{st.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* EXPANDABLE FAQS (SEMANTIC <details>/<summary> FOR AEO) */}
            <section className="py-20 lg:py-24 bg-white">
                <div className="max-w-4xl mx-auto px-5 lg:px-8 text-left">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
                            Frequently Asked Questions About Our Solutions
                        </h2>
                        <p className="text-slate-500 text-sm mt-2">
                            Clear answers regarding product differentiation, pricing, and infrastructure requirements
                        </p>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <details key={idx} className="group bg-slate-50 border border-slate-200 rounded-2xl p-6 transition-all [&_summary::-webkit-details-marker]:hidden">
                                <summary className="flex items-center justify-between cursor-pointer font-bold text-slate-900 text-base">
                                    <span>{faq.question}</span>
                                    <span className="w-6 h-6 rounded-full bg-white border border-slate-200 flex items-center justify-center text-orange-600 group-open:rotate-180 transition-transform text-xs shrink-0 ml-4">
                                        ▼
                                    </span>
                                </summary>
                                <p className="mt-4 text-xs text-slate-600 leading-relaxed border-t border-slate-200/60 pt-4">
                                    {faq.answer}
                                </p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* AUTHOR E-E-A-T BYLINE BLOCK */}
            <section className="py-12 bg-slate-50 border-t border-slate-200">
                <div className="max-w-4xl mx-auto px-5 lg:px-8">
                    <div className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-6 text-left shadow-sm">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center text-white font-bold text-xl shrink-0">
                            SG
                        </div>
                        <div className="space-y-1">
                            <div className="text-xs font-bold text-orange-600 uppercase tracking-wider">Meet the Founders</div>
                            <h4 className="text-base font-bold text-slate-900">Swati Gaikwad & Kiran Shelke</h4>
                            <p className="text-xs text-slate-500 leading-relaxed">
                                Co-founders of SwanDigitals. Built for Indian SMEs — DPDP Act 2023 aware, fast natural voice, and data hosted securely in India.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="py-20 bg-gradient-to-br from-slate-900 to-purple-900 text-white text-center">
                <div className="max-w-4xl mx-auto px-5 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Automate Your Business Operations?</h2>
                    <p className="text-base text-white/80 mb-8 max-w-xl mx-auto">
                        Talk to our solutions architects for a free assessment of your workflows and live prototype demo.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/demo" className="px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full font-semibold text-sm shadow-xl hover:scale-105 transition-all">
                            Get Free Prototype Demo
                        </Link>
                        <Link href="/contact" className="px-8 py-4 border border-white/30 text-white hover:bg-white/10 rounded-full font-semibold text-sm transition-all">
                            Contact Solutions Team
                        </Link>
                    </div>
                </div>
            </section>
        </SiteLayout>
    );
}
