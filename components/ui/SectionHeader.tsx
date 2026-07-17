"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
    eyebrow: string;
    title: string;
    description: string;
}

export default function SectionHeader({
    eyebrow,
    title,
    description,
}: SectionHeaderProps) {
    return (
        <div className="mx-auto max-w-4xl text-center">

            {eyebrow && (
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
                >
                    <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-accent">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                        {eyebrow}
                    </p>
                </motion.div>
            )}

            {title && (
                <motion.h2 
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: 0.1, ease: [0.2, 0.8, 0.2, 1] }}
                    className="mt-6 text-4xl font-bold tracking-tight text-primary md:text-5xl lg:text-6xl text-balance"
                >
                    {title}
                </motion.h2>
            )}

            {description && (
                <motion.p 
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
                    className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty"
                >
                    {description}
                </motion.p>
            )}

        </div>
    );
}