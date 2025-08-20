import {
    Globe,
    Brain,
    ShieldCheck,
    Award,
    Package,
    Plane,
    Truck,
    Pill,
    Syringe, Globe2,
    Target, Heart, BarChart4, Users
} from "lucide-react";
import React from "react";
import Image from "next/image";

// FIXED: Removed hardcoded colors from icons - let FeaturesSection handle the colors dynamically
export const featuresData = {
    heading: "Why Choose Novitrail?",
    subHeading: "Empowering your journey with innovation, trust, and reliability. Here's what makes us your perfect partner:",
    cards: [
        {
            title: "GDP Compliant",
            icon: <Award size={36} />, // REMOVED: className="text-novitrail-orange"
            content: "We specialize in providing full sourcing solutions with FDA-approved and registered products from quality manufacturers.",
        },
        {
            title: "Global Reach",
            icon: <Globe size={36} />, // REMOVED: className="text-novitrail-blue"
            content: "Operating across 20+ countries spanning Asian countries, European Union, MENA, SAARC, LAC, African, and CIS regions.",
        },
        {
            title: "Quality Products",
            icon: <Package size={36} />, // REMOVED: className="text-novitrail-orange"
            content: "Comprehensive range of pharmaceutical products including specialty medicines, generic and branded drugs, and anti-cancer medicines.",
        },
        {
            title: "Healthcare Standards",
            icon: <Brain size={36} />, // REMOVED: className="text-novitrail-blue"
            content: "Professional handling of critically sensitive cold chain & ambient temperature medications meeting global distribution standards.",
        },
        {
            title: "Regulatory Compliance",
            icon: <ShieldCheck size={36} />, // REMOVED: className="text-novitrail-orange"
            content: "Full compliance with international laws & regulations for pharmaceutical acquisition, warehousing, and distribution.",
        },
        {
            title: "Secure Supply Chain",
            icon: <ShieldCheck size={36} />, // REMOVED: className="text-novitrail-blue"
            content: "Ensuring pharmaceutical integrity through strict quality control and secure supply chain management.",
        },
        {
            title: "Global Distribution",
            icon: <Plane size={36} />, // REMOVED: className="text-novitrail-orange"
            content: "Efficient worldwide distribution network ensuring timely delivery of pharmaceutical products across continents.",
        }
    ]
};

export const servicesData = {
    heading: "Our Services",
    subHeading: "Explore our range of specialized services designed to cater to your business needs.",
    cards: [
        {
            icon: <Truck size={36} />, // REMOVED: className="text-novitrail-orange"
            title: "Distribution Business",
            content:
                "Efficient and reliable distribution solutions tailored to your needs. We ensure smooth operations and timely delivery for all partners.",
        },
        {
            icon: <Globe size={36} />, // REMOVED: className="text-novitrail-blue"
            title: "Export Business",
            content:
                "Global reach with seamless export services for your products. Navigate international markets with our trusted expertise.",
        },
        {
            icon: <Pill size={36} />, // REMOVED: className="text-novitrail-orange"
            title: "Branded Pharmaceuticals",
            content:
                "High-quality branded pharmaceuticals that you can trust. Our products meet stringent global standards for healthcare.",
        }
    ]
};

export const missionData = {
    heading: "Our Mission",
    subHeading: "Driving healthcare innovation with purpose and commitment",
    cards: [
        {
            icon: <Target size={36} />, // REMOVED: className="text-novitrail-orange"
            title: "Global Excellence",
            content: "Become a holistic pharmaceutical marketing company worldwide through innovative solutions and superior quality products."
        },
        {
            icon: <BarChart4 size={36} />, // REMOVED: className="text-novitrail-blue"
            title: "Sustainable Growth",
            content: "Achieve sustained growth by consistently delivering products that exceed customer expectations and industry standards."
        },
        {
            icon: <Globe2 size={36} />, // REMOVED: className="text-novitrail-orange"
            title: "Market Expansion",
            content: "Develop strong presence in both regulated and emerging markets while maintaining highest quality standards."
        }
    ]
};

export const valuesData = {
    heading: "Our Values",
    subHeading: "Principles that guide our journey in healthcare",
    cards: [
        {
            icon: <Heart size={36} />, // REMOVED: className="text-novitrail-orange"
            title: "Integrity",
            content: "Upholding the highest standards of ethics and transparency in all our business operations and partnerships."
        },
        {
            icon: <Award size={36} />, // REMOVED: className="text-novitrail-blue"
            title: "Excellence",
            content: "Striving for exceptional quality in our products, services, and customer relationships."
        },
        {
            icon: <Users size={36} />, // REMOVED: className="text-novitrail-orange"
            title: "Innovation",
            content: "Continuously improving and adapting to meet evolving healthcare needs and market demands."
        }
    ]
};

export const whoWeAreData = [
    "Novitrail Pharmaceuticals stands at the forefront of global pharmaceutical distribution and manufacturing, serving healthcare needs across more than 20 countries. Since our establishment in 2017, we have rapidly grown into a dynamic force in the pharmaceutical industry, combining the expertise of seasoned professionals with innovative approaches to healthcare solutions.",

    "As an independent, professionally managed company, we specialize in a comprehensive range of pharmaceutical products, from specialized medicines to surgical disposables. Our portfolio includes branded pharmaceuticals, oncology drugs, and essential medical devices, all meeting rigorous quality standards. With a robust network of over 5,000 suppliers and GDP-compliant facilities, we ensure reliable access to more than 10,000 product lines.",

    "What sets us apart is our commitment to excellence in every aspect of our operations. From our state-of-the-art warehousing facilities to our professional handling of temperature-sensitive medications, we maintain the highest standards of pharmaceutical distribution. Our presence spans from central India to international markets, including the European Union, MENA region, and Asian countries, making us a truly global healthcare partner."
];

export const navCardsData = {
    heading: "Portfolio Categories",
    subHeading: "Explore our range of specialized services designed to cater to your business needs.",
    cards: [
        {
            icon: <Image src={"/logo-short.png"} alt={"Novitrail Logo"} width={36} height={36}/>,
            title: "Novitrail Product Portfolio",
            href: "/novitrail-products",
            content: "Discover our comprehensive range of pharmaceutical products, including specialty medicines, generic drugs, and surgical disposables."
        },
        {
            icon: <Pill size={36} />, // REMOVED: className="text-novitrail-blue"
            title: "Pharmaceutical Product Portfolio",
            href: "/portfolio/pharmaceuticals",
            content: "Explore our high-quality pharmaceutical products, including branded medicines, oncology drugs, and essential medical devices."
        },
        {
            icon: <Syringe size={36} />, // REMOVED: className="text-novitrail-orange"
            title: "Surgical Product Portfolio",
            href: "/portfolio/surgicals",
            content: "Browse our range of surgical disposables, medical devices, and healthcare supplies for hospitals and clinics."
        }
    ]
}