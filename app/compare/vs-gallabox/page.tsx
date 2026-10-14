import type { Metadata } from 'next';
import ComparisonPageTemplate from '@/components/ui/ComparisonPageTemplate';

export const metadata: Metadata = {
    title: 'Gallabox Alternative in India | WhatsApp + Voice AI for SMEs',
    description: 'Outgrowing WhatsApp-only Gallabox? Switch to SwanDigitals for WhatsApp plus +91 AI calling in one inbox, 10 Indian languages, and flat rupee pricing.',
    keywords: ['Gallabox alternative', 'Gallabox pricing', 'Gallabox vs SwanDigitals', 'WhatsApp Automation Enterprise'],
    alternates: {
        canonical: 'https://swandigitals.com/compare/vs-gallabox',
    },
}

export default function VsGallaboxPage() {
    return (
        <ComparisonPageTemplate
            competitorName="Gallabox"
            slug="vs-gallabox"
            heroTitle="Outgrow the WhatsApp-Only Silo of Gallabox"
            heroSubtitle="Gallabox is WhatsApp-only. SwanDigitals adds Facebook, web chat and +91 AI phone calling in one inbox, in 10 Indian languages, on flat rupee plans."
            aboutCompetitor="Gallabox is a popular WhatsApp Business API provider targeting Indian SMBs. They offer a shared inbox, drag-and-drop bot building, and built-in payment links via WhatsApp."
            competitorStrengths="Very intuitive setup for small businesses, handy built-in WhatsApp payment links, and a solid WhatsApp team inbox for manual agent collaboration."
            realityCheck="Gallabox keeps you in a WhatsApp-only bubble. But your customers also message on Facebook, visit your website, and call your phone. Managing WhatsApp in one tool and calls elsewhere fragments your data. SwanDigitals unifies WhatsApp, Facebook, web chat and +91 AI calling on one screen, and auto-trains on your website, menu or documents to answer questions automatically."
            reasonsToSwitch={[
                {
                    title: "One Inbox, All Channels",
                    description: "Don't isolate your WhatsApp team. SwanDigitals unifies WhatsApp, Facebook, web chat, and +91 phone calls into a single, cohesive timeline for your agents."
                },
                {
                    title: "Auto-Trains on Your Business",
                    description: "Move beyond simple button-based bots. Our AI learns from your website, menu or documents to have natural conversations that actually resolve queries."
                },
                {
                    title: "+91 Voice AI Calling",
                    description: "SwanDigitals goes beyond text. Our Voice AI handles inbound reception and outbound follow-up calls on +91 numbers, in 10 Indian languages."
                }
            ]}
            comparisonRows={[
                { feature: "Channels", SwanDigitals: "WhatsApp, Facebook, Web, Voice", competitor: "Primarily WhatsApp" },
                { feature: "+91 Voice AI Calling", SwanDigitals: true, competitor: false },
                { feature: "AI Agent", SwanDigitals: "Auto-trains on your site/menu/docs", competitor: "Basic / Templated" },
                { feature: "Indian Languages", SwanDigitals: "10 Indian languages", competitor: "Limited" },
                { feature: "Pricing", SwanDigitals: "Flat from ₹1,999/mo", competitor: "Per-Tier / Add-ons" }
            ]}
            targetPersona="you only want to send WhatsApp payment links and manage a few chats manually on one channel — Gallabox is a clean, affordable way to do exactly that."
            verdict="you are an Indian SME that wants WhatsApp, Facebook, web chat and +91 AI calling in one inbox, 10 Indian languages, and flat rupee pricing with no per-message markup."
            faqs={[
                {
                    question: "Where is my customer data stored?",
                    answer: "Your customer data is hosted in India. SwanDigitals is built to be DPDP-2023 aware and processes payments securely via Razorpay, with no lock-in."
                },
                {
                    question: "Can we pay Meta directly for WhatsApp business messages?",
                    answer: "Yes. You link your own Meta Business account and pay Meta directly. SwanDigitals does not charge any markup fees or commission on your WhatsApp conversations."
                },
                {
                    question: "Can I port my existing WhatsApp Business number?",
                    answer: "Yes, you can port your existing WhatsApp Business API number directly to our platform with zero downtime or service interruption."
                },
                {
                    question: "Can we migrate our existing customer profiles and support history?",
                    answer: "Yes, our onboarding team handles the migration of your customer directories and support logs from Gallabox, making the transition seamless."
                }
            ]}
        />
    );
}
