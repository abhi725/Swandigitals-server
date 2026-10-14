import type { Metadata } from 'next';
import ComparisonPageTemplate from '@/components/ui/ComparisonPageTemplate';

export const metadata: Metadata = {
    title: 'Intercom Alternative for Indian SMEs | Chat, Voice & Flat Pricing',
    description: 'Compare SwanDigitals vs Intercom. Ditch per-seat and per-resolution charges for chat plus +91 voice in one inbox on flat rupee pricing.',
    keywords: ['Intercom Alternative India', 'Intercom vs SwanDigitals', 'SME Helpdesk Pricing'],
    alternates: {
        canonical: 'https://swandigitals.com/compare/vs-intercom',
    },
}

export default function VsIntercomPage() {
    return (
        <ComparisonPageTemplate
            competitorName="Intercom"
            slug="vs-intercom"
            heroTitle="Intercom Alternative for Indian SMEs: Chat, Voice, Flat Pricing"
            heroSubtitle="Avoid per-seat and per-resolution charges. Get WhatsApp, web chat and +91 voice in one inbox, in 10 Indian languages, on flat rupee pricing."
            aboutCompetitor="Intercom specializes in polished customer messaging interfaces and interactive onboarding widgets."
            competitorStrengths="A highly polished interface, intuitive product-tour widgets, and strong proactive messaging."
            realityCheck="Intercom charges per seat, per person reached and per automated answer, so as your traffic grows your bill climbs unpredictably, which is hard for a small or mid-sized Indian business. SwanDigitals gives you a flat rupee plan with chat and +91 voice in one inbox. Where Intercom may fit better: well-funded global SaaS companies focused on in-app product tours and onboarding."
            comparisonRows={[
                { feature: "Pricing Model", SwanDigitals: "Flat from ₹1,999/mo", competitor: "Per Seat + AI Fees" },
                { feature: "Best Fit", SwanDigitals: "Indian SMEs", competitor: "Global / US SaaS" },
                { feature: "WhatsApp API", SwanDigitals: "Native & Deep", competitor: "Basic Integration" },
                { feature: "Voice AI", SwanDigitals: "Included (+91 calls)", competitor: "Not available" },
                { feature: "Data Hosting", SwanDigitals: "Hosted in India", competitor: "US / EU Datacenters" }
            ]}
            reasonsToSwitch={[
                {
                    title: "Predictable Flat Rupee Rates",
                    description: "Grow your agents or your AI resolutions and your plan price stays the same. No per-message markup."
                },
                {
                    title: "Regional Language Support",
                    description: "Our AI handles Hinglish queries (for example 'refund kab milega') and 10 Indian languages, auto-trained on your own content."
                },
                {
                    title: "Data Hosted in India",
                    description: "Your customer data stays on servers in India, kept aware of the DPDP Act 2023, with chat and voice in one place."
                }
            ]}
            targetPersona="You are a well-funded global SaaS company focused on in-app product tours and onboarding, with budget for per-resolution pricing."
            verdict="You are a growing Indian SME that wants a polished support experience across chat and voice without unpredictable pricing or offshore data storage."
            faqs={[
                {
                    question: "Is the agent workspace as polished as Intercom?",
                    answer: "Yes. We offer a modern shared team inbox designed for fast resolution, alongside deeper integrations with local Indian tools like Razorpay."
                }
            ]}
        />
    );
}
