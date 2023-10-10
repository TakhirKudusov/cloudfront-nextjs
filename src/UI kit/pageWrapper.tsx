"use client";

import styled from "styled-components";
import { FC, PropsWithChildren } from "react";

const PageWrapper: FC<PropsWithChildren<any>> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  display: flex;
  align-content: center;
  width: 100%;
  flex-direction: column;
  z-index: 1;
`;

export default PageWrapper;
