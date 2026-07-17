"use client";

import Container from "@/components/layout/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import { motion } from "framer-motion";

export default function BeyondSoftware() {
    return (
        <section className="relative overflow-hidden bg-card border-t border-border/40 pt-8 pb-14">
            {/* Subtle Background Elements */}
            <div className="pointer-events-none absolute inset-0 z-0">
                <div className="absolute right-0 top-1/4 h-[600px] w-[600px] -translate-y-1/2 translate-x-1/3 rounded-full bg-accent/[0.02] blur-3xl" />
            </div>

            <Container className="relative z-10">
                <SectionHeader
                    eyebrow="BEYOND DELIVERY"
                    title="Technology that solves business problems."
                    description="Technology alone doesn't create impact. Every engagement begins with understanding your business, users and goals before designing solutions that scale with confidence."
                />

                <div className="mt-12 grid gap-8 md:mt-14 lg:grid-cols-12 lg:items-start lg:gap-10">

                    {/* Left - Sticky Information */}
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, margin: "-100px" }}
                        transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
                        className="lg:col-span-5 lg:sticky lg:top-28"
                    >
                        <div className="group relative overflow-hidden rounded-[32px] border border-border/50 bg-background/50 p-8 shadow-sm backdrop-blur-xl md:p-10">
                            <div className="pointer-events-none absolute inset-0 rounded-[32px] opacity-0 shadow-inner-light transition-opacity duration-500 group-hover:opacity-100" />

                            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-accent">
                                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                                OUR APPROACH
                            </span>

                            <h3 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-primary md:text-5xl lg:text-[44px]">
                                Business first.
                                <br />
                                technology
                            </h3>

                            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                                Every successful product starts with clarity—not code. We align business strategy, user needs and engineering decisions before selecting the right technology.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right - Steps */}
                    <div className="grid gap-6 lg:col-span-7">
                        {[
                            {
                                num: "01",
                                title: "Understand",
                                desc: "We begin by learning your business, users and objectives before discussing features, platforms or implementation."
                            },
                            {
                                num: "02",
                                title: "Design",
                                desc: "We design scalable architectures, intuitive experiences and practical solutions tailored to your long-term vision."
                            },
                            {
                                num: "03",
                                title: "Engineer",
                                desc: "We build reliable products, iterate continuously and support long-term growth long after the first release."
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={item.num}
                                initial={{ opacity: 0, x: 12 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: i * 0.15, ease: [0.2, 0.8, 0.2, 1] }}
                                className="group relative overflow-hidden rounded-[24px] border border-border/50 bg-background/40 p-8 shadow-sm backdrop-blur-sm transition-all duration-500 ease-out hover:-translate-y-1 hover:border-border/80 hover:bg-background/80 hover:shadow-soft-hover md:p-10"
                            >
                                <div className="pointer-events-none absolute inset-0 rounded-[24px] opacity-0 shadow-inner-light transition-opacity duration-500 group-hover:opacity-100" />
                                <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground/60 transition-colors group-hover:text-accent">
                                    {item.num}
                                </p>

                                <h3 className="mt-4 text-xl font-bold tracking-tight text-primary md:text-2xl">
                                    {item.title}
                                </h3>

                                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </Container>
        </section>
    );
}