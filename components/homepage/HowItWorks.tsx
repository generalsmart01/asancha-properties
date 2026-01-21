"use client";
import { FileText } from "lucide-react";
import Link from "next/link";

interface Step {
  id: number;
  title?: string;
  description?: string | string[]; // <-- allows both string and array of strings
  badge: string;
  side: "left" | "right";
}

interface HowItWorksProps {
  title?: string;
  steps: Step[];
  resultLink?: {
    text: string;
    href: string;
  };
  resultText?: string;
  primaryColor?: string;
  secondaryColor?: string;
  className?: string;
  path?: string;
}

export default function HowItWorks({
  title = "How Do We Work?",
  steps,
  resultText,
  resultLink,
  className = "",
}: HowItWorksProps) {
  return (
    <main className="pb-20 bg-muted/50">
      <section className={`relative w-full py-12 ${className}`}>
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2
            id="how-asancha-works-heading"
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
          >
            <span className="capitalize text-outline text-foreground dark:text-white">{title}</span>
          </h2>
          <span className="h-1 w-20 bg-primary rounded-full block mx-auto"></span>
        </div>
        {/* Vertical Line */}
        <div className="absolute left-1/2 top-6 bottom-0 w-[4px] bg-border -translate-x-1/2 z-0 hidden md:block mt-28"></div>

        <div className="space-y-12 md:space-y-16">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="relative z-10 flex flex-col md:flex-row md:items-start md:justify-between"
            >
              {/* Left Column (Desktop only) */}
              <div className="hidden md:flex md:w-1/2 px-4 md:pr-12 justify-end">
                {step.side === "left" && (
                  <div
                    className={`bg-card rounded-[8px] shadow-md p-6 border-r-10 border-primary max-w-md`}
                  >
                    <h3 className="text-lg font-bold text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      {step.description}
                    </p>
                  </div>
                )}
              </div>

              {/* Mobile Layout */}
              <div className="flex md:hidden items-start gap-4 px-4">
                {/* Timeline Dot for mobile */}
                <div className="flex flex-col items-center space-y-2">
                  <div
                    className={`bg-card border-2 rounded-[14px] shadow flex items-center justify-center w-12 h-12 ${index % 2 !== 0 ? `border-primary` : `border-green-600`
                      }`}
                  >
                    <FileText
                      className={`p-2 ${index % 2 !== 0 ? `text-primary` : `text-green-600`
                        }`}
                      size={40}
                    />
                  </div>
                  <span
                    className={`text-primary-foreground text-xs px-2 py-0.5 rounded-[6px] ${index % 2 !== 0 ? `bg-primary` : `bg-green-600`
                      }`}
                  >
                    {step.badge}
                  </span>
                </div>

                {/* Content Box for mobile (always border-left) */}
                <div
                  className={`bg-card rounded-[8px] shadow-md p-4 border-l-[6px] max-w-sm w-full
          text-sm text-muted-foreground
                    ${index % 2 === 0 ? `border-primary` : `border-green-600`
                    }`}
                >
                  <h3 className="text-base font-semibold text-foreground mb-1">
                    {step.title}
                  </h3>
                  <p>{step.description}</p>
                </div>
              </div>

              {/* Timeline Dot for Desktop (centered) */}
              <div className="hidden md:flex flex-col items-center w-20 shrink-0 space-y-2">
                <div
                  className={`bg-card border-2 rounded-[14px] shadow flex items-center justify-center w-16 h-16 ${index % 2 === 0 ? `border-primary` : `border-green-600`
                    }`}
                >
                  <FileText
                    className={`p-3 ${index % 2 === 0 ? `text-primary` : `text-green-600`
                      }`}
                    size={60}
                  />
                </div>
                <span
                  className={`text-primary-foreground text-sm px-3 py-1 rounded-[8px] ${index % 2 === 0 ? `bg-primary` : `bg-green-600`
                    }`}
                >
                  {step.badge}
                </span>
              </div>

              {/* Right Column (Desktop only) */}
              <div className="hidden md:flex md:w-1/2 px-4 md:pl-12 justify-start mt-6 md:mt-0">
                {step.side === "right" && (
                  <div
                    className={`bg-card rounded-[8px] shadow-md p-6 border-l-10 border-green-600 max-w-md`}
                  >
                    <h3 className="text-lg font-bold text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      {step.description}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Result Element - Either Text or Link */}
      <div className="flex justify-center">
        {resultText && (
          <p className="text-lg text-muted-foreground text-left md:text-center px-4 py-2 rounded bg-muted">
            {resultText}
          </p>
        )}
        {resultLink && (
          <Link
            href={resultLink.href}
            className="inline-block text-center bg-muted text-primary font-semibold px-6 py-3 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring hover:bg-accent transition"
          >
            {resultLink.text}
          </Link>
        )}
      </div>
    </main>
  );
}
