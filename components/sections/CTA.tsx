"use client";

import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { useModalStore } from "@/store/modalStore";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function CTA() {
    const { openModal } = useModalStore();

    return (
        <section
            id="contact"
            className="relative flex items-center justify-center overflow-hidden bg-background border-t border-border/40 pt-14 pb-16 md:pt-18 md:pb-20"
        >
            {/* Premium CTA Background */}
            <div className="pointer-events-none absolute inset-0 z-0">
                <div className="absolute inset-0 bg-background" />
                <div className="absolute inset-0 bg-mesh-soft opacity-70" />
                <div className="absolute inset-0 bg-dots" />
                <div className="absolute left-1/2 top-1/2 h-[600px] w-full max-w-2xl -translate-x-1/2 -translate-y-1/2 bg-radial-highlight opacity-80" />
            </div>

            <Container className="relative z-10">
                <div className="mx-auto max-w-4xl text-center">

                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
                    >
                        <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/60 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-accent shadow-sm backdrop-blur-md">
                            LET'S BUILD TOGETHER
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6, delay: 0.1, ease: [0.2, 0.8, 0.2, 1] }}
                        className="mt-6 text-5xl font-extrabold leading-[1.1] tracking-tight text-primary md:text-6xl lg:text-[72px]"
                    >
                        Every great product starts with
                        <br className="hidden md:block" />
                        {" "}a meaningful conversation.
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
                        className="mx-auto mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground"
                    >
                        Whether you're building an AI product,
                        modernizing enterprise software or exploring
                        a new digital initiative, we'd love to hear
                        your vision and help shape the right solution.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6, delay: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
                    >
                        <Button
                            onClick={openModal}
                            size="lg"
                            className="group mt-8 min-w-[200px] shadow-soft hover:shadow-soft-hover md:mt-12"
                        >
                            Schedule a Discovery Call
                            <ArrowUpRight className="ml-2 h-4 w-4 transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </Button>
                    </motion.div>

                </div>
            </Container>
        </section>
    );
}