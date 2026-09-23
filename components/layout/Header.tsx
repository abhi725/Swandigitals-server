"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
    ArrowRight, Menu, X, ChevronDown, Cpu, Sparkles, 
    Network, Shield, Headphones, Briefcase, Landmark, 
    FileText, Activity, Layers, BookOpen, Calculator, 
    GitCompare, PhoneCall, ExternalLink, Bot
} from 'lucide-react';
import { useState, useEffect } from 'react';

// navigation items schema with icons and active routes support
const navItems = [
    {
        label: 'Platform',
        href: '/platform',
        children: [
            { label: 'Platform Overview', href: '/platform', icon: <Cpu className="w-4 h-4 text-orange-500" /> },
            { label: 'Features', href: '/features', icon: <Sparkles className="w-4 h-4 text-orange-500" /> },
            { label: 'Integrations', href: '/integrations', icon: <Network className="w-4 h-4 text-orange-500" /> },
            { label: 'Voice AI Agent', href: '/build-ai-voice-agent', icon: <PhoneCall className="w-4 h-4 text-orange-500" /> },
            { label: 'Security', href: '/security', icon: <Shield className="w-4 h-4 text-orange-500" /> },
        ],
    },
    {
        label: 'Solutions',
        href: '/solutions',
        children: [
            { label: 'Overview', href: '/solutions', icon: <Bot className="w-4 h-4 text-orange-500" /> },
            { label: 'Customer Service', href: '/solutions/customer-service', icon: <Headphones className="w-4 h-4 text-orange-500" /> },
            { label: 'IT Helpdesk', href: '/solutions/it-helpdesk', icon: <Briefcase className="w-4 h-4 text-orange-500" /> },
            { label: 'Banking & BFSI', href: '/solutions/banking', icon: <Landmark className="w-4 h-4 text-orange-500" /> },
            { label: 'Insurance', href: '/solutions/insurance', icon: <FileText className="w-4 h-4 text-orange-500" /> },
            { label: 'Healthcare', href: '/solutions/healthcare', icon: <Activity className="w-4 h-4 text-orange-500" /> },
        ],
    },
    {
        label: 'Resources',
        href: '/resources',
        children: [
            { label: 'Resource Center', href: '/resources', icon: <Layers className="w-4 h-4 text-orange-500" /> },
            { label: 'Documentation', href: '/documentation', icon: <BookOpen className="w-4 h-4 text-orange-500" /> },
            { label: 'ROI Calculator', href: '/roi-calculator', icon: <Calculator className="w-4 h-4 text-orange-500" /> },
            { label: 'Comparison', href: '/compare', icon: <GitCompare className="w-4 h-4 text-orange-500" /> },
            { label: 'Blog', href: 'https://blog.swandigitals.com', icon: <ExternalLink className="w-4 h-4 text-orange-500" />, external: true },
        ],
    },
    {
        label: 'Pricing',
        href: '/pricing',
    },
];

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 12);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Helper to evaluate if a route is active
    const isActive = (href: string) => {
        if (href === '/') return pathname === '/';
        return pathname === href || (href.startsWith('/') && pathname?.startsWith(href));
    };

    return (
        <header
            className={`sticky top-0 z-50 transition-all duration-300 ${
                scrolled
                    ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100'
                    : 'bg-white/80 backdrop-blur-sm'
            }`}
        >
            <div className="max-w-7xl mx-auto px-5 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2.5 flex-shrink-0" aria-label="SwanDigitals Home">
                        <img
                            src="/logo.png"
                            alt="SwanDigitals logo"
                            className="h-8 w-auto"
                        />
                        <span className="text-xl font-bold text-slate-900 tracking-tight">SwanDigitals</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
                        {navItems.map((item) => {
                            const isParentActive = isActive(item.href) || (item.children?.some(child => isActive(child.href)));
                            return (
                                <div
                                    key={item.label}
                                    className="relative group"
                                    onMouseEnter={() => setOpenDropdown(item.label)}
                                    onMouseLeave={() => setOpenDropdown(null)}
                                >
                                    {item.children ? (
                                        <>
                                            <button 
                                                onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                                                className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-150 cursor-pointer ${
                                                    isParentActive
                                                        ? 'text-orange-600 bg-orange-50/40 font-semibold'
                                                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                                                }`}
                                            >
                                                {item.label}
                                                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === item.label ? 'rotate-180' : ''}`} />
                                            </button>
                                            <div className={`absolute left-0 top-full pt-2 w-56 transition-all duration-200 ${openDropdown === item.label ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-1'}`}>
                                                <div className="bg-white rounded-xl shadow-lg border border-slate-100 p-1.5 overflow-hidden">
                                                    {item.children.map((child) => (
                                                        child.external ? (
                                                            <a
                                                                key={child.href}
                                                                href={child.href}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="flex items-center gap-2.5 px-3 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors duration-150 cursor-pointer"
                                                                onClick={() => setOpenDropdown(null)}
                                                            >
                                                                {child.icon}
                                                                {child.label}
                                                            </a>
                                                        ) : (
                                                            <Link
                                                                key={child.href}
                                                                href={child.href}
                                                                className={`flex items-center gap-2.5 px-3 py-2 text-sm rounded-lg transition-colors duration-150 cursor-pointer ${
                                                                    isActive(child.href)
                                                                        ? 'text-orange-600 bg-orange-50/55 font-semibold'
                                                                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                                                                }`}
                                                                onClick={() => setOpenDropdown(null)}
                                                            >
                                                                {child.icon}
                                                                {child.label}
                                                            </Link>
                                                        )
                                                    ))}
                                                </div>
                                            </div>
                                        </>
                                    ) : (
                                        <Link
                                            href={item.href}
                                            className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-150 cursor-pointer ${
                                                isActive(item.href)
                                                    ? 'text-orange-600 bg-orange-50/40 font-semibold'
                                                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                                            }`}
                                        >
                                            {item.label}
                                        </Link>
                                    )}
                                </div>
                            );
                        })}
                    </nav>

                    {/* CTA Buttons */}
                    <div className="hidden lg:flex items-center gap-3">
                        <a
                            href="https://chat.swandigitals.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 text-sm font-semibold border border-orange-400 text-orange-600 rounded-full hover:bg-orange-50 transition-all duration-150 cursor-pointer"
                        >
                            Sign Up Free
                        </a>
                        <Link
                            href="/demo"
                            className="px-4 py-2 text-sm font-semibold bg-orange-500 hover:bg-orange-500 text-white rounded-full transition-all duration-150 flex items-center gap-1.5 shadow-orange cursor-pointer hover:shadow-orange-lg"
                        >
                            Book Demo
                            <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
                        aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                    >
                        {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`lg:hidden overflow-hidden transition-all duration-300 ${mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="bg-white border-t border-slate-100 px-5 py-4 space-y-1">
                    {navItems.map((item) => {
                        const isParentActive = isActive(item.href) || (item.children?.some(child => isActive(child.href)));
                        return (
                            <div key={item.label}>
                                {item.children ? (
                                    <>
                                        <button
                                            onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                                            className={`w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium rounded-lg transition-colors cursor-pointer ${
                                                isParentActive
                                                    ? 'text-orange-600 bg-orange-50/40 font-semibold'
                                                    : 'text-slate-700 hover:bg-slate-50'
                                            }`}
                                        >
                                            {item.label}
                                            <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpanded === item.label ? 'rotate-180' : ''}`} />
                                        </button>
                                        {mobileExpanded === item.label && (
                                            <div className="ml-4 mt-1 space-y-0.5">
                                                {item.children.map((child) => (
                                                    child.external ? (
                                                        <a
                                                            key={child.href}
                                                            href={child.href}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="flex items-center gap-2.5 px-3 py-2 text-sm text-slate-500 hover:text-slate-800 hover:bg-slate-50 rounded-lg transition-colors"
                                                            onClick={() => setMobileMenuOpen(false)}
                                                        >
                                                            {child.icon}
                                                            {child.label}
                                                        </a>
                                                    ) : (
                                                        <Link
                                                            key={child.href}
                                                            href={child.href}
                                                            className={`flex items-center gap-2.5 px-3 py-2 text-sm rounded-lg transition-colors ${
                                                                isActive(child.href)
                                                                    ? 'text-orange-600 bg-orange-50/55 font-bold'
                                                                    : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50'
                                                            }`}
                                                            onClick={() => setMobileMenuOpen(false)}
                                                        >
                                                            {child.icon}
                                                            {child.label}
                                                        </Link>
                                                    )
                                                ))}
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    <Link
                                        href={item.href}
                                        className={`block px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                                            isActive(item.href)
                                                ? 'text-orange-600 bg-orange-50/40 font-semibold'
                                                : 'text-slate-700 hover:bg-slate-50'
                                        }`}
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {item.label}
                                    </Link>
                                )}
                            </div>
                        );
                    })}
                    <div className="pt-3 mt-3 border-t border-slate-100 flex flex-col gap-2">
                        <a
                            href="https://chat.swandigitals.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full text-center px-4 py-2.5 text-sm font-semibold border border-orange-400 text-orange-600 rounded-full hover:bg-orange-50 transition-colors"
                        >
                            Sign Up Free
                        </a>
                        <Link
                            href="/demo"
                            className="w-full text-center px-4 py-2.5 text-sm font-semibold bg-orange-500 text-white rounded-full hover:bg-orange-500 transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Book Demo →
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
