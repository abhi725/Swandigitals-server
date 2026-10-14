import type { Metadata } from 'next';
import HomePageContent from './HomePageContent';

export const metadata: Metadata = {
    title: 'Reliable AI chatbot & voice agent for Indian SMEs',
    description: 'Deploy AI chat and voice agents for your Indian business. Data hosted in India, flat ₹ pricing starting ₹1,999/mo (Free plan available). WhatsApp, retail, and local services automation.',
    keywords: ['AI Chatbot India', 'Voice AI India', 'Data Privacy', 'WhatsApp Chatbot India', 'SME AI India', 'Customer Service AI'],
    alternates: {
        canonical: 'https://swandigitals.com',
    },
};

export default function HomePage() {
    return <HomePageContent />;
}


