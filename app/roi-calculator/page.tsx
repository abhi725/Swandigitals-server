import type { Metadata } from 'next';
import SiteLayout from '@/components/layout/SiteLayout';
import Hero from '@/components/ui/Hero';
import Link from 'next/link';
import { Suspense } from 'react';
import ROICalculatorContent from '@/components/tools/ROICalculatorContent';

export const metadata: Metadata = {
    title: 'AI Chatbot & Voice AI ROI Calculator | SwanDigitals India',
    description: 'Calculate real-world cost savings for AI Chatbot (Growth Hub ₹1,999/mo, Performance Pro ₹4,999/mo) and Voice AI (₹4-5/min) vs human support teams in India. Instant ROI estimation.',
    keywords: [
        'AI Chatbot ROI Calculator', 
        'Voice Bot ROI Calculator India', 
        'Chatbot Cost Savings India', 
        'Voice AI Telecaller Savings', 
        'Support Cost Calculator India',
        'Customer Service Automation ROI'
    ],
    alternates: {
        canonical: 'https://swandigitals.com/roi-calculator',
    },
    openGraph: {
        title: 'AI Chatbot & Voice AI ROI Calculator | SwanDigitals',
        description: 'Calculate real-world cost savings for AI Chatbot (from ₹1,999/mo) and Voice AI (from ₹4.00/min) vs human support teams in India.',
        url: 'https://swandigitals.com/roi-calculator',
        images: [
            {
                url: 'https://swandigitals.com/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'SwanDigitals AI Chatbot & Voice AI ROI Calculator',
            }
        ]
    }
};

export default function ROICalculatorPage() {
    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://swandigitals.com'
            },
            {
                '@type': 'ListItem',
                position: 2,
                name: 'ROI Calculator',
                item: 'https://swandigitals.com/roi-calculator'
            }
        ]
    };

    const calculatorSchema = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'WebApplication',
                name: 'SwanDigitals AI Support ROI Calculator',
                url: 'https://swandigitals.com/roi-calculator',
                applicationCategory: 'BusinessApplication',
                operatingSystem: 'All',
                browserRequirements: 'Requires JavaScript',
                description: 'Interactive ROI calculator comparing human agent and telecaller payroll against SwanDigitals AI Chatbot (from ₹1,999/mo) and Voice AI (from ₹4/min) for Indian businesses.',
                offers: {
                    '@type': 'AggregateOffer',
                    priceCurrency: 'INR',
                    lowPrice: '0',
                    highPrice: '4999',
                    offerCount: '3'
                }
            },
            {
                '@type': 'FAQPage',
                mainEntity: [
                    {
                        '@type': 'Question',
                        name: 'Does an AI chatbot replace human customer support agents?',
                        acceptedAnswer: {
                            '@type': 'Answer',
                            text: 'No. The AI handles the 80% repetitive questions (timings, order tracking, returns, basic FAQs, lead qualification). Complex queries and high-touch VIP requests are seamlessly passed to your human agents in the unified inbox.'
                        }
                    },
                    {
                        '@type': 'Question',
                        name: 'What if our inquiry volume fluctuates seasonally?',
                        acceptedAnswer: {
                            '@type': 'Answer',
                            text: 'On SwanDigitals chatbot plans, conversation volume is unlimited. During Diwali or festive sale surges, you never face per-conversation penalty overages. For voice calls, pay-as-you-go requires no monthly minute commitment.'
                        }
                    },
                    {
                        '@type': 'Question',
                        name: 'How fast do Indian SMEs see positive return on investment?',
                        acceptedAnswer: {
                            '@type': 'Answer',
                            text: 'Most teams achieve full payback within the first 14 to 30 days of going live, primarily through prevented missed leads after business hours and saving 200+ human handling hours every month.'
                        }
                    }
                ]
            }
        ]
    };

    return (
        <SiteLayout>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(calculatorSchema) }}
            />
            <Hero
                badge="💰 ROI & Savings Calculator"
                title="Calculate Your Chat & Voice AI Savings"
                subtitle="Compare in-house human support & telecaller payroll against SwanDigitals AI Chatbot (from ₹1,999/mo) and Voice AI (from ₹4.00/min). Realistic projections based strictly on Indian SME operational metrics."
                primaryCTA={{ text: "Calculate My Savings", href: "#chatbot-calculator" }}
                secondaryCTA={{ text: "View Pricing Plans", href: "/pricing" }}
            />

            <Suspense fallback={
                <div className="py-24 text-center bg-slate-50">
                    <div className="w-10 h-10 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                    <p className="text-sm font-semibold text-slate-600">Loading ROI Calculator...</p>
                </div>
            }>
                <ROICalculatorContent />
            </Suspense>
        </SiteLayout>
    );
}
