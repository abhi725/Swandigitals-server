import type { Metadata } from 'next';
import ComparisonPageTemplate from '@/components/ui/ComparisonPageTemplate';

export const metadata: Metadata = {
    title: 'Haptik Alternative for Indian SMEs | Chat & Voice in One Inbox',
    description: 'Compare SwanDigitals vs Haptik. An SME-friendly, flat-priced inbox with WhatsApp, web chat and native +91 voice, live in days.',
    keywords: ['Haptik Alternative', 'Haptik vs SwanDigitals', 'Indian SME Helpdesk'],
    alternates: {
        canonical: 'https://swandigitals.com/compare/vs-haptik',
    },
}

export default function VsHaptikPage() {
    return (
        <ComparisonPageTemplate
            competitorName="Haptik"
            slug="vs-haptik"
            heroTitle="Haptik Alternative: One Inbox for Chat and +91 Voice"
            heroSubtitle="Get an SME-friendly workspace that unifies WhatsApp, web chat and native voice agents on flat rupee pricing, live in days."
            aboutCompetitor="Haptik is a capable, established Indian conversational AI player with strong enterprise and WhatsApp experience."
            competitorStrengths="Solid conversational AI, deep enterprise relationships, and mature WhatsApp integrations."
            realityCheck="Haptik is a strong platform, but it is largely built and priced for larger enterprise buyers, and its bot builder can sit separately from your day-to-day agent inbox. SwanDigitals is built for the Indian SME: chat and +91 voice in one inbox, auto-trained on your content, on flat rupee pricing. Where Haptik may fit better: large enterprises with dedicated teams and complex, custom conversational projects."
            comparisonRows={[
                { feature: "Platform Scope", SwanDigitals: "Unified chat + voice inbox", competitor: "Broad enterprise AI suite" },
                { feature: "Voice AI", SwanDigitals: "Native (+91 calls)", competitor: "Limited/Third-party" },
                { feature: "Pricing Model", SwanDigitals: "Flat from ₹1,999/mo", competitor: "Enterprise / usage based" },
                { feature: "Best Fit", SwanDigitals: "Indian SMEs", competitor: "Large enterprises" },
                { feature: "Implementation", SwanDigitals: "Live in days", competitor: "Weeks to Months" }
            ]}
            reasonsToSwitch={[
                {
                    title: "Native +91 Voice Calling",
                    description: "Run inbound and outbound voice agents in 10 Indian languages in the same inbox as your chat, no separate telephony project."
                },
                {
                    title: "One Workspace, No Double Tools",
                    description: "Get conversational bots and a modern agent inbox together, so you are not juggling a separate bot builder and ticketing tool."
                },
                {
                    title: "Predictable SME Pricing",
                    description: "Flat rupee plans from ₹1,999/mo through Razorpay, with no per-message markup and fast go-live."
                }
            ]}
            targetPersona="You are a large enterprise with a dedicated team and complex, custom conversational projects that need heavy enterprise tooling."
            verdict="You are an Indian SME that wants chat and native voice in one inbox, on flat pricing, live in days."
            faqs={[
                {
                    question: "Can we transfer our WhatsApp Business API profile from Haptik?",
                    answer: "Yes. We manage the migration of your WhatsApp profile, keeping your Meta verification and green badge active with zero downtime."
                }
            ]}
        />
    );
}
