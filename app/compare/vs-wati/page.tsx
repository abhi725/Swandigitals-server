import type { Metadata } from 'next';
import ComparisonPageTemplate from '@/components/ui/ComparisonPageTemplate';

export const metadata: Metadata = {
    title: 'WATI Alternative in India | WhatsApp + Voice AI for SMEs',
    description: 'Paying rising fees for a WhatsApp-only tool? Move from WATI to SwanDigitals and get WhatsApp plus +91 AI calling in one inbox, 10 Indian languages, and flat rupee pricing.',
    keywords: ['WATI alternative', 'WATI pricing', 'WATI vs SwanDigitals', 'Omnichannel WhatsApp Inbox', 'WhatsApp Business API India'],
    alternates: {
        canonical: 'https://swandigitals.com/compare/vs-wati',
    },
}

export default function VsWatiPage() {
    return (
        <ComparisonPageTemplate
            competitorName="WATI"
            slug="vs-wati"
            heroTitle="WATI Alternative for Indian SMEs: WhatsApp + Voice in One Inbox"
            heroSubtitle="WATI is WhatsApp-only. SwanDigitals puts WhatsApp, Facebook, web chat and +91 AI phone calls in one flat-rate workspace built for Indian small businesses."
            aboutCompetitor="WATI provides a streamlined interface for broadcast templates and team communications over the WhatsApp Business API."
            competitorStrengths="Stable WhatsApp connectivity, simple block-based workflow editors, and tools for promotional template broadcasting."
            realityCheck="WATI keeps your operations inside a WhatsApp-only inbox. But Indian customers also message on Facebook, your website, and call your phone. Juggling separate tools splits your data. SwanDigitals unifies WhatsApp, Facebook, web chat and +91 AI calling natively, and auto-trains on your website, menu or brochure."
            reasonsToSwitch={[
                {
                    title: "WhatsApp + Voice in One Inbox",
                    description: "Bring WhatsApp, Facebook, web chat, and +91 inbound/outbound AI calling into one shared dashboard, in 10 Indian languages."
                },
                {
                    title: "No Per-Message Markup",
                    description: "We charge a flat rupee subscription. You connect your own WhatsApp API credentials and pay Meta directly for conversation fees."
                },
                {
                    title: "Auto-Trains on Your Business",
                    description: "Instead of rigid 'Press 1' menus, our AI learns from your website, menu or documents to answer customer queries in plain language."
                }
            ]}
            comparisonRows={[
                { feature: "Channels Supported", SwanDigitals: "WhatsApp, Facebook, Web, Voice", competitor: "WhatsApp Only" },
                { feature: "Pricing Model", SwanDigitals: "Flat Rupee Plans (from ₹1,999)", competitor: "Per-Conversation Tiers" },
                { feature: "AI Agent", SwanDigitals: "Auto-trains on your site/menu/docs", competitor: "Basic / Add-on" },
                { feature: "+91 Voice AI Calling", SwanDigitals: true, competitor: false },
                { feature: "Indian Languages", SwanDigitals: "10 Indian languages", competitor: "Limited" },
                { feature: "Data Hosted in India", SwanDigitals: true, competitor: false }
            ]}
            targetPersona="you only need simple promotional WhatsApp template campaigns and are happy staying on a single channel — WATI does that job simply and well."
            verdict="you are an Indian SME that wants WhatsApp and +91 voice calling in one inbox, 10 Indian languages, flat rupee pricing with no per-message markup, and India-based support."
            faqs={[
                {
                    question: "Can I transfer our current WhatsApp Business API number?",
                    answer: "Yes. We migrate your registered WhatsApp Business API profile and official Meta green tick status with zero setup downtime."
                },
                {
                    question: "How do Meta conversation charges work?",
                    answer: "You settle conversation fees directly with Meta using your own linked credit card. SwanDigitals does not add surcharges or markups to these costs."
                }
            ]}
        />
    );
}

