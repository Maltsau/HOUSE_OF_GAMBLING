import styled from "styled-components";

const Container = styled.footer`
  border-top: 4px solid #9dadf2;
  border-left: 4px solid #9dadf2;
  border-right: 4px solid #9dadf2;
  border-radius: 100px 100px 0 0;
  padding: 40px 140px 24px 140px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

const LinkContainer = styled.ul`
  display: flex;
  gap: 40px;
  & li:first-child > a {
    text-decoration: underline;
    color: #478bf9;
  }
`;

const MenuNavItem = styled.li`
  font-size: 16px;
`;

const MenuNavLink = styled.a`
  text-decoration: none;
  color: inherit;
`;

const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 14px;
`;

const SocialTitle = styled.h2`
  font-size: 16px;
`;

const IconsContainer = styled.div`
  display: flex;
  gap: 8px;
`;

const IconLink = styled.a``;

const SocialIcon = styled.img`
  width: 32px;
  height: 32px;
  &:hover {
    filter: brightness(150%);
  }
`;

export default function Footer() {
  const linksArr = [
    "Terms & Conditions",
    "Cookies",
    "Contacts",
    "Careers",
    "Brand Guide",
  ];
  const iconArr = [
    "../src/assets/icons/social-twitter.svg",
    "../src/assets/icons/social-facebook.svg",
    "../src/assets/icons/social-instagram.svg",
    "../src/assets/icons/social-linkedin.svg",
    "../src/assets/icons/social-youtube.svg",
    "../src/assets/icons/social-tiktok.svg",
    "../src/assets/icons/social-telegram.svg",
    "../src/assets/icons/social-vk.svg",
  ];
  return (
    <Container>
      <LinkContainer>
        <nav>
          <LinkContainer>
            {linksArr.map((link) => {
              return (
                <MenuNavItem key={link}>
                  <MenuNavLink href="#">{link}</MenuNavLink>
                </MenuNavItem>
              );
            })}
          </LinkContainer>
        </nav>
      </LinkContainer>
      <SocialContainer>
        <SocialTitle>Our social media:</SocialTitle>
        <IconsContainer>
          {iconArr.map((icon) => {
            return (
              <IconLink href="#" key={icon}>
                <SocialIcon src={icon} alt={icon} />
              </IconLink>
            );
          })}
        </IconsContainer>
      </SocialContainer>
    </Container>
  );
}
