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
`;

export default StyledButton;
