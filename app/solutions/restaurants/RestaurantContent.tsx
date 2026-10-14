'use client';

import { useState } from 'react';
import SiteLayout from '@/components/layout/SiteLayout';
import Link from 'next/link';
import {
    MessageSquare, Phone, Instagram, Send, Globe, Check, ChevronDown,
    ArrowRight, Zap, Clock, ShoppingBag, QrCode, MapPin, Star,
    TrendingUp, Utensils, Bell, RefreshCw, Bot, Users, Sparkles,
    BadgePercent, ShieldCheck, Layers
} from 'lucide-react';

/* ─────────────────────────────────────────────────────────────────────────────
   CHAT MOCK DATA — pure JSX, no images needed
───────────────────────────────────────────────────────────────────────────── */
const CHANNEL_FLOWS: Record<string, { color: string; label: string; badge: string; messages: { from: 'user' | 'bot'; text: string }[] }> = {
    whatsapp: {
        color: '#25D366',
        label: 'WhatsApp',
        badge: 'Most Popular',
        messages: [
            { from: 'user', text: 'Hi, show me today\'s menu please 🍽️' },
            { from: 'bot', text: 'Namaste! 🙏 Welcome to Spice Garden.\n\n*Today\'s Specials:*\n1️⃣ Butter Chicken — ₹320\n2️⃣ Paneer Tikka Masala — ₹280\n3️⃣ Veg Biryani — ₹220\n4️⃣ Dal Makhani — ₹200\n\nJust reply with the item numbers to order!' },
            { from: 'user', text: '1 and 3 please' },
            { from: 'bot', text: 'Great choice! 🔥\n\n*Your Order:*\n• Butter Chicken × 1 — ₹320\n• Veg Biryani × 1 — ₹220\n*Total: ₹540*\n\nDine-in or home delivery?' },
            { from: 'user', text: 'Dine-in, Table 7' },
            { from: 'bot', text: '✅ Order confirmed for *Table 7*!\nEstimated time: 20 mins. Enjoy your meal! 🍛' },
        ],
    },
    instagram: {
        color: '#E1306C',
        label: 'Instagram',
        badge: 'DM Orders',
        messages: [
            { from: 'user', text: 'Hey, can I order from here? Saw your story' },
            { from: 'bot', text: 'Hi there! Yes, you can order right here on Instagram DM 😊\n\nWe deliver to your area! Want to see today\'s menu?' },
            { from: 'user', text: 'Yes please!' },
            { from: 'bot', text: '🍴 *Today\'s Menu*\n• Chicken Biryani — ₹350\n• Mutton Korma — ₹420\n• Paneer Butter Masala — ₹280\n\nWhat would you like? Also share your delivery pincode 📍' },
            { from: 'user', text: 'Paneer Butter Masala. Pincode 411001' },
            { from: 'bot', text: '✅ Order placed! Estimated delivery: 40 mins.\n\nPay on delivery or use UPI 💳\nTracking link will be sent shortly!' },
        ],
    },
    telegram: {
        color: '#229ED9',
        label: 'Telegram',
        badge: 'Group Orders',
        messages: [
            { from: 'user', text: '/menu' },
            { from: 'bot', text: '🍽️ *Spice Garden Menu*\n\n*Starters*\n• Veg Spring Rolls — ₹150\n• Chicken Tikka — ₹280\n\n*Main Course*\n• Butter Naan + Dal — ₹180\n• Biryani (Veg/Chicken) — ₹220/₹300\n\nType /order to start ordering!' },
            { from: 'user', text: '/order Chicken Biryani x2' },
            { from: 'bot', text: '🛒 *Order Summary*\n• Chicken Biryani × 2 — ₹600\n\nTable number or delivery address?' },
            { from: 'user', text: 'Delivery: 12B, Koregaon Park' },
            { from: 'bot', text: '✅ *Confirmed!* ETA 35 mins\n📞 Our rider will call before delivery.' },
        ],
    },
    website: {
        color: '#f97316',
        label: 'Website',
        badge: 'No App Needed',
        messages: [
            { from: 'bot', text: '👋 Welcome to Spice Garden!\n\nOrder from our website — no app download needed.\n\nChoose: 🍽️ Dine-In or 🛵 Home Delivery?' },
            { from: 'user', text: 'Home Delivery' },
            { from: 'bot', text: 'Great! Your area is serviceable ✅\n\nTop picks today:\n1. Dal Makhani Combo — ₹299\n2. Chicken Thali — ₹399\n3. Paneer Special — ₹349\n\nWhat\'d you like?' },
            { from: 'user', text: 'Dal Makhani Combo' },
            { from: 'bot', text: '🎉 Added to cart!\n*Total: ₹299*\n\nEnter your address to confirm order 👇' },
        ],
    },
};

const PAIN_POINTS = [
    { icon: Phone, title: 'Phone rings non-stop during lunch rush', fix: 'AI takes orders on WhatsApp so your staff can cook, not talk' },
    { icon: Instagram, title: 'Instagram DMs pile up unanswered', fix: 'Auto-reply every DM instantly — even at midnight' },
    { icon: BadgePercent, title: '25–30% commission to Swiggy & Zomato', fix: 'Direct orders on your own channels — zero commission' },
    { icon: RefreshCw, title: 'Order errors when staff take verbal orders', fix: 'Written confirmation on chat = no misunderstandings' },
    { icon: Clock, title: 'No one to answer "Are you open?" at 11pm', fix: '24/7 AI tells customers hours, menu, and takes pre-orders' },
    { icon: Users, title: 'Losing repeat customers to competitors', fix: 'Automated re-engagement: "It\'s been a week, want to order again?"' },
];

const FEATURES = [
    { icon: Layers, title: 'Live Menu Sync', desc: 'Update once in the dashboard. All channels — WhatsApp, Insta, Telegram — reflect changes instantly.' },
    { icon: Utensils, title: 'Table QR Ordering', desc: 'Print QR codes for each table. Customers scan, chat, and order without calling a waiter.' },
    { icon: ShoppingBag, title: 'Home Delivery Flow', desc: 'Customer shares pin/address in chat. AI confirms, sends OTP-linked tracking, notifies kitchen.' },
    { icon: Bell, title: 'Kitchen Order Alerts', desc: 'Every confirmed order triggers an instant notification to your kitchen printer or POS system.' },
    { icon: Star, title: 'Upsell Engine', desc: '"Would you like garlic naan with that?" — AI suggests add-ons to increase average order value.' },
    { icon: TrendingUp, title: 'Repeat Order Memory', desc: 'Returning customers get "Order your usual? Chicken Biryani + Raita?" — one-tap reorder.' },
    { icon: MessageSquare, title: '10 Indian Languages', desc: 'Handles Hinglish, Hindi, Tamil, Telugu, Marathi naturally — customers order in their language.' },
    { icon: ShieldCheck, title: 'Direct Payment Links', desc: 'Send UPI/Razorpay links in chat. No redirect, no friction — pay inside WhatsApp.' },
];

const FAQS = [
    { q: 'Can customers order food directly on WhatsApp?', a: 'Yes. Customers send a message, the AI shows your menu, takes their order, confirms the total, and asks for table number or delivery address. No app download needed — it all happens in WhatsApp.' },
    { q: 'Does it work for both dine-in and home delivery?', a: 'Absolutely. For dine-in, customers scan a QR code on the table and order via WhatsApp or the website widget. For delivery, they message from any channel and provide their address. The AI handles both flows separately.' },
    { q: 'Will I still pay Swiggy or Zomato commission?', a: 'Orders placed through SwanDigitals go directly to your kitchen — no third-party marketplace, no 15–30% commission. You own the customer data and the relationship.' },
    { q: 'How does the menu stay updated?', a: 'You update your menu once in our dashboard — prices, items, photos, availability. Changes reflect instantly across all channels. Mark items as "sold out" with one click.' },
    { q: 'Does it support Hindi and regional languages?', a: 'Yes. The chatbot handles Hinglish, Hindi, Tamil, Telugu, Marathi, and 6 more Indian languages natively. Your customers can order in whatever language they\'re comfortable with.' },
    { q: 'Can I connect it to my existing POS or billing system?', a: 'We integrate with popular Indian POS systems via webhooks and API. Our team handles the integration during onboarding — no technical work on your side.' },
];

/* ─────────────────────────────────────────────────────────────────────────────
   COMPONENT
───────────────────────────────────────────────────────────────────────────── */
export default function RestaurantContent() {
    const [activeChannel, setActiveChannel] = useState<'whatsapp' | 'instagram' | 'telegram' | 'website'>('whatsapp');
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const flow = CHANNEL_FLOWS[activeChannel];

    return (
        <SiteLayout>
            {/* ================================================================
                HERO
            ================================================================ */}
            <section className="relative bg-white overflow-hidden pt-20 pb-24 md:pt-28 md:pb-32">
                {/* Warm background blob */}
                <div className="absolute inset-0 pointer-events-none" aria-hidden>
                    <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-orange-50 opacity-70 blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-amber-50/60 blur-3xl" />
                </div>

                <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                        {/* Left: Copy */}
                        <div className="lg:col-span-6 xl:col-span-5">
                            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-orange-50 border border-orange-200 rounded-full text-orange-700 text-sm font-semibold mb-6">
                                <Utensils className="w-4 h-4" />
                                For Restaurants &amp; Cloud Kitchens
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-slate-900 leading-[1.08] tracking-tight mb-5">
                                Your Restaurant's{' '}
                                <span className="relative inline-block">
                                    <span className="relative z-10 text-orange-500">AI Waiter</span>
                                    <span className="absolute -bottom-1 left-0 right-0 h-3 bg-orange-100 -z-0 rounded" aria-hidden />
                                </span>
                                {' '}on WhatsApp, Instagram &amp; Telegram
                            </h1>

                            <p className="text-lg text-slate-500 leading-relaxed mb-8 max-w-lg">
                                Customers order food from any channel — dine-in by scanning a QR at the table, or home delivery on WhatsApp. Your kitchen gets the order. Zero commission. Zero missed messages.
                            </p>

                            {/* Trust chips */}
                            <div className="flex flex-wrap gap-3 mb-8">
                                {[
                                    '0% Swiggy Commission',
                                    '24/7 Order Taking',
                                    'Live in 5 Days',
                                    '10 Indian Languages',
                                ].map(t => (
                                    <span key={t} className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-700 bg-slate-50 border border-slate-200 rounded-full px-3 py-1">
                                        <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                                        {t}
                                    </span>
                                ))}
                            </div>

                            {/* CTAs */}
                            <div className="flex flex-col sm:flex-row gap-3">
                                <Link
                                    href="/demo"
                                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl shadow-md shadow-orange-200 transition-all duration-200 text-sm"
                                >
                                    Book Free Demo
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                                <Link
                                    href="#how-it-works"
                                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-slate-200 hover:border-slate-300 bg-white text-slate-700 font-semibold rounded-xl transition-all duration-200 text-sm"
                                >
                                    See How It Works
                                </Link>
                            </div>
                        </div>

                        {/* Right: Chat demo panel */}
                        <div className="lg:col-span-6 xl:col-span-7">
                            {/* Channel tabs */}
                            <div className="flex gap-2 mb-4 flex-wrap">
                                {(['whatsapp', 'instagram', 'telegram', 'website'] as const).map((ch) => {
                                    const c = CHANNEL_FLOWS[ch];
                                    const isActive = activeChannel === ch;
                                    return (
                                        <button
                                            key={ch}
                                            onClick={() => setActiveChannel(ch)}
                                            className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200 cursor-pointer ${
                                                isActive
                                                    ? 'text-white border-transparent shadow-sm'
                                                    : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
                                            }`}
                                            style={isActive ? { backgroundColor: c.color, borderColor: c.color } : {}}
                                        >
                                            {ch === 'whatsapp' && <MessageSquare className="w-3.5 h-3.5" />}
                                            {ch === 'instagram' && <Instagram className="w-3.5 h-3.5" />}
                                            {ch === 'telegram' && <Send className="w-3.5 h-3.5" />}
                                            {ch === 'website' && <Globe className="w-3.5 h-3.5" />}
                                            {c.label}
                                            {isActive && (
                                                <span className="ml-1 text-[10px] font-bold bg-white/20 rounded-full px-1.5 py-0.5">
                                                    {c.badge}
                                                </span>
                                            )}
                                        </button>
                                    );
                                })}
                            </div>

                            {/* Chat window */}
                            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xl overflow-hidden">
                                {/* Header bar */}
                                <div className="flex items-center gap-3 px-5 py-4 border-b border-slate-100" style={{ backgroundColor: flow.color + '10' }}>
                                    <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: flow.color }}>
                                        <Utensils className="w-4 h-4 text-white" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-slate-900">Spice Garden</div>
                                        <div className="text-xs text-slate-500 flex items-center gap-1">
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
                                            Online · AI-powered
                                        </div>
                                    </div>
                                    <span className="ml-auto text-xs font-semibold px-2 py-0.5 rounded-full text-white" style={{ backgroundColor: flow.color }}>
                                        {flow.label}
                                    </span>
                                </div>

                                {/* Messages */}
                                <div className="p-5 space-y-3 bg-slate-50/50 min-h-[320px] max-h-[380px] overflow-y-auto">
                                    {flow.messages.map((msg, i) => (
                                        <div key={`${activeChannel}-${i}`} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                                            {msg.from === 'bot' && (
                                                <div className="w-6 h-6 rounded-full shrink-0 mr-2 mt-1 flex items-center justify-center" style={{ backgroundColor: flow.color }}>
                                                    <Bot className="w-3 h-3 text-white" />
                                                </div>
                                            )}
                                            <div
                                                className={`max-w-[75%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${
                                                    msg.from === 'user'
                                                        ? 'bg-slate-700 text-white rounded-br-sm'
                                                        : 'bg-white border border-slate-100 text-slate-800 shadow-sm rounded-bl-sm'
                                                }`}
                                            >
                                                {msg.text}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Input bar */}
                                <div className="px-4 py-3 bg-white border-t border-slate-100 flex items-center gap-2">
                                    <div className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-sm text-slate-400">
                                        Type a message…
                                    </div>
                                    <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 cursor-default" style={{ backgroundColor: flow.color }}>
                                        <ArrowRight className="w-4 h-4 text-white" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================================================================
                PAIN POINTS STRIP
            ================================================================ */}
            <section className="bg-slate-900 py-16 md:py-20">
                <div className="max-w-7xl mx-auto px-5 lg:px-8">
                    <div className="text-center mb-10">
                        <p className="text-orange-400 text-sm font-bold uppercase tracking-widest mb-3">What Restaurant Owners Tell Us</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-white">Sound Familiar?</h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {PAIN_POINTS.map(({ icon: Icon, title, fix }) => (
                            <div key={title} className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-orange-500/40 rounded-2xl p-6 transition-all duration-200">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center shrink-0 mt-0.5">
                                        <Icon className="w-5 h-5 text-orange-400" />
                                    </div>
                                    <div>
                                        <p className="text-white font-semibold text-sm mb-2 leading-snug">{title}</p>
                                        <p className="text-slate-400 text-xs leading-relaxed">
                                            <span className="text-emerald-400 font-semibold">Fix: </span>
                                            {fix}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================================================================
                HOW IT WORKS
            ================================================================ */}
            <section id="how-it-works" className="py-20 md:py-28 bg-white">
                <div className="max-w-7xl mx-auto px-5 lg:px-8">
                    <div className="text-center mb-16">
                        <p className="text-orange-500 text-sm font-bold uppercase tracking-widest mb-3">Simple for You. Magical for Customers.</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Order in 3 Messages. Done.</h2>
                        <p className="text-slate-500 mt-3 max-w-xl mx-auto text-base">
                            No new app. No staff training. Customers order the same way they text friends.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative">
                        {/* Connector line (desktop) */}
                        <div className="hidden md:block absolute top-14 left-[calc(16.66%+24px)] right-[calc(16.66%+24px)] h-px bg-gradient-to-r from-orange-200 via-orange-300 to-orange-200" aria-hidden />

                        {[
                            {
                                step: '01',
                                icon: MessageSquare,
                                title: 'Customer Messages on Any Channel',
                                desc: "They send \"menu please\" on WhatsApp, reply to your Instagram story, or scan the QR on their table — it doesn't matter which.",
                            },
                            {
                                step: '02',
                                icon: Utensils,
                                title: 'AI Shows Menu & Takes the Order',
                                desc: 'SwanDigitals shows your live menu, handles item selection, asks about dine-in or delivery, confirms the total, and collects address if needed.',
                            },
                            {
                                step: '03',
                                icon: Bell,
                                title: 'Kitchen Gets Notified Instantly',
                                desc: 'The confirmed order pings your kitchen dashboard, POS, or WhatsApp group. Customer gets an ETA. Everything is logged automatically.',
                            },
                        ].map(({ step, icon: Icon, title, desc }) => (
                            <div key={step} className="relative flex flex-col items-center text-center">
                                <div className="w-28 h-28 rounded-3xl bg-orange-50 border-2 border-orange-100 flex flex-col items-center justify-center mb-6 relative z-10">
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
                DINE-IN vs DELIVERY
            ================================================================ */}
            <section className="py-20 md:py-28 bg-slate-50">
                <div className="max-w-7xl mx-auto px-5 lg:px-8">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">One Bot. Two Order Modes.</h2>
                        <p className="text-slate-500 mt-3 text-base">Whether customers are at your table or on their couch, the experience is seamless.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                        {/* Dine-In Card */}
                        <div className="bg-white border border-slate-200/80 rounded-3xl p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center mb-6">
                                <QrCode className="w-7 h-7 text-orange-500" />
                            </div>
                            <span className="inline-block text-xs font-bold uppercase tracking-widest text-orange-500 bg-orange-50 px-3 py-1 rounded-full mb-4">
                                Dine-In
                            </span>
                            <h3 className="text-2xl font-bold text-slate-900 mb-3">Table Ordering via QR Code</h3>
                            <p className="text-slate-500 text-sm leading-relaxed mb-6">
                                Print a QR sticker for each table. Customers scan it, get a WhatsApp or web chat pre-filled with their table number, browse the menu, and order — without waving for a waiter.
                            </p>
                            <ul className="space-y-3">
                                {[
                                    'Each table gets a unique QR → auto-tagged with table number',
                                    'Customers browse full menu with prices & veg/non-veg filters',
                                    'Order goes straight to kitchen — waiter not needed for ordering',
                                    'Add more items anytime during the meal',
                                    'Auto-generate bill request with one message',
                                ].map(item => (
                                    <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
                                        <Check className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Delivery Card */}
                        <div className="bg-white border border-slate-200/80 rounded-3xl p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-14 h-14 rounded-2xl bg-amber-50 flex items-center justify-center mb-6">
                                <ShoppingBag className="w-7 h-7 text-amber-500" />
                            </div>
                            <span className="inline-block text-xs font-bold uppercase tracking-widest text-amber-600 bg-amber-50 px-3 py-1 rounded-full mb-4">
                                Home Delivery
                            </span>
                            <h3 className="text-2xl font-bold text-slate-900 mb-3">Order on WhatsApp, Insta, or Telegram</h3>
                            <p className="text-slate-500 text-sm leading-relaxed mb-6">
                                Customers order from wherever they already are — no app install, no website visit required. AI confirms the address, shares delivery ETA, and sends a UPI payment link inside the chat.
                            </p>
                            <ul className="space-y-3">
                                {[
                                    'WhatsApp, Instagram DM, Telegram, or website widget',
                                    'AI collects delivery address and calculates ETA',
                                    'UPI / Razorpay payment link sent inside the chat',
                                    'Real-time delivery status updates via message',
                                    'Zero commission — order goes directly to you',
                                ].map(item => (
                                    <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
                                        <Check className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================================================================
                FEATURES BENTO GRID
            ================================================================ */}
            <section className="py-20 md:py-28 bg-white">
                <div className="max-w-7xl mx-auto px-5 lg:px-8">
                    <div className="text-center mb-14">
                        <p className="text-orange-500 text-sm font-bold uppercase tracking-widest mb-3">Everything Included</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Built for How Restaurants Actually Work</h2>
                        <p className="text-slate-500 mt-3 text-base max-w-xl mx-auto">
                            Not a generic chatbot — designed specifically for restaurant operations in India.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {FEATURES.map(({ icon: Icon, title, desc }) => (
                            <div key={title} className="group bg-slate-50 hover:bg-white border border-slate-200/80 hover:border-orange-200 hover:shadow-md rounded-2xl p-6 transition-all duration-200 cursor-default">
                                <div className="w-11 h-11 rounded-xl bg-orange-100 group-hover:bg-orange-500 flex items-center justify-center mb-4 transition-colors duration-200">
                                    <Icon className="w-5 h-5 text-orange-500 group-hover:text-white transition-colors duration-200" />
                                </div>
                                <h3 className="font-bold text-slate-900 text-sm mb-1.5">{title}</h3>
                                <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================================================================
                STATS / SOCIAL PROOF
            ================================================================ */}
            <section className="py-16 md:py-20 bg-gradient-to-br from-orange-500 to-orange-600">
                <div className="max-w-7xl mx-auto px-5 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 text-center">
                        {[
                            { value: '0%', label: 'Commission on direct orders', sub: 'vs 25–30% on aggregators' },
                            { value: '< 2s', label: 'Average first reply time', sub: 'on WhatsApp & Instagram' },
                            { value: '80%', label: 'Repetitive queries automated', sub: 'menu, hours, tracking, FAQs' },
                            { value: '5 Days', label: 'Typical go-live timeline', sub: 'from onboarding to live orders' },
                        ].map(({ value, label, sub }) => (
                            <div key={label}>
                                <div className="text-4xl md:text-5xl font-black text-white mb-2">{value}</div>
                                <div className="text-orange-100 font-semibold text-sm mb-1">{label}</div>
                                <div className="text-orange-200/70 text-xs">{sub}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================================================================
                CHANNELS DEEP DIVE
            ================================================================ */}
            <section className="py-20 md:py-28 bg-slate-50">
                <div className="max-w-7xl mx-auto px-5 lg:px-8">
                    <div className="text-center mb-14">
                        <p className="text-orange-500 text-sm font-bold uppercase tracking-widest mb-3">Omnichannel Ordering</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Your Customers Are on Every Channel. So Is Your AI.</h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {[
                            {
                                name: 'WhatsApp',
                                color: '#25D366',
                                bg: '#f0fdf4',
                                border: '#bbf7d0',
                                icon: MessageSquare,
                                headline: 'Most Used in India',
                                bullets: ['Official WhatsApp Business API', 'Menu in chat bubbles', 'UPI payment links', 'Table QR + delivery both'],
                            },
                            {
                                name: 'Instagram DM',
                                color: '#E1306C',
                                bg: '#fff1f2',
                                border: '#fecdd3',
                                icon: Instagram,
                                headline: 'Turn Followers into Customers',
                                bullets: ['Reply to story mentions', 'Auto-DM after reels', 'Full ordering flow in DMs', 'Works with verified & regular accounts'],
                            },
                            {
                                name: 'Telegram',
                                color: '#229ED9',
                                bg: '#eff6ff',
                                border: '#bfdbfe',
                                icon: Send,
                                headline: 'Great for Groups & Channels',
                                bullets: ['Bot commands like /menu /order', 'Group order collection', 'Fast & lightweight', 'Ideal for tech-savvy customers'],
                            },
                            {
                                name: 'Website Widget',
                                color: '#f97316',
                                bg: '#fff7ed',
                                border: '#fed7aa',
                                icon: Globe,
                                headline: 'No App. No Login.',
                                bullets: ['Floating chat bubble', 'Works on mobile & desktop', 'Custom branding & colours', 'Embedded menu + ordering'],
                            },
                        ].map(({ name, color, bg, border, icon: Icon, headline, bullets }) => (
                            <div
                                key={name}
                                className="rounded-2xl border p-6 transition-all hover:shadow-md"
                                style={{ backgroundColor: bg, borderColor: border }}
                            >
                                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: color + '20' }}>
                                    <Icon className="w-5 h-5" style={{ color }} />
                                </div>
                                <div className="font-bold text-slate-900 text-base mb-0.5">{name}</div>
                                <div className="text-xs font-semibold mb-4" style={{ color }}>{headline}</div>
                                <ul className="space-y-2">
                                    {bullets.map(b => (
                                        <li key={b} className="flex items-start gap-2 text-xs text-slate-600">
                                            <Check className="w-3.5 h-3.5 mt-0.5 shrink-0" style={{ color }} />
                                            {b}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================================================================
                PRICING
            ================================================================ */}
            <section className="py-20 md:py-28 bg-white">
                <div className="max-w-7xl mx-auto px-5 lg:px-8">
                    <div className="text-center mb-14">
                        <p className="text-orange-500 text-sm font-bold uppercase tracking-widest mb-3">Simple Flat Pricing</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">No Commission. No Per-Order Fee. Ever.</h2>
                        <p className="text-slate-500 mt-3 text-base">Flat monthly subscription. Unlimited orders. Your margin stays yours.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
                        {/* Free */}
                        <div className="border border-slate-200 rounded-3xl p-7 flex flex-col">
                            <div className="mb-6">
                                <div className="text-slate-500 text-sm font-semibold mb-1">Free</div>
                                <div className="text-4xl font-black text-slate-900">₹0<span className="text-base font-normal text-slate-400">/mo</span></div>
                                <p className="text-slate-400 text-xs mt-2">Website live chat widget only. Great to try before committing.</p>
                            </div>
                            <ul className="space-y-2.5 mb-8 flex-1">
                                {['Website chat widget', '1 human agent seat', 'Basic FAQ replies', 'CRM sync (HubSpot)'].map(f => (
                                    <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
                                        <Check className="w-4 h-4 text-slate-400 shrink-0" />
                                        {f}
                                    </li>
                                ))}
                                {['WhatsApp / Instagram ordering', 'Table QR codes', 'Payment links', 'Multi-language'].map(f => (
                                    <li key={f} className="flex items-center gap-2 text-sm text-slate-400 line-through">
                                        <span className="w-4 h-4 shrink-0 text-slate-300">✕</span>
                                        {f}
                                    </li>
                                ))}
                            </ul>
                            <Link href="https://chat.swandigitals.com" target="_blank" className="w-full text-center py-3 border border-slate-200 rounded-xl text-sm font-bold text-slate-700 hover:border-slate-300 transition-colors">
                                Start Free
                            </Link>
                        </div>

                        {/* Growth Hub */}
                        <div className="border-2 border-orange-500 rounded-3xl p-7 flex flex-col relative shadow-xl shadow-orange-100">
                            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
                                Most Popular for Restaurants
                            </div>
                            <div className="mb-6">
                                <div className="text-orange-600 text-sm font-bold mb-1">Growth Hub</div>
                                <div className="text-4xl font-black text-slate-900">₹1,999<span className="text-base font-normal text-slate-400">/mo</span></div>
                                <div className="text-xs text-slate-400 line-through mt-0.5">was ₹4,999/mo</div>
                                <p className="text-slate-500 text-xs mt-2">WhatsApp + Web ordering for small restaurants and QSRs.</p>
                            </div>
                            <ul className="space-y-2.5 mb-8 flex-1">
                                {[
                                    'WhatsApp Business API ordering',
                                    'Website chat widget',
                                    'Table QR code ordering',
                                    'Home delivery flow',
                                    'AI menu suggestions & upsell',
                                    '10 Indian languages',
                                    'Unlimited orders',
                                    'Kitchen order alerts',
                                ].map(f => (
                                    <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
                                        <Check className="w-4 h-4 text-orange-500 shrink-0" />
                                        {f}
                                    </li>
                                ))}
                            </ul>
                            <Link href="/demo" className="w-full text-center py-3.5 bg-orange-500 hover:bg-orange-600 text-white rounded-xl text-sm font-bold transition-colors shadow-md shadow-orange-200">
                                Book Demo →
                            </Link>
                        </div>

                        {/* Performance Pro */}
                        <div className="border border-slate-200 bg-slate-900 rounded-3xl p-7 flex flex-col">
                            <div className="mb-6">
                                <div className="text-orange-400 text-sm font-bold mb-1">Performance Pro</div>
                                <div className="text-4xl font-black text-white">₹4,999<span className="text-base font-normal text-slate-400">/mo</span></div>
                                <div className="text-xs text-slate-500 line-through mt-0.5">was ₹9,999/mo</div>
                                <p className="text-slate-400 text-xs mt-2">Full omnichannel for multi-outlet restaurants and cloud kitchens.</p>
                            </div>
                            <ul className="space-y-2.5 mb-8 flex-1">
                                {[
                                    'Everything in Growth Hub',
                                    'Instagram DM ordering',
                                    'Telegram bot ordering',
                                    'Multi-outlet management',
                                    'CRM + POS integration',
                                    'Custom AI persona & brand voice',
                                    'Repeat order memory',
                                    'Advanced analytics dashboard',
                                ].map(f => (
                                    <li key={f} className="flex items-center gap-2 text-sm text-slate-300">
                                        <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                                        {f}
                                    </li>
                                ))}
                            </ul>
                            <Link href="/demo" className="w-full text-center py-3.5 bg-white hover:bg-orange-50 text-slate-900 rounded-xl text-sm font-bold transition-colors">
                                Talk to Sales →
                            </Link>
                        </div>
                    </div>

                    <p className="text-center text-slate-400 text-xs mt-8">
                        All plans include setup support. WhatsApp conversation charges billed at Meta's official rate — no markup.
                    </p>
                </div>
            </section>

            {/* ================================================================
                FAQ
            ================================================================ */}
            <section className="py-20 md:py-24 bg-slate-50">
                <div className="max-w-3xl mx-auto px-5 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Frequently Asked Questions</h2>
                        <p className="text-slate-500 mt-3 text-base">Real questions from restaurant owners before signing up.</p>
                    </div>

                    <div className="space-y-3">
                        {FAQS.map(({ q, a }, i) => (
                            <div
                                key={i}
                                className="bg-white border border-slate-200 rounded-2xl overflow-hidden"
                            >
                                <button
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    className="w-full flex justify-between items-center text-left px-6 py-5 gap-4 cursor-pointer hover:bg-slate-50 transition-colors"
                                >
                                    <span className="font-semibold text-slate-900 text-sm md:text-base">{q}</span>
                                    <ChevronDown
                                        className={`w-5 h-5 text-orange-500 shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`}
                                    />
                                </button>
                                {openFaq === i && (
                                    <div className="px-6 pb-5 text-slate-500 text-sm leading-relaxed border-t border-slate-100 pt-4">
                                        {a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================================================================
                FINAL CTA
            ================================================================ */}
            <section className="py-20 md:py-28 bg-white">
                <div className="max-w-4xl mx-auto px-5 lg:px-8 text-center">
                    <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 rounded-3xl p-10 md:p-16 relative overflow-hidden">
                        {/* Decorative glow */}
                        <div className="absolute top-0 right-0 w-72 h-72 bg-orange-500/10 blur-3xl rounded-full pointer-events-none" aria-hidden />
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-500/10 blur-3xl rounded-full pointer-events-none" aria-hidden />

                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-400 text-sm font-semibold mb-6">
                                <Sparkles className="w-4 h-4" />
                                No Credit Card Required
                            </div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                                Stop Losing Orders to<br />
                                <span className="text-orange-400">Unanswered Messages</span>
                            </h2>
                            <p className="text-slate-400 text-base mb-8 max-w-xl mx-auto">
                                Book a 20-minute call. We'll set up a demo with your actual menu on WhatsApp — so you can see exactly how your restaurant would look before signing anything.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href="/demo"
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-2xl shadow-xl shadow-orange-900/30 transition-all duration-200 text-base"
                                >
                                    Book Your Free Demo
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                                <Link
                                    href="/pricing"
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/10 hover:bg-white/5 text-white font-semibold rounded-2xl transition-all duration-200 text-base"
                                >
                                    View All Plans
                                </Link>
                            </div>
                            <p className="text-slate-500 text-xs mt-6">
                                WhatsApp + Instagram + Telegram setup included · Live in 5 business days
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </SiteLayout>
    );
}
