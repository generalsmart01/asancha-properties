import React from 'react';

export interface TimelineStep {
    stage: string;
    title: string;
    description: string;
    icon: React.ReactNode;
}

interface ServiceTimelineProps {
    title: string;
    steps: TimelineStep[];
}

export const ServiceTimeline = ({ title, steps }: ServiceTimelineProps) => {
    return (
        <section className="py-32 bg-background relative">
            <div className="container mx-auto px-4">
                <div className="text-center mb-24">
                    <h2 className="text-3xl md:text-4xl font-black text-foreground capitalize mb-6">{title}</h2>
                    <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
                </div>

                <div className="relative max-w-6xl mx-auto">
                    {/* Desktop Center Line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-linear-to-b from-primary/5 via-primary/20 to-primary/5 -translate-x-1/2 hidden md:block" />

                    {/* Mobile Left Line */}
                    <div className="absolute left-6 top-0 bottom-0 w-1 bg-linear-to-b from-primary/5 via-primary/20 to-primary/5 md:hidden" />

                    <div className="space-y-24 md:space-y-32">
                        {steps.map((step, idx) => (
                            <div key={idx} className={`relative flex flex-col md:flex-row items-center ${idx % 2 === 0 ? 'md:flex-row-reverse text-right' : 'text-left'}`}>
                                {/* Content Container */}
                                <div className="w-full md:w-1/2 px-12 md:px-20 group">
                                    <div className={`${idx % 2 === 0 ? 'md:text-left' : 'md:text-right'} pl-4 md:pl-0`}>
                                        <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-black uppercase tracking-widest mb-6">
                                            {step.stage}
                                        </span>
                                        <h3 className="text-3xl font-black text-foreground mb-4 uppercase tracking-tight group-hover:text-primary transition-colors">
                                            {step.title}
                                        </h3>
                                        <p className="text-muted-foreground text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Icon Node */}
                                <div className="absolute left-6 md:left-1/2 top-0 md:top-1/2 translate-y-0 md:-translate-y-1/2 -translate-x-1/2 z-10">
                                    <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center text-white shadow-xl shadow-primary/20 border-4 border-background transform md:rotate-45 group-hover:scale-110 transition-transform duration-300">
                                        <div className="md:-rotate-45">
                                            {step.icon}
                                        </div>
                                    </div>
                                </div>

                                {/* Spacer for flow */}
                                <div className="w-full md:w-1/2 hidden md:block" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
