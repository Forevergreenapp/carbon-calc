import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import HonorsSustainabilityEssay from "./writing/honors-sustainability-essay";

interface WritingItemProps {
  title: string;
  type: string;
  description: string;
  slug: string;
}

const WritingItem: React.FC<WritingItemProps> = ({
  title,
  type,
  description,
  slug,
}) => (
  <div style={{ marginBottom: "40px" }}>
    <h3 style={{ marginBottom: "10px" }}>{title}</h3>
    <p style={{ marginBottom: "10px", fontStyle: "italic" }}>{type}</p>
    <p>{description}</p>
    <Link to={`/writing/${slug}`} style={linkStyle}>
      Read more
    </Link>
  </div>
);

const WritingList: React.FC = () => (
  <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
    <h2 style={{ marginBottom: "40px" }}>My Writing</h2>
    <WritingItem
      title="Thesis: The Impact of Sustainable Practices on Business Growth"
      type="Academic Paper"
      description="An in-depth analysis of how sustainable business practices can drive long-term growth and profitability in modern corporations."
      slug="thesis-sustainable-practices"
    />
    <WritingItem
      title="How Sustainable Business Can Build a Better Future"
      type="Essay"
      description="Exploring the role of sustainable business practices in shaping a more environmentally conscious and socially responsible future."
      slug="sustainable-business-essay"
    />
    <WritingItem
      title="Honors Sustainability Essay"
      type="Academic Essay"
      description="A comprehensive examination of current sustainability challenges and potential solutions across various industries and sectors."
      slug="honors-sustainability-essay"
    />
  </div>
);

const WritingPiece: React.FC<{ title: string; content: string }> = ({
  title,
  content,
}) => (
  <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
    <h2>{title}</h2>
    <p>{content}</p>
    <Link to="/writing" style={linkStyle}>
      Back to Writing
    </Link>
  </div>
);

const Writing: React.FC = () => (
  <Routes>
    <Route path="/" element={<WritingList />} />
    <Route
      path="/thesis-sustainable-practices"
      element={
        <WritingPiece
          title="Thesis: The Impact of Sustainable Practices on Business Growth"
          content="This is the content of the thesis..."
        />
      }
    />
    <Route
      path="/sustainable-business-essay"
      element={
        <WritingPiece
          title="How Sustainable Business Can Build a Better Future"
          content="This is the content of the essay..."
        />
      }
    />
    <Route
      path="/honors-sustainability-essay"
      element={<HonorsSustainabilityEssay />}
    />
  </Routes>
);

const linkStyle: React.CSSProperties = {
  fontSize: "16px",
  color: "#000",
  textDecoration: "underline",
};

export default Writing;
