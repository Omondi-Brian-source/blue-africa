import { interviews } from "@/data/insights";
import { InterviewCard } from "@/components/ui/interview-card";
import { InterviewList } from "@/components/ui/interview-list";

export default function InsightsPage() {
  const featuredInterviews = interviews.slice(0, 3);
  const allInterviews = interviews;

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-background py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-5xl font-black text-transparent lg:text-7xl">
              INDUSTRIES, INSIGHTS & INTERVIEWS
            </h1>
            <p className="text-xl text-muted-foreground">
              Blue Capital conducts interviews with top CEOs, government leaders and international decision-makers as key sources of blue economy insight and intelligence
            </p>
          </div>
        </div>

        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl rounded-2xl bg-gradient-to-r from-blue-50 to-cyan-50 p-8 dark:from-blue-950/20 dark:to-cyan-950/20 lg:p-12">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Join our growing list of decision-makers with exclusive interviews, in-depth analysis and comparative research spotlighting synergies and competitive advantages. Our sector overviews highlight trends, opportunities and challenges. Our research is suitable for a wide range of decision-makers and professionals, including executives, entrepreneurs, government officials, consultants and diplomats. Journalists and expatriates can also benefit from Blue Capital&apos;s research, helping them inform their wider communities.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Interviews */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="mb-4 text-3xl font-bold text-foreground">
              Featured Interviews
            </h2>
            <p className="text-lg text-muted-foreground">
              Conversations with industry leaders shaping the future of Africa&apos;s blue economy
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredInterviews.map((interview) => (
              <InterviewCard key={interview.id} interview={interview} />
            ))}
          </div>
        </div>
      </section>

      {/* Insights Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 rounded-2xl bg-card p-8 shadow-xl">
            <h2 className="mb-6 text-2xl font-bold text-foreground">
              Insights
            </h2>
            <div className="space-y-6 text-muted-foreground">
              <p className="leading-relaxed">
                Our business is to produce compelling, longstanding record in risk analysis with deep domain expertise and global coverage. Blue Capital&apos;s trusted research and deliverables signals long term potential for blue economic growth opportunities.
              </p>
              <p className="leading-relaxed">
                Blue Capital covers dynamic, emerging market economies that are positioned for attractive Blue economy investment returns over the next 10 to 15 years. Regions and sectors provided by Blue Capital helps leaders navigate the opportunities and risks in these high-growth-potential countries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Methodology */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground">
              How do you ensure the integrity of your research?
            </h2>
          </div>

          <div className="mx-auto max-w-5xl rounded-2xl bg-card p-8 shadow-xl lg:p-12">
            <p className="mb-6 leading-relaxed text-muted-foreground">
              Blue Capital is committed to getting first-hand information from sources on the ground, blending statistical information with in-person experiences and interviews. Our comprehensive data-gathering and quality-assurance process, verified by internal fact-checkers and vetted by both public and private sector representatives to ensure that the underlying facts and figures are as accurate and up to date as possible.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              Blue Capital research is designed for anyone looking for blue economy investment opportunities or reliable sector-by-sector information on high- and medium-growth-potential markets. Our reports help readers from a wide array of professional and academic backgrounds gain a deeper understanding of some of the most exciting blue economic growth agendas in emerging markets, ranging from mining, tourism, marine biotech, and big data, to ocean, fisheries and governance strategies.
            </p>
          </div>
        </div>
      </section>

      {/* All Interviews List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="mb-4 text-3xl font-bold text-foreground">
              All Interviews
            </h2>
            <p className="text-lg text-muted-foreground">
              Complete list of our industry interviews and insights
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <InterviewList interviews={allInterviews} />
          </div>
        </div>
      </section>
    </main>
  );
}
