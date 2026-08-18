import type { PropsWithChildren } from "react";
import styled from "styled-components";

export default function Button({ children }: PropsWithChildren) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.button`
  border: none;
  border-radius: 4px;
  background-color: transparent;
  color: var(--gray-300);
`;
