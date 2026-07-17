import Container from "@/components/layout/Container";
import SectionHeader from "@/components/ui/SectionHeader";

const technologies = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Express",
    "Python",
    "Django",
    "MongoDB",
    "PostgreSQL",
    "Docker",
    "AWS",
    "OpenAI",
];

export default function Technology() {
    return (
        <section className="py-28">
            <Container>

                <SectionHeader
                    eyebrow="TECHNOLOGY"
                    title="Modern technologies. Future-ready solutions."
                    description="Technology should enable growth, not limit it. We choose the right tools based on business requirements—not trends."
                />

                <div className="mt-20 flex flex-wrap justify-center gap-4">
                    {technologies.map((tech) => (
                        <div
                            key={tech}
                            className="rounded-full border px-6 py-3 text-sm font-semibold transition hover:bg-muted"
                        >
                            {tech}
                        </div>
                    ))}
                </div>

            </Container>
        </section>
    );
}