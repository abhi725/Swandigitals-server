import type { Metadata } from 'next';
import ComparisonPageTemplate from '@/components/ui/ComparisonPageTemplate';

export const metadata: Metadata = {
    title: 'Pega Alternative for Indian SMEs | Fast, Affordable AI Support',
    description: 'Compare SwanDigitals and Pegasystems. Skip heavy enterprise systems and get chat plus voice AI live in days on flat rupee pricing.',
    keywords: ['Pega Alternative', 'Pega vs SwanDigitals', 'AI Helpdesk India'],
    alternates: {
        canonical: 'https://swandigitals.com/compare/vs-pega',
    },
}

export default function VsPegaPage() {
    return (
        <ComparisonPageTemplate
            competitorName="Pega"
            slug="vs-pega"
            heroTitle="SwanDigitals vs Pega"
            heroSubtitle="Pega is a heavy enterprise process suite, overkill and overpriced for an Indian SME. Get chat plus +91 voice live in days on flat rupee pricing."
            aboutCompetitor="Pegasystems is a large business process automation suite designed for very large global corporations."
            competitorStrengths="Automating complex internal workflows and serving massive global companies with dedicated IT teams."
            realityCheck="Pega is built to run the backend operations of huge corporations. For a small or mid-sized Indian business that just needs customer engagement automation, it is too big, too slow and too costly to set up. SwanDigitals gives you WhatsApp, web chat and +91 calling in one inbox, live in days. Where Pega may fit better: very large enterprises automating complex multi-department core processes."
            comparisonRows={[
                { feature: "Core Focus", SwanDigitals: "Chat + Voice Engagement", competitor: "Complex Business Systems" },
                { feature: "Launch Time", SwanDigitals: "Live in days", competitor: "Many months or years" },
                { feature: "Total Cost", SwanDigitals: "Flat from ₹1,999/mo", competitor: "Very high setup fees" },
                { feature: "Flexibility", SwanDigitals: "No-code updates in minutes", competitor: "Requires expert developers" },
                { feature: "Voice AI", SwanDigitals: "Included (+91 calls)", competitor: "Sold as an expensive add-on" }
            ]}
            reasonsToSwitch={[
                {
                    title: "Real Speed and Simplicity",
                    description: "Update your AI in minutes. It auto-trains on your website and documents, so you do not wait weeks for an IT team to make changes."
                },
                {
                    title: "Predictable, Clear Rupee Pricing",
                    description: "Pega costs a lot in setup and consulting fees. SwanDigitals offers flat plans from ₹1,999/mo with no per-message markup."
                },
                {
                    title: "Chat and Voice in One Inbox",
                    description: "Your team gets WhatsApp, Facebook, web chat and +91 calling in one clean inbox, built for fast customer support."
                }
            ]}
            targetPersona="You are a very large enterprise automating complex, multi-department core processes with dedicated developer teams and a big IT budget."
            verdict="You are an Indian SME that wants fast, affordable chat and voice automation without being forced into a heavy enterprise process platform."
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
