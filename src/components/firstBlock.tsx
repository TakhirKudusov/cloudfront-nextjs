"use client";

import { montserrat } from "@/lib/fonts";
import ParticlesBg from "@/UI kit/particlesBg";
import styled from "styled-components";
import { Schedule } from "@styled-icons/material-sharp";
import { ArrowCircleUpOutline } from "@styled-icons/evaicons-outline";
import { TargetArrow } from "@styled-icons/fluentui-system-regular";
import { CheckmarkCircle } from "@styled-icons/evaicons-solid";
import { MoneyEuroCircle } from "@styled-icons/remix-line";

const FirstBlock = () => {
  return (
    <FirstBlockContainer>
      <ContentContainer>
        <div>
          <HeaderText className={montserrat.className}>
            about&nbsp;us: we&nbsp;are a&nbsp;
            <RedMarker>full-service marketing agency.</RedMarker>{" "}
          </HeaderText>
          <Text className={montserrat.className}>
            We&nbsp;provide the following services for businesses:
            <br />
            &mdash;&nbsp;Creative
            <br />
            &mdash;&nbsp;Design
            <br />
            &mdash;&nbsp;Traffic
            <br />
            &mdash;&nbsp;Advertising campaigns
            <br />
            &mdash;&nbsp;Advertising products
            <br />
            &mdash;&nbsp;Marketing research
            <br />
            <br />
            If&nbsp;your business needs customers, we&nbsp;know how to&nbsp;find
            them! Fill out the form below and we&rsquo;ll contact you
            to&nbsp;discuss the details.
          </Text>
        </div>
        <InfographicsContainer>
          <InfoItemContainer>
            <EuroIcon />
            <InfoText className={montserrat.className}>optimal prices</InfoText>
          </InfoItemContainer>
          <InfoItemContainer>
            <CheckmarkIcon />
            <InfoText className={montserrat.className}>
              wide range of services
            </InfoText>
          </InfoItemContainer>
          <InfoItemContainer>
            <TargetIcon />
            <InfoText className={montserrat.className}>
              significantly improve SEO
            </InfoText>
          </InfoItemContainer>
          <InfoItemContainer>
            <ArrowcircleIcon />
            <InfoText className={montserrat.className}>
              increase conversion rates
            </InfoText>
          </InfoItemContainer>
          <InfoItemContainer className="last">
            <TimeIcon />
            <InfoText className={montserrat.className}>save your time</InfoText>
          </InfoItemContainer>
        </InfographicsContainer>
      </ContentContainer>
    </FirstBlockContainer>
  );
};

const InfoItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 14px;
  align-items: center;
  max-width: 220px;
  @media screen and (max-width: 1024px) {
    &.last {
      display: none;
    }
  }
  @media screen and (max-width: 768px) {
    width: 150px;
    &.last {
      display: flex;
    }
  }
  @media screen and (max-width: 500px) {
    width: 130px;
  }
  @media screen and (max-width: 425px) {
    width: 120px;
  }
`;

const InfoText = styled.p`
  color: white;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 18px;
  text-align: center;
  @media screen and (max-width: 1024px) {
    font-size: 16px;
  }
  @media screen and (max-width: 500px) {
    font-size: 14px;
  }
  @media screen and (max-width: 425px) {
    font-size: 12px;
  }
`;

const TimeIcon = styled(Schedule)`
  width: 125px;
  height: 125px;
  color: rgba(231, 0, 19, 0.9);
  @media screen and (max-width: 1024px) {
    width: 100px;
    height: 100px;
  }
  @media screen and (max-width: 500px) {
    width: 90px;
    height: 90px;
  }
  @media screen and (max-width: 425px) {
    width: 80px;
    height: 80px;
  }
`;

const ArrowcircleIcon = styled(ArrowCircleUpOutline)`
  width: 125px;
  height: 125px;
  color: rgba(231, 0, 19, 0.9);
  @media screen and (max-width: 1024px) {
    width: 100px;
    height: 100px;
  }
  @media screen and (max-width: 500px) {
    width: 90px;
    height: 90px;
  }
  @media screen and (max-width: 425px) {
    width: 80px;
    height: 80px;
  }
`;

const TargetIcon = styled(TargetArrow)`
  width: 125px;
  height: 125px;
  color: rgba(231, 0, 19, 0.9);
  @media screen and (max-width: 1024px) {
    width: 100px;
    height: 100px;
  }
  @media screen and (max-width: 500px) {
    width: 90px;
    height: 90px;
  }
  @media screen and (max-width: 425px) {
    width: 80px;
    height: 80px;
  }
`;

const CheckmarkIcon = styled(CheckmarkCircle)`
  width: 125px;
  height: 125px;
  color: rgba(231, 0, 19, 0.9);
  @media screen and (max-width: 1024px) {
    width: 100px;
    height: 100px;
  }
  @media screen and (max-width: 500px) {
    width: 90px;
    height: 90px;
  }
  @media screen and (max-width: 425px) {
    width: 80px;
    height: 80px;
  }
`;

const EuroIcon = styled(MoneyEuroCircle)`
  width: 125px;
  height: 125px;
  color: rgba(231, 0, 19, 0.9);
  @media screen and (max-width: 1024px) {
    width: 100px;
    height: 100px;
  }
  @media screen and (max-width: 500px) {
    width: 90px;
    height: 90px;
  }
  @media screen and (max-width: 425px) {
    width: 80px;
    height: 80px;
  }
`;

const InfographicsContainer = styled.div`
  display: grid;
  margin-top: 75px;
  width: 100%;
  grid-template-columns: repeat(5, 1fr);
  padding: 0 75px;
  column-gap: 25px;
  @media screen and (max-width: 1440px) {
    padding: 0;
  }
  @media screen and (max-width: 1024px) {
    margin-top: 50px;
    grid-template-columns: repeat(4, 1fr);
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    row-gap: 25px;
    margin-top: 40px;
  }
  @media screen and (max-width: 500px) {
    gap: 18px;
    margin-top: 30px;
  }
  @media screen and (max-width: 425px) {
    gap: 14px;
    margin-top: 20px;
  }
`;

const Text = styled.p`
  color: white;
  line-height: 32px;
  font-size: 22px;
  font-weight: 500;
  @media screen and (max-width: 1024px) {
    line-height: 30px;
    font-size: 20px;
  }
  @media screen and (max-width: 500px) {
    line-height: 28px;
    font-size: 18px;
  }
  @media screen and (max-width: 425px) {
    line-height: 24px;
    font-size: 16px;
  }
`;

const RedMarker = styled.span`
  color: rgba(231, 0, 19, 0.9);
`;

const HeaderText = styled.h1`
  color: white;
  text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 18px;
  @media screen and (max-width: 1024px) {
    margin-bottom: 16px;
    font-size: 30px;
  }
  @media screen and (max-width: 500px) {
    margin-bottom: 14px;
    font-size: 28px;
  }
  @media screen and (max-width: 425px) {
    margin-bottom: 12px;
    font-size: 24px;
  }
`;

const ContentContainer = styled.div`
  padding: 24px 36px;
  background-color: rgba(0, 0, 0, 0.75);
  max-width: 1920px;
  width: 100%;
  height: 100%;
  @media screen and (max-width: 1024px) {
    padding: 20px 32px;
  }
  @media screen and (max-width: 500px) {
    padding: 20px 28px;
  }
  @media screen and (max-width: 425px) {
    padding: 16px 24px;
  }
`;

const FirstBlockContainer = styled.div`
  display: flex;
  position: relative;
  margin-top: -114px;
  justify-content: center;
  align-items: center;
  padding: 179px 65px 0 65px;
  @media screen and (max-width: 1024px) {
    padding: 148px 50px 0 50px;
  }
  @media screen and (max-width: 500px) {
    padding: 123px 30px 0 30px;
  }
  @media screen and (max-width: 425px) {
    padding: 123px 20px 0 20px;
  }
  @media screen and (max-width: 320px) {
    padding: 123px 15px 0 15px;
  }
`;

export default FirstBlock;
