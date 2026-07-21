export type PressBlock =
  | { type: "p"; text: string }
  | { type: "h"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string; author: string };

export type PressCategory = "Press Release" | "Company Update" | "In the News";

export interface PressRelease {
  slug: string;
  category: PressCategory;
  title: string;
  date: string;
  /** ISO date used for sorting / <time> */
  isoDate: string;
  location?: string;
  excerpt: string;
  thumbnail: string;
  featured?: boolean;
  /** External link for "In the News" items */
  externalUrl?: string;
  body?: PressBlock[];
  about?: string;
  mediaContact?: { email: string; phone?: string };
}

export const pressReleases: PressRelease[] = [
  {
    slug: "grait-cloud-announces-early-access-round",
    category: "Press Release",
    title:
      "GRAIT Cloud Announces Early Access Investment Round to Accelerate AI-Powered Cloud Operations Platform",
    date: "July 21, 2026",
    isoDate: "2026-07-21",
    location: "Mumbai, India",
    thumbnail: "/press/early-access-round.jpeg",
    featured: true,
    excerpt:
      "GRAIT Cloud today announced the launch of its Pre-Seed Early Access investment round to accelerate product development, expand its cloud infrastructure and onboard its first cohort of enterprise customers.",
    body: [
      {
        type: "p",
        text: "AI and Cloud infrastructure company is productizing cloud operations through a unified GenAI-powered platform for cloud orchestration, DevOps automation and private cloud infrastructure.",
      },
      {
        type: "p",
        text: "Mumbai, India | July 21, 2026: GRAIT Cloud, an AI and cloud infrastructure company building a unified GenAI-powered cloud operations platform, today announced the launch of its Pre-Seed Early Access investment round to accelerate product development, expand its cloud infrastructure and onboard its first cohort of enterprise customers.",
      },
      {
        type: "p",
        text: "Artificial Intelligence is fundamentally reshaping enterprise technology. As organizations accelerate cloud adoption and deploy AI workloads at scale, infrastructure is becoming increasingly complex, cloud costs continue to rise, and skilled DevOps talent remains in short supply. At the same time, growing data localization requirements and the need for greater digital sovereignty are driving demand for secure, AI-ready cloud infrastructure.",
      },
      {
        type: "p",
        text: "GRAIT Cloud is addressing this shift by productizing cloud operations, transforming cloud onboarding, migration and infrastructure management from fragmented, people-intensive projects into a standardized, intelligent platform. Rather than relying on multiple tools and manual processes, the company enables organizations to deploy, manage and optimize cloud infrastructure through AI-driven automation across public, private and hybrid cloud environments.",
      },
      {
        type: "p",
        text: "Positioned at the intersection of AI Infrastructure, Cloud Orchestration and Platform Engineering, GRAIT combines AI-powered DevOps automation, multi-cloud management and private cloud infrastructure into a unified operating platform. The result is a cloud-agnostic platform that simplifies the entire cloud lifecycle, from onboarding and migration to infrastructure provisioning, observability, governance and ongoing optimization.",
      },
      {
        type: "quote",
        text: "Cloud transformed how software is built. AI will transform how cloud itself is operated. We believe infrastructure should become intelligent, autonomous and repeatable. Our vision is to productize cloud operations, helping organizations scale faster while reducing operational complexity, cloud lock-in and dependence on manual DevOps. We believe the next generation of enterprise infrastructure will be AI-native, and GRAIT is being built for that future.",
        author: "Gautam Badalia, Founder, GRAIT Cloud",
      },
      {
        type: "p",
        text: "At the core of the platform is GRAIT's AI DevOps Assistant, designed to automate cloud onboarding, migration planning, infrastructure provisioning, CI/CD pipeline management, observability and day-to-day cloud operations. The platform is designed to operate seamlessly across AWS, Microsoft Azure, Google Cloud, private cloud and hybrid environments, giving enterprises greater flexibility, governance and operational control.",
      },
      {
        type: "quote",
        text: "The next wave of cloud innovation won't come from adding more tools, it will come from making infrastructure intelligent. Our focus has been to build a platform that simplifies the entire cloud lifecycle through AI, enabling enterprises to deploy, operate and scale infrastructure with greater consistency, governance and speed.",
        author: "Raj Surana, Founder, GRAIT Cloud",
      },
      {
        type: "p",
        text: "Beyond software, GRAIT Cloud is building AI-ready private cloud infrastructure with dedicated CPU and GPU environments, enterprise-grade security and a long-term roadmap toward scalable data centre operations. This integrated approach enables organizations to simplify infrastructure management while preparing for the increasing demands of enterprise AI workloads.",
      },
      {
        type: "quote",
        text: "Enterprise AI is only as effective as the infrastructure supporting it. Organizations need platforms that combine intelligence, governance and operational simplicity from day one. Our goal is to help businesses accelerate AI adoption without adding operational complexity.",
        author: "Aanchal Arora, Founder, GRAIT Cloud",
      },
      {
        type: "p",
        text: "Initially focused on high-growth SMEs, developers and AI-first enterprises, GRAIT Cloud aims to accelerate cloud adoption by reducing infrastructure complexity, lowering operational costs and enabling organizations to scale with significantly less dependence on large DevOps teams.",
      },
      { type: "h", text: "Why Now" },
      {
        type: "p",
        text: "Several structural shifts are creating a significant market opportunity for intelligent cloud infrastructure:",
      },
      {
        type: "ul",
        items: [
          "Rapid enterprise adoption of Artificial Intelligence and AI-native applications.",
          "Growing demand for multi-cloud and hybrid cloud environments.",
          "Increasing focus on sovereign cloud and data localization.",
          "Persistent shortage of experienced DevOps and cloud engineering talent.",
          "Rising enterprise investment in infrastructure automation and platform engineering.",
          "Need for greater operational governance, security and cloud cost optimization.",
        ],
      },
      {
        type: "p",
        text: "Together, these trends are accelerating the transition from manually managed infrastructure to AI-powered cloud operations platforms.",
      },
      { type: "h", text: "Early Access Investment Round" },
      {
        type: "p",
        text: "To accelerate product development and commercial expansion, GRAIT Cloud has opened an exclusive Pre-Seed Early Access investment round for a select group of early supporters and strategic investors.",
      },
      {
        type: "p",
        text: "The proceeds from the round will be used to expand AI-ready cloud infrastructure, advance development of the company's AI-powered cloud operations platform, strengthen engineering and go-to-market capabilities, and support enterprise customer onboarding.",
      },
      {
        type: "p",
        text: "The company expects to raise an institutional Seed round following this phase of growth.",
      },
    ],
    about:
      "GRAIT Cloud is an AI and cloud infrastructure company building a unified GenAI-powered cloud operations platform that combines AI orchestration, multi-cloud DevOps automation and private cloud infrastructure into a single intelligent operating layer. By productizing cloud operations, GRAIT enables organizations to automate cloud onboarding, migration, infrastructure provisioning and day-to-day cloud management across public, private and hybrid environments. Designed for the AI era, the platform helps enterprises reduce operational complexity, improve governance, eliminate cloud lock-in and accelerate cloud adoption through intelligent automation.",
    mediaContact: { email: "founders@graitcloud.com" },
  },
];

export function getPressRelease(slug: string): PressRelease | undefined {
  return pressReleases.find((release) => release.slug === slug);
}
