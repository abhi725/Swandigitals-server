import type { Metadata } from 'next';
import ComparisonPageTemplate from '@/components/ui/ComparisonPageTemplate';

export const metadata: Metadata = {
    title: 'MSG91 Alternative | WhatsApp + Voice AI for Indian SMEs',
    description: 'Beyond bulk SMS. Move from MSG91 to SwanDigitals for WhatsApp plus +91 AI calling in one inbox, 10 Indian languages, and flat rupee pricing.',
    keywords: ['MSG91 alternative', 'MSG91 Hello vs SwanDigitals', 'Omnichannel Contact Center India', 'Enterprise AI SMS WhatsApp'],
    alternates: {
        canonical: 'https://swandigitals.com/compare/vs-msg91',
    },
}

export default function VsMsg91Page() {
    return (
        <ComparisonPageTemplate
            competitorName="MSG91 (Hello)"
            slug="vs-msg91"
            heroTitle="Move Beyond Bulk SMS APIs"
            heroSubtitle="Don't build a modern support setup on top of bulk SMS. Get WhatsApp, Facebook, web chat and +91 AI calling in one inbox, in 10 Indian languages."
            aboutCompetitor="MSG91 is a traditional telecom provider that built its reputation on bulk SMS. Their 'Hello' inbox attempts to bundle legacy communication channels, but it remains tied to older messaging models."
            competitorStrengths="Excellent reliability for sending millions of transactional OTP SMS messages and deep integration with Indian carrier systems."
            realityCheck="MSG91 is built on telecom infrastructure, not artificial intelligence. While 'Hello' offers a basic inbox, it lacks deep Generative AI integration, vector databases, and real voice AI. If you want automated systems that actually resolve customer issues using company knowledge, their legacy system will hold you back."
            reasonsToSwitch={[
                {
                    title: "Auto-Trains on Your Business",
                    description: "SwanDigitals learns from your website, menu or documents, so it can answer real customer questions out of the box, not just send templates."
                },
                {
                    title: "WhatsApp + Voice in One Inbox",
                    description: "Give your team one clean workspace for WhatsApp, Facebook, web chat and +91 calls, instead of juggling separate SMS and chat tools."
                },
                {
                    title: "+91 Voice AI in 10 Languages",
                    description: "Instead of rigid IVR menus, SwanDigitals provides voice agents that talk naturally on +91 numbers in 10 Indian languages."
                }
            ]}
            comparisonRows={[
                { feature: "Core Focus", SwanDigitals: "WhatsApp + Voice AI Support", competitor: "Bulk SMS & Telecom" },
                { feature: "AI Agent", SwanDigitals: "Auto-trains on your site/menu/docs", competitor: "Basic Text Rules" },
                { feature: "Channels Supported", SwanDigitals: "WhatsApp, Facebook, Web, Voice", competitor: "SMS-centric" },
                { feature: "+91 Voice AI", SwanDigitals: "AI Voice Agents (10 languages)", competitor: "Standard IVR Routing" },
                { feature: "Pricing", SwanDigitals: "Flat from ₹1,999/mo", competitor: "Per-Unit Usage" }
            ]}
            targetPersona="you mainly need high-volume transactional OTP SMS and carrier-grade delivery — MSG91 is reliable and well-suited to that job."
            verdict="you are an Indian SME that wants WhatsApp, Facebook, web chat and +91 AI calling in one inbox, 10 Indian languages, and flat rupee pricing with no per-message markup."
            faqs={[
                {
                    question: "Can I use MSG91 for SMS and SwanDigitals for AI Support?",
                    answer: "Yes. You can keep MSG91 to send bulk transactional OTP SMS messages, while using SwanDigitals to run your omnichannel support team and manage customer conversations."
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

