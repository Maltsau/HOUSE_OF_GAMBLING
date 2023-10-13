import styled from "styled-components";

const Container = styled.footer`
  border-top: 4px solid #9dadf2;
  border-left: 4px solid #9dadf2;
  border-right: 4px solid #9dadf2;
  border-radius: 50px 50px 0 0;
  padding: 40px 140px 24px 140px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  @media (max-width: 1250px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 20px 20px 30px 20px;
    border-width: 2px;
  }
  @media (max-width: 400px) {
    align-items: flex-start;
  }
`;

const LinkContainer = styled.ul`
  display: flex;
  gap: 40px;
  @media (max-width: 750px) {
    flex-direction: column;
    align-items: flex-start;
    line-height: 1.2;
    gap: 2px;
  }
`;

const FooterItemTitle = styled.li`
  font-size: 16px;
  @media (max-width: 1000px) {
    font-size: 14px;
  }
`;

const MenuNavLink = styled.a`
  text-decoration: none;
  color: inherit;
  &:hover {
    text-decoration: underline;
    color: #478bf9;
  }
`;

const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 14px;
  @media (max-width: 1250px) {
    align-items: flex-start;
  }
`;

const SocialTitle = styled.h2`
  font-size: 16px;
  @media (max-width: 1000px) {
    font-size: 14px;
  }
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
  @media (max-width: 400px) {
    width: 27px;
    height: 27px;
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
                <FooterItemTitle key={link}>
                  <MenuNavLink href="#">{link}</MenuNavLink>
                </FooterItemTitle>
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
