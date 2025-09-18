export interface ResearchHighlight {
  title: string;
  venue: string;
  year: string;
  description: string;
  link?: string;
  tags?: string[];
}

export interface ProjectHighlight {
  name: string;
  summary: string;
  contribution: string;
  link?: string;
}

export interface CvEntry {
  title: string;
  organization: string;
  location?: string;
  period: string;
  details: string[];
}

export interface ProfileContent {
  tagline: string;
  introduction: string[];
  researchAreas: string[];
  researchHighlights: ResearchHighlight[];
  projectHighlights: ProjectHighlight[];
  cv: {
    education: CvEntry[];
    experience: CvEntry[];
    service: CvEntry[];
  };
  contact: {
    email: string;
    location: string;
    cvUrl: string;
  };
  socialLinks: {
    label: string;
    url: string;
  }[];
}

export const profileContent: ProfileContent = {
  tagline: "Machine Learning Researcher & Creative Technologist",
  introduction: [
    "I explore the intersection of machine learning, generative models, and interactive systems to build tools that expand human creativity.",
    "My work spans from foundational research on reliable AI systems to applied collaborations that deploy ML in art, science, and healthcare."
  ],
  researchAreas: [
    "Generative modeling and diffusion methods",
    "Trustworthy and interpretable machine learning",
    "Human-centered AI for creative expression",
    "Efficient training techniques for large models"
  ],
  researchHighlights: [
    {
      title: "Learning Reliable Generative Policies for Interactive Systems",
      venue: "ICML",
      year: "2024",
      description:
        "Introduced a policy refinement framework that stabilizes diffusion models in closed-loop human collaborations, improving reliability by 18% across benchmarks.",
      link: "https://example.com/reliable-generative-policies",
      tags: ["Generative AI", "Human-AI Interaction"]
    },
    {
      title: "Latent Space Cartography for Large Language Models",
      venue: "NeurIPS",
      year: "2023",
      description:
        "Proposed a visualization toolkit that uncovers concept manifolds in transformer representations, enabling faster model diagnosis and prompt design.",
      link: "https://example.com/latent-space-cartography",
      tags: ["Representation Learning", "Visualization"]
    },
    {
      title: "Interactive Few-Shot Learning for Biomedical Discovery",
      venue: "Nature Machine Intelligence",
      year: "2022",
      description:
        "Demonstrated a mixed-initiative workflow that partners scientists with models to accelerate hypothesis testing in molecular design by 2.4x.",
      tags: ["Applied ML", "Healthcare"]
    }
  ],
  projectHighlights: [
    {
      name: "Sketch2Science",
      summary:
        "An interactive notebook that translates rough sketches into executable simulations for physics and materials research.",
      contribution:
        "Led the model architecture exploration and UX research, shipping a tool adopted by three partner labs.",
      link: "https://example.com/sketch2science"
    },
    {
      name: "MuseFlow Studio",
      summary:
        "A generative co-creation environment for musicians combining symbolic transformers with diffusion-based audio synthesis.",
      contribution:
        "Designed the adaptive feedback engine and evaluation pipelines for live performances.",
      link: "https://example.com/museflow"
    }
  ],
  cv: {
    education: [
      {
        title: "Ph.D. in Computer Science",
        organization: "Stanford University",
        location: "Stanford, CA",
        period: "2018 – 2023",
        details: [
          "Thesis: Trustworthy Interactive Systems Powered by Generative Models",
          "Advisors: Prof. Jane Smith, Prof. Mark Johnson",
          "GPA: 3.98/4.0"
        ]
      },
      {
        title: "B.S. in Electrical Engineering & Computer Science",
        organization: "Seoul National University",
        location: "Seoul, South Korea",
        period: "2014 – 2018",
        details: [
          "Graduated Summa Cum Laude",
          "Undergraduate thesis on adaptive control for autonomous UAVs"
        ]
      }
    ],
    experience: [
      {
        title: "Research Scientist",
        organization: "OpenAI Research",
        location: "San Francisco, CA",
        period: "2023 – Present",
        details: [
          "Lead initiatives on collaborative AI systems for creative and scientific workflows.",
          "Coordinated cross-functional teams delivering production-grade ML infrastructure."
        ]
      },
      {
        title: "Research Intern",
        organization: "Google DeepMind",
        location: "London, UK",
        period: "Summer 2021",
        details: [
          "Developed robust optimization techniques for diffusion models deployed in multimedia editing.",
          "Published results at NeurIPS 2021 workshop on Reliable Machine Learning."
        ]
      }
    ],
    service: [
      {
        title: "Program Committee",
        organization: "NeurIPS, ICML, CHI",
        period: "2020 – Present",
        details: [
          "Reviewed 40+ papers across top-tier venues focusing on human-centered and trustworthy ML."
        ]
      },
      {
        title: "Mentor",
        organization: "ML for Change Initiative",
        period: "2019 – Present",
        details: [
          "Mentor undergraduate researchers from underrepresented backgrounds pursuing AI for social good."
        ]
      }
    ]
  },
  contact: {
    email: "research@hojins.life",
    location: "San Francisco, CA",
    cvUrl: "https://example.com/hojin-cv.pdf"
  },
  socialLinks: [
    { label: "Google Scholar", url: "https://scholar.google.com/citations?user=example" },
    { label: "GitHub", url: "https://github.com/hojin" },
    { label: "Twitter", url: "https://twitter.com/hojin" }
  ]
};
