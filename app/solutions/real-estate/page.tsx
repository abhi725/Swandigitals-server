import type { Metadata } from 'next';
import RealEstateContent from './RealEstateContent';

export const metadata: Metadata = {
    title: 'AI Chatbot & Voice Assistant for Real Estate India | Builders & Developers',
    description: 'Capture property leads 24/7 on WhatsApp & Instagram. Automate brochure delivery, BHK & budget qualification, and site visit bookings with zero missed inquiries.',
    keywords: [
        'AI chatbot for real estate India',
        'real estate WhatsApp chatbot',
        'property lead qualification bot',
        'builder site visit booking bot',
        'real estate Instagram DM automation',
        'channel partner chatbot India',
        'real estate lead generation AI',
        'property developer AI assistant',
    ],
    alternates: {
        canonical: 'https://swandigitals.com/solutions/real-estate',
    },
    openGraph: {
        title: 'AI Chatbot for Real Estate Builders & Developers | SwanDigitals',
        description: 'Qualify property buyers, deliver PDF brochures, and book site visits automatically on WhatsApp and Instagram.',
        url: 'https://swandigitals.com/solutions/real-estate',
    },
};

export default function RealEstatePage() {
    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://swandigitals.com' },
            { '@type': 'ListItem', position: 2, name: 'Solutions', item: 'https://swandigitals.com/solutions' },
            { '@type': 'ListItem', position: 3, name: 'Real Estate & Builders', item: 'https://swandigitals.com/solutions/real-estate' },
        ],
    };

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
            {
                '@type': 'Question',
                name: 'How does the AI chatbot capture real estate leads from Instagram and Facebook ads?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'When a prospective buyer clicks your Meta ad (Click-to-WhatsApp) or comments on an Instagram Reel, the AI instantly engages them within 2 seconds, delivers your project e-brochure, and asks 3 quick qualifying questions (BHK preference, budget, and possession timeline).',
                },
            },
            {
                '@type': 'Question',
                name: 'Can the chatbot schedule site visits and send reminders?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes. The AI proposes available weekend or weekday slots, confirms the buyer date and time, and automatically sends a Google Maps location pin with directions. It also fires a WhatsApp reminder 2 hours before the visit to minimize no-shows.',
                },
            },
            {
                '@type': 'Question',
                name: 'Can we integrate it with our existing CRM like LeadSquared or Salesforce?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes. SwanDigitals pushes qualified lead details, conversation history, budget, and booked visit dates directly into LeadSquared, Salesforce, HubSpot, or Google Sheets via webhooks and REST APIs.',
                },
            },
            {
                '@type': 'Question',
                name: 'Does the bot handle multiple ongoing projects simultaneously?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes. You can upload brochures and pricing sheets for multiple residential or commercial projects. The bot intelligently routes buyers to the project matching their preferred locality, budget, and unit configuration.',
                },
            },
            {
                '@type': 'Question',
                name: 'Can the AI voice assistant call leads automatically when an ad form is submitted?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes. With our Voice AI module, whenever a buyer submits a Meta or website form, our AI places an instant verification call within 60 seconds in Hindi, English, Marathi, Telugu, or Tamil to verify their interest and confirm their site visit schedule.',
                },
            },
        ],
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <RealEstateContent />
        </>
    );
}
