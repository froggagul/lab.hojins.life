import React from "react";
import type { CvEntry } from "../data/profile";

interface CvSectionProps {
  title: string;
  entries: CvEntry[];
}

const CvSection: React.FC<CvSectionProps> = ({ title, entries }) => (
  <div style={{ display: "grid", gap: "1.5rem" }}>
    <h3 style={{ margin: 0 }}>{title}</h3>
    <div style={{ display: "grid", gap: "1.25rem" }}>
      {entries.map((entry) => (
        <article key={`${entry.title}-${entry.organization}-${entry.period}`}>
          <header style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", justifyContent: "space-between", alignItems: "baseline" }}>
            <div>
              <h4 style={{ margin: 0 }}>{entry.title}</h4>
              <p style={{ margin: 0, color: "var(--color-muted)" }}>
                {entry.organization}
                {entry.location ? ` · ${entry.location}` : ""}
              </p>
            </div>
            <span style={{ fontSize: "0.9rem", color: "var(--color-muted)" }}>{entry.period}</span>
          </header>
          <ul>
            {entry.details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  </div>
);

export default CvSection;
