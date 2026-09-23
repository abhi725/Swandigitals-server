"use client";

import SiteLayout from '@/components/layout/SiteLayout';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { 
    Landmark, ShieldCheck, Lock, Server, FileText, CheckCircle2, 
    ArrowRight, ChevronRight, PhoneCall, Bot, Zap, Users, BarChart3, Clock, AlertTriangle 
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

export default function BankingContent() {
    const heroRef = useReveal();
    const contentRef = useReveal();
    const ctaRef = useReveal();
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    const bfsiUseCases = [
        {
            icon: <Lock className="w-6 h-6 text-emerald-500" />,
            title: "OTP & Balance Inquiries",
            desc: "Customers check account balances, recent transactions, and mini-statements via WhatsApp or Voice AI with 2FA OTP verification."
        },
        {
            icon: <ShieldCheck className="w-6 h-6 text-emerald-500" />,
            title: "Instant Card Lock & Fraud Alerts",
            desc: "24/7 emergency card blocking, fraud confirmation alerts, and suspicious transaction validation without agent wait time."
        },
        {
            icon: <FileText className="w-6 h-6 text-emerald-500" />,
            title: "Loan Eligibility & EMI Calculator",
            desc: "Automated pre-qualification for personal, home, or auto loans. Instant EMI calculations and document checklist dispatch."
        },
        {
            icon: <Server className="w-6 h-6 text-emerald-500" />,
            title: "Air-Gapped On-Premise Deployment",
            desc: "For public sector banks & regulated NBFCs: full local LLM deployment behind your firewall with zero external API calls."
        },
        {
            icon: <PhoneCall className="w-6 h-6 text-emerald-500" />,
            title: "Outbound Payment & EMI Reminders",
            desc: "Human-like Voice AI calls in Hindi, Tamil, Marathi & 7 languages to remind customers about pending EMIs and collect payments."
        },
        {
            icon: <CheckCircle2 className="w-6 h-6 text-emerald-500" />,
            title: "DPDP 2023 & RBI Compliance",
            desc: "Built to comply with RBI IT Governance guidelines and DPDP Act 2023 with 100% Indian data residency and PII masking."
        }
    ];

    const faqs = [
        {
            q: "Can SwanDigitals deploy fully on-premise inside our bank datacenter?",
            a: "Yes. For sovereign banking infrastructure, SwanDigitals offers a true Air-Gapped On-Premise deployment. The database, speech engines, and local open-source LLMs run inside your private AWS/Azure/bare-metal servers with zero internet egress."
        },
        {
            q: "How do you ensure DPDP Act 2023 and RBI compliance?",
            a: "All conversation data stays in India (ap-south-1). PII data (Aadhaar, PAN, card numbers) is redacted automatically before logging. We maintain strict RBAC access controls, full audit logging, and sign enterprise BAAs."
        },
        {
            q: "What core banking systems (CBS) do you integrate with?",
            a: "SwanDigitals integrates natively via secure REST webhooks with leading Core Banking Systems (Finacle, BaNCS, Flexcube), LOS/LMS platforms, and custom middleware."
        },
        {
            q: "How fast can a bank or NBFC go live?",
            a: "Standard cloud pilots go live in 7 business days. Custom air-gapped on-premise enterprise deployments typically take 3 to 4 weeks including security audits."
        }
    ];

    return (
        <SiteLayout>
            {/* HERO SECTION */}
            <section ref={heroRef} className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-slate-950 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-emerald-600/20 rounded-full blur-[140px] opacity-50 pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <span className="reveal inline-flex items-center gap-2 px-4 py-1.5 text-xs font-extrabold tracking-widest uppercase rounded-full mb-6 text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
                            <Landmark className="w-3.5 h-3.5" />
                            Banking, Insurance & BFSI Solutions
                        </span>

                        <h1 className="reveal text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-8 leading-tight">
                            AI Customer Support Built for <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                                Banking & Sovereign BFSI
                            </span>
                        </h1>

                        <p className="reveal text-lg sm:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Automate 85%+ of banking queries on WhatsApp and Voice AI. Fully DPDP 2023 compliant with air-gapped on-premise deployment for Indian banks and NBFCs.
                        </p>

                        <div className="reveal flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/demo" className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full font-bold shadow-lg shadow-emerald-500/30 transition-all hover:-translate-y-0.5 text-center">
                                Book Enterprise BFSI Demo
                            </Link>
                            <Link href="/security" className="px-8 py-4 bg-white/10 hover:bg-white/15 text-white border border-white/10 rounded-full font-bold backdrop-blur-md transition-all hover:-translate-y-0.5 text-center">
                                View Compliance Architecture
                            </Link>
                        </div>

                        <div className="reveal mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                            {[
                                { label: "DPDP 2023 Ready" },
                                { label: "RBI IT Governance" },
                                { label: "Air-Gapped On-Prem" },
                                { label: "10 Indian Languages" }
                            ].map((badge, idx) => (
                                <div key={idx} className="bg-white/5 border border-white/10 py-3 px-3 rounded-2xl backdrop-blur-sm">
                                    <span className="text-xs sm:text-sm font-bold text-slate-300 flex items-center justify-center gap-1.5">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                                        {badge.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* USE CASES GRID */}
            <section ref={contentRef} className="py-24 bg-slate-50 border-t border-slate-200">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600 mb-3 block">BFSI WORKFLOW AUTOMATION</span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
                            Purpose-Built Banking & Financial Workflows
                        </h2>
                        <p className="text-slate-600 text-base leading-relaxed">
                            From instant balance checks to automated EMI collection calls, empower your institution with 24/7 intelligent automation.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {bfsiUseCases.map((uc, idx) => (
                            <div key={idx} className="reveal bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
                                <div>
                                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-6">
                                        {uc.icon}
                                    </div>
                                    <h3 className="font-bold text-xl text-slate-900 mb-3">{uc.title}</h3>
                                    <p className="text-sm text-slate-600 leading-relaxed">{uc.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ ACCORDION */}
            <section className="py-20 bg-white border-t border-slate-200">
                <div className="max-w-3xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold text-slate-900 mb-3">BFSI FAQ</h2>
                        <p className="text-slate-500 text-sm">Common questions from banking & financial institution tech leaders.</p>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <div key={i} className="border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                                <button
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-bold text-slate-900 text-sm hover:bg-slate-50 transition-colors"
                                >
                                    <span>{faq.q}</span>
                                    <ChevronRight className={`w-4 h-4 text-slate-400 transition-transform ${openFaq === i ? 'rotate-90' : ''}`} />
                                </button>
                                {openFaq === i && (
                                    <div className="px-6 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 bg-slate-50/50">
                                        {faq.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section ref={ctaRef} className="py-20 bg-slate-950 text-white text-center relative overflow-hidden">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
                    <h2 className="text-4xl font-extrabold mb-6">Deploy Bank-Grade AI Support Today</h2>
                    <p className="text-lg text-slate-400 mb-10 max-w-xl mx-auto">
                        Talk to our solution architects to design your air-gapped or cloud banking AI workflow.
                    </p>
                    <Link href="/demo" className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full font-bold text-sm shadow-lg shadow-emerald-500/30 transition-all hover:-translate-y-0.5 inline-block">
                        Schedule Banking Discovery Call
                    </Link>
                </div>
            </section>
        </SiteLayout>
    );
}
