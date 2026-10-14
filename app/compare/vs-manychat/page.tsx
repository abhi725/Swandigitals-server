import type { Metadata } from 'next';
import ComparisonPageTemplate from '@/components/ui/ComparisonPageTemplate';

export const metadata: Metadata = {
    title: 'ManyChat Alternative in India | WhatsApp + Voice AI for SMEs',
    description: 'ManyChat is great for social flows, but is text-only with rigid menus. Switch to SwanDigitals for WhatsApp plus +91 AI calling in one inbox, 10 Indian languages.',
    keywords: ['ManyChat alternative', 'ManyChat vs SwanDigitals', 'Instagram Automation India', 'Enterprise Chatbot'],
    alternates: {
        canonical: 'https://swandigitals.com/compare/vs-manychat',
    },
}

export default function VsManyChatPage() {
    return (
        <ComparisonPageTemplate
            competitorName="ManyChat"
            slug="vs-manychat"
            heroTitle="ManyChat Alternative: WhatsApp + Voice AI Over Social Flow Builders"
            heroSubtitle="Move beyond rigid keyword-based button menus. Deploy AI that qualifies leads and answers customers, and add +91 calling, on flat rupee plans."
            aboutCompetitor="ManyChat specializes in visual flow builders for social messaging automation on channels like Facebook Messenger and Instagram DMs."
            competitorStrengths="A highly refined visual drag-and-drop editor, pre-built triggers for comment giveaways, and rapid setup for marketing campaigns."
            realityCheck="ManyChat works through rigid 'if-this-then-that' button pathways and has no phone channel. It cannot read your catalog, return policy or docs to answer freely. SwanDigitals auto-trains on your website or documents, replies in plain language across WhatsApp, Facebook and web chat, and adds +91 AI calling."
            reasonsToSwitch={[
                {
                    title: "Natural Answers, Not Menus",
                    description: "Avoid forcing buyers through multi-layer button flows. Let customers ask in natural Hinglish across 10 Indian languages."
                },
                {
                    title: "+91 Voice AI Calling",
                    description: "ManyChat is text-only. SwanDigitals adds inbound and outbound AI calling on +91 numbers, in 10 Indian languages."
                },
                {
                    title: "One Inbox for Replies",
                    description: "Social flow tools focus on triggers, not conversations. SwanDigitals unifies WhatsApp, Facebook, web chat and calls in one inbox with handoff to a human."
                }
            ]}
            comparisonRows={[
                { feature: "Primary Target", SwanDigitals: "Indian SME Support & Sales", competitor: "Social Media Marketers" },
                { feature: "Data Hosted in India", SwanDigitals: true, competitor: false },
                { feature: "+91 Voice AI Calling", SwanDigitals: true, competitor: false },
                { feature: "AI Agent", SwanDigitals: "Auto-trains on your site/menu/docs", competitor: "Manual Flow Builder" },
                { feature: "Pricing", SwanDigitals: "Flat from ₹1,999/mo", competitor: "Per-Contact Tiers" }
            ]}
            targetPersona="you are a creator or agency running Instagram and Facebook giveaways or comment-to-DM flows — ManyChat's visual builder is excellent for that."
            verdict="you are an Indian SME that wants WhatsApp, Facebook, web chat and +91 AI calling in one inbox, 10 Indian languages, and flat rupee pricing with no per-message markup."
            faqs={[
                {
                    question: "Does SwanDigitals support WhatsApp and Facebook?",
                    answer: "Yes. We connect via official Meta APIs, routing WhatsApp and Facebook messages, alongside web chat, into one AI workspace."
                },
                {
                    question: "How does SwanDigitals differ from ManyChat's flow builder?",
                    answer: "ManyChat requires you to map every branch path manually. SwanDigitals auto-trains on your website URL or documents to answer questions without flow maps."
                },
                {
                    question: "Can we sync leads with our CRM?",
                    answer: "Yes. We connect natively with HubSpot and Calendly, and push lead details, chat histories, and contact info to other tools via n8n."
                },
                {
                    question: "Is customer data private?",
                    answer: "Yes. Your conversations and records are hosted in India. SwanDigitals is built to be DPDP-2023 aware, with no lock-in."
                }
            ]}
        />
    );
}
