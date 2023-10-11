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
  text-align: left;
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

const AnimationColumn = styled.div`
  width: 100px;
`;

const BlogBlock = styled.div``;

const BlogTitle = styled.h2`
  font-size: 42px;
  font-weight: 600;
`;

const BlogWrapper = styled.div`
  padding-right: 8px;
  border: 3px solid #478bf9;
  border-radius: 100px;
`;

const BlogContainer = styled.div`
  overflow-y: scroll;
  width: 531px;
  height: 595px;
  padding: 24px;
  background-color: #2a2b2f;
  border-radius: 100px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  &::-webkit-scrollbar {
    width: 8px;
    border-right: 8px solid transparent;
  }
  &::-webkit-scrollbar-track {
    margin: 96px 0 96px 0;
    background-color: #4c4c5b;
    border-radius: 10px;
    border-right: 8px solid transparent;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background: #478bf9;
  }
`;

const BlogLink = styled.a`
  border-radius: 30px;
  text-decoration: none;
  color: inherit;
`;

const BlogContent = styled.div`
  padding: 16px 64px;
  background-color: #1e1231;
  border-radius: 100px;
`;

const BlogContentActive = styled(BlogContent)`
  background-color: #478bf9;
`;

const BlogArticle = styled.p`
  font-size: 24px;
  text-align: left;
`;

const BlogDate = styled.p`
  margin-top: 14px;
  font-family: "Futura PT";
  font-size: 14px;
  opacity: 0.6;
  text-align: left;
`;

export default function HomePage() {
  const articlesArr = new Array(5).fill(
    "Payment methods: Skrill, Neteller, webmoney, Bank transfer"
  );
  return (
    <Container>
      <HouseBlock>
        <HouseTitle>HOUSE OF</HouseTitle>
        <HouseTitleLower>GAMBLING</HouseTitleLower>
        <HouseSubtitle>Raise your ROI with direct advertiser</HouseSubtitle>
        <ButtonContainer>
          <ButtonStyled isPrimary padding={"20px 72px"} href="#">
            <ButtonDescription>Become a Partner</ButtonDescription>
          </ButtonStyled>
        </ButtonContainer>
      </HouseBlock>
      <AnimationBlock>
        <AnimationColumn></AnimationColumn>
        <AnimationColumn></AnimationColumn>
        <AnimationColumn></AnimationColumn>
      </AnimationBlock>
      <BlogBlock>
        <BlogTitle>BLOG</BlogTitle>
        <BlogWrapper>
          <BlogContainer>
            {articlesArr.map((article, pos) => {
              return pos === 0 ? (
                <BlogLink href="#">
                  <BlogContentActive>
                    <BlogArticle>{article}</BlogArticle>
                    <BlogDate>10.02.2023</BlogDate>
                  </BlogContentActive>
                </BlogLink>
              ) : (
                <BlogLink>
                  <BlogContent>
                    <BlogArticle>{article}</BlogArticle>
                    <BlogDate>10.02.2023</BlogDate>
                  </BlogContent>
                </BlogLink>
              );
            })}
          </BlogContainer>
        </BlogWrapper>
      </BlogBlock>
    </Container>
  );
}
