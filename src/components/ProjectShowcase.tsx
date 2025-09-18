import React from "react";
import type { ProjectHighlight } from "../data/profile";

interface ProjectShowcaseProps {
  projects: ProjectHighlight[];
}

const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ projects }) => (
  <div style={{ display: "grid", gap: "1.5rem" }}>
    {projects.map((project) => (
      <article
        key={project.name}
        style={{
          display: "grid",
          gap: "0.75rem",
          padding: "1.5rem",
          borderRadius: "1.25rem",
          border: "1px solid rgba(37, 99, 235, 0.15)",
          background: "rgba(37, 99, 235, 0.05)"
        }}
      >
        <header style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "0.75rem" }}>
          <h3 style={{ margin: 0 }}>{project.name}</h3>
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.9rem" }}>
              View project →
            </a>
          )}
        </header>
        <p style={{ margin: 0 }}>{project.summary}</p>
        <p style={{ margin: 0, color: "var(--color-muted)" }}>{project.contribution}</p>
      </article>
    ))}
  </div>
);

export default ProjectShowcase;
