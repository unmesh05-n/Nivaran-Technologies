"use client";
import Logo from "@/components/common/Logo";
import Container from "@/components/layout/Container";
import { navigation } from "@/data/navigation";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";
import { useModalStore } from "@/store/modalStore";

export default function Navbar() {
    const { openModal } = useModalStore();

    const handleNavigation = (section: string) => {
        if (section === "contact") {
            openModal();
            return;
        }

        if (section === "home") {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
            return;
        }

        document.getElementById(section)?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/70 shadow-[0_1px_12px_rgba(15,23,42,0.02)] backdrop-blur-2xl transition-all duration-300">
            <Container>
                <div className="flex h-20 items-center justify-between md:h-24">

                    <Logo />

                    {/* Desktop Navigation */}
                    <nav className="hidden items-center gap-10 lg:flex">
                        {navigation.map((item) => (
                            <button
                                key={item.label}
                                onClick={() => handleNavigation(item.href)}
                                className="group relative py-2 text-sm font-medium text-muted-foreground outline-none transition-colors duration-300 ease-out hover:text-primary focus-visible:text-primary"
                            >
                                {item.label}
                                <span className="absolute -bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-accent opacity-0 transition-all duration-300 ease-out group-hover:w-[12px] group-hover:opacity-100" />
                            </button>
                        ))}
                    </nav>

                    {/* Desktop CTA */}
                    <div className="hidden lg:block">
                        <Button
                            onClick={openModal}
                            size="lg"
                            className="rounded-full px-7 font-medium shadow-soft hover:shadow-soft-hover"
                        >
                            Start a Project
                        </Button>
                    </div>

                    {/* Mobile */}
                    <Sheet>
                        <SheetTrigger className="group rounded-full p-2 outline-none transition-colors hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring lg:hidden">
                            <Menu className="h-5 w-5 text-primary transition-transform duration-300 ease-out group-hover:scale-105" />
                        </SheetTrigger>

                        <SheetContent side="right" className="border-l-border/50 bg-background/95 backdrop-blur-xl sm:max-w-sm">
                            <div className="mt-12 flex flex-col gap-6 px-4">
                                {navigation.map((item) => (
                                    <button
                                        key={item.label}
                                        onClick={() => handleNavigation(item.href)}
                                        className="text-left text-lg font-semibold tracking-tight text-muted-foreground transition-colors hover:text-primary"
                                    >
                                        {item.label}
                                    </button>
                                ))}

                                <div className="mt-8 pt-8 border-t border-border/50">
                                    <Button
                                        onClick={openModal}
                                        size="lg"
                                        className="w-full rounded-full shadow-soft"
                                    >
                                        Start a Project
                                    </Button>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>

                </div>
            </Container>
        </header>
    );
}