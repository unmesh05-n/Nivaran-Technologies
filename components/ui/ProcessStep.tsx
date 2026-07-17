interface ProcessStepProps {
    number: string;
    title: string;
    description: string;
}

export default function ProcessStep({
    number,
    title,
    description,
}: ProcessStepProps) {
    return (
        <div className="rounded-3xl border bg-background p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

            <span className="text-sm font-semibold text-muted-foreground">
                {number}
            </span>

            <h3 className="mt-4 text-2xl font-bold">
                {title}
            </h3>

            <p className="mt-4 leading-7 text-muted-foreground">
                {description}
            </p>

        </div>
    );
}