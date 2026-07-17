"use client";
import Image from "next/image";
import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface HeroProps {
    onOpenModal?: () => void;
}

export default function Hero({
    onOpenModal,
}: HeroProps = {}) {
    const scrollToWork = () => {
        document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section
            id="home"
            className="relative overflow-hidden z-0"
        >

            {/* Background */}
            <div className="absolute inset-0 -z-20 overflow-hidden">
                <Image
                    src="/hero/hero-bg.png"
                    alt="Nivaran Technologies"
                    fill
                    priority
                    className="object-cover object-right"
                />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/90 to-background/45" />

            {/* Optional Blur */}
            <div className="absolute inset-0 -z-10 backdrop-blur-[2px]" />

            {/* Premium Background Ecosystem */}
            <div className="pointer-events-none absolute inset-0 z-0">

                <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/55 to-background/20" />

                <div className="absolute inset-0 bg-mesh-soft opacity-20" />

                <div className="absolute inset-0 bg-dots opacity-10" />

                <div className="absolute left-1/2 top-0 h-[800px] w-full max-w-4xl -translate-x-1/2 bg-radial-highlight opacity-20" />

                <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-background via-background/80 to-transparent" />

            </div>

            <Container className="relative z-10 w-full">
                <div className="mx-auto max-w-5xl">

                    {/* Eyebrow */}
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
                        className="flex justify-center"
                    >
                        <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary shadow-sm backdrop-blur-md">
                            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                            AI-FIRST PRODUCT ENGINEERING
                        </span>
                    </motion.div>

                    {/* Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1, ease: [0.2, 0.8, 0.2, 1] }}
                        className="mt-8 text-center text-5xl font-extrabold leading-[1.05] tracking-tight text-primary md:text-7xl lg:text-[80px]"
                    >
                        We turn messy
                        <br />
                        human problems
                        <br />
                        into <span className="text-accent">software</span>
                        <br />
                        that feels <span className="text-accent">simple.</span>
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
                        className="mx-auto mt-6 max-w-2xl text-balance text-center text-lg leading-relaxed text-muted-foreground md:text-xl"
                    >
                        Nivaran Technologies partners with startups,
                        enterprises and help government organizations to design,
                        engineer and scale AI-powered digital products through
                        business-first thinking, modern engineering and
                        long-term partnerships.
                    </motion.p>

                    {/* CTA Area */}
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
                        className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
                    >
                        <Button
                            variant="outline"
                            size="lg"
                            onClick={scrollToWork}
                            className="group min-w-[200px] bg-card/60 shadow-sm backdrop-blur-sm hover:bg-card"
                        >
                            Explore Our Work
                            <ArrowUpRight className="ml-2 h-4 w-4 transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </Button>
                    </motion.div>

                    {/* Highlights */}
                    <div className="mx-auto mt-12 max-w-4xl md:mt-14">
                        <div className="grid gap-6 md:grid-cols-2">

                            <motion.div
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
                                className="group relative overflow-hidden rounded-[24px] border border-border/50 bg-card/40 p-8 shadow-sm backdrop-blur-sm transition-all duration-500 ease-out hover:-translate-y-1 hover:border-border/80 hover:bg-card hover:shadow-soft-hover md:p-10"
                            >
                                <div className="pointer-events-none absolute inset-0 rounded-[24px] opacity-0 shadow-inner-light transition-opacity duration-500 group-hover:opacity-100" />
                                <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                                    AI Consulting
                                </p>
                                <h3 className="mt-4 text-xl font-bold tracking-tight text-primary md:text-2xl">
                                    Business First.
                                </h3>
                                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                                    Every engagement begins with understanding the business
                                    before choosing the technology.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
                                className="group relative overflow-hidden rounded-[24px] border border-border/50 bg-card/40 p-8 shadow-sm backdrop-blur-sm transition-all duration-500 ease-out hover:-translate-y-1 hover:border-border/80 hover:bg-card hover:shadow-soft-hover md:p-10"
                            >
                                <div className="pointer-events-none absolute inset-0 rounded-[24px] opacity-0 shadow-inner-light transition-opacity duration-500 group-hover:opacity-100" />
                                <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                                    Product Engineering
                                </p>
                                <h3 className="mt-4 text-xl font-bold tracking-tight text-primary md:text-2xl">
                                    Built to Scale.
                                </h3>
                                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                                    Modern architectures, intuitive experiences and
                                    production-ready systems designed for long-term growth.
                                </p>
                            </motion.div>

                        </div>
                    </div>

                </div>
            </Container>
        </section>
    );
}