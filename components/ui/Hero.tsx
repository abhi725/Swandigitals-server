"use client";

import { ArrowRight, ShieldCheck, Zap, Globe } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import DashboardMockup from '@/components/ui/DashboardMockup';

interface HeroProps {
    badge?: string;
    title: string;
    subtitle: string;
    primaryCTA?: { text: string; href: string; };
    secondaryCTA?: { text: string; href: string; external?: boolean; };
    showMockup?: boolean;
}

const trustBadges = [
    { icon: ShieldCheck, label: 'Flat ₹ Pricing' },
    { icon: Globe, label: 'Data Hosted in India' },
    { icon: Zap, label: 'Live in 7 Days' },
];

const stats = [
    { value: '10', label: 'Indian Languages' },
    { value: '24/7', label: 'Always-On Support' },
    { value: '7 Days', label: 'To Go Live' },
];

export default function Hero({ badge, title, subtitle, primaryCTA, secondaryCTA, showMockup = false }: HeroProps) {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.querySelectorAll('.reveal').forEach((el, i) => {
                            setTimeout(() => el.classList.add('visible'), i * 100);
                        });
                    }
                });
            },
            { threshold: 0.05 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    if (showMockup) {
        return (
            <section ref={sectionRef} className="relative pt-20 pb-10 lg:pt-28 lg:pb-16 overflow-hidden bg-white">
                <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                    <div className="absolute top-0 left-0 w-[600px] h-[500px] bg-gradient-to-br from-orange-50/80 to-transparent blur-3xl opacity-70" />
                    <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tl from-pink-50/60 to-transparent blur-3xl opacity-60" />
                </div>

                <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        {/* Left: Copy */}
                        <div>
                            {badge && (
                                <div className="reveal inline-flex items-center gap-2 px-4 py-1.5 bg-orange-50 border border-orange-200 rounded-full mb-7">
                                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                                    <span className="text-sm font-medium text-orange-700">{badge}</span>
                                </div>
                            )}
                            <h1 className="reveal text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.08] tracking-tight mb-6">
                                {title.split('10-Person Team').length > 1 ? (
                                    <>
                                        {title.split('10-Person Team')[0]}
                                        <span className="text-gradient-amber">10-Person Team</span>
                                        {title.split('10-Person Team')[1]}
                                    </>
                                ) : title}
                            </h1>
                            <p className="reveal text-lg text-slate-500 leading-relaxed mb-8 max-w-xl">
                                {subtitle}
                            </p>
                            {primaryCTA && (
                                <div className="reveal flex flex-col sm:flex-row items-start gap-3 mb-10">
                                    <Link href={primaryCTA.href} className="group px-7 py-3.5 bg-orange-500 text-white rounded-full font-semibold text-base shadow-orange hover:shadow-orange-lg hover:bg-orange-600 transition-all flex items-center gap-2">
                                        {primaryCTA.text}
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                                    </Link>
                                    {secondaryCTA && (
                                        secondaryCTA.external ? (
                                            <a href={secondaryCTA.href} target="_blank" rel="noopener noreferrer" className="px-7 py-3.5 bg-white border border-slate-200 hover:border-slate-300 text-slate-700 rounded-full font-semibold text-base hover:shadow-sm transition-all">
                                                {secondaryCTA.text}
                                            </a>
                                        ) : (
                                            <Link href={secondaryCTA.href} className="px-7 py-3.5 bg-white border border-slate-200 hover:border-slate-300 text-slate-700 rounded-full font-semibold text-base hover:shadow-sm transition-all">
                                                {secondaryCTA.text}
                                            </Link>
                                        )
                                    )}
                                </div>
                            )}
                            <div className="reveal flex flex-wrap gap-4">
                                {trustBadges.map(({ icon: Icon, label }) => (
                                    <div key={label} className="flex items-center gap-1.5 text-sm text-slate-500">
                                        <Icon className="w-4 h-4 text-orange-500" />
                                        <span>{label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right: Dashboard Mockup */}
                        <div className="reveal">
                            <DashboardMockup />
                        </div>
                    </div>

                    {/* Stats row */}
                    <div className="reveal grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 mt-12 stagger">
                        {stats.map(({ value, label }) => (
                            <div key={label} className="reveal bg-white border border-slate-100 rounded-2xl p-5 text-center shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all cursor-default">
                                <div className="text-2xl md:text-3xl font-bold text-gradient-amber mb-1">{value}</div>
                                <div className="text-xs text-slate-500 font-medium leading-snug">{label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    // Default centered hero for inner pages
    return (
        <section ref={sectionRef} className="relative pt-20 pb-16 lg:pt-28 lg:pb-24 overflow-hidden bg-white">
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-amber-50/70 to-transparent rounded-full blur-3xl opacity-60" />
            </div>
            <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
                <div className="max-w-3xl mx-auto text-center">
                    {badge && (
                        <div className="reveal inline-flex items-center gap-2 px-4 py-1.5 bg-orange-50 border border-orange-200 rounded-full mb-7">
                            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                            <span className="text-sm font-medium text-orange-700">{badge}</span>
                        </div>
                    )}
                    <h1 className="reveal text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.08] tracking-tight mb-6">{title}</h1>
                    <p className="reveal text-lg md:text-xl text-slate-500 leading-relaxed mb-10 max-w-2xl mx-auto">{subtitle}</p>
                    {primaryCTA && (
                        <div className="reveal flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">
                            <Link href={primaryCTA.href} className="group px-7 py-3.5 bg-orange-500 text-white rounded-full font-semibold text-base shadow-orange hover:bg-orange-600 transition-all flex items-center gap-2">
                                {primaryCTA.text}
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                            </Link>
                            {secondaryCTA && (
                                secondaryCTA.external ? (
                                    <a href={secondaryCTA.href} target="_blank" rel="noopener noreferrer" className="px-7 py-3.5 bg-white border border-slate-200 text-slate-700 rounded-full font-semibold text-base hover:shadow-sm transition-all">
                                        {secondaryCTA.text}
                                    </a>
                                ) : (
                                    <Link href={secondaryCTA.href} className="px-7 py-3.5 bg-white border border-slate-200 text-slate-700 rounded-full font-semibold text-base hover:shadow-sm transition-all">
                                        {secondaryCTA.text}
                                    </Link>
                                )
                            )}
                        </div>
                    )}
                    <div className="reveal flex flex-wrap items-center justify-center gap-4">
                        {trustBadges.map(({ icon: Icon, label }) => (
                            <div key={label} className="flex items-center gap-1.5 text-sm text-slate-500">
                                <Icon className="w-4 h-4 text-orange-600" />
                                <span>{label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
