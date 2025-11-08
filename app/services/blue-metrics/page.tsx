import Image from "next/image";

export default function BlueMetricsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-background py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-5xl font-black text-transparent lg:text-7xl">
              Blue Metrics
            </h1>
            <p className="text-xl text-muted-foreground">
              Africa&apos;s No.1 AI-Powered Blue Economy Intelligence Engine
            </p>
          </div>
        </div>

        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
      </section>

      {/* ABEI Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 rounded-2xl bg-gradient-to-r from-blue-50 to-cyan-50 p-8 dark:from-blue-950/20 dark:to-cyan-950/20 lg:p-12">
            <h2 className="mb-6 text-4xl font-bold text-foreground">
              Africa Blue Economy Intelligence Index (ABEI)
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
              Highly curated data for blue capital exploration and investments around Africa and beyond.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              The Africa Blue Economy Intelligence Index (ABEII) empowers governments, blue leaders, and investors with actionable intelligence through integrated data platforms, tailored research, multimedia insights, and immersive experiences. With recognition of excellence—driving sustainable investment and transformative growth across Africa&apos;s blue economy.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80"
              alt="ABEI Dashboard"
              width={1200}
              height={600}
              className="h-auto w-full"
            />
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="mb-4 text-3xl font-bold text-foreground">
              What we do - Services
            </h2>
            <p className="text-lg text-muted-foreground">
              Blue Metrics – Blue Advisory – Blue Finance
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl bg-card p-6 shadow-lg">
              <h3 className="mb-4 text-xl font-bold text-primary">
                The Africa Blue Economy Intelligence Index (ABEI) empowers governments, blue policymakers with actionable intelligence through integrated data platforms, tailored research, multimedia insights, and immersive experiences
              </h3>
              <p className="text-sm text-muted-foreground">
                Comprehensive market intelligence for informed decision-making
              </p>
            </div>

            <div className="rounded-2xl bg-card p-6 shadow-lg">
              <h3 className="mb-4 text-xl font-bold text-foreground">
                By fusing local precision with global standards, it delivers:
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Real-time, actionable data</li>
                <li>• Financial-grade validation & MRV</li>
                <li>• Global benchmarking standards</li>
                <li>• Policy and performance leadership</li>
              </ul>
            </div>

            <div className="rounded-2xl bg-card p-6 shadow-lg">
              <h3 className="mb-4 text-xl font-bold text-foreground">
                With recognition of the power of global indices, ABEII positions Africa not as a participant—but as a global leader in sustainable ocean finance and innovation.
              </h3>
              <p className="text-sm text-muted-foreground">
                Leading the transformation of Africa&apos;s blue economy
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ABEI Impact */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-500 p-8 text-black lg:p-12">
            <h2 className="mb-6 text-3xl font-bold">
              ABEII fills a critical gap in global indices by providing Africa-centric, actionable blue economy intelligence.
            </h2>
            <p className="text-xl font-semibold">
              MD, M-PESA Ethiopia
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-4xl font-bold text-foreground">
              INVEST IN AFRICA NOW
            </h2>
            <p className="mb-8 text-xl text-muted-foreground">
              Access the premier data and analytics platform for blue economy intelligence
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="rounded-lg bg-primary px-8 py-4 text-lg font-bold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-xl">
                View Index
              </button>
              <button className="rounded-lg border-2 border-primary px-8 py-4 text-lg font-bold text-primary transition-all hover:bg-primary/5">
                Request a Demo
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
