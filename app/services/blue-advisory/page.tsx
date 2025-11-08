import { countryReports } from "@/data/reports";
import { CountryReportsList } from "@/components/ui/country-reports-list";

export default function BlueAdvisoryPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-background py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-5xl font-black text-transparent lg:text-7xl">
              Blue Advisory
            </h1>
            <p className="text-xl text-muted-foreground">
              We originate and structure investments for financial returns and positive blue economy outcomes
            </p>
          </div>
        </div>

        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-16 grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-4xl font-bold text-foreground">
                Shaping Tomorrow's Blue Finance, Together
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
                Blue Advisory combines cutting-edge financial structuring, transaction leadership, and strategic consultancy that powers sustainable outcomes. We are pioneers in aligning markets and entrepreneurs with actionable blended finance models, and structured investment solutions that drive both profitability and positive impact.
              </p>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 p-8 dark:from-blue-950/20 dark:to-cyan-950/20">
              <h3 className="mb-4 text-2xl font-bold text-foreground">
                Our Approach
              </h3>
              <p className="leading-relaxed text-muted-foreground">
                By fusing local precision with global standards, it delivers actionable intelligence tailored to your needs. Whether you're an entrepreneur, investor, or business leader, we empower you to navigate complex markets with confidence and unlock sustainable ocean value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="mb-4 text-3xl font-bold text-foreground">
              Our Advisory Services
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl bg-card p-6 shadow-lg">
              <div className="mb-4 text-3xl font-bold text-primary">1.</div>
              <h3 className="mb-3 text-xl font-bold text-foreground">
                Financial Instrument Innovation & Structuring
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Design and issuance of innovative bonds, blended finance models, and structured investment vehicles</li>
                <li>• Pioneer Africa's first regenerative ocean conservation model, monetizing marine biodiversity through conservation finance instruments</li>
                <li>• Biodiversity credits via structured products</li>
                <li>• Genomic asset tokenizing</li>
              </ul>
            </div>

            <div className="rounded-2xl bg-card p-6 shadow-lg">
              <div className="mb-4 text-3xl font-bold text-primary">2.</div>
              <h3 className="mb-3 text-xl font-bold text-foreground">
                Transaction & Market Leadership
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Originate and lead high impact Blue economy transactions across public and private sectors</li>
                <li>• Facilitate market entry for institutional and impact investors</li>
                <li>• Mobilize and structure DFIs, philanthopists, and private capital</li>
              </ul>
            </div>

            <div className="rounded-2xl bg-card p-6 shadow-lg">
              <div className="mb-4 text-3xl font-bold text-primary">3.</div>
              <h3 className="mb-3 text-xl font-bold text-foreground">
                Strategic Advisory & Implementation
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Customized support for policy formulation, risk management, and sustainable project execution</li>
                <li>• Empower businesses with transaction advisory, financial modeling, and capital-raising solutions across markets</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Country Reports */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="mb-4 text-4xl font-bold text-foreground">
              Country-Specific Advisory Reports
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive blue economy analysis and strategic guidance for {countryReports.length} African nations
            </p>
          </div>

          <CountryReportsList reports={countryReports} />
        </div>
      </section>
    </main>
  );
}
