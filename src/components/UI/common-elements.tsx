import { ReactNode } from "react";
import styled from "styled-components";

const Container = styled.a<{
  isPrimary?: boolean;
  padding: string;
  paddingMobile?: string;
}>`
  background-color: ${(props) => (props.isPrimary ? "#478BF9" : "transparent")};
  border: ${(props) => (props.isPrimary ? "none" : "2px solid #9DADF2")};
  border-radius: 30px;
  padding: ${(props) => props.padding};
  text-decoration: none;
  color: inherit;
  @media (max-width: 1000px) {
    padding: ${(props) => props.paddingMobile};
  }
`;

function ButtonStyled({
  children,
  isprimary,
  padding,
  paddingmobile,
  href,
  onClick,
}: {
  children: string | ReactNode;
  isprimary: boolean;
  padding: string;
  paddingmobile?: string;
  href?: string;
  onClick?: () => void;
}) {
  return (
    <Container
      isPrimary={isprimary}
      padding={padding}
      href={href}
      onClick={onClick}
      paddingMobile={paddingmobile}
    >
      {children}
    </Container>
  );
}

export { ButtonStyled };
