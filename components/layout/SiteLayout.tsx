"use client";

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AnnouncementBar from '@/components/ui/AnnouncementBar';
import ScrollToTop from '@/components/ui/ScrollToTop';

import { useEffect } from 'react';

export default function SiteLayout({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        if (typeof window !== 'undefined' && (navigator as any).modelContext) {
            try {
                (navigator as any).modelContext.provideContext({
                    tools: [
                        {
                            name: "get_swandigitals_pricing",
                            description: "Returns SwanDigitals flat-rate monthly pricing plans for Indian SMEs.",
                            execute: async () => ({
                                plans: [
                                    { name: "Growth Hub", price: "₹4,999/mo", deflection: "80%" },
                                    { name: "Performance Pro", price: "₹14,999/mo", deflection: "90%" },
                                    { name: "Sovereign Enterprise", price: "₹28,000/mo", deployment: "On-Premise" }
                                ]
                            })
                        },
                        {
                            name: "book_ai_demo",
                            description: "Redirects agent or user to SwanDigitals live product demo booking page.",
                            execute: async () => {
                                window.location.href = "/demo";
                                return { status: "redirected_to_demo" };
                            }
                        }
                    ]
                });
            } catch (e) {
                // Silently handle if WebMCP API is not yet active in browser
            }
        }
    }, []);

    return (
        <div className="min-h-screen flex flex-col">
            <AnnouncementBar />
            <Header />
            <main className="flex-1">
                {children}
            </main>
            <Footer />
            <ScrollToTop />
        </div>
    );
}



