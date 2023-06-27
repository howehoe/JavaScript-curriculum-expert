import { useRouter } from "next/router"
import { Fragment } from "react"
import { styled } from "styled-components"

export default function HomeButton() {
  const router = useRouter()
  const handleButtonClick = () => {
    router.push("../../../../introduction/")
  }

  return (
    <Fragment>
      <ButtonWrapper>
        <button onClick={handleButtonClick}>HOMEに戻る</button>
      </ButtonWrapper>
    </Fragment>
  )
}

const ButtonWrapper = styled.div`
  width: 96px;
  height: auto;
`
