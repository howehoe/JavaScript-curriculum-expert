import { Fragment } from "react"
import HomeButton from "./IconComponents/HomeButton"
import { styled } from "styled-components"
import SearchIcon from "./IconComponents/SearchIcon"
import FavoriteIcon from "./IconComponents/FavoriteIcon"

export default function CommonHeader() {
  return (
    <Root>
      <Header>
        <ContentWrapper>
          <HomeButton></HomeButton>
          <IconWrapper>
            <SearchIcon></SearchIcon>
            <FavoriteIcon></FavoriteIcon>
          </IconWrapper>
        </ContentWrapper>
      </Header>
    </Root>
  )
}

const Root = styled.div`
  max-width: 860px;
  margin: 0 auto;
  padding-inline: 30px;
`
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
