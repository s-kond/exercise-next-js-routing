import styled from "styled-components";
import Link from "next/Link";
import { useRouter } from "next/router";

export default function Header() {
  const { pathname } = useRouter();
  return (
    <StyledHeader>
      <StyledNav>
        <Link href="/" passHref>
          <Anchor active={pathname === "/"}>Home</Anchor>
        </Link>
        <Link href="/product" passHref>
          <Anchor active={pathname === "/product"}>Product</Anchor>
        </Link>
        <Link href="/team" passHref>
          <Anchor active={pathname === "/team"}>Team</Anchor>
        </Link>
        <Link href="/account" passHref>
          <Anchor active={pathname === "/account"}>Account</Anchor>
        </Link>
      </StyledNav>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background: DarkSlateGray;
  padding: 1.5rem;
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
`;

const Anchor = styled.a`
  text-decoration: ${({ active }) => (active ? "underline" : "none")};
  text-underline-offset: 8px;
  color: white;
`;
