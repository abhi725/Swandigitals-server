import type { Metadata } from 'next';
import ITHelpdeskContent from './ITHelpdeskContent';

export const metadata: Metadata = {
    title: 'AI Documentation & IT Helpdesk Chatbot | SwanDigitals India',
    description: 'Turn your product manuals, setup guides, and troubleshooting SOPs into a 24/7 AI support assistant. Answers repetitive customer and employee technical questions directly from your approved docs.',
    keywords: [
        'AI documentation chatbot',
        'knowledge base chatbot India',
        'technical support chatbot',
        'product manual AI bot',
        'IT helpdesk automation India',
        'troubleshooting guide chatbot',
        'customer support doc bot',
    ],
    alternates: {
        canonical: 'https://swandigitals.com/solutions/it-helpdesk',
    },
    openGraph: {
        title: 'Documentation-Driven AI Technical Support & IT Helpdesk | SwanDigitals',
        description: 'Connect your product docs and SOPs. Deliver instant, accurate technical answers with exact section citations on Web and WhatsApp.',
        url: 'https://swandigitals.com/solutions/it-helpdesk',
    },
};

export default function ITHelpdeskPage() {
    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://swandigitals.com' },
            { '@type': 'ListItem', position: 2, name: 'Solutions', item: 'https://swandigitals.com/solutions' },
            { '@type': 'ListItem', position: 3, name: 'IT Helpdesk & Tech Docs', item: 'https://swandigitals.com/solutions/it-helpdesk' },
        ],
    };

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
            {
                '@type': 'Question',
                name: 'What documentation does the AI need to get trained?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'The AI works directly from your existing materials. You can upload user manuals, troubleshooting guides, setup SOPs, FAQ documents, or provide links to your online documentation portal. Supported formats include PDF, DOCX, TXT, and web URLs.',
                },
            },
            {
                '@type': 'Question',
                name: 'What if our product documentation updates frequently?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Updating the knowledge base takes just a minute. Simply upload the new document version or click refresh on your documentation URL. The AI immediately uses the latest information for subsequent questions.',
                },
            },
            {
                '@type': 'Question',
                name: 'Will the AI make up answers if something is not in our docs?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'No. SwanDigitals is configured with strict retrieval grounding. If a customer asks a question that is not covered in your uploaded documentation, the AI clearly states that it does not have that information and offers to connect them with your human support team.',
                },
            },
            {
                '@type': 'Question',
                name: 'Can this help both our customers and our internal team?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes. Many companies use it for customer technical support (product FAQs, setup guides, troubleshooting steps) and also have an internal knowledge bot for employees (company IT policies, VPN setup, onboarding guides, leave policies).',
                },
            },
            {
                '@type': 'Question',
                name: 'How does the bot hand over to human agents when an issue is too complex?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'When a question is not in the docs or the user requests to speak with a human, the bot collects their name, contact details, and a summary of their issue. It then forwards the ticket to your team via email, webhook, or HubSpot CRM.',
                },
            },
        ],
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <ITHelpdeskContent />
        </>
    );
}
