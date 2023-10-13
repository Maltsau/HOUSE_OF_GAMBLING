import styled, { keyframes } from "styled-components";
import { useEffect, useState } from "react";

import { ButtonStyled } from "./UI/common-elements";

const Container = styled.header`
  position: relative;
  padding: 16px 140px 0 140px;
  z-index: 10;
  @media (max-width: 1550px) {
    padding: 10px 3.125vw 0 3.125vw;
  }
  @media (max-width: 1000px) {
    padding: 10px 10px;
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
  content: url("/src/assets/icons/languge-icon.svg");
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

const menuAppear = keyframes`
  from {
    transform: translateY(-100%)
  }
  to {
    transform: translateY(0%)
  }
`;

const MobileMenu = styled.nav`
  position: absolute;
  left: 0;
  right: 0;
  background-color: #110a1d;
  z-index: 10;
  animation: ${menuAppear} 0.5s ease-out;
  transition: all 0.5s;
  height: 100%;
  padding: 30px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

const MobileMenuPageList = styled.ul`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const MobileListItem = styled.li`
  box-sizing: border-box;
  width: 100%;
  padding: 13px 20px;
  border: 2px solid #478bf9;
  border-radius: 30px;
`;

const MobileListLink = styled.a`
  text-decoration: none;
  color: inherit;
`;

const LoginListItem = styled(MobileListItem)`
  border-color: #9dadf2;
`;

const SignupListItem = styled(MobileListItem)`
  border: none;
  background-color: #478bf9;
`;

export default function Header() {
  const [isRussian, setIsRussian] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const linkArr = [
    "About us",
    "Brands",
    "Commissions",
    "News",
    "Contact us",
    "Careers",
  ];
  useEffect(() => {
    isMenuOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [isMenuOpen]);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsMenuOpen(false);
    });
  }, []);
  return (
    <>
      <Container>
        <MenuContainer>
          <InnerNavContainer>
            <EmptyBlock />
            <nav>
              <MenuNavBar>
                {linkArr.map((link) => {
                  return (
                    <MenuNavItem key={link}>
                      <MenuNavLink href="#">{link}</MenuNavLink>
                    </MenuNavItem>
                  );
                })}
              </MenuNavBar>
            </nav>
            <ButtonContainer>
              <ButtonStyled
                isprimary={false}
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
              <ButtonStyled isprimary={false} padding={"14px"} href="#">
                LOG IN
              </ButtonStyled>
              <ButtonStyled isprimary padding={"14px"} href="#">
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
            </MobileButton>
          </MobileMenuContainer>
        </MenuContainer>
      </Container>
      {isMenuOpen ? (
        <MobileMenu>
          <MobileMenuPageList>
            {linkArr.map((link) => {
              return (
                <MobileListItem>
                  <MobileListLink href="#">{link}</MobileListLink>
                </MobileListItem>
              );
            })}
          </MobileMenuPageList>
          <MobileMenuPageList>
            <LoginListItem>LOG IN</LoginListItem>
            <SignupListItem>SIGN UP</SignupListItem>
          </MobileMenuPageList>
        </MobileMenu>
      ) : null}
    </>
  );
}
