"use client";

import SiteLayout from '@/components/layout/SiteLayout';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Check, X, ChevronDown, Zap, Shield, Globe2, BarChart3, MessageSquare, Phone, Users, Clock, TrendingUp, Headphones } from 'lucide-react';

/* ─────────────────────────────── STYLES ─────────────────────────────── */
const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap');

  .cs-page { font-family: 'Inter', sans-serif; }
  .cs-page h1, .cs-page h2, .cs-page h3, .cs-page h4 { font-family: 'Space Grotesk', sans-serif; }

  /* Keyframe Animations */
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(32px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  @keyframes slideRight {
    from { opacity: 0; transform: translateX(-32px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes slideLeft {
    from { opacity: 0; transform: translateX(32px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes scaleIn {
    from { opacity: 0; transform: scale(0.85); }
    to   { opacity: 1; transform: scale(1); }
  }
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    33% { transform: translateY(-12px) rotate(2deg); }
    66% { transform: translateY(-6px) rotate(-1deg); }
  }
  @keyframes floatSlow {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-18px); }
  }
  @keyframes pulse-ring {
    0% { transform: scale(0.8); opacity: 1; }
    100% { transform: scale(2.2); opacity: 0; }
  }
  @keyframes gridMove {
    0% { transform: translateY(0); }
    100% { transform: translateY(-50%); }
  }
  @keyframes shimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }
  @keyframes typing {
    from { width: 0; }
    to { width: 100%; }
  }
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
  @keyframes countUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes waveChat {
    0% { transform: scaleY(0.3); }
    50% { transform: scaleY(1); }
    100% { transform: scaleY(0.3); }
  }
  @keyframes messageSlide {
    from { opacity: 0; transform: translateY(12px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes orbitSpin {
    0% { transform: rotate(0deg) translateX(80px) rotate(0deg); }
    100% { transform: rotate(360deg) translateX(80px) rotate(-360deg); }
  }
  @keyframes beamPulse {
    0%, 100% { opacity: 0.3; height: 0px; }
    50% { opacity: 1; height: 60px; }
  }
  @keyframes rotateGradient {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  /* Reveal utility */
  .cs-reveal { opacity: 0; }
  .cs-reveal.visible { animation: fadeUp 0.65s cubic-bezier(0.22,1,0.36,1) forwards; }
  .cs-reveal-right { opacity: 0; }
  .cs-reveal-right.visible { animation: slideRight 0.65s cubic-bezier(0.22,1,0.36,1) forwards; }
  .cs-reveal-left { opacity: 0; }
  .cs-reveal-left.visible { animation: slideLeft 0.65s cubic-bezier(0.22,1,0.36,1) forwards; }
  .cs-reveal-scale { opacity: 0; }
  .cs-reveal-scale.visible { animation: scaleIn 0.55s cubic-bezier(0.22,1,0.36,1) forwards; }

  /* Floating elements */
  .float-a { animation: float 6s ease-in-out infinite; }
  .float-b { animation: floatSlow 8s ease-in-out infinite 1s; }
  .float-c { animation: float 7s ease-in-out infinite 0.5s; }

  /* Chat bubble animation */
  .msg-0 { animation: messageSlide 0.4s ease forwards 0.2s; opacity: 0; }
  .msg-1 { animation: messageSlide 0.4s ease forwards 1.5s; opacity: 0; }
  .msg-2 { animation: messageSlide 0.4s ease forwards 3s; opacity: 0; }
  .msg-3 { animation: messageSlide 0.4s ease forwards 4.5s; opacity: 0; }

  /* Beam indicator */
  .beam { animation: beamPulse 2s ease-in-out infinite; }

  /* Shimmer on stat cards */
  .shimmer-card {
    background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.06) 50%, transparent 100%);
    background-size: 200% 100%;
    animation: shimmer 3s infinite linear;
  }

  /* Grid background */
  .grid-bg::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(251,113,133,0.07) 1px, transparent 1px),
      linear-gradient(90deg, rgba(251,113,133,0.07) 1px, transparent 1px);
    background-size: 48px 48px;
    pointer-events: none;
  }

  /* Glow effects */
  .glow-orange { box-shadow: 0 0 60px rgba(249,115,22,0.25), 0 0 120px rgba(249,115,22,0.1); }
  .glow-pink { box-shadow: 0 0 60px rgba(236,72,153,0.25), 0 0 120px rgba(236,72,153,0.1); }
  .glow-blue { box-shadow: 0 0 60px rgba(99,102,241,0.25); }

  /* Progress bar fill animation */
  @keyframes fillBar {
    from { width: 0%; }
    to { width: var(--fill); }
  }
  .fill-bar { animation: fillBar 1.2s cubic-bezier(0.22,1,0.36,1) forwards 0.3s; width: 0; }

  /* Orbit animation */
  .orbit-1 { animation: orbitSpin 8s linear infinite; }
  .orbit-2 { animation: orbitSpin 12s linear infinite reverse; }

  /* Tab slide indicator */
  .tab-indicator {
    transition: left 0.3s cubic-bezier(0.22,1,0.36,1), width 0.3s cubic-bezier(0.22,1,0.36,1);
  }

  /* Stagger delays */
  .delay-1 { animation-delay: 0.1s !important; }
  .delay-2 { animation-delay: 0.2s !important; }
  .delay-3 { animation-delay: 0.3s !important; }
  .delay-4 { animation-delay: 0.4s !important; }
  .delay-5 { animation-delay: 0.5s !important; }
  .delay-6 { animation-delay: 0.6s !important; }
  .delay-7 { animation-delay: 0.7s !important; }
  .delay-8 { animation-delay: 0.8s !important; }

  /* Marquee */
  @keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  .marquee-track { animation: marquee 28s linear infinite; }

  /* FAQ transition */
  .faq-body {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.4s cubic-bezier(0.22,1,0.36,1), padding 0.3s ease;
  }
  .faq-body.open { max-height: 300px; padding-bottom: 20px; }

  /* Chat wave bars */
  .wave-bar-1 { animation: waveChat 1s ease-in-out infinite; }
  .wave-bar-2 { animation: waveChat 1s ease-in-out infinite 0.15s; }
  .wave-bar-3 { animation: waveChat 1s ease-in-out infinite 0.3s; }
  .wave-bar-4 { animation: waveChat 1s ease-in-out infinite 0.45s; }
  .wave-bar-5 { animation: waveChat 1s ease-in-out infinite 0.6s; }
`;

/* ─────────────────────────── useReveal HOOK ─────────────────────────── */
function useReveal() {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const els = entry.target.querySelectorAll('.cs-reveal, .cs-reveal-right, .cs-reveal-left, .cs-reveal-scale');
                    els.forEach((el, i) => {
                        const base = parseInt((el as HTMLElement).dataset.delay ?? '0');
                        setTimeout(() => el.classList.add('visible'), base + i * 90);
                    });
                }
            });
        }, { threshold: 0.07 });

        document.querySelectorAll('[data-reveal-section]').forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, []);
}

/* ─────────────────────────── ANIMATED COUNTER ──────────────────────── */
function Counter({ end, suffix = '', prefix = '' }: { end: number; suffix?: string; prefix?: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const started = useRef(false);
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && !started.current) {
                started.current = true;
                let start = 0;
                const step = Math.ceil(end / 60);
                const timer = setInterval(() => {
                    start += step;
                    if (start >= end) { setCount(end); clearInterval(timer); }
                    else setCount(start);
                }, 25);
            }
        }, { threshold: 0.5 });
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [end]);
    return <span ref={ref}>{prefix}{count.toLocaleString()}{suffix}</span>;
}

/* ─────────────────────── CHAT SIMULATOR ILLUSTRATION ───────────────── */
function ChatIllustration() {
    return (
        <div className="relative w-full max-w-sm mx-auto">
            {/* Glowing orb behind */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-orange-500/30 via-pink-500/20 to-purple-600/30 blur-2xl" />

            {/* Phone frame */}
            <div className="relative bg-slate-900 border border-slate-700/80 rounded-3xl overflow-hidden shadow-2xl" style={{ transform: 'rotateY(-6deg) rotateX(4deg)', perspective: '900px' }}>
                {/* Status bar */}
                <div className="bg-slate-950 px-5 pt-4 pb-3 flex items-center justify-between border-b border-slate-800">
                    <div className="flex items-center gap-2.5">
                        <div className="relative w-9 h-9 rounded-full bg-gradient-to-br from-orange-500 to-pink-600 flex items-center justify-center shadow-lg">
                            <span className="text-white text-xs font-black">S</span>
                            <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-400 border-2 border-slate-950 rounded-full" />
                        </div>
                        <div>
                            <p className="text-white text-xs font-bold">SwanAI Support</p>
                            <p className="text-emerald-400 text-[9px] font-semibold">● Online · Always Active</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map(i => (
                            <div key={i} className={`wave-bar-${i} h-3 w-0.5 bg-orange-400 rounded-full`} style={{ display: 'inline-block' }} />
                        ))}
                    </div>
                </div>

                {/* Chat messages */}
                <div className="bg-slate-900 p-4 space-y-3 min-h-[240px]">
                    <div className="msg-0 flex justify-end">
                        <div className="bg-orange-500 text-white text-[11px] rounded-2xl rounded-br-none px-3.5 py-2.5 max-w-[80%] leading-relaxed shadow-md">
                            Hi! My order #8921 hasn't arrived. It's been 5 days 😟
                        </div>
                    </div>
                    <div className="msg-1 flex justify-start">
                        <div className="bg-slate-800 border border-slate-700 text-slate-200 text-[11px] rounded-2xl rounded-bl-none px-3.5 py-2.5 max-w-[80%] leading-relaxed shadow-sm">
                            Namaste! 🙏 Found order #8921 for you. It's out for delivery — arriving <strong className="text-orange-400">today by 5 PM</strong>. Track it here →
                        </div>
                    </div>
                    <div className="msg-2 flex justify-end">
                        <div className="bg-orange-500 text-white text-[11px] rounded-2xl rounded-br-none px-3.5 py-2.5 max-w-[80%] leading-relaxed shadow-md">
                            Also, can I change the delivery address?
                        </div>
                    </div>
                    <div className="msg-3 flex justify-start">
                        <div className="bg-slate-800 border border-slate-700 text-slate-200 text-[11px] rounded-2xl rounded-bl-none px-3.5 py-2.5 max-w-[80%] leading-relaxed shadow-sm">
                            ✅ Done! Updated to your Pune address. <strong className="text-emerald-400">Resolved in 8 seconds</strong> — no agent needed!
                        </div>
                    </div>
                </div>

                {/* Input bar */}
                <div className="bg-slate-950 border-t border-slate-800 px-4 py-3 flex items-center gap-2">
                    <div className="flex-1 bg-slate-900 border border-slate-700 rounded-full px-3.5 py-2 text-[10px] text-slate-500 font-medium">
                        Customer sent a message...
                    </div>
                    <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center">
                        <ArrowRight className="w-3.5 h-3.5 text-white" />
                    </div>
                </div>

                {/* Auto-resolved badge */}
                <div className="absolute top-24 -right-3 bg-emerald-500 text-white text-[9px] font-black px-2.5 py-1.5 rounded-full shadow-lg float-c">
                    ⚡ 8s resolved
                </div>
            </div>

            {/* Floating stat cards */}
            <div className="absolute -left-8 top-16 bg-slate-900 border border-slate-700 rounded-2xl px-4 py-3 shadow-xl float-a text-center">
                <p className="text-orange-400 font-black text-xl">90%</p>
                <p className="text-slate-400 text-[9px] font-bold">Auto-Deflection</p>
            </div>
            <div className="absolute -right-6 bottom-20 bg-slate-900 border border-slate-700 rounded-2xl px-4 py-3 shadow-xl float-b text-center">
                <p className="text-pink-400 font-black text-xl">&lt;500ms</p>
                <p className="text-slate-400 text-[9px] font-bold">Response Time</p>
            </div>
        </div>
    );
}

/* ─────────────────────── AI BRAIN ORBIT ILLUSTRATION ───────────────── */
function AIBrainIllustration() {
    const channels = [
        { label: 'WhatsApp', color: '#25D366', angle: 0 },
        { label: 'Instagram', color: '#E1306C', angle: 60 },
        { label: 'Web Chat', color: '#6366F1', angle: 120 },
        { label: 'Voice AI', color: '#F97316', angle: 180 },
        { label: 'Email', color: '#3B82F6', angle: 240 },
        { label: 'Facebook', color: '#1877F2', angle: 300 },
    ];

    return (
        <div className="relative flex items-center justify-center" style={{ height: 320 }}>
            {/* Center AI Core */}
            <div className="relative z-10 w-24 h-24 rounded-full bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600 flex items-center justify-center shadow-2xl" style={{ boxShadow: '0 0 60px rgba(249,115,22,0.5)' }}>
                <svg viewBox="0 0 40 40" className="w-10 h-10 fill-white">
                    <path d="M20 4C14 4 9 9 9 15c0 3.5 1.6 6.6 4.2 8.7l-.2 3.3 3.5-1.5c1.1.3 2.3.5 3.5.5 6 0 11-5 11-11S26 4 20 4zm0 2c5 0 9 4 9 9s-4 9-9 9c-1.2 0-2.3-.2-3.4-.6L12 25l.3-3.5C10 19.6 8.5 17 8.5 14c0-4.4 3.6-8 8-8h3.5z" opacity="0.3"/>
                    <circle cx="15" cy="14" r="1.5"/>
                    <circle cx="20" cy="14" r="1.5"/>
                    <circle cx="25" cy="14" r="1.5"/>
                    <path d="M12 18.5h16" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                {/* Pulse rings */}
                <div className="absolute inset-0 rounded-full border-2 border-orange-400/40" style={{ animation: 'pulse-ring 2s ease-out infinite' }} />
                <div className="absolute inset-0 rounded-full border-2 border-orange-400/20" style={{ animation: 'pulse-ring 2s ease-out infinite 0.7s' }} />
            </div>

            {/* Orbit ring */}
            <div className="absolute w-56 h-56 rounded-full border border-dashed border-slate-600/50" />

            {/* Channel nodes */}
            {channels.map((ch, i) => {
                const rad = (ch.angle * Math.PI) / 180;
                const r = 112;
                const x = Math.cos(rad) * r;
                const y = Math.sin(rad) * r;
                return (
                    <div
                        key={i}
                        className="absolute flex flex-col items-center"
                        style={{ transform: `translate(${x}px, ${y}px)` }}
                    >
                        <div
                            className="w-9 h-9 rounded-full flex items-center justify-center text-white text-[9px] font-black shadow-lg border-2 border-slate-800"
                            style={{ backgroundColor: ch.color, boxShadow: `0 0 20px ${ch.color}55` }}
                        >
                            {ch.label.slice(0, 2)}
                        </div>
                        <span className="text-[8px] text-slate-400 font-semibold mt-1 whitespace-nowrap">{ch.label}</span>
                        {/* Connecting line to center */}
                        <svg
                            className="absolute pointer-events-none opacity-30"
                            style={{ width: Math.abs(x) * 2 + 40, height: Math.abs(y) * 2 + 40, top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}
                        />
                    </div>
                );
            })}
        </div>
    );
}

/* ─────────────────────────── MAIN PAGE COMPONENT ─────────────────────── */
export default function CustomerServiceContent() {
    useReveal();

    const [activeFeature, setActiveFeature] = useState(0);
    const [openFaq, setOpenFaq] = useState<number | null>(0);
    const [roiTickets, setRoiTickets] = useState(3000);
    const [roiCost, setRoiCost] = useState(45);

    const deflected = Math.round(roiTickets * 0.88);
    const monthly = Math.round(deflected * roiCost * 0.72);
    const annual = monthly * 12;

    const features = [
        {
            id: 'inbox',
            icon: MessageSquare,
            label: 'Unified Inbox',
            color: 'from-orange-500 to-amber-500',
            headline: 'One Inbox. Every Channel. Zero Tab-Switching.',
            body: 'Your agents see WhatsApp, Instagram, Web Chat, and Email conversations in a single workspace — with collision detection, private notes, and SLA timers built in.',
            points: ['WhatsApp BSP API at 0% Meta markup', 'Collision detection prevents duplicate replies', 'Internal notes & team @mentions'],
            image: '/chatbot-inbox.png',
        },
        {
            id: 'ai',
            icon: Zap,
            label: 'Autonomous AI',
            color: 'from-pink-500 to-rose-500',
            headline: 'AI That Resolves, Not Just Replies.',
            body: 'SwanAI performs real actions — updating addresses, checking order status, booking appointments — using your knowledge base with zero hallucination guardrails.',
            points: ['Vector RAG knowledge from PDFs, URLs, Notion', 'Zero hallucination — safe fallback always', 'Auto-tags CRM records on resolution'],
            image: '/voicebot-overview.png',
        },
        {
            id: 'handoff',
            icon: Users,
            label: 'Smart Handoff',
            color: 'from-purple-500 to-indigo-500',
            headline: 'Angry Customer? AI Escalates in Real Time.',
            body: 'Sentiment analysis detects frustrated customers instantly. The AI pauses, writes a 3-bullet summary for your agent, and routes to the best available team member — no context lost.',
            points: ['Sentiment-driven instant escalation triggers', 'AI-generated conversation summary for agents', 'Round-robin + skill-based routing'],
            image: '/voicebot-team-mgmt.png',
        },
        {
            id: 'voice',
            icon: Phone,
            label: 'Voice AI',
            color: 'from-teal-500 to-emerald-500',
            headline: 'Pick Up Every Call. In Every Language.',
            body: 'Replace robotic IVR ("Press 1 for billing") with conversational Voice AI that handles inbound calls in Hindi, Tamil, Telugu, Marathi, and Hinglish — 24/7.',
            points: ['Sub-500ms audio latency, natural pacing', 'SIP trunking + call recording included', 'Transcripts sync to Unified Inbox'],
            image: '/voicebot-agents-config.png',
        },
    ];

    const transformations = [
        { before: 'Customers wait 4+ hours for a reply on WhatsApp', after: 'AI responds in under 500ms, any time of day' },
        { before: 'Agents burned out repeating "Where is my order?"', after: '88% of repetitive tickets resolved automatically' },
        { before: 'Support closes at 7 PM — leads lost overnight', after: '24/7 autonomous AI coverage, zero night shifts needed' },
        { before: 'Language barrier limits Hindi & Tamil support', after: 'Native NLU in 10 Indian languages, including Hinglish' },
        { before: 'Customer must repeat context to every new agent', after: 'AI summary briefing — agents pick up exactly where left off' },
    ];

    const industries = [
        {
            id: 'ecommerce',
            emoji: '🛍️',
            label: 'D2C & E-Commerce',
            color: 'from-orange-500 to-amber-500',
            accent: 'text-orange-500',
            border: 'border-orange-200',
            bg: 'bg-orange-50',
            headline: 'Convert Browsers into Buyers. Retain Them Forever.',
            desc: 'D2C brands lose 68% of potential sales to unanswered WhatsApp messages after business hours. SwanAI closes leads at 2 AM and handles post-purchase support so your team focuses on growth.',
            salesFlow: [
                { step: 'Visitor DMs on WhatsApp', icon: '💬' },
                { step: 'AI qualifies product interest', icon: '🎯' },
                { step: 'Sends catalogue + price', icon: '📦' },
                { step: 'Payment link dispatched', icon: '💳' },
                { step: 'Order confirmed via AI', icon: '✅' },
            ],
            supportFlow: [
                { step: 'Customer asks order status', icon: '❓' },
                { step: 'AI fetches real-time tracking', icon: '📍' },
                { step: 'Sends ETA + tracking link', icon: '🚚' },
                { step: 'Refund/exchange auto-initiated', icon: '🔄' },
                { step: 'CSAT auto-collected', icon: '⭐' },
            ],
            stats: ['78% cart recovery via WhatsApp AI', 'NDR auto-verification reduces RTO by 40%', 'Post-purchase CSAT collected automatically'],
        },
        {
            id: 'healthcare',
            emoji: '🏥',
            label: 'Healthcare & Clinics',
            color: 'from-teal-500 to-emerald-500',
            accent: 'text-teal-600',
            border: 'border-teal-200',
            bg: 'bg-teal-50',
            headline: 'Fill Every Appointment Slot. 24/7 Patient Support.',
            desc: 'Clinics and diagnostic centres lose ₹15,000+ per day in missed bookings from unanswered calls and WhatsApp queries. SwanAI books, reschedules, and handles patient FAQ instantly.',
            salesFlow: [
                { step: 'Patient enquires on WhatsApp', icon: '📱' },
                { step: 'AI checks doctor availability', icon: '🗓️' },
                { step: 'Slot suggested + confirmed', icon: '✅' },
                { step: 'Reminder sent 24h before', icon: '🔔' },
                { step: 'No-show auto-rescheduled', icon: '🔁' },
            ],
            supportFlow: [
                { step: 'Patient asks about test prep', icon: '❓' },
                { step: 'AI reads lab manual PDF', icon: '📄' },
                { step: 'Sends clear instructions', icon: '📋' },
                { step: 'Report ready alert dispatched', icon: '📊' },
                { step: 'AI handles billing queries', icon: '💰' },
            ],
            stats: ['3x more appointments booked vs. manual', 'Zero missed after-hours patient queries', 'Report dispatch automation saves 2 hrs/day'],
        },
        {
            id: 'realestate',
            emoji: '🏙️',
            label: 'Real Estate & Housing',
            color: 'from-purple-500 to-indigo-500',
            accent: 'text-purple-600',
            border: 'border-purple-200',
            bg: 'bg-purple-50',
            headline: 'Qualify Every Lead. Schedule Every Site Visit.',
            desc: 'Real estate sales teams spend 70% of their time answering the same pricing and location questions. SwanAI pre-qualifies leads by budget and BHK preference before your agent even picks up.',
            salesFlow: [
                { step: 'Lead enquires on WhatsApp/Web', icon: '🏠' },
                { step: 'AI asks budget + BHK + location', icon: '🎯' },
                { step: 'Sends matching properties', icon: '🖼️' },
                { step: 'Site visit auto-scheduled', icon: '📅' },
                { step: 'Lead routed to sales exec', icon: '👤' },
            ],
            supportFlow: [
                { step: 'Buyer asks about loan eligibility', icon: '🏦' },
                { step: 'AI explains RERA compliance', icon: '📜' },
                { step: 'Sends brochure + floor plan PDF', icon: '📐' },
                { step: 'Construction update dispatched', icon: '🏗️' },
                { step: 'Handover checklist auto-sent', icon: '✅' },
            ],
            stats: ['5x lead qualification speed via AI', 'Site visits scheduled without agent intervention', 'RERA & legal FAQ answered instantly'],
        },
        {
            id: 'edtech',
            emoji: '🎓',
            label: 'Education & EdTech',
            color: 'from-blue-500 to-cyan-500',
            accent: 'text-blue-600',
            border: 'border-blue-200',
            bg: 'bg-blue-50',
            headline: 'Turn Enquiries into Enrolments. Instantly.',
            desc: 'Ed-tech and coaching institutes miss up to 60% of admission enquiries because counsellors are busy or unavailable. SwanAI handles the full admission funnel from first DM to fee payment link.',
            salesFlow: [
                { step: 'Student/parent DMs on WhatsApp', icon: '📱' },
                { step: 'AI shares course details + fees', icon: '📚' },
                { step: 'Sends batch schedule PDF', icon: '🗓️' },
                { step: 'Demo class link auto-dispatched', icon: '🎥' },
                { step: 'Fee payment link sent on interest', icon: '💳' },
            ],
            supportFlow: [
                { step: 'Student asks about syllabus', icon: '❓' },
                { step: 'AI fetches course content', icon: '📖' },
                { step: 'Doubt escalated to teacher', icon: '👩‍🏫' },
                { step: 'Result/certificate dispatched', icon: '🏆' },
                { step: 'Re-enrolment nudge automated', icon: '🔔' },
            ],
            stats: ['60% more admissions from WhatsApp leads', 'Fee payment links sent without counsellor', 'Dropout alerts trigger re-engagement AI'],
        },
    ];
    const [activeIndustry, setActiveIndustry] = useState(0);

    const faqs = [
        { q: 'How soon can we go live?', a: 'Most customers go live in 7 business days. Our onboarding team handles WhatsApp API setup, knowledge base ingestion, NLU testing, and channel configuration — you just approve.' },
        { q: 'Will AI hallucinate wrong answers to customers?', a: 'No. SwanAI uses vector RAG grounded strictly in your uploaded documents. If a query is outside the knowledge base, it triggers a fallback message and routes to a human agent — it never invents answers.' },
        { q: 'Does SwanDigitals charge extra for WhatsApp messages?', a: 'Zero markup. We pass Meta WhatsApp Business API conversation charges at exact cost. You pay a flat monthly software subscription with predictable pricing.' },
        { q: 'Can it handle Hindi, Hinglish, and regional languages?', a: 'Yes — SwanAI has native NLU for Hindi, Hinglish, Tamil, Telugu, Marathi, Kannada, Gujarati, Bengali, Odia, and Punjabi. This is not translation; it is native language understanding.' },
        { q: 'What integrations do you support?', a: 'Out-of-the-box integrations with HubSpot, Razorpay, Shopify, n8n, and webhook-based custom CRM connectors. Our team can also build custom integrations within the onboarding period.' },
    ];

    return (
        <SiteLayout>
            <style>{CSS}</style>
            <div className="cs-page">

                {/* ══════════════ HERO ══════════════ */}
                <section className="relative bg-slate-950 overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28 grid-bg">
                    {/* Ambient gradients */}
                    <div className="absolute top-0 left-1/4 w-[700px] h-[500px] bg-orange-600/15 rounded-full blur-[140px] pointer-events-none" />
                    <div className="absolute bottom-0 right-1/4 w-[500px] h-[400px] bg-purple-600/15 rounded-full blur-[120px] pointer-events-none" />

                    <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center" data-reveal-section>

                            {/* Left */}
                            <div>
                                <div className="cs-reveal inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-400 text-[11px] font-extrabold uppercase tracking-widest mb-6 backdrop-blur-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-ping inline-block" />
                                    Customer Service Automation
                                </div>

                                <h1 className="cs-reveal delay-1 text-4xl lg:text-6xl font-black text-white leading-[1.08] tracking-tight mb-6">
                                    Stop Losing Customers to{' '}
                                    <span className="relative">
                                        <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400">
                                            Slow Support
                                        </span>
                                        <span className="absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-orange-400 to-purple-400 rounded-full" />
                                    </span>
                                </h1>

                                <p className="cs-reveal delay-2 text-lg text-slate-300 leading-relaxed mb-8 max-w-xl">
                                    Deploy autonomous AI agents on WhatsApp, Web Chat, and Voice that resolve <strong className="text-white">90% of customer queries instantly</strong> — in Hindi, Tamil, Hinglish and 7 more Indian languages. No more night shifts. No more backlogs.
                                </p>

                                <div className="cs-reveal delay-3 flex flex-wrap gap-2 mb-8">
                                    {['0% Meta Markup', 'Live in 7 Days', 'India Data Residency', 'No Credit Card'].map(t => (
                                        <span key={t} className="flex items-center gap-1.5 text-xs font-semibold text-slate-300 bg-white/5 border border-white/10 rounded-full px-3.5 py-1.5">
                                            <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div className="cs-reveal delay-4 flex flex-col sm:flex-row gap-3">
                                    <Link
                                        href="/demo"
                                        className="group inline-flex items-center justify-center gap-2 px-7 py-4 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-bold rounded-2xl shadow-xl shadow-orange-500/25 transition-all hover:-translate-y-0.5 text-sm"
                                    >
                                        Book Free Live Demo
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                    <Link
                                        href="#roi"
                                        className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white/8 hover:bg-white/12 text-white border border-white/12 font-bold rounded-2xl transition-all hover:-translate-y-0.5 text-sm backdrop-blur-sm"
                                    >
                                        <BarChart3 className="w-4 h-4 text-orange-400" />
                                        Calculate Your Savings
                                    </Link>
                                </div>
                            </div>

                            {/* Right — Chat Illustration */}
                            <div className="cs-reveal-left delay-3 flex justify-center">
                                <ChatIllustration />
                            </div>
                        </div>
                    </div>
                </section>

                {/* ══════════════ STAT STRIP ══════════════ */}
                <section className="bg-slate-900 border-y border-slate-800 py-10" data-reveal-section>
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {[
                                { prefix: '', num: 90, suffix: '%', label: 'Ticket Deflection', color: 'from-orange-400 to-amber-400' },
                                { prefix: '<', num: 500, suffix: 'ms', label: 'Response Latency', color: 'from-pink-400 to-rose-400' },
                                { prefix: '', num: 10, suffix: '+', label: 'Indian Languages', color: 'from-purple-400 to-indigo-400' },
                                { prefix: '', num: 70, suffix: '%', label: 'Cost Reduction', color: 'from-teal-400 to-emerald-400' },
                            ].map((s, i) => (
                                <div key={i} className="cs-reveal text-center relative overflow-hidden bg-slate-950/50 border border-slate-800 rounded-2xl p-5 group hover:border-slate-700 transition-colors cursor-default">
                                    <div className="shimmer-card absolute inset-0 rounded-2xl pointer-events-none" />
                                    <p className={`text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r ${s.color} mb-1`}>
                                        <Counter end={s.num} prefix={s.prefix} suffix={s.suffix} />
                                    </p>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{s.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ══════════════ BEFORE → AFTER TRANSFORMATION ══════════════ */}
                <section className="py-24 bg-white border-b border-slate-100" data-reveal-section>
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="text-center max-w-2xl mx-auto mb-16">
                            <p className="cs-reveal text-xs font-extrabold uppercase tracking-widest text-pink-600 mb-3">The Transformation</p>
                            <h2 className="cs-reveal delay-1 text-3xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                                What Changes When You Deploy SwanDigitals
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* BEFORE column */}
                            <div className="cs-reveal-right bg-slate-50 border border-slate-200 rounded-3xl p-8">
                                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200">
                                    <div className="w-9 h-9 rounded-xl bg-red-100 flex items-center justify-center">
                                        <X className="w-5 h-5 text-red-500" />
                                    </div>
                                    <div>
                                        <h3 className="font-black text-slate-900 text-base">Before SwanDigitals</h3>
                                        <p className="text-[11px] text-red-600 font-semibold">Manual & Reactive Support</p>
                                    </div>
                                </div>
                                <ul className="space-y-4">
                                    {transformations.map((t, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <X className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                                            <p className="text-sm text-slate-600 leading-relaxed">{t.before}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* AFTER column */}
                            <div className="cs-reveal-left bg-slate-900 rounded-3xl p-8 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
                                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800 relative z-10">
                                    <div className="w-9 h-9 rounded-xl bg-orange-500 flex items-center justify-center shadow-lg shadow-orange-500/30">
                                        <Check className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-black text-white text-base">After SwanDigitals</h3>
                                        <p className="text-[11px] text-orange-400 font-semibold">Autonomous & Proactive AI</p>
                                    </div>
                                </div>
                                <ul className="space-y-4 relative z-10">
                                    {transformations.map((t, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div className="w-4 h-4 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <Check className="w-2.5 h-2.5 text-emerald-400" />
                                            </div>
                                            <p className="text-sm text-slate-300 leading-relaxed">{t.after}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Progress bars */}
                        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6" data-reveal-section>
                            {[
                                { label: 'Ticket Deflection Rate', fill: 90, color: 'bg-gradient-to-r from-orange-400 to-amber-400' },
                                { label: 'Agent Productivity Gain', fill: 75, color: 'bg-gradient-to-r from-pink-400 to-rose-400' },
                                { label: 'Customer Satisfaction (CSAT)', fill: 96, color: 'bg-gradient-to-r from-teal-400 to-emerald-400' },
                            ].map((bar, i) => (
                                <div key={i} className="cs-reveal">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-xs font-bold text-slate-700">{bar.label}</span>
                                        <span className="text-xs font-black text-slate-900">{bar.fill}%</span>
                                    </div>
                                    <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
                                        <div
                                            className={`h-full ${bar.color} rounded-full fill-bar`}
                                            style={{ '--fill': `${bar.fill}%` } as any}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ══════════════ FEATURE TABS ══════════════ */}
                <section className="py-24 bg-slate-50 border-b border-slate-200" data-reveal-section>
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="text-center max-w-2xl mx-auto mb-12">
                            <p className="cs-reveal text-xs font-extrabold uppercase tracking-widest text-orange-600 mb-3">Platform Modules</p>
                            <h2 className="cs-reveal delay-1 text-3xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                                Every Tool Your Support Team Needs
                            </h2>
                            <p className="cs-reveal delay-2 text-slate-500 text-base mt-4 leading-relaxed">
                                Four interconnected modules working together so you never lose a customer conversation.
                            </p>
                        </div>

                        {/* Tab selector */}
                        <div className="cs-reveal flex justify-center mb-10 overflow-x-auto pb-2">
                            <div className="inline-flex bg-white border border-slate-200 rounded-2xl p-1.5 gap-1 shadow-sm">
                                {features.map((f, i) => {
                                    const Icon = f.icon;
                                    return (
                                        <button
                                            key={i}
                                            onClick={() => setActiveFeature(i)}
                                            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                                                activeFeature === i
                                                    ? 'bg-slate-900 text-white shadow-md'
                                                    : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                                            }`}
                                        >
                                            <Icon className="w-3.5 h-3.5" />
                                            {f.label}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Feature content */}
                        <div className="bg-white border border-slate-200 rounded-3xl p-8 lg:p-12 shadow-xl">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                                <div>
                                    <span className={`inline-block px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider text-white bg-gradient-to-r ${features[activeFeature].color} mb-5 shadow-md`}>
                                        {features[activeFeature].label}
                                    </span>
                                    <h3 className="text-2xl lg:text-3xl font-black text-slate-900 mb-4 leading-tight">
                                        {features[activeFeature].headline}
                                    </h3>
                                    <p className="text-slate-600 text-base leading-relaxed mb-6">
                                        {features[activeFeature].body}
                                    </p>
                                    <ul className="space-y-3">
                                        {features[activeFeature].points.map((p, i) => (
                                            <li key={i} className="flex items-center gap-2.5 text-sm font-semibold text-slate-700">
                                                <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${features[activeFeature].color} flex items-center justify-center flex-shrink-0`}>
                                                    <Check className="w-3 h-3 text-white" />
                                                </div>
                                                {p}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="mt-8 flex gap-3">
                                        <Link href="/demo" className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${features[activeFeature].color} text-white font-bold rounded-xl text-sm shadow-lg transition-all hover:-translate-y-0.5`}>
                                            See Live Demo <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-2xl group">
                                    <div className="bg-slate-900 px-4 py-2.5 flex items-center gap-2 border-b border-slate-800">
                                        <div className="flex gap-1.5">
                                            <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/70" />
                                        </div>
                                        <div className="flex-1 mx-6">
                                            <div className="bg-slate-950 rounded-md px-3 py-1 text-[10px] text-slate-400 font-mono text-center">
                                                app.swandigitals.com
                                            </div>
                                        </div>
                                    </div>
                                    <img
                                        src={features[activeFeature].image}
                                        alt={features[activeFeature].label}
                                        className="w-full h-auto block group-hover:scale-105 transition-transform duration-700"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ══════════════ HOW IT WORKS — ORBIT VISUAL ══════════════ */}
                <section className="py-24 bg-slate-950 border-b border-slate-800 relative overflow-hidden" data-reveal-section>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent pointer-events-none" />
                    <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            {/* Illustration */}
                            <div className="cs-reveal-right order-2 lg:order-1">
                                <AIBrainIllustration />
                            </div>
                            {/* Text */}
                            <div className="order-1 lg:order-2">
                                <p className="cs-reveal text-xs font-extrabold uppercase tracking-widest text-purple-400 mb-3">Omnichannel Architecture</p>
                                <h2 className="cs-reveal delay-1 text-3xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-6">
                                    One AI Brain. <br/>Every Channel Connected.
                                </h2>
                                <p className="cs-reveal delay-2 text-slate-400 text-base leading-relaxed mb-8">
                                    SwanAI sits at the center of your entire support infrastructure — simultaneously reading, understanding, and responding across WhatsApp, Instagram, Web Chat, Email, Voice, and Facebook Messenger. All conversations unified, all context preserved.
                                </p>
                                <div className="space-y-4">
                                    {[
                                        { icon: Clock, text: '24/7 autonomous handling — zero after-hours backlog', color: 'text-orange-400' },
                                        { icon: Shield, text: 'End-to-end encrypted, India-hosted conversation data', color: 'text-blue-400' },
                                        { icon: Globe2, text: '10 Indian language NLU — not translation, native understanding', color: 'text-purple-400' },
                                        { icon: TrendingUp, text: 'Learns from every conversation to improve deflection rate', color: 'text-emerald-400' },
                                    ].map((item, i) => {
                                        const Icon = item.icon;
                                        return (
                                            <div key={i} className={`cs-reveal delay-${i + 3} flex items-center gap-3 bg-slate-900/60 border border-slate-800 rounded-xl p-4`}>
                                                <Icon className={`w-5 h-5 flex-shrink-0 ${item.color}`} />
                                                <p className="text-slate-300 text-sm font-medium">{item.text}</p>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ══════════════ ROI CALCULATOR ══════════════ */}
                <section id="roi" className="py-24 bg-white border-b border-slate-100" data-reveal-section>
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="text-center max-w-2xl mx-auto mb-16">
                            <p className="cs-reveal text-xs font-extrabold uppercase tracking-widest text-teal-600 mb-3">ROI Calculator</p>
                            <h2 className="cs-reveal delay-1 text-3xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                                How Much Will You Save?
                            </h2>
                            <p className="cs-reveal delay-2 text-slate-500 text-base mt-4">
                                Drag the sliders to get your personalized annual savings estimate.
                            </p>
                        </div>

                        <div className="cs-reveal max-w-5xl mx-auto bg-slate-950 border border-slate-800 rounded-3xl p-8 lg:p-12 shadow-2xl">
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                                {/* Sliders */}
                                <div className="lg:col-span-7 space-y-8">
                                    {[
                                        { label: 'Monthly Support Tickets', val: roiTickets, min: 500, max: 20000, step: 250, set: setRoiTickets, unit: 'tickets/mo', color: 'accent-orange-500' },
                                        { label: 'Manual Handling Cost per Ticket (₹)', val: roiCost, min: 15, max: 120, step: 5, set: setRoiCost, unit: '₹ each', color: 'accent-pink-500' },
                                    ].map((slider, i) => (
                                        <div key={i}>
                                            <div className="flex justify-between items-center mb-3">
                                                <label className="text-sm font-bold text-slate-300">{slider.label}</label>
                                                <span className="text-base font-black text-white">
                                                    {i === 0 ? slider.val.toLocaleString('en-IN') : `₹${slider.val}`}
                                                    <span className="text-xs font-semibold text-slate-400 ml-1">{slider.unit}</span>
                                                </span>
                                            </div>
                                            <input
                                                type="range"
                                                min={slider.min} max={slider.max} step={slider.step}
                                                value={slider.val}
                                                onChange={e => slider.set(Number(e.target.value))}
                                                className={`w-full h-2 bg-slate-800 rounded-full appearance-none cursor-pointer ${slider.color}`}
                                            />
                                            <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1.5">
                                                <span>{slider.min.toLocaleString('en-IN')}</span>
                                                <span>{slider.max.toLocaleString('en-IN')}</span>
                                            </div>
                                        </div>
                                    ))}

                                    {/* Breakdown */}
                                    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3">
                                        <h4 className="text-xs font-extrabold uppercase tracking-widest text-slate-400 mb-3">Savings Breakdown</h4>
                                        {[
                                            { label: 'Tickets auto-deflected / month', val: deflected.toLocaleString('en-IN'), color: 'text-orange-400' },
                                            { label: 'Monthly cost saving (est.)', val: `₹${monthly.toLocaleString('en-IN')}`, color: 'text-pink-400' },
                                            { label: 'Deflection rate applied', val: '88%', color: 'text-emerald-400' },
                                        ].map((row, i) => (
                                            <div key={i} className="flex justify-between items-center">
                                                <span className="text-xs text-slate-400">{row.label}</span>
                                                <span className={`text-sm font-black ${row.color}`}>{row.val}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Annual savings box */}
                                <div className="lg:col-span-5">
                                    <div className="relative bg-gradient-to-br from-orange-500/15 via-pink-500/10 to-purple-500/10 border border-orange-500/25 rounded-2xl p-8 text-center overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent" />
                                        <p className="text-xs font-extrabold uppercase tracking-widest text-orange-400 mb-2 relative z-10">Estimated Annual Savings</p>
                                        <p className="text-5xl font-black text-white mb-1 relative z-10">
                                            ₹{(annual >= 100000 ? (annual / 100000).toFixed(1) + 'L' : annual.toLocaleString('en-IN'))}
                                        </p>
                                        <p className="text-xs text-slate-400 relative z-10 mb-6">per year in support costs</p>
                                        <div className="text-xs text-slate-300 border-t border-white/10 pt-4 mb-6 relative z-10">
                                            Based on 88% deflection rate avg. across SwanDigitals customers.
                                        </div>
                                        <Link
                                            href="/demo"
                                            className="relative z-10 w-full block py-3.5 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-bold rounded-xl text-sm shadow-xl shadow-orange-500/25 transition-all hover:-translate-y-0.5"
                                        >
                                            Claim These Savings →
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ══════════════ INDUSTRY USE CASES ══════════════ */}
                <section className="py-24 bg-slate-950 border-b border-slate-800 relative overflow-hidden" data-reveal-section>
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />
                    <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-orange-500/8 rounded-full blur-3xl pointer-events-none" />

                    <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                        {/* Header */}
                        <div className="text-center max-w-3xl mx-auto mb-14">
                            <p className="cs-reveal text-xs font-extrabold uppercase tracking-widest text-orange-400 mb-3">Industry Playbooks</p>
                            <h2 className="cs-reveal delay-1 text-3xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4">
                                See Exactly How It Works for <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-400">Your Industry</span>
                            </h2>
                            <p className="cs-reveal delay-2 text-slate-400 text-base leading-relaxed">
                                Every Indian SME vertical has a unique Sales pipeline and Support workflow. Here's how SwanDigitals AI automates both — end to end.
                            </p>
                        </div>

                        {/* Industry Tab Switcher */}
                        <div className="cs-reveal flex justify-center mb-10 overflow-x-auto pb-2">
                            <div className="inline-flex bg-slate-900 border border-slate-800 rounded-2xl p-1.5 gap-1.5">
                                {industries.map((ind, i) => (
                                    <button
                                        key={ind.id}
                                        onClick={() => setActiveIndustry(i)}
                                        className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                                            activeIndustry === i
                                                ? 'bg-white text-slate-900 shadow-md'
                                                : 'text-slate-400 hover:text-white hover:bg-slate-800'
                                        }`}
                                    >
                                        <span>{ind.emoji}</span>
                                        {ind.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Active Industry Card */}
                        {industries.map((ind, i) => i === activeIndustry && (
                            <div key={ind.id} className="cs-reveal">
                                {/* Headline */}
                                <div className="text-center mb-10">
                                    <span className={`inline-block px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest text-white bg-gradient-to-r ${ind.color} shadow-lg mb-4`}>
                                        {ind.emoji} {ind.label}
                                    </span>
                                    <h3 className="text-2xl lg:text-4xl font-black text-white mb-3">{ind.headline}</h3>
                                    <p className="text-slate-400 text-base max-w-2xl mx-auto leading-relaxed">{ind.desc}</p>
                                </div>

                                {/* Pipeline Flows — Sales + Support side by side */}
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">

                                    {/* SALES PIPELINE */}
                                    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-7 relative overflow-hidden">
                                        <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${ind.color} rounded-t-3xl`} />
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${ind.color} flex items-center justify-center shadow-md`}>
                                                <TrendingUp className="w-5 h-5 text-white" />
                                            </div>
                                            <div>
                                                <h4 className="font-black text-white text-base">Sales Pipeline</h4>
                                                <p className="text-xs text-slate-400">How AI converts leads automatically</p>
                                            </div>
                                            <span className="ml-auto text-[10px] font-black text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full">AUTOMATED</span>
                                        </div>

                                        {/* Flow steps with SVG connector lines */}
                                        <div className="space-y-0">
                                            {ind.salesFlow.map((step, si) => (
                                                <div key={si} className="flex items-stretch">
                                                    <div className="flex flex-col items-center mr-4">
                                                        <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${ind.color} flex items-center justify-center text-base shadow-md flex-shrink-0`}>
                                                            {step.icon}
                                                        </div>
                                                        {si < ind.salesFlow.length - 1 && (
                                                            <div className="w-0.5 flex-1 my-1 bg-gradient-to-b from-slate-700 to-transparent min-h-[20px]" />
                                                        )}
                                                    </div>
                                                    <div className="flex-1 pb-4">
                                                        <div className="flex items-center h-9">
                                                            <p className="text-sm font-semibold text-slate-200">{step.step}</p>
                                                        </div>
                                                        {si < ind.salesFlow.length - 1 && <div className="h-4" />}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* SUPPORT PIPELINE */}
                                    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-7 relative overflow-hidden">
                                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-slate-600 to-slate-700 rounded-t-3xl" />
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-700 to-slate-600 flex items-center justify-center shadow-md border border-slate-600">
                                                <Headphones className="w-5 h-5 text-slate-300" />
                                            </div>
                                            <div>
                                                <h4 className="font-black text-white text-base">Support Pipeline</h4>
                                                <p className="text-xs text-slate-400">How AI handles post-sale queries</p>
                                            </div>
                                            <span className="ml-auto text-[10px] font-black text-orange-400 bg-orange-500/10 border border-orange-500/20 px-3 py-1.5 rounded-full">24 / 7</span>
                                        </div>

                                        <div className="space-y-0">
                                            {ind.supportFlow.map((step, si) => (
                                                <div key={si} className="flex items-stretch">
                                                    <div className="flex flex-col items-center mr-4">
                                                        <div className="w-9 h-9 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-base flex-shrink-0">
                                                            {step.icon}
                                                        </div>
                                                        {si < ind.supportFlow.length - 1 && (
                                                            <div className="w-0.5 flex-1 my-1 bg-gradient-to-b from-slate-700 to-transparent min-h-[20px]" />
                                                        )}
                                                    </div>
                                                    <div className="flex-1 pb-4">
                                                        <div className="flex items-center h-9">
                                                            <p className="text-sm font-semibold text-slate-200">{step.step}</p>
                                                        </div>
                                                        {si < ind.supportFlow.length - 1 && <div className="h-4" />}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Impact metrics strip */}
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                    {ind.stats.map((stat, si) => (
                                        <div key={si} className={`flex items-start gap-3 bg-slate-900 border border-slate-800 rounded-2xl px-5 py-4 hover:border-slate-700 transition-colors`}>
                                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${ind.color} mt-1.5 flex-shrink-0`} />
                                            <p className="text-sm font-semibold text-slate-300 leading-snug">{stat}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}

                        {/* CTA below */}
                        <div className="text-center mt-12 cs-reveal">
                            <p className="text-slate-400 text-sm mb-4">Don't see your industry? We've deployed in 12+ verticals.</p>
                            <Link href="/demo" className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-bold rounded-xl text-sm shadow-lg shadow-orange-500/20 transition-all hover:-translate-y-0.5">
                                Request Your Industry Playbook <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* ══════════════ GO-LIVE TIMELINE ══════════════ */}
                <section className="py-24 bg-white border-b border-slate-100" data-reveal-section>
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="text-center max-w-2xl mx-auto mb-16">
                            <p className="cs-reveal text-xs font-extrabold uppercase tracking-widest text-emerald-600 mb-3">Rapid Onboarding</p>
                            <h2 className="cs-reveal delay-1 text-3xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                                Go Live in 7 Days, Not 7 Months.
                            </h2>
                        </div>
                        <div className="relative">
                            {/* Connecting line */}
                            <div className="hidden lg:block absolute top-10 left-[calc(12.5%)] right-[calc(12.5%)] h-0.5 bg-gradient-to-r from-orange-300 via-pink-300 to-purple-300" />
                            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                                {[
                                    { step: '01', title: 'Channel Connect', desc: 'Link WhatsApp API, Instagram DMs, and Web Chat. Our team handles all BSP and Meta approvals.', icon: Globe2, color: 'from-orange-500 to-amber-500' },
                                    { step: '02', title: 'Knowledge Ingestion', desc: 'Upload FAQs, product PDFs, website URLs. SwanAI vectorizes and creates a zero-hallucination knowledge graph.', icon: Shield, color: 'from-pink-500 to-rose-500' },
                                    { step: '03', title: 'NLU Testing & Guardrails', desc: 'We run 1,000+ test queries, tune language detection, set escalation triggers, and verify fallback safety.', icon: Zap, color: 'from-purple-500 to-indigo-500' },
                                    { step: '04', title: 'Go Live & Scale', desc: 'Launch to real customers. Watch your ticket deflection rate climb in the analytics dashboard.', icon: TrendingUp, color: 'from-teal-500 to-emerald-500' },
                                ].map((s, i) => {
                                    const Icon = s.icon;
                                    return (
                                        <div key={i} className={`cs-reveal delay-${i + 1} relative bg-slate-50 border border-slate-200 rounded-3xl p-7 text-center hover:shadow-lg hover:-translate-y-1 transition-all`}>
                                            <div className={`relative z-10 w-14 h-14 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                                                <Icon className="w-6 h-6 text-white" />
                                            </div>
                                            <span className="text-xs font-black text-slate-400 uppercase tracking-widest">{s.step}</span>
                                            <h4 className="font-black text-slate-900 text-base mt-1 mb-2">{s.title}</h4>
                                            <p className="text-xs text-slate-500 leading-relaxed">{s.desc}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ══════════════ FAQ ══════════════ */}
                <section className="py-24 bg-slate-50 border-b border-slate-200" data-reveal-section>
                    <div className="max-w-3xl mx-auto px-6 lg:px-8">
                        <div className="text-center mb-14">
                            <p className="cs-reveal text-xs font-extrabold uppercase tracking-widest text-slate-500 mb-3">Got Questions?</p>
                            <h2 className="cs-reveal delay-1 text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                                Frequently Asked Questions
                            </h2>
                        </div>
                        <div className="cs-reveal space-y-3">
                            {faqs.map((faq, i) => (
                                <div key={i} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:border-orange-200 transition-colors">
                                    <button
                                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                        className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 cursor-pointer"
                                    >
                                        <span className="font-bold text-slate-900 text-sm leading-snug">{faq.q}</span>
                                        <ChevronDown className={`w-4 h-4 text-slate-400 flex-shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                                    </button>
                                    <div className={`faq-body ${openFaq === i ? 'open' : ''} px-6 text-slate-600 text-sm leading-relaxed`}>
                                        {faq.a}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ══════════════ CLOSING CTA ══════════════ */}
                <section className="relative py-28 bg-slate-950 overflow-hidden text-center" data-reveal-section>
                    <div className="absolute inset-0 grid-bg opacity-30" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-orange-500/20 via-pink-500/20 to-purple-500/20 rounded-full blur-[100px] pointer-events-none" />

                    <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
                        <p className="cs-reveal text-xs font-extrabold uppercase tracking-widest text-orange-400 mb-4">
                            Ready to Transform Your Support?
                        </p>
                        <h2 className="cs-reveal delay-1 text-4xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-6">
                            Your Customers Are Waiting for an Answer Right Now.
                        </h2>
                        <p className="cs-reveal delay-2 text-slate-300 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
                            Book a 30-minute live demo — we'll build a working AI bot using your actual website's content and show you what 90% deflection looks like in real time.
                        </p>
                        <div className="cs-reveal delay-3 flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/demo"
                                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-bold rounded-2xl shadow-2xl shadow-orange-500/30 transition-all hover:-translate-y-0.5 text-base"
                            >
                                Book Free Demo Now
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                href="/pricing"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/8 hover:bg-white/13 text-white border border-white/12 font-bold rounded-2xl transition-all hover:-translate-y-0.5 text-base"
                            >
                                See Transparent Pricing
                            </Link>
                        </div>
                        <div className="cs-reveal delay-4 mt-8 flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-slate-400">
                            <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-400" /> No credit card required</span>
                            <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-400" /> Live in 7 days</span>
                            <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-400" /> Cancel any time</span>
                            <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-400" /> India data residency</span>
                        </div>
                    </div>
                </section>

            </div>
        </SiteLayout>
    );
}
