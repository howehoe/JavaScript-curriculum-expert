import { Fragment, useState } from "react"
import styled from "styled-components"

export default function FavoriteIcon() {
  const [isClicked, setClicked] = useState(false)

  const handleClick = () => {
    setClicked(true)
  }

  return (
    <Fragment>
      <ButtonWrapper>
        <button onClick={handleClick}>
          {isClicked ? "Thanks!" : "Click Me!"}
        </button>
      </ButtonWrapper>
    </Fragment>
  )
}

const ButtonWrapper = styled.div`
  width: 71px;
  height: auto;
`
