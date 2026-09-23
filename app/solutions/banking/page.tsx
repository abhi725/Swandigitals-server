import type { Metadata } from 'next';
import BankingContent from './BankingContent';

export const metadata: Metadata = {
    title: 'AI Banking & BFSI Customer Support Platform | SwanDigitals',
    description: 'Bank-grade AI customer support platform built for Indian Banks, NBFCs & BFSI institutions. DPDP Act 2023 compliant with air-gapped on-premise deployment.',
    keywords: ['Banking AI Chatbot India', 'BFSI Voice AI', 'DPDP Act Banking Support', 'On-Premise AI Banking', 'SwanDigitals Banking'],
    alternates: {
        canonical: 'https://swandigitals.com/solutions/banking',
    },
};

export default function BankingPage() {
    return <BankingContent />;
}
