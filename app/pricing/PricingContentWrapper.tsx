"use client";

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Check, Info, Shield, MessageSquare, Zap, Phone, HelpCircle } from 'lucide-react';
import FAQ from '@/components/ui/FAQ';

export default function PricingContentWrapper() {
    const searchParams = useSearchParams();
    const [activeProduct, setActiveProduct] = useState<'chatbot' | 'voicebot'>('chatbot');

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
        // Sync URL query parameter without causing page refresh
        const newUrl = `${window.location.pathname}?product=${prod}`;
        window.history.replaceState({ ...window.history.state, as: newUrl, url: newUrl }, '', newUrl);
    };

    const chatbotPlans = [
        {
            name: "Free",
            price: "₹0",
            period: "forever",
            description: "For individuals & businesses getting started with website live chat.",
            badge: null,
            icon: <MessageSquare className="w-6 h-6 text-orange-600" />,
            features: [
                "Website Live Chat Widget",
                "Conversations & Sessions: Unlimited",
                "Human Agent Seat: 1 Agent",
                "CRM Integration (HubSpot, Webhooks)",
                "Basic Lead Capture & Contact Forms",
                "Standard Email Support"
            ],
            exclusion: "Excludes AI auto-reply, WhatsApp / Omnichannel presence, and custom integrations.",
            cta: "Start Free",
            ctaLink: "https://chat.swandigitals.com"
        },
        {
            name: "Growth Hub",
            price: "₹1,999",
            period: "/month",
            description: "For D2C brands, retailers & early startups.",
            badge: null,
            icon: <Zap className="w-6 h-6 text-orange-600" />,
            features: [
                "Conversations & Sessions: Unlimited",
                "Human Agent Seats: Unlimited",
                "Channels: WhatsApp + Web Chat",
                "AI Chatbot: Knowledge base, auto-resolve, intent detection",
                "Integrations: Shopify, HubSpot, Zoho",
                "Meta Fees: 0% Markup Pass-Through",
                "Support: Standard Email & Chat"
            ],
            exclusion: "Excludes Voice AI, telephony trunking, and custom ERP integrations.",
            cta: "Deploy Growth Hub",
            ctaLink: "/demo"
        },
        {
            name: "Performance Pro",
            price: "₹4,999",
            period: "/month",
            description: "For marketing teams, lead-gen pipelines & active support desks.",
            badge: "MOST POPULAR",
            icon: <Shield className="w-6 h-6 text-orange-600" />,
            features: [
                "Everything in Growth Hub, plus:",
                "All Channels: WhatsApp, Web, Email, Instagram, Telegram, Facebook, SMS",
                "Visual Flow Builder: Drag-and-drop branching logic",
                "Advanced Integrations: Custom API & REST nodes",
                "Built-in Calculators: Lead-gen & eligibility forms",
                "Automation Rules & Macros",
                "SLA Management",
                "Advanced Analytics & Reporting",
                "Meta Fees: 0% Markup Pass-Through",
                "Support: Priority WhatsApp Support"
            ],
            exclusion: "Excludes Voice AI runtime and non-standard REST integrations.",
            cta: "Activate Performance Pro",
            ctaLink: "/demo",
            highlighted: true
        }
    ];

    const voicePlans = [
        {
            name: "Pay-as-you-go",
            price: "₹5.00",
            period: "/minute",
            description: "For testing, low-volume & seasonal needs.",
            badge: null,
            icon: <Phone className="w-6 h-6 text-orange-600" />,
            features: [
                "No monthly commitment",
                "10 Indian Languages (Hindi, Tamil, Telugu, Marathi, Bengali + more)",
                "Inbound & Outbound Calling",
                "Call Recording & Transcription",
                "Live Agent Transfer",
                "Fast, natural voice conversations",
                "Post-Call Summary in SwanDigitals Inbox",
                "Support: Standard Email & Chat"
            ],
            exclusion: "Excludes AI Chatbot channels. Add any chatbot plan for omnichannel.",
            cta: "Start Pay-as-you-go",
            ctaLink: "/demo"
        },
        {
            name: "Committed Usage",
            price: "₹4.00",
            period: "/minute",
            qualifier: "Min 5,000 mins/month commitment",
            description: "For steady inbound/outbound operations.",
            badge: "BEST VALUE",
            icon: <Zap className="w-6 h-6 text-orange-600" />,
            features: [
                "Everything in Pay-as-you-go, plus:",
                "20% Savings vs Pay-as-you-go",
                "Dedicated Phone Number",
                "Priority Call Routing",
                "Post-Call Analytics Dashboard",
                "CRM Sync on Every Call",
                "Support: Priority WhatsApp Support"
            ],
            exclusion: "Excludes AI Chatbot modules. Minimum 5,000 minutes/month.",
            cta: "Lock in Committed Rate",
            ctaLink: "/demo",
            highlighted: true
        },
        {
            name: "Enterprise Voice",
            price: "Custom Pricing",
            period: "",
            description: "For call centers, collections & enterprise telephony.",
            badge: "HIGH VOLUME",
            icon: <Shield className="w-6 h-6 text-orange-600" />,
            features: [
                "Everything in Committed Usage, plus:",
                "Volume Discounts Available",
                "Multiple Dedicated Numbers",
                "Custom Voice Personas",
                "Higher concurrent call capacity",
                "Custom onboarding & call flows",
                "Named Solutions Engineer",
                "24/7 Dedicated Support"
            ],
            exclusion: "Specialized NLU fine-tuning quoted separately.",
            cta: "Talk to Voice AI Team",
            ctaLink: "/contact"
        }
    ];

    const faqs = [
        {
            question: "What happens if I need both chatbot and voice?",
            answer: "Pick any chatbot plan + any voice plan. They work together — every voice call lands in your SwanDigitals inbox alongside WhatsApp and email conversations."
        },
        {
            question: "Are there any setup fees?",
            answer: "We scope setup based on your requirements during onboarding. The monthly prices above are your recurring platform fees."
        },
        {
            question: "How does the Meta 0% markup work?",
            answer: "WhatsApp conversations incur Meta's official fees. We pass these through at cost — zero markup, zero hidden charges. You pay exactly what Meta charges."
        },
        {
            question: "Where is my data stored?",
            answer: "Your conversation data and logs are hosted in India, and we're built to be aware of the DPDP Act 2023. There's no lock-in — you can export your data whenever you want."
        },
        {
            question: "What's the refundable pilot?",
            answer: "Pay ₹10,000 one-time for a 4-6 week proof-of-value. If you convert to any monthly plan within 3 months, the full amount is credited."
        },
        {
            question: "Do voice minutes roll over?",
            answer: "On Committed Usage plans, unused minutes do not roll over. We right-size your commitment during onboarding so you're not overpaying."
        }
    ];

    return (
        <div id="plans" className="relative">
            {/* Sticky Pilot Banner */}
            <div className="bg-orange-50 border-b border-orange-200/80 sticky top-16 z-40 py-3 shadow-sm">
                <div className="max-w-7xl mx-auto px-5 lg:px-8 text-center flex flex-col sm:flex-row items-center justify-center gap-2 text-sm text-orange-900 font-semibold">
                    <span>💡 Not sure yet? Start with a ₹10,000 refundable pilot — credited against your first 3 months.</span>
                    <Link href="/demo" className="text-orange-600 hover:text-orange-700 underline font-bold shrink-0">
                        Request Pilot Demo &rarr;
                    </Link>
                </div>
            </div>

            <div className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-5 lg:px-8">
                    {/* Centered Glassmorphism Product Switch */}
                    <div className="text-center mb-16">
                        <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">SELECT CORE PLATFORM MODULE</p>
                        <div className="inline-flex bg-slate-200/60 backdrop-blur-md border border-slate-300/50 p-1.5 rounded-full relative w-[320px] shadow-inner select-none">
                            {/* Animated Background Capsule */}
                            <div 
                                className="absolute top-1.5 bottom-1.5 left-1.5 rounded-full bg-orange-500 shadow-md transition-all duration-300 ease-out"
                                style={{
                                    width: 'calc(50% - 6px)',
                                    transform: activeProduct === 'chatbot' ? 'translateX(0)' : 'translateX(100%)'
                                }}
                            />
                            <button 
                                onClick={() => handleProductChange('chatbot')}
                                className={`flex-1 py-2 text-sm font-bold rounded-full relative z-10 transition-colors ${
                                    activeProduct === 'chatbot' ? 'text-white' : 'text-slate-600 hover:text-slate-900'
                                }`}
                            >
                                AI Chatbot
                            </button>
                            <button 
                                onClick={() => handleProductChange('voicebot')}
                                className={`flex-1 py-2 text-sm font-bold rounded-full relative z-10 transition-colors ${
                                    activeProduct === 'voicebot' ? 'text-white' : 'text-slate-600 hover:text-slate-900'
                                }`}
                            >
                                Voice AI
                            </button>
                        </div>
                    </div>

                    {/* Cards Grid Swap */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch mb-20">
                        {activeProduct === 'chatbot' ? (
                            chatbotPlans.map((plan, i) => (
                                <div 
                                    key={i} 
                                    className={`bg-white rounded-3xl p-8 border-2 flex flex-col justify-between hover:shadow-xl transition-all duration-300 relative ${
                                        plan.highlighted ? 'border-orange-500 ring-4 ring-orange-500/10' : 'border-slate-200/80'
                                    }`}
                                >
                                    {plan.badge && (
                                        <span className={`absolute -top-3.5 left-6 text-[10px] font-bold tracking-widest px-3 py-1 rounded-full text-white ${
                                            plan.highlighted ? 'bg-orange-500' : 'bg-slate-800'
                                        }`}>
                                            {plan.badge}
                                        </span>
                                    )}

                                    <div>
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="p-3 bg-orange-50 rounded-2xl w-fit">
                                                {plan.icon}
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
                                                <p className="text-xs text-slate-500 font-semibold">{plan.description}</p>
                                            </div>
                                        </div>

                                        <div className="mb-8 flex items-baseline gap-1">
                                            <span className="text-4xl font-extrabold text-slate-900">{plan.price}</span>
                                            <span className="text-slate-500 text-sm font-semibold">{plan.period}</span>
                                        </div>

                                        <div className="border-t border-slate-100 pt-6 mb-8">
                                            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Features</h4>
                                            <ul className="space-y-3">
                                                {plan.features.map((feat, idx) => (
                                                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                                                        <Check className="w-4.5 h-4.5 text-green-500 shrink-0 mt-0.5" />
                                                        <span>{feat}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    <div>
                                        <p className="text-[11px] font-medium text-slate-400 italic mb-5 leading-normal">
                                            ⚠️ {plan.exclusion}
                                        </p>
                                        <Link 
                                            href={plan.ctaLink} 
                                            target={plan.ctaLink.startsWith('http') ? '_blank' : undefined}
                                            rel={plan.ctaLink.startsWith('http') ? 'noopener noreferrer' : undefined}
                                            className={`w-full block text-center py-3.5 px-6 rounded-xl font-bold text-sm shadow-md transition-all ${
                                                plan.highlighted 
                                                    ? 'bg-orange-500 hover:bg-orange-600 text-white' 
                                                    : 'bg-slate-900 hover:bg-slate-800 text-white'
                                            }`}
                                        >
                                            {plan.cta}
                                        </Link>
                                    </div>
                                </div>
                            ))
                        ) : (
                            voicePlans.map((plan, i) => (
                                <div 
                                    key={i} 
                                    className={`bg-white rounded-3xl p-8 border-2 flex flex-col justify-between hover:shadow-xl transition-all duration-300 relative ${
                                        plan.highlighted ? 'border-orange-500 ring-4 ring-orange-500/10' : 'border-slate-200/80'
                                    }`}
                                >
                                    {plan.badge && (
                                        <span className={`absolute -top-3.5 left-6 text-[10px] font-bold tracking-widest px-3 py-1 rounded-full text-white ${
                                            plan.highlighted ? 'bg-orange-500' : 'bg-slate-800'
                                        }`}>
                                            {plan.badge}
                                        </span>
                                    )}

                                    <div>
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="p-3 bg-orange-50 rounded-2xl w-fit">
                                                {plan.icon}
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
                                                <p className="text-xs text-slate-500 font-semibold">{plan.description}</p>
                                            </div>
                                        </div>

                                        <div className="mb-2 flex items-baseline gap-1">
                                            <span className="text-4xl font-extrabold text-slate-900">{plan.price}</span>
                                            <span className="text-slate-500 text-sm font-semibold">{plan.period}</span>
                                        </div>

                                        {plan.qualifier && (
                                            <p className="text-xs text-orange-600 font-semibold mb-6">{plan.qualifier}</p>
                                        )}

                                        <div className="border-t border-slate-100 pt-6 mb-8 mt-2">
                                            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Features</h4>
                                            <ul className="space-y-3">
                                                {plan.features.map((feat, idx) => (
                                                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                                                        <Check className="w-4.5 h-4.5 text-green-500 shrink-0 mt-0.5" />
                                                        <span>{feat}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    <div>
                                        <p className="text-[11px] font-medium text-slate-400 italic mb-5 leading-normal">
                                            ⚠️ {plan.exclusion}
                                        </p>
                                        <Link 
                                            href={plan.ctaLink} 
                                            className={`w-full block text-center py-3.5 px-6 rounded-xl font-bold text-sm shadow-md transition-all ${
                                                plan.highlighted 
                                                    ? 'bg-orange-500 hover:bg-orange-600 text-white' 
                                                    : 'bg-slate-900 hover:bg-slate-800 text-white'
                                            }`}
                                        >
                                            {plan.cta}
                                        </Link>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    {/* Interactive Cross-Sell Banner */}
                    <div className="max-w-4xl mx-auto mb-20 bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-3xl p-8 border border-slate-800 text-center shadow-xl">
                        {activeProduct === 'chatbot' ? (
                            <div>
                                <p className="text-sm font-bold uppercase tracking-wider text-orange-400 mb-2">Omnichannel Capabilities</p>
                                <h3 className="text-2xl font-bold mb-4">Need Phone Support Too?</h3>
                                <p className="text-slate-300 text-sm mb-6 max-w-xl mx-auto">
                                    Add high-performance AI Voice capabilities to any plan. Make and receive calls natively within the same unified dashboard.
                                </p>
                                <button 
                                    onClick={() => handleProductChange('voicebot')}
                                    className="px-6 py-2.5 bg-orange-500 hover:bg-orange-600 text-white rounded-full text-xs font-bold transition-all shadow-md"
                                >
                                    Switch to Voice AI Pricing &rarr;
                                </button>
                            </div>
                        ) : (
                            <div>
                                <p className="text-sm font-bold uppercase tracking-wider text-orange-400 mb-2">Unified Inboxes</p>
                                <h3 className="text-2xl font-bold mb-4">Need Chat & WhatsApp?</h3>
                                <p className="text-slate-300 text-sm mb-6 max-w-xl mx-auto">
                                    Add premium WhatsApp, web, and social media chatbot modules to cover your entire customer contact surface.
                                </p>
                                <button 
                                    onClick={() => handleProductChange('chatbot')}
                                    className="px-6 py-2.5 bg-orange-500 hover:bg-orange-600 text-white rounded-full text-xs font-bold transition-all shadow-md"
                                >
                                    Switch to AI Chatbot Pricing &rarr;
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Feature Comparison Table */}
                    <div className="max-w-5xl mx-auto bg-white rounded-3xl border border-slate-200/80 p-8 shadow-sm mb-20 overflow-hidden">
                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-bold text-slate-900">Compare Dynamic Features</h3>
                            <p className="text-slate-500 text-sm mt-1">Deep analysis of standard plan parameters and core platform modules.</p>
                        </div>

                        <div className="overflow-x-auto">
                            {activeProduct === 'chatbot' ? (
                                <table className="w-full text-left border-collapse min-w-[600px]">
                                    <thead>
                                        <tr className="border-b-2 border-slate-100 text-slate-400 uppercase tracking-widest text-[10px] font-bold">
                                            <th className="pb-4">Core Feature</th>
                                            <th className="pb-4 text-center">Free</th>
                                            <th className="pb-4 text-center">Growth Hub</th>
                                            <th className="pb-4 text-center text-orange-600">Performance Pro</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-sm text-slate-700 divide-y divide-slate-100">
                                        <tr>
                                            <td className="py-4 font-semibold text-slate-900">Monthly Price</td>
                                            <td className="py-4 text-center font-bold text-slate-900">₹0</td>
                                            <td className="py-4 text-center font-bold text-slate-900">₹1,999</td>
                                            <td className="py-4 text-center font-bold text-orange-600">₹4,999</td>
                                        </tr>
                                        <tr>
                                            <td className="py-4 font-semibold text-slate-900">Website Integration</td>
                                            <td className="py-4 text-center text-green-500 font-bold">✓</td>
                                            <td className="py-4 text-center text-green-500 font-bold">✓</td>
                                            <td className="py-4 text-center text-green-500 font-bold">✓</td>
                                        </tr>
                                        <tr>
                                            <td className="py-4 font-semibold text-slate-900">CRM Integration</td>
                                            <td className="py-4 text-center text-green-500 font-bold">✓ (HubSpot, Webhooks)</td>
                                            <td className="py-4 text-center text-green-500 font-bold">✓ (Shopify, HubSpot, Zoho)</td>
                                            <td className="py-4 text-center text-green-500 font-bold">✓ (Custom API, CRM, ERP)</td>
                                        </tr>
                                        <tr>
                                            <td className="py-4 font-semibold text-slate-900">Conversations</td>
                                            <td className="py-4 text-center font-medium">Unlimited</td>
                                            <td className="py-4 text-center font-medium">Unlimited</td>
                                            <td className="py-4 text-center font-medium">Unlimited</td>
                                        </tr>
                                        <tr>
                                            <td className="py-4 font-semibold text-slate-900">Agent Seats</td>
                                            <td className="py-4 text-center font-medium">1 Seat</td>
                                            <td className="py-4 text-center font-medium">Unlimited</td>
                                            <td className="py-4 text-center font-medium">Unlimited</td>
                                        </tr>
                                        <tr>
                                            <td className="py-4 font-semibold text-slate-900">Channels</td>
                                            <td className="py-4 text-center font-medium">Web Only</td>
                                            <td className="py-4 text-center font-medium">WhatsApp + Web</td>
                                            <td className="py-4 text-center font-medium">All (7+)</td>
                                        </tr>
                                        <tr>
                                            <td className="py-4 font-semibold text-slate-900">AI Chatbot & Knowledge Base</td>
                                            <td className="py-4 text-center text-slate-300">—</td>
                                            <td className="py-4 text-center text-green-500 font-bold">✓</td>
                                            <td className="py-4 text-center text-green-500 font-bold">✓</td>
                                        </tr>
                                        <tr>
                                            <td className="py-4 font-semibold text-slate-900">Visual Flow Builder</td>
                                            <td className="py-4 text-center text-slate-300">—</td>
                                            <td className="py-4 text-center text-slate-300">—</td>
                                            <td className="py-4 text-center text-green-500 font-bold">✓</td>
                                        </tr>
                                        <tr>
                                            <td className="py-4 font-semibold text-slate-900">Automation Rules</td>
                                            <td className="py-4 text-center text-slate-300">—</td>
                                            <td className="py-4 text-center text-slate-300">—</td>
                                            <td className="py-4 text-center text-green-500 font-bold">✓</td>
                                        </tr>
                                        <tr>
                                            <td className="py-4 font-semibold text-slate-900">SLA Management</td>
                                            <td className="py-4 text-center text-slate-300">—</td>
                                            <td className="py-4 text-center text-slate-300">—</td>
                                            <td className="py-4 text-center text-green-500 font-bold">✓</td>
                                        </tr>
                                        <tr>
                                            <td className="py-4 font-semibold text-slate-900">Advanced Analytics</td>
                                            <td className="py-4 text-center text-slate-300">—</td>
                                            <td className="py-4 text-center text-slate-300">—</td>
                                            <td className="py-4 text-center text-green-500 font-bold">✓</td>
                                        </tr>
                                        <tr>
                                            <td className="py-4 font-semibold text-slate-900">Custom API Nodes</td>
                                            <td className="py-4 text-center text-slate-300">—</td>
                                            <td className="py-4 text-center text-slate-300">—</td>
                                            <td className="py-4 text-center text-green-500 font-bold">✓</td>
                                        </tr>
                                        <tr>
                                            <td className="py-4 font-semibold text-slate-900">Meta Fee Markup</td>
                                            <td className="py-4 text-center text-slate-300">N/A</td>
                                            <td className="py-4 text-center font-bold text-slate-900">0%</td>
                                            <td className="py-4 text-center font-bold text-slate-900">0%</td>
                                        </tr>
                                    </tbody>
                                </table>
                            ) : (
                                <table className="w-full text-left border-collapse min-w-[600px]">
                                    <thead>
                                        <tr className="border-b-2 border-slate-100 text-slate-400 uppercase tracking-widest text-[10px] font-bold">
                                            <th className="pb-4">Core Feature</th>
                                            <th className="pb-4 text-center">Pay-as-you-go</th>
                                            <th className="pb-4 text-center">Committed</th>
                                            <th className="pb-4 text-center text-orange-600">Enterprise</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-sm text-slate-700 divide-y divide-slate-100">
                                        <tr>
                                            <td className="py-4 font-semibold text-slate-900">Per-Minute Rate</td>
                                            <td className="py-4 text-center font-semibold text-slate-900">₹5.00</td>
                                            <td className="py-4 text-center font-semibold text-slate-900">₹4.00</td>
                                            <td className="py-4 text-center font-semibold text-orange-600">Custom</td>
                                        </tr>
                                        <tr>
                                            <td className="py-4 font-semibold text-slate-900">Minimum Commitment</td>
                                            <td className="py-4 text-center font-medium">None</td>
                                            <td className="py-4 text-center font-medium">5,000 mins/mo</td>
                                            <td className="py-4 text-center font-medium">Custom</td>
                                        </tr>
                                        <tr>
                                            <td className="py-4 font-semibold text-slate-900">Indian Languages</td>
                                            <td className="py-4 text-center font-medium">10</td>
                                            <td className="py-4 text-center font-medium">10</td>
                                            <td className="py-4 text-center font-medium">10</td>
                                        </tr>
                                        <tr>
                                            <td className="py-4 font-semibold text-slate-900">Inbound + Outbound</td>
                                            <td className="py-4 text-center text-green-500 font-bold">✓</td>
                                            <td className="py-4 text-center text-green-500 font-bold">✓</td>
                                            <td className="py-4 text-center text-green-500 font-bold">✓</td>
                                        </tr>
                                        <tr>
                                            <td className="py-4 font-semibold text-slate-900">Recording & Transcript</td>
                                            <td className="py-4 text-center text-green-500 font-bold">✓</td>
                                            <td className="py-4 text-center text-green-500 font-bold">✓</td>
                                            <td className="py-4 text-center text-green-500 font-bold">✓</td>
                                        </tr>
                                        <tr>
                                            <td className="py-4 font-semibold text-slate-900">Agent Transfer</td>
                                            <td className="py-4 text-center text-green-500 font-bold">✓</td>
                                            <td className="py-4 text-center text-green-500 font-bold">✓</td>
                                            <td className="py-4 text-center text-green-500 font-bold">✓</td>
                                        </tr>
                                        <tr>
                                            <td className="py-4 font-semibold text-slate-900">Dedicated Number</td>
                                            <td className="py-4 text-center text-slate-300">—</td>
                                            <td className="py-4 text-center text-green-500 font-bold">✓</td>
                                            <td className="py-4 text-center font-medium">Multiple</td>
                                        </tr>
                                        <tr>
                                            <td className="py-4 font-semibold text-slate-900">CRM Sync</td>
                                            <td className="py-4 text-center text-slate-300">—</td>
                                            <td className="py-4 text-center text-green-500 font-bold">✓</td>
                                            <td className="py-4 text-center text-green-500 font-bold">✓</td>
                                        </tr>
                                        <tr>
                                            <td className="py-4 font-semibold text-slate-900">Analytics Dashboard</td>
                                            <td className="py-4 text-center text-slate-300">—</td>
                                            <td className="py-4 text-center text-green-500 font-bold">✓</td>
                                            <td className="py-4 text-center text-green-500 font-bold">✓</td>
                                        </tr>
                                        <tr>
                                            <td className="py-4 font-semibold text-slate-900">Higher Call Concurrency</td>
                                            <td className="py-4 text-center text-slate-300">—</td>
                                            <td className="py-4 text-center text-slate-300">—</td>
                                            <td className="py-4 text-center text-green-500 font-bold">✓</td>
                                        </tr>
                                        <tr>
                                            <td className="py-4 font-semibold text-slate-900">Custom Personas</td>
                                            <td className="py-4 text-center text-slate-300">—</td>
                                            <td className="py-4 text-center text-slate-300">—</td>
                                            <td className="py-4 text-center text-green-500 font-bold">✓</td>
                                        </tr>
                                        <tr>
                                            <td className="py-4 font-semibold text-slate-900">Named Engineer</td>
                                            <td className="py-4 text-center text-slate-300">—</td>
                                            <td className="py-4 text-center text-slate-300">—</td>
                                            <td className="py-4 text-center text-green-500 font-bold">✓</td>
                                        </tr>
                                    </tbody>
                                </table>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Structured FAQ Section */}
            <FAQ items={faqs} />

            {/* Final CTA */}
            <section className="py-20 bg-gradient-to-r from-orange-500 to-pink-500 text-white text-center">
                <div className="max-w-4xl mx-auto px-5 lg:px-8">
                    <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Customer Operations?</h2>
                    <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto font-medium">
                        Schedule a dedicated strategy demo, explore local container parameters, or construct a risk-free refundable pilot.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/demo" className="px-8 py-4 bg-white text-slate-900 rounded-full font-bold text-lg hover:scale-105 shadow-xl transition-all">
                            Book Live Platform Demo
                        </Link>
                        <Link href="/contact" className="px-8 py-4 bg-slate-900/40 hover:bg-slate-900/60 border border-white/20 text-white rounded-full font-bold text-lg transition-all">
                            Contact Solutions Team
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
