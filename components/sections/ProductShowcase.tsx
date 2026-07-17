"use client";
import Image from "next/image";
import Container from "@/components/layout/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { image } from "framer-motion/client";

const projects = [
    {
        title: "Phuket9",
        category: "Business Platform",
        description:
            "A modern business ecosystem focused on digital transformation and scalable operations.",
        href: "https://phuket9.vercel.app/",
        image: "/projects/phuket9.png"
    },
    {
        title: "Sakhi Wealth AI",
        category: "AI Financial Platform",
        description:
            "An AI-powered financial advisory platform delivering intelligent investment discovery.",
        href: "/demos/sakhi wealth/index.html",
        image: "/projects/sakhiwealth.png"
    },
    {
        title: "Swar Shakti",
        category: "Government Marketplace",
        description:
            "A digital marketplace empowering women entrepreneurs through government initiatives.",
        href: "/demos/swar shakti/index.html",
        image: "/projects/swarshakti.png"
    },
    {
        title: "Suraksha Setu",
        category: "Public Safety Platform",
        description:
            "A citizen-first emergency response platform designed around speed, trust and accessibility.",
        href: "/demos/suraksha setu/index.html",
        image: "/projects/surakshasetu.png"
    },
];

export default function ProductShowcase() {
    return (
        <section
            id="work"
            className="relative overflow-hidden bg-card border-t border-border/40 pt-12 pb-14 md:pt-16 md:pb-18"
        >
            <Container className="relative z-10">

                <SectionHeader
                    eyebrow="FEATURED WORK"
                    title="Ideas transformed into digital products."
                    description="Every engagement begins with understanding the problem. These concepts demonstrate how strategy, design and engineering come together to create meaningful digital experiences."
                />

                <div className="mt-10 grid gap-8 md:mt-12 md:gap-12 lg:grid-cols-2">

                    {projects.map((project, i) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.2, 0.8, 0.2, 1] }}
                            className="group relative flex flex-col"
                        >

                            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[24px] border border-border/60 bg-muted/30 transition-all duration-500 ease-out group-hover:border-border/80 group-hover:shadow-soft md:rounded-[32px]">

                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    priority={i === 0}
                                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                />

                            </div>

                            <div className="mt-8 flex flex-1 flex-col px-2">

                                <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                                    {project.category}
                                </p>

                                <h3 className="mt-4 text-2xl font-bold tracking-tight text-primary md:text-3xl">
                                    {project.title}
                                </h3>

                                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                                    {project.description}
                                </p>

                                <div className="mt-8 flex-1">
                                    <Link
                                        href={project.href}
                                        target="_blank"
                                        className="group/link inline-flex items-center gap-1.5 text-sm font-semibold text-primary outline-none transition-colors hover:text-accent focus-visible:text-accent"
                                    >
                                        View Demo
                                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 ease-out group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                                    </Link>
                                </div>

                            </div>

                        </motion.div>
                    ))}

                </div>

            </Container>
        </section>
    );
}