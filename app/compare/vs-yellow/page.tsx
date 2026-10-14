import type { Metadata } from 'next';
import ComparisonPageTemplate from '@/components/ui/ComparisonPageTemplate';

export const metadata: Metadata = {
    title: 'Yellow.ai Alternative for Indian SMEs | Flat-Priced Chat & Voice AI',
    description: 'Yellow.ai is built for global enterprise. SwanDigitals gives Indian SMEs flat rupee pricing, chat plus +91 voice, and 10 Indian languages.',
    keywords: ['Yellow.ai Alternative', 'Yellow.ai vs SwanDigitals', 'SME Chatbot India'],
    alternates: {
        canonical: 'https://swandigitals.com/compare/vs-yellow',
    },
}

export default function VsYellowPage() {
    return (
        <ComparisonPageTemplate
            competitorName="Yellow.ai"
            slug="vs-yellow"
            heroTitle="Escape Yellow.ai Usage Bills with Flat SME Pricing"
            heroSubtitle="Indian SMEs deserve predictable pricing and fast go-live. Get chat plus +91 voice in one inbox on flat rupee plans, live in days."
            aboutCompetitor="Yellow.ai operates a large global conversation automation engine aimed at enterprise accounts."
            competitorStrengths="Deep developer toolkits, broad channel coverage, and experience with large enterprise customers."
            realityCheck="Yellow.ai typically bills on conversation usage, so as your automated chats grow your bill climbs, and the platform is sized for enterprise teams. SwanDigitals uses simple flat plans from ₹1,999/mo with no per-message markup, and goes live in days. Where Yellow.ai may fit better: large global enterprises needing heavy developer SDKs and multi-region rollouts."
            comparisonRows={[
                { feature: "Pricing Model", SwanDigitals: "Flat from ₹1,999/mo", competitor: "Usage / conversation based" },
                { feature: "Best Fit", SwanDigitals: "Indian SMEs", competitor: "Global Enterprise" },
                { feature: "Time to Go Live", SwanDigitals: "Live in days", competitor: "Weeks to months" },
                { feature: "Voice AI", SwanDigitals: "Included (+91 calls)", competitor: "Add-on / enterprise" },
                { feature: "Indian Languages", SwanDigitals: "10 Indian languages", competitor: "Broad but generic" }
            ]}
            reasonsToSwitch={[
                {
                    title: "No Usage Surcharges",
                    description: "Flat rupee plans mean your automated customer chats do not create end-of-month billing surprises. No per-message markup."
                },
                {
                    title: "Auto-Trains on Your Business",
                    description: "SwanDigitals reads your website, menu and documents and starts answering right away, no long enterprise onboarding needed."
                },
                {
                    title: "Fast, Local Go-Live",
                    description: "Instead of multi-month enterprise setups, our team gets your chat and +91 voice live in days, with India-based support."
                }
            ]}
            targetPersona="You are a large global enterprise that needs heavy developer SDKs, multi-region rollouts and dedicated solution consultants."
            verdict="You are an Indian SME that needs fast go-live, chat plus voice in one place, and flat rupee pricing without usage surprises."
            faqs={[
                {
                    question: "Can we transition from Yellow.ai without service disruption?",
                    answer: "Yes. We configure and build your new automation environment in parallel, ensuring a clean swap with zero downtime for your customers."
                },
                {
                    question: "Will our historical training records migrate?",
                    answer: "Yes. Our team maps and migrates your historic transcripts and custom dialogue contexts directly into SwanDigitals."
                }
            ]}
        />
    );
}
