import type { Metadata } from 'next';
import ComparisonPageTemplate from '@/components/ui/ComparisonPageTemplate';

export const metadata: Metadata = {
    title: 'Gupshup Alternative | WhatsApp + Voice AI for Indian SMEs',
    description: 'Compare SwanDigitals vs Gupshup. Move beyond messaging APIs to WhatsApp plus +91 AI calling in one inbox, 10 Indian languages, and flat rupee pricing.',
    keywords: ['Gupshup Alternative', 'Gupshup vs SwanDigitals', 'Conversational AI'],
    alternates: {
        canonical: 'https://swandigitals.com/compare/vs-gupshup',
    },
}

export default function VsGupshupPage() {
    return (
        <ComparisonPageTemplate
            competitorName="Gupshup"
            slug="vs-gupshup"
            heroTitle="Move Beyond Rigid Messaging APIs"
            heroSubtitle="Don't burn engineering time building interfaces on top of Gupshup. Get WhatsApp, Facebook, web chat and +91 AI calling in one ready inbox."
            aboutCompetitor="Gupshup is a large messaging gateway provider. They are famous for routing millions of messages and providing basic, rule-based chatbot templates."
            competitorStrengths="Strong telecom network connections and high volume message delivery capacity."
            realityCheck="Gupshup is a carrier pipe to push messages, and its bots rely on basic keyword matching. If you want a ready inbox, +91 phone support, and AI that learns from your website or documents to answer customers automatically, on Gupshup you have to build it all yourself. SwanDigitals ships that out of the box for Indian SMEs."
            reasonsToSwitch={[
                {
                    title: "Auto-Trains on Your Business",
                    description: "Do not rely on rigid keyword trees. Our AI reads your website, menu or documents to answer customer questions in 10 Indian languages."
                },
                {
                    title: "One Collaborative Inbox",
                    description: "Give your team one workspace to track, assign, and reply across WhatsApp, Facebook, web chat, and +91 calls."
                },
                {
                    title: "+91 Voice AI Calling",
                    description: "We go beyond chat. SwanDigitals offers natural voice agents that handle inbound and outbound +91 calls in Indian languages."
                }
            ]}
            comparisonRows={[
                { feature: "Primary Focus", SwanDigitals: "WhatsApp + Voice AI Support", competitor: "Messaging Gateway" },
                { feature: "Agent Interface", SwanDigitals: "One Ready Inbox", competitor: "Developer API Only" },
                { feature: "AI Agent", SwanDigitals: "Auto-trains on your site/menu/docs", competitor: "Basic Keyword Bots" },
                { feature: "+91 Voice AI Calling", SwanDigitals: true, competitor: false },
                { feature: "Pricing", SwanDigitals: "Flat from ₹1,999/mo", competitor: "Per-Message Usage" }
            ]}
            targetPersona="you need a high-volume developer API to broadcast messages at scale and build your own keyword flows — Gupshup's gateway is built for that."
            verdict="you are an Indian SME that wants a ready inbox with WhatsApp, Facebook, web chat and +91 AI calling, 10 Indian languages, and flat rupee pricing with no per-message markup."
            faqs={[
                {
                    question: "Can I use Gupshup with SwanDigitals?",
                    answer: "Yes. If you have an active Gupshup account, you can connect it to SwanDigitals to power our inbox and AI features with your existing number."
                },
                {
                    question: "Does SwanDigitals host customer data in India?",
                    answer: "Yes. We host your data in India and are built to be DPDP-2023 aware, so your business stays on the right side of local data privacy expectations, with no lock-in."
                },
                {
                    question: "Can we pay Meta directly for our WhatsApp Business API fees?",
                    answer: "Yes. You link your own Meta Business Manager and pay Meta directly for conversation fees. SwanDigitals does not add markups or extra fees to Meta's official charges."
                },
                {
                    question: "Can I port my existing WhatsApp Business number to SwanDigitals?",
                    answer: "Yes. You can migrate your current WhatsApp Business API number to our platform. The porting process causes zero downtime for your active customer chats."
                },
                {
                    question: "Can we migrate our existing customer profiles and support history to SwanDigitals?",
                    answer: "Yes. Our team handles the migration of your historical tickets and customer data from your legacy systems, ensuring a smooth transition with no data loss."
                }
            ]}
        />
    );
}

