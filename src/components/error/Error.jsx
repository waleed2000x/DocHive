import Lottie from 'lottie-react'
import Error404 from './Error404.json'
import styled from 'styled-components'

const Parent = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 90vh;
align-items: center;
justify-content: center;
opacity: 0.8;
`
const Heading = styled.h1`
font-size: 70px;
font-weight: 800;
color: white;
text-transform: uppercase;
opacity: 0.5;
`

export default function Error() {
  return (
    <Parent>
    <Heading>Page Not Found</Heading>
        <Lottie animationData={Error404} loop={true} />
    </Parent>
  )
}
