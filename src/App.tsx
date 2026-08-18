import { useState } from "react";
import "./App.css";
import IconInput from "./IconInput";
import SuperHeader from "./SuperHeader";
import Header from "./Header";
import Breadcrumb from "./Breadcrumb";
import styled from "styled-components";
import ProductCard, { type Product } from "./ProductCard";
import SelectInput from "./SelectInput";

const categories = [
  {
    displayName: "Lifestyle",
    slug: "lifestyle",
  },
  {
    displayName: "Jordan",
    slug: "Jordan",
  },
  {
    displayName: "Running",
    slug: "Running",
  },
  {
    displayName: "Baseball",
    slug: "Baseball",
  },
  {
    displayName: "Training & Gym",
    slug: "training-and-gym",
  },
  {
    displayName: "Footcall",
    slug: "football",
  },
  {
    displayName: "Basebcall",
    slug: "basebcall",
  },
  {
    displayName: "Golf",
    slug: "golf",
  },
  {
    displayName: "Tennis",
    slug: "tennis",
  },
  {
    displayName: "Athletics",
    slug: "athletics",
  },
  {
    displayName: "Walking",
    slug: "walking",
  },
];

const products: Product[] = [
  {
    slug: "nikeCourt-tech-challenge-20",
    name: "NikeCourt Tech Challenge 20",
    image: { src: "./IMG-01.png", altText: "" },
    price: "$165",
    onSale: false,
    isNewReleased: true,
  },
  {
    slug: "nike-metcon-5-amp",
    name: "Nike Metcon 5 AMP",
    image: { src: "./IMG-01.png", altText: "" },
    price: "$165",
    onSale: true,
    isNewReleased: false,
  },
  {
    slug: "nike-phantom-vision",
    name: "Nike Phantom Vision",
    image: { src: "./IMG-01.png", altText: "" },
    price: "$165",
    onSale: false,
    isNewReleased: true,
  },
];

//codex
const repeated = Array.from({ length: 20 }, (_, index) => {
  const template = products[index % products.length];
  return { ...template }; // Spreads properties to create a unique object reference
});

function App() {
  return (
    <>
      <FullHeader>
        <SuperHeader />
        <Header />
      </FullHeader>
      <Wrapper>
        <FirstCol>
          <ColumnHeader>
            <Breadcrumb />
          </ColumnHeader>
          <Body>
            <ul>
              {categories.map((category) => (
                <CategoryListItem key={category.slug}>
                  {category.displayName}
                </CategoryListItem>
              ))}
            </ul>
          </Body>
        </FirstCol>
        <SecondCol>
          <ColumnHeader>
            <Title>Running</Title>
            <SelectInput
              defaultValue="First Item"
              options={["First Item", "Second Item", "Very Long Item"]}
            />
          </ColumnHeader>
          <Body>
            <ProductList>
              {repeated.map((product) => (
                <ProductCardWrapper key={product.slug}>
                  <ProductCard product={product} />
                </ProductCardWrapper>
              ))}
            </ProductList>
          </Body>
        </SecondCol>
      </Wrapper>
    </>
  );
}

const FullHeader = styled.div`
  margin: 0 -32px;
`;

const Body = styled.div`
  margin-top: 32px;
`;

const Wrapper = styled.div`
  margin-top: 64px;
  display: flex;
  align-items: baseline;
`;

const FirstCol = styled.div`
  flex: 0 1 248px;
`;

const SecondCol = styled.div`
  flex: 1;
`;

const ColumnHeader = styled.div`
  display: flex;
  height: 40px;
  align-items: center;
`;

const Title = styled.h2`
  margin-right: auto;
  padding-bottom: 0;
`;

const CategoryListItem = styled.li`
  font-size: 1rem;

  &:first-of-type {
    padding-bottom: 8px;
  }

  &:not(:first-of-type) {
    padding: 8px 0;
  }
`;

const ProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
`;

const ProductCardWrapper = styled.div`
  flex: 1 1 270px;
  max-width: 290px;
`;

export default App;
