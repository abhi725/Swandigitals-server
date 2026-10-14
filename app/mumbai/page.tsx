import type { Metadata } from 'next';
import LocationPageTemplate from '@/components/ui/LocationPageTemplate';
import { Landmark, Building2, Stethoscope, Headphones, Users, Server, Briefcase, ShoppingCart } from 'lucide-react';

export const metadata: Metadata = {
    title: "AI Chatbots & Voice Agents for SMEs in Mumbai | SwanDigitals",
    description: "AI chatbots and voice agents for Mumbai's retail, real estate, and local service businesses. Data hosted in India, flat ₹ pricing, live in days.",
    keywords: ["AI Chatbot Mumbai", "WhatsApp Chatbot Mumbai", "Voice AI Mumbai", "SME AI India"],
    alternates: {
        canonical: "https://swandigitals.com/mumbai",
    },
};

export default function MumbaiPage() {
    const useCases = [
        {
            title: "Order & Support Chat",
            desc: "Deploy AI chat on WhatsApp and web to resolve order and service inquiries instantly, hosted on secure cloud infrastructure in India.",
            icon: <Server className="w-6 h-6" />
        },
        {
            title: "Real Estate Lead Qualification",
            desc: "Guide property buyers through configuration, pricing, and site-visit booking on WhatsApp and Instagram, 24/7.",
            icon: <Building2 className="w-6 h-6" />
        },
        {
            title: "Lead Qualification",
            desc: "Engage high-intent leads with automated agents before seamless routing to your sales team.",
            icon: <Headphones className="w-6 h-6" />
        }
    ];

    const stats = [{"value": "10", "label": "Indian Languages"}, {"value": "7 Days", "label": "To Go Live"}, {"value": "₹1,999", "label": "Starting Plan"}, {"value": "24/7", "label": "AI Support"}];

    return (
        <LocationPageTemplate
            city="Mumbai"
            state="Maharashtra"
            ecosystemDesc="India's financial and commercial capital, Mumbai is home to a huge base of retail, real estate, and services SMEs across BKC, Andheri, and Lower Parel. These businesses want fast, WhatsApp-first customer engagement without hiring a large support team."
            industryFocus="retail, real estate, and local services"
            localTerm="Mumbai SME businesses"
            languageNotes="Marathi, Hindi, and Gujarati"
            painPoint="juggling WhatsApp, calls, and walk-ins across multiple locations without a big support team, while keeping customer data hosted in India"
            stats={stats}
            useCases={useCases}
        />
    );
}
