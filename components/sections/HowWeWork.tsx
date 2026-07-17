"use client";

import Container from "@/components/layout/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import ProcessStep from "@/components/ui/ProcessStep";
import { motion } from "framer-motion";

const steps = [
    {
        number: "01",
        title: "Discovery",
        description:
            "Understanding the business, users, challenges and objectives before discussing technology.",
    },
    {
        number: "02",
        title: "Business Understanding",
        description:
            "Identifying workflows, pain points and opportunities that create measurable business value.",
    },
    {
        number: "03",
        title: "Solution Architecture",
        description:
            "Designing scalable systems, selecting the right technologies and planning implementation.",
    },
    {
        number: "04",
        title: "Engineering",
        description:
            "Building secure, maintainable and production-ready applications with modern technologies.",
    },
    {
        number: "05",
        title: "Deployment & Growth",
        description:
            "Launching, monitoring and continuously improving products as the business evolves.",
    },
];

export default function HowWeWork() {
    return (
        <section className="relative overflow-hidden bg-background border-t border-border/40 pt-12 pb-14 md:pt-16 md:pb-18">
            {/* Subtle Texture */}
            <div className="pointer-events-none absolute inset-0 bg-dots" />

            <Container className="relative z-10">

                <SectionHeader
                    eyebrow="HOW WE WORK"
                    title="A proven process behind every successful product."
                    description="Every engagement follows a structured framework that reduces risk, improves collaboration and ensures the final product solves the right problem."
                />

                <div className="mt-10 grid gap-6 md:mt-12 md:grid-cols-2 md:gap-8 xl:grid-cols-5">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1, ease: [0.2, 0.8, 0.2, 1] }}
                        >
                            <ProcessStep
                                number={step.number}
                                title={step.title}
                                description={step.description}
                            />
                        </motion.div>
                    ))}
                </div>

            </Container>
        </section>
    );
}