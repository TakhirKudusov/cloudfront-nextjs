"use client";

import styled from "styled-components";
import { montserrat } from "@/lib/fonts";

const Footer = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <Text className={montserrat.className}>
          CLOUDFRONT LTD, Cyprus, A.G. Leventi&nbsp;5, Floor&nbsp;13,
          Flat/Office 1301, Nicosia, Cyprus Email: cloudfrontcyprus@gmail.com
          +375&nbsp;97530091
        </Text>
      </ContentWrapper>
    </Wrapper>
  );
};

const Text = styled.p`
  color: white;
  text-align: center;
  font-size: 10px;
  line-height: 24px;
`;

const ContentWrapper = styled.div`
  max-width: 750px;
  width: 100%;
  justify-content: space-between;
  display: flex;
`;

const Wrapper = styled.div`
  width: 100%;
  padding: 50px 65px;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  margin-top: 50px;
  @media screen and (max-width: 1024px) {
    margin-top: 40px;
    padding: 40px 50px;
  }
  @media screen and (max-width: 500px) {
    padding: 30px 40px;
  }
  @media screen and (max-width: 425px) {
    padding: 25px 30px;
  }
`;

export default Footer;
