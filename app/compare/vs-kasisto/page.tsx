import type { Metadata } from 'next';
import ComparisonPageTemplate from '@/components/ui/ComparisonPageTemplate';

export const metadata: Metadata = {
    title: 'Kasisto Alternative for Indian SMEs | Affordable Chat & Voice AI',
    description: 'Compare SwanDigitals and Kasisto. Simple chat and voice AI in 10 Indian languages, hosted in India, on flat rupee pricing.',
    keywords: ['Kasisto Alternative', 'Kasisto vs SwanDigitals', 'Chat AI India'],
    alternates: {
        canonical: 'https://swandigitals.com/compare/vs-kasisto',
    },
}

export default function VsKasistoPage() {
    return (
        <ComparisonPageTemplate
            competitorName="Kasisto"
            slug="vs-kasisto"
            heroTitle="SwanDigitals vs Kasisto"
            heroSubtitle="Kasisto is enterprise banking AI built for large US institutions. For an Indian SME, it is overkill and overpriced. SwanDigitals gives you chat and voice in 10 Indian languages, hosted in India."
            aboutCompetitor="Kasisto is a US company that builds conversational AI for large financial institutions in America."
            competitorStrengths="Strong US banking integrations and finance-specific models built for large American institutions."
            realityCheck="Kasisto is built for big US banks with big budgets and long procurement cycles, which does not fit a small or mid-sized Indian business. SwanDigitals gives you WhatsApp, web chat and +91 calling in one inbox, in 10 Indian languages, live in days on flat rupee pricing. Where Kasisto may fit better: very large banks needing deep, custom core-banking AI."
            comparisonRows={[
                { feature: "Primary Market", SwanDigitals: "Indian SMEs", competitor: "Large US & EU banks" },
                { feature: "Indian Languages", SwanDigitals: "10 Indian languages", competitor: "Basic translation only" },
                { feature: "Data Hosting", SwanDigitals: "Hosted in India", competitor: "US-focused cloud" },
                { feature: "Voice AI", SwanDigitals: "Included (+91 calls)", competitor: "Requires third-party tools" },
                { feature: "Pricing Plan", SwanDigitals: "Flat from ₹1,999/mo", competitor: "Expensive enterprise rates" }
            ]}
            reasonsToSwitch={[
                {
                    title: "Priced for an Indian SME",
                    description: "No enterprise contracts or procurement committees. Flat rupee plans from ₹1,999/mo, paid simply through Razorpay."
                },
                {
                    title: "Real Indian Language Support",
                    description: "Customers often mix Hindi, English and regional words. SwanDigitals handles this natural way of speaking across 10 Indian languages."
                },
                {
                    title: "Chat and Voice Together",
                    description: "WhatsApp, Facebook and web chat plus inbound and outbound +91 calling, all in one inbox that auto-trains on your own content."
                }
            ]}
            targetPersona="You are a very large bank or financial institution that needs deep, custom core-banking AI and has the budget and teams for a long enterprise rollout."
            verdict="You are an Indian SME that wants smart chat and voice automation in local languages, hosted in India, without enterprise pricing."
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
