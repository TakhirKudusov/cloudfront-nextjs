import styled from "styled-components";
import { montserrat } from "@/lib/fonts";
import StyledButton from "@/UI kit/button";
import { SyntheticEvent } from "react";
import { toast } from "react-toastify";

const SecondBlock = () => {
  const handleSubmitForm = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.currentTarget.reset();
    toast.success("Your application has been successfully submitted!");
  };

  return (
    <Wrapper id="contact-us">
      <Container>
        <ContentContainer>
          <HeaderText className={montserrat.className}>contact us</HeaderText>
          <StyledForm onSubmit={handleSubmitForm}>
            <InputContainer>
              <InputTitle className={montserrat.className}>name*</InputTitle>
              <StyledInput
                required
                type="text"
                className={montserrat.className}
              />
            </InputContainer>
            <InputContainer>
              <InputTitle className={montserrat.className}>email*</InputTitle>
              <StyledInput
                required
                type="email"
                className={montserrat.className}
              />
            </InputContainer>
            <InputContainer>
              <InputTitle className={montserrat.className}>
                link to the company website*
              </InputTitle>
              <StyledInput
                required
                type="url"
                className={montserrat.className}
              />
            </InputContainer>
            <InputContainer>
              <InputTitle className={montserrat.className}>
                enter your message*
              </InputTitle>
              <StyledTextArea required className={montserrat.className} />
            </InputContainer>
            <StyledButton>send</StyledButton>
          </StyledForm>
        </ContentContainer>
      </Container>
    </Wrapper>
  );
};

const InputTitle = styled.p`
  color: white;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 14px;
  @media screen and (max-width: 1024px) {
    font-size: 12px;
  }
  @media screen and (max-width: 500px) {
    font-size: 10px;
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 6px;
  width: calc(50% - 18px);
  @media screen and (max-width: 1024px) {
    row-gap: 5px;
    width: calc(50% - 15px);
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const StyledTextArea = styled.textarea`
  display: flex;
  width: 100%;
  color: #ffffff;
  font-weight: 500;
  outline: none;
  border: 2px #e10213 solid;
  background: none;
  border-radius: 10px;
  height: 173px;
  font-size: 20px;
  line-height: 24px;
  padding: 10px 15px;
  resize: none;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  @media screen and (max-width: 1024px) {
    height: 159px;
    font-size: 18px;
    line-height: 22px;
    border-radius: 8px;
    padding: 8px 12px;
  }
  @media screen and (max-width: 500px) {
    height: 120px;
    font-size: 16px;
    line-height: 20px;
    border-radius: 6px;
    padding: 6px 10px;
  }
`;

const StyledInput = styled.input`
  display: flex;
  width: 100%;
  color: #ffffff;
  font-weight: 500;
  outline: none;
  border: 2px #e10213 solid;
  background: none;
  border-radius: 10px;
  height: 52px;
  font-size: 20px;
  line-height: 24px;
  padding: 10px 15px;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  @media screen and (max-width: 1024px) {
    height: 48px;
    font-size: 18px;
    line-height: 22px;
    border-radius: 8px;
    padding: 8px 12px;
  }
  @media screen and (max-width: 500px) {
    height: 46px;
    font-size: 16px;
    line-height: 20px;
    border-radius: 6px;
    padding: 6px 10px;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  column-gap: 36px;
  flex-wrap: wrap;
  max-height: 280px;
  width: 100%;
  @media screen and (max-width: 1024px) {
    row-gap: 20px;
    column-gap: 30px;
  }
  @media screen and (max-width: 768px) {
    max-height: unset;
  }
  @media screen and (max-width: 500px) {
    row-gap: 18px;
  }
`;

const HeaderText = styled.h1`
  text-transform: uppercase;
  font-size: 54px;
  font-weight: 900;
  color: white;
  @media screen and (max-width: 1024px) {
    font-size: 42px;
  }
  @media screen and (max-width: 500px) {
    font-size: 38px;
  }
  @media screen and (max-width: 425px) {
    font-size: 32px;
  }
`;

const ContentContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.75);
  display: flex;
  flex-direction: column;
  width: 1065px;
  row-gap: 24px;
  padding: 24px 36px;
  align-items: center;
  @media screen and (max-width: 1024px) {
    row-gap: 20px;
    padding: 16px 28px;
  }
  @media screen and (max-width: 500px) {
    row-gap: 18px;
    padding: 14px 26px;
  }
  @media screen and (max-width: 425px) {
    row-gap: 16px;
    padding: 14px 24px;
  }
`;

const Container = styled.div`
  display: flex;
  max-width: 1920px;
  row-gap: 24px;
  width: 100%;
  justify-content: center;
  padding: 0 65px;
  @media screen and (max-width: 1024px) {
    row-gap: 20px;
    padding: 0 50px;
  }
  @media screen and (max-width: 500px) {
    padding: 0 30px;
  }
  @media screen and (max-width: 425px) {
    padding: 0 20px;
  }
  @media screen and (max-width: 320px) {
    padding: 0 15px;
  }
`;

const Wrapper = styled.section`
  width: 100%;
  padding-top: 114px;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 1024px) {
    padding-top: 98px;
  }
  @media screen and (max-width: 500px) {
    padding-top: 76px;
  }
  @media screen and (max-width: 425px) {
    padding-top: 66px;
  }
`;

export default SecondBlock;
