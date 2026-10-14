import type { Metadata } from 'next';
import RestaurantContent from './RestaurantContent';

export const metadata: Metadata = {
    title: 'AI Chatbot for Restaurants India | WhatsApp & Instagram Food Ordering Bot',
    description: 'Let customers order food on WhatsApp, Instagram, Telegram & your website. SwanDigitals AI chatbot handles dine-in table orders and home delivery automatically — no missed orders, no Swiggy commission.',
    keywords: [
        'AI chatbot for restaurants India',
        'restaurant WhatsApp ordering bot',
        'food ordering chatbot India',
        'restaurant Instagram order bot',
        'table ordering QR chatbot',
        'restaurant delivery AI chatbot',
        'WhatsApp food ordering system',
        'restaurant automation India',
    ],
    alternates: {
        canonical: 'https://swandigitals.com/solutions/restaurants',
    },
    openGraph: {
        title: 'AI Chatbot for Restaurants | WhatsApp + Instagram + Telegram Ordering',
        description: 'Customers order food on any channel. Your AI waiter handles it 24/7. No commissions, no missed orders.',
        url: 'https://swandigitals.com/solutions/restaurants',
    },
};

export default function RestaurantPage() {
    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://swandigitals.com' },
            { '@type': 'ListItem', position: 2, name: 'Solutions', item: 'https://swandigitals.com/solutions' },
            { '@type': 'ListItem', position: 3, name: 'Restaurants', item: 'https://swandigitals.com/solutions/restaurants' },
        ],
    };

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
            {
                '@type': 'Question',
                name: 'Can customers order food directly on WhatsApp?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes. Customers send a message on WhatsApp, the AI shows your menu, takes their order, confirms total, and asks for table number or delivery address. No app download needed.',
                },
            },
            {
                '@type': 'Question',
                name: 'Does it work for both dine-in and home delivery?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Absolutely. For dine-in, customers scan a QR code on the table and order via WhatsApp or a web widget. For delivery, they message from any channel and provide their address.',
                },
            },
            {
                '@type': 'Question',
                name: 'Will I still pay Swiggy or Zomato commission?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Orders placed through SwanDigitals go directly to your kitchen — no third-party marketplace, no 15–30% commission. You own the customer relationship.',
                },
            },
            {
                '@type': 'Question',
                name: 'How does the menu stay updated?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'You update your menu once in our dashboard — prices, items, availability — and the chatbot reflects changes instantly across all channels.',
                },
            },
            {
                '@type': 'Question',
                name: 'Does it support Hindi and regional languages?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes. The chatbot handles Hinglish, Hindi, Tamil, Telugu, Marathi, and 6 more Indian languages natively. Your customers can order in whatever language they are comfortable with.',
                },
            },
        ],
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <RestaurantContent />
        </>
    );
}
