import { FC, PropsWithChildren } from "react";
import styled from "styled-components";
import { montserrat } from "@/lib/fonts";

const StyledButton: FC<PropsWithChildren<any>> = ({ children }) => {
  return <Btn className={montserrat.className}>{children}</Btn>;
};

const Btn = styled.button`
  outline: none;
  border: 2px #e10213 solid;
  background: none;
  height: fit-content;
  padding: 15px 20px;
  color: white;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 18px;
  cursor: pointer;
  transition: 300ms linear;
  border-radius: 10px;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.6;
  }
  @media screen and (max-width: 1024px) {
    font-size: 16px;
    border-radius: 8px;
    padding: 13px 18px;
  }
  @media screen and (max-width: 500px) {
    font-size: 14px;
    border-radius: 6px;
    padding: 10px 15px;
  }
  @media screen and (max-width: 425px) {
    font-size: 12px;
    border-radius: 4px;
    padding: 8px 13px;
  }
`;

export default StyledButton;
