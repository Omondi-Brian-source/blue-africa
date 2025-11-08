"use client";

import {
  Blocks,
  CodeXml,
  CreditCard,
  Handshake,
  Scale,
  Webhook,
  TrendingUp,
  Users,
  FileText,
  Lightbulb,
  Briefcase,
} from "lucide-react";
import Link from "next/link";
import { Footer } from "@/components/ui/footer";
import { Partners } from "@/components/partners";
import { TargetsSection } from "@/components/targets-section";
import { CTASection } from "@/components/cta-section";
import { NewsGrid } from "@/components/ui/news-grid";
import { MissionBanner } from "@/components/ui/mission-banner";
import { EconomicTargetBanner } from "@/components/ui/economic-target-banner";
import { getLatestNews } from "@/data/news";
import { economicTarget, missionTarget } from "@/data/metrics";
import { interviews } from "@/data/insights";
import { countryReports } from "@/data/reports";
import { teamLeaders } from "@/data/team";
import { companyValues } from "@/data/values";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

// Lazy load heavy components
const CarouselGallery = dynamic(() => import("@/components/ui/carousel-gallery").then(mod => ({ default: mod.CarouselGallery })), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
  ssr: false,
});

const ImpactSection = dynamic(() => import("@/components/impact-section").then(mod => ({ default: mod.ImpactSection })), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
});

const AccordionSection = dynamic(() => import("@/components/accordion-section").then(mod => ({ default: mod.AccordionSection })), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
});

const impactData = {
  title: "Our Blue Economy Impact",
  description:
    "Discover how Blue Capital is transforming coastal economies across Africa through sustainable ocean resource management, marine conservation, and community empowerment.",
  items: [
    {
      id: "sustainable-fishing",
      title: "Sustainable Fishing Initiatives",
      description:
        "Supporting local fishing communities with modern sustainable practices and market access.",
      href: "/impact",
      image: "https://images.unsplash.com/photo-1582623838120-455da222cdc7?q=80&w=1080",
    },
    {
      id: "marine-conservation",
      title: "Marine Conservation",
      description:
        "Protecting critical marine ecosystems through innovative conservation projects.",
      href: "/impact",
      image: "https://images.unsplash.com/photo-1498623116890-37e912163d5d?q=80&w=1080",
    },
    {
      id: "aquaculture",
      title: "Sustainable Aquaculture",
      description:
        "Investing in responsible aquaculture projects that create jobs and ensure food security.",
      href: "/impact",
      image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=1080",
    },
  ],
};

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const latestNews = getLatestNews(3);
  const featuredInterviews = interviews.slice(0, 3);
  const topReports = countryReports.slice(0, 3);

  return (
    <div className="flex min-h-screen w-full flex-col items-center">
      <main className="flex w-full flex-col items-center">
        {/* Video Background Hero - Flat Design */}
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
          {/* Video Background */}
          <div className="absolute inset-0 w-full h-full">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="object-cover w-full h-full"
            >
              <source src="/hero-video.mp4" type="video/mp4" />
            </video>
            {/* Blue Overlay */}
            <div className="absolute inset-0 bg-blue-900/70" />
          </div>

          {/* Hero Content - Flat Design */}
          <div className="relative z-10 container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-5xl mx-auto"
            >
              <h1 className="mb-6 text-5xl font-black text-white sm:text-6xl lg:text-7xl">
                Leading the way in
                <span className="block mt-2 bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">
                  Blue Economy Finance
                </span>
              </h1>
              <p className="mx-auto mb-10 max-w-3xl text-xl text-white/90 lg:text-2xl">
                Unlocking $100 billion annually in sustainable investments across Africa&apos;s blue economy
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/services/blue-metrics"
                  className="group relative overflow-hidden rounded-lg bg-yellow-400 px-8 py-4 text-lg font-bold text-black transition-all hover:bg-yellow-300 hover:shadow-2xl"
                >
                  Explore Our Services
                </Link>
                <Link
                  href="/about"
                  className="rounded-lg border-2 border-white bg-white/10 px-8 py-4 text-lg font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <div className="flex flex-col items-center gap-2 text-white/80">
              <span className="text-sm font-medium">Scroll to explore</span>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="h-8 w-1 rounded-full bg-white/60"
              />
            </div>
          </motion.div>
        </section>

        {/* Mission Banner */}
        <section className="w-full bg-gradient-to-b from-white to-gray-50 px-4 py-20 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="container mx-auto"
          >
            <MissionBanner
              value={missionTarget.value}
              description={missionTarget.description}
            />
          </motion.div>
        </section>

        {/* Services Preview Section */}
        <section className="w-full bg-white px-4 py-24 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mb-16 text-center"
            >
              <h2 className="mb-4 text-4xl font-bold text-gray-900 lg:text-5xl">
                What We Do
              </h2>
              <p className="mx-auto max-w-2xl text-xl text-gray-600">
                Comprehensive blue economy solutions powered by innovation and expertise
              </p>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerChildren}
              className="grid gap-8 md:grid-cols-3"
            >
              <motion.div variants={fadeInUp}>
                <Link href="/services/blue-metrics" className="group block">
                  <div className="relative overflow-hidden rounded-2xl border-2 border-transparent bg-gradient-to-br from-blue-50 to-cyan-50 p-8 transition-all duration-300 hover:border-blue-500 hover:shadow-2xl dark:from-blue-950/20 dark:to-cyan-950/20">
                    <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-500 text-white transition-transform group-hover:scale-110">
                      <TrendingUp className="h-8 w-8" />
                    </div>
                    <h3 className="mb-4 text-2xl font-bold text-gray-900">Blue Metrics</h3>
                    <p className="mb-6 text-gray-600">
                      Africa&apos;s No.1 AI-Powered Blue Economy Intelligence Engine providing actionable insights
                    </p>
                    <span className="inline-flex items-center font-semibold text-blue-600 group-hover:gap-2">
                      Learn More
                      <svg className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Link href="/services/blue-advisory" className="group block">
                  <div className="relative overflow-hidden rounded-2xl border-2 border-transparent bg-gradient-to-br from-green-50 to-emerald-50 p-8 transition-all duration-300 hover:border-green-500 hover:shadow-2xl dark:from-green-950/20 dark:to-emerald-950/20">
                    <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white transition-transform group-hover:scale-110">
                      <Users className="h-8 w-8" />
                    </div>
                    <h3 className="mb-4 text-2xl font-bold text-gray-900">Blue Advisory</h3>
                    <p className="mb-6 text-gray-600">
                      Strategic advisory services for transformative blue economy investments
                    </p>
                    <span className="inline-flex items-center font-semibold text-green-600 group-hover:gap-2">
                      Learn More
                      <svg className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Link href="/services/blue-finance" className="group block">
                  <div className="relative overflow-hidden rounded-2xl border-2 border-transparent bg-gradient-to-br from-purple-50 to-indigo-50 p-8 transition-all duration-300 hover:border-purple-500 hover:shadow-2xl dark:from-purple-950/20 dark:to-indigo-950/20">
                    <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-purple-500 text-white transition-transform group-hover:scale-110">
                      <CreditCard className="h-8 w-8" />
                    </div>
                    <h3 className="mb-4 text-2xl font-bold text-gray-900">Blue Finance</h3>
                    <p className="mb-6 text-gray-600">
                      Innovative financial structuring for sustainable ocean economy projects
                    </p>
                    <span className="inline-flex items-center font-semibold text-purple-600 group-hover:gap-2">
                      Learn More
                      <svg className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Economic Target Banner - Repositioned */}
        <section className="w-full bg-gray-50 px-4 py-20 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="container mx-auto"
          >
            <EconomicTargetBanner target={economicTarget} />
          </motion.div>
        </section>

        {/* Latest News Section */}
        <section className="w-full bg-white px-4 py-24 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mb-12 text-center"
            >
              <h2 className="mb-4 text-4xl font-bold text-gray-900">
                Latest News
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-600">
                Stay updated with our recent announcements and achievements
              </p>
            </motion.div>
            <NewsGrid articles={latestNews} columns={3} />
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mt-12 text-center"
            >
              <Link
                href="/news"
                className="inline-block rounded-lg bg-blue-600 px-8 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-500 hover:shadow-lg"
              >
                View All News
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="w-full bg-gray-50 px-4 py-24 sm:px-6 lg:px-8">
          <ImpactSection impactData={impactData} />
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mt-12 text-center"
          >
            <Link
              href="/impact"
              className="inline-block rounded-lg bg-green-600 px-8 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-green-500 hover:shadow-lg"
            >
              View Full Impact Report
            </Link>
          </motion.div>
        </section>

        {/* Insights Preview */}
        <section className="w-full bg-white px-4 py-24 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mb-16 text-center"
            >
              <h2 className="mb-4 text-4xl font-bold text-gray-900 lg:text-5xl">
                Industry Insights & Interviews
              </h2>
              <p className="mx-auto max-w-2xl text-xl text-gray-600">
                Exclusive conversations with leaders shaping Africa&apos;s blue economy
              </p>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerChildren}
              className="grid gap-6 md:grid-cols-3"
            >
              {featuredInterviews.map((interview) => (
                <motion.div key={interview.id} variants={fadeInUp}>
                  <div className="group rounded-2xl border-2 border-transparent bg-card p-6 transition-all hover:border-primary hover:shadow-xl">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                      <Lightbulb className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-foreground">{interview.person}</h3>
                    <p className="mb-1 text-sm font-semibold text-muted-foreground">{interview.title}</p>
                    <p className="text-sm text-muted-foreground">{interview.organization}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mt-12 text-center"
            >
              <Link
                href="/insights"
                className="inline-block rounded-lg bg-purple-600 px-8 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-purple-500 hover:shadow-lg"
              >
                View All Insights
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Research Preview */}
        <section className="w-full bg-gray-50 px-4 py-24 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mb-16 text-center"
            >
              <h2 className="mb-4 text-4xl font-bold text-gray-900 lg:text-5xl">
                Research & Reports
              </h2>
              <p className="mx-auto max-w-2xl text-xl text-gray-600">
                In-depth analysis and intelligence on Africa&apos;s blue economy markets
              </p>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerChildren}
              className="grid gap-6 md:grid-cols-3"
            >
              {topReports.map((report) => (
                <motion.div key={report.number} variants={fadeInUp}>
                  <div className="group rounded-2xl border-2 border-transparent bg-card p-6 transition-all hover:border-primary hover:shadow-xl">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400 text-xl font-black text-black">
                      {report.number}
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-foreground">{report.country}</h3>
                    <p className="text-sm text-muted-foreground">{report.title}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mt-12 text-center"
            >
              <Link
                href="/research"
                className="inline-block rounded-lg bg-orange-600 px-8 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-orange-500 hover:shadow-lg"
              >
                View All Reports
              </Link>
            </motion.div>
          </div>
        </section>

        {/* About Preview */}
        <section className="w-full bg-white px-4 py-24 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mb-16 text-center"
            >
              <h2 className="mb-4 text-4xl font-bold text-gray-900 lg:text-5xl">
                Our Values & Mission
              </h2>
              <p className="mx-auto max-w-2xl text-xl text-gray-600">
                Guided by principles that drive sustainable impact
              </p>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerChildren}
              className="grid gap-6 md:grid-cols-2"
            >
              {companyValues.slice(0, 4).map((value) => (
                <motion.div key={value.id} variants={fadeInUp}>
                  <div className="group rounded-2xl border-2 border-transparent bg-gradient-to-br from-blue-50 to-transparent p-8 transition-all hover:border-blue-500 hover:shadow-xl">
                    <h3 className="mb-4 text-2xl font-bold text-primary">{value.title}</h3>
                    <p className="leading-relaxed text-muted-foreground">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mt-12 text-center"
            >
              <Link
                href="/about"
                className="inline-block rounded-lg bg-blue-600 px-8 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-500 hover:shadow-lg"
              >
                Learn More About Us
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Careers Preview */}
        <section className="w-full bg-gray-50 px-4 py-24 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mb-16 text-center"
            >
              <h2 className="mb-4 text-4xl font-bold text-gray-900 lg:text-5xl">
                Join Our Team
              </h2>
              <p className="mx-auto max-w-2xl text-xl text-gray-600">
                Build the future of Africa&apos;s blue economy with us
              </p>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerChildren}
              className="grid gap-6 md:grid-cols-3"
            >
              {teamLeaders.map((leader) => (
                <motion.div key={leader.id} variants={fadeInUp}>
                  <div className="group rounded-2xl border-2 border-transparent bg-card p-6 transition-all hover:border-primary hover:shadow-xl">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-blue-600">
                      <Briefcase className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-foreground">{leader.name}</h3>
                    <p className="text-sm font-semibold text-primary">{leader.role}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mt-12 text-center"
            >
              <Link
                href="/careers"
                className="inline-block rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-500 px-8 py-3 text-sm font-semibold text-black shadow-sm transition-all hover:from-yellow-300 hover:to-yellow-400 hover:shadow-lg"
              >
                View Open Positions
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="w-full bg-white">
          <CarouselGallery />
        </section>

        {/* Investment Process */}
        <section className="w-full bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
          <AccordionSection />
        </section>

        {/* Partners Section */}
        <section className="w-full bg-white px-4 py-24 sm:px-6 lg:px-8">
          <Partners />
        </section>

        {/* Impact Targets */}
        <section className="w-full bg-gray-50 px-4 py-24 sm:px-6 lg:px-8">
          <TargetsSection />
        </section>

        {/* CTA Section */}
        <section className="w-full bg-blue-600 px-4 py-24 sm:px-6 lg:px-8">
          <CTASection />
        </section>
      </main>

      <Footer
        className="w-full bg-gray-900 px-4 py-12 text-white sm:px-6 lg:px-8"
        brand={{
          name: "Blue Capital",
          description: "Investing in Africa's sustainable future.",
        }}
        socialLinks={[
          {
            name: "Twitter",
            href: "https://x.com/bluecapital",
          },
          {
            name: "LinkedIn",
            href: "#",
          },
          {
            name: "Instagram",
            href: "#",
          },
        ]}
        columns={[
          {
            title: "Company",
            links: [
              {
                name: "About Us",
                Icon: Blocks,
                href: "/about",
              },
              {
                name: "Our Impact",
                Icon: CreditCard,
                href: "/impact",
              },
              {
                name: "Careers",
                Icon: Webhook,
                href: "/careers",
              },
              {
                name: "Contact",
                Icon: CodeXml,
                href: "#contact",
              },
            ],
          },
          {
            title: "Services",
            links: [
              {
                name: "Blue Metrics",
                Icon: Scale,
                href: "/services/blue-metrics",
              },
              {
                name: "Blue Advisory",
                Icon: Handshake,
                href: "/services/blue-advisory",
              },
              {
                name: "Blue Finance",
                Icon: CreditCard,
                href: "/services/blue-finance",
              },
            ],
          },
          {
            title: "Resources",
            links: [
              {
                name: "News",
                Icon: FileText,
                href: "/news",
              },
              {
                name: "Insights",
                Icon: Lightbulb,
                href: "/insights",
              },
              {
                name: "Research",
                Icon: FileText,
                href: "/research",
              },
            ],
          },
          {
            title: "Legal",
            links: [
              {
                name: "Privacy Policy",
                Icon: Scale,
                href: "/legal/privacy",
              },
              {
                name: "Terms of Service",
                Icon: Handshake,
                href: "/legal",
              },
            ],
          },
        ]}
        copyright="Blue Capital © 2025"
      />
    </div>
  );
}
