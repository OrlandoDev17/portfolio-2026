interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  title?: string;
  subtitle?: string;
}

export function Section({
  children,
  className,
  id,
  title,
  subtitle,
}: SectionProps) {
  return (
    <section id={id} className={`${className}`}>
      <div className="max-w-7xl mx-auto w-full flex flex-col gap-4">
        {title || subtitle ? (
          <header className="flex flex-col gap-2">
            <h2 className="text-4xl font-bold">{title}</h2>
            <p className="text-lg">{subtitle}</p>
          </header>
        ) : null}
        {children}
      </div>
    </section>
  );
}
