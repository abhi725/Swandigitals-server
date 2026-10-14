'use client';

import { useState } from 'react';
import SiteLayout from '@/components/layout/SiteLayout';
import Link from 'next/link';
import {
    Building2, MessageSquare, Phone, Instagram, MapPin, Calendar,
    Check, ChevronDown, ArrowRight, Zap, Clock, ShieldCheck,
    FileText, UserCheck, TrendingUp, Sparkles, Layers, PhoneCall,
    Home, Key, Compass, Award, ExternalLink
} from 'lucide-react';

/* ─────────────────────────────────────────────────────────────────────────────
   REAL ESTATE INTERACTIVE CHAT SIMULATION SCENARIOS
───────────────────────────────────────────────────────────────────────────── */
interface Scenario {
    id: string;
    label: string;
    badge: string;
    project: string;
    color: string;
    messages: {
        from: 'buyer' | 'bot';
        text: string;
        attachment?: {
            title: string;
            desc: string;
            type: 'brochure' | 'location' | 'calendar' | 'voice';
        };
    }[];
}

const REAL_ESTATE_SCENARIOS: Record<string, Scenario> = {
    whatsapp_ad: {
        id: 'whatsapp_ad',
        label: 'Meta Ad → WhatsApp Brochure',
        badge: 'Click-to-WhatsApp Lead',
        project: 'Emerald Bay Towers · 3 & 4 BHK Luxury Residences',
        color: '#25D366',
        messages: [
            {
                from: 'buyer',
                text: "Hi, I clicked your Instagram ad for Emerald Bay Towers. Can I get the price sheet and floor plan brochure?"
            },
            {
                from: 'bot',
                text: "Namaste! 🙏 Welcome to Emerald Bay Residences by Godrej Properties.\n\nHere is your official project brochure with floor plans, master layout, and pricing breakdown:",
                attachment: {
                    title: "Emerald-Bay-Master-Brochure-2024.pdf",
                    desc: "32 MB · High-res floor plans, club amenities & possession dates",
                    type: "brochure"
                }
            },
            {
                from: 'bot',
                text: "To share the exact unit availability for you, which configuration are you exploring?\n\n1️⃣ 3 BHK (1,850 – 2,200 sq.ft) — from ₹1.85 Cr*\n2️⃣ 4 BHK Luxury (2,600 – 3,100 sq.ft) — from ₹2.65 Cr*\n3️⃣ Duplex Penthouse — from ₹4.20 Cr*"
            },
            {
                from: 'buyer',
                text: "Option 2, looking for a 4 BHK on a higher floor."
            },
            {
                from: 'bot',
                text: "Great choice! We have 4 exclusive corner units available on floors 18 to 24 with unobstructed lake views.\n\nAre you looking to move in immediately, or within the next 6 to 12 months?"
            },
            {
                from: 'buyer',
                text: "Within 6-12 months for self-use."
            },
            {
                from: 'bot',
                text: "✅ Perfect match! Your preferences are locked in.\n\nWould you like to experience the mock-up show flat this Saturday or Sunday?"
            }
        ]
    },
    site_visit: {
        id: 'site_visit',
        label: 'Site Visit Scheduling & Location',
        badge: 'Zero No-Shows',
        project: 'Urban Oasis Villas · Gated Community',
        color: '#f97316',
        messages: [
            {
                from: 'buyer',
                text: "Yes, I'd like to book a site visit for this weekend."
            },
            {
                from: 'bot',
                text: "Wonderful! We offer guided sample villa tours with a dedicated Relationship Manager.\n\nWhich day suits you best?\n\n📅 Saturday, 19th October\n📅 Sunday, 20th October\n\nSlots: 11:00 AM | 2:30 PM | 4:30 PM"
            },
            {
                from: 'buyer',
                text: "Saturday at 11:00 AM for 2 people."
            },
            {
                from: 'bot',
                text: "🎉 Your VIP Site Visit is Confirmed!\n\n• Date: Saturday, 19th October @ 11:00 AM\n• Unit: 4 BHK Signature Villa Tour\n• Dedicated RM: Mr. Rajesh Sharma (+91 98230 XXXXX)\n\nHere is the exact entrance location pin for Google Maps navigation:",
                attachment: {
                    title: "Google Maps: Urban Oasis Experience Center",
                    desc: "Main Gate No. 2, Golf Course Ext Road · 1-click GPS navigation",
                    type: "location"
                }
            },
            {
                from: 'bot',
                text: "💡 We will send you an automated WhatsApp reminder with parking instructions 2 hours before your arrival. See you Saturday!"
            }
        ]
    },
    insta_dm: {
        id: 'insta_dm',
        label: 'Instagram Reel Lead Capture',
        badge: 'Social Media Automation',
        project: 'Skyline Heights · Modern 2 & 3 BHKs',
        color: '#E1306C',
        messages: [
            {
                from: 'buyer',
                text: "Loved your Reel on the rooftop infinity pool! What is the starting price for 3 BHK in Baner?"
            },
            {
                from: 'bot',
                text: "Hey! Glad you loved the rooftop pool tour 🏊‍♂️\n\nAt Skyline Heights Baner:\n• 2 BHK (820 sq.ft) starts at ₹88 Lakhs (all inclusive)*\n• 3 BHK (1,150 sq.ft) starts at ₹1.24 Cr (all inclusive)*\n\nNo floor-rise charges on early bird bookings this month!"
            },
            {
                from: 'buyer',
                text: "Can you send the complete cost sheet and payment schedule?"
            },
            {
                from: 'bot',
                text: "Absolutely! Please reply with your WhatsApp phone number and I will immediately send the complete unit-wise cost sheet and payment milestone PDF straight to your chat."
            },
            {
                from: 'buyer',
                text: "+91 98221 44521, my name is Amit Patel."
            },
            {
                from: 'bot',
                text: "✅ Sent to your WhatsApp, Amit! Cost sheet delivered. Our senior property advisor will reach out to address any specific bank loan queries."
            }
        ]
    },
    voice_callback: {
        id: 'voice_callback',
        label: 'Instant 60s Voice AI Callback',
        badge: 'High-Intent Verification',
        project: 'Prestige Boulevard · Premium Plots & Commercial',
        color: '#3b82f6',
        messages: [
            {
                from: 'buyer',
                text: "[Buyer fills Meta Ad Lead Form: Amit Verma · Looking for Commercial Office Plot in Whitefield]"
            },
            {
                from: 'bot',
                text: "⚡ Instant AI Voice Call Initiated (within 45 seconds of lead form submission in English & Hindi)...",
                attachment: {
                    title: "Automated Verification Call Transcript",
                    desc: "AI: 'Namaste Mr. Verma, this is Priya calling from Prestige Boulevard sales office regarding your inquiry on commercial plots. Did you catch our 40-foot road layout?'",
                    type: "voice"
                }
            },
            {
                from: 'buyer',
                text: "Amit: 'Yes, I wanted to know if corner plots are available with immediate registration?'"
            },
            {
                from: 'bot',
                text: "AI: 'Yes, Mr. Verma, we have 3 east-facing corner commercial plots open with clear titles and immediate registration. Shall I schedule your site visit for this Sunday morning at 11 AM?'"
            },
            {
                from: 'buyer',
                text: "Amit: 'Yes, confirm for Sunday.'"
            },
            {
                from: 'bot',
                text: "✅ Audio recorded & call transcript auto-synced into LeadSquared CRM. SMS and WhatsApp confirmation with RM contact dispatched to buyer."
            }
        ]
    }
};

/* ─────────────────────────────────────────────────────────────────────────────
   PAIN POINTS FOR BUILDERS & PROPERTY DEVELOPERS IN INDIA
───────────────────────────────────────────────────────────────────────────── */
const REAL_ESTATE_PAIN_POINTS = [
    {
        icon: Clock,
        title: "Leads Go Cold Within 15 Minutes",
        problem: "You spend ₹1,000–₹2,500 per lead on Facebook, Instagram, and Google ads. But sales reps take 3 to 6 hours to call. By then, the buyer is speaking to another developer.",
        fix: "SwanDigitals AI replies on WhatsApp within 2 seconds of ad submission, delivers the brochure, and engages buyers while intent is at its peak."
    },
    {
        icon: UserCheck,
        title: "Telecallers Wasting 70% of Time on Dead-End Leads",
        problem: "Sales callers spend their entire day dialing invalid numbers, brokers pretending to be buyers, or prospects with ₹30L budget on a ₹1.5Cr project.",
        fix: "AI pre-qualifies budget, BHK configuration, and buying timeline automatically before routing only verified prospects to your team."
    },
    {
        icon: Calendar,
        title: "Weekend Site Visit No-Shows",
        problem: "Buyers agree to visit the site on Saturday, but forget or get lost on the way, leading to empty experience centers and frustrated sales executives.",
        fix: "Automated calendar booking with Google Maps GPS pin, Relationship Manager contact card, and automated reminders 2 hours prior."
    },
    {
        icon: FileText,
        title: "Manual Brochure & Floor Plan Delivery Delays",
        problem: "Prospects message on WhatsApp asking for floor plans. If your team is offline at 9 PM, the buyer abandons the chat and searches elsewhere.",
        fix: "Instant 24/7 delivery of high-res PDF brochures, unit layouts, video walkthroughs, and payment milestones inside chat."
    },
    {
        icon: TrendingUp,
        title: "High Brokerage Commissions on Direct Buyers",
        problem: "Developers lose 2% to 4% in channel partner commissions simply because their direct ad campaigns fail to convert inquiries into walk-ins.",
        fix: "Convert direct digital inquiries directly into confirmed site visits with zero middleman commission."
    },
    {
        icon: MessageSquare,
        title: "Language & Vernacular Communication Barrier",
        problem: "Buyers in Pune, Hyderabad, Bangalore, or Tier-2 cities often prefer chatting in Hindi, Marathi, Telugu, or Hinglish, while reps struggle to respond.",
        fix: "SwanDigitals naturally speaks and understands 10 Indian languages and Hinglish across WhatsApp and Voice AI."
    }
];

/* ─────────────────────────────────────────────────────────────────────────────
   CAPABILITIES / SUPERPOWERS FOR BUILDERS
───────────────────────────────────────────────────────────────────────────── */
const REAL_ESTATE_CAPABILITIES = [
    {
        icon: FileText,
        title: "Instant E-Brochure & Floor Plan Dispatch",
        desc: "Share lightweight PDFs, 3D floor plans, master layouts, and price breakdown tables directly in WhatsApp within 2 seconds."
    },
    {
        icon: Compass,
        title: "3-Question Fast Lead Qualification",
        desc: "Filters buyers by configuration (2/3/4 BHK, Villa, Plot), budget brackets, and buying urgency before alerting your sales managers."
    },
    {
        icon: MapPin,
        title: "Interactive Site Visit Booking & GPS Pins",
        desc: "Customers choose Saturday/Sunday slots. The bot automatically sends a Google Maps pin, gate instructions, and calendar invites."
    },
    {
        icon: PhoneCall,
        title: "Sub-60s Automated Voice Verification",
        desc: "Instantly call leads submitted via Meta ads in Hindi, English, or regional languages to confirm interest and lock in appointment slots."
    },
    {
        icon: Layers,
        title: "Two-Way CRM Integration",
        desc: "Instantly pushes qualified leads, preferred budget, and chat transcripts into LeadSquared, Salesforce, HubSpot, or Google Sheets."
    },
    {
        icon: ShieldCheck,
        title: "Meta Verified Green Tick Support",
        desc: "Operates on the official WhatsApp Business API. Verified business badge builds high trust for multi-crore real estate transactions."
    },
    {
        icon: Home,
        title: "Multi-Project & Multi-Phase Routing",
        desc: "Running 5 residential and 2 commercial projects? The AI recommends the right project based on the buyer's desired locality and budget."
    },
    {
        icon: Zap,
        title: "Automated Re-engagement Campaigns",
        desc: "Nudge prospects who downloaded the brochure last week with fresh price offers, festival discounts, or construction update photos."
    }
];

/* ─────────────────────────────────────────────────────────────────────────────
   FAQS SPECIFIC TO REAL ESTATE
───────────────────────────────────────────────────────────────────────────── */
const FAQS = [
    {
        q: "How does the AI chatbot capture real estate leads from Instagram and Facebook ads?",
        a: "When a prospective buyer clicks your Meta ad (Click-to-WhatsApp) or comments on an Instagram Reel, the AI instantly engages them within 2 seconds, delivers your project e-brochure, and asks 3 quick qualifying questions (BHK preference, budget, and possession timeline)."
    },
    {
        q: "Can the chatbot schedule site visits and send reminders?",
        a: "Yes. The AI proposes available weekend or weekday slots, confirms the buyer's date and time, and automatically sends a Google Maps location pin with directions. It also fires a WhatsApp reminder 2 hours before the visit to minimize no-shows."
    },
    {
        q: "Can we integrate it with our existing CRM like LeadSquared or Salesforce?",
        a: "Yes. SwanDigitals pushes qualified lead details, conversation history, budget, and booked visit dates directly into LeadSquared, Salesforce, HubSpot, or Google Sheets via webhooks and REST APIs."
    },
    {
        q: "Does the bot handle multiple ongoing projects simultaneously?",
        a: "Yes. You can upload brochures and pricing sheets for multiple residential or commercial projects. The bot intelligently routes buyers to the project matching their preferred locality, budget, and unit configuration."
    },
    {
        q: "Can the AI voice assistant call leads automatically when an ad form is submitted?",
        a: "Yes. With our Voice AI module, whenever a buyer submits a Meta or website form, our AI places an instant verification call within 60 seconds in Hindi, English, Marathi, Telugu, or Tamil to verify their interest and confirm their site visit schedule."
    },
    {
        q: "What WhatsApp plan do we need for our builder sales office?",
        a: "SwanDigitals sets up your official WhatsApp Business API (Meta verified). We pass through Meta official conversation rates with zero markup, and you get unlimited incoming chats and unlimited human agent seats on our plans."
    }
];

export default function RealEstateContent() {
    const [activeScenario, setActiveScenario] = useState<string>('whatsapp_ad');
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const scenario = REAL_ESTATE_SCENARIOS[activeScenario];

    return (
        <SiteLayout>
            {/* ================================================================
                SECTION 1: HERO
            ================================================================ */}
            <section className="relative bg-white overflow-hidden pt-20 pb-24 md:pt-28 md:pb-32">
                {/* Subtle warm luxury backdrop glow */}
                <div className="absolute inset-0 pointer-events-none" aria-hidden>
                    <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-orange-50 opacity-80 blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-[450px] h-[450px] rounded-full bg-amber-50/60 blur-3xl" />
                </div>

                <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                        {/* Left: Copy */}
                        <div className="lg:col-span-6 xl:col-span-5">
                            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-orange-50 border border-orange-200 rounded-full text-orange-700 text-xs font-bold uppercase tracking-wider mb-6">
                                <Building2 className="w-3.5 h-3.5 text-orange-600" />
                                For Builders, Developers &amp; Channel Partners
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-slate-900 leading-[1.1] tracking-tight mb-5">
                                Turn Ad Clicks into{' '}
                                <span className="relative inline-block">
                                    <span className="relative z-10 text-orange-500">Confirmed Site Visits</span>
                                    <span className="absolute -bottom-1 left-0 right-0 h-3 bg-orange-100 -z-0 rounded" aria-hidden />
                                </span>
                                {' '}on WhatsApp &amp; Instagram
                            </h1>

                            <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-8 max-w-lg">
                                Never let a high-intent property buyer wait. SwanDigitals AI delivers PDF brochures in 2 seconds, qualifies budget and BHK preferences, and books weekend site visits automatically — 24/7.
                            </p>

                            {/* Trust badges */}
                            <div className="flex flex-wrap gap-2.5 mb-8 text-xs font-semibold text-slate-700">
                                {[
                                    '⚡ < 2s WhatsApp Brochure Dispatch',
                                    '📍 Automated Google Maps Site Visits',
                                    '🔗 LeadSquared & Salesforce Sync',
                                    '🗣️ 10 Indian Languages & Hinglish',
                                ].map(t => (
                                    <span key={t} className="inline-flex items-center gap-1.5 bg-slate-50 border border-slate-200 rounded-full px-3 py-1.5">
                                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                                        {t}
                                    </span>
                                ))}
                            </div>

                            {/* CTAs */}
                            <div className="flex flex-col sm:flex-row gap-3">
                                <Link
                                    href="/demo"
                                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl shadow-md shadow-orange-200 transition-all text-sm"
                                >
                                    Book Real Estate Demo
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                                <Link
                                    href="#scenarios"
                                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-slate-200 hover:border-slate-300 bg-white text-slate-700 font-semibold rounded-xl transition-all text-sm"
                                >
                                    See Buyer Journeys
                                </Link>
                            </div>
                        </div>

                        {/* Right: Live Interactive Real Estate Chat Simulation */}
                        <div className="lg:col-span-6 xl:col-span-7">
                            {/* Scenario Tabs */}
                            <div className="flex gap-2 mb-3 flex-wrap">
                                {Object.values(REAL_ESTATE_SCENARIOS).map((sc) => {
                                    const isActive = activeScenario === sc.id;
                                    return (
                                        <button
                                            key={sc.id}
                                            onClick={() => setActiveScenario(sc.id)}
                                            className={`px-3.5 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                                                isActive
                                                    ? 'bg-orange-500 text-white border-orange-500 shadow-sm'
                                                    : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
                                            }`}
                                        >
                                            {sc.label}
                                        </button>
                                    );
                                })}
                            </div>

                            {/* Chat Window */}
                            <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden">
                                {/* Header bar */}
                                <div className="bg-slate-50 px-5 py-3.5 border-b border-slate-200 flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-9 h-9 rounded-xl bg-orange-500 text-white flex items-center justify-center font-bold">
                                            <Building2 className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <div className="text-xs font-bold text-slate-900">{scenario.project}</div>
                                            <div className="text-[11px] text-emerald-600 flex items-center gap-1">
                                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                                Online · Instant AI Sales Assistant
                                            </div>
                                        </div>
                                    </div>
                                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-orange-100 text-orange-700">
                                        {scenario.badge}
                                    </span>
                                </div>

                                {/* Messages Viewport */}
                                <div className="p-5 space-y-3.5 max-h-[380px] overflow-y-auto bg-slate-50/40 text-sm">
                                    {scenario.messages.map((m, idx) => (
                                        <div
                                            key={idx}
                                            className={`flex flex-col ${m.from === 'buyer' ? 'items-end' : 'items-start'}`}
                                        >
                                            <div
                                                className={`max-w-[85%] p-4 rounded-2xl leading-relaxed whitespace-pre-line text-xs sm:text-sm ${
                                                    m.from === 'buyer'
                                                        ? 'bg-slate-800 text-white rounded-br-xs'
                                                        : 'bg-white border border-slate-200 text-slate-800 shadow-xs rounded-bl-xs'
                                                }`}
                                            >
                                                {m.text}

                                                {/* Rich Attachment Card */}
                                                {m.attachment && (
                                                    <div className="mt-3 p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center gap-3 text-left">
                                                        <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center shrink-0 text-orange-600">
                                                            {m.attachment.type === 'brochure' && <FileText className="w-5 h-5" />}
                                                            {m.attachment.type === 'location' && <MapPin className="w-5 h-5" />}
                                                            {m.attachment.type === 'calendar' && <Calendar className="w-5 h-5" />}
                                                            {m.attachment.type === 'voice' && <PhoneCall className="w-5 h-5" />}
                                                        </div>
                                                        <div className="overflow-hidden">
                                                            <div className="text-xs font-bold text-slate-900 truncate">
                                                                {m.attachment.title}
                                                            </div>
                                                            <div className="text-[11px] text-slate-500">
                                                                {m.attachment.desc}
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Status Footer */}
                                <div className="px-5 py-3 bg-white border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-emerald-500" />
                                        <span>Lead synced to LeadSquared &amp; WhatsApp CRM</span>
                                    </div>
                                    <span className="text-slate-400">Response time: 1.8s</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ================================================================
                SECTION 2: REAL ESTATE PAIN POINTS (#scenarios ANCHOR)
            ================================================================ */}
            <section id="scenarios" className="py-20 md:py-28 bg-slate-900 text-white scroll-mt-20">
                <div className="max-w-7xl mx-auto px-5 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-orange-400 text-xs font-bold uppercase tracking-widest">
                            The Builder Sales Bottleneck
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold mt-2">
                            Where Indian Real Estate Marketing Budgets Leak
                        </h2>
                        <p className="text-slate-400 mt-3 text-sm md:text-base leading-relaxed">
                            Generating ad leads is easy. Converting them into physical site visits before they lose interest is where 90% of builders struggle.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {REAL_ESTATE_PAIN_POINTS.map(({ icon: Icon, title, problem, fix }) => (
                            <div
                                key={title}
                                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-orange-500/40 rounded-2xl p-7 transition-all flex flex-col justify-between"
                            >
                                <div>
                                    <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-5">
                                        <Icon className="w-6 h-6 text-orange-400" />
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-2 leading-snug">{title}</h3>
                                    <p className="text-slate-400 text-xs leading-relaxed mb-4">{problem}</p>
                                </div>
                                <div className="pt-4 border-t border-white/10">
                                    <p className="text-xs text-slate-300">
                                        <span className="text-emerald-400 font-bold">AI Solution: </span>
                                        {fix}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================================================================
                SECTION 3: HOW IT WORKS (3-STEP LEADS TO WALK-INS)
            ================================================================ */}
            <section className="py-20 md:py-28 bg-white">
                <div className="max-w-7xl mx-auto px-5 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-orange-500 text-xs font-bold uppercase tracking-widest">
                            The Walk-In Engine
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
                            From Meta Ad Click to Show-Flat Visit in 3 Steps
                        </h2>
                        <p className="text-slate-500 mt-3 text-base">
                            Fully automated lead handling on the channels your high-net-worth buyers use every day.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                        <div className="hidden md:block absolute top-14 left-[calc(16.66%+24px)] right-[calc(16.66%+24px)] h-px bg-gradient-to-r from-orange-200 via-orange-300 to-orange-200" aria-hidden />

                        {[
                            {
                                step: "01",
                                icon: MessageSquare,
                                title: "Instant WhatsApp & DM Engagement",
                                desc: "Prospective buyers click your ad or message your Instagram. SwanDigitals greets them instantly, shares project photos, and delivers your PDF brochure in seconds."
                            },
                            {
                                step: "02",
                                icon: UserCheck,
                                title: "Automated Qualification & Preference Filter",
                                desc: "The AI politely asks their preferred configuration (2/3/4 BHK or villa), budget range, and move-in timeline without feeling like a boring web form."
                            },
                            {
                                step: "03",
                                icon: MapPin,
                                title: "Site Visit Confirmation & Reminders",
                                desc: "The buyer picks a convenient Saturday/Sunday slot. The AI sends the Google Maps pin, Relationship Manager info, and automated WhatsApp reminders 2 hours prior."
                            }
                        ].map(({ step, icon: Icon, title, desc }) => (
                            <div key={step} className="relative flex flex-col items-center text-center">
                                <div className="w-24 h-24 rounded-3xl bg-orange-50 border-2 border-orange-100 flex flex-col items-center justify-center mb-6 relative z-10 shadow-xs">
                                    <Icon className="w-8 h-8 text-orange-500 mb-1" />
                                    <span className="text-xs font-black text-orange-300">{step}</span>
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed max-w-xs">{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================================================================
                SECTION 4: BUILDER SUPERPOWERS BENTO
            ================================================================ */}
            <section className="py-20 md:py-28 bg-slate-50 border-y border-slate-200/80">
                <div className="max-w-7xl mx-auto px-5 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-orange-500 text-xs font-bold uppercase tracking-widest">
                            Real Estate Capabilities
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
                            Engineered Specifically for Property Sales
                        </h2>
                        <p className="text-slate-500 mt-3 text-base">
                            Built around the nuances of Indian real estate sales pipelines, floor plans, and channel partners.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {REAL_ESTATE_CAPABILITIES.map(({ icon: Icon, title, desc }) => (
                            <div
                                key={title}
                                className="bg-white border border-slate-200/80 hover:border-orange-300 hover:shadow-md rounded-2xl p-6 transition-all"
                            >
                                <div className="w-11 h-11 rounded-xl bg-orange-100 flex items-center justify-center mb-4 text-orange-600">
                                    <Icon className="w-5 h-5" />
                                </div>
                                <h3 className="font-bold text-slate-900 text-sm mb-2">{title}</h3>
                                <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================================================================
                SECTION 5: INTEGRATION ECOSYSTEM
            ================================================================ */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-5 lg:px-8 text-center">
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">
                        Direct 2-Way Sync with Real Estate CRMs &amp; Ad Platforms
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-3xl mx-auto">
                        {[
                            'LeadSquared CRM', 'Salesforce Real Estate', 'Meta Ads (Click-to-WhatsApp)',
                            'Google Ads Webhooks', 'HubSpot CRM', 'Zoho CRM',
                            'Google Sheets Real-Time Sync', 'Sell.Do CRM', 'WhatsApp Business API'
                        ].map((tool) => (
                            <span
                                key={tool}
                                className="px-4 py-2 bg-slate-50 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700"
                            >
                                {tool}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================================================================
                SECTION 6: PERFORMANCE METRICS & ROI
            ================================================================ */}
            <section className="py-16 md:py-20 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
                <div className="max-w-7xl mx-auto px-5 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 text-center">
                        {[
                            { value: '< 2s', label: 'Average Brochure Delivery', sub: 'vs 4+ hours on manual email' },
                            { value: '45%+', label: 'Increase in Site Walk-Ins', sub: 'with automated GPS & calendar reminders' },
                            { value: '60%', label: 'Telecaller Time Saved', sub: 'only verified qualified buyers routed' },
                            { value: '0%', label: 'Brokerage Commission', sub: 'on direct digital builder inquiries' },
                        ].map(({ value, label, sub }) => (
                            <div key={label}>
                                <div className="text-4xl md:text-5xl font-black text-white mb-2">{value}</div>
                                <div className="text-orange-100 font-semibold text-sm mb-1">{label}</div>
                                <div className="text-orange-200/80 text-xs">{sub}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================================================================
                SECTION 7: PRICING (MATCHING SWANDIGITALS FLAT PLANS)
            ================================================================ */}
            <section className="py-20 md:py-28 bg-white">
                <div className="max-w-7xl mx-auto px-5 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-14">
                        <span className="text-orange-500 text-xs font-bold uppercase tracking-widest">
                            Transparent Pricing
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
                            Flat Monthly Plans for Builders &amp; Channel Partners
                        </h2>
                        <p className="text-slate-500 mt-3 text-base">
                            No per-lead tax. No commission cuts on your flats. Unlimited buyer conversations.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
                        {/* Free Tier */}
                        <div className="border border-slate-200 rounded-3xl p-7 flex flex-col justify-between">
                            <div>
                                <div className="text-slate-500 text-sm font-semibold mb-1">Starter</div>
                                <div className="text-4xl font-black text-slate-900">₹0<span className="text-base font-normal text-slate-400">/mo</span></div>
                                <p className="text-slate-500 text-xs mt-2">Website live chat widget for single residential project page.</p>
                                <ul className="space-y-2.5 my-6 text-sm text-slate-600">
                                    <li className="flex items-center gap-2">
                                        <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                                        Website chat widget
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                                        1 Human sales agent seat
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                                        Basic brochure link delivery
                                    </li>
                                    <li className="flex items-center gap-2 text-slate-400 line-through">
                                        <span className="text-slate-300">✕</span> WhatsApp Business API bot
                                    </li>
                                    <li className="flex items-center gap-2 text-slate-400 line-through">
                                        <span className="text-slate-300">✕</span> Automated GPS site visit booking
                                    </li>
                                </ul>
                            </div>
                            <Link
                                href="https://chat.swandigitals.com"
                                target="_blank"
                                className="w-full text-center py-3 border border-slate-300 hover:border-slate-400 rounded-xl text-sm font-bold text-slate-700 transition-colors"
                            >
                                Start Free
                            </Link>
                        </div>

                        {/* Growth Hub */}
                        <div className="border-2 border-orange-500 rounded-3xl p-7 flex flex-col justify-between relative shadow-xl shadow-orange-100">
                            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
                                Most Popular for Developers
                            </div>
                            <div>
                                <div className="text-orange-600 text-sm font-bold mb-1">Growth Hub</div>
                                <div className="text-4xl font-black text-slate-900">₹1,999<span className="text-base font-normal text-slate-400">/mo</span></div>
                                <div className="text-xs text-slate-400 line-through mt-0.5">was ₹4,999/mo</div>
                                <p className="text-slate-500 text-xs mt-2">WhatsApp Business API automation for active project launches.</p>
                                <ul className="space-y-2.5 my-6 text-sm text-slate-600">
                                    <li className="flex items-center gap-2">
                                        <Check className="w-4 h-4 text-orange-500 shrink-0" />
                                        Unlimited buyer conversations
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Check className="w-4 h-4 text-orange-500 shrink-0" />
                                        Official WhatsApp Business API
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Check className="w-4 h-4 text-orange-500 shrink-0" />
                                        Instant PDF brochure &amp; floor plan dispatch
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Check className="w-4 h-4 text-orange-500 shrink-0" />
                                        Site visit booking with Google Maps pin
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Check className="w-4 h-4 text-orange-500 shrink-0" />
                                        10 Indian languages &amp; Hinglish
                                    </li>
                                </ul>
                            </div>
                            <Link
                                href="/demo"
                                className="w-full text-center py-3.5 bg-orange-500 hover:bg-orange-600 text-white rounded-xl text-sm font-bold transition-colors shadow-md shadow-orange-200"
                            >
                                Book Real Estate Demo →
                            </Link>
                        </div>

                        {/* Performance Pro */}
                        <div className="border border-slate-200 bg-slate-900 text-white rounded-3xl p-7 flex flex-col justify-between">
                            <div>
                                <div className="text-orange-400 text-sm font-bold mb-1">Performance Pro</div>
                                <div className="text-4xl font-black text-white">₹4,999<span className="text-base font-normal text-slate-400">/mo</span></div>
                                <div className="text-xs text-slate-500 line-through mt-0.5">was ₹9,999/mo</div>
                                <p className="text-slate-400 text-xs mt-2">Omnichannel for builders running multiple residential &amp; commercial towers.</p>
                                <ul className="space-y-2.5 my-6 text-sm text-slate-300">
                                    <li className="flex items-center gap-2">
                                        <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                                        Everything in Growth Hub
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                                        Instagram Reel &amp; Story DM Automation
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                                        Multi-project routing across localities
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                                        LeadSquared / Salesforce CRM sync
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                                        Sub-60s Voice AI callback integration
                                    </li>
                                </ul>
                            </div>
                            <Link
                                href="/demo"
                                className="w-full text-center py-3.5 bg-white hover:bg-orange-50 text-slate-900 rounded-xl text-sm font-bold transition-colors"
                            >
                                Talk to Enterprise Sales →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================================================================
                SECTION 8: REAL ESTATE FAQS
            ================================================================ */}
            <section className="py-20 md:py-24 bg-slate-50 border-t border-slate-200/80">
                <div className="max-w-3xl mx-auto px-5 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-slate-500 mt-3 text-base">
                            Real estate marketing and sales automation details for builders and channel partners.
                        </p>
                    </div>

                    <div className="space-y-3.5">
                        {FAQS.map(({ q, a }, i) => (
                            <div
                                key={i}
                                className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs"
                            >
                                <button
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    className="w-full flex justify-between items-center text-left px-6 py-5 gap-4 cursor-pointer hover:bg-slate-50/80 transition-colors"
                                >
                                    <span className="font-semibold text-slate-900 text-sm md:text-base leading-snug">{q}</span>
                                    <ChevronDown
                                        className={`w-5 h-5 text-orange-500 shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`}
                                    />
                                </button>
                                {openFaq === i && (
                                    <div className="px-6 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                                        {a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================================================================
                SECTION 9: FINAL REAL ESTATE CTA
            ================================================================ */}
            <section className="py-20 md:py-28 bg-white">
                <div className="max-w-4xl mx-auto px-5 lg:px-8 text-center">
                    <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 rounded-3xl p-10 md:p-16 relative overflow-hidden shadow-2xl text-white">
                        <div className="absolute top-0 right-0 w-72 h-72 bg-orange-500/10 blur-3xl rounded-full pointer-events-none" aria-hidden />

                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-orange-500/20 border border-orange-500/30 rounded-full text-orange-400 text-xs font-bold mb-6">
                                <Sparkles className="w-3.5 h-3.5" />
                                Launch with Your Project Brochure in 48 Hours
                            </div>

                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                                Turn Your Next Weekend into a Sold-Out Site Visit Rush
                            </h2>

                            <p className="text-slate-300 text-base mb-8 max-w-xl mx-auto leading-relaxed">
                                Share your project e-brochure with our team. In a 20-minute tailored walkthrough, we will show you how SwanDigitals qualifies buyers and books walk-ins directly on your WhatsApp number.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href="/demo"
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-2xl shadow-xl shadow-orange-950 transition-all text-base"
                                >
                                    Book Project Walkthrough Demo
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                                <Link
                                    href="/pricing"
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 hover:bg-white/5 text-white font-semibold rounded-2xl transition-all text-base"
                                >
                                    View Transparent Pricing
                                </Link>
                            </div>

                            <p className="text-slate-400 text-xs mt-6">
                                Official Meta Verified Partner · Zero Commission on Direct Sales · 10 Indian Languages
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </SiteLayout>
    );
}
