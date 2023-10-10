"use client";

import styled from "styled-components";
import { montserrat } from "@/lib/fonts";

const Footer = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <Text className={montserrat.className}>
          CLOUDFRONT LTD, Cyprus, A.G. Leventi 5, Floor 13, Flat/Office 1301,
          Nicosia
        </Text>
        <Text className={montserrat.className}>
          Cyprus Email: cloudfrontcyprus@gmail.com
        </Text>
        <Text className={montserrat.className}>+375 97530091</Text>
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
`;

export default Footer;
