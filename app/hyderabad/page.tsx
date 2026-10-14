import type { Metadata } from 'next';
import LocationPageTemplate from '@/components/ui/LocationPageTemplate';
import { Landmark, Building2, Stethoscope, Headphones, Users, Server, Briefcase, ShoppingCart } from 'lucide-react';

export const metadata: Metadata = {
    title: "AI Chatbots for Clinics & Tech Businesses in Hyderabad | SwanDigitals",
    description: "Deploy AI chatbots and voice agents in Hyderabad. Automate patient booking, reminders, and IT support, data hosted in India.",
    keywords: ["AI Chatbot Hyderabad", "Clinic AI Hyderabad", "HITEC City Support AI", "Telugu AI Agent"],
    alternates: {
        canonical: "https://swandigitals.com/hyderabad",
    },
};

export default function HyderabadPage() {
    const useCases = [
        {
            title: "Patient Triage & Booking",
            desc: "Enable patients to check symptoms, schedule clinical visits, and receive prescription reminders 24/7.",
            icon: <Server className="w-6 h-6" />
        },
        {
            title: "Pharma Ops Support",
            desc: "Streamline supply chain logistics queries, vendor inquiries, and compliance checklist distributions.",
            icon: <Building2 className="w-6 h-6" />
        },
        {
            title: "Internal IT Helpdesk",
            desc: "Resolve password resets, configure network access, and deflect standard employee tickets automatically.",
            icon: <Headphones className="w-6 h-6" />
        }
    ];

    const stats = [{"value": "10", "label": "Indian Languages"}, {"value": "24/7", "label": "Patient Booking"}, {"value": "7 Days", "label": "To Go Live"}, {"value": "₹1,999", "label": "Starting Plan"}];

    return (
        <LocationPageTemplate
            city="Hyderabad"
            state="Telangana"
            ecosystemDesc="Hyderabad's clinics, healthcare providers, and tech businesses are expanding rapidly across HITEC City and Gachibowli. These businesses want AI systems that maintain customer trust and keep data hosted in India."
            industryFocus="clinics, local healthcare, and technology"
            localTerm="Hyderabad clinics and tech hub"
            languageNotes="Telugu, Urdu, and English"
            painPoint="automating patient engagement and customer onboarding workflows while keeping patient data secure and hosted in India"
            stats={stats}
            useCases={useCases}
        />
    );
}
