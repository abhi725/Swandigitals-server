import type { Metadata } from 'next';
import ComparisonPageTemplate from '@/components/ui/ComparisonPageTemplate';

export const metadata: Metadata = {
    title: 'AiSensy Alternative in India | WhatsApp + Voice AI for SMEs',
    description: 'Move beyond broadcast-only tools. Switch from AiSensy to SwanDigitals for WhatsApp plus +91 AI calling in one inbox, 10 Indian languages, and flat rupee pricing.',
    keywords: ['AiSensy alternative', 'AiSensy vs SwanDigitals', 'WhatsApp Broadcast India', 'D2C Customer Support AI'],
    alternates: {
        canonical: 'https://swandigitals.com/compare/vs-aisensy',
    },
}

export default function VsAiSensyPage() {
    return (
        <ComparisonPageTemplate
            competitorName="AiSensy"
            slug="vs-aisensy"
            heroTitle="AiSensy Alternative for Indian SMEs: WhatsApp + Voice in One Inbox"
            heroSubtitle="AiSensy is built for broadcasts. SwanDigitals brings WhatsApp, Facebook, web chat, and +91 AI calling into one flat-rate dashboard, in 10 Indian languages."
            aboutCompetitor="AiSensy is a popular marketing gateway for blasting bulk WhatsApp broadcast campaigns and managing abandoned cart sequences."
            competitorStrengths="A simplified campaign setup panel, quick Meta green badge application, and a low-friction way to run bulk WhatsApp broadcast campaigns."
            realityCheck="AiSensy works primarily as a promotional broadcasting portal. When customers reply to campaigns with real questions, keyword rules fall short and agents juggle threads in a basic inbox. SwanDigitals unifies WhatsApp, Facebook, web chat and +91 AI calling in one place, and auto-trains on your website, menu or documents so it can actually answer."
            reasonsToSwitch={[
                {
                    title: "Replies + Campaigns Together",
                    description: "SwanDigitals runs your WhatsApp campaigns and handles the incoming replies they generate under one unified inbox."
                },
                {
                    title: "10 Indian Languages",
                    description: "Our AI understands Hinglish and regional queries in 10 Indian languages. Stop relying on rigid keyword builders that confuse buyers."
                },
                {
                    title: "Flat Rupee Pricing",
                    description: "Say goodbye to tiered pricing and subscriber-limit penalties. Pay a flat plan from ₹1,999/mo with no per-message markup."
                }
            ]}
            comparisonRows={[
                { feature: "Primary Focus", SwanDigitals: "Replies + Campaigns + Calls", competitor: "Broadcast Marketing" },
                { feature: "Channels Supported", SwanDigitals: "WhatsApp, Facebook, Web, Voice", competitor: "WhatsApp Only" },
                { feature: "AI Agent", SwanDigitals: "Auto-trains on your site/menu/docs", competitor: "Basic Keyword Rules" },
                { feature: "+91 Voice AI Calling", SwanDigitals: true, competitor: false },
                { feature: "Pricing", SwanDigitals: "Flat from ₹1,999/mo", competitor: "Tiered / Volume Based" }
            ]}
            targetPersona="your sole goal is to blast promotional templates to contact lists and you do not need voice calling or a multi-channel inbox — AiSensy is a simple, focused broadcast tool."
            verdict="you are an Indian SME that wants WhatsApp, Facebook, web chat and +91 AI calling in one inbox, 10 Indian languages, and a flat monthly rupee plan with no per-message markup."
            faqs={[
                {
                    question: "Can we migrate our WhatsApp Business API profile from AiSensy?",
                    answer: "Yes. We migrate your WABA profile and official Meta green tick status cleanly without service interruption or setup downtime."
                },
                {
                    question: "Does SwanDigitals mark up Meta template charges?",
                    answer: "No. You pay Meta directly for conversation fees using your own linked card, and you pay us a flat software rate. We charge zero markups."
                },
                {
                    question: "Can we import customer logs and connect our CRM?",
                    answer: "Yes. SwanDigitals connects natively with HubSpot, and with other tools via n8n and Calendly, bringing your customer profiles and history into one place."
                },
                {
                    question: "How is user data protected?",
                    answer: "SwanDigitals hosts your data in India, is built to be DPDP-2023 aware, and processes payments securely via Razorpay. There is no lock-in."
                }
            ]}
        />
    );
}
