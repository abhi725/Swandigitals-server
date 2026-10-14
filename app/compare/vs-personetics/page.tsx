import type { Metadata } from 'next';
import ComparisonPageTemplate from '@/components/ui/ComparisonPageTemplate';

export const metadata: Metadata = {
    title: 'Personetics Alternative for Indian SMEs | Chat & Voice Support',
    description: 'Compare SwanDigitals and Personetics. Go beyond finance alerts with a full chat plus voice inbox for Indian SMEs on flat rupee pricing.',
    keywords: ['Personetics Alternative', 'Personetics vs SwanDigitals', 'SME Support AI'],
    alternates: {
        canonical: 'https://swandigitals.com/compare/vs-personetics',
    },
}

export default function VsPersoneticsPage() {
    return (
        <ComparisonPageTemplate
            competitorName="Personetics"
            slug="vs-personetics"
            heroTitle="SwanDigitals vs Personetics"
            heroSubtitle="Personetics is enterprise finance-engagement software. For an Indian SME, SwanDigitals resolves customer queries across WhatsApp, web chat and +91 voice in one inbox."
            aboutCompetitor="Personetics builds enterprise software that analyzes transaction history and sends automated personal-finance insights to a bank's users."
            competitorStrengths="Strong at analyzing bank transactions and delivering personalized financial insights at enterprise scale."
            realityCheck="Personetics is built to surface finance insights inside large banks, not to run everyday customer conversations, and it is sized for enterprise budgets. SwanDigitals handles the actual support work for an SME: WhatsApp, web chat and +91 calling in one inbox, in 10 Indian languages. Where Personetics may fit better: large banks wanting deep, data-driven financial personalization."
            comparisonRows={[
                { feature: "Main Focus", SwanDigitals: "Chat + Voice Support", competitor: "Finance Insights" },
                { feature: "Agent Inbox", SwanDigitals: "Built-in for support teams", competitor: "Not the core product" },
                { feature: "WhatsApp Support", SwanDigitals: "Native and deep", competitor: "Limited features" },
                { feature: "Voice AI", SwanDigitals: "Included (+91 calls)", competitor: "No voice features" },
                { feature: "Best Fit", SwanDigitals: "Indian SMEs", competitor: "Large banks" }
            ]}
            reasonsToSwitch={[
                {
                    title: "A Complete Support System",
                    description: "Do more than send alerts. Give customers an easy way to get answers the moment they have a question, across chat and voice."
                },
                {
                    title: "Chat and Voice in One Inbox",
                    description: "Reach customers on WhatsApp, Facebook and web chat, plus inbound and outbound +91 calls, all in a single workspace."
                },
                {
                    title: "Priced for an SME",
                    description: "Flat rupee plans from ₹1,999/mo through Razorpay, with no per-message markup and no enterprise contracts."
                }
            ]}
            targetPersona="You are a large bank that wants deep, data-driven financial personalization and insight engines rather than an everyday support inbox."
            verdict="You are an Indian SME that needs a real customer support system across chat and voice, not just an analytics or insights tool."
            faqs={[
                {
                    question: "Where is my data stored?",
                    answer: "All your data is hosted on servers in India and kept aware of India's DPDP Act of 2023. Payments run securely through Razorpay, and there is no lock-in."
                },
                {
                    question: "Can we pay Meta directly for WhatsApp messages?",
                    answer: "Yes. You connect your own payment method to Meta. SwanDigitals does not add any extra fees or charges to your WhatsApp costs."
                },
                {
                    question: "Can we keep our existing WhatsApp Business number?",
                    answer: "Yes. You can move your current WhatsApp Business API number to SwanDigitals with zero downtime. You will keep your green verification badge."
                },
                {
                    question: "Can we import our past ticket history?",
                    answer: "Yes. We can migrate your complete past support tickets and history from your old systems, so your agents do not lose any context."
                }
            ]}
        />
    );
}
