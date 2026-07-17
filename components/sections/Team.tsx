"use client";
import Image from "next/image";
import Container from "@/components/layout/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import { motion } from "framer-motion";
import { image } from "framer-motion/client";

const team = [
    {
        name: "Sagar Biswas",
        role: "Founder & CEO",
        image: "/team/sagar.png"
    },
    {
        name: "Sandeep Redkar",
        role: "MD & Business Associate",
        image: "/team/sandeep.png"
    },
    {
        name: "Unmesh Nikumbh",
        role: "Co-Founder & CTO",
        image: "/team/unmesh.png"
    },
];

export default function Team() {
    return (
        <section
            id="team"
            className="relative overflow-hidden bg-card border-t border-border/40 pt-12 pb-14 md:pt-16 md:pb-18">
            <Container className="relative z-10">

                <SectionHeader
                    eyebrow="THE PEOPLE BEHIND NIVARAN"
                    title="People who care about building meaningful technology."
                    description="Behind every successful product is a team that believes great software starts with understanding people, businesses and real-world challenges."
                />

                <div className="mt-10 grid gap-6 md:mt-12 md:grid-cols-3 md:gap-8">
                    {team.map((member, i) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: i * 0.15, ease: [0.2, 0.8, 0.2, 1] }}
                            className="group relative flex flex-col items-center rounded-[32px] border border-border/40 bg-card/70 p-8 text-center backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-accent/20 hover:shadow-2xl"
                        >
                            {/* Premium Image Placeholder */}
                            <div className="relative mx-auto aspect-[4/5] w-full max-w-[250px] overflow-hidden rounded-[28px] border border-border/50 bg-card shadow-lg transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-2xl">

                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    sizes="250px"
                                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                />

                                {/* Premium Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-white/5" />

                            </div>

                            <h3 className="mt-6 text-2xl font-bold tracking-tight text-primary transition-colors duration-300 group-hover:text-accent">
                                {member.name}
                            </h3>

                            <p className="mt-2 text-sm uppercase tracking-[0.18em] text-muted-foreground">
                                {member.role}
                            </p>
                            <div className="pointer-events-none absolute inset-0 rounded-[32px] ring-1 ring-transparent transition-all duration-500 group-hover:ring-accent/20" />
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
                    className="mx-auto mt-10 max-w-4xl rounded-[32px] border border-border/40 bg-background/50 p-8 text-center md:mt-20 md:p-12"
                >
                    <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
                        <strong className="font-semibold text-primary">Together,</strong> we combine
                        business strategy, product thinking and engineering to help
                        startups, enterprises and government organizations build digital
                        solutions that create lasting business value. Every engagement is
                        driven by collaboration, transparency and a shared commitment to
                        solving meaningful problems.
                    </p>
                </motion.div>

            </Container>
        </section >
    );
}