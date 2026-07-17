"use client";

import Container from "@/components/layout/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import { motion } from "framer-motion";

const services = [
    {
        title: "AI Consulting",
        description:
            "Helping organizations identify practical opportunities to integrate AI into products, workflows and decision making.",
    },
    {
        title: "Product Engineering",
        description:
            "Designing and building scalable web platforms, SaaS products and enterprise applications from the ground up.",
    },
    {
        title: "Mobile Applications",
        description:
            "Developing intuitive cross-platform mobile applications focused on performance and user experience.",
    },
    {
        title: "Enterprise Solutions",
        description:
            "Building secure internal systems, dashboards and automation platforms that streamline business operations.",
    },
    {
        title: "Government Platforms",
        description:
            "Creating scalable citizen-centric digital platforms with accessibility, transparency and long-term maintainability.",
    },
    {
        title: "Cloud & Automation",
        description:
            "Deploying cloud-native solutions and intelligent automation that improve operational efficiency and scalability.",
    },
];

export default function Services() {
    return (
        <section
            id="services"
            className="relative bg-background border-t border-border/40 pt-12 pb-14 md:pt-16 md:pb-18"
        >
            {/* Subtle Surface Highlight */}
            <div className="pointer-events-none absolute inset-0 bg-radial-highlight opacity-30 mix-blend-multiply" />

            <Container className="relative z-10">
                <SectionHeader
                    eyebrow="OUR SERVICES"
                    title="Technology solutions designed around business outcomes."
                    description="Every service begins with understanding your business first. We combine strategy, design and engineering to build products that create measurable impact."
                />

                <div className="mt-10 grid gap-6 md:mt-12 md:grid-cols-2 xl:grid-cols-3">
                    {services.map((service, i) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.2, 0.8, 0.2, 1] }}
                            className="group relative overflow-hidden rounded-[24px] border border-border/50 bg-card/70 p-8 shadow-sm backdrop-blur-sm transition-all duration-500 ease-out hover:-translate-y-1 hover:border-border/80 hover:bg-card hover:shadow-soft-hover md:p-10"
                        >
                            <div className="pointer-events-none absolute inset-0 rounded-[24px] opacity-0 shadow-inner-light transition-opacity duration-500 group-hover:opacity-100" />

                            <h3 className="text-xl font-bold tracking-tight text-primary md:text-2xl">
                                {service.title}
                            </h3>

                            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}