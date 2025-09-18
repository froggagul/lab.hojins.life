import React from "react";
import type { ProfileContent } from "../data/profile";

interface ContactCardProps {
  contact: ProfileContent["contact"];
}

const ContactCard: React.FC<ContactCardProps> = ({ contact }) => (
  <div
    style={{
      display: "grid",
      gap: "0.75rem",
      padding: "1.5rem",
      borderRadius: "1.5rem",
      border: "1px solid rgba(15, 23, 42, 0.08)",
      background: "linear-gradient(135deg, rgba(37, 99, 235, 0.08), rgba(15, 23, 42, 0.05))"
    }}
  >
    <h3 style={{ margin: 0 }}>Let's collaborate</h3>
    <p style={{ margin: 0 }}>
      Based in <strong>{contact.location}</strong>. I'm open to research collaborations, speaking engagements, and advising.
    </p>
    <p style={{ margin: 0 }}>
      <a href={`mailto:${contact.email}`}>{contact.email}</a>
    </p>
    <p style={{ margin: 0 }}>
      <a href={contact.cvUrl} target="_blank" rel="noopener noreferrer">
        Download full CV →
      </a>
    </p>
  </div>
);

export default ContactCard;
