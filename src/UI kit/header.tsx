"use client";

import styled from "styled-components";
import Image from "next/image";
import logoPic from "@/../public/logo.png";
import StyledButton from "@/UI kit/button";
import Link from "next/link";

const Header = () => {
  return (
    <Container>
      <InnerContainer>
        <Link href="/">
          <LogoContainer>
            <Image src={logoPic} alt="Logo" fill />
          </LogoContainer>
        </Link>
        <Link href="/#contact-us">
          <StyledButton>contact us</StyledButton>
        </Link>
      </InnerContainer>
    </Container>
  );
};

const LogoContainer = styled.div`
  position: relative;
  width: 246px;
  height: 60px;
`;

const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1920px;
  width: 100%;
`;

const Container = styled.header`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  position: sticky;
  top: 0;
  z-index: 10;
  padding: 31px 65px 23px 65px;
  justify-content: center;
`;

export default Header;
