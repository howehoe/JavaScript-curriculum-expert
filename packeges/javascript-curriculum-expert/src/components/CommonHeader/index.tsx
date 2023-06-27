import { Fragment } from "react"
import HomeButton from "./IconComponents/HomeButton"
import { styled } from "styled-components"
import SearchIcon from "./IconComponents/SearchIcon"
import FavoriteIcon from "./IconComponents/FavoriteIcon"

export default function CommonHeader() {
  return (
    <Fragment>
      <Header>
        <ContentWrapper>
          <HomeButton></HomeButton>
          <IconWrapper>
            <SearchIcon></SearchIcon>
            <FavoriteIcon></FavoriteIcon>
          </IconWrapper>
        </ContentWrapper>
      </Header>
    </Fragment>
  )
}

const Header = styled.header`
  width: 100%;
  margin-top: 20px;
  height: 70px;
`

const ContentWrapper = styled.div`
  width: 100%;
  height: 65px;
  display: flex;
  justify-content: space-between;
`

const IconWrapper = styled.div`
  width: 100px;
  display: flex;
  justify-content: space-between;
`