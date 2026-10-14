import type { Metadata } from 'next';
import ComparisonPageTemplate from '@/components/ui/ComparisonPageTemplate';

export const metadata: Metadata = {
    title: '360dialog Alternative | WhatsApp + Voice AI for Indian SMEs',
    description: '360dialog is a raw API backend. Skip building UIs. Switch to SwanDigitals for WhatsApp plus +91 AI calling in one inbox, 10 Indian languages, and flat rupee pricing.',
    keywords: ['360dialog alternative', '360dialog vs SwanDigitals', 'WhatsApp API Provider India', 'Enterprise WhatsApp BSP'],
    alternates: {
        canonical: 'https://swandigitals.com/compare/vs-360dialog',
    },
}

export default function Vs360dialogPage() {
    return (
        <ComparisonPageTemplate
            competitorName="360dialog"
            slug="vs-360dialog"
            heroTitle="Stop Building Chat Interfaces From Scratch"
            heroSubtitle="Skip the raw WhatsApp API. Get a ready inbox with WhatsApp, Facebook, web chat and +91 AI calling, in 10 Indian languages, live in days."
            aboutCompetitor="360dialog is a WhatsApp Business Solution Provider (BSP). They act as a backend connector, supplying raw API access without a built-in user interface."
            competitorStrengths="Stable API connections to Meta and solid documentation for technical development teams."
            realityCheck="360dialog is just a pipe. If you choose them, you must hire developers to build your own chat interface, dashboard, analytics, and AI logic — weeks of work and cost. SwanDigitals gives you a working inbox and AI right away, auto-trained on your website or documents, plus +91 voice calling."
            reasonsToSwitch={[
                {
                    title: "Ready-to-Use Agent Inbox",
                    description: "Skip the development cycles. Get a clean, collaborative inbox for your team on day one, no coding required."
                },
                {
                    title: "Auto-Trains on Your Business",
                    description: "We connect the AI to your website, menu or documents for you, so you can deploy an assistant that actually answers, without writing code."
                },
                {
                    title: "WhatsApp + Voice in One Inbox",
                    description: "360dialog only handles WhatsApp. SwanDigitals connects WhatsApp, Facebook, web chat, and +91 phone calls into one dashboard."
                }
            ]}
            comparisonRows={[
                { feature: "Solution Type", SwanDigitals: "Ready Inbox + AI Agent", competitor: "Raw API Pipe Only" },
                { feature: "Setup Time", SwanDigitals: "Live in Days", competitor: "Months of Custom Dev" },
                { feature: "Coding Required", SwanDigitals: "None (No-Code)", competitor: "High (Full Dev Team Needed)" },
                { feature: "+91 Voice AI Calling", SwanDigitals: true, competitor: false },
                { feature: "Pricing", SwanDigitals: "Flat from ₹1,999/mo", competitor: "Per-Message Usage" }
            ]}
            targetPersona="you have a developer team that wants to build a fully custom, proprietary chat tool on raw WhatsApp API — 360dialog is a solid BSP for that."
            verdict="you are an Indian SME that wants a ready inbox with WhatsApp, Facebook, web chat and +91 AI calling, 10 Indian languages, and flat rupee pricing with no per-message markup."
            faqs={[
                {
                    question: "Can I use 360dialog with SwanDigitals?",
                    answer: "Yes. If you have an existing 360dialog connection, you can link it directly to SwanDigitals to use our interface and AI features while keeping your provider."
                },
                {
                    question: "Does SwanDigitals host customer data in India?",
                    answer: "Yes. We host your data in India and are built to be DPDP-2023 aware, so your business stays on the right side of local data privacy expectations, with no lock-in."
                },
                {
                    question: "Can we pay Meta directly for our WhatsApp Business API fees?",
                    answer: "Yes. You link your own Meta Business Manager and pay Meta directly for conversation fees. SwanDigitals does not add markups or extra fees to Meta's official charges."
                },
                {
                    question: "Can I port my existing WhatsApp Business number to SwanDigitals?",
                    answer: "Yes. You can migrate your current WhatsApp Business API number to our platform. The porting process causes zero downtime for your active customer chats."
                },
                {
                    question: "Can we migrate our existing customer profiles and support history to SwanDigitals?",
                    answer: "Yes. Our team handles the migration of your historical tickets and customer data from your legacy systems, ensuring a smooth transition with no data loss."
                }
            ]}
        />
    );
}

