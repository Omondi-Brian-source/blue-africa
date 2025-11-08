import Image from "next/image";
import { impactMetrics } from "@/data/metrics";
import { MetricsDashboard } from "@/components/ui/metrics-dashboard";

export default function ImpactPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-background py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-5xl font-black text-transparent lg:text-7xl">
              Our Impact - Protecting the Planet
            </h1>
            <p className="text-xl text-muted-foreground">
              Measurable results in sustainable blue economy development across Africa
            </p>
          </div>
        </div>

        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
      </section>

      {/* Impact Metrics Visual */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=80"
              alt="Blue economy impact"
              width={1200}
              height={600}
              className="h-auto w-full"
            />

            {/* Overlay metrics grid */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-8">
              <div className="grid h-full grid-cols-2 gap-4 lg:grid-cols-3">
                {impactMetrics.map((metric) => (
                  <div
                    key={metric.id}
                    className="flex flex-col justify-center rounded-lg border-2 border-white/20 bg-white/10 p-4 backdrop-blur-sm transition-all hover:border-yellow-400 hover:bg-white/20"
                  >
                    <div className="mb-2 text-3xl font-bold text-white lg:text-4xl">
                      {metric.value}
                    </div>
                    <div className="text-sm text-white/90">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Metrics Dashboard */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <MetricsDashboard
            metrics={impactMetrics}
            title="Our Impact By The Numbers"
            description="Transforming Africa's blue economy through strategic investments and partnerships"
            columns={3}
          />
        </div>
      </section>

      {/* Impact Stories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-foreground">
              Impact Stories
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Real-world examples of how we&apos;re creating sustainable value across Africa
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="group relative overflow-hidden rounded-2xl">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1605289355680-75fb41239154?w=800&q=80"
                  alt="Sustainable fishing"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="mb-2 text-xl font-bold">Sustainable Fishing</h3>
                  <p className="text-sm">Supporting coastal communities with sustainable practices</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=800&q=80"
                  alt="Marine conservation"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="mb-2 text-xl font-bold">Marine Conservation</h3>
                  <p className="text-sm">Protecting ocean ecosystems for future generations</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&q=80"
                  alt="Renewable energy"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="mb-2 text-xl font-bold">Renewable Energy</h3>
                  <p className="text-sm">Powering coastal communities sustainably</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
