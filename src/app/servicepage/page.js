"use client";
import CardListing from "@/components/CardListing";
import Hero from "@/Sections/Hero";
import styled from "styled-components";
const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;
  background: #ffffff;
`;

export default function Page() {
  return (
    <>
      <Wrapper className="mx-auto my-auto p-5 d-flex flex-col align-items-center justify-content-start">
        <h1>Services</h1>
        <Wrapper className="row d-flex space-around align-items-center justify-content-start px-5">
          <CardListing />
        </Wrapper>
      </Wrapper>
    </>
  );
}
