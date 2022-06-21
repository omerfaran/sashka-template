import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { theme } from "./Theme.styled";

const typeWriter = keyframes`
to {
    left: 100%;
  }
`;

const blink = keyframes`
to {
    visibility: hidden;
  }
  `;

export const Container = styled.div``;

export const Title = styled.h1`
  font-size: clamp(1rem, 3vw + 1rem, 4rem);
  font-family: "Source Code Pro";
  position: relative;
  width: max-content;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: ${theme.colors.background};
    animation: ${typeWriter} 2s steps(17) forwards;
  }
  &:after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0.115em;
    background-color: black;
    animation: ${typeWriter} 2s steps(17) forwards,
      ${blink} 750ms steps(2, start) infinite;
  }
`;
