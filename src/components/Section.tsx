import React, { PropsWithChildren } from "react";

interface SectionProps extends PropsWithChildren {
  title: string;
  accent?: string;
}

const Section: React.FC<SectionProps> = ({ title, accent, children }) => {
  return (
    <section>
      <header style={{ marginBottom: "1.5rem" }}>
        {accent && (
          <p
            style={{
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              fontSize: "0.8rem",
              color: "var(--color-muted)",
              margin: 0
            }}
          >
            {accent}
          </p>
        )}
        <h2 style={{ marginBottom: "0.5rem" }}>{title}</h2>
        <div style={{ width: "3rem", height: "0.25rem", background: "var(--color-accent)", borderRadius: "9999px" }} />
      </header>
      {children}
    </section>
  );
};

export default Section;
