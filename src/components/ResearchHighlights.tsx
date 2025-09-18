import React from "react";
import type { ResearchHighlight } from "../data/profile";

interface ResearchHighlightsProps {
  highlights: ResearchHighlight[];
}

const ResearchHighlights: React.FC<ResearchHighlightsProps> = ({ highlights }) => (
  <div style={{ display: "grid", gap: "1.5rem" }}>
    {highlights.map((item) => (
      <article
        key={`${item.title}-${item.year}`}
        style={{
          padding: "1.5rem",
          border: "1px solid rgba(15, 23, 42, 0.08)",
          borderRadius: "1.25rem",
          background: "rgba(15, 23, 42, 0.01)"
        }}
      >
        <header style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", justifyContent: "space-between", alignItems: "baseline" }}>
          <h3 style={{ margin: 0 }}>{item.title}</h3>
          <span style={{ fontSize: "0.9rem", color: "var(--color-muted)" }}>
            {item.venue} · {item.year}
          </span>
        </header>
        <p style={{ marginTop: "0.75rem", marginBottom: "1rem" }}>{item.description}</p>
        {item.tags && (
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            {item.tags.map((tag) => (
              <span key={tag} style={{ fontSize: "0.8rem", background: "rgba(37, 99, 235, 0.12)", color: "var(--color-accent)", padding: "0.35rem 0.75rem", borderRadius: "9999px" }}>
                {tag}
              </span>
            ))}
          </div>
        )}
        {item.link && (
          <p style={{ marginTop: "1rem" }}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              Read publication →
            </a>
          </p>
        )}
      </article>
    ))}
  </div>
);

export default ResearchHighlights;
