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
  isPrimary,
  padding,
  paddingMobile,
  href,
  onClick,
}: {
  children: string | ReactNode;
  isPrimary: boolean;
  padding: string;
  paddingMobile?: string;
  href?: string;
  onClick?: () => void;
}) {
  return (
    <Container
      isPrimary={isPrimary}
      padding={padding}
      href={href}
      onClick={onClick}
      paddingMobile={paddingMobile}
    >
      {children}
    </Container>
  );
}

export { ButtonStyled };
