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
          <InfoItemContainer>
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
`;

const InfoText = styled.p`
  color: white;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 18px;
  text-align: center;
`;

const TimeIcon = styled(Schedule)`
  width: 125px;
  height: 125px;
  color: rgba(231, 0, 19, 0.9);
`;

const ArrowcircleIcon = styled(ArrowCircleUpOutline)`
  width: 125px;
  height: 125px;
  color: rgba(231, 0, 19, 0.9);
`;

const TargetIcon = styled(TargetArrow)`
  width: 125px;
  height: 125px;
  color: rgba(231, 0, 19, 0.9);
`;

const CheckmarkIcon = styled(CheckmarkCircle)`
  width: 125px;
  height: 125px;
  color: rgba(231, 0, 19, 0.9);
`;

const EuroIcon = styled(MoneyEuroCircle)`
  width: 125px;
  height: 125px;
  color: rgba(231, 0, 19, 0.9);
`;

const InfographicsContainer = styled.div`
  display: grid;
  margin-top: 75px;
  width: 100%;
  grid-template-columns: repeat(5, 1fr);
  padding: 0 75px;
  column-gap: 50px;
`;

const Text = styled.p`
  color: white;
  line-height: 32px;
  font-size: 22px;
  font-weight: 500;
`;

const RedMarker = styled.span`
  color: rgba(231, 0, 19, 0.9);
`;

const HeaderText = styled.h1`
  color: white;
  text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 18px;
`;

const ContentContainer = styled.div`
  padding: 24px 36px;
  background-color: rgba(0, 0, 0, 0.75);
  max-width: 1920px;
  width: 100%;
  height: 100%;
`;

const FirstBlockContainer = styled.div`
  display: flex;
  position: relative;
  margin-top: -114px;
  justify-content: center;
  align-items: center;
  padding: 179px 65px 65px;
`;

export default FirstBlock;
