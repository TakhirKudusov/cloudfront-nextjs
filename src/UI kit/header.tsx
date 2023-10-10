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
  @media screen and (max-width: 1024px) {
    width: 220px;
    height: 53px;
  }
  @media screen and (max-width: 500px) {
    width: 170px;
    height: 41px;
  }
  @media screen and (max-width: 425px) {
    width: 150px;
    height: 36px;
  }
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
  @media screen and (max-width: 1024px) {
    padding: 27px 50px 18px 50px;
  }
  @media screen and (max-width: 500px) {
    padding: 18px 30px 16px 30px;
  }
  @media screen and (max-width: 425px) {
    padding: 15px 20px 15px 20px;
  }
  @media screen and (max-width: 320px) {
    padding: 15px;
  }
`;

export default Header;
