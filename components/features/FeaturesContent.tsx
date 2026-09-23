"use client";

import SiteLayout from '@/components/layout/SiteLayout';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import {
    MessageSquare, Brain, Globe, BarChart3, Zap, Users, Shield, Settings,
    Code, Layers, Bot, Mic, Phone, Database, FileText, Headphones,
    Building2, ShoppingCart, Briefcase, Heart, Check, X, ChevronRight,
    MessageCircle, MapPin, Activity, Clock, PhoneCall, ArrowRight, Play, Pause
} from 'lucide-react';

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

export default function FeaturesContent() {
    const searchParams = useSearchParams();
    const [activeProduct, setActiveProduct] = useState<'chatbot' | 'voicebot'>('chatbot');
    
    // Sync URL search params
    useEffect(() => {
        const prod = searchParams.get('product');
        if (prod === 'voicebot') {
            setActiveProduct('voicebot');
        } else {
            setActiveProduct('chatbot');
        }
    }, [searchParams]);

    const handleProductChange = (prod: 'chatbot' | 'voicebot') => {
        setActiveProduct(prod);
        const newUrl = `${window.location.pathname}?product=${prod}`;
        window.history.replaceState({ ...window.history.state, as: newUrl, url: newUrl }, '', newUrl);
        // Scroll slightly down to focus on features/tab bar
        const switchElement = document.getElementById('product-features-container');
        if (switchElement) {
            switchElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const headerOffset = 120;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerOffset;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    // Reveal animation refs
    const heroRef = useReveal();
    const contentRef = useReveal();
    const ctaRef = useReveal();

    // ----------------------------------------------------
    // CHATBOT DATA
    // ----------------------------------------------------
    const chatbotTabs = [
        { id: 'ai-engine', label: 'AI Engine' },
        { id: 'channels', label: 'Channels' },
        { id: 'inbox-mgmt', label: 'Inbox & Conversations' },
        { id: 'contacts-crm', label: 'Contacts & CRM' },
        { id: 'automation-workflows', label: 'Automation' },
        { id: 'productivity-tools', label: 'Productivity' },
        { id: 'reporting-analytics', label: 'Analytics' },
        { id: 'customization-selfservice', label: 'Customization' },
        { id: 'security-compliance', label: 'Security' },
    ];

    const chatbotSections = [
        {
            id: 'ai-engine',
            badge: "🧠 SwanAI Engine",
            title: "State-of-the-Art NLU & Contextual Logic",
            description: "Purpose-built NLU models with robust memory and semantic search integration.",
            cards: [
                { title: "Context-Aware RAG Memory", desc: "Reads entire history of a ticket. Uses Vector RAG database to query documents and return factual answers." },
                { title: "Multilingual NLU (10 Indian Languages)", desc: "Native processing of Hindi, Tamil, Telugu, Kannada, Malayalam, Hinglish etc. without translation API overhead." },
                { title: "Zero-Hallucination Safe Fallback", desc: "AI refuses to answer if not present in manuals, and escalates gracefully with brief context tags." },
                { title: "Sentiment-Driven Escalation", desc: "Detects frustrated or angry user inputs, pauses bot automation, and instantly flags live agent." },
                { title: "Intent Extraction", desc: "Captures entities like dates, ticket ID, Aadhaar card patterns, and links to direct workflows." },
                { title: "Self-Improving Playgrounds", desc: "Active learning engine where supervisors review chat outputs and improve knowledge triggers directly." }
            ]
        },
        {
            id: 'channels',
            badge: "💬 Omnichannel Inbox",
            title: "Reach Customers Anywhere. Manage in One Inbox.",
            description: "Stop switching tabs. SwanDigitals integrates with 13+ digital channels seamlessly.",
            cards: [
                { title: "WhatsApp Business API", desc: "Official BSP integration. Send broadcasts, handle incoming queries, verify OTPs directly." },
                { title: "0% Meta Fee Markup", desc: "We pass Meta conversation fees strictly at cost. Zero markup, zero transactional tax margins." },
                { title: "Interactive WhatsApp Elements", desc: "Send list messages, CTA reply buttons, templates, and rich-text files seamlessly." },
                { title: "Instagram DMs", desc: "Automate story replies, direct message flows, and product inquiries on Instagram." },
                { title: "Facebook Messenger", desc: "Engage users and capture leads on Facebook with instantaneous conversational AI." },
                { title: "Telegram Bot API", desc: "Direct support for Telegram channels, groups, and transactional alert engines." },
                { title: "Web Live Chat Widget", desc: "Fully custom CSS widget with customizable avatars, triggers, and notification bubbles." },
                { title: "Email Automation", desc: "Syncs corporate support mailboxes. AI automatically categorizes, drafts responses, and resolves." },
                { title: "Mobile SDK (iOS & Android)", desc: "Embed real-time, low-overhead secure support chat inside your proprietary mobile applications." },
                { title: "API Channel", desc: "Deliver raw transcripts, capture custom webhook queries, and connect legacy middleware." },
                { title: "Voice AI Integration", desc: "Full sync with voice agent transcripts. Keep chats and phone transcripts combined.", isLinkToVoice: true }
            ]
        },
        {
            id: 'inbox-mgmt',
            badge: "📬 Inbox Management",
            title: "Enterprise Ticketing Made Simple",
            description: "Collaborate, route, and resolve conversations at scale without losing context.",
            cards: [
                { title: "Unified Multi-Channel Inbox", desc: "View all active chats across WhatsApp, Web, Email, and Instagram in a single collaborative interface." },
                { title: "Dynamic Team Collaborator", desc: "Add private notes to conversations, tag colleagues, and coordinate responses behind the scenes." },
                { title: "Auto-Assignment Rules", desc: "Intelligent round-robin routing to load-balance active conversations across online agents." },
                { title: "Granular Folders & Views", desc: "Create custom views for 'Payment Issues', 'High Priority', or 'Active Trials' for specialized teams." },
                { title: "Live Typo/Draft Previews", desc: "See what the user is typing in real-time before they click send, speeding up resolution." },
                { title: "Message De-duplication", desc: "Intelligently merges duplicate tickets when a user reaches out on both WhatsApp and Web simultaneously." },
                { title: "Department Routing", desc: "Direct queries to Finance, Technical Support, or Sales automatically based on user choices or NLU intent." },
                { title: "Custom SLA Escalation", desc: "Set strict resolution deadlines. Auto-escalate conversations to team leaders if breached." },
                { title: "Conversation Snoozing", desc: "Temporarily hide tickets awaiting customer replies. Auto-reopen when the customer responds." },
                { title: "Bulk Resolution", desc: "Resolve hundreds of generic status inquiries or campaign replies in a single bulk operation." },
                { title: "Interactive CSAT Builder", desc: "Trigger automated satisfaction surveys at resolution. Track scores directly on the analytics dashboard." }
            ]
        },
        {
            id: 'contacts-crm',
            badge: "👥 Contacts & CRM",
            title: "Know Who You Are Talking To",
            description: "Every customer conversation enriched with historic context, custom traits, and full activity logs.",
            cards: [
                { title: "Unified Customer Profile", desc: "A single view of all historic chats, customer value, phone number, and support rating." },
                { title: "Custom Data Attributes", desc: "Define custom fields like 'Customer Tier', 'City', or 'Plan Type' to segment and route users." },
                { title: "Interactive Contact Labels", desc: "Tag contacts with 'VIP', 'Lead', or 'Spam' to visually highlight ticket priorities." },
                { title: "CRM Sync", desc: "Integrate with HubSpot to pull data in real-time and sync chat outcomes. Other CRMs available on request." },
                { title: "Contact Search & Filter", desc: "Locate specific customers instantly using names, phone numbers, or metadata parameters." },
                { title: "Historic Activity Timeline", desc: "Trace entire touchpoints: from website lead generation, to WhatsApp newsletters, to tickets." }
            ]
        },
        {
            id: 'automation-workflows',
            badge: "⚡ Automation & Workflows",
            title: "Put Customer Service on Autopilot",
            description: "No-code workflow engine to orchestrate actions, routing, and notifications.",
            cards: [
                { title: "Visual Flow Builder", desc: "Create complex, branching customer paths. Connect logic steps, delays, and API prompts." },
                { title: "n8n Native Workflows", desc: "Trigger external actions across 200+ business applications (Google Sheets, ERPs, SMS alerts)." },
                { title: "Pre-defined Macro Templates", desc: "Create canned responses for frequently used answers. Trigger with keyboard shortcuts." },
                { title: "Webhook Event Triggers", desc: "Send real-time alerts to your custom backend when tickets are assigned, resolved, or rated." },
                { title: "Dynamic Outbound Campaigns", desc: "Schedule automated WhatsApp broadcast sequences based on contact tags or custom triggers." },
                { title: "Auto-Responder Schedule", desc: "Set custom out-of-hours messages, weekend schedules, and regional holiday notifications." }
            ]
        },
        {
            id: 'productivity-tools',
            badge: "🚀 Productivity Tools",
            title: "Empower Your Support Teams",
            description: "Give your human agents the tools they need to resolve conversations 4X faster.",
            cards: [
                { title: "AI Reply Copilot", desc: "SwanAI automatically suggests answers based on the knowledge base. Agents approve with one click." },
                { title: "AI Conversation Summaries", desc: "Get bullet-point summaries of long, multi-turn chats in seconds, perfect for quick handoffs." },
                { title: "Keyboard Shortcodes", desc: "Access canned responses, change statuses, or assign teammates instantly without touching the mouse." },
                { title: "Internal Department Notes", desc: "Leave private context updates on conversations. Customer never sees them." },
                { title: "Collision Detection", desc: "Prevent multiple agents from replying to the same customer simultaneously with live warnings." }
            ]
        },
        {
            id: 'reporting-analytics',
            badge: "📊 Reporting & Analytics",
            title: "Data-Driven Performance Tracking",
            description: "Measure automation rates, team efficiency, and satisfaction scores with real-time dashboards.",
            cards: [
                { title: "Automation Deflection Rate", desc: "Track exactly how many inquiries the AI resolved independently without human intervention." },
                { title: "First Response Latency", desc: "Measure team speed. View averages, peak hours, and individual agent response times." },
                { title: "CSAT & NPS Tracker", desc: "Analyze customer happiness. Filter scores by channel, department, or individual agent." },
                { title: "Sentiment Analysis Trends", desc: "Monitor overall customer mood and detect shifts in customer satisfaction in real-time." },
                { title: "Topic & Intent Distribution", desc: "Identify top customer issues (e.g. 'Refunds', 'Login Error') to improve knowledge bases." },
                { title: "Agent Performance Metrics", desc: "Track resolved tickets, active hours, and average resolution times for every agent." },
                { title: "Channel Volume Comparison", desc: "Visualize conversation traffic across WhatsApp, Email, Web, and Instagram to align resources." },
                { title: "Custom Report Exports", desc: "Export granular raw data as CSV for your own reporting and BI tools." }
            ]
        },
        {
            id: 'customization-selfservice',
            badge: "🎨 Customization & Branding",
            title: "Make It Uniquely Yours",
            description: "Customize the widget styling, tone of voice, and self-service capabilities.",
            cards: [
                { title: "Brand CSS Customizer", desc: "Tailor the Web Chat widget to match your website: logos, avatars, custom gradients, and fonts." },
                { title: "Tone of Voice Configuration", desc: "Adjust the AI personality: choose between formal, friendly, empathetic, or highly energetic." },
                { title: "Interactive Quick FAQ Modals", desc: "Present users with quick-clickable FAQ buttons inside the widget for immediate answers." },
                { title: "Customer Portal Builder", desc: "Enable customers to view historic tickets, check open statuses, and self-resolve from a secure page." },
                { title: "White-Labeled Dashboard", desc: "Rebrand the agent dashboard with your corporate identity, domains, and branding." }
            ]
        },
        {
            id: 'security-compliance',
            badge: "🛡️ Security & Compliance",
            title: "Secure, India-Hosted. No Lock-In.",
            description: "Built for Indian SMEs — your data hosted in India, with straightforward, honest terms.",
            cards: [
                { title: "No Lock-In, Cancel Anytime", desc: "Flat monthly pricing with no annual contracts. Leave whenever you like, no penalties." },
                { title: "100% Indian Data Residency", desc: "All conversational logs, databases, and vector spaces strictly hosted in Indian cloud regions." },
                { title: "DPDP 2023 Aware", desc: "Built-in consent builders, right-to-erase triggers, and detailed data logs aligning with local laws." },
                { title: "AES-256 & TLS 1.3 Encryption", desc: "Data is fully encrypted at rest using AES-256 keys and strictly in transit via TLS 1.3." },
                { title: "Automatic PII Masking", desc: "Dynamically redact Aadhaar cards, PAN numbers, credit cards, and UPI IDs before writing to logs." },
                { title: "Simple Team Roles", desc: "Assign teammates as admins or agents with straightforward account-level permissions." }
            ]
        }
    ];

    const chatbotComparison = [
        {
            feature: "Omnichannel Inbox",
            swanDigitals: "True unified inbox for WhatsApp, web, email, Instagram in one dashboard.",
            freshdesk: "Separate siloed modules; poor live sync.",
            intercom: "High quality but expensive per-seat logic.",
            zendesk: "Traditional email-first; complex configuration.",
            yellowai: "Largely bot-focused; manual ticketing is weak.",
            koreai: "Heavy programmatic bot builder; poor agent interface."
        },
        {
            feature: "WhatsApp Official API Fees",
            swanDigitals: "0% Meta Markup (billed strictly at official pass-through cost).",
            freshdesk: "Marked up or restricted templates.",
            intercom: "High markup per customer contact reached.",
            zendesk: "Markup applied through third-party BSPs.",
            yellowai: "Included in high custom monthly packages.",
            koreai: "Expensive transaction-based pricing models."
        },
        {
            feature: "Pricing Model",
            swanDigitals: "Flat Monthly Fee (Unlimited agent seats & volume tiers).",
            freshdesk: "Seat-based (expensive to scale human workforce).",
            intercom: "Seat-based + active customer reach counts.",
            zendesk: "High per-seat pricing + paid AI add-ons.",
            yellowai: "Usage-based per conversation.",
            koreai: "Opaque enterprise pricing + high setup costs."
        },
        {
            feature: "Data Sovereignty",
            swanDigitals: "100% Indian Data Residency out-of-the-box.",
            freshdesk: "Hosted in global US/EU server spaces.",
            intercom: "Global servers; no regional residency options.",
            zendesk: "Global hosting; expensive custom request.",
            yellowai: "Custom local hosting on expensive tiers only.",
            koreai: "Dedicated VPC available only on custom tiers."
        },
        {
            feature: "Contract Flexibility",
            swanDigitals: "Flat monthly pricing, cancel anytime — no annual contracts.",
            freshdesk: "Annual contracts common for better pricing.",
            intercom: "Annual contracts required for discounts.",
            zendesk: "Multi-year contracts typical for enterprise tiers.",
            yellowai: "Custom annual contracts.",
            koreai: "Multi-year enterprise contracts."
        },
        {
            feature: "Indian Language NLU",
            swanDigitals: "Native Hinglish + 10 regional Indian languages.",
            freshdesk: "English translation API layer (high error rate).",
            intercom: "Translation layer (poor understanding of Hinglish).",
            zendesk: "Translation layer; no local Hinglish support.",
            yellowai: "Support via generic model translation.",
            koreai: "Support via generic enterprise translation API."
        },
        {
            feature: "Implementation Support",
            swanDigitals: "Live in 7 Days (We build, ingest, and test the model for you).",
            freshdesk: "Self-serve or expensive implementation partners.",
            intercom: "Self-serve; heavy automated tutorials.",
            zendesk: "Months of consulting and system integrator delays.",
            yellowai: "Months of custom deployment engineering.",
            koreai: "Significant development cycles and coding required."
        }
    ];

    // ----------------------------------------------------
    // VOICE AI DATA
    // ----------------------------------------------------
    const voiceTabs = [
        { id: 'how-it-works', label: 'How It Works' },
        { id: 'languages', label: 'Languages' },
        { id: 'inbound', label: 'Inbound' },
        { id: 'outbound', label: 'Outbound' },
        { id: 'agent-transfer', label: 'Agent Transfer' },
        { id: 'call-analytics', label: 'Analytics' },
        { id: 'on-premises', label: 'Data & Security' },
        { id: 'integrations', label: 'Integrations' }
    ];

    const voiceSections = [
        {
            id: 'how-it-works',
            badge: "⚙️ Low-Latency Call Engine",
            title: "Human-Like Phone Conversations in Real-Time",
            description: "Advanced telephony coupled with local low-latency speech engines to deliver natural exchanges.",
            isCallFlow: true,
            cards: [
                { title: "Speech Recognition (ASR)", desc: "Real-time speech-to-text specifically tuned for regional Indian accents, Hinglish, and background noise." },
                { title: "Dynamic NLU Logic", desc: "Dynamic intent and context management. Adapts to interruptions and conversational shifts instantly." },
                { title: "Speech Synthesis (TTS)", desc: "Hyper-realistic voice synthesis. Feels like talking to a real human, with natural pauses and warm accents." }
            ]
        },
        {
            id: 'languages',
            badge: "🗣️ Native Languages",
            title: "Talk to Your Customers in Their Dialect",
            description: "Native NLU support for 10 Indian languages.",
            isLanguagesGrid: true,
            cards: [
                { title: "Native Dialect Processing", desc: "Trained directly on regional dialects, colloquial inputs, and specific local vocabulary." },
                { title: "Code-Mixed Hinglish", desc: "Flawlessly processes mixed languages (Hinglish, Tanglish, Kanglish), shifting vocabulary, and colloquial grammar." },
                { title: "Dynamic Language Switch", desc: "The AI agent can detect and adapt to the customer's spoken language on-the-fly mid-call." }
            ]
        },
        {
            id: 'inbound',
            badge: "📥 Inbound Calling",
            title: "Say Goodbye to Robotic IVR Menus",
            description: "24/7 instant pick-up, zero hold times, and infinite concurrent scale.",
            cards: [
                { title: "Robotic IVR Replacement", desc: "No more 'Press 1 for sales'. Customers ask queries naturally, and the AI resolves instantly." },
                { title: "Infinite Scale & Concurrency", desc: "Handle hundreds of concurrent calls simultaneously. Say goodbye to busy tones and long queues." },
                { title: "Transactional Voice Actions", desc: "Book appointments, track orders, verify PINs, and update backend databases in real-time." },
                { title: "Smart Fallback & Escalation", desc: "Politely identifies when queries are out-of-scope and routes calls safely to standby human teams." }
            ]
        },
        {
            id: 'outbound',
            badge: "📤 Outbound Campaigns",
            title: "Proactive Customer Outreach at Scale",
            description: "Deliver reminders, lead qualification, and recovery campaigns automatically.",
            cards: [
                { title: "Smart Payment Recovery", desc: "Automate polite EMI and outstanding balance reminders. Offer easy scheduling for callbacks." },
                { title: "Lead Qualification Calls", desc: "Qualify inbound leads instantly. Verify budget, authority, timeline, and sync data instantly." },
                { title: "CSV Broadcast Campaigns", desc: "Upload contact lists via CSV and schedule simultaneous outbound voice broadcasts in regional dialects." },
                { title: "Automated Retry Logic", desc: "Configure smart redial intervals for busy signals, missed calls, and network issues." }
            ]
        },
        {
            id: 'agent-transfer',
            badge: "🤝 Live Handoff",
            title: "Seamless Collaboration Between AI & Humans",
            description: "Graceful transition of phone calls to active customer representatives.",
            cards: [
                { title: "Instant Telephony Escalation", desc: "Transfer calls directly to human SIP endpoints or regional numbers when requested." },
                { title: "Full Historic Sync", desc: "Human agents receive a detailed summary of the AI conversation before the transfer." },
                { title: "Smart Keywords", desc: "Set words like 'agent', 'manager', or 'human' to trigger immediate human escalation." }
            ]
        },
        {
            id: 'call-analytics',
            badge: "📊 Analytics & Audit",
            title: "Granular Call Metrics & Transcription",
            description: "Complete operational visibility over every customer phone call.",
            cards: [
                { title: "Call Recording", desc: "Record every inbound and outbound conversation for compliance, quality audit, and training." },
                { title: "Automatic Transcription", desc: "Speech transcripts generated automatically. Search calls using text search terms in the inbox." },
                { title: "AI Post-Call Summaries", desc: "Bullet-point call summaries automatically attached to the SwanDigitals customer profile." },
                { title: "Telecom Call Metrics", desc: "Track duration, drop-offs, sentiment shifts, and resolution rate for every campaign." }
            ]
        },
        {
            id: 'on-premises',
            badge: "🇮🇳 Data & Security",
            title: "Your Voice Data, Hosted in India",
            description: "Cloud-hosted in India, with no long-term lock-in.",
            cards: [
                { title: "India-Hosted Voice Data", desc: "Call recordings and transcripts are stored on Indian cloud infrastructure, built with DPDP 2023 in mind." },
                { title: "Flexible, No Lock-In", desc: "Pay-as-you-go pricing with no annual contracts — cancel anytime." },
                { title: "Fast, Natural Voice", desc: "Speech recognition and synthesis tuned for natural, low-latency conversations in Indian languages." }
            ]
        },
        {
            id: 'integrations',
            badge: "🔌 Integrations",
            title: "Works Natively with Your Existing Stack",
            description: "Synchronize call outcomes, fetch caller records, and update databases.",
            cards: [
                { title: "Unified Helpdesk Sync", desc: "Transcripts and post-call summaries sync immediately with SwanDigitals omnichannel inbox." },
                { title: "HubSpot Sync", desc: "Automatically update lead statuses, log call activity, and trigger follow-up tasks." },
                { title: "Secure Database Inquiries", desc: "Securely query your systems to verify account details or order statuses." },
                { title: "SIP Trunk Compatibility", desc: "Natively compatible with leading enterprise SIP trunks and local telecom providers." }
            ]
        }
    ];

    const voiceComparison = [
        {
            feature: "Response Latency",
            swanDigitalsVoice: "Fast, natural turn-taking — no robotic pauses.",
            exotel: "2-3s (Rigid IVR logic or delayed cloud webhook triggers).",
            ozonetel: "2-3s (Delayed webhook audio processing).",
            myoperator: "Legacy DTMF (No real-time dynamic conversational speech).",
            yellowaiVoice: "1-2s response gap (Feels robotic)."
        },
        {
            feature: "Indian Language NLU",
            swanDigitalsVoice: "Native Hinglish + 10 regional Indian languages natively supported.",
            exotel: "Basic TTS translation (Lacks regional dialects).",
            ozonetel: "Raw translation layers; high accent failure.",
            myoperator: "Pre-recorded audio prompts only; zero dynamic speech.",
            yellowaiVoice: "4-5 languages; translations are prone to latency."
        },
        {
            feature: "IVR Replacement",
            swanDigitalsVoice: "Full conversational AI (Customers speak naturally immediately).",
            exotel: "DTMF keypress menus only ('Press 1 for...').",
            ozonetel: "DTMF keypress menus only.",
            myoperator: "Rigid traditional receptionist queues.",
            yellowaiVoice: "Add-on module; complex configuration."
        },
        {
            feature: "Smart Recovery Campaigns",
            swanDigitalsVoice: "Proactive outbound collections agent with callbacks.",
            exotel: "Raw robo-blasts with standard voice file playbacks.",
            ozonetel: "Basic broadcast calling scripts.",
            myoperator: "Manual agent dialing only.",
            yellowaiVoice: "High call-rate usage charge; cost prohibitive."
        },
        {
            feature: "Setup & Go-Live",
            swanDigitalsVoice: "Live in about a week — fully managed, no infrastructure needed.",
            exotel: "Self-serve setup with technical configuration.",
            ozonetel: "Requires technical onboarding.",
            myoperator: "Basic self-serve setup.",
            yellowaiVoice: "Enterprise onboarding cycles."
        },
        {
            feature: "Unified Helpdesk Sync",
            swanDigitalsVoice: "Transcripts and summaries sync instantly to unified inbox.",
            exotel: "Delivered as external webhook API logs.",
            ozonetel: "Separate console required to access recordings.",
            myoperator: "Basic call logs with no transcript details.",
            yellowaiVoice: "Requires customized middle-tier integrations."
        }
    ];

    return (
        <SiteLayout>
            {/* 1. HERO SECTION (DYNAMIC THEME SWAPPING) */}
            <section 
                ref={heroRef}
                className={`relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden transition-colors duration-500 ${
                    activeProduct === 'chatbot' ? 'bg-slate-950' : 'bg-slate-950'
                }`}
            >
                {/* Glow Effect */}
                <div 
                    className={`absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full blur-[120px] opacity-40 pointer-events-none transition-all duration-700 ${
                        activeProduct === 'chatbot' ? 'bg-orange-500/25' : 'bg-purple-600/25'
                    }`} 
                />

                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <span 
                            className={`reveal inline-block px-4 py-1.5 text-xs font-extrabold tracking-widest uppercase rounded-full mb-6 border transition-all duration-300 ${
                                activeProduct === 'chatbot' 
                                    ? 'text-orange-400 bg-orange-500/10 border-orange-500/20' 
                                    : 'text-purple-400 bg-purple-500/10 border-purple-500/20'
                            }`}
                        >
                            {activeProduct === 'chatbot' ? 'Omnichannel Helpdesk' : 'Conversational Speech AI'}
                        </span>
                        
                        <h1 className="reveal text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-8 leading-tight">
                            {activeProduct === 'chatbot' ? (
                                <>
                                    Everything You Need to <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">Automate Support</span>
                                </>
                            ) : (
                                <>
                                    Replace Your IVR. <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Talk to Customers</span>
                                </>
                            )}
                        </h1>

                        <p className="reveal text-lg sm:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                            {activeProduct === 'chatbot' 
                                ? "AI that reads context, handles 13+ digital channels in one collaborative inbox, and deploys in days — not months."
                                : "Human-like phone conversations powered by AI. Real-time NLU for 10 Indian languages with fast, natural responses, available 24/7."
                            }
                        </p>

                        <div className="reveal flex flex-col sm:flex-row gap-4 justify-center">
                            {activeProduct === 'chatbot' ? (
                                <>
                                    <Link href="/demo" className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-bold shadow-lg shadow-orange-500/30 transition-all hover:-translate-y-1 text-center">
                                        Book a Demo
                                    </Link>
                                    <a href="https://chat.swandigitals.com" className="px-8 py-4 bg-white/10 hover:bg-white/15 text-white border border-white/10 rounded-full font-bold backdrop-blur-md transition-all hover:-translate-y-1 text-center">
                                        Start Free
                                    </a>
                                </>
                            ) : (
                                <>
                                    <Link href="/demo" className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-bold shadow-lg shadow-purple-500/30 transition-all hover:-translate-y-1 text-center">
                                        Book a Voice AI Demo
                                    </Link>
                                    <Link href="/demo" className="px-8 py-4 bg-white/10 hover:bg-white/15 text-white border border-white/10 rounded-full font-bold backdrop-blur-md transition-all hover:-translate-y-1 text-center">
                                        Hear a Sample Call
                                    </Link>
                                </>
                            )}
                        </div>

                        {/* Badges Grid */}
                        <div className="reveal mt-12 grid grid-cols-3 gap-4 max-w-2xl mx-auto">
                            {activeProduct === 'chatbot' ? (
                                [
                                    { text: "DPDP 2023 Aware" },
                                    { text: "Data Hosted in India" },
                                    { text: "Live in 7 Days" }
                                ].map((badge, idx) => (
                                    <div key={idx} className="bg-white/5 border border-white/10 py-3 px-2 rounded-2xl backdrop-blur-sm">
                                        <span className="text-xs sm:text-sm font-bold text-slate-300">{badge.text}</span>
                                    </div>
                                ))
                            ) : (
                                [
                                    { text: "Natural Voice AI" },
                                    { text: "10 Indian Languages" },
                                    { text: "24/7 Availability" }
                                ].map((badge, idx) => (
                                    <div key={idx} className="bg-white/5 border border-white/10 py-3 px-2 rounded-2xl backdrop-blur-sm">
                                        <span className="text-xs sm:text-sm font-bold text-slate-300">{badge.text}</span>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. DYNAMIC CONTENT AREA */}
            <div id="product-features-container" className="bg-slate-50 border-t border-slate-200">
                
                {/* Centered Glassmorphism Product Switch */}
                <div className="py-12 bg-white border-b border-slate-200">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                        <p className="text-xs font-extrabold uppercase tracking-widest text-slate-400 mb-4">SELECT CORE PLATFORM MODULE</p>
                        <div className="inline-flex bg-slate-200/60 backdrop-blur-md border border-slate-300/50 p-1.5 rounded-full relative w-[320px] shadow-inner select-none">
                            {/* Animated Background Capsule */}
                            <div 
                                className="absolute top-1.5 bottom-1.5 left-1.5 rounded-full shadow-md transition-all duration-300 ease-out"
                                style={{
                                    width: 'calc(50% - 6px)',
                                    transform: activeProduct === 'chatbot' ? 'translateX(0)' : 'translateX(100%)',
                                    backgroundColor: activeProduct === 'chatbot' ? '#f97316' : '#9333ea' // orange-500 vs purple-600
                                }}
                            />
                            <button 
                                onClick={() => handleProductChange('chatbot')}
                                className={`flex-1 py-2 text-sm font-bold rounded-full relative z-10 transition-colors ${
                                    activeProduct === 'chatbot' ? 'text-white' : 'text-slate-600 hover:text-slate-900'
                                }`}
                            >
                                AI Chatbot Features
                            </button>
                            <button 
                                onClick={() => handleProductChange('voicebot')}
                                className={`flex-1 py-2 text-sm font-bold rounded-full relative z-10 transition-colors ${
                                    activeProduct === 'voicebot' ? 'text-white' : 'text-slate-600 hover:text-slate-900'
                                }`}
                            >
                                Voice AI Features
                            </button>
                        </div>
                    </div>
                </div>

                {/* STICKY QUICK JUMP NAVIGATION BAR */}
                <div className="sticky top-[72px] z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 py-3 shadow-sm overflow-x-auto hide-scrollbar">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8 flex gap-3 whitespace-nowrap justify-start lg:justify-center">
                        {activeProduct === 'chatbot' ? (
                            chatbotTabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => scrollToSection(tab.id)}
                                    className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-full font-bold text-xs transition-colors border border-slate-200"
                                >
                                    {tab.label}
                                </button>
                            ))
                        ) : (
                            voiceTabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => scrollToSection(tab.id)}
                                    className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-full font-bold text-xs transition-colors border border-slate-200"
                                >
                                    {tab.label}
                                </button>
                            ))
                        )}
                    </div>
                </div>

                {/* PRODUCT DETAILED FEATURE CARDS SECTION */}
                <section ref={contentRef} className="py-20">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        {activeProduct === 'chatbot' ? (
                            // CHATBOT DOM RENDER
                            <div className="space-y-24">
                                {chatbotSections.map((sec) => {
                                    const hasImage = sec.id === 'inbox-mgmt' || sec.id === 'channels';
                                    const imgSrc = sec.id === 'inbox-mgmt' ? '/chatbot-inbox.png' : '/dashboard-user.png';
                                    const imgAlt = sec.id === 'inbox-mgmt' ? 'SwanDigitals Unified Conversations Inbox' : 'SwanDigitals Omnichannel Dashboard';

                                    return (
                                        <div key={sec.id} id={sec.id} className="scroll-mt-36">
                                            <div className="reveal mb-10 text-center lg:text-left max-w-3xl">
                                                <span className="inline-block px-3 py-1 bg-orange-100 border border-orange-200 text-orange-700 rounded-full text-xs font-extrabold uppercase mb-4 tracking-wider">
                                                    {sec.badge}
                                                </span>
                                                <h2 className="text-3xl font-extrabold text-slate-900 mb-3">{sec.title}</h2>
                                                <p className="text-slate-500 font-medium text-lg leading-relaxed">{sec.description}</p>
                                            </div>

                                            {hasImage ? (
                                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                                                    {/* Screenshot Mockup */}
                                                    <div className="lg:col-span-6 reveal">
                                                        <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-white group hover:border-orange-300 transition-all duration-300">
                                                            <div className="flex items-center gap-2 px-4 py-2.5 bg-slate-100 border-b border-slate-200">
                                                                <div className="flex gap-1.5">
                                                                    <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                                                                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                                                                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                                                                </div>
                                                                <div className="flex-1 mx-4">
                                                                    <div className="bg-white rounded-md px-3 py-0.5 text-[10px] text-slate-400 font-mono border border-slate-200 text-center truncate">app.swandigitals.com</div>
                                                                </div>
                                                            </div>
                                                            <img 
                                                                src={imgSrc} 
                                                                alt={imgAlt}
                                                                className="w-full h-auto block transform group-hover:scale-[1.02] transition-transform duration-500"
                                                                loading="lazy"
                                                            />
                                                        </div>
                                                    </div>

                                                    {/* Cards Grid beside screenshot */}
                                                    <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 stagger">
                                                        {sec.cards.map((card, idx) => (
                                                            <div 
                                                                key={idx}
                                                                className="reveal bg-white border border-slate-200 rounded-2xl p-5 hover:shadow-lg hover:border-orange-200 transition-all duration-300 flex flex-col justify-between"
                                                            >
                                                                <div>
                                                                    <div className="w-8 h-8 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-500 mb-3">
                                                                        <Check className="w-4 h-4 font-bold" />
                                                                    </div>
                                                                    <h3 className="font-bold text-base text-slate-900 mb-1">{card.title}</h3>
                                                                    <p className="text-xs text-slate-500 leading-relaxed">{card.desc}</p>
                                                                </div>
                                                                
                                                                {card.isLinkToVoice && (
                                                                    <button 
                                                                        onClick={() => handleProductChange('voicebot')}
                                                                        className="mt-4 text-xs font-bold text-orange-600 hover:text-orange-700 inline-flex items-center gap-1.5 group cursor-pointer self-start"
                                                                    >
                                                                        Go to Voice AI Features 
                                                                        <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                                                                    </button>
                                                                )}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger">
                                                    {sec.cards.map((card, idx) => (
                                                        <div 
                                                            key={idx}
                                                            className="reveal bg-white border border-slate-200 rounded-3xl p-6 hover:shadow-xl hover:border-orange-200 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
                                                        >
                                                            <div>
                                                                <div className="w-10 h-10 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-500 mb-4">
                                                                    <Check className="w-5 h-5 font-bold" />
                                                                </div>
                                                                <h3 className="font-bold text-lg text-slate-900 mb-2">{card.title}</h3>
                                                                <p className="text-sm text-slate-500 leading-relaxed">{card.desc}</p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        ) : (
                            // VOICE AI DOM RENDER
                            <div className="space-y-24">
                                {voiceSections.map((sec) => {
                                    const voiceImages: Record<string, { src: string; alt: string }> = {
                                        'how-it-works': { src: '/voicebot-overview.png', alt: 'SwanVoice AI Overview Dashboard' },
                                        'outbound': { src: '/voicebot-make-call.png', alt: 'Place Outbound Call Interface' },
                                        'agent-transfer': { src: '/voicebot-team-mgmt.png', alt: 'Team & On-Call Agent Management' },
                                        'call-analytics': { src: '/voicebot-team.png', alt: 'AI Call Summary & Transcript' },
                                        'integrations': { src: '/voicebot-agents-config.png', alt: 'Voice AI Agents Configuration' }
                                    };

                                    const imageInfo = voiceImages[sec.id];

                                    return (
                                        <div key={sec.id} id={sec.id} className="scroll-mt-36">
                                            <div className="reveal mb-10 text-center lg:text-left max-w-3xl">
                                                <span className="inline-block px-3 py-1 bg-purple-100 border border-purple-200 text-purple-700 rounded-full text-xs font-extrabold uppercase mb-4 tracking-wider">
                                                    {sec.badge}
                                                </span>
                                                <h2 className="text-3xl font-extrabold text-slate-900 mb-3">{sec.title}</h2>
                                                <p className="text-slate-500 font-medium text-lg leading-relaxed">{sec.description}</p>
                                            </div>

                                            {/* SPECIAL HOW IT WORKS LAYOUT */}
                                            {sec.id === 'how-it-works' && (
                                                <div className="space-y-10 mb-10">
                                                    {/* Clean Featured Dashboard Image */}
                                                    <div className="reveal">
                                                        <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden border border-slate-200 shadow-2xl bg-white group hover:border-purple-300 transition-all duration-300">
                                                            <div className="flex items-center gap-2 px-4 py-2.5 bg-slate-100 border-b border-slate-200">
                                                                <div className="flex gap-1.5">
                                                                    <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                                                                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                                                                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                                                                </div>
                                                                <div className="flex-1 mx-4">
                                                                    <div className="bg-white rounded-md px-3 py-0.5 text-[10px] text-slate-400 font-mono border border-slate-200 text-center truncate">voice.swandigitals.com/dashboard</div>
                                                                </div>
                                                            </div>
                                                            <img 
                                                                src={imageInfo.src} 
                                                                alt={imageInfo.alt}
                                                                className="w-full h-auto block transform group-hover:scale-[1.01] transition-transform duration-500"
                                                                loading="lazy"
                                                            />
                                                        </div>
                                                    </div>

                                                    {/* Interactive Call Flow Visual */}
                                                    <div className="reveal bg-gradient-to-r from-purple-900 to-indigo-900 p-8 rounded-3xl text-white border border-purple-800 shadow-lg">
                                                        <h3 className="font-bold text-xl mb-6 text-center tracking-wide uppercase text-purple-200">Interactive Call Flow</h3>
                                                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative">
                                                            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                                                                <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center font-bold text-white mb-4">1</div>
                                                                <h4 className="font-bold mb-2">Inbound / Outbound Trigger</h4>
                                                                <p className="text-xs text-purple-200 leading-relaxed">Customer dials your dedicated number, or our campaign engine triggers an outbound call.</p>
                                                            </div>
                                                            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                                                                <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center font-bold text-white mb-4">2</div>
                                                                <h4 className="font-bold mb-2">Real-Time Processing</h4>
                                                                <p className="text-xs text-purple-200 leading-relaxed">ASR converts audio to text, NLU decides context and intent, TTS synthesizes a natural-sounding response in real time.</p>
                                                            </div>
                                                            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                                                                <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center font-bold text-white mb-4">3</div>
                                                                <h4 className="font-bold mb-2">CRM Action & Sync</h4>
                                                                <p className="text-xs text-purple-200 leading-relaxed">System logs outcomes, books calendars or transfers to live agents, and attaches post-call briefs.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                            {/* SPECIAL LANGUAGES GRID */}
                                            {sec.isLanguagesGrid && (
                                                <div className="reveal grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-10">
                                                    {['English', 'Hindi', 'Marathi', 'Tamil', 'Telugu', 'Kannada', 'Gujarati', 'Bengali', 'Malayalam', 'Punjabi'].map((lang, idx) => (
                                                        <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-4 text-center hover:border-purple-300 transition-colors shadow-sm">
                                                            <div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 mx-auto mb-2">
                                                                <MessageSquare className="w-4 h-4" />
                                                            </div>
                                                            <span className="font-bold text-slate-800 text-xs">{lang}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}

                                            {/* SECTIONS WITH SCREENSHOTS (2-COLUMN SPLIT) */}
                                            {imageInfo && sec.id !== 'how-it-works' ? (
                                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                                                    {/* Screenshot Mockup (Alternates Left/Right side) */}
                                                    <div className={`lg:col-span-6 reveal ${sec.id === 'agent-transfer' || sec.id === 'integrations' ? 'lg:order-2' : ''}`}>
                                                        <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-white group hover:border-purple-300 transition-all duration-300">
                                                            <div className="flex items-center gap-2 px-4 py-2.5 bg-slate-100 border-b border-slate-200">
                                                                <div className="flex gap-1.5">
                                                                    <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                                                                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                                                                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                                                                </div>
                                                                <div className="flex-1 mx-4">
                                                                    <div className="bg-white rounded-md px-3 py-0.5 text-[10px] text-slate-400 font-mono border border-slate-200 text-center truncate">voice.swandigitals.com</div>
                                                                </div>
                                                            </div>
                                                            <img 
                                                                src={imageInfo.src} 
                                                                alt={imageInfo.alt}
                                                                className="w-full h-auto block transform group-hover:scale-[1.02] transition-transform duration-500"
                                                                loading="lazy"
                                                            />
                                                        </div>
                                                    </div>

                                                    {/* Feature Cards Grid beside screenshot */}
                                                    <div className={`lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 stagger ${sec.id === 'agent-transfer' || sec.id === 'integrations' ? 'lg:order-1' : ''}`}>
                                                        {sec.cards.map((card, idx) => (
                                                            <div 
                                                                key={idx}
                                                                className="reveal bg-white border border-slate-200 rounded-2xl p-5 hover:shadow-lg hover:border-purple-200 transition-all duration-300 flex flex-col justify-between"
                                                            >
                                                                <div>
                                                                    <div className="w-8 h-8 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-500 mb-3">
                                                                        <Check className="w-4 h-4 font-bold" />
                                                                    </div>
                                                                    <h3 className="font-bold text-base text-slate-900 mb-1">{card.title}</h3>
                                                                    <p className="text-xs text-slate-500 leading-relaxed">{card.desc}</p>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            ) : (
                                                // SECTIONS WITHOUT SCREENSHOTS
                                                sec.id !== 'how-it-works' && (
                                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger">
                                                        {sec.cards.map((card, idx) => (
                                                            <div 
                                                                key={idx}
                                                                className="reveal bg-white border border-slate-200 rounded-3xl p-6 hover:shadow-xl hover:border-purple-200 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
                                                            >
                                                                <div>
                                                                    <div className="w-10 h-10 rounded-2xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-500 mb-4">
                                                                        <Check className="w-5 h-5 font-bold" />
                                                                    </div>
                                                                    <h3 className="font-bold text-lg text-slate-900 mb-2">{card.title}</h3>
                                                                    <p className="text-sm text-slate-500 leading-relaxed">{card.desc}</p>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                </section>

                {/* 3. CONTEXTUAL CROSS-SELL BANNER */}
                <section className="py-12 bg-white border-y border-slate-200">
                    <div className="max-w-4xl mx-auto px-6 lg:px-8">
                        {activeProduct === 'chatbot' ? (
                            <div className="bg-orange-50/50 border border-orange-200 p-8 rounded-3xl text-center shadow-sm">
                                <h3 className="font-extrabold text-slate-900 text-xl mb-2">Need phone support too?</h3>
                                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                                    SwanDigitals Voice AI handles incoming and outgoing customer calls in 10 Indian languages with fast, natural responses.
                                </p>
                                <button 
                                    onClick={() => handleProductChange('voicebot')}
                                    className="px-6 py-3 bg-slate-900 text-white rounded-full font-bold text-xs hover:bg-slate-800 transition-colors inline-flex items-center gap-1.5"
                                >
                                    Switch to Voice AI features 
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        ) : (
                            <div className="bg-purple-50/50 border border-purple-200 p-8 rounded-3xl text-center shadow-sm">
                                <h3 className="font-extrabold text-slate-900 text-xl mb-2">Need WhatsApp, email & web chat?</h3>
                                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                                    SwanDigitals AI Chatbot automates conversations across 13+ digital channels in a single collaborative human mailbox.
                                </p>
                                <button 
                                    onClick={() => handleProductChange('chatbot')}
                                    className="px-6 py-3 bg-slate-900 text-white rounded-full font-bold text-xs hover:bg-slate-800 transition-colors inline-flex items-center gap-1.5"
                                >
                                    Switch to AI Chatbot features 
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        )}
                    </div>
                </section>

                {/* 4. COMPREHENSIVE COMPETITOR COMPARISON TABLES */}
                <section className="py-20 bg-slate-50">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Competitor Breakdown</h2>
                            <p className="text-slate-500 font-medium text-lg">
                                See how SwanDigitals compares against the legacy alternatives
                            </p>
                        </div>

                        {activeProduct === 'chatbot' ? (
                            // CHATBOT TABLE
                            <div className="overflow-x-auto bg-white rounded-3xl border border-slate-200 shadow-md">
                                <table className="w-full border-collapse text-left text-sm">
                                    <thead>
                                        <tr className="bg-slate-900 text-white">
                                            <th className="py-5 px-6 font-bold text-sm w-1/4">FEATURE</th>
                                            <th className="py-5 px-4 text-center font-extrabold text-sm bg-orange-500 text-white w-[15%]">SwanDigitals</th>
                                            <th className="py-5 px-4 text-center font-bold text-sm text-slate-300 w-[12%]">Freshdesk</th>
                                            <th className="py-5 px-4 text-center font-bold text-sm text-slate-300 w-[12%]">Intercom</th>
                                            <th className="py-5 px-4 text-center font-bold text-sm text-slate-300 w-[12%]">Zendesk</th>
                                            <th className="py-5 px-4 text-center font-bold text-sm text-slate-300 w-[12%]">Yellow.ai</th>
                                            <th className="py-5 px-4 text-center font-bold text-sm text-slate-300 w-[12%]">Kore.ai</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                                        {chatbotComparison.map((row, idx) => (
                                            <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                                                <td className="py-4 px-6 font-bold text-slate-900">{row.feature}</td>
                                                <td className="py-4 px-4 text-center bg-orange-50 font-bold text-slate-800 text-xs border-x border-orange-200">{row.swanDigitals}</td>
                                                <td className="py-4 px-4 text-center text-xs text-slate-500">{row.freshdesk}</td>
                                                <td className="py-4 px-4 text-center text-xs text-slate-500">{row.intercom}</td>
                                                <td className="py-4 px-4 text-center text-xs text-slate-500">{row.zendesk}</td>
                                                <td className="py-4 px-4 text-center text-xs text-slate-500">{row.yellowai}</td>
                                                <td className="py-4 px-4 text-center text-xs text-slate-500">{row.koreai}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        ) : (
                            // VOICE TABLE
                            <div className="overflow-x-auto bg-white rounded-3xl border border-slate-200 shadow-md">
                                <table className="w-full border-collapse text-left text-sm">
                                    <thead>
                                        <tr className="bg-slate-900 text-white">
                                            <th className="py-5 px-6 font-bold text-sm w-1/4">FEATURE</th>
                                            <th className="py-5 px-4 text-center font-extrabold text-sm bg-purple-600 text-white w-[18%]">SwanDigitals Voice</th>
                                            <th className="py-5 px-4 text-center font-bold text-sm text-slate-300 w-[14%]">Exotel</th>
                                            <th className="py-5 px-4 text-center font-bold text-sm text-slate-300 w-[14%]">Ozonetel</th>
                                            <th className="py-5 px-4 text-center font-bold text-sm text-slate-300 w-[14%]">MyOperator</th>
                                            <th className="py-5 px-4 text-center font-bold text-sm text-slate-300 w-[14%]">Yellow.ai Voice</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                                        {voiceComparison.map((row, idx) => (
                                            <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                                                <td className="py-4 px-6 font-bold text-slate-900">{row.feature}</td>
                                                <td className="py-4 px-4 text-center bg-purple-50 font-bold text-slate-800 text-xs border-x border-purple-200">{row.swanDigitalsVoice}</td>
                                                <td className="py-4 px-4 text-center text-xs text-slate-500">{row.exotel}</td>
                                                <td className="py-4 px-4 text-center text-xs text-slate-500">{row.ozonetel}</td>
                                                <td className="py-4 px-4 text-center text-xs text-slate-500">{row.myoperator}</td>
                                                <td className="py-4 px-4 text-center text-xs text-slate-500">{row.yellowaiVoice}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                </section>
            </div>

            {/* 5. SHARED FINAL CTA SECTION */}
            <section ref={ctaRef} className="py-24 bg-gradient-to-br from-slate-950 to-slate-900 text-white text-center relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-orange-500/10 rounded-full blur-[80px] opacity-30 pointer-events-none" />
                
                <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
                    <h2 className="reveal text-4xl sm:text-5xl font-black mb-6">Ready to See It in Action?</h2>
                    <p className="reveal text-lg text-slate-400 mb-10 max-w-xl mx-auto leading-relaxed">
                        Book a 30-minute custom demo. We'll show you exactly how SwanDigitals handles your live customer pathways.
                    </p>
                    
                    <div className="reveal flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/demo" className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-bold text-sm shadow-lg shadow-orange-500/35 transition-all hover:-translate-y-0.5">
                            Book a Demo
                        </Link>
                        <a href="https://chat.swandigitals.com" className="px-8 py-4 bg-white/10 hover:bg-white/15 text-white border border-white/10 rounded-full font-bold text-sm transition-all hover:-translate-y-0.5">
                            Start Free
                        </a>
                    </div>
                    
                    <div className="reveal mt-8">
                        <Link href="/pricing" className="text-xs font-semibold text-slate-400 hover:text-white transition-colors">
                            View Pricing →
                        </Link>
                    </div>
                </div>
            </section>
        </SiteLayout>
    );
}
