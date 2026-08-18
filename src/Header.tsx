import styled from "styled-components";

const menus = [
  { url: "/sale", displayName: "Sale" },
  { url: "/new-release", displayName: "New Releases" },
  { url: "/men", displayName: "Men" },
  { url: "/women", displayName: "Women" },
  { url: "/kids", displayName: "Kids" },
  { url: "/collections", displayName: "Collections" },
];

export default function Header() {
  return (
    <Wrapper>
      <Logo>Sole&Ankle</Logo>
      <Nav>
        <MenuWrapper>
          {menus.map((menu) => (
            <MenuItem key={menu.url}>
              <a href={menu.url}>{menu.displayName}</a>
            </MenuItem>
          ))}
        </MenuWrapper>
      </Nav>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  background-color: var(--white);
  align-items: center;
  height: 72px;
  border-bottom: 1px solid var(--gray-300);
  padding: 0 32px;
`;

const Nav = styled.nav`
  flex: 1;
  display: flex;
  align-items: baseline;
  justify-content: center;
`;

const Logo = styled.div`
  font-weight: 800;
  font-size: 1.5rem;
`;

const MenuWrapper = styled.ul`
  list-style: none;
  display: flex;
  gap: 48px;
`;

const MenuItem = styled.li`
  & a {
    text-decoration: none;
    color: inherit;
    text-transform: uppercase;

    &:hover {
      text-decoration: revert;
    }
  }
`;
