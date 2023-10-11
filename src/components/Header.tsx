import styled from "styled-components";

import { ButtonStyled } from "./UI/common-elements";

const Container = styled.header`
  padding: 16px 140px 0 140px;
`;

const MenuContainer = styled.div`
  padding: 0 48px;
  border: 4px solid #478bf9;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InnerNavContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const EmptyBlock = styled.div`
  width: 267.5px;
`;

const MenuNavBar = styled.ul`
  padding: 38px 0;
  display: flex;
  gap: 32px;
`;

const MenuNavItem = styled.li`
  font-size: 16px;
`;

const MenuNavLink = styled.a`
  text-decoration: none;
  color: inherit;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
`;

const LanguageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const LanguageIcon = styled.img`
  width: 18px;
  height: 18px;
  content: url("../src/assets/icons/languge-icon.svg");
`;

export default function Header() {
  return (
    <Container>
      <MenuContainer>
        <InnerNavContainer>
          <EmptyBlock />
          <nav>
            <MenuNavBar>
              <MenuNavItem>
                <MenuNavLink href="#">About us</MenuNavLink>
              </MenuNavItem>
              <MenuNavItem>
                <MenuNavLink href="#">Brands</MenuNavLink>
              </MenuNavItem>
              <MenuNavItem>
                <MenuNavLink href="#">Commissions</MenuNavLink>
              </MenuNavItem>
              <MenuNavItem>
                <MenuNavLink href="#">News</MenuNavLink>
              </MenuNavItem>
              <MenuNavItem>
                <MenuNavLink href="#">Contact us</MenuNavLink>
              </MenuNavItem>
              <MenuNavItem>
                <MenuNavLink href="#">Careers</MenuNavLink>
              </MenuNavItem>
            </MenuNavBar>
          </nav>
          <ButtonContainer>
            <ButtonStyled isPrimary={false} padding={"14px"}>
              <LanguageContainer>
                <LanguageIcon />
                EN
              </LanguageContainer>
            </ButtonStyled>
            <ButtonStyled isPrimary={false} padding={"14px"}>
              LOG IN
            </ButtonStyled>
            <ButtonStyled isPrimary padding={"14px"}>
              SIGN UP
            </ButtonStyled>
          </ButtonContainer>
        </InnerNavContainer>
      </MenuContainer>
    </Container>
  );
}
