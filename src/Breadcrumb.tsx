import styled from "styled-components";

export default function Breadcrumb() {
  return (
    <Wrapper aria-label="breadcrumb">
      <BreadcrumbItem>
        <BreadcrumbItemLink href="/">Home</BreadcrumbItemLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbItemLink href="/">Sale</BreadcrumbItemLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbItemLink href="/">Shoes</BreadcrumbItemLink>
      </BreadcrumbItem>
    </Wrapper>
  );
}

const Wrapper = styled.ul`
  list-style: none;
`;

const BreadcrumbItem = styled.li`
  display: inline;
  --padding: 12px;

  &:not(:first-of-type) {
    padding-left: var(--padding);

    &::before {
      content: "";
      display: inline-block;
      height: 0.8rem;
      transform: rotate(20deg);
      border-left: 1px solid currentColor;
      margin-right: var(--padding);
      opacity: 0.35;
    }
  }
`;

const BreadcrumbItemLink = styled.a`
  text-decoration: none;
  color: inherit;

  &:hover {
    text-decoration: revert;
  }
`;
