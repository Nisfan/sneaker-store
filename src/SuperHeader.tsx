import styled from "styled-components";

import IconInput from "./IconInput";
import Button from "./Button";
import VisuallyHidden from "./VisuallyHidden";

export default function SuperHeader() {
  const cartItemsCount = 12;
  return (
    <Wrapper>
      <p>Free shipping on domestic orders over $75!</p>

      <ActionsWrapper>
        <IconInput label="Search" as="input" placeholder="Search..." />
        <Button>Help</Button>

        <CartIconWrapper href="/">
          <VisuallyHidden>{`Cart Items Count ${cartItemsCount}`}</VisuallyHidden>
          <svg aria-hidden="true" role="presentation" height={24} width={24}>
            <use href="./icons.svg#cart-icon" />
          </svg>
          <CartItemsCount>{cartItemsCount}</CartItemsCount>
        </CartIconWrapper>
      </ActionsWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 32px;
  background-color: var(--gray-900);
  color: var(--white);
`;

const ActionsWrapper = styled.div`
  display: flex;
  margin-left: auto;
  gap: 24px;
`;

const CartIconWrapper = styled.a`
  position: relative;
`;

const CartItemsCount = styled.div`
  position: absolute;
  top: -5px;
  right: -12px;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  border: 1px solid var(--gray-900);
  color: var(--primary);
  background-color: var(--white);
  font-size: 0.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
`;
