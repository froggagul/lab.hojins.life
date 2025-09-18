import React from "react";
import type { PageProps } from "gatsby";

import Layout from "../components/Layout";
import Section from "../components/Section";
import Hero from "../components/Hero";
import ResearchHighlights from "../components/ResearchHighlights";
import ProjectShowcase from "../components/ProjectShowcase";
import CvSection from "../components/CvSection";
import ContactCard from "../components/ContactCard";
import { profileContent } from "../data/profile";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div style={{ margin: "0 auto", width: "100%", maxWidth: "var(--max-width)", display: "grid", gap: "3rem" }}>
        <Hero profile={profileContent} />

        <Section title="Research" accent="Selected Publications & Results">
          <ResearchHighlights highlights={profileContent.researchHighlights} />
        </Section>

        <Section title="Projects" accent="Translating research into impact">
          <ProjectShowcase projects={profileContent.projectHighlights} />
        </Section>

        <Section title="Curriculum Vitae" accent="Education, experience, service">
          <div style={{ display: "grid", gap: "2rem" }}>
            <CvSection title="Education" entries={profileContent.cv.education} />
            <CvSection title="Experience" entries={profileContent.cv.experience} />
            <CvSection title="Service" entries={profileContent.cv.service} />
          </div>
        </Section>

        <Section title="Connect" accent="Get in touch">
          <ContactCard contact={profileContent.contact} />
        </Section>
      </div>
    </Layout>
  );
};

export default IndexPage;
