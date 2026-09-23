"use client";

import React, { useState } from 'react';
import SiteLayout from '@/components/layout/SiteLayout';
import Hero from '@/components/ui/Hero';
import Link from 'next/link';
import FAQ from '@/components/ui/FAQ';
import { MapPin, Shield, CheckCircle, ArrowRight, Server, MessageSquare, Phone, Code, Database, Zap } from 'lucide-react';

interface LocationPageProps {
    city: string;
    state: string;
    ecosystemDesc: string;
    industryFocus: string;
    localTerm: string;
    languageNotes: string;
    painPoint: string;
    stats: { value: string; label: string }[];
    useCases: { title: string; desc: string; icon: React.ReactNode }[];
}

export default function LocationPageTemplate({
    city,
    state,
    ecosystemDesc,
    industryFocus,
    localTerm,
    languageNotes,
    painPoint,
    stats,
    useCases
}: LocationPageProps) {
    const [activeTab, setActiveTab] = useState<'chat' | 'voice'>('chat');

    // Determine ICP details based on city
    const isTech = ['pune', 'bangalore'].includes(city.toLowerCase().trim());
    const isBfsi = ['mumbai', 'delhi ncr', 'delhi'].includes(city.toLowerCase().trim());
    
    let icpFocusTitle = "";
    let icpFocusText = "";
    let localFrictionText = "";

    if (isTech) {
        icpFocusTitle = "Engineered for Hinjewadi & Silicon Valley Tech Teams";
        icpFocusText = "Connect agents directly to your Docker containers, local API endpoints, and n8n webhooks. Deploy updates at Git speed without exposing staging keys.";
        localFrictionText = `For high-growth ${city} teams, engineering velocity is everything. Standard SaaS chatbots isolate conversations in external silos. SwanDigitals integrates directly with your production databases and local APIs, removing platform noise and allowing product teams to build secure, low-latency loops.`;
    } else if (isBfsi) {
        icpFocusTitle = `Built for ${city}'s Growing Businesses`;
        icpFocusText = "Data hosted in India, built with DPDP 2023 in mind. No lock-in, cancel anytime.";
        localFrictionText = `In the busy business hubs of ${city}, data security and quick answers matter. SwanDigitals keeps customer conversations hosted in India, so sensitive customer details never cross borders or feed public model training sets.`;
    } else {
        // Corporate / Operations / Retail
        icpFocusTitle = "Optimized for HITEC City & Chennai Industrial Operations";
        icpFocusText = "Slash operational overheads and automate complex multi-lingual customer queries with AI trained on your own documents.";
        localFrictionText = `For corporate operators in ${city}, managing distributed supply chain networks and multi-lingual customer communications is a major operational bottleneck. SwanDigitals automates the majority of routine inquiries, letting your core operations focus on the escalations that matter.`;
    }

    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://swandigitals.com'
            },
            {
                '@type': 'ListItem',
                position: 2,
                name: `AI Chatbots in ${city}`,
                item: `https://swandigitals.com/${city.toLowerCase().replace(' ncr', '')}`
            }
        ]
    };

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
            {
                '@type': 'Question',
                name: "Can the AI Agent handle localized multi-language (Hinglish/Regional) interactions?",
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: `Yes. Our NLU is natively trained on Indian code-switching patterns (Hinglish, Tamil-English, Telugu-English) and supports fluent conversations in English, Hindi, and ${languageNotes}. It preserves context even when users switch scripts or use colloquial regional terms.`
                }
            },
            {
                '@type': 'Question',
                name: "How does the platform keep customer data secure and private?",
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: "SwanDigitals is a cloud-hosted platform with your data hosted in India, built with DPDP 2023 in mind. Your conversations are never used to train public AI models, and there's no long-term lock-in — you can export your data and leave anytime."
                }
            },
            {
                '@type': 'Question',
                name: "Do I need any special infrastructure to use the Voicebot agent?",
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: "No — SwanVoice is fully cloud-hosted, so there's nothing to install or maintain on your end. We handle the telephony setup and connect your dedicated number, and you're live in about a week."
                }
            }
        ]
    };

    const faqs = [
        {
            question: "Can the AI Agent handle localized multi-language (Hinglish/Regional) interactions?",
            answer: `Yes. Our NLU is natively trained on Indian code-switching patterns (Hinglish, Tamil-English, Telugu-English) and supports fluent conversations in English, Hindi, and ${languageNotes}. It preserves context even when users switch scripts.`
        },
        {
            question: "How does the platform keep customer data secure and private?",
            answer: "SwanDigitals is a cloud-hosted platform with your data hosted in India, built with DPDP 2023 in mind. Your conversations are never used to train public AI models, and there's no long-term lock-in — you can export your data and leave anytime."
        },
        {
            question: "Do I need any special infrastructure to use the Voicebot agent?",
            answer: "No — SwanVoice is fully cloud-hosted, so there's nothing to install or maintain on your end. We handle the telephony setup and connect your dedicated number, and you're live in about a week."
        }
    ];

    return (
        <SiteLayout>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            {/* Section A: The Hero Section (Above the Fold) */}
            <Hero
                badge={`📍 ${city} Edition`}
                title={`${city}-First Autonomous AI Employees for High-Growth Teams`}
                subtitle={`Set up AI Chatbots and Voicebot Agents that handle customer interactions, scheduling, and outbound qualification — hosted in India, live in about a week.`}
                primaryCTA={{ text: "Deploy Free Staging Prototype", href: "/demo" }}
                secondaryCTA={{ text: "Calculate ROI", href: "/roi-calculator" }}
            />

            {/* Section B: City Context Layer (Localized Friction Identification) */}
            <section className="py-20 lg:py-28 bg-slate-50/60 border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-5 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                        <div className="lg:col-span-7 space-y-6 text-left">
                            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-orange-50 text-orange-600 border border-orange-100 rounded-full text-xs font-semibold">
                                <MapPin className="w-3.5 h-3.5" />
                                {city}, {state}
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
                                Solving Local Operations Friction in {city}
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                {ecosystemDesc}
                            </p>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                {localFrictionText}
                            </p>
                        </div>
                        <div className="lg:col-span-5 bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-card space-y-6 text-left">
                            <h3 className="font-bold text-xl text-slate-900 tracking-tight">{icpFocusTitle}</h3>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                {icpFocusText}
                            </p>
                            <div className="pt-5 border-t border-slate-100 space-y-3.5">
                                <div className="flex items-center gap-3 text-xs text-slate-500">
                                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                                    <span>Supports {languageNotes} and Hinglish code-switching</span>
                                </div>
                                <div className="flex items-center gap-3 text-xs text-slate-500">
                                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                                    <span>DPDP 2023 aware, data hosted in India</span>
                                </div>
                                <div className="flex items-center gap-3 text-xs text-slate-500">
                                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                                    <span>100% data hosted in India, no lock-in</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section C: Dual-Force Capabilities (Chat vs. Voice) & Sandbox Ingestion Stream */}
            <section className="py-20 lg:py-28 bg-white">
                <div className="max-w-7xl mx-auto px-5 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase text-orange-600 bg-orange-50 border border-orange-100 rounded-full mb-4">
                            Dual-Force Capabilities
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
                            One Platform. Twin Capabilities.
                        </h2>
                        <p className="text-lg text-slate-600 mt-4 leading-relaxed">
                            Switch seamlessly between text chatbots and voicebots. Built on a shared memory layer for complete conversation context sync.
                        </p>
                    </div>

                    {/* Hardware-Accelerated Tab Switcher */}
                    <div className="flex justify-center mb-12">
                        <div className="relative bg-slate-100 p-1.5 rounded-full flex w-80 border border-slate-200 shadow-inner">
                            {/* Sliding Background indicator using transform: translateX */}
                            <div 
                                className="absolute top-1.5 bottom-1.5 left-1.5 w-[calc(50%-6px)] bg-slate-900 rounded-full transition-transform duration-300 ease-out pointer-events-none z-0"
                                style={{ transform: `translateX(${activeTab === 'chat' ? '0%' : '100%'})` }}
                            />
                            <button 
                                type="button"
                                onClick={() => setActiveTab('chat')}
                                className={`relative z-10 flex-1 py-2.5 text-xs font-semibold rounded-full transition-colors duration-200 cursor-pointer ${activeTab === 'chat' ? 'text-white' : 'text-slate-500'}`}
                            >
                                Text Chatbot
                            </button>
                            <button 
                                type="button"
                                onClick={() => setActiveTab('voice')}
                                className={`relative z-10 flex-1 py-2.5 text-xs font-semibold rounded-full transition-colors duration-200 cursor-pointer ${activeTab === 'voice' ? 'text-white' : 'text-slate-500'}`}
                            >
                                Voicebot Agent
                            </button>
                        </div>
                    </div>

                    {/* Sliding Panels (using CSS transform: translateX) */}
                    <div className="overflow-hidden w-full relative rounded-3xl border border-slate-200 shadow-card bg-slate-50/50">
                        <div 
                            className="flex w-[200%] transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(${activeTab === 'chat' ? '0%' : '-50%'})` }}
                        >
                            {/* Panel 1: Chatbot */}
                            <div className="w-1/2 flex-shrink-0 p-8 md:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                                <div className="lg:col-span-6 space-y-6 text-left">
                                    <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 shadow-sm">
                                        <MessageSquare className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 tracking-tight">Advanced Text Chatbots</h3>
                                    <p className="text-slate-600 leading-relaxed text-sm">
                                        Automate your lead qualification, patient scheduling, or supplier intake. Features customizable JSON schema validation and secure API webhooks to write directly back to your internal databases.
                                    </p>
                                    <ul className="space-y-3 text-xs text-slate-500">
                                        <li className="flex items-center gap-2.5"><CheckCircle className="w-4 h-4 text-orange-500 shrink-0" /> Real-time database update nodes</li>
                                        <li className="flex items-center gap-2.5"><CheckCircle className="w-4 h-4 text-orange-500 shrink-0" /> WhatsApp, Web Chat, and Instagram sync</li>
                                        <li className="flex items-center gap-2.5"><CheckCircle className="w-4 h-4 text-orange-500 shrink-0" /> Context memory across multiple visits</li>
                                    </ul>
                                </div>
                                <div className="lg:col-span-6">
                                    {/* Visual Sandbox Code Block with Ingest Wave Animation */}
                                    <div className="bg-slate-900 rounded-2xl p-6 md:p-8 font-mono text-[11px] text-slate-300 shadow-lg text-left relative overflow-hidden border border-slate-800">
                                        <div className="absolute top-3.5 right-4 flex items-center gap-2">
                                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                                            <span className="text-[9px] text-slate-500 tracking-wider font-semibold">INGESTING STREAM</span>
                                        </div>
                                        <div className="flex items-center gap-2 mb-4 text-[10px] text-slate-500 border-b border-slate-800 pb-2">
                                            <Database className="w-3.5 h-3.5 text-orange-500" />
                                            <span>local_knowledge_base.csv</span>
                                        </div>
                                        <div className="space-y-2 text-xs md:text-sm">
                                            <div><span className="text-orange-400">crawled_url:</span> "https://swandigitals.com/docs"</div>
                                            <div><span className="text-orange-400">embeddings_status:</span> "generating"</div>
                                            <div><span className="text-orange-400">chunks_processed:</span> 42 / 50 pages</div>
                                        </div>
                                        {/* Ingest Wave Animation */}
                                        <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                                            <div className="flex items-end gap-1.5 h-8">
                                                <div className="w-1.5 bg-orange-500 rounded-full animate-pulse h-4"></div>
                                                <div className="w-1.5 bg-orange-500 rounded-full animate-pulse h-6 [animation-delay:0.2s]"></div>
                                                <div className="w-1.5 bg-orange-500 rounded-full animate-pulse h-3 [animation-delay:0.4s]"></div>
                                                <div className="w-1.5 bg-orange-500 rounded-full animate-pulse h-7 [animation-delay:0.1s]"></div>
                                                <div className="w-1.5 bg-orange-500 rounded-full animate-pulse h-5 [animation-delay:0.3s]"></div>
                                            </div>
                                            <span className="text-[9px] text-orange-400 font-bold uppercase tracking-wider">Embeddings Sync Active</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Panel 2: Voicebot */}
                            <div className="w-1/2 flex-shrink-0 p-8 md:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                                <div className="lg:col-span-6 space-y-6 text-left">
                                    <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 shadow-sm">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 tracking-tight">Low-Latency Voice AI Agents</h3>
                                    <p className="text-slate-600 leading-relaxed text-sm">
                                        Deploy autonomous voice agents that dial prospects, answer inbound phone inquiries, and book calendar invites automatically. Features sub-second latency and local accent adaptability.
                                    </p>
                                    <ul className="space-y-3 text-xs text-slate-500">
                                        <li className="flex items-center gap-2.5"><CheckCircle className="w-4 h-4 text-orange-500 shrink-0" /> Vernacular voice synthesis (Hindi, English, Marathi, Tamil, Telugu)</li>
                                        <li className="flex items-center gap-2.5"><CheckCircle className="w-4 h-4 text-orange-500 shrink-0" /> Direct SIP and telecom trunk integrations</li>
                                        <li className="flex items-center gap-2.5"><CheckCircle className="w-4 h-4 text-orange-500 shrink-0" /> Automatic Google Calendar / CRM scheduler sync</li>
                                    </ul>
                                </div>
                                <div className="lg:col-span-6">
                                    <div className="bg-slate-900 rounded-2xl p-6 md:p-8 font-mono text-[11px] text-slate-300 shadow-lg text-left relative overflow-hidden border border-slate-800">
                                        <div className="absolute top-3.5 right-4 flex items-center gap-2">
                                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                                            <span className="text-[9px] text-slate-500 tracking-wider font-semibold">VOIP ACTIVE</span>
                                        </div>
                                        <div className="flex items-center gap-2 mb-4 text-[10px] text-slate-500 border-b border-slate-800 pb-2">
                                            <Code className="w-3.5 h-3.5 text-orange-500" />
                                            <span>voice_call_session.json</span>
                                        </div>
                                        <div className="space-y-2 text-xs md:text-sm">
                                            <div><span className="text-orange-400">call_status:</span> "connected"</div>
                                            <div><span className="text-orange-400">dialect:</span> "vernacular_indian_accent"</div>
                                            <div><span className="text-orange-400">intent_detected:</span> "schedule_visit"</div>
                                        </div>
                                        {/* Ingest Wave Animation */}
                                        <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                                            <div className="flex items-end gap-1.5 h-8">
                                                <div className="w-1.5 bg-emerald-500 rounded-full animate-pulse h-3"></div>
                                                <div className="w-1.5 bg-emerald-500 rounded-full animate-pulse h-5 [animation-delay:0.2s]"></div>
                                                <div className="w-1.5 bg-emerald-500 rounded-full animate-pulse h-2 [animation-delay:0.4s]"></div>
                                                <div className="w-1.5 bg-emerald-500 rounded-full animate-pulse h-6 [animation-delay:0.1s]"></div>
                                                <div className="w-1.5 bg-emerald-500 rounded-full animate-pulse h-4 [animation-delay:0.3s]"></div>
                                            </div>
                                            <span className="text-[9px] text-emerald-400 font-bold uppercase tracking-wider">SIP Connection Secure</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats section */}
            <section className="py-16 bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg">
                <div className="max-w-7xl mx-auto px-5 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {stats.map((stat, idx) => (
                            <div key={idx}>
                                <div className="text-4xl lg:text-5xl font-bold tracking-tight">{stat.value}</div>
                                <div className="text-white/90 text-xs lg:text-sm mt-2 font-medium tracking-wide uppercase">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section D: Data & Privacy (India-Hosted Focus) */}
            <section className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-500/10 via-transparent to-transparent pointer-events-none" />
                <div className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                        <div className="lg:col-span-7 space-y-6 text-left">
                            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase text-orange-400 bg-orange-400/10 border border-orange-400/20 rounded-full">
                                Data & Privacy
                            </span>
                            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight leading-tight">
                                Your Data, Hosted in India
                            </h2>
                            <p className="text-lg text-slate-300 leading-relaxed">
                                SwanDigitals is a cloud-hosted platform built for Indian businesses. Your customer conversations and data are hosted in India, built with DPDP 2023 in mind, and are never used to train public AI models.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                                <div className="flex gap-3">
                                    <Server className="w-5 h-5 text-orange-400 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-sm text-white">Hosted in India</h4>
                                        <p className="text-slate-400 text-xs mt-1 leading-relaxed">Your data stays on Indian cloud infrastructure — no cross-border transfers.</p>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <Shield className="w-5 h-5 text-orange-400 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-sm text-white">DPDP 2023 Aware</h4>
                                        <p className="text-slate-400 text-xs mt-1 leading-relaxed">Built with India's data protection law in mind, so you can adopt AI without compliance headaches.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-5 bg-slate-800/80 border border-slate-700/50 p-8 md:p-10 rounded-3xl space-y-6 relative overflow-hidden text-left shadow-2xl">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl"></div>
                            <h3 className="font-bold text-lg text-white">How We Host Your Data</h3>
                            <div className="space-y-4">
                                <div className="p-4 bg-slate-900 rounded-xl border border-slate-800">
                                    <div className="font-bold text-xs text-orange-400">Mode 01 — Cloud Hosting (India)</div>
                                    <p className="text-slate-400 text-[11px] mt-1.5 leading-relaxed">Your data is hosted on secure cloud infrastructure based in India.</p>
                                </div>
                                <div className="p-4 bg-slate-900 rounded-xl border border-slate-800">
                                    <div className="font-bold text-xs text-orange-400">Mode 02 — No Lock-In</div>
                                    <p className="text-slate-400 text-[11px] mt-1.5 leading-relaxed">Flat monthly pricing with no annual contracts. Export your data and leave anytime.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section E: Risk-Free Implementation Lifecycle */}
            <section className="py-20 lg:py-28 bg-slate-50/60 border-y border-slate-100">
                <div className="max-w-7xl mx-auto px-5 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase text-orange-600 bg-orange-50 border border-orange-100 rounded-full mb-4">
                            Implementation Timeline
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
                            Go Live in 7 Days
                        </h2>
                        <p className="text-lg text-slate-600 mt-4 leading-relaxed">
                            Risk-free setup with dedicated developer assistance. No long consulting contracts.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                        {/* Timeline Connector Line */}
                        <div className="hidden md:block absolute top-12 left-20 right-20 h-0.5 bg-slate-200 -z-10"></div>
                        {[
                            { step: "Day 01", title: "Context Data Mapping", desc: "Our solutions engineers scan your documentation, FAQ sheets, and local DB variables to establish the context schema." },
                            { step: "Day 03", title: "Staging Prototype Assembly", desc: "We deploy a fully functional staging chatbot or voice sandbox within your designated private testing network." },
                            { step: "Day 07", title: "Secure Production Execution", desc: "Production launch with active compliance monitoring, direct CRM system connection, and analytics setup." }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white border border-slate-100 rounded-2xl p-7 shadow-card hover:shadow-card-hover transition-all duration-300 text-left relative mt-4 md:mt-0">
                                <div className="absolute -top-4 left-6 bg-orange-500 text-white font-bold text-xs px-3.5 py-1 rounded-full shadow-md">
                                    {item.step}
                                </div>
                                <h3 className="font-bold text-lg text-slate-900 mt-3 mb-3">{item.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section F: High-Intent FAQ Layer (GEO & LLM Retrieval Optimized) */}
            <section className="py-20 lg:py-28 bg-white">
                <div className="max-w-4xl mx-auto px-5 lg:px-8">
                    <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-slate-900 tracking-tight">
                        Frequently Asked Questions in {city}
                    </h2>
                    <FAQ items={faqs} />
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-900 to-purple-900 text-white">
                <div className="max-w-4xl mx-auto px-5 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Transform Your Customer Operations in {city}</h2>
                    <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Talk to our solutions team to set up secure AI chatbots that integrate directly with your databases and workflows.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/demo" className="px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full font-semibold text-lg shadow-xl hover:scale-105 transition-all">
                            Deploy Free Staging Prototype
                        </Link>
                        <Link href="/contact" className="px-8 py-4 border border-white/30 text-white hover:bg-white/10 rounded-full font-semibold text-lg transition-all">
                            Contact Office
                        </Link>
                    </div>
                </div>
            </section>
        </SiteLayout>
    );
}
