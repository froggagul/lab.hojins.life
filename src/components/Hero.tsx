import React from "react";
import type { ProfileContent } from "../data/profile";

interface HeroProps {
  profile: ProfileContent;
}

const Hero: React.FC<HeroProps> = ({ profile }) => {
  return (
    <section
      style={{
        display: "grid",
        gap: "2rem",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))"
      }}
    >
      <div>
        <p style={{ textTransform: "uppercase", fontSize: "0.85rem", letterSpacing: "0.2em", color: "var(--color-muted)", marginBottom: "0.75rem" }}>
          {profile.tagline}
        </p>
        <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 3.75rem)", marginBottom: "1.5rem" }}>
          Building reliable, human-centered AI systems that expand imagination.
        </h1>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "2rem" }}>
          {profile.socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "0.5rem 1rem",
                borderRadius: "9999px",
                border: "1px solid rgba(37, 99, 235, 0.3)",
                fontSize: "0.9rem"
              }}
            >
              {social.label}
            </a>
          ))}
        </div>
        {profile.introduction.map((paragraph) => (
          <p key={paragraph} style={{ fontSize: "1.05rem", maxWidth: "55ch" }}>
            {paragraph}
          </p>
        ))}
      </div>
      <aside style={{ background: "rgba(37, 99, 235, 0.08)", borderRadius: "1.5rem", padding: "1.5rem" }}>
        <h3 style={{ marginTop: 0, marginBottom: "1rem" }}>Research Focus</h3>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "0.75rem" }}>
          {profile.researchAreas.map((area) => (
            <li key={area} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
              <span aria-hidden style={{ color: "var(--color-accent)" }}>
                •
              </span>
              <span>{area}</span>
            </li>
          ))}
        </ul>
      </aside>
    </section>
  );
};

export default Hero;
