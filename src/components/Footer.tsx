import styled from "styled-components";

const Container = styled.footer`
  border-top: 4px solid #9dadf2;
  border-left: 4px solid #9dadf2;
  border-right: 4px solid #9dadf2;
  border-radius: 100px 100px 0 0;
  height: 200px;
`;

export default function Footer() {
  return <Container></Container>;
}
