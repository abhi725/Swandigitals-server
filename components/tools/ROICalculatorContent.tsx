"use client";

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { 
    MessageSquare, Phone, TrendingUp, Clock, Check, 
    ArrowRight, HelpCircle, Shield, Sparkles, AlertCircle, 
    Bot, Users, IndianRupee, Layers, Plus, Minus
} from 'lucide-react';
import Link from 'next/link';

export default function ROICalculatorContent() {
    const searchParams = useSearchParams();
    const productParam = searchParams.get('product');
    const initialProduct = (productParam === 'voicebot' || productParam === 'voice') ? 'voicebot' : 'chatbot';
    const [activeProduct, setActiveProduct] = useState<'chatbot' | 'voicebot'>(initialProduct);

    // Chatbot Calculator Inputs
    const [monthlyChats, setMonthlyChats] = useState(3000);
    const [humanAgents, setHumanAgents] = useState(2);
    const [agentSalary, setAgentSalary] = useState(22000);
    const [automationRate, setAutomationRate] = useState(80);
    const [selectedChatPlan, setSelectedChatPlan] = useState<'growth' | 'pro'>('growth');

    // Voice AI Calculator Inputs
    const [monthlyMinutes, setMonthlyMinutes] = useState(3000);
    const [telecallers, setTelecallers] = useState(2);
    const [telecallerSalary, setTelecallerSalary] = useState(22000);

    // Sync product from URL hash on mount or when searchParams change
    useEffect(() => {
        const p = searchParams.get('product');
        if (p === 'voicebot' || p === 'voice') {
            setActiveProduct('voicebot');
        } else if (p === 'chatbot' || p === 'chat') {
            setActiveProduct('chatbot');
        } else if (typeof window !== 'undefined' && window.location.hash.includes('voice')) {
            setActiveProduct('voicebot');
        }
    }, [searchParams]);

    const handleProductChange = (prod: 'chatbot' | 'voicebot') => {
        setActiveProduct(prod);
        const anchor = prod === 'chatbot' ? 'chatbot-calculator' : 'voice-calculator';
        const newUrl = `${window.location.pathname}?product=${prod}#${anchor}`;
        window.history.replaceState({ ...window.history.state, as: newUrl, url: newUrl }, '', newUrl);
    };

    // =========================================================================
    // DYNAMIC CHATBOT CALCULATIONS (Fully responsive to all 5 sliders & toggles)
    // =========================================================================
    const chatPlanPrice = selectedChatPlan === 'growth' ? 1999 : 4999;
    const chatsAutomated = Math.round(monthlyChats * (automationRate / 100));
    const chatsHumanEscalated = monthlyChats - chatsAutomated;

    // In India, 1 agent handles ~1,000 chats/month (40 chats/day * 25 days)
    const baselineAgentsNeeded = Math.max(humanAgents, Math.ceil(monthlyChats / 1000));
    const currentHumanChatCost = baselineAgentsNeeded * agentSalary;

    // With AI: only escalated chats need human attention
    const escalatedHumanAgentsNeeded = Math.max(1, Math.ceil(chatsHumanEscalated / 1000));
    const escalatedHumanCost = Math.round(chatsHumanEscalated * (agentSalary / 1000));
    const totalCostWithAI = chatPlanPrice + escalatedHumanCost;

    const monthlyChatSavings = Math.max(1000, currentHumanChatCost - totalCostWithAI);
    const annualChatSavings = monthlyChatSavings * 12;
    const chatSavingsPercent = Math.min(96, Math.max(15, Math.round((monthlyChatSavings / currentHumanChatCost) * 100)));
    const chatHoursSaved = Math.round((chatsAutomated * 6) / 60); // 6 mins per chat

    // =========================================================================
    // DYNAMIC VOICE AI CALCULATIONS (Fully responsive to call mins & telecallers)
    // =========================================================================
    const voiceRatePerMin = monthlyMinutes >= 5000 ? 4.00 : 5.00;
    const voicePlanTier = monthlyMinutes >= 5000 ? 'Committed Usage (₹4.00/min)' : 'Pay-as-you-go (₹5.00/min)';
    const swanVoiceCost = Math.round(monthlyMinutes * voiceRatePerMin);

    // 1 telecaller in India achieves ~2,500 to 3,000 actual talk minutes/month
    const telecallersNeeded = Math.max(telecallers, Math.ceil(monthlyMinutes / 2500));
    const currentHumanVoiceCost = telecallersNeeded * telecallerSalary;

    const monthlyVoiceSavings = Math.max(1000, currentHumanVoiceCost - swanVoiceCost);
    const annualVoiceSavings = monthlyVoiceSavings * 12;
    const voiceSavingsPercent = Math.min(94, Math.max(15, Math.round((monthlyVoiceSavings / currentHumanVoiceCost) * 100)));
    const humanCostPerMin = (currentHumanVoiceCost / monthlyMinutes).toFixed(2);

    return (
        <div className="relative">
            <section className="pt-2 pb-16 lg:pb-20 bg-white">
                <div className="max-w-6xl mx-auto px-5 lg:px-8">
                    {/* Sleek Sliding Product Toggle Switch */}
                    <div className="flex flex-col items-center justify-center mb-10">
                        <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3 text-center">
                            Select What You Want to Automate
                        </p>
                        <div className="bg-slate-100 p-1.5 rounded-full flex border border-slate-200/80 shadow-inner w-full max-w-xs relative">
                            <div 
                                className={`absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] rounded-full bg-orange-500 shadow-sm transition-transform duration-300 ease-in-out ${
                                    activeProduct === 'chatbot' ? 'translate-x-0' : 'translate-x-[calc(100%+6px)]'
                                }`} 
                            />
                            <button
                                type="button"
                                onClick={() => handleProductChange('chatbot')}
                                className={`flex-1 py-2.5 text-sm font-bold rounded-full relative z-10 transition-colors flex items-center justify-center gap-1.5 ${
                                    activeProduct === 'chatbot' ? 'text-white' : 'text-slate-600 hover:text-slate-900'
                                }`}
                            >
                                <MessageSquare className="w-4 h-4" />
                                AI Chatbot
                            </button>
                            <button
                                type="button"
                                onClick={() => handleProductChange('voicebot')}
                                className={`flex-1 py-2.5 text-sm font-bold rounded-full relative z-10 transition-colors flex items-center justify-center gap-1.5 ${
                                    activeProduct === 'voicebot' ? 'text-white' : 'text-slate-600 hover:text-slate-900'
                                }`}
                            >
                                <Phone className="w-4 h-4" />
                                Voice AI
                            </button>
                        </div>
                    </div>

                    {/* =========================================================
                        MODE 1: AI CHATBOT CALCULATOR
                    ========================================================= */}
                    {activeProduct === 'chatbot' && (
                        <div id="chatbot-calculator" className="scroll-mt-28">
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
                                {/* Left: User Usage Inputs */}
                                <div className="lg:col-span-7 bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-200/80 shadow-xs">
                                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200">
                                        <div>
                                            <h2 className="text-xl md:text-2xl font-bold text-slate-900">Chatbot Support Metrics</h2>
                                            <p className="text-xs text-slate-500 mt-1">Adjust sliders or use +/- to update your numbers in real-time.</p>
                                        </div>
                                        <span className="px-3 py-1 bg-orange-100 text-orange-700 text-xs font-bold rounded-full shrink-0">
                                            WhatsApp + Web
                                        </span>
                                    </div>

                                    <div className="space-y-7">
                                        {/* Input 1: Monthly Inquiries */}
                                        <div>
                                            <div className="flex justify-between items-center mb-2">
                                                <label htmlFor="monthlyChats" className="text-sm font-bold text-slate-800">
                                                    Monthly Customer Chats
                                                </label>
                                                <div className="flex items-center gap-2">
                                                    <button 
                                                        type="button" 
                                                        onClick={() => setMonthlyChats(prev => Math.max(500, prev - 500))}
                                                        className="w-6 h-6 rounded-md bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold flex items-center justify-center text-xs transition-colors"
                                                        aria-label="Decrease chats"
                                                    >
                                                        -
                                                    </button>
                                                    <span className="text-base font-black text-orange-600 min-w-[90px] text-center">
                                                        {monthlyChats.toLocaleString('en-IN')} <span className="text-xs font-normal text-slate-500">chats</span>
                                                    </span>
                                                    <button 
                                                        type="button" 
                                                        onClick={() => setMonthlyChats(prev => Math.min(25000, prev + 500))}
                                                        className="w-6 h-6 rounded-md bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold flex items-center justify-center text-xs transition-colors"
                                                        aria-label="Increase chats"
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            </div>
                                            <input
                                                id="monthlyChats"
                                                type="range"
                                                min="500"
                                                max="25000"
                                                step="250"
                                                value={monthlyChats}
                                                onChange={(e) => setMonthlyChats(Number(e.target.value))}
                                                className="range-slider"
                                            />
                                            <div className="flex justify-between text-[11px] text-slate-400 mt-2 font-medium">
                                                <span>500</span>
                                                <span>5,000</span>
                                                <span>15,000</span>
                                                <span>25,000+</span>
                                            </div>
                                            <div className="flex gap-2 mt-3 flex-wrap">
                                                {[1000, 3000, 5000, 10000].map((preset) => (
                                                    <button
                                                        key={preset}
                                                        type="button"
                                                        onClick={() => setMonthlyChats(preset)}
                                                        className={`text-xs px-2.5 py-1 rounded-lg border font-medium transition-colors ${
                                                            monthlyChats === preset
                                                                ? 'bg-orange-500 text-white border-orange-500 shadow-xs'
                                                                : 'bg-white text-slate-600 border-slate-200 hover:border-orange-300'
                                                        }`}
                                                    >
                                                        {preset.toLocaleString('en-IN')} chats
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Input 2: Human Agents & Salary */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4 border-t border-slate-200/60">
                                            <div>
                                                <div className="flex justify-between items-center mb-2">
                                                    <label htmlFor="humanAgents" className="text-sm font-bold text-slate-800">
                                                        Support Agents
                                                    </label>
                                                    <div className="flex items-center gap-1.5">
                                                        <button 
                                                            type="button" 
                                                            onClick={() => setHumanAgents(prev => Math.max(1, prev - 1))}
                                                            className="w-5 h-5 rounded bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold flex items-center justify-center text-xs"
                                                            aria-label="Decrease agents"
                                                        >
                                                            -
                                                        </button>
                                                        <span className="text-sm font-black text-orange-600 min-w-[50px] text-center">
                                                            {humanAgents} {humanAgents === 1 ? 'seat' : 'seats'}
                                                        </span>
                                                        <button 
                                                            type="button" 
                                                            onClick={() => setHumanAgents(prev => Math.min(10, prev + 1))}
                                                            className="w-5 h-5 rounded bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold flex items-center justify-center text-xs"
                                                            aria-label="Increase agents"
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                </div>
                                                <input
                                                    id="humanAgents"
                                                    type="range"
                                                    min="1"
                                                    max="10"
                                                    step="1"
                                                    value={humanAgents}
                                                    onChange={(e) => setHumanAgents(Number(e.target.value))}
                                                    className="range-slider"
                                                />
                                                <p className="text-[11px] text-slate-400 mt-1">Staff dedicated to answering chats.</p>
                                            </div>

                                            <div>
                                                <div className="flex justify-between items-center mb-2">
                                                    <label htmlFor="agentSalary" className="text-sm font-bold text-slate-800">
                                                        Avg Agent Salary
                                                    </label>
                                                    <div className="flex items-center gap-1.5">
                                                        <button 
                                                            type="button" 
                                                            onClick={() => setAgentSalary(prev => Math.max(15000, prev - 1000))}
                                                            className="w-5 h-5 rounded bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold flex items-center justify-center text-xs"
                                                            aria-label="Decrease salary"
                                                        >
                                                            -
                                                        </button>
                                                        <span className="text-sm font-black text-orange-600 min-w-[70px] text-center">
                                                            ₹{agentSalary.toLocaleString('en-IN')}
                                                        </span>
                                                        <button 
                                                            type="button" 
                                                            onClick={() => setAgentSalary(prev => Math.min(35000, prev + 1000))}
                                                            className="w-5 h-5 rounded bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold flex items-center justify-center text-xs"
                                                            aria-label="Increase salary"
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                </div>
                                                <input
                                                    id="agentSalary"
                                                    type="range"
                                                    min="15000"
                                                    max="35000"
                                                    step="1000"
                                                    value={agentSalary}
                                                    onChange={(e) => setAgentSalary(Number(e.target.value))}
                                                    className="range-slider"
                                                />
                                                <p className="text-[11px] text-slate-400 mt-1">Typical Indian support salary benchmark.</p>
                                            </div>
                                        </div>

                                        {/* Input 3: Plan Selection & Automation Rate */}
                                        <div className="pt-4 border-t border-slate-200/60">
                                            <label className="text-sm font-bold text-slate-800 block mb-3">
                                                Select SwanDigitals AI Chatbot Plan
                                            </label>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                                                <button
                                                    type="button"
                                                    onClick={() => setSelectedChatPlan('growth')}
                                                    className={`p-4 rounded-2xl border text-left transition-all ${
                                                        selectedChatPlan === 'growth'
                                                            ? 'border-orange-500 bg-orange-50/70 ring-2 ring-orange-500/20 shadow-xs'
                                                            : 'border-slate-200 bg-white hover:border-slate-300'
                                                    }`}
                                                >
                                                    <div className="flex justify-between items-center mb-1">
                                                        <span className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                                                            {selectedChatPlan === 'growth' && <Check className="w-4 h-4 text-orange-600" />}
                                                            Growth Hub
                                                        </span>
                                                        <span className="text-xs font-extrabold text-orange-600">₹1,999/mo</span>
                                                    </div>
                                                    <p className="text-[11px] text-slate-500 leading-snug">
                                                        Unlimited chats & seats, WhatsApp + Web, RAG knowledge base.
                                                    </p>
                                                </button>

                                                <button
                                                    type="button"
                                                    onClick={() => setSelectedChatPlan('pro')}
                                                    className={`p-4 rounded-2xl border text-left transition-all ${
                                                        selectedChatPlan === 'pro'
                                                            ? 'border-orange-500 bg-orange-50/70 ring-2 ring-orange-500/20 shadow-xs'
                                                            : 'border-slate-200 bg-white hover:border-slate-300'
                                                    }`}
                                                >
                                                    <div className="flex justify-between items-center mb-1">
                                                        <span className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                                                            {selectedChatPlan === 'pro' && <Check className="w-4 h-4 text-orange-600" />}
                                                            Performance Pro
                                                        </span>
                                                        <span className="text-xs font-extrabold text-orange-600">₹4,999/mo</span>
                                                    </div>
                                                    <p className="text-[11px] text-slate-500 leading-snug">
                                                        Omnichannel (7+ channels), Visual Flow Builder, CRM sync & SLAs.
                                                    </p>
                                                </button>
                                            </div>

                                            <div>
                                                <div className="flex justify-between items-center mb-2">
                                                    <label htmlFor="automationRate" className="text-xs font-bold text-slate-600">
                                                        AI Automation Deflection Rate
                                                    </label>
                                                    <div className="flex items-center gap-1.5">
                                                        <button 
                                                            type="button" 
                                                            onClick={() => setAutomationRate(prev => Math.max(60, prev - 5))}
                                                            className="w-5 h-5 rounded bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold flex items-center justify-center text-xs"
                                                            aria-label="Decrease automation rate"
                                                        >
                                                            -
                                                        </button>
                                                        <span className="text-sm font-bold text-slate-900 min-w-[45px] text-center">
                                                            {automationRate}%
                                                        </span>
                                                        <button 
                                                            type="button" 
                                                            onClick={() => setAutomationRate(prev => Math.min(90, prev + 5))}
                                                            className="w-5 h-5 rounded bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold flex items-center justify-center text-xs"
                                                            aria-label="Increase automation rate"
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                </div>
                                                <input
                                                    id="automationRate"
                                                    type="range"
                                                    min="60"
                                                    max="90"
                                                    step="5"
                                                    value={automationRate}
                                                    onChange={(e) => setAutomationRate(Number(e.target.value))}
                                                    className="range-slider"
                                                />
                                                <p className="text-[11px] text-slate-400 mt-1">Platform average: 80% resolved without human escalation.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right: Projected Savings Output Card (Sticky on desktop) */}
                                <div className="lg:col-span-5 lg:sticky lg:top-24 h-fit bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 text-white p-7 md:p-8 rounded-3xl border border-slate-800 shadow-xl relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 blur-3xl pointer-events-none rounded-full" />
                                    
                                    <div className="flex items-center gap-2 mb-6">
                                        <Sparkles className="w-5 h-5 text-orange-400" />
                                        <h3 className="text-xl font-bold">Your Projected Chat ROI</h3>
                                    </div>

                                    {/* Cost Comparison Strips */}
                                    <div className="space-y-3 mb-6">
                                        <div className="bg-white/5 p-4 rounded-2xl border border-white/10 flex justify-between items-center">
                                            <div>
                                                <div className="text-xs text-slate-400 font-medium">Traditional Human Cost</div>
                                                <div className="text-xs text-slate-500">{baselineAgentsNeeded} agents needed for {monthlyChats.toLocaleString('en-IN')} chats</div>
                                            </div>
                                            <div className="text-lg md:text-xl font-bold text-slate-200">
                                                ₹{currentHumanChatCost.toLocaleString('en-IN')}<span className="text-xs font-normal text-slate-400">/mo</span>
                                            </div>
                                        </div>

                                        <div className="bg-orange-500/10 p-4 rounded-2xl border border-orange-500/30 flex justify-between items-center">
                                            <div>
                                                <div className="text-xs text-orange-300 font-medium">
                                                    With Swan AI ({selectedChatPlan === 'growth' ? 'Growth Hub' : 'Performance Pro'})
                                                </div>
                                                <div className="text-xs text-orange-200/70">
                                                    Plan ₹{chatPlanPrice.toLocaleString('en-IN')} + ₹{escalatedHumanCost.toLocaleString('en-IN')} human review
                                                </div>
                                            </div>
                                            <div className="text-lg md:text-xl font-bold text-orange-400">
                                                ₹{totalCostWithAI.toLocaleString('en-IN')}<span className="text-xs font-normal text-orange-300">/mo</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Big Savings Highlight */}
                                    <div className="p-6 bg-emerald-500/10 rounded-2xl border border-emerald-500/20 text-center mb-6">
                                        <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block mb-1">
                                            Estimated Net Monthly Savings
                                        </span>
                                        <div className="text-4xl md:text-5xl font-black text-emerald-400 tracking-tight">
                                            ₹{monthlyChatSavings.toLocaleString('en-IN')}
                                        </div>
                                        <div className="text-xs font-bold text-emerald-300/90 mt-2">
                                            ₹{annualChatSavings.toLocaleString('en-IN')} annual savings ({chatSavingsPercent}% cost reduction)
                                        </div>
                                    </div>

                                    {/* Key Impact Metrics */}
                                    <div className="grid grid-cols-2 gap-2.5 text-xs mb-7">
                                        <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                                            <div className="text-slate-400 mb-0.5">Automated Chats</div>
                                            <div className="font-bold text-white text-sm">{chatsAutomated.toLocaleString('en-IN')} /mo</div>
                                        </div>
                                        <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                                            <div className="text-slate-400 mb-0.5">Staff Hours Saved</div>
                                            <div className="font-bold text-white text-sm">~{chatHoursSaved} hrs /mo</div>
                                        </div>
                                        <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                                            <div className="text-slate-400 mb-0.5">Response Time</div>
                                            <div className="font-bold text-emerald-400 text-sm">&lt; 2 seconds</div>
                                        </div>
                                        <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                                            <div className="text-slate-400 mb-0.5">Meta WhatsApp Markup</div>
                                            <div className="font-bold text-emerald-400 text-sm">0% Pass-Through</div>
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="space-y-3">
                                        <Link 
                                            href="/demo" 
                                            className="w-full block py-3.5 px-6 bg-orange-500 hover:bg-orange-600 text-white rounded-xl text-center font-bold text-sm shadow-md transition-all"
                                        >
                                            Lock in ₹{chatPlanPrice.toLocaleString('en-IN')}/mo Chatbot Demo &rarr;
                                        </Link>
                                        <p className="text-[11px] text-center text-slate-400">
                                            Need live chat only? A <Link href="https://chat.swandigitals.com" target="_blank" className="text-orange-400 underline font-semibold">Free ₹0 Plan</Link> is also available.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* =========================================================
                        MODE 2: VOICE AI CALCULATOR
                    ========================================================= */}
                    {activeProduct === 'voicebot' && (
                        <div id="voice-calculator" className="scroll-mt-28">
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
                                {/* Left: Voice Usage Inputs */}
                                <div className="lg:col-span-7 bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-200/80 shadow-xs">
                                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200">
                                        <div>
                                            <h2 className="text-xl md:text-2xl font-bold text-slate-900">Voice AI Telephony Metrics</h2>
                                            <p className="text-xs text-slate-500 mt-1">Adjust call minutes & telecaller numbers to see live cost differences.</p>
                                        </div>
                                        <span className="px-3 py-1 bg-orange-100 text-orange-700 text-xs font-bold rounded-full shrink-0">
                                            10 Indian Languages
                                        </span>
                                    </div>

                                    <div className="space-y-7">
                                        {/* Input 1: Monthly Call Minutes */}
                                        <div>
                                            <div className="flex justify-between items-center mb-2">
                                                <label htmlFor="monthlyMinutes" className="text-sm font-bold text-slate-800">
                                                    Monthly Call Minutes Required
                                                </label>
                                                <div className="flex items-center gap-2">
                                                    <button 
                                                        type="button" 
                                                        onClick={() => setMonthlyMinutes(prev => Math.max(500, prev - 500))}
                                                        className="w-6 h-6 rounded-md bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold flex items-center justify-center text-xs transition-colors"
                                                        aria-label="Decrease call minutes"
                                                    >
                                                        -
                                                    </button>
                                                    <span className="text-base font-black text-orange-600 min-w-[90px] text-center">
                                                        {monthlyMinutes.toLocaleString('en-IN')} <span className="text-xs font-normal text-slate-500">mins</span>
                                                    </span>
                                                    <button 
                                                        type="button" 
                                                        onClick={() => setMonthlyMinutes(prev => Math.min(20000, prev + 500))}
                                                        className="w-6 h-6 rounded-md bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold flex items-center justify-center text-xs transition-colors"
                                                        aria-label="Increase call minutes"
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            </div>
                                            <input
                                                id="monthlyMinutes"
                                                type="range"
                                                min="500"
                                                max="20000"
                                                step="250"
                                                value={monthlyMinutes}
                                                onChange={(e) => setMonthlyMinutes(Number(e.target.value))}
                                                className="range-slider"
                                            />
                                            <div className="flex justify-between text-[11px] text-slate-400 mt-2 font-medium">
                                                <span>500 mins</span>
                                                <span>5,000 mins</span>
                                                <span>12,000 mins</span>
                                                <span>20,000+ mins</span>
                                            </div>
                                            <div className="flex gap-2 mt-3 flex-wrap">
                                                {[1000, 3000, 5000, 10000].map((preset) => (
                                                    <button
                                                        key={preset}
                                                        type="button"
                                                        onClick={() => setMonthlyMinutes(preset)}
                                                        className={`text-xs px-2.5 py-1 rounded-lg border font-medium transition-colors ${
                                                            monthlyMinutes === preset
                                                                ? 'bg-orange-500 text-white border-orange-500 shadow-xs'
                                                                : 'bg-white text-slate-600 border-slate-200 hover:border-orange-300'
                                                        }`}
                                                    >
                                                        {preset.toLocaleString('en-IN')} mins
                                                    </button>
                                                ))}
                                            </div>
                                            <p className="text-[11px] text-slate-500 mt-2">
                                                💡 Rule of thumb: 1 full-time telecaller handles ~80-100 calls/day ≈ 2,500 to 3,000 talk minutes/month.
                                            </p>
                                        </div>

                                        {/* Input 2: Human Telecallers */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4 border-t border-slate-200/60">
                                            <div>
                                                <div className="flex justify-between items-center mb-2">
                                                    <label htmlFor="telecallers" className="text-sm font-bold text-slate-800">
                                                        Telecallers / Agents
                                                    </label>
                                                    <div className="flex items-center gap-1.5">
                                                        <button 
                                                            type="button" 
                                                            onClick={() => setTelecallers(prev => Math.max(1, prev - 1))}
                                                            className="w-5 h-5 rounded bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold flex items-center justify-center text-xs"
                                                            aria-label="Decrease telecallers"
                                                        >
                                                            -
                                                        </button>
                                                        <span className="text-sm font-black text-orange-600 min-w-[50px] text-center">
                                                            {telecallers} {telecallers === 1 ? 'caller' : 'callers'}
                                                        </span>
                                                        <button 
                                                            type="button" 
                                                            onClick={() => setTelecallers(prev => Math.min(10, prev + 1))}
                                                            className="w-5 h-5 rounded bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold flex items-center justify-center text-xs"
                                                            aria-label="Increase telecallers"
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                </div>
                                                <input
                                                    id="telecallers"
                                                    type="range"
                                                    min="1"
                                                    max="10"
                                                    step="1"
                                                    value={telecallers}
                                                    onChange={(e) => setTelecallers(Number(e.target.value))}
                                                    className="range-slider"
                                                />
                                                <p className="text-[11px] text-slate-400 mt-1">Staff making/receiving calls.</p>
                                            </div>

                                            <div>
                                                <div className="flex justify-between items-center mb-2">
                                                    <label htmlFor="telecallerSalary" className="text-sm font-bold text-slate-800">
                                                        Telecaller Monthly Salary
                                                    </label>
                                                    <div className="flex items-center gap-1.5">
                                                        <button 
                                                            type="button" 
                                                            onClick={() => setTelecallerSalary(prev => Math.max(18000, prev - 1000))}
                                                            className="w-5 h-5 rounded bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold flex items-center justify-center text-xs"
                                                            aria-label="Decrease telecaller salary"
                                                        >
                                                            -
                                                        </button>
                                                        <span className="text-sm font-black text-orange-600 min-w-[70px] text-center">
                                                            ₹{telecallerSalary.toLocaleString('en-IN')}
                                                        </span>
                                                        <button 
                                                            type="button" 
                                                            onClick={() => setTelecallerSalary(prev => Math.min(35000, prev + 1000))}
                                                            className="w-5 h-5 rounded bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold flex items-center justify-center text-xs"
                                                            aria-label="Increase telecaller salary"
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                </div>
                                                <input
                                                    id="telecallerSalary"
                                                    type="range"
                                                    min="18000"
                                                    max="35000"
                                                    step="1000"
                                                    value={telecallerSalary}
                                                    onChange={(e) => setTelecallerSalary(Number(e.target.value))}
                                                    className="range-slider"
                                                />
                                                <p className="text-[11px] text-slate-400 mt-1">Salary + hardware/dialer seat cost.</p>
                                            </div>
                                        </div>

                                        {/* Voice Rate Applied Info */}
                                        <div className="pt-4 border-t border-slate-200/60 bg-white p-4 rounded-2xl border border-slate-200">
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="text-xs font-bold text-slate-700 uppercase tracking-wide">Applied Voice Plan</span>
                                                <span className={`text-xs font-extrabold px-2.5 py-0.5 rounded-full ${monthlyMinutes >= 5000 ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
                                                    {monthlyMinutes >= 5000 ? '20% Volume Discount' : 'No Commitment'}
                                                </span>
                                            </div>
                                            <div className="text-base font-bold text-slate-900 mb-1">
                                                {voicePlanTier}
                                            </div>
                                            <p className="text-xs text-slate-500 leading-normal">
                                                {monthlyMinutes >= 5000 
                                                    ? 'Qualified for Committed Usage discount (min 5,000 mins/mo). Dedicated Indian phone number included.'
                                                    : 'Standard Pay-as-you-go rate. Scale to 5,000+ mins/mo to unlock the ₹4.00/min tier.'}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Right: Projected Voice Savings Output Card (Sticky on desktop) */}
                                <div className="lg:col-span-5 lg:sticky lg:top-24 h-fit bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 text-white p-7 md:p-8 rounded-3xl border border-slate-800 shadow-xl relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 blur-3xl pointer-events-none rounded-full" />

                                    <div className="flex items-center gap-2 mb-6">
                                        <Sparkles className="w-5 h-5 text-orange-400" />
                                        <h3 className="text-xl font-bold">Your Projected Voice ROI</h3>
                                    </div>

                                    {/* Cost Comparison Strips */}
                                    <div className="space-y-3 mb-6">
                                        <div className="bg-white/5 p-4 rounded-2xl border border-white/10 flex justify-between items-center">
                                            <div>
                                                <div className="text-xs text-slate-400 font-medium">Human Telecaller Cost</div>
                                                <div className="text-xs text-slate-500">{telecallersNeeded} staff needed for {monthlyMinutes.toLocaleString('en-IN')} mins</div>
                                            </div>
                                            <div className="text-lg md:text-xl font-bold text-slate-200">
                                                ₹{currentHumanVoiceCost.toLocaleString('en-IN')}<span className="text-xs font-normal text-slate-400">/mo</span>
                                            </div>
                                        </div>

                                        <div className="bg-orange-500/10 p-4 rounded-2xl border border-orange-500/30 flex justify-between items-center">
                                            <div>
                                                <div className="text-xs text-orange-300 font-medium">
                                                    Swan Voice AI @ ₹{voiceRatePerMin.toFixed(2)}/min
                                                </div>
                                                <div className="text-xs text-orange-200/70">{monthlyMinutes.toLocaleString('en-IN')} minutes runtime</div>
                                            </div>
                                            <div className="text-lg md:text-xl font-bold text-orange-400">
                                                ₹{swanVoiceCost.toLocaleString('en-IN')}<span className="text-xs font-normal text-orange-300">/mo</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Big Savings Highlight */}
                                    <div className="p-6 bg-emerald-500/10 rounded-2xl border border-emerald-500/20 text-center mb-6">
                                        <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block mb-1">
                                            Estimated Net Monthly Savings
                                        </span>
                                        <div className="text-4xl md:text-5xl font-black text-emerald-400 tracking-tight">
                                            ₹{monthlyVoiceSavings.toLocaleString('en-IN')}
                                        </div>
                                        <div className="text-xs font-bold text-emerald-300/90 mt-2">
                                            ₹{annualVoiceSavings.toLocaleString('en-IN')} annual savings ({voiceSavingsPercent}% cost reduction)
                                        </div>
                                    </div>

                                    {/* Per Minute & Advantage Metrics */}
                                    <div className="grid grid-cols-2 gap-2.5 text-xs mb-7">
                                        <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                                            <div className="text-slate-400 mb-0.5">Human Effective Rate</div>
                                            <div className="font-bold text-rose-300 text-sm">₹{humanCostPerMin} /min</div>
                                        </div>
                                        <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                                            <div className="text-slate-400 mb-0.5">Voice AI Rate</div>
                                            <div className="font-bold text-emerald-400 text-sm">₹{voiceRatePerMin.toFixed(2)} /min</div>
                                        </div>
                                        <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                                            <div className="text-slate-400 mb-0.5">Call Availability</div>
                                            <div className="font-bold text-emerald-400 text-sm">24/7/365 (0 missed)</div>
                                        </div>
                                        <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                                            <div className="text-slate-400 mb-0.5">Languages Supported</div>
                                            <div className="font-bold text-white text-sm">10 Indian Languages</div>
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="space-y-3">
                                        <Link 
                                            href="/demo" 
                                            className="w-full block py-3.5 px-6 bg-orange-500 hover:bg-orange-600 text-white rounded-xl text-center font-bold text-sm shadow-md transition-all"
                                        >
                                            Schedule Live Voice AI Demonstration &rarr;
                                        </Link>
                                        <p className="text-[11px] text-center text-slate-400">
                                            Includes inbound & outbound testing on a real +91 Indian phone line.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* =========================================================
                        SECTION 3: COST BREAKDOWN TABLE
                    ========================================================= */}
                    <div id="roi-breakdown" className="mt-16 lg:mt-24 scroll-mt-24">
                        <div className="text-center max-w-3xl mx-auto mb-8">
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                                Detailed Cost Comparison: Human Team vs. SwanDigitals AI
                            </h2>
                            <p className="text-slate-500 text-sm mt-2">
                                Straightforward breakdown of operating expenses for Indian customer support & sales pipelines.
                            </p>
                        </div>

                        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs overflow-hidden">
                            <div className="overflow-x-auto p-6 md:p-8">
                                <table className="w-full text-left border-collapse min-w-[650px]">
                                    <thead>
                                        <tr className="border-b-2 border-slate-100 text-slate-400 uppercase tracking-widest text-[11px] font-bold">
                                            <th className="pb-4">Operational Parameter</th>
                                            <th className="pb-4 text-center">Traditional Human Team</th>
                                            <th className="pb-4 text-center text-orange-600">SwanDigitals AI Platform</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-sm text-slate-700 divide-y divide-slate-100">
                                        <tr>
                                            <td className="py-4 font-semibold text-slate-900">Monthly Fixed Cost</td>
                                            <td className="py-4 text-center">₹20,000 – ₹35,000 per seat + PF/hardware</td>
                                            <td className="py-4 text-center font-bold text-emerald-600">
                                                ₹1,999 (Growth) or ₹4,999 (Pro) flat
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="py-4 font-semibold text-slate-900">Voice Calling Cost</td>
                                            <td className="py-4 text-center">₹12 – ₹20 effective cost/min</td>
                                            <td className="py-4 text-center font-bold text-emerald-600">₹4.00 – ₹5.00/minute flat</td>
                                        </tr>
                                        <tr>
                                            <td className="py-4 font-semibold text-slate-900">Concurrent Sessions</td>
                                            <td className="py-4 text-center">1 call or 3 chats per human max</td>
                                            <td className="py-4 text-center font-bold text-emerald-600">Unlimited simultaneous sessions</td>
                                        </tr>
                                        <tr>
                                            <td className="py-4 font-semibold text-slate-900">Working Hours</td>
                                            <td className="py-4 text-center">8 to 9 hours/day (night shifts cost 2×)</td>
                                            <td className="py-4 text-center font-bold text-emerald-600">24/7/365 without overtime</td>
                                        </tr>
                                        <tr>
                                            <td className="py-4 font-semibold text-slate-900">First Response Time</td>
                                            <td className="py-4 text-center">15 to 45 minutes queue time</td>
                                            <td className="py-4 text-center font-bold text-emerald-600">&lt; 2 seconds instant reply</td>
                                        </tr>
                                        <tr>
                                            <td className="py-4 font-semibold text-slate-900">Indian Languages</td>
                                            <td className="py-4 text-center">Requires hiring multilingual reps</td>
                                            <td className="py-4 text-center font-bold text-emerald-600">10 Indian languages built-in</td>
                                        </tr>
                                        <tr>
                                            <td className="py-4 font-semibold text-slate-900">Meta WhatsApp Markup</td>
                                            <td className="py-4 text-center">N/A</td>
                                            <td className="py-4 text-center font-bold text-emerald-600">0% Markup (Official Meta pass-through)</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Typical Platform Results */}
                    <div className="mt-16 lg:mt-24">
                        <div className="text-center max-w-2xl mx-auto mb-8">
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">What Teams Typically Achieve</h2>
                            <p className="text-slate-500 text-sm mt-1">
                                Platform benchmarks across live chatbot, WhatsApp, and voice deployments in India.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-slate-50 p-6 md:p-8 rounded-3xl text-center border border-slate-200/80 shadow-xs">
                                <div className="text-4xl font-extrabold mb-2 text-orange-600">80%+</div>
                                <div className="font-bold text-slate-800 mb-1 text-base">Automation Rate</div>
                                <div className="text-slate-500 text-xs leading-relaxed">of repetitive inquiries resolved with zero human intervention</div>
                            </div>
                            <div className="bg-slate-50 p-6 md:p-8 rounded-3xl text-center border border-slate-200/80 shadow-xs">
                                <div className="text-4xl font-extrabold mb-2 text-purple-600">7 Days</div>
                                <div className="font-bold text-slate-800 mb-1 text-base">Deployment Speed</div>
                                <div className="text-slate-500 text-xs leading-relaxed">from onboarding kickoff to first live automated resolution</div>
                            </div>
                            <div className="bg-slate-50 p-6 md:p-8 rounded-3xl text-center border border-slate-200/80 shadow-xs">
                                <div className="text-4xl font-extrabold mb-2 text-emerald-600">0%</div>
                                <div className="font-bold text-slate-800 mb-1 text-base">Meta WhatsApp Markup</div>
                                <div className="text-slate-500 text-xs leading-relaxed">100% pass-through official Meta conversation fees</div>
                            </div>
                        </div>
                    </div>

                    {/* =========================================================
                        SECTION 4: METHODOLOGY & BENCHMARKS
                    ========================================================= */}
                    <div id="methodology" className="mt-16 lg:mt-24 scroll-mt-24 bg-slate-50 rounded-3xl p-6 md:p-8 border border-slate-200/80">
                        <div className="flex items-center gap-2 mb-4">
                            <HelpCircle className="w-5 h-5 text-orange-600 shrink-0" />
                            <h2 className="text-xl font-bold text-slate-900">How We Calculate Your ROI</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs text-slate-600 leading-relaxed">
                            <div className="bg-white p-5 rounded-2xl border border-slate-200">
                                <h3 className="font-bold text-slate-900 text-sm mb-2">1. Human Chat Benchmark</h3>
                                <p>
                                    Based on Nasscom & Indian SME averages: an in-house support agent earns ₹18k–₹30k/month and handles 35–50 tickets daily. SwanDigitals automates 80% of repetitive questions instantly.
                                </p>
                            </div>
                            <div className="bg-white p-5 rounded-2xl border border-slate-200">
                                <h3 className="font-bold text-slate-900 text-sm mb-2">2. Voice Telephony Benchmark</h3>
                                <p>
                                    A full-time outbound telecaller in India achieves ~150 to 180 talk minutes daily (~3,000 mins/mo). Factoring salary, equipment, and downtime, effective cost is ₹12+ per talk minute.
                                </p>
                            </div>
                            <div className="bg-white p-5 rounded-2xl border border-slate-200">
                                <h3 className="font-bold text-slate-900 text-sm mb-2">3. Zero Hidden Fees</h3>
                                <p>
                                    Our calculations use exact platform prices: ₹1,999/mo (Growth Hub) or ₹4,999/mo (Performance Pro) and ₹4.00–₹5.00/min. WhatsApp conversation fees are billed directly at Meta cost.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* =========================================================
                        SECTION 5: FREQUENTLY ASKED QUESTIONS
                    ========================================================= */}
                    <div id="faq" className="mt-16 lg:mt-24 scroll-mt-24">
                        <div className="text-center max-w-2xl mx-auto mb-8">
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                                Frequently Asked Questions on ROI & Cost
                            </h2>
                            <p className="text-slate-500 text-sm mt-1">Honest answers on how AI automation impacts your balance sheet.</p>
                        </div>

                        <div className="max-w-3xl mx-auto space-y-3.5">
                            <details className="bg-slate-50 border border-slate-200 p-5 rounded-2xl group cursor-pointer [&_summary::-webkit-details-marker]:hidden">
                                <summary className="font-semibold text-base text-slate-900 flex justify-between items-center">
                                    Does AI chatbot replace our human customer support agents?
                                    <span className="text-orange-500 group-open:-rotate-180 transition-transform duration-300">▼</span>
                                </summary>
                                <p className="mt-3 text-slate-600 text-sm leading-relaxed pt-3 border-t border-slate-200">
                                    No. The AI handles the 80% repetitive questions (timings, order tracking, returns, basic FAQs, lead qualification). Complex queries and high-touch VIP requests are seamlessly passed to your human agents in the unified inbox.
                                </p>
                            </details>

                            <details className="bg-slate-50 border border-slate-200 p-5 rounded-2xl group cursor-pointer [&_summary::-webkit-details-marker]:hidden">
                                <summary className="font-semibold text-base text-slate-900 flex justify-between items-center">
                                    What if our inquiry volume fluctuates seasonally?
                                    <span className="text-orange-500 group-open:-rotate-180 transition-transform duration-300">▼</span>
                                </summary>
                                <p className="mt-3 text-slate-600 text-sm leading-relaxed pt-3 border-t border-slate-200">
                                    On SwanDigitals chatbot plans, conversation volume is <strong>unlimited</strong>. During Diwali or festive sale surges, you never face per-conversation penalty overages. For voice calls, pay-as-you-go requires no monthly minute commitment.
                                </p>
                            </details>

                            <details className="bg-slate-50 border border-slate-200 p-5 rounded-2xl group cursor-pointer [&_summary::-webkit-details-marker]:hidden">
                                <summary className="font-semibold text-base text-slate-900 flex justify-between items-center">
                                    How fast do Indian SMEs see positive return on investment?
                                    <span className="text-orange-500 group-open:-rotate-180 transition-transform duration-300">▼</span>
                                </summary>
                                <p className="mt-3 text-slate-600 text-sm leading-relaxed pt-3 border-t border-slate-200">
                                    Most teams achieve full payback within the first 14 to 30 days of going live, primarily through prevented missed leads after business hours and saving 200+ human handling hours every month.
                                </p>
                            </details>
                        </div>
                    </div>

                    {/* Final CTA Banner */}
                    <div className="mt-16 lg:mt-24 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-3xl p-8 md:p-12 text-center shadow-xl">
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                            Ready to Turn Support into a Profit Center?
                        </h2>
                        <p className="text-orange-100 max-w-2xl mx-auto mb-8 text-base">
                            Book a 20-minute tailored walkthrough. We will review your current ticket volume and calculate your exact company-specific savings.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link 
                                href="/demo" 
                                className="px-8 py-4 bg-white text-slate-900 rounded-full font-bold text-base hover:scale-105 shadow-xl transition-all"
                            >
                                Book Custom ROI Walkthrough
                            </Link>
                            <Link 
                                href="/pricing" 
                                className="px-8 py-4 bg-slate-900/30 hover:bg-slate-900/50 border border-white/20 text-white rounded-full font-bold text-base transition-all"
                            >
                                View Transparent Pricing Plans &rarr;
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
