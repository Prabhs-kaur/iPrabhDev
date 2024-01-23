"use client";
import styled from "styled-components";
function Heading({ content }) {
  return (
    <h1 className="display-5 fw-bold text-dark mb-5">
      {content.title.heading}
    </h1>
  );
}
export default Heading;
