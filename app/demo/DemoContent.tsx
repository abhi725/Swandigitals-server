'use client';

import SiteLayout from '@/components/layout/SiteLayout';
import Hero from '@/components/ui/Hero';
import Link from 'next/link';
import Script from 'next/script';
import { Calendar, Clock, Video, Shield, Bot, BarChart3, Wrench, TrendingUp, ArrowRight } from 'lucide-react';
import { useEffect, useRef } from 'react';

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
            { threshold: 0.1 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);
    return ref;
}

export default function DemoContent() {
    const featureRef = useReveal();
    const formRef = useReveal();
    const bottomRef = useReveal();

    return (
        <SiteLayout>
            <Hero
                badge="Book a Demo"
                title="See SwanDigitals in Action"
                subtitle="Get a personalized demo of our AI platform. See how we can help you automate repetitive support conversations in weeks, not months."
                primaryCTA={{ text: "Schedule Now", href: "#form" }}
            />

            {/* What You'll See */}
            <section ref={featureRef} className="py-20 bg-gradient-to-r from-orange-500 to-pink-500 text-white border-y border-orange-400">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="reveal text-2xl md:text-3xl font-bold text-center mb-12">What You'll See in Your Demo</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center stagger">
                        <div className="reveal flex flex-col items-center">
                            <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white mb-4 border border-white/30">
                                <Bot className="w-7 h-7" />
                            </div>
                            <div className="font-semibold text-lg">Live AI Conversation</div>
                        </div>
                        <div className="reveal flex flex-col items-center">
                            <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white mb-4 border border-white/30">
                                <BarChart3 className="w-7 h-7" />
                            </div>
                            <div className="font-semibold text-lg">Analytics Dashboard</div>
                        </div>
                        <div className="reveal flex flex-col items-center">
                            <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white mb-4 border border-white/30">
                                <Wrench className="w-7 h-7" />
                            </div>
                            <div className="font-semibold text-lg">No-Code Builder</div>
                        </div>
                        <div className="reveal flex flex-col items-center">
                            <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white mb-4 border border-white/30">
                                <TrendingUp className="w-7 h-7" />
                            </div>
                            <div className="font-semibold text-lg">Custom ROI Analysis</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Demo Details + Form */}
            <section id="form" ref={formRef} className="py-20 lg:py-28 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 items-start">
                        {/* Left: Details */}
                        <div className="xl:col-span-7 space-y-12">
                            <div className="reveal text-center xl:text-left">
                                <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase text-orange-600 bg-orange-50 border border-orange-100 rounded-full mb-4">
                                    Your Session
                                </span>
                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Your Personalized Demo</h2>
                                <p className="text-lg text-slate-500 max-w-2xl mx-auto xl:mx-0">
                                    Every demo is tailored to your specific use case, industry, and challenges. We'll show you exactly how SwanDigitals can help your business.
                                </p>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-5 stagger">
                                <div className="reveal bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-orange-200 transition-all cursor-default">
                                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-orange-500 mb-4 shadow-sm border border-slate-100">
                                        <Clock className="w-6 h-6" />
                                    </div>
                                    <h3 className="font-bold text-slate-900 mb-2">30 Minutes</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed">Quick, focused session that respects your time and busy schedule.</p>
                                </div>
                                <div className="reveal bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-orange-200 transition-all cursor-default">
                                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-orange-500 mb-4 shadow-sm border border-slate-100">
                                        <Video className="w-6 h-6" />
                                    </div>
                                    <h3 className="font-bold text-slate-900 mb-2">Live Platform Demo</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed">See real AI conversations and configurations, not just generic slideshows.</p>
                                </div>
                                <div className="reveal bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-orange-200 transition-all cursor-default">
                                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-orange-500 mb-4 shadow-sm border border-slate-100">
                                        <Calendar className="w-6 h-6" />
                                    </div>
                                    <h3 className="font-bold text-slate-900 mb-2">Flexible Scheduling</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed">Choose a time slot that works best for you and your team directly on the calendar.</p>
                                </div>
                                <div className="reveal bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-orange-200 transition-all cursor-default">
                                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-orange-500 mb-4 shadow-sm border border-slate-100">
                                        <Shield className="w-6 h-6" />
                                    </div>
                                    <h3 className="font-bold text-slate-900 mb-2">No Commitment</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed">Just an informative session. No high-pressure sales tactics. We only want to help.</p>
                                </div>
                            </div>

                            <div className="reveal bg-slate-900 text-white p-8 md:p-10 rounded-3xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-500 to-pink-500 opacity-20 blur-3xl rounded-full translate-x-1/3 -translate-y-1/3" />
                                <h3 className="text-xl font-bold mb-4 relative z-10">What to Expect from Your Demo</h3>
                                <ul className="space-y-3 relative z-10 text-slate-300">
                                    <li className="flex items-start gap-3"><span className="text-orange-400 mt-1">✓</span><span>Live walkthrough of the AI inbox, voice agents, and automation builder</span></li>
                                    <li className="flex items-start gap-3"><span className="text-orange-400 mt-1">✓</span><span>Custom ROI projection based on your current support volume</span></li>
                                    <li className="flex items-start gap-3"><span className="text-orange-400 mt-1">✓</span><span>Overview of WhatsApp, chat, and voice channels in one inbox</span></li>
                                    <li className="flex items-start gap-3"><span className="text-orange-400 mt-1">✓</span><span>Clear next steps with flat ₹ pricing starting at ₹1,999/mo (Free plan available)</span></li>
                                </ul>
                            </div>
                        </div>

                        {/* Right: Form */}
                        <div className="reveal xl:col-span-5 bg-white border border-slate-200 shadow-card hover:shadow-card-hover transition-shadow p-8 rounded-3xl sticky top-28">
                            <h3 className="text-2xl font-bold text-slate-900 mb-2 text-center">Request Your Demo</h3>
                            <p className="text-slate-500 mb-8 text-sm text-center">Fill out the details below and our team will get back to you shortly.</p>
                            <div className="bg-slate-50 rounded-xl overflow-hidden border border-slate-100 p-2">
                                <div className="engage-hub-form-embed" id="eh_form_demo_5903844064886784" style={{ width: '100%' }} data-id="5903844064886784"></div>
                            </div>
                            <Script id="eh-script-demo" strategy="afterInteractive">
                                {`
                            (window.EhDynamicRef ||= []).push(() => {
                                EhForms.create({
                                  "formId": "5903844064886784",
                                  "target": "#eh_form_demo_5903844064886784",
                                  "onFormReady": function(el, setValue) {}
                               });
                            });
                            `}
                            </Script>
                        </div>
                    </div>
                </div>
            </section>

            {/* Prefer Self-Service */}
            <section ref={bottomRef} className="py-20 lg:py-28 bg-slate-50 border-t border-slate-100">
                <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="reveal text-3xl font-bold text-slate-900 mb-4">Prefer to Explore on Your Own?</h2>
                    <p className="reveal text-lg text-slate-500 mb-10">Start a free trial and build your first chatbot in minutes</p>
                    <div className="reveal flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/pricing" className="px-8 py-4 bg-orange-500 text-white rounded-full font-bold text-sm shadow-orange hover:bg-orange-600 transition-colors flex items-center justify-center gap-2">
                            Start Free Trial
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                        <Link href="/documentation" className="px-8 py-4 bg-white border border-slate-200 text-slate-700 rounded-full font-bold text-sm hover:border-orange-300 hover:text-orange-600 transition-colors flex items-center justify-center">
                            Read Documentation
                        </Link>
                    </div>
                </div>
            </section>
        </SiteLayout>
    );
}
