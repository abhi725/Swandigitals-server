import Link from 'next/link';
import { Linkedin, Twitter, Youtube, Mail, ArrowRight, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-white border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-5 lg:px-8 pt-16 pb-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-8 mb-12">

                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-2.5 mb-4">
                            <img src="/logo.png" alt="SwanDigitals" className="h-8 w-auto" />
                            <span className="text-xl font-bold text-slate-900">SwanDigitals</span>
                        </div>
                        <p className="text-sm text-slate-500 leading-relaxed mb-5 max-w-xs">
                            AI-powered customer support for Indian businesses. WhatsApp, Voice, Chat — all in one inbox. Built for DPDP 2023 compliance.
                        </p>
                        <div className="flex gap-3 mb-6">
                            <a href="https://linkedin.com/company/swandigitals" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-slate-200 flex items-center justify-center text-slate-400 hover:text-orange-600 hover:border-amber-300 transition-all cursor-pointer">
                                <Linkedin className="w-4 h-4" />
                            </a>
                            <a href="https://twitter.com/swandigitals" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-slate-200 flex items-center justify-center text-slate-400 hover:text-orange-600 hover:border-amber-300 transition-all cursor-pointer">
                                <Twitter className="w-4 h-4" />
                            </a>
                            <a href="https://www.facebook.com/Digitalmarketingcompanyswandigitals/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-slate-200 flex items-center justify-center text-slate-400 hover:text-orange-600 hover:border-amber-300 transition-all cursor-pointer">
                                <Facebook className="w-4 h-4" />
                            </a>
                            <a href="https://www.instagram.com/digital_marketing_swandigitals/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-slate-200 flex items-center justify-center text-slate-400 hover:text-orange-600 hover:border-amber-300 transition-all cursor-pointer">
                                <Instagram className="w-4 h-4" />
                            </a>
                            <a href="https://wa.me/917770070762" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-slate-200 flex items-center justify-center text-slate-400 hover:text-orange-600 hover:border-amber-300 transition-all cursor-pointer" title="Chat on WhatsApp">
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.003 5.324 5.328 0 11.896 0c3.181.001 6.171 1.242 8.423 3.496 2.253 2.253 3.49 5.244 3.49 8.425 0 6.575-5.325 11.902-11.892 11.902-2.005-.001-3.973-.505-5.733-1.467L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.725 1.45 5.277 0 9.57-4.296 9.57-9.575 0-2.553-1.001-4.949-2.812-6.76C16.321 2.458 13.918 1.457 11.89 1.457 6.613 1.457 2.32 5.753 2.32 11.03c0 1.61.46 3.16 1.33 4.537l-.98 3.58 3.677-.963zm10.983-5.243c-.27-.135-1.602-.79-1.85-.88-.25-.09-.43-.135-.61.135-.18.27-.69.88-.84 1.05-.15.17-.3.19-.57.055-.27-.135-1.143-.42-2.18-1.345-.806-.719-1.35-1.609-1.51-1.878-.16-.27-.018-.415.118-.55.122-.121.27-.315.405-.47.135-.157.18-.27.27-.45.09-.18.045-.337-.02-.472-.067-.135-.61-1.472-.84-2.02-.22-.53-.44-.45-.61-.46-.16-.006-.34-.008-.52-.008-.18 0-.47.067-.72.337-.25.27-.95.93-.95 2.27 0 1.34.98 2.63 1.11 2.81.14.18 1.92 2.93 4.657 4.11.65.28 1.16.45 1.55.57.65.21 1.25.18 1.72.11.53-.08 1.6-.66 1.83-1.27.23-.61.23-1.13.16-1.24-.07-.11-.25-.17-.52-.305z"/>
                                </svg>
                            </a>
                            <a href="mailto:support@swandigitals.com" className="w-8 h-8 rounded-lg border border-slate-200 flex items-center justify-center text-slate-400 hover:text-orange-600 hover:border-amber-300 transition-all cursor-pointer">
                                <Mail className="w-4 h-4" />
                            </a>
                        </div>
                        <a
                            href="https://chat.swandigitals.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-5 py-2 bg-orange-500 hover:bg-orange-500 text-white rounded-full text-sm font-semibold transition-all shadow-orange cursor-pointer"
                        >
                            Sign Up Free
                            <ArrowRight className="w-3.5 h-3.5" />
                        </a>
                    </div>

                    {/* Platform */}
                    <div>
                        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Platform</h3>
                        <ul className="space-y-2.5">
                            {[
                                { label: 'Overview', href: '/platform#overview' },
                                { label: 'Features Catalog', href: '/features' },
                                { label: 'Voice AI Agent', href: '/features?product=voicebot#how-it-works' },
                                { label: 'Integrations', href: '/integrations#channels' },
                                { label: 'Security & DPDP', href: '/security#dpdp-compliance' },
                                { label: 'Deployment Options', href: '/deployment#options' },
                            ].map(({ label, href }) => (
                                <li key={href}>
                                    <Link href={href} className="text-sm text-slate-500 hover:text-orange-600 transition-colors">
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Solutions */}
                    <div>
                        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Solutions</h3>
                        <ul className="space-y-2.5">
                            {[
                                { label: 'Customer Service', href: '/solutions/customer-service#modules' },
                                { label: 'IT Helpdesk', href: '/solutions/it-helpdesk#automation' },
                                { label: 'Banking & BFSI', href: '/solutions/banking#use-cases' },
                                { label: 'Insurance', href: '/solutions/insurance#claims' },
                                { label: 'Healthcare', href: '/solutions/healthcare#use-cases' },
                                { label: 'Solutions Matrix', href: '/solutions#products' },
                            ].map(({ label, href }) => (
                                <li key={href}>
                                    <Link href={href} className="text-sm text-slate-500 hover:text-orange-600 transition-colors">
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Locations */}
                    <div>
                        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Locations</h3>
                        <ul className="space-y-2.5">
                            {[
                                { label: 'AI Chatbot Pune', href: '/pune' },
                                { label: 'AI Chatbot Mumbai', href: '/mumbai' },
                                { label: 'AI Chatbot Bangalore', href: '/bangalore' },
                                { label: 'AI Chatbot Hyderabad', href: '/hyderabad' },
                                { label: 'AI Chatbot Chennai', href: '/chennai' },
                                { label: 'AI Chatbot Delhi', href: '/delhi' },
                            ].map(({ label, href }) => (
                                <li key={href}>
                                    <Link href={href} className="text-sm text-slate-500 hover:text-orange-600 transition-colors">
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Resources</h3>
                        <ul className="space-y-2.5">
                            {[
                                { label: 'Documentation', href: '/documentation' },
                                { label: 'Blog', href: 'https://blog.swandigitals.com', external: true },
                                { label: 'ROI Calculator', href: '/roi-calculator#calculator' },
                                { label: 'FAQs Knowledge Base', href: '/faqs#general-platform' },
                                { label: 'Why SwanDigitals', href: '/why-swandigitals#comparison' },
                                { label: 'Pricing Plans', href: '/pricing#plans' },
                                { label: 'Book Demo', href: '/demo' },
                                { label: 'About Us', href: '/about' },
                                { label: 'Contact Support', href: '/contact' },
                            ].map(({ label, href, external }) => (
                                <li key={href}>
                                    {external ? (
                                        <a href={href} target="_blank" rel="noopener noreferrer" className="text-sm text-slate-500 hover:text-orange-600 transition-colors">
                                            {label}
                                        </a>
                                    ) : (
                                        <Link href={href} className="text-sm text-slate-500 hover:text-orange-600 transition-colors">
                                            {label}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Compare */}
                    <div>
                        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Compare</h3>
                        <ul className="space-y-2.5">
                            {[
                                { label: 'vs Kore.ai', href: '/compare/vs-kore' },
                                { label: 'vs Yellow.ai', href: '/compare/vs-yellow' },
                                { label: 'vs Haptik', href: '/compare/vs-haptik' },
                                { label: 'vs Intercom', href: '/compare/vs-intercom' },
                                { label: 'vs Zendesk', href: '/compare/vs-zendesk' },
                                { label: 'View All Comparisons →', href: '/compare' },
                            ].map(({ label, href }) => (
                                <li key={href}>
                                    <Link 
                                        href={href} 
                                        className={`text-sm transition-colors ${
                                            href === '/compare' 
                                                ? 'text-orange-500 hover:text-orange-600 font-medium' 
                                                : 'text-slate-500 hover:text-orange-600'
                                        }`}
                                    >
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-slate-400">
                        © 2026 SwanDigitals. All rights reserved. Pune, Maharashtra, India.
                    </p>
                    <div className="flex gap-5 text-xs text-slate-400">
                        <Link href="/privacy" className="hover:text-slate-600 transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-slate-600 transition-colors">Terms of Service</Link>
                        <Link href="/cookies" className="hover:text-slate-600 transition-colors">Cookie Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}


