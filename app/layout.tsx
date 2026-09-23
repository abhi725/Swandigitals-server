import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const dmSans = DM_Sans({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
    display: 'swap',
    fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
    adjustFontFallback: true
})

export const metadata: Metadata = {
    // FIX: metadataBase resolves all relative OG/Twitter image URLs — eliminates build warnings
    metadataBase: new URL('https://swandigitals.com'),
    title: {
        default: 'SwanDigitals - AI Customer Support Platform for India',
        template: '%s | SwanDigitals'
    },
    description: 'The AI-powered customer support platform built for Indian SMEs. WhatsApp, Voice, Chat — all in one inbox. Live in days, flat pricing in ₹. Start free.',
    keywords: ['SwanDigitals', 'customer support', 'helpdesk', 'WhatsApp inbox', 'AI chatbot India', 'AI voice agent India', 'WhatsApp automation India', 'SME chatbot India', 'SwanDigitals'],
    authors: [{ name: 'Swati Gaikwad' }, { name: 'Kiran Shelke' }],
    creator: 'SwanDigitals',
    openGraph: {
        type: 'website',
        locale: 'en_IN',
        url: 'https://swandigitals.com',
        title: 'SwanDigitals | AI Customer Support Platform for India',
        description: 'The AI-powered customer support platform built for Indian SMEs. WhatsApp, Voice, Chat — all in one inbox. Live in days, flat pricing in ₹. Start free.',
        siteName: 'SwanDigitals',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'SwanDigitals — AI Customer Support Platform for India',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'SwanDigitals | AI Customer Support Platform for India',
        description: 'The AI-powered customer support platform for Indian businesses. WhatsApp, Voice, Chat — in one inbox.',
        creator: '@swandigitals',
        images: ['/og-image.jpg'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    alternates: {
        canonical: 'https://swandigitals.com',
        languages: {
            'en-IN': 'https://swandigitals.com',
        },
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'Organization',
                '@id': 'https://swandigitals.com/#organization',
                name: 'SwanDigitals',
                url: 'https://swandigitals.com',
                logo: {
                    '@type': 'ImageObject',
                    url: 'https://swandigitals.com/logo.png',
                },
                description: 'AI chatbot and voice agent platform for Indian SMEs — WhatsApp, Facebook, web chat and phone calls in one inbox, data hosted in India',
                address: {
                    '@type': 'PostalAddress',
                    streetAddress: 'B31 flat, Aaykar society, Kothrud',
                    addressLocality: 'Pune',
                    postalCode: '411038',
                    addressRegion: 'Maharashtra',
                    addressCountry: 'IN',
                },
                contactPoint: {
                    '@type': 'ContactPoint',
                    telephone: '+91-7770070762',
                    contactType: 'customer service',
                    email: 'support@swandigitals.com',
                    areaServed: 'IN',
                    availableLanguage: ['en', 'hi'],
                },
                founder: [
                    {
                        '@type': 'Person',
                        name: 'Swati Gaikwad',
                        jobTitle: 'CEO & Co-founder',
                        url: 'https://swandigitals.com/leadership',
                    },
                    {
                        '@type': 'Person',
                        name: 'Kiran Shelke',
                        jobTitle: 'CTO & Co-founder',
                        url: 'https://swandigitals.com/leadership',
                    }
                ],
                knowsAbout: [
                    'AI Customer Support Platform',
                    'WhatsApp Business Automation',
                    'AI Voice Agent for +91 Calls',
                    'DPDP 2023 Awareness',
                    'Multilingual Voice AI',
                    'SME Chatbot India',
                    'Lead Capture Automation',
                    'Appointment & Reminder Automation',
                ],
                hasOfferCatalog: {
                    '@type': 'OfferCatalog',
                    name: 'SwanDigitals AI Platform Plans',
                    itemListElement: [
                        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Growth Hub', description: 'AI-powered inbox for growing Indian businesses' } },
                        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Performance Pro', description: 'Advanced AI chat + voice for scaling SMEs' } },
                        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Scale', description: 'Higher volumes and multi-location businesses, data hosted in India' } },
                    ],
                },
                sameAs: [
                    'https://linkedin.com/company/swandigitals',
                    'https://twitter.com/swandigitals',
                    'https://www.facebook.com/Digitalmarketingcompanyswandigitals/',
                    'https://www.instagram.com/digital_marketing_swandigitals/',
                ],
            },
            {
                '@type': 'LocalBusiness',
                '@id': 'https://swandigitals.com/#localbusiness',
                name: 'SwanDigitals',
                image: 'https://swandigitals.com/logo.png',
                telephone: '+91 7770070762',
                email: 'support@swandigitals.com',
                address: {
                    '@type': 'PostalAddress',
                    streetAddress: 'B31 flat, Aaykar society, Kothrud',
                    addressLocality: 'Pune',
                    postalCode: '411038',
                    addressRegion: 'Maharashtra',
                    addressCountry: 'IN',
                },
                geo: {
                    '@type': 'GeoCoordinates',
                    latitude: '18.5089',
                    longitude: '73.8078',
                },
                url: 'https://swandigitals.com',
                priceRange: '₹₹',
                areaServed: ['Pune', 'Mumbai', 'Bangalore', 'Hyderabad', 'Chennai', 'Delhi', 'IN'],
                openingHoursSpecification: {
                    '@type': 'OpeningHoursSpecification',
                    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                    opens: '10:00',
                    closes: '19:00',
                },
            },
            {
                '@type': 'WebSite',
                '@id': 'https://swandigitals.com/#website',
                url: 'https://swandigitals.com',
                name: 'SwanDigitals',
                publisher: {
                    '@id': 'https://swandigitals.com/#organization',
                },
                inLanguage: 'en-IN',
                // SearchAction: enables Google Sitelinks Search Box in SERPs
                potentialAction: {
                    '@type': 'SearchAction',
                    target: {
                        '@type': 'EntryPoint',
                        urlTemplate: 'https://swandigitals.com/search?q={search_term_string}',
                    },
                    'query-input': 'required name=search_term_string',
                },
            },
            {
                '@type': 'SoftwareApplication',
                name: 'SwanDigitals',
                operatingSystem: 'Web',
                applicationCategory: 'BusinessApplication',
                offers: {
                    '@type': 'AggregateOffer',
                    lowPrice: '4999',
                    highPrice: '45000',
                    priceCurrency: 'INR',
                    offerCount: '3',
                },
                featureList: [
                    'Multi-channel inbox (WhatsApp, Facebook, Web chat)',
                    'AI voice agent for inbound & outbound +91 calls',
                    'Voice bot in 10 Indian languages',
                    'Auto-trains on your website, menu & documents',
                    'HubSpot, Calendly & Razorpay integrations',
                    'Data hosted in India, DPDP 2023 aware',
                    'Flat monthly INR pricing — no per-message markup',
                ],
            },
        ],
    };

    return (
        <html lang="en-IN">

            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body className={dmSans.className}>
                <noscript>
                    <iframe
                        src="https://www.googletagmanager.com/ns.html?id=GTM-KR7FXZH"
                        height="0"
                        width="0"
                        className="hidden"
                    />
                </noscript>
                <noscript>
                    <div className="p-5 text-center bg-orange-50 border-2 border-orange-500 m-5 rounded-lg">
                        <p className="text-lg font-bold">JavaScript Required</p>
                        <p>This website requires JavaScript to function properly. Please enable JavaScript in your browser settings.</p>
                        <p><strong>SwanDigitals</strong> - AI Customer Support Platform for India</p>
                        <p>Contact: +91 7770070762 | Email: support [at] swandigitals.com</p>
                    </div>
                </noscript>
                {children}
                <Script id="google-tag-manager" strategy="lazyOnload">
                    {`
                    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','GTM-KR7FXZH');
                    `}
                </Script>

                <Script id="engagebay-tracking-code" strategy="lazyOnload" dangerouslySetInnerHTML={{
                    __html: `
                    var EhAPI = EhAPI || {}; EhAPI.after_load = function(){
                    EhAPI.set_account('bbk7lmu2rmvae1u1os10a6no8c', 'swandigitalshu');
                    EhAPI.execute('rules');};(function(d,s,f) {
                    var sc=d.createElement(s);sc.type='text/javascript';
                    sc.async=true;sc.src=f;var m=d.getElementsByTagName(s)[0];
                    m.parentNode.insertBefore(sc,m);
                    })(document, 'script', '//d2p078bqz5urf7.cloudfront.net/jsapi/ehform.js?v' + new Date().getHours());
                    `
                }} />

                <Script id="swan-chat-widget" strategy="lazyOnload" dangerouslySetInnerHTML={{
                    __html: `
                    window.chatwootSettings = {"position":"right","type":"standard","launcherTitle":""};
                    (function(d,t) {
                      var BASE_URL="https://chat.swandigitals.com";
                      var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
                      g.src=BASE_URL+"/packs/js/sdk.js";
                      g.async = true;
                      s.parentNode.insertBefore(g,s);
                      g.onload=function(){
                        window.chatwootSDK.run({
                          websiteToken: 'bwEMnvgPoGhUAAFdwrhSbvJw',
                          baseUrl: BASE_URL
                        });
                      }

                      window.addEventListener("chatwoot:ready", function () {
                        /* ── Advanced: set page context as custom attributes ── */
                        window.$chatwoot.setCustomAttributes({
                          page: window.location.pathname,
                          referrer: document.referrer || 'direct',
                          utm_source: new URLSearchParams(window.location.search).get('utm_source') || '',
                          utm_campaign: new URLSearchParams(window.location.search).get('utm_campaign') || ''
                        });

                        /* ── Proactive: open widget on /pricing after 8s ── */
                        if (window.location.pathname.includes('/pricing') ||
                            window.location.pathname.includes('/demo') ||
                            window.location.pathname.includes('/contact')) {
                          setTimeout(function() {
                            window.$chatwoot.toggle('open');
                          }, 8000);
                        }
                      });
                    })(document,"script");
                    `
                }} />
            </body>
        </html>
    )
}
