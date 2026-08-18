import { Search } from "react-feather";
import type { ComponentPropsWithoutRef, ElementType } from "react";
import styled from "styled-components";

import VisuallyHidden from "./VisuallyHidden";

type IconInput<T extends ElementType> = {
  as?: T;
  label: string;
} & ComponentPropsWithoutRef<T>;

export default function IconInput<T extends ElementType>({
  as,
  label,
  ...inputProps
}: IconInput<T>) {
  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper>
        <Search role="presentation" size={16} aria-hidden={true} />
      </IconWrapper>
      <NativeInput {...inputProps} />
    </Wrapper>
  );
}

const Wrapper = styled.label`
  position: relative;
`;

const NativeInput = styled.input`
  padding: 0px 24px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid currentColor;
  outline-offset: 1px;
  height: 26px;
  font-size: 1rem;
  color: var(--gray-500);
`;

const IconWrapper = styled.span`
  position: absolute;
  top: 0;
  bottom: 0;
  height: 16px;
  margin: auto 0;
`;
