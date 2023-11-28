import styled from "styled-components";

export const UsWorksSection = styled.section`
  margin-bottom: 90px;
  background: #f5f5f5;
`;
export const UsWorkWrapper = styled.div`
  display: flex;
  @media (max-width: 425px) {
    display: block;
  }
`;
export const UsWorkTitle = styled.h1`
  padding-top: 3%;
  margin-bottom: 75px;
  font-size: 42px;
  line-height: calc(50 / 42);
  font-weight: 700;

  @media (max-width: 1199px) {
    margin-bottom: calc(25px + 50 * ((100vw - 320px) / 1600));
    font-size: calc(25px + 17 * ((100vw - 320px) / 1600));
  }
`;
export const UsWorkLeftContainer = styled.div`
  display: block;
  height: 85vh;
  @media (max-width: 425px) {
    height: 100%;
  }
`;
export const UsWorkText = styled.p`
  font-weight: 500;
  font-size: 18px;
  @media (max-width: 1199px) {
    font-size: calc(13px + 3 * ((100vw - 320px) / 1600));
  }
  @media (max-width: 991px) {
    line-height: 100%;
  }
  @media (max-width: 768px) {
    line-height: 90%;
  }
  @media (max-width: 425px) {
    font-size: calc(16px + 2 * ((100vw - 320px) / 1600));
    line-height: 100%;
  }
`;
export const UsWorkImageWrapper = styled.div`
  display: contents;
  margin-right: 4%;
  @media (max-width: 768px) {
    display: block;
  }
  @media (max-width: 425px) {
    display: flex;
    justify-content: space-evenly;
  }
  @media (max-width: 320px) {
    display: flex;
    justify-content: space-between;
  }
`;
export const FirstDoImg = styled.img`
  @media (max-width: 1199px) {
    width: 60%;
    // height: 45%;
  }

  @media (max-width: 991px) {
    width: 75%;
  }
  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
  }
  @media (max-width: 576px) {
    margin:5%
  }
  @media (max-width: 425px) {
    padding-bottom: 10px;
  }
  @media (max-width: 320px) {
    padding-right: 5px;
  }
`;
export const SecondAfterImg = styled.img`
  position: relative;
  left: 55%;
  bottom: 20%;

  @media (max-width: 1199px) {
    width: 60%;
    // height: 45%;
  }

  @media (max-width: 991px) {
    width: 75%;
  }
  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
  }
  @media (max-width: 576px) {
    left: 0%;
    margin:5%;
  }
  @media (max-width: 425px) {
    padding-bottom: 10px;
  }
`;
export const UsWorkRightContainer = styled.div`
  margin-left: 15%;
  @media (max-width: 576px) {
    margin-left: 0%;
  }
  @media (max-width: 425px) {
    padding-top: 10%;
  }
`;
export const UsWorkUl = styled.ul`
  margin-top: 0px;
  list-style-type: none;
  @media (max-width: 425px) {
   padding-left:5px
`;
export const UsWorkGreenTitle = styled.h2`
  margin-top: 0px;
  font-weight: 700;
  color: #25a94d;
  font-size: 24px;
  line-height: calc(29 / 24);
  @media (max-width: 1199px) {
    font-size: calc(15px + 3 * ((100vw - 320px) / 1600));
  }
  @media (max-width: 425px) {
    font-size: calc(20px + 2 * ((100vw - 320px) / 1600));
    line-height: 100%;
  }
`;
export const UsWorkSecondGreenTitle = styled.h3`
  margin-left: 15%;
  font-weight: 700;
  color: #25a94d;
  font-size: 18px;
  line-height: calc(29 / 24);
  @media (max-width: 1199px) {
    font-size: calc(10px + 3 * ((100vw - 320px) / 1600));
  }
`;
export const UsWorkMaterialWrapper = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 991px) {
    padding-left: 10%;
  }
  @media (max-width: 425px) {
    padding-left: 0%;
  }
`;
export const UsWorkMaterialItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 170px;
  padding: 10px;
`;
export const UsWorkMaterialImgFirst = styled.img`
  width: 100px;
  height: 40px;

  @media (max-width: 1199px) {
    width: 60px;
    height: 20px;
  }

  @media (max-width: 991px) {
    width: 60px;
    height: 20px;
  }
  @media (max-width: 768px) {
    width: 60px;
    height: 20px;
  }
  @media (max-width: 576px) {
    width: 50px;
    height: 20px;
  }
`;
export const UsWorkMaterialImgSecond = styled.img`
  width: 100px;
  height: 80px;

  @media (max-width: 1199px) {
    width: 60px;
    height: 60px;
  }

  @media (max-width: 991px) {
    width: 60px;
    height: 60px;
  }
  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
  }
  @media (max-width: 576px) {
    width: 60px;
    height: 60px;
  }
`;
export const UsWorkMaterialImgThree = styled.img`
  width: 100px;
  height: 50px;

  @media (max-width: 1199px) {
    width: 70px;
    height: 50px;
  }

  @media (max-width: 991px) {
    width: 70px;
    height: 30px;
  }
  @media (max-width: 768px) {
    width: 70px;
    height: 30px;
  }
  @media (max-width: 576px) {
    width: 60px;
    height: 30px;
  }
  @media (max-width: 375px) {
    width: 40px;
    height: 30px;
  }
`;

export const UsWorkSubText = styled.p`
  text-align: center;
  font-size: 12px;
  @media (max-width: 1199px) {
    font-size: calc(8px + 3 * ((100vw - 320px) / 1600));
  }
  @media (max-width: 425px) {
    font-size: calc(10px + 2 * ((100vw - 320px) / 1600));
    line-height: 100%;
  }
`;
