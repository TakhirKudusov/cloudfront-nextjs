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
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 6px;
  width: calc(50% - 18px);
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
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  column-gap: 36px;
  flex-wrap: wrap;
  max-height: 280px;
  width: 100%;
`;

const HeaderText = styled.h1`
  text-transform: uppercase;
  font-size: 54px;
  font-weight: 900;
  color: white;
`;

const ContentContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.75);
  display: flex;
  flex-direction: column;
  width: 1065px;
  row-gap: 24px;
  padding: 24px 36px;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  max-width: 1920px;
  row-gap: 24px;
  width: 100%;
  justify-content: center;
`;

const Wrapper = styled.section`
  width: 100%;
  margin-top: 50px;
  display: flex;
  justify-content: center;
`;

export default SecondBlock;
