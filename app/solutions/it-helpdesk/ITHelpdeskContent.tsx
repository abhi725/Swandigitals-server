'use client';

import { useState } from 'react';
import SiteLayout from '@/components/layout/SiteLayout';
import Link from 'next/link';
import {
    FileText, BookOpen, Search, Check, ChevronDown, ArrowRight,
    HelpCircle, MessageSquare, ShieldCheck, RefreshCw, Bot,
    Headphones, AlertCircle, Sparkles, Layers, Globe, ExternalLink,
    Upload, FileCheck2, UserCheck, Clock, Zap
} from 'lucide-react';

/* ─────────────────────────────────────────────────────────────────────────────
   REALISTIC DOC-DRIVEN TECH SUPPORT SCENARIOS
───────────────────────────────────────────────────────────────────────────── */
interface Scenario {
    id: string;
    title: string;
    sourceDoc: string;
    category: string;
    color: string;
    messages: {
        from: 'user' | 'bot';
        text: string;
        docCitation?: string;
    }[];
}

const REALISTIC_SCENARIOS: Record<string, Scenario> = {
    troubleshooting: {
        id: 'troubleshooting',
        title: 'Error Code & Troubleshooting',
        sourceDoc: 'Source: Troubleshooting-Guide-v3.2.pdf',
        category: 'Customer Technical Support',
        color: '#f97316',
        messages: [
            {
                from: 'user',
                text: "I'm getting error code `ERR_SYNC_408` when trying to import CSV records. What does this mean and how do I fix it?"
            },
            {
                from: 'bot',
                text: "According to your **Troubleshooting Guide (Section 4.3)**, `ERR_SYNC_408` occurs when the uploaded CSV contains special characters in header rows or exceeds 5,000 rows in a single batch.\n\n**Here are the resolution steps:**\n1. Ensure column headers contain only alphanumeric characters and underscores (no spaces or emojis).\n2. If your file exceeds 5,000 rows, split it into smaller batches.\n3. Verify your date columns use the `YYYY-MM-DD` format.\n\nWould you like the sample CSV template link?",
                docCitation: "Referenced: Troubleshooting-Guide-v3.2.pdf (Page 14, Section 4.3)"
            },
            {
                from: 'user',
                text: "Yes please, that fixed it after I removed the extra spaces in the header!"
            },
            {
                from: 'bot',
                text: "Glad to hear that resolved your issue! Here is the documentation link for future reference:\n🔗 `docs.yourproduct.com/csv-specs`"
            }
        ]
    },
    setup_config: {
        id: 'setup_config',
        title: 'Setup & Integration Guide',
        sourceDoc: 'Source: Admin-Setup-Manual.docx',
        category: 'Product Onboarding',
        color: '#3b82f6',
        messages: [
            {
                from: 'user',
                text: "Where do I configure IP whitelisting for our team members in the dashboard?"
            },
            {
                from: 'bot',
                text: "From your **Admin Setup Manual (Chapter 2: Security & Access)**:\n\n1. Log in with **Owner** or **Admin** privileges.\n2. Navigate to **Settings → Security & Compliance**.\n3. Under **Network Access**, toggle on **IP Restrictions**.\n4. Click **Add Allowed IP / CIDR** and enter your static IP addresses.\n5. Click **Save Changes** (changes apply within 60 seconds).\n\n⚠️ Note: Make sure to add your current office IP first before toggling the rule on, so you don't lock yourself out.",
                docCitation: "Referenced: Admin-Setup-Manual.docx (Section 2.4)"
            },
            {
                from: 'user',
                text: "Thanks, found it under Security settings."
            }
        ]
    },
    internal_it_sop: {
        id: 'internal_it_sop',
        title: 'Internal IT & Employee SOPs',
        sourceDoc: 'Source: Internal-IT-SOP-macOS.pdf',
        category: 'Internal IT Helpdesk',
        color: '#10b981',
        messages: [
            {
                from: 'user',
                text: "I joined this week. How do I configure the company VPN on my MacBook?"
            },
            {
                from: 'bot',
                text: "Welcome to the team! Based on the **Internal IT Onboarding SOP for macOS**:\n\n1. Download the official company VPN client from our internal portal: `it-portal.company.internal/downloads`.\n2. Open the installer and install the security certificate (`RootCA-2024.crt`).\n3. In the VPN server field, enter: `vpn.in.company.com`.\n4. Sign in using your corporate Google Workspace email and authenticate via 2-factor push.\n\nIf you need the security certificate re-sent or run into permissions errors, reply 'Escalate to IT Desk'.",
                docCitation: "Referenced: Internal-IT-SOP-macOS.pdf (Section 1.2)"
            },
            {
                from: 'user',
                text: "Connected on the first attempt, thank you!"
            }
        ]
    },
    human_escalation: {
        id: 'human_escalation',
        title: 'Human Escalation When Docs Fail',
        sourceDoc: 'Source: Escalation Matrix & CRM Sync',
        category: 'Seamless Handoff',
        color: '#8b5cf6',
        messages: [
            {
                from: 'user',
                text: "Our custom ERP integration is returning error 500 on endpoint /orders/custom, and it's not listed in the standard error codes doc."
            },
            {
                from: 'bot',
                text: "I searched all uploaded API documentation and error code sheets, but this specific custom endpoint isn't covered in the knowledge base.\n\nLet me connect you directly to our human engineering team.\n\nCould you please share:\n1. Your registered Account ID or Organization Name\n2. The approximate time the error occurred\n3. Any request payload or screenshot you have",
                docCitation: "Fallback Trigger: Topic not found in uploaded docs"
            },
            {
                from: 'user',
                text: "Org: AcmeTech, occurred at 14:15 IST today."
            },
            {
                from: 'bot',
                text: "✅ Ticket created and forwarded to our Level-2 Tech Support queue with your full conversation history. A support engineer will review and respond to your email within 2 business hours."
            }
        ]
    }
};

/* ─────────────────────────────────────────────────────────────────────────────
   PAIN POINTS: WHY TECH TEAMS GET SWAMPED WITH REPETITIVE DOC QUESTIONS
───────────────────────────────────────────────────────────────────────────── */
const TECH_PAIN_POINTS = [
    {
        icon: Search,
        title: "Customers Don't Read 50-Page User Manuals",
        problem: "You spent weeks writing detailed guides, yet customers repeatedly email support asking basic questions: 'Where do I find my API key?' or 'How do I add a new user?'",
        fix: "The AI answers instantly from your docs in simple conversational bullets, citing the exact chapter."
    },
    {
        icon: Headphones,
        title: "Support Staff Spending 60% of Time Copy-Pasting Docs",
        problem: "Support agents waste hours locating help articles, copying links, and pasting the same troubleshooting steps repeatedly.",
        fix: "SwanDigitals auto-resolves common questions immediately, freeing staff to handle complex customer challenges."
    },
    {
        icon: Clock,
        title: "After-Hours & Weekend Tech Queries Go Unanswered",
        problem: "When a customer integrates your software on a Saturday evening and gets stuck on step 3, they wait until Monday morning for an answer.",
        fix: "24/7 instant answers from your technical docs on your website widget, WhatsApp, or Telegram."
    },
    {
        icon: AlertCircle,
        title: "Fear of AI Hallucinating Inaccurate Technical Advice",
        problem: "Generic AI chatbots make up imaginary features or give incorrect setup steps, frustrating customers.",
        fix: "SwanDigitals only answers from your pre-approved documents. If an answer isn't in your docs, it honestly escalates."
    },
    {
        icon: RefreshCw,
        title: "Keeping Support Bots Updated with New Product Releases",
        problem: "Every time your product adds a feature or changes a setting screen, chatbots require complicated manual rule re-programming.",
        fix: "Just upload the revised PDF or updated documentation URL. The AI updates its knowledge instantly."
    },
    {
        icon: UserCheck,
        title: "Internal IT Burden for Remote & Hybrid Teams",
        problem: "Internal IT staff spend mornings answering 'How do I access the printer?', 'Where is the VPN link?', and 'What is the leave policy?'",
        fix: "Deploy an internal knowledge bot that answers employee IT questions strictly from your company's SOPs."
    }
];

/* ─────────────────────────────────────────────────────────────────────────────
   HOW IT ACTUALLY WORKS (3-STEP KNOWLEDGE INGESTION)
───────────────────────────────────────────────────────────────────────────── */
const HOW_IT_WORKS_STEPS = [
    {
        step: "01",
        icon: Upload,
        title: "Upload Your Existing Documentation",
        desc: "Upload your product user manuals, troubleshooting guides, setup SOPs, error code sheets, or public documentation URLs. Formats supported: PDF, DOCX, TXT, Notion, or Website URLs."
    },
    {
        step: "02",
        icon: BookOpen,
        title: "AI Indexes & Understands Your Content",
        desc: "SwanDigitals parses your documents into an organized retrieval knowledge base. It learns your terminology, product workflows, and troubleshooting steps without custom coding."
    },
    {
        step: "03",
        icon: MessageSquare,
        title: "Customers & Employees Get Instant Answers",
        desc: "Deploy the chat widget on your website, app, documentation portal, or WhatsApp. Users ask questions in plain English or regional languages and get exact answers with citations."
    }
];

/* ─────────────────────────────────────────────────────────────────────────────
   GROUNDED CAPABILITIES (HONEST & DOCUMENTATION-DRIVEN)
───────────────────────────────────────────────────────────────────────────── */
const GROUNDED_CAPABILITIES = [
    {
        icon: FileCheck2,
        title: "Strictly Grounded on Your Docs",
        desc: "No made-up answers. The AI draws strictly from your uploaded PDFs, guides, and SOPs. If a query is outside the docs, it tells the user honestly."
    },
    {
        icon: Search,
        title: "Precise Chapter & Section Citations",
        desc: "Users can see which document and section the answer came from, giving them full confidence in the instructions."
    },
    {
        icon: Globe,
        title: "Understands Hinglish & Regional Queries",
        desc: "Customers don't always ask questions in formal English. The bot understands colloquial queries and Hinglish while mapping to your English docs."
    },
    {
        icon: RefreshCw,
        title: "1-Click Knowledge Base Updates",
        desc: "Launched a new release or changed a dashboard menu? Upload the revised doc and the AI adopts the new workflow in minutes."
    },
    {
        icon: Headphones,
        title: "Smooth Human Escalation",
        desc: "When a user's question isn't answered in the documentation, the AI captures their contact details and issue description for human agent followup."
    },
    {
        icon: ShieldCheck,
        title: "Indian Data Hosting & DPDP Aware",
        desc: "All conversation logs and uploaded company documentation are stored on Indian cloud infrastructure with zero third-party data selling."
    },
    {
        icon: Layers,
        title: "Multi-Channel Deployment",
        desc: "Deploy the same documentation knowledge base on your website chat widget, client WhatsApp hotline, or Telegram channel."
    },
    {
        icon: Zap,
        title: "Instant Setup — No Coding Required",
        desc: "No complex dialogue tree diagrams or machine learning expertise needed. If you have documentation, you can launch in under 48 hours."
    }
];

/* ─────────────────────────────────────────────────────────────────────────────
   REALISTIC FAQS
───────────────────────────────────────────────────────────────────────────── */
const FAQS = [
    {
        q: "What documentation does the AI need to get trained?",
        a: "The AI works directly from your existing materials. You can upload user manuals, troubleshooting guides, setup SOPs, FAQ documents, or provide links to your online documentation portal. Supported formats include PDF, DOCX, TXT, and web URLs."
    },
    {
        q: "What if our product documentation updates frequently?",
        a: "Updating the knowledge base takes just a minute. Simply upload the new document version or click refresh on your documentation URL. The AI immediately uses the latest information for subsequent questions."
    },
    {
        q: "Will the AI make up answers if something isn't in our docs?",
        a: "No. SwanDigitals is configured with strict retrieval grounding. If a customer asks a question that is not covered in your uploaded documentation, the AI clearly states that it doesn't have that information and offers to connect them with your human support team."
    },
    {
        q: "Can this help both our customers and our internal team?",
        a: "Yes! Many companies use it for customer technical support (product FAQs, setup guides, troubleshooting steps) and also have an internal knowledge bot for employees (company IT policies, VPN setup, onboarding guides, leave policies)."
    },
    {
        q: "Can customers reach support on WhatsApp as well as our website?",
        a: "Yes. The same knowledge base powers your website chat widget and your official WhatsApp Business number, so customers get the same accurate documentation answers wherever they reach out."
    },
    {
        q: "How does the bot hand over to human agents when an issue is too complex?",
        a: "When a question isn't in the docs or the user requests to speak with a human, the bot collects their name, contact details, and a summary of their issue. It then forwards the ticket to your team via email, webhook, or HubSpot CRM."
    }
];

export default function ITHelpdeskContent() {
    const [activeScenario, setActiveScenario] = useState<string>('troubleshooting');
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const scenario = REALISTIC_SCENARIOS[activeScenario];

    return (
        <SiteLayout>
            {/* ================================================================
                SECTION 1: HERO
            ================================================================ */}
            <section className="relative bg-white overflow-hidden pt-20 pb-24 md:pt-28 md:pb-32">
                {/* Subtle warm glow background */}
                <div className="absolute inset-0 pointer-events-none" aria-hidden>
                    <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-orange-50 opacity-70 blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-slate-100/60 blur-3xl" />
                </div>

                <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                        {/* Left: Copy */}
                        <div className="lg:col-span-6 xl:col-span-5">
                            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-orange-50 border border-orange-200 rounded-full text-orange-700 text-xs font-bold uppercase tracking-wider mb-6">
                                <BookOpen className="w-3.5 h-3.5 text-orange-600" />
                                Documentation-Driven AI Support
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-slate-900 leading-[1.1] tracking-tight mb-5">
                                Turn Your Product Docs into a{' '}
                                <span className="relative inline-block">
                                    <span className="relative z-10 text-orange-500">24/7 Technical Support</span>
                                    <span className="absolute -bottom-1 left-0 right-0 h-3 bg-orange-100 -z-0 rounded" aria-hidden />
                                </span>
                                {' '}AI Assistant
                            </h1>

                            <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-8 max-w-lg">
                                Connect your existing product manuals, setup guides, and troubleshooting SOPs. SwanDigitals answers repetitive customer and employee technical questions instantly with exact steps from your approved documentation.
                            </p>

                            {/* Trust chips */}
                            <div className="flex flex-wrap gap-2.5 mb-8 text-xs font-semibold text-slate-700">
                                {[
                                    'Strictly Answers from Your Docs',
                                    'Zero Guesswork or Hallucinations',
                                    'Works on Website & WhatsApp',
                                    '1-Click Doc Updates',
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
                                    Book Live Demo with Your Docs
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                                <Link
                                    href="#automation"
                                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-slate-200 hover:border-slate-300 bg-white text-slate-700 font-semibold rounded-xl transition-all text-sm"
                                >
                                    See How It Works
                                </Link>
                            </div>
                        </div>

                        {/* Right: Live Interactive Doc-Support Simulation */}
                        <div className="lg:col-span-6 xl:col-span-7">
                            {/* Scenario Switcher Tabs */}
                            <div className="flex gap-2 mb-3 flex-wrap">
                                {Object.values(REALISTIC_SCENARIOS).map((sc) => {
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
                                            {sc.title}
                                        </button>
                                    );
                                })}
                            </div>

                            {/* Chat Demonstration Window */}
                            <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden">
                                {/* Header bar showing knowledge source */}
                                <div className="bg-slate-50 px-5 py-3.5 border-b border-slate-200 flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600 font-bold">
                                            <FileText className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <div className="text-xs font-bold text-slate-800">{scenario.title}</div>
                                            <div className="text-[11px] text-slate-500 font-mono">{scenario.sourceDoc}</div>
                                        </div>
                                    </div>
                                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-orange-100 text-orange-700">
                                        {scenario.category}
                                    </span>
                                </div>

                                {/* Messages Area */}
                                <div className="p-5 space-y-4 max-h-[380px] overflow-y-auto bg-slate-50/40 text-sm">
                                    {scenario.messages.map((m, idx) => (
                                        <div
                                            key={idx}
                                            className={`flex flex-col ${m.from === 'user' ? 'items-end' : 'items-start'}`}
                                        >
                                            <div
                                                className={`max-w-[85%] p-4 rounded-2xl leading-relaxed whitespace-pre-line ${
                                                    m.from === 'user'
                                                        ? 'bg-slate-800 text-white rounded-br-xs'
                                                        : 'bg-white border border-slate-200 text-slate-800 shadow-xs rounded-bl-xs'
                                                }`}
                                            >
                                                {m.text}
                                            </div>

                                            {m.docCitation && (
                                                <div className="mt-1.5 flex items-center gap-1.5 text-[11px] text-emerald-600 font-medium px-2">
                                                    <Check className="w-3 h-3 text-emerald-500" />
                                                    <span>{m.docCitation}</span>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>

                                {/* Doc Status Footer */}
                                <div className="px-5 py-3 bg-white border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                                        <span>Grounded strictly on approved product docs</span>
                                    </div>
                                    <span className="text-slate-400">Response time: &lt; 2s</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ================================================================
                SECTION 2: REAL TECH PAIN POINTS (#automation ANCHOR)
            ================================================================ */}
            <section id="automation" className="py-20 md:py-28 bg-slate-900 text-white scroll-mt-20">
                <div className="max-w-7xl mx-auto px-5 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-orange-400 text-xs font-bold uppercase tracking-widest">
                            The Documentation Dilemma
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold mt-2">
                            Why Great Docs Don't Stop Repetitive Support Tickets
                        </h2>
                        <p className="text-slate-400 mt-3 text-sm md:text-base leading-relaxed">
                            Writing documentation is only half the battle. When users face an issue, they prefer asking a person rather than reading a 40-page guide.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {TECH_PAIN_POINTS.map(({ icon: Icon, title, problem, fix }) => (
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
                                        <span className="text-emerald-400 font-bold">Solution: </span>
                                        {fix}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================================================================
                SECTION 3: HOW IT WORKS (NO COMPLICATED TECH SETUP)
            ================================================================ */}
            <section className="py-20 md:py-28 bg-white">
                <div className="max-w-7xl mx-auto px-5 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-orange-500 text-xs font-bold uppercase tracking-widest">
                            Simple Ingestion Process
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
                            From Documents to Live AI Support in 3 Steps
                        </h2>
                        <p className="text-slate-500 mt-3 text-base">
                            No machine learning expertise or coding needed. If you have documentation, your bot is ready.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                        <div className="hidden md:block absolute top-14 left-[calc(16.66%+24px)] right-[calc(16.66%+24px)] h-px bg-gradient-to-r from-orange-200 via-orange-300 to-orange-200" aria-hidden />

                        {HOW_IT_WORKS_STEPS.map(({ step, icon: Icon, title, desc }) => (
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
                SECTION 4: GROUNDED CAPABILITIES BENTO
            ================================================================ */}
            <section className="py-20 md:py-28 bg-slate-50 border-y border-slate-200/80">
                <div className="max-w-7xl mx-auto px-5 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-orange-500 text-xs font-bold uppercase tracking-widest">
                            Honest &amp; Reliable Technical AI
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
                            Built to Protect Your Brand Reputation
                        </h2>
                        <p className="text-slate-500 mt-3 text-base">
                            We don't over-promise autonomous coding. We deliver accurate, document-grounded customer answers.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {GROUNDED_CAPABILITIES.map(({ icon: Icon, title, desc }) => (
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
                SECTION 5: SUPPORTED CONTENT & DOCUMENT FORMATS
            ================================================================ */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-5 lg:px-8 text-center">
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">
                        Works with Your Existing File Formats &amp; Platforms
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-3xl mx-auto">
                        {[
                            'PDF Product Manuals', 'DOCX / Word Guides', 'Website Documentation URLs',
                            'Notion Knowledge Bases', 'Zendesk Help Articles', 'Freshdesk Solutions',
                            'Markdown / GitHub Wiki', 'CSV / Excel FAQ Sheets', 'HubSpot Knowledge Base'
                        ].map((format) => (
                            <span
                                key={format}
                                className="px-4 py-2 bg-slate-50 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700"
                            >
                                {format}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================================================================
                SECTION 6: PERFORMANCE METRICS
            ================================================================ */}
            <section className="py-16 md:py-20 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
                <div className="max-w-7xl mx-auto px-5 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 text-center">
                        {[
                            { value: '70%+', label: 'Tier-1 Questions Resolved', sub: 'without bothering human staff' },
                            { value: '< 2s', label: 'Average Answer Speed', sub: 'instant step-by-step guidance' },
                            { value: '24/7', label: 'Support Availability', sub: 'even on weekends & holidays' },
                            { value: '48 Hrs', label: 'Typical Setup Time', sub: 'upload docs and test immediately' },
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
                            Simple Flat Pricing
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
                            Predictable Monthly Plans for Growing Businesses
                        </h2>
                        <p className="text-slate-500 mt-3 text-base">
                            No hidden per-ticket charges. Unlimited support conversations. Setup support included.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
                        {/* Free Tier */}
                        <div className="border border-slate-200 rounded-3xl p-7 flex flex-col justify-between">
                            <div>
                                <div className="text-slate-500 text-sm font-semibold mb-1">Free</div>
                                <div className="text-4xl font-black text-slate-900">₹0<span className="text-base font-normal text-slate-400">/mo</span></div>
                                <p className="text-slate-500 text-xs mt-2">Website live chat widget and basic CRM contact sync.</p>
                                <ul className="space-y-2.5 my-6 text-sm text-slate-600">
                                    <li className="flex items-center gap-2">
                                        <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                                        Website live chat widget
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                                        1 Human support seat
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                                        HubSpot CRM contact sync
                                    </li>
                                    <li className="flex items-center gap-2 text-slate-400 line-through">
                                        <span className="text-slate-300">✕</span> AI Document / PDF RAG training
                                    </li>
                                    <li className="flex items-center gap-2 text-slate-400 line-through">
                                        <span className="text-slate-300">✕</span> WhatsApp Business integration
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
                                Most Popular for Support Teams
                            </div>
                            <div>
                                <div className="text-orange-600 text-sm font-bold mb-1">Growth Hub</div>
                                <div className="text-4xl font-black text-slate-900">₹1,999<span className="text-base font-normal text-slate-400">/mo</span></div>
                                <div className="text-xs text-slate-400 line-through mt-0.5">was ₹4,999/mo</div>
                                <p className="text-slate-500 text-xs mt-2">Full documentation ingestion with WhatsApp &amp; Web support.</p>
                                <ul className="space-y-2.5 my-6 text-sm text-slate-600">
                                    <li className="flex items-center gap-2">
                                        <Check className="w-4 h-4 text-orange-500 shrink-0" />
                                        Unlimited support conversations
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Check className="w-4 h-4 text-orange-500 shrink-0" />
                                        PDF, DOCX, URL Documentation upload
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Check className="w-4 h-4 text-orange-500 shrink-0" />
                                        Official WhatsApp Business + Web Widget
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Check className="w-4 h-4 text-orange-500 shrink-0" />
                                        Chapter citations &amp; exact source links
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Check className="w-4 h-4 text-orange-500 shrink-0" />
                                        10 Indian Languages &amp; Hinglish
                                    </li>
                                </ul>
                            </div>
                            <Link
                                href="/demo"
                                className="w-full text-center py-3.5 bg-orange-500 hover:bg-orange-600 text-white rounded-xl text-sm font-bold transition-colors shadow-md shadow-orange-200"
                            >
                                Book Demo with Your Docs →
                            </Link>
                        </div>

                        {/* Performance Pro */}
                        <div className="border border-slate-200 bg-slate-900 text-white rounded-3xl p-7 flex flex-col justify-between">
                            <div>
                                <div className="text-orange-400 text-sm font-bold mb-1">Performance Pro</div>
                                <div className="text-4xl font-black text-white">₹4,999<span className="text-base font-normal text-slate-400">/mo</span></div>
                                <div className="text-xs text-slate-500 line-through mt-0.5">was ₹9,999/mo</div>
                                <p className="text-slate-400 text-xs mt-2">Omnichannel presence with Telegram, custom bot persona &amp; SLA priority.</p>
                                <ul className="space-y-2.5 my-6 text-sm text-slate-300">
                                    <li className="flex items-center gap-2">
                                        <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                                        Everything in Growth Hub
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                                        Telegram + WhatsApp + Web Widget
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                                        Automated human escalation handoff
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                                        Custom bot tone &amp; company branding
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                                        Dedicated onboarding manager
                                    </li>
                                </ul>
                            </div>
                            <Link
                                href="/demo"
                                className="w-full text-center py-3.5 bg-white hover:bg-orange-50 text-slate-900 rounded-xl text-sm font-bold transition-colors"
                            >
                                Talk to Onboarding Specialist →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================================================================
                SECTION 8: FAQS
            ================================================================ */}
            <section className="py-20 md:py-24 bg-slate-50 border-t border-slate-200/80">
                <div className="max-w-3xl mx-auto px-5 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-slate-500 mt-3 text-base">
                            How the documentation AI works, updates, and handles technical queries.
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
                SECTION 9: FINAL CTA
            ================================================================ */}
            <section className="py-20 md:py-28 bg-white">
                <div className="max-w-4xl mx-auto px-5 lg:px-8 text-center">
                    <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 rounded-3xl p-10 md:p-16 relative overflow-hidden shadow-2xl text-white">
                        <div className="absolute top-0 right-0 w-72 h-72 bg-orange-500/10 blur-3xl rounded-full pointer-events-none" aria-hidden />

                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-orange-500/20 border border-orange-500/30 rounded-full text-orange-400 text-xs font-bold mb-6">
                                <Sparkles className="w-3.5 h-3.5" />
                                Try with Your Actual Product Manual
                            </div>

                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                                Ready to Put Your Documentation to Work?
                            </h2>

                            <p className="text-slate-300 text-base mb-8 max-w-xl mx-auto leading-relaxed">
                                Send us your product guide or troubleshooting PDF. In a 20-minute walkthrough, we will show you how SwanDigitals answers your exact customer questions in real time.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href="/demo"
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-2xl shadow-xl shadow-orange-950 transition-all text-base"
                                >
                                    Book Free Documentation Walkthrough
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                                <Link
                                    href="/pricing"
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 hover:bg-white/5 text-white font-semibold rounded-2xl transition-all text-base"
                                >
                                    View Pricing Plans
                                </Link>
                            </div>

                            <p className="text-slate-400 text-xs mt-6">
                                Works with PDFs, Word Docs, Notion &amp; Public URLs · Live in 48 Hours
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </SiteLayout>
    );
}
