import React from "react";
import WherebnbLogo from "../assets/WherebnbLogo.png";
import { AiOutlineBell, AiOutlineMenu } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { styled } from "styled-components";
import SearchButton from "./SearchButton";

function Header(props) {
    return (
    <>
    <SearchButton>
    <Stheader>
      <img src={WherebnbLogo} alt="" width={100} />
      <StSidebarBtn>당신의 공간을 웨어비앤비하세요</StSidebarBtn>
      <StSearchBtnbox>
        <StSearchText>어디든지</StSearchText>
        <StSearchTextb>언제든 일주일</StSearchTextb>
        <StSearchTextc>게스트 추가</StSearchTextc>
        <StSearchBtn>
          <FaSearch />
        </StSearchBtn>
      </StSearchBtnbox>
      <StTextbox>
        <StText>Wherebnb님 환영합니다.</StText>
        <StEtcBtn>
          <AiOutlineBell />
        </StEtcBtn>
      <StEtcBtn>
        <AiOutlineMenu />
      </StEtcBtn>
      </StTextbox>
    </Stheader>

    </SearchButton>
    </>
  );
}

export default Header;

const Stheader = styled.div`
  height: 80px;
  width: 100%;
  border: 0.7px solid #dedede;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px;
`;

const StSearchBtnbox = styled.button`
  width: 285px;
  height: 42px;
  border-radius: 21px;
  border: none;
  background-color: white;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 190px;
  /* transform: translate(-100px); */
  &:hover{
    box-shadow: 0px 1.5px 5px rgba(0, 0, 0, 0.2);

  }
`;

const StEtcBtn = styled.button`
  width: 35px;
  height: 35px;
  border-radius: 18px;
  border: 1px solid lightgray;
  background-color: white;
  &:hover{
    box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.2);
  }
`;

const StSidebarBtn = styled.button`
    all: unset;
  font-size: 13px;
  width: 205.5px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 21px;
  margin-right: 100px;
  font-weight: 500;
  cursor: pointer;

  &:hover{
    background-color: #f3f3f39c;
  }
`;

const StText = styled.span`
  font-size: 13px;
`;
const StSearchBtn = styled.div`
  background-color: #ff385c;
  width: 30px;
  height: 30px;
  color: white;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
`;
const StSearchText = styled.div`
  padding-inline: 11px;
  font-size: 13px;
`;
const StSearchTextb = styled.div`
  padding-inline: 11px;
  font-size: 13px;
  border-left: 1px solid #e3e3e3;
  border-right: 1px solid #e3e3e3;
`;
const StSearchTextc = styled.div`
  padding-inline: 11px;
  font-size: 13px;
  color: #a8a8a8;
`;
const StTextbox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    width: 280px;
    /* transform: translateX(70px); */
`