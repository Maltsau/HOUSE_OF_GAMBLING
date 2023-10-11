import { ReactNode } from "react";
import styled from "styled-components";

const Container = styled.a<{ isPrimary?: boolean; padding: string }>`
  background-color: ${(props) => (props.isPrimary ? "#478BF9" : "transparent")};
  border: ${(props) => (props.isPrimary ? "none" : "2px solid #9DADF2")};
  border-radius: 30px;
  padding: ${(props) => props.padding};
  text-decoration: none;
  color: inherit;
`;

function ButtonStyled({
  children,
  isPrimary,
  padding,
  href,
  onClick,
}: {
  children: string | ReactNode;
  isPrimary: boolean;
  padding: string;
  href?: string;
  onClick?: () => void;
}) {
  return (
    <Container
      isPrimary={isPrimary}
      padding={padding}
      href={href}
      onClick={onClick}
    >
      {children}
    </Container>
  );
}

export { ButtonStyled };
