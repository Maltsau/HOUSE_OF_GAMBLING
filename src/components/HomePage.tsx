import styled from "styled-components";
import { ButtonStyled } from "./UI/common-elements";

const Container = styled.section`
  height: 960px;
  padding: 0 140px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HouseBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-weight: 600;
`;

const HouseTitle = styled.h1`
  font-size: 96px;
  line-height: 1;
`;

const HouseTitleLower = styled(HouseTitle)`
  color: #478bf9;
`;

const HouseSubtitle = styled.h2`
  margin-top: 24px;
  font-size: 32px;
  opacity: 0.6;
`;

const ButtonContainer = styled.div`
  padding-top: 48px;
`;

const ButtonDescription = styled.span`
  font-size: 24px;
`;

const AnimationBlock = styled.div`
  height: 100%;
  display: flex;
  gap: 16px;
`;

const AnimationColumn = styled.div``;

const BlogBlock = styled.div``;

export default function HomePage() {
  return (
    <Container>
      <HouseBlock>
        <HouseTitle>HOUSE OF</HouseTitle>
        <HouseTitleLower>GAMBLING</HouseTitleLower>
        <HouseSubtitle>Raise your ROI with direct advertiser</HouseSubtitle>
        <ButtonContainer>
          <ButtonStyled isPrimary padding={"20px 72px"}>
            <ButtonDescription>Become a Partner</ButtonDescription>
          </ButtonStyled>
        </ButtonContainer>
      </HouseBlock>
      <AnimationBlock>
        <AnimationColumn></AnimationColumn>
        <AnimationColumn></AnimationColumn>
        <AnimationColumn></AnimationColumn>
      </AnimationBlock>
      <BlogBlock></BlogBlock>
    </Container>
  );
}
