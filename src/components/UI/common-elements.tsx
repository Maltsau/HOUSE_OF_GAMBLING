import { ReactNode } from "react";
import styled from "styled-components";

const Container = styled.a<{ isPrimary?: boolean; padding: string }>`
  background-color: ${(props) => (props.isPrimary ? "#478BF9" : "transparent")};
  border: ${(props) => (props.isPrimary ? "none" : "2px solid #9DADF2")};
  border-radius: 30px;
  padding: ${(props) => props.padding};
`;

function ButtonStyled({
  children,
  isPrimary,
  padding,
}: {
  children: string | ReactNode;
  isPrimary: boolean;
  padding: string;
}) {
  return (
    <Container isPrimary={isPrimary} padding={padding}>
      {children}
    </Container>
  );
}

export { ButtonStyled };
