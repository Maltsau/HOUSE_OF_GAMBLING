import styled from "styled-components";
import { useState } from "react";

import { ButtonStyled } from "./UI/common-elements";

const Container = styled.header`
  position: relative;
  padding: 16px 140px 0 140px;
  @media (max-width: 1550px) {
    padding: 10px 3.125vw 0 3.125vw;
  }
`;

const MenuContainer = styled.div`
  padding: 0 48px;
  border: 4px solid #478bf9;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1350px) {
    border: 2px solid #478bf9;
    justify-content: flex-end;
    padding: 10px 14px;
  }
`;

const InnerNavContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 1350px) {
    display: none;
  }
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

const MobileMenuContainer = styled.div`
  display: none;
  @media (max-width: 1350px) {
    display: flex;
    align-items: center;
    gap: 4px;
  }
`;

const MobileButton = styled.div`
  width: 36px;
  height: 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3px;
`;

const MobileLanguageButton = styled(MobileButton)`
  border: 2px solid #9dadf2;
  border-radius: 20px;
`;

const MobileLanguageIcon = styled.img`
  width: 20px;
  height: 20px;
`;

const BurgerLine = styled.div`
  height: 2px;
  width: 21px;
  border-radius: 2px;
  background-color: white;
`;

const MobileMenu = styled.div`
  position: absolute;
`;

export default function Header() {
  const [isRussian, setIsRussian] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
            <ButtonStyled
              isPrimary={false}
              padding={"14px"}
              href="#"
              onClick={() => {
                setIsRussian(!isRussian);
              }}
            >
              <LanguageContainer>
                <LanguageIcon />
                {isRussian ? "RU" : "EN"}
              </LanguageContainer>
            </ButtonStyled>
            <ButtonStyled isPrimary={false} padding={"14px"} href="#">
              LOG IN
            </ButtonStyled>
            <ButtonStyled isPrimary padding={"14px"} href="#">
              SIGN UP
            </ButtonStyled>
          </ButtonContainer>
        </InnerNavContainer>
        <MobileMenuContainer>
          <MobileLanguageButton>
            <MobileLanguageIcon
              src="/src/assets/icons/languge-icon.svg"
              alt="language-icon"
            />
          </MobileLanguageButton>
          <MobileButton
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            {isMenuOpen ? (
              <img src="/src/assets/icons/close-icon.svg" alt="close-icon" />
            ) : (
              <>
                <BurgerLine />
                <BurgerLine />
                <BurgerLine />
              </>
            )}
            {/* <BurgerLine />
            <BurgerLine />
            <BurgerLine /> */}
          </MobileButton>
        </MobileMenuContainer>
      </MenuContainer>
      {isMenuOpen ? <MobileMenu>MENU</MobileMenu> : null}
    </Container>
  );
}
