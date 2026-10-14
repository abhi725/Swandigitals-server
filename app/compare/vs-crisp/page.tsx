import type { Metadata } from 'next';
import ComparisonPageTemplate from '@/components/ui/ComparisonPageTemplate';

export const metadata: Metadata = {
    title: 'Crisp Alternative in India | Chat, Voice & One Inbox for SMEs',
    description: 'Crisp is a nice inbox for startups. SwanDigitals adds native +91 voice, 10 Indian languages, and data hosted in India, on flat rupee pricing.',
    keywords: ['Crisp alternative', 'Crisp chat alternative India', 'SME shared inbox', 'AI Helpdesk'],
    alternates: {
        canonical: 'https://swandigitals.com/compare/vs-crisp',
    },
}

export default function VsCrispPage() {
    return (
        <ComparisonPageTemplate
            competitorName="Crisp"
            slug="vs-crisp"
            heroTitle="Moving Beyond a Pretty Shared Inbox"
            heroSubtitle="Crisp is a clean inbox for manual startup chat. SwanDigitals adds AI that trains on your content, native +91 voice, and data hosted in India."
            aboutCompetitor="Crisp.chat is a clean, modern shared inbox with a free tier, popular among early-stage startups worldwide."
            competitorStrengths="A fast, light interface, good live chat tools, and simple flat pricing that small teams like."
            realityCheck="Crisp is great for manual typing, but its AI is basic and it stores data on servers outside India. For an Indian SME that wants to automate WhatsApp and phone support, that means limited automation and offshore data. SwanDigitals adds self-training AI, native +91 voice and data hosted in India. Where Crisp may fit better: tiny teams that just want a light, cheap inbox for manual chat."
            reasonsToSwitch={[
                {
                    title: "Data Hosted in India",
                    description: "SwanDigitals keeps your customer data on servers in India, kept aware of the DPDP Act 2023, unlike Crisp's offshore hosting."
                },
                {
                    title: "AI That Trains on Your Content",
                    description: "Crisp is built for humans typing replies. SwanDigitals reads your website and documents to answer routine questions automatically."
                },
                {
                    title: "Native Phone Call AI",
                    description: "Crisp only does text. SwanDigitals adds native +91 voice, so customers can speak to a smart agent on the phone."
                }
            ]}
            comparisonRows={[
                { feature: "Data Hosting", SwanDigitals: "Hosted in India", competitor: "Europe / Global" },
                { feature: "Main Focus", SwanDigitals: "AI + human, chat + voice", competitor: "Human Agent Inbox" },
                { feature: "Voice AI Features", SwanDigitals: "Native (+91 calls)", competitor: "None" },
                { feature: "Pricing Model", SwanDigitals: "Flat from ₹1,999/mo", competitor: "Flat Pricing" },
                { feature: "Indian Languages", SwanDigitals: "10 Indian languages", competitor: "Plugin-based translation" }
            ]}
            targetPersona="You are a tiny team that just wants a light, cheap shared inbox for a few people to answer support chats manually."
            verdict="You are a growing Indian SME that wants AI automation, native voice, and data hosted in India, not just a manual chat inbox."
            faqs={[
                {
                    question: "Where is my customer data stored and how is it secured?",
                    answer: "We host all customer data on servers in India, kept aware of India's DPDP Act 2023. Data is encrypted in transit and at rest, payments run through Razorpay, and there is no lock-in."
                },
                {
                    question: "How does Meta direct billing work for WhatsApp conversations?",
                    answer: "Instead of adding markup fees on your chats, we connect you directly to Meta's billing. You pay Meta directly at actual cost for your WhatsApp Business API conversations. We do not charge extra per message."
                },
                {
                    question: "Can I port my existing WhatsApp Business API number to SwanDigitals?",
                    answer: "Yes, you can easily port your existing WhatsApp number to our platform. There is no downtime. Your business profile, green tick status, and phone number remain exactly the same during the transition."
                },
                {
                    question: "How do we migrate our existing chats and ticket history from our previous CRM?",
                    answer: "Our team helps you import all your contact lists, historical chat logs, and support tickets from your previous tool. We make sure the migration is smooth and your agents do not lose any context during the switch."
                }
            ]}
        />
    );
}
