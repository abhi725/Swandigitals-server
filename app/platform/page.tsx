import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'SwanDigitals Platform | AI Customer Support | Multi-Channel Inbox | India',
    description: 'SwanDigitals AI platform: visual flow builder, voice AI, WhatsApp API, analytics. Cloud, hosted in India, built for Indian SMEs.',
    keywords: ['AI Platform India', 'Chatbot Platform', 'Low-Code Chatbot', 'SME AI India'],
    alternates: {
        canonical: 'https://swandigitals.com/platform',
    },
}

import SiteLayout from '@/components/layout/SiteLayout';
import Hero from '@/components/ui/Hero';
import Link from 'next/link';
import {
    Lock, MapPin, Shield, Key, ClipboardList, Landmark,
    XCircle, Link2, Palette, Building2, Cloud,
    Database, Brain, Smartphone, Plug, Building, HeartPulse, ShieldCheck
} from 'lucide-react';

export default function PlatformPage() {
    const securityFeatures = [
        { icon: <Lock className="w-8 h-8 mx-auto" />, title: 'Encryption', desc: 'Encryption at rest and in transit for all customer data' },
        { icon: <MapPin className="w-8 h-8 mx-auto" />, title: 'India Data Residency', desc: 'Full data hosting within India' },
        { icon: <Shield className="w-8 h-8 mx-auto" />, title: 'No Lock-In', desc: 'Export your data anytime, no long-term contracts' },
        { icon: <Key className="w-8 h-8 mx-auto" />, title: 'Team Access Controls', desc: 'Manage who on your team can see and reply to chats' },
        { icon: <ClipboardList className="w-8 h-8 mx-auto" />, title: 'Activity Logs', desc: 'Complete activity logs for your team' },
        { icon: <Landmark className="w-8 h-8 mx-auto" />, title: 'DPDP 2023 Aware', desc: "Built with India's data protection law in mind" }
    ];

    const comparisonData = [
        { feature: 'Pricing', swan: 'Flat ₹ pricing from ₹4,999/mo', competitor: 'Custom enterprise quotes' },
        { feature: 'Data Location', swan: 'Hosted in India, DPDP-2023 aware', competitor: 'Varies by deployment region' },
        { feature: 'Time to Go Live', swan: 'Live in as little as 7 days', competitor: 'Multi-month enterprise rollout' },
        { feature: 'Support', swan: 'Indian team, Indian support hours', competitor: 'Enterprise account management' },
        { feature: 'Lock-In', swan: 'No lock-in — export your data anytime', competitor: 'Long-term enterprise contracts' },
        { feature: 'Best Fit', swan: 'Indian SMEs, 5–200 employees', competitor: 'Large enterprises with dedicated IT teams' }
    ];

    return (
        <SiteLayout>
            {/* Hero Section */}
            <Hero
                badge="Platform"
                title="AI Platform Built for Indian SMEs"
                subtitle="Build and manage your WhatsApp, chat, and voice AI agents from one dashboard. Data hosted in India, DPDP-2023 aware, no lock-in."
                primaryCTA={{ text: "Book a Platform Demo", href: "/demo" }}
                secondaryCTA={{ text: "Explore Features", href: "/features" }}
            />

            {/* Trust Highlights */}
            <section className="bg-slate-50 py-4 border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-slate-600">
                        <div className="flex items-center gap-2">
                            <Lock className="w-4 h-4 text-orange-500" />
                            <span>AES-256 Encrypted</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-orange-500" />
                            <span>India Data Residency</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Shield className="w-4 h-4 text-orange-500" />
                            <span>DPDP-2023 Aware</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Problem/Solution Block */}
            <section id="overview" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">The Indian SME AI Dilemma (And Why Generic Tools Fail)</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        <div className="bg-rose-50 p-8 rounded-2xl border border-rose-100">
                            <div className="flex items-center gap-2 mb-4 text-rose-600">
                                <XCircle className="w-5 h-5 flex-shrink-0" />
                                <h3 className="font-bold text-lg">Data & Trust Concerns</h3>
                            </div>
                            <p className="text-slate-600">Customers want to know their data stays in India, not just hosted "somewhere"</p>
                        </div>
                        <div className="bg-rose-50 p-8 rounded-2xl border border-rose-100">
                            <div className="flex items-center gap-2 mb-4 text-rose-600">
                                <XCircle className="w-5 h-5 flex-shrink-0" />
                                <h3 className="font-bold text-lg">Complex Coordination</h3>
                            </div>
                            <p className="text-slate-600">Multi-agent workflows are too complex to coordinate manually</p>
                        </div>
                        <div className="bg-rose-50 p-8 rounded-2xl border border-rose-100">
                            <div className="flex items-center gap-2 mb-4 text-rose-600">
                                <XCircle className="w-5 h-5 flex-shrink-0" />
                                <h3 className="font-bold text-lg">Budget Bankruptcy</h3>
                            </div>
                            <p className="text-slate-600">Legacy platforms charge per conversation, bankrupting your budget</p>
                        </div>
                    </div>
                    <p className="text-center text-xl font-semibold text-slate-900">
                        SwanDigitals solves all three. Here's how:
                    </p>
                </div>
            </section>

            {/* Core Differentiators */}
            <section className="py-20 bg-gradient-to-br from-orange-50 to-pink-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-shadow">
                            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-500 rounded-xl flex items-center justify-center text-white mb-6 shadow-orange">
                                <Shield className="w-6 h-6" />
                            </div>
                            <h2 className="text-2xl font-bold mb-4 text-slate-900">Data Hosted in India</h2>
                            <p className="text-slate-600 mb-4">Your customer data stays on secure cloud infrastructure hosted in India, built to be DPDP-2023 aware.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-shadow">
                            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-500 rounded-xl flex items-center justify-center text-white mb-6 shadow-orange">
                                <Link2 className="w-6 h-6" />
                            </div>
                            <h2 className="text-2xl font-bold mb-4 text-slate-900">Chat + Voice, Unified</h2>
                            <p className="text-slate-600 mb-4">Coordinate your chat and voice AI agents (Sales, Support, Follow-up) as one unified system.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-shadow">
                            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-500 rounded-xl flex items-center justify-center text-white mb-6 shadow-orange">
                                <Palette className="w-6 h-6" />
                            </div>
                            <h2 className="text-2xl font-bold mb-4 text-slate-900">No-Code Studio</h2>
                            <p className="text-slate-600 mb-4">Build complex flows visually. No developers required.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Deployment Options - No Hybrid */}
            <section id="deployment" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-4 text-slate-900">Deploy Your Way</h2>
                    <p className="text-center text-slate-600 mb-12 max-w-3xl mx-auto">One cloud platform, live fast: data hosted in India, DPDP-2023 aware, no lock-in.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {/* Self-Serve */}
                        <div className="bg-gradient-to-br from-orange-50 to-pink-50 p-8 rounded-2xl border-2 border-orange-200 relative">
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-sm">
                                Most Popular
                            </div>
                            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-orange-600 mb-6 mx-auto shadow-sm">
                                <Building2 className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-center mb-4 text-slate-900">Self-Serve</h3>
                            <p className="text-slate-600 text-center mb-6">Sign up and configure your AI yourself. Live in as little as a day.</p>
                            <ul className="space-y-3 mb-6">
                                <li className="flex items-center gap-2">
                                    <span className="text-orange-500 font-bold">✓</span>
                                    <span className="text-slate-700">Deploy in hours</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-orange-500 font-bold">✓</span>
                                    <span className="text-slate-700">Data hosted in India</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-orange-500 font-bold">✓</span>
                                    <span className="text-slate-700">Flat ₹ pricing, no per-message fees</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-orange-500 font-bold">✓</span>
                                    <span className="text-slate-700">No lock-in</span>
                                </li>
                            </ul>
                            <p className="text-sm text-slate-500 text-center pt-4 border-t border-orange-100">Best for: Teams comfortable setting things up themselves</p>
                        </div>

                        {/* Guided Onboarding */}
                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-slate-600 mb-6 mx-auto shadow-sm border border-slate-100">
                                <Cloud className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-center mb-4 text-slate-900">Guided Onboarding</h3>
                            <p className="text-slate-600 text-center mb-6">We help you connect WhatsApp, train your AI, and go live.</p>
                            <ul className="space-y-3 mb-6">
                                <li className="flex items-center gap-2">
                                    <span className="text-slate-400 font-bold">✓</span>
                                    <span className="text-slate-700">Live in 7 days</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-slate-400 font-bold">✓</span>
                                    <span className="text-slate-700">Dedicated onboarding support</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-slate-400 font-bold mt-0.5">✓</span>
                                    <span className="font-semibold text-orange-600">DPDP-2023 aware, secured via Razorpay</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-slate-400 font-bold">✓</span>
                                    <span className="text-slate-700">Indian support hours</span>
                                </li>
                            </ul>
                            <p className="text-sm text-slate-500 text-center pt-4 border-t border-slate-200">Best for: Teams that want hands-on help going live</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Security Architecture */}
            <section id="security" className="py-20 bg-slate-900 text-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-4">Security & Trust</h2>
                    <p className="text-center text-slate-400 mb-12">Built for peace of mind, without the enterprise complexity</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
                        {securityFeatures.map((feature, i) => (
                            <div key={i} className="bg-white/5 p-6 rounded-2xl text-center border border-white/10 hover:bg-white/10 transition-colors">
                                <div className="text-orange-400 mb-4">{feature.icon}</div>
                                <div className="font-bold text-white mb-2 text-sm">{feature.title}</div>
                                <div className="text-xs text-slate-400 leading-relaxed">{feature.desc}</div>
                            </div>
                        ))}
                    </div>

                    {/* vs Yellow.ai Comparison */}
                    <div className="bg-white/5 rounded-3xl p-8 md:p-10 border border-white/10">
                        <h3 className="text-2xl font-bold text-center mb-6">SwanDigitals vs Enterprise AI Suites</h3>
                        <p className="text-center text-slate-400 mb-10">Enterprise suites like Yellow.ai are built for large organizations — here's the SME-fit alternative</p>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left">
                                <thead>
                                    <tr className="border-b border-white/10 text-slate-400">
                                        <th className="py-4 px-4 font-semibold">Feature</th>
                                        <th className="py-4 px-4 font-bold text-orange-400">SwanDigitals</th>
                                        <th className="py-4 px-4 font-semibold">Enterprise Suites</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {comparisonData.map((row, i) => (
                                        <tr key={i} className="border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
                                            <td className="py-4 px-4 text-slate-300">{row.feature}</td>
                                            <td className="py-4 px-4 font-medium text-white">{row.swan}</td>
                                            <td className="py-4 px-4 text-slate-500">{row.competitor}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* Platform Architecture */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">Simple, Reliable Architecture</h2>
                    <div className="bg-white border border-slate-200 p-10 md:p-16 rounded-3xl shadow-sm">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center">
                            <div className="flex flex-col items-center">
                                <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600 mb-5">
                                    <Database className="w-8 h-8" />
                                </div>
                                <h3 className="font-bold text-slate-900 mb-2">Data Layer</h3>
                                <p className="text-sm text-slate-500">Your Secure Environment</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600 mb-5">
                                    <Brain className="w-8 h-8" />
                                </div>
                                <h3 className="font-bold text-slate-900 mb-2">AI Layer</h3>
                                <p className="text-sm text-slate-500">SwanDigitals AI Engine</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600 mb-5">
                                    <Smartphone className="w-8 h-8" />
                                </div>
                                <h3 className="font-bold text-slate-900 mb-2">Channel Layer</h3>
                                <p className="text-sm text-slate-500">Omnichannel Deployment</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600 mb-5">
                                    <Plug className="w-8 h-8" />
                                </div>
                                <h3 className="font-bold text-slate-900 mb-2">Integration Layer</h3>
                                <p className="text-sm text-slate-500">WhatsApp, CRM & Payment Connectors</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Integration Ecosystem */}
            <section className="py-20 bg-white border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-4 text-slate-900">Works With Your Tools</h2>
                    <p className="text-center text-slate-600 mb-12">Real integrations built for how Indian SMEs actually work</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                        <div className="bg-slate-50 border border-slate-100 p-5 rounded-2xl text-center font-medium text-slate-700 hover:border-orange-200 transition-colors cursor-default">Messaging</div>
                        <div className="bg-slate-50 border border-slate-100 p-5 rounded-2xl text-center font-medium text-slate-700 hover:border-orange-200 transition-colors cursor-default">Payments</div>
                        <div className="bg-slate-50 border border-slate-100 p-5 rounded-2xl text-center font-medium text-slate-700 hover:border-orange-200 transition-colors cursor-default">CRM & Scheduling</div>
                        <div className="bg-slate-50 border border-slate-100 p-5 rounded-2xl text-center font-medium text-slate-700 hover:border-orange-200 transition-colors cursor-default">Automation</div>
                    </div>
                    <div className="text-center">
                        <Link href="/integrations" className="inline-block px-8 py-4 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-600 transition-colors shadow-orange">
                            Browse All Integrations →
                        </Link>
                    </div>
                </div>
            </section>

            {/* Industries We Serve */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-4 text-slate-900">Built for Indian SMEs</h2>
                    <p className="text-center text-slate-600 mb-12">Real businesses, real use cases — not just theory.</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                        <div className="text-center p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-orange-100 transition-all">
                            <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-pink-500 rounded-2xl flex items-center justify-center text-white mb-6 mx-auto shadow-orange">
                                <Building className="w-7 h-7" />
                            </div>
                            <div className="font-bold text-slate-900 mb-2">Retail & E-commerce</div>
                            <div className="text-sm text-slate-500">WhatsApp order updates & support</div>
                        </div>
                        <div className="text-center p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-orange-100 transition-all">
                            <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-pink-500 rounded-2xl flex items-center justify-center text-white mb-6 mx-auto shadow-orange">
                                <HeartPulse className="w-7 h-7" />
                            </div>
                            <div className="font-bold text-slate-900 mb-2">Clinics</div>
                            <div className="text-sm text-slate-500">Patient booking & reminders</div>
                        </div>
                        <div className="text-center p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-orange-100 transition-all">
                            <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-pink-500 rounded-2xl flex items-center justify-center text-white mb-6 mx-auto shadow-orange">
                                <Landmark className="w-7 h-7" />
                            </div>
                            <div className="font-bold text-slate-900 mb-2">Real Estate</div>
                            <div className="text-sm text-slate-500">Lead qualification & site visits</div>
                        </div>
                        <div className="text-center p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-orange-100 transition-all">
                            <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-pink-500 rounded-2xl flex items-center justify-center text-white mb-6 mx-auto shadow-orange">
                                <ShieldCheck className="w-7 h-7" />
                            </div>
                            <div className="font-bold text-slate-900 mb-2">Local Services</div>
                            <div className="text-sm text-slate-500">Reminders, DPDP-2023 aware</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 bg-white">
                <div className="max-w-3xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">Common Questions</h2>
                    <div className="space-y-4">
                        <details className="bg-slate-50 border border-slate-100 p-6 rounded-2xl group cursor-pointer [&_summary::-webkit-details-marker]:hidden">
                            <summary className="font-semibold text-lg text-slate-900 flex justify-between items-center">
                                Where is my data hosted?
                                <span className="text-orange-500 group-open:-rotate-180 transition-transform duration-300">▼</span>
                            </summary>
                            <p className="mt-4 text-slate-600 leading-relaxed pt-4 border-t border-slate-200">Your data is hosted in India. SwanDigitals is a cloud platform, built to be aware of the DPDP Act 2023, with payments secured via Razorpay.</p>
                        </details>
                        <details className="bg-slate-50 border border-slate-100 p-6 rounded-2xl group cursor-pointer [&_summary::-webkit-details-marker]:hidden">
                            <summary className="font-semibold text-lg text-slate-900 flex justify-between items-center">
                                Do you collect my customer data on your cloud offering?
                                <span className="text-orange-500 group-open:-rotate-180 transition-transform duration-300">▼</span>
                            </summary>
                            <p className="mt-4 text-slate-600 leading-relaxed pt-4 border-t border-slate-200">We process your customer conversations to power the AI features you use, and we never sell or share your data. We're built to be aware of the DPDP Act 2023, and you can export your data anytime — no lock-in.</p>
                        </details>
                        <details className="bg-slate-50 border border-slate-100 p-6 rounded-2xl group cursor-pointer [&_summary::-webkit-details-marker]:hidden">
                            <summary className="font-semibold text-lg text-slate-900 flex justify-between items-center">
                                What AI do you use?
                                <span className="text-orange-500 group-open:-rotate-180 transition-transform duration-300">▼</span>
                            </summary>
                            <p className="mt-4 text-slate-600 leading-relaxed pt-4 border-t border-slate-200">We use advanced AI and LLMs suited to each use case — you don't need to worry about the underlying stack.</p>
                        </details>
                        <details className="bg-slate-50 border border-slate-100 p-6 rounded-2xl group cursor-pointer [&_summary::-webkit-details-marker]:hidden">
                            <summary className="font-semibold text-lg text-slate-900 flex justify-between items-center">
                                How long does implementation take?
                                <span className="text-orange-500 group-open:-rotate-180 transition-transform duration-300">▼</span>
                            </summary>
                            <p className="mt-4 text-slate-600 leading-relaxed pt-4 border-t border-slate-200">Typically 7 days for standard deployments. Complex integrations may take 2-3 weeks. We'll tell you upfront.</p>
                        </details>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-gradient-to-r from-orange-500 to-pink-500 text-white text-center">
                <div className="max-w-3xl mx-auto px-6 lg:px-8">
                    <h2 className="text-4xl font-bold mb-6">Ready to See Your Use Case in Action?</h2>
                    <p className="text-xl text-white/90 mb-10">No 6-month RFPs. No death-by-PowerPoint. Just a conversation about what you need.</p>
                    <Link href="/demo" className="inline-block px-8 py-4 bg-white text-slate-900 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                        Schedule a Live Demo
                    </Link>
                </div>
            </section>
        </SiteLayout>
    );
}
