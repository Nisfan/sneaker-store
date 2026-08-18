import { useState, type ComponentPropsWithoutRef } from "react";
import styled from "styled-components";

type Options = {
  label: string;
  value?: string;
};

type SelectInputProps = {
  options: Options[] | string[];
} & ComponentPropsWithoutRef<"select">;

export default function SelectInput({
  options,
  defaultValue,
  value,
  onChange,
}: SelectInputProps) {
  const [innerValue, setInnerValue] = useState<string>();

  const valueToUse = innerValue || value || defaultValue;

  const optionsToUse = options.map((option) => {
    if (typeof option === "string") {
      return {
        label: option,
        value: option,
      };
    } else {
      return {
        label: option.label,
        value: option.value ?? option.label,
      };
    }
  });

  const option = optionsToUse.find((option) => option.value === valueToUse);

  return (
    <Wrapper>
      <NativeSelect
        value={valueToUse}
        onChange={(e) => {
          setInnerValue(e.currentTarget.value);
          if (onChange) onChange(e);
        }}
      >
        {optionsToUse.map((option) => (
          <option key={option.value} value={option.value || option.label}>
            {option.label}
          </option>
        ))}
      </NativeSelect>
      <DisplayTextWrapper>
        <DisplayText>{option?.label}</DisplayText>
        <IconWrapper>
          <svg height={16} width={16}>
            <use href="/icons.svg#chevron-down" />
          </svg>
        </IconWrapper>
      </DisplayTextWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  background-color: var(--gray-300);
  border-radius: 8px;

  // &:focus-within {
  //   border: 1px dotted currentColor;
  //   outline: 2px auto -webkit-focus-ring-color;
  // }
`;

const NativeSelect = styled.select`
  appearance: none;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0;
`;

const DisplayTextWrapper = styled.div`
  padding: 12px 16px;

  ${NativeSelect}:focus + & {
    border: 1px dotted currentColor;
    outline: 2px auto -webkit-focus-ring-color;
  }
`;

const DisplayText = styled.output`
  padding-right: 36px;
  color: var(--gray-900);
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 16px;
  height: 16px;
  margin: auto;
  pointer-events: none;
`;
