import type { Metadata } from 'next';
import ComparisonPageTemplate from '@/components/ui/ComparisonPageTemplate';

export const metadata: Metadata = {
    title: 'Verloop Alternative for Indian SMEs | Chat & Voice, Flat Priced',
    description: 'Compare SwanDigitals vs Verloop.io. An SME-friendly inbox with WhatsApp, web chat and native +91 voice on flat rupee pricing.',
    keywords: ['Verloop Alternative', 'Verloop vs SwanDigitals', 'SME Support Automation'],
    alternates: {
        canonical: 'https://swandigitals.com/compare/vs-verloop',
    },
}

export default function VsVerloopPage() {
    return (
        <ComparisonPageTemplate
            competitorName="Verloop.io"
            slug="vs-verloop"
            heroTitle="Verloop Alternative Built for Indian SMEs"
            heroSubtitle="Get modern AI that auto-trains on your content, plus native +91 voice, on flat rupee pricing, in 10 Indian languages, live in days."
            aboutCompetitor="Verloop is a capable, established Indian conversational AI platform with strong e-commerce and support experience."
            competitorStrengths="Solid e-commerce features, clear Indian market focus, and good WhatsApp integration."
            realityCheck="Verloop is a strong Indian player, but it leans toward flow and intent building and is often sized for larger buyers. SwanDigitals auto-trains on your website and documents and adds native +91 voice in the same inbox, on flat rupee pricing built for SMEs. Where Verloop may fit better: teams that want detailed flow-builder control and larger custom deployments."
            comparisonRows={[
                { feature: "Setup Style", SwanDigitals: "Auto-trains on your content", competitor: "Flow / intent building" },
                { feature: "Voice AI", SwanDigitals: "Native (+91 calls)", competitor: "Limited/Third-party" },
                { feature: "Agent Inbox", SwanDigitals: "Chat + voice in one place", competitor: "Chat inbox" },
                { feature: "Best Fit", SwanDigitals: "Indian SMEs", competitor: "Mid-market / enterprise" },
                { feature: "Pricing", SwanDigitals: "Flat from ₹1,999/mo", competitor: "Usage / tier based" }
            ]}
            reasonsToSwitch={[
                {
                    title: "Auto-Trains on Your Business",
                    description: "Instead of building rigid decision trees, SwanDigitals reads your website, menu and documents and answers customers dynamically."
                },
                {
                    title: "Chat and Voice in One Inbox",
                    description: "WhatsApp, Facebook and web chat plus inbound and outbound +91 calls, all in one workspace for your team."
                },
                {
                    title: "Native Voice in Indian Languages",
                    description: "Deploy voice agents that handle calls naturally across 10 Indian languages, no separate telephony project needed."
                }
            ]}
            targetPersona="You are a team that wants detailed flow-builder control and larger custom deployments, with the time to configure intents manually."
            verdict="You are an Indian SME that wants modern, self-training AI plus native voice, in local languages, on flat pricing."
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
                    answer: "Yes, our onboarding team handles the migration of your customer directories and support logs from Verloop, making the transition seamless."
                }
            ]}
        />
    );
}
