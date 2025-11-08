import { countryReports, reportCategories } from "@/data/reports";
import { CountryReportsList } from "@/components/ui/country-reports-list";
import { ReportCategoryGrid } from "@/components/ui/report-category-grid";

export default function ResearchPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-background py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-5xl font-black text-transparent lg:text-7xl">
              RESEARCH & REPORTS
            </h1>
            <p className="text-xl text-muted-foreground">
              Blue Capital&apos;s portfolio of blue economic intelligence and advisory reports provides its global audience with analysis and solutions to understand and take advantage of new opportunities in markets that are poised for growth and offer considerable return on investment
            </p>
          </div>
        </div>

        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl rounded-2xl bg-yellow-50 p-8 dark:bg-yellow-950/20 lg:p-12">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Blue Capital produces regular economic reports on the markets we cover, available on our website, via email subscription or via popular podcast apps. In addition, our GBAMARK News and Views are designed for those looking for regular updates on key economic issues to access our GBAMARK News and Views are designed for those looking for regular updates on key economic issues.
            </p>
          </div>
        </div>
      </section>

      {/* Report Categories */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="mb-4 text-3xl font-bold text-foreground">
              Report Categories
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore our comprehensive research across different sectors
            </p>
          </div>

          <ReportCategoryGrid categories={reportCategories} />
        </div>
      </section>

      {/* Blue Economic Intelligence Reports */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="mb-4 text-4xl font-bold text-foreground">
              Our Blue Economic Intelligence Reports
            </h2>
            <p className="text-lg text-muted-foreground">
              Our thought leadership anticipates what&apos;s next. Our quarterly briefings keep investors and companies one step ahead, translating trends into strategic opportunities.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl bg-card p-8 shadow-xl">
              <h3 className="mb-4 text-2xl font-bold text-foreground">
                Understanding Tomorrow&apos;s Growth Markets, Today
              </h3>
              <p className="mb-6 leading-relaxed text-muted-foreground">
                We pride ourselves on producing thought-leadership that truly challenges the way you look at emerging markets. Blue Capital helps you to understand what is happening now, and where countries can realistically be tomorrow to make the information that they need to understand and use on a single blue economy platform.
              </p>
              <button className="rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-md">
                LEARN MORE
              </button>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-primary/10 to-blue-500/10 p-8">
              <h3 className="mb-4 text-2xl font-bold text-foreground">
                Reports
              </h3>
              <p className="leading-relaxed text-muted-foreground">
                OBO&apos;s portfolio of economic intelligence and advisory reports provides our global audience with in-depth analysis on growth strategies, giving decision-makers the information they need to understand and use on a sustainable, and profitable blue economy platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Country Reports */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="mb-4 text-4xl font-bold text-foreground">
              Country-Specific Blue Economy Reports
            </h2>
            <p className="text-lg text-muted-foreground">
              In-depth analysis and strategic insights for {countryReports.length} African nations
            </p>
          </div>

          <CountryReportsList reports={countryReports} />
        </div>
      </section>
    </main>
  );
}
