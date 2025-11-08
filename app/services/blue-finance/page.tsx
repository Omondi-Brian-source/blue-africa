import Image from "next/image";

export default function BlueFinancePage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-background py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-5xl font-black text-transparent lg:text-7xl">
              Blue Finance & Innovation
            </h1>
            <p className="text-xl text-muted-foreground">
              Structuring innovative financial solutions for Africa&apos;s blue economy transformation
            </p>
          </div>
        </div>

        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-16 rounded-2xl bg-gradient-to-r from-blue-50 to-cyan-50 p-8 dark:from-blue-950/20 dark:to-cyan-950/20 lg:p-12">
            <h2 className="mb-6 text-3xl font-bold text-foreground">
              Pioneering Blue Finance Solutions
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Blue Finance combines cutting-edge financial structuring, blended finance models, and innovative investment vehicles to unlock sustainable value in Africa&apos;s blue economy. We bridge the gap between impact and returns, creating financial solutions that drive both profitability and positive environmental outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="mb-4 text-3xl font-bold text-foreground">
              Our Blue Finance Services
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl bg-card p-8 shadow-lg">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                1
              </div>
              <h3 className="mb-4 text-2xl font-bold text-foreground">
                Blended Finance Structuring
              </h3>
              <p className="leading-relaxed text-muted-foreground">
                Design and issuance of innovative bonds, blended finance models, and structured investment vehicles that combine public, private, and philanthropic capital for maximum impact.
              </p>
            </div>

            <div className="rounded-2xl bg-card p-8 shadow-lg">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                2
              </div>
              <h3 className="mb-4 text-2xl font-bold text-foreground">
                Blue Bonds & Green Instruments
              </h3>
              <p className="leading-relaxed text-muted-foreground">
                Pioneer Africa&apos;s first regenerative ocean conservation bonds and green financial instruments that monetize marine biodiversity through innovative conservation finance.
              </p>
            </div>

            <div className="rounded-2xl bg-card p-8 shadow-lg">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                3
              </div>
              <h3 className="mb-4 text-2xl font-bold text-foreground">
                Transaction Leadership
              </h3>
              <p className="leading-relaxed text-muted-foreground">
                Originate and lead high-impact blue economy transactions across public and private sectors, mobilizing DFIs, institutional investors, and impact capital.
              </p>
            </div>

            <div className="rounded-2xl bg-card p-8 shadow-lg">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                4
              </div>
              <h3 className="mb-4 text-2xl font-bold text-foreground">
                Capital Raising & Deployment
              </h3>
              <p className="leading-relaxed text-muted-foreground">
                Support policy formulation, risk management, financial modeling, and capital deployment strategies for sustainable blue economy projects across Africa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Areas */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-foreground">
              Innovation at the Forefront
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Leading the development of next-generation blue finance instruments
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="group relative overflow-hidden rounded-2xl">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80"
                  alt="Biodiversity Credits"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="mb-2 text-xl font-bold">Biodiversity Credits</h3>
                  <p className="text-sm">Structured products for marine conservation</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
                  alt="Genomic Asset Tokenization"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="mb-2 text-xl font-bold">Genomic Asset Tokenization</h3>
                  <p className="text-sm">Digital assets for marine genetic resources</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80"
                  alt="Impact Investment Vehicles"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="mb-2 text-xl font-bold">Impact Investment Vehicles</h3>
                  <p className="text-sm">Blended finance for sustainable development</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-yellow-400 to-yellow-500 py-16 text-black">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-4xl font-bold">
              Ready to Unlock Blue Finance Opportunities?
            </h2>
            <p className="mb-8 text-xl font-semibold">
              Partner with us to structure innovative financial solutions for your blue economy projects
            </p>
            <button className="rounded-lg bg-black px-8 py-4 text-lg font-bold text-white transition-all hover:bg-black/90 hover:shadow-xl">
              Get Started
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
