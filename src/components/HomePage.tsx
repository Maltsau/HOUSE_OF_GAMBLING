import styled, { keyframes } from "styled-components";
import { ButtonStyled } from "./UI/common-elements";
import React from "react";

import column1 from "../assets/images/Line_Vertical_1.png";
import column2 from "../assets/images/Line_Vertical_2.png";
import column3 from "../assets/images/Line_Vertical_3.png";
import row1 from "../assets/images/Line_Horisontal_1.png";
import row2 from "../assets/images/Line_Horisontal_2.png";
import row3 from "../assets/images/Line_Horisontal_3.png";

const Container = styled.section`
  padding: 0 140px 60px 140px;
  height: 1020px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1650px) {
    padding: 0 0 49px 0;
  }
  @media (max-width: 1000px) {
    height: auto;
    flex-direction: column;
    overflow-x: hidden;
  }
`;

const HouseBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-weight: 600;
  @media (max-width: 1650px) {
    padding-left: 3.125vw;
  }
  @media (max-width: 1000px) {
    padding: 70px 10px 32px 10px;
    align-items: center;
  }
`;

const HouseTitle = styled.h1`
  font-size: 4.8vw;
  line-height: 1;
  @media (min-width: 2000px) {
    font-size: 96px;
  }
  @media (max-width: 1000px) {
    font-size: 46px;
  }
`;

const HouseTitleLower = styled(HouseTitle)`
  color: #478bf9;
`;

const HouseSubtitle = styled.h2`
  margin-top: 24px;
  font-size: 1.6vw;
  opacity: 0.6;
  text-align: left;
  @media (min-width: 2000px) {
    font-size: 32px;
  }
  @media (max-width: 1000px) {
    font-size: 20px;
    text-align: center;
  }
`;

const ButtonContainer = styled.div`
  padding-top: 48px;
  @media (max-width: 1000px) {
    padding-top: 24px;
  }
`;

const ButtonDescription = styled.span`
  font-size: 24px;
  @media (max-width: 1000px) {
    font-size: 18px;
  }
`;

const AnimationBlock = styled.div`
  height: 100%;
  display: flex;
  gap: 0.8vw;
  overflow: hidden;
  @media (max-width: 1000px) {
    display: none;
  }
`;

const AnimationColumn = styled.div`
  width: 5vw;
`;

const verticalEndlessLine = keyframes`
  from {
    transform: translateY(-100%)
  }
  to {
    transform: translateY(0%)
  }
`;

const verticalEndlessLineReverse = keyframes`
  from {
    transform: translateY(0%)
  }
  to {
    transform: translateY(-100%)
  }
`;

const horisontalEndlessLine = keyframes`
  from {
    transform: translateX(-100%)
  }
  to {
    transform: translateX(0%)
  }
`;

const horisontalEndlessLineReverse = keyframes`
  from {
    transform: translateX(0%)
  }
  to {
    transform: translateX(-100%)
  }
`;

const MiddleLine = styled.img`
  width: 5vw;
  animation: ${verticalEndlessLine} 6s linear infinite;
`;

const LateralLine = styled.img`
  width: 5vw;
  animation: ${verticalEndlessLineReverse} 6s linear infinite;
`;

const AnimationBlockModal = styled.div`
  display: none;
  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`;

const AnimationLineModal = styled.div`
  display: flex;
`;

const LateralAnimationImage = styled.img`
  height: 10vw;
  animation: ${horisontalEndlessLine} 6s linear infinite;
  @media (max-width: 700px) {
    height: 15.625vw;
  }
`;

const MiddleAnimationImage = styled(LateralAnimationImage)`
  animation: ${horisontalEndlessLineReverse} 6s linear infinite;
`;

const BlogBlock = styled.div`
  @media (max-width: 1650px) {
    padding-right: 3.125vw;
  }
  @media (max-width: 1000px) {
    width: auto;
    padding: 33px 10px 70px 10px;
  }
`;

const BlogTitle = styled.h2`
  font-size: 40px;
  font-weight: 600;
  @media (min-width: 2000px) {
    font-size: 40px;
  }
  @media (max-width: 1000px) {
    font-size: 32px;
  }
`;

const BlogWrapper = styled.div`
  padding-right: 8px;
  background-color: #2a2b2f;
  border: 3px solid #478bf9;
  border-radius: 100px;
  @media (max-width: 1000px) {
    padding-right: 4px;
    border-width: 2px;
    border-radius: 50px;
  }
`;

const BlogContainer = styled.div`
  overflow-y: scroll;
  width: 531px;
  height: 595px;
  padding: 24px;
  border-radius: 100px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    margin: 96px 0 96px 0;
    background-color: #4c4c5b;
    border-radius: 8px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background: #478bf9;
  }
  @media (max-width: 1700px) {
    width: 31vw;
  }
  @media (max-width: 1000px) {
    border-radius: 50px;
    gap: 10px;
    width: auto;
    height: 300px;
    padding: 10px 6px 10px 10px;
    &::-webkit-scrollbar {
      width: 4px;
    }
    &::-webkit-scrollbar-track {
      margin: 60px 0 60px 0;
    }
  }
  @media (max-width: 500px) {
    height: 421px;
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
  @media (max-width: 1000px) {
    padding: 15px 35px;
    border-radius: 50px;
  }
`;

const BlogContentActive = styled(BlogContent)`
  background-color: #478bf9;
`;

const BlogArticle = styled.p`
  font-size: 1.2vw;
  text-align: left;
  @media (min-width: 2000px) {
    font-size: 24px;
  }
  @media (max-width: 1300px) {
    font-size: 16px;
    line-height: 1.2;
  }
`;

const BlogDate = styled.p`
  margin-top: 14px;
  font-family: "Futura PT";
  font-size: 0.7vw;
  opacity: 0.6;
  text-align: left;
  @media (min-width: 2000px) {
    font-size: 14px;
  }
  @media (max-width: 1000px) {
    font-size: 10px;
    margin-top: 2px;
  }
`;

export default function HomePage() {
  const articlesArr = new Array(5).fill(
    "Payment methods: Skrill, Neteller, webmoney, Bank transfer"
  );
  const setAnimation = (itt: number, element: React.JSX.Element) => {
    return new Array(itt).fill(1).map(() => element);
  };
  return (
    <Container>
      <HouseBlock>
        <HouseTitle>HOUSE OF</HouseTitle>
        <HouseTitleLower>GAMBLING</HouseTitleLower>
        <HouseSubtitle>Raise your ROI with direct advertiser</HouseSubtitle>
        <ButtonContainer>
          <ButtonStyled
            isprimary
            padding="20px 72px"
            paddingmobile="15px 56px"
            href="#"
          >
            <ButtonDescription>Become a Partner</ButtonDescription>
          </ButtonStyled>
        </ButtonContainer>
      </HouseBlock>
      <AnimationBlock>
        <AnimationColumn>
          {setAnimation(2, <LateralLine src={column1} alt="column1" />)}
        </AnimationColumn>
        <AnimationColumn>
          {setAnimation(2, <MiddleLine src={column2} alt="column2" />)}
        </AnimationColumn>
        <AnimationColumn>
          {setAnimation(2, <LateralLine src={column3} alt="column3" />)}
        </AnimationColumn>
      </AnimationBlock>
      <AnimationBlockModal>
        <AnimationLineModal>
          {setAnimation(4, <LateralAnimationImage src={row1} alt="row1" />)}
        </AnimationLineModal>
        <AnimationLineModal>
          {setAnimation(4, <MiddleAnimationImage src={row2} alt="row2" />)}
        </AnimationLineModal>
        <AnimationLineModal>
          {setAnimation(4, <LateralAnimationImage src={row3} alt="row3" />)}
        </AnimationLineModal>
      </AnimationBlockModal>
      <BlogBlock>
        <BlogTitle>BLOG</BlogTitle>
        <BlogWrapper>
          <BlogContainer>
            {articlesArr.map((article, pos) => {
              return pos === 0 ? (
                <BlogLink href="/" key={`article${pos}`}>
                  <BlogContentActive>
                    <BlogArticle>{article}</BlogArticle>
                    <BlogDate>10.02.2023</BlogDate>
                  </BlogContentActive>
                </BlogLink>
              ) : (
                <BlogLink key={`article${pos}`}>
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
