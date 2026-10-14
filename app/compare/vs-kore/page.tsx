import type { Metadata } from 'next';
import ComparisonPageTemplate from '@/components/ui/ComparisonPageTemplate';

export const metadata: Metadata = {
    title: 'Kore.ai Alternative for Indian SMEs | Simple Chat & Voice AI',
    description: 'Compare SwanDigitals vs Kore.ai. Flat rupee pricing, chat plus +91 voice in one inbox, and 10 Indian languages, live in days.',
    keywords: ['Kore.ai Alternative', 'Kore.ai vs SwanDigitals', 'AI Support India'],
    alternates: {
        canonical: 'https://swandigitals.com/compare/vs-kore',
    },
}

export default function VsKorePage() {
    return (
        <ComparisonPageTemplate
            competitorName="Kore.ai"
            slug="vs-kore"
            heroTitle="Kore.ai Is Enterprise Complexity an SME Doesn't Need"
            heroSubtitle="Skip the long deployments and developer overhead. Get chat plus +91 voice in one inbox, 10 Indian languages, live in days."
            aboutCompetitor="Kore.ai is a heavyweight enterprise AI platform known for highly specialized vertical solutions (like BankAssist)."
            competitorStrengths="Deep vertical solutions, massive global infrastructure, and extensive developer tooling."
            realityCheck="Kore.ai needs significant IT resources, developer training and long deployment cycles, which is a lot to ask of a small or mid-sized Indian business. SwanDigitals is an out-of-the-box, fully managed platform that goes live in days, and your team makes updates instantly in a no-code builder. Where Kore.ai may fit better: large enterprises with dedicated dev teams and complex, industry-specific requirements."
            comparisonRows={[
                { feature: "Deployment Time", SwanDigitals: "Live in days", competitor: "3-6 Months" },
                { feature: "Pricing Structure", SwanDigitals: "Flat from ₹1,999/mo", competitor: "Complex usage tiers" },
                { feature: "Developer Required", SwanDigitals: "No (Fully Managed)", competitor: "Yes (Heavy IT reliance)" },
                { feature: "Data Hosting", SwanDigitals: "Hosted in India", competitor: "Global cloud / VPC" },
                { feature: "Indian Languages", SwanDigitals: "10 Indian languages", competitor: "Translation layer" }
            ]}
            reasonsToSwitch={[
                {
                    title: "Faster Time to Value",
                    description: "Avoid the multi-month enterprise deployment cycle. We handle the setup and training, and you are live in days."
                },
                {
                    title: "Auto-Trains on Your Content",
                    description: "Instead of long developer projects, SwanDigitals reads your website, menu and documents and starts answering customers right away."
                },
                {
                    title: "Local Indian Support",
                    description: "Get direct help from our India-based team during Indian support hours, not a global tiered support desk."
                }
            ]}
            targetPersona="You are a large enterprise with dedicated developers and complex, industry-specific requirements that justify a heavy custom platform."
            verdict="You are an Indian SME that wants chat and voice automation live quickly, on flat pricing, without the IT overhead of a legacy enterprise platform."
            faqs={[
                {
                    question: "Where is my customer data stored?",
                    answer: "All customer data is hosted on servers in India and kept aware of India's DPDP Act of 2023. Payments run securely through Razorpay, and there is no lock-in."
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
                    answer: "Yes, our onboarding team handles the migration of your customer directories and support logs from Kore.ai, making the transition seamless."
                }
            ]}
        />
    );
}
