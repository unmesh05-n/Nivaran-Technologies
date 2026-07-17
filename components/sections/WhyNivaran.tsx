"use client";

import Container from "@/components/layout/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import { motion } from "framer-motion";

const reasons = [
    {
        title: "Business-First Thinking",
        description:
            "We begin with understanding your business before proposing technology.",
    },
    {
        title: "Transparent Collaboration",
        description:
            "Clear communication, documentation and visibility throughout every stage of the project.",
    },
    {
        title: "Scalable Engineering",
        description:
            "Solutions built to evolve alongside your business instead of becoming technical debt.",
    },
    {
        title: "Long-Term Partnership",
        description:
            "Our relationship doesn't end at deployment. We continue improving products over time.",
    },
];

export default function WhyNivaran() {
    return (
        <section className="relative overflow-hidden bg-background border-t border-border/40 pt-12 pb-14 md:pt-16 md:pb-18">
            {/* Soft Ambient Depth */}
            <div className="pointer-events-none absolute inset-0 bg-radial-highlight opacity-40 mix-blend-multiply" />

            <Container className="relative z-10">

                <SectionHeader
                    eyebrow="WHY NIVARAN"
                    title="More than a software company."
                    description="We combine consulting, product thinking and engineering to build solutions that create measurable business value."
                />

                <div className="mt-10 grid gap-6 md:mt-12 md:grid-cols-2">
                    {reasons.map((reason, i) => (
                        <motion.div
                            key={reason.title}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.2, 0.8, 0.2, 1] }}
                            className="group relative overflow-hidden rounded-[24px] border border-border/50 bg-card p-8 shadow-sm backdrop-blur-sm transition-all duration-500 ease-out hover:-translate-y-1 hover:border-border/80 hover:bg-card hover:shadow-soft-hover md:p-10"
                        >
                            <div className="pointer-events-none absolute inset-0 rounded-[24px] opacity-0 shadow-inner-light transition-opacity duration-500 group-hover:opacity-100" />

                            <h3 className="text-xl font-bold tracking-tight text-primary md:text-2xl">
                                {reason.title}
                            </h3>

                            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                                {reason.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </Container>
        </section>
    );
}