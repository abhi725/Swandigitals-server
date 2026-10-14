import type { Metadata } from 'next';
import ComparisonPageTemplate from '@/components/ui/ComparisonPageTemplate';

export const metadata: Metadata = {
    title: 'WotNot Alternative in India | WhatsApp + Voice AI for SMEs',
    description: 'WotNot is great for building bots. SwanDigitals gives Indian SMEs WhatsApp plus +91 AI calling in one inbox, 10 Indian languages, and flat rupee pricing.',
    keywords: ['WotNot alternative', 'WotNot vs SwanDigitals', 'White label chatbot India', 'Agency Chatbot platform'],
    alternates: {
        canonical: 'https://swandigitals.com/compare/vs-wotnot',
    },
}

export default function VsWotNotPage() {
    return (
        <ComparisonPageTemplate
            competitorName="WotNot"
            slug="vs-wotnot"
            heroTitle="WotNot Alternative: WhatsApp + Voice AI Over Flow-Chart Builders"
            heroSubtitle="Move beyond visual chatbot trees. Get WhatsApp, Facebook, web chat and +91 AI calling in one inbox, in 10 Indian languages, on flat rupee plans."
            aboutCompetitor="WotNot provides a block-based visual canvas to build lead generation widgets and WhatsApp flows for websites."
            competitorStrengths="A highly visual builder canvas, flexible customization for partners, and template setups for web lead capture."
            realityCheck="WotNot works well as a web chatbot builder, but you still need a separate inbox for real conversations, and there is no phone channel. SwanDigitals unifies WhatsApp, Facebook, web chat and +91 AI calling in one workspace, and auto-trains on your website or documents instead of manual flow charts."
            reasonsToSwitch={[
                {
                    title: "One Inbox, All Channels",
                    description: "Avoid pasting standalone widget codes. Get one inbox that unifies WhatsApp, Facebook, web chat, and +91 phone calls."
                },
                {
                    title: "+91 Voice AI Calling",
                    description: "Add a voice assistant that speaks Hindi, Tamil, Telugu and 7 more Indian languages, handling inbound and outbound +91 calls naturally."
                },
                {
                    title: "Data Hosted in India",
                    description: "Keep customer communications on servers hosted in India. SwanDigitals is built to be DPDP-2023 aware, with no lock-in."
                }
            ]}
            comparisonRows={[
                { feature: "Platform Scope", SwanDigitals: "One Inbox + AI Agent", competitor: "Chatbot Builder" },
                { feature: "+91 Voice AI Calling", SwanDigitals: true, competitor: false },
                { feature: "AI Agent", SwanDigitals: "Auto-trains on your site/docs", competitor: "Basic / Add-on" },
                { feature: "Indian Languages", SwanDigitals: "10 Indian languages", competitor: "Limited" },
                { feature: "Pricing", SwanDigitals: "Flat from ₹1,999/mo", competitor: "Per-Tier" }
            ]}
            targetPersona="you mainly want to build visual chatbot flows and lead widgets for websites — WotNot's drag-and-drop canvas is strong for that."
            verdict="you are an Indian SME that wants WhatsApp, Facebook, web chat and +91 AI calling in one inbox, 10 Indian languages, and flat rupee pricing with no per-message markup."
            faqs={[
                {
                    question: "How fast can an Indian SME go live?",
                    answer: "In days, not weeks. You point the AI at your website or upload a few documents and it starts answering — no long flow-chart setup."
                },
                {
                    question: "How does the AI learn about my business?",
                    answer: "Instead of mapping big flowchart trees, you upload documents or enter your website URL. The AI auto-trains and builds its knowledge base."
                },
                {
                    question: "Can we sync leads with our CRM?",
                    answer: "Yes. Connect leads, conversation transcripts, and outcomes natively to HubSpot and Calendly, or to other tools via n8n."
                },
                {
                    question: "Where is conversation history stored?",
                    answer: "Your conversation data is hosted in India. SwanDigitals is built to be DPDP-2023 aware, with no lock-in."
                }
            ]}
        />
    );
}
