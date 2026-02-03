import { CheckCircle, Mail, ShieldCheck, BarChart3, Layers } from "lucide-react";
import HowItWorks from "@/components/homepage/HowItWorks";
import TestimonialsCarousel from "@/components/homepage/TestimonialsCarousel";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden after:absolute after:inset-0 after:z-[3] after:bg-black/70 after:content-['']">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster="/bg-img/hero1.jpg"
          src="./core-img/ASANCHA.mp4"
        />
        <div className="absolute top-[5vh] z-10 flex h-full w-full flex-col items-center justify-center px-16">
          <h1 className="pb-2 text-center text-5xl font-bold text-white leading-16">The UK’s Trusted Partner for Off-Market & Below Market Value Property Deals.</h1>
          <div className="my-4 h-[3px] w-[20%] bg-white"></div>
          <p className="pb-8 text-center text-xl font-normal text-white">Connecting investors and motivated sellers through exclusive off-market and below market value opportunities
          </p>
          <div className="flex gap-8">
            <Link href="property-listings" className="primary-btn">View Available Properties</Link>
            <Link href="free-consultation" className="ghost-btn">Book a Free Consultation</Link>
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
            <span className="capitalize text-outline text-foreground dark:text-white">Our Expertise</span>
          </h2>
          <span className="h-1 w-20 bg-primary rounded-full"></span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* <!-- Property Sourcing --> */}
          <div className="group bg-card rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col overflow-hidden border border-border/50">
            <div className="relative h-64 w-full overflow-hidden">
              <Image
                src="/bg-img/property-sourcing.jpg"
                alt="Representative image for property sourcing services"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
            </div>
            <div className="p-8 flex flex-col flex-1">
              <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">Exclusive Property Sourcing</h3>
              <p className="text-muted-foreground mb-6 flex-1 leading-relaxed">
                Get access to off-market properties and high-yield investment opportunities tailored to your goals. Whether buying your first home, for investment or looking to sell we handle everything.
              </p>
              <Link
                href="/property-sourcing"
                className="consultation-btn inline-block text-center w-full sm:w-auto self-start"
                aria-label="Learn more about Exclusive Property Sourcing services"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* <!-- Property Management --> */}
          <div className="group bg-card rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col overflow-hidden border border-border/50">
            <div className="relative h-64 w-full overflow-hidden">
              <Image
                src="/bg-img/property-management.jpg"
                alt="Representative image for property management services"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
            </div>
            <div className="p-8 flex flex-col flex-1">
              <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">Expert Property Management</h3>
              <p className="text-muted-foreground mb-6 flex-1 leading-relaxed">
                A one-stop shop for rental investors, handling the purchase, refurbishment, marketing, renting, maintenance, and when needed, the sale of a property.
              </p>
              <Link
                href="/property-management"
                className="consultation-btn inline-block text-center w-full sm:w-auto self-start"
                aria-label="Learn more about Expert Property Management services"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* <!-- Investment Opportunities --> */}
          <div className="group bg-card rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col overflow-hidden border border-border/50">
            <div className="relative h-64 w-full overflow-hidden">
              <Image
                src="/bg-img/investment-property.jpg"
                alt="Representative image for investment opportunities"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
            </div>
            <div className="p-8 flex flex-col flex-1">
              <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">Investment Opportunities</h3>
              <p className="text-muted-foreground mb-6 flex-1 leading-relaxed">
                Secure profitable real estate investments with strategic market insights and expert guidance focused on maximizing returns.
              </p>
              <Link
                href="/property-investment"
                className="consultation-btn inline-block text-center w-full sm:w-auto self-start"
                aria-label="Learn more about Investment Opportunities"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* <!-- Property Refurbishment --> */}
          <div className="group bg-card rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col overflow-hidden border border-border/50">
            <div className="relative h-64 w-full overflow-hidden">
              <Image
                src="/bg-img/refurbishment-image.jpg"
                alt="Representative image for property refurbishment"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
            </div>
            <div className="p-8 flex flex-col flex-1">
              <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">Property Refurbishment</h3>
              <p className="text-muted-foreground mb-6 flex-1 leading-relaxed">
                Increase property value with expert renovations, structural improvements, and premium finishing touches that add real value.
              </p>
              <Link
                href="/property-refurbishment"
                className="consultation-btn inline-block text-center w-full sm:w-auto self-start"
                aria-label="Learn more about Property Refurbishment services"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* <!-- Interior Design --> */}
          <div className="group bg-card rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col overflow-hidden border border-border/50">
            <div className="relative h-64 w-full overflow-hidden">
              <Image
                src="/bg-img/interior-decoration.jpg"
                alt="Representative image for interior design services"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
            </div>
            <div className="p-8 flex flex-col flex-1">
              <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">Interior Design</h3>
              <p className="text-muted-foreground mb-6 flex-1 leading-relaxed">
                Transform spaces with bespoke design solutions, modern aesthetics, and functional layouts that attract high-quality tenants.
              </p>
              <Link
                href="/interior-design"
                className="consultation-btn inline-block text-center w-full sm:w-auto self-start"
                aria-label="Learn more about Interior Design services"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Below Market Value Market */}
      <section className="container mx-auto px-4 py-24">
        <div className="flex flex-col items-center justify-center pb-8">
          <h2 className="text-4xl font-bold text-center text-foreground">Below Market Value Properties</h2>
          <span className="my-4 h-[3px] w-[20%] bg-[#333333] dark:bg-gray-400"></span>
        </div>

        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div className="px-2">
            <div className="pb-12">
              <h3 className="mb-4 text-2xl font-semibold">Exclusive Access to Below Market Value Opportunities</h3>
              <p className="mb-4 text-muted-foreground">Discover exceptional investment opportunities with our carefully curated selection
                of below market value properties. We specialize in identifying properties that offer significant
                potential for capital growth and rental yield.</p>

              <div className="mb-4">
                <h4 className="mb-3 text-xl font-medium">Why Invest in Below Market Value Properties?</h4>
                <ul role="list" className="list-none space-y-2">
                  <li role="listitem" className="flex items-center"><CheckCircle className="mr-2 text-green-500" size={20} />
                    Immediate equity gain on purchase</li>
                  <li role="listitem" className="flex items-center"><CheckCircle className="mr-2 text-green-500" size={20} /> Higher
                    potential rental yields</li>
                  <li role="listitem" className="flex items-center"><CheckCircle className="mr-2 text-green-500" size={20} />
                    Reduced investment risk</li>
                  <li role="listitem" className="flex items-center"><CheckCircle className="mr-2 text-green-500" size={20} /> Faster
                    capital appreciation</li>
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="mb-3 text-xl font-medium">Our Below Market Value Property Process</h4>
                <ol role="list" className="list-none space-y-2">
                  <li role="listitem" className="flex items-center"><CheckCircle className="mr-2 text-green-500" size={20} />
                    Extensive market research and analysis</li>
                  <li role="listitem" className="flex items-center"><CheckCircle className="mr-2 text-green-500" size={20} /> Direct
                    access to off-market opportunities</li>
                  <li role="listitem" className="flex items-center"><CheckCircle className="mr-2 text-green-500" size={20} />
                    Thorough due diligence and valuation</li>
                  <li role="listitem" className="flex items-center"><CheckCircle className="mr-2 text-green-500" size={20} /> Expert
                    negotiation for the best deals</li>
                </ol>
              </div>

              <div className="mt-6 flex flex-wrap gap-4">
                <Link href="property-listings" className="primary-btn">View Available Properties</Link>
                <Link href="free-consultation" className="bmv-ghost-btn">Get Investment
                  Advice</Link>
              </div>
            </div>
          </div>


          <div className="h-full w-full">
            <div className="relative h-[50vh] w-full lg:h-[95vh]">
              <Image src="/bg-img/Below-Market-Value-Properties-in-UK.webp"
                alt="Below Market Value Property Investment Opportunities" className="rounded shadow-lg object-cover"
                fill priority />
            </div>
          </div>
        </div>
      </section>

      {/* About Asancha Properties */}
      <section className="py-20 bg-background overflow-hidden">
        <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center gap-12">
          {/* Content */}
          <div className="flex-1 lg:pr-8 animate-in slide-in-from-left-5 duration-700">
            <h3 className="text-primary font-medium mb-2 tracking-wide text-sm uppercase">ASANCHA PROPERTIES</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Leading UK Property Investment Experts</h2>
            <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
              At ASANCHA PROPERTIES, we specialise in property sourcing, investment, management, and refurbishment to maximise value for investors, homeowners, and landlords. With a commitment to integrity, expertise, and excellence, we simplify real estate investments, helping clients achieve financial success while creating beautiful, functional living spaces.
            </p>
            <a href="mailto:office@asancha.co.uk" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group">
              <div className="bg-primary/10 p-3 rounded-full group-hover:bg-primary group-hover:text-white transition-colors">
                <Mail size={20} />
              </div>
              <span className="font-medium">office@asancha.co.uk</span>
            </a>
          </div>
          {/* Image */}
          <div className="flex-1 w-full relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl animate-in slide-in-from-right-5 duration-700">
            <Image
              src="/bg-img/about-us.jpg"
              alt="Asancha Properties"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative py-24 bg-fixed bg-cover bg-center overflow-hidden" style={{ backgroundImage: "url('/bg-img/cta.jpg')" }}>
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black/70 z-0"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 uppercase tracking-tight">
              Why Choose Asancha Properties?
            </h2>
            <div className="h-1.5 w-24 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {/* Tailored Solutions */}
            <div className="group animate-in fade-in slide-in-from-bottom-5 duration-700 delay-100">
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:border-primary/50 transition-all duration-300">
                <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-primary group-hover:scale-110 transition-transform">
                  <ShieldCheck size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Tailored Solutions</h3>
                <p className="text-gray-300 leading-relaxed">
                  Personalized real estate services designed specifically for your unique property goals and needs.
                </p>
              </div>
            </div>

            {/* Market Expertise */}
            <div className="group animate-in fade-in slide-in-from-bottom-5 duration-700 delay-300">
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:border-primary/50 transition-all duration-300">
                <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-primary group-hover:scale-110 transition-transform">
                  <BarChart3 size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Market Expertise</h3>
                <p className="text-gray-300 leading-relaxed">
                  Deep industry knowledge and exclusive access to high-yield property deals across the UK.
                </p>
              </div>
            </div>

            {/* End-to-End Support */}
            <div className="group animate-in fade-in slide-in-from-bottom-5 duration-700 delay-500">
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:border-primary/50 transition-all duration-300">
                <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-primary group-hover:scale-110 transition-transform">
                  <Layers size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">End-to-End Support</h3>
                <p className="text-gray-300 leading-relaxed">
                  From sourcing and negotiation to management and refurbishment, we handle every step for you.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/free-consultation"
              className="inline-flex items-center justify-center bg-primary hover:bg-primary-hover text-white font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-xl hover:shadow-primary/20 hover:-translate-y-1"
            >
              Request a Valuation
            </Link>
          </div>
        </div>
      </section>


      <HowItWorks
        title="How Do We Work?"
        steps={[
          {
            id: 1,
            title: "Consultation & Strategy",
            description: "We begin with a personalized consultation to understand your property goals. Whether you're looking to invest, buy, sell, or renovate, our experts tailor solutions to fit your needs.",
            badge: "Step 1",
            side: "left",
          },
          {
            id: 2,
            title: "Market Research & Property Selection",
            description: "We conduct in-depth market analysis to identify high-value opportunities. Our team carefully selects the best properties based on your investment strategy or personal preferences.",
            badge: "Step 2",
            side: "right",
          },
          {
            id: 3,
            title: "Acquisition & Negotiation",
            description: "Once we find the right property, we handle the negotiation process to secure the best deal, ensuring a seamless and profitable transaction..",
            badge: "Step 3",
            side: "left",
          },
          {
            id: 4,
            title: "Management & Enhancement",
            description: "From tenant management to property refurbishment, we provide end-to-end solutions that maximize property value and rental income.",
            badge: "Step 4",
            side: "right",
          },
          {
            id: 5,
            title: "Growth & Long-Term Success",
            description: "We stay connected with our clients, offering continuous support, insights, and opportunities to expand their real estate portfolio.",
            badge: "Step 5",
            side: "left",
          },
        ]}
      />

      {/* <!-- ##### Testimonials Area Start ##### --> */}
      <TestimonialsCarousel />

    </>
  );
}
