import type { Metadata } from 'next';
import CustomerServiceContent from './CustomerServiceContent';

export const metadata: Metadata = {
    title: 'AI Customer Support Automation for Indian Businesses | SwanDigitals',
    description: 'Deflect up to 90% of support tickets with autonomous AI agents on WhatsApp, Web Chat & Vernacular Voice AI. Fast, 24/7 responses in 10 Indian languages with seamless human handoff.',
    keywords: ['Customer Service Automation', 'WhatsApp Customer Support Bot', 'Vernacular Support AI India', 'Support Ticket Deflection', '24/7 AI Agent', 'Omnichannel Helpdesk'],
    alternates: {
        canonical: 'https://swandigitals.com/solutions/customer-service',
    },
};

export default function CustomerServicePage() {
    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://swandigitals.com'
            },
            {
                '@type': 'ListItem',
                position: 2,
                name: 'Solutions',
                item: 'https://swandigitals.com/solutions'
            },
            {
                '@type': 'ListItem',
                position: 3,
                name: 'Customer Service',
                item: 'https://swandigitals.com/solutions/customer-service'
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <CustomerServiceContent />
        </>
    );
}
