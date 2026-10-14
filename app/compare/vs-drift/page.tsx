import type { Metadata } from 'next';
import ComparisonPageTemplate from '@/components/ui/ComparisonPageTemplate';

export const metadata: Metadata = {
    title: 'Drift Alternative for Indian SMEs | Affordable Chat & Voice AI',
    description: 'Compare SwanDigitals vs Drift. Skip premium US pricing for B2B chat. Get lead qualification plus support across chat and +91 voice for a flat rupee fee.',
    keywords: ['Drift Alternative India', 'Drift vs SwanDigitals', 'SME Conversational AI'],
    alternates: {
        canonical: 'https://swandigitals.com/compare/vs-drift',
    },
}

export default function VsDriftPage() {
    return (
        <ComparisonPageTemplate
            competitorName="Drift"
            slug="vs-drift"
            heroTitle="Drift Alternative: Sales and Support AI Without US Pricing"
            heroSubtitle="Skip high-cost conversational marketing widgets. Get a flat-rate inbox that qualifies leads and handles support across chat and +91 voice."
            aboutCompetitor="Drift specializes in conversational marketing, focused on high-velocity B2B sales pipelines and custom lead-routing."
            competitorStrengths="A pioneering conversational marketing playbook, deep B2B sales integrations, and account-based marketing setups."
            realityCheck="Drift is priced for large US enterprise budgets and focuses on pre-sales lead capture, which is both expensive and narrow for a small or mid-sized Indian business. SwanDigitals qualifies leads and resolves support in one inbox across chat and +91 voice, on flat rupee pricing. Where Drift may fit better: large US B2B sales teams running account-based marketing at scale."
            reasonsToSwitch={[
                {
                    title: "Flat Rupee Pricing",
                    description: "Avoid large US enterprise premiums. SwanDigitals offers flat plans from ₹1,999/mo with no per-message markup."
                },
                {
                    title: "Sales and Support Together",
                    description: "Do not pay for Drift plus a separate helpdesk. Qualify web leads and resolve customer questions in the same inbox."
                },
                {
                    title: "Inbound and Outbound +91 Voice",
                    description: "Go beyond web widgets. Voice agents qualify inbound leads and make outbound follow-up calls in 10 Indian languages."
                }
            ]}
            comparisonRows={[
                { feature: "Primary Use Case", SwanDigitals: "Sales + Support", competitor: "Pure B2B Sales" },
                { feature: "Pricing Tier", SwanDigitals: "Flat from ₹1,999/mo", competitor: "$2,500+/month minimum" },
                { feature: "WhatsApp Support", SwanDigitals: "Native", competitor: "Limited/Add-on" },
                { feature: "Voice AI", SwanDigitals: "Included (+91 calls)", competitor: "No" },
                { feature: "Data Hosting", SwanDigitals: "Hosted in India", competitor: "Global" }
            ]}
            targetPersona="You are a large US B2B sales team running account-based marketing at scale, with the budget for premium conversational marketing widgets."
            verdict="You are an Indian SME that wants to qualify leads, handle support and run +91 voice under one flat, predictable price."
            faqs={[
                {
                    question: "Can we migrate historic CRM records to SwanDigitals?",
                    answer: "Yes. Our onboarding team imports previous customer profiles, lead details, and chat histories directly into the platform."
                },
                {
                    question: "Does SwanDigitals integrate with HubSpot?",
                    answer: "Yes. You can natively push qualified contacts, pipeline stages, and conversation logs into HubSpot."
                },
                {
                    question: "How are Meta WhatsApp usage fees handled?",
                    answer: "We charge a flat monthly subscription. You connect your own WhatsApp credentials and pay Meta directly, with no template markups."
                },
                {
                    question: "Where is my data hosted?",
                    answer: "All customer chat logs and backend data are hosted on servers in India, kept aware of the DPDP Act 2023."
                }
            ]}
        />
    );
}
