"use client";

import styled from "styled-components";
import FirstBlock from "@/components/firstBlock";
import SecondBlock from "@/components/secondBlock";
import Footer from "@/UI kit/footer";

export default function Home() {
  return (
    <StyledMain>
      <FirstBlock />
      <SecondBlock />
      <Footer />
    </StyledMain>
  );
}

const StyledMain = styled.main`
  width: 100%;
  z-index: 1;
`;
