interface BrowserMockupProps {
    children: React.ReactNode;
}

export default function BrowserMockup({
    children,
}: BrowserMockupProps) {
    return (
        <div className="overflow-hidden rounded-3xl border bg-background shadow-2xl">

            {/* Browser Header */}

            <div className="flex items-center gap-2 border-b bg-muted px-6 py-4">

                <div className="h-3 w-3 rounded-full bg-red-400" />

                <div className="h-3 w-3 rounded-full bg-yellow-400" />

                <div className="h-3 w-3 rounded-full bg-green-400" />

                <div className="ml-6 flex-1 rounded-lg bg-background px-4 py-2 text-sm text-muted-foreground">
                    nivarantechnologies.com
                </div>

            </div>

            <div className="bg-background p-8">
                {children}
            </div>

        </div>
    );
}