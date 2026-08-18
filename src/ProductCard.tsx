import styled from "styled-components";

export type Product = {
  slug: string;
  name: string;
  image: {
    src: string;
    altText: string;
  };
  price: string;
  onSale: boolean;
  isNewReleased: boolean;
};

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <CardWrapper>
      <Flag
        style={{
          "--bg-color": product.isNewReleased
            ? "var(--secondary)"
            : "var(--primary)",
        }}
      >
        {product.isNewReleased && <span>Just Released!</span>}
        {product.onSale && <span>Sale</span>}
      </Flag>
      <a href="/">
        <img
          src={product.image.src}
          alt={product.image.altText || product.name}
        />
      </a>

      <CardBody>
        <Row>
          <Col>{product.name}</Col>
          <Col>{product.price}</Col>
        </Row>
      </CardBody>
    </CardWrapper>
  );
}

const Flag = styled.div`
  position: absolute;
  top: 12px;
  right: -4px;
  border-radius: 2px;
  height: 32px;
  background-color: var(--bg-color);
  color: var(--white);
  padding: 8px 12px;
`;

const CardWrapper = styled.article`
  background-color: hsl(0deg 0% 92.5%);
  border-radius: 16px 16px 4px 4px;
  position: relative;

  // &:focus-within {
  //   outline: 2px auto -webkit-focus-ring-color;
  // }

  & img {
    border-radius: 16px 16px 4px 4px;
    width: 100%;
    height: auto;
    display: block;
  }
`;

const CardBody = styled.div`
  padding: 14px 4px 6px;
  font-size: 1rem;
  background-color: var(--white);
`;

const Col = styled.div``;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
`;
