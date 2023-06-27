import { styled } from "styled-components"

export default function SearchIcon() {
  return (
    <IconWrapper>
      <svg viewBox="0 0 27 27" height="23" width="23">
        <path
          d="M11.56,3.43a8.26,8.26,0,0,0,0,16.52,8.18,8.18,0,0,0,5-1.72l4.7,4.7a1.1,1.1,0,0,0,1.56,0,1.09,1.09,0,0,0,0-1.55l0,0-4.7-4.7a8.18,8.18,0,0,0,1.72-5A8.28,8.28,0,0,0,11.56,3.43Zm0,2.2A6.06,6.06,0,1,1,5.5,11.69,6,6,0,0,1,11.56,5.63Z"
          fill="currentColor"
        ></path>
      </svg>
    </IconWrapper>
  )
}

const IconWrapper = styled.a`
`