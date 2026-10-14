import type { Metadata } from 'next';
import LocationPageTemplate from '@/components/ui/LocationPageTemplate';
import { Landmark, Building2, Stethoscope, Headphones, Users, Server, Briefcase, ShoppingCart } from 'lucide-react';

export const metadata: Metadata = {
    title: "AI Chatbot & Voice Agents in Pune | SwanDigitals",
    description: "Scale your Pune-based business or software agency with SwanDigitals' secure AI chatbots and voice agents. Support for English, Hindi, and Marathi.",
    keywords: ["AI Chatbot Pune", "Voice AI Agents Pune", "Pune Support Automation", "AI India"],
    alternates: {
        canonical: "https://swandigitals.com/pune",
    },
};

export default function PunePage() {
    const useCases = [
        {
            title: "Software Helpdesk",
            desc: "Automate level-1 internal IT requests, password resets, and hardware provisioning for tech parks in Hinjewadi.",
            icon: <Server className="w-6 h-6" />
        },
        {
            title: "Manufacturing Support",
            desc: "Instantly answer supplier inquiries, verify dispatch statuses, and route logistics updates with zero delay.",
            icon: <Building2 className="w-6 h-6" />
        },
        {
            title: "Multilingual Commerce",
            desc: "Engage Pune's diverse audience with conversational agents fluent in Marathi, Hindi, and English.",
            icon: <Headphones className="w-6 h-6" />
        }
    ];

    const stats = [{"value": "10", "label": "Indian Languages"}, {"value": "24/7", "label": "Instant Support"}, {"value": "Fast", "label": "Response Time"}, {"value": "₹1,999", "label": "Starting Plan"}];

    return (
        <LocationPageTemplate
            city="Pune"
            state="Maharashtra"
            ecosystemDesc="As the thriving IT and automotive capital of Maharashtra, Pune is home to thousands of tech startups, engineering firms, and manufacturing giants in Hinjewadi, Magarpatta, and Kharadi. Delivering instant, accurate customer response is critical to retaining regional market share."
            industryFocus="IT, software, and automotive engineering"
            localTerm="Pune startup and IT sectors"
            languageNotes="Marathi and Hindi"
            painPoint="scaling support teams across multilingual customer segments while keeping customer data hosted in India and DPDP-2023 aware"
            stats={stats}
            useCases={useCases}
        />
    );
}
