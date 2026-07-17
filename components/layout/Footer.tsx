"use client";
import Container from "./Container";
import { Button } from "@/components/ui/button";
import { useModalStore } from "@/store/modalStore";
import { ArrowUpRight } from "lucide-react";

const companyLinks = [
    { label: "Home", href: "hero" },
    { label: "Services", href: "services" },
    { label: "Our Work", href: "work" },
    { label: "Contact", href: "contact" },
];

const serviceLinks = [
    "AI Consulting",
    "Software Development",
    "Enterprise Solutions",
    "Government Platforms",
    "Cloud & Automation",
];

export default function Footer() {
    const { openModal } = useModalStore();

    const handleNavigation = (section: string) => {
        if (section === "contact") {
            openModal();
            return;
        }

        document
            .getElementById(section)
            ?.scrollIntoView({
                behavior: "smooth",
            });
    };

    return (
        <footer className="relative overflow-hidden border-t border-border/50 bg-background pt-24 pb-8 md:pt-32 md:pb-12">
            {/* Subtle background radial for premium depth */}
            <div className="pointer-events-none absolute left-1/2 top-0 aspect-square w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.03] blur-3xl" />

            <Container className="relative z-10">
                <div className="grid gap-16 lg:grid-cols-12 lg:gap-8">

                    {/* Company */}
                    <div className="lg:col-span-5 pr-8">
                        <h2 className="text-2xl font-bold tracking-tight text-primary md:text-3xl">
                            Nivaran Technologies
                        </h2>
                        <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground text-pretty">
                            We partner with startups, enterprises and government
                            organizations to design, engineer and scale AI-powered
                            digital products that solve real business problems.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div className="lg:col-span-2">
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
                            Company
                        </h3>
                        <div className="mt-8 flex flex-col gap-4">
                            {companyLinks.map((item) => (
                                <button
                                    key={item.label}
                                    onClick={() => handleNavigation(item.href)}
                                    className="group flex w-fit items-center text-sm font-medium text-muted-foreground transition-all duration-300 ease-out hover:text-primary hover:translate-x-1 outline-none focus-visible:text-primary focus-visible:underline"
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Services */}
                    <div className="lg:col-span-2">
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
                            Services
                        </h3>
                        <div className="mt-8 flex flex-col gap-4">
                            {serviceLinks.map((service) => (
                                <span
                                    key={service}
                                    className="text-sm font-medium text-muted-foreground/80"
                                >
                                    {service}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Contact */}
                    <div className="lg:col-span-3">
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
                            Contact
                        </h3>
                        <div className="mt-8 flex flex-col gap-3">
                            <a
                                href="mailto:nivarantechnologies@gmail.com"
                                className="group flex w-fit items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary outline-none focus-visible:text-primary"
                            >
                                nivarantechnologies@gmail.com
                                <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                            </a>
                            <p className="text-sm font-medium text-muted-foreground">
                                Mumbai, Maharashtra, India
                            </p>

                            <div className="mt-4">
                                <Button
                                    onClick={openModal}
                                    variant="outline"
                                    className="rounded-full shadow-sm"
                                >
                                    Let's Talk
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-24 flex flex-col gap-6 border-t border-border/60 pt-8 md:flex-row md:items-center md:justify-between">
                    <p className="text-sm font-medium text-muted-foreground/80">
                        © 2026 Nivaran Technologies. All rights reserved.
                    </p>
                    <p className="text-sm font-medium text-muted-foreground/80 flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent/50" />
                        Built with purpose.
                    </p>
                </div>
            </Container>
        </footer>
    );
}