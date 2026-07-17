"use client";

import { X } from "lucide-react";
import { useModalStore } from "@/store/modalStore";

const projectTypes = [
    "AI Consulting",
    "Web Application",
    "Mobile Application",
    "Enterprise Solution",
    "Government Platform",
    "Automation",
    "Other",
];

const budgets = [
    "Under ₹1 Lakh",
    "₹1L - ₹5L",
    "₹5L - ₹10L",
    "₹10L+",
    "Let's Discuss",
];

export default function DiscoveryModal() {
    const { isOpen, closeModal } = useModalStore();

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/70 p-4 backdrop-blur-sm"
            onClick={closeModal}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border bg-background p-8 shadow-2xl"
            >
                {/* Close */}

                <button
                    onClick={closeModal}
                    className="absolute right-6 top-6 z-10 rounded-full bg-background p-2 shadow-md transition hover:bg-muted"
                >
                    <X className="h-5 w-5" />
                </button>

                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                    START YOUR PROJECT
                </span>

                <h2 className="mt-4 text-4xl font-bold">
                    Schedule a Discovery Call
                </h2>

                <p className="mt-4 leading-7 text-muted-foreground">
                    Tell us about your idea. We'll understand your business,
                    discuss the right approach and help shape the best solution.
                </p>

                <form className="mt-10 space-y-5">

                    <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full rounded-xl border px-4 py-3 outline-none focus:ring-2"
                    />

                    <input
                        type="text"
                        placeholder="Company (Optional)"
                        className="w-full rounded-xl border px-4 py-3 outline-none focus:ring-2"
                    />

                    <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full rounded-xl border px-4 py-3 outline-none focus:ring-2"
                    />

                    <input
                        type="tel"
                        placeholder="Phone Number (Optional)"
                        className="w-full rounded-xl border px-4 py-3 outline-none focus:ring-2"
                    />

                    <select className="w-full rounded-xl border px-4 py-3 outline-none">
                        <option>What are you looking to build?</option>

                        {projectTypes.map((type) => (
                            <option key={type}>{type}</option>
                        ))}
                    </select>

                    <textarea
                        rows={5}
                        placeholder="Tell us about your project..."
                        className="w-full resize-none rounded-xl border px-4 py-3 outline-none focus:ring-2"
                    />

                    <button
                        type="submit"
                        className="w-full rounded-xl bg-foreground py-4 font-semibold text-background transition hover:opacity-90"
                    >
                        Schedule a Discovery Call
                    </button>

                </form>
            </div>
        </div>
    );
}