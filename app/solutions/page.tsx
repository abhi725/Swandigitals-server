import type { Metadata } from 'next';
import SolutionsContent from './SolutionsContent';

export const metadata: Metadata = {
    title: 'AI Solutions for Indian SMEs — Chatbot & Voicebot Platforms | SwanDigitals',
    description: 'Explore SwanDigitals AI Chatbot and Voicebot Agent solutions. Tailored for customer support, IT helpdesks, healthcare, retail, and sales for Indian SMEs.',
    keywords: ['AI solutions for Indian SMEs', 'Text Chatbot India', 'Voicebot Agent India', 'Customer support automation', 'IT helpdesk AI', 'WhatsApp AI chatbot India'],
    alternates: {
        canonical: 'https://swandigitals.com/solutions',
    },
    openGraph: {
        title: 'AI Solutions for Indian SMEs — Text Chatbot & Voicebot Platforms',
        description: 'Differentiate Text Chatbots and Voicebot Agents. Explore industry solutions for healthcare, e-commerce, IT helpdesk, and sales.',
        url: 'https://swandigitals.com/solutions',
    },
};

export default function SolutionsPage() {
    return <SolutionsContent />;
}
