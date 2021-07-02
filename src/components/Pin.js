import React from 'react'
import styled from 'styled-components'


const Pin = (props) => {
    let {urls} = props;
    return (
        <Wrapper>
            <Container>
                <img src = {urls?.regular} alt="pin" />
            </Container>
        </Wrapper>
    )
}

export default Pin

const Wrapper = styled.div`
display: inline-flex;
padding: 8px;
`
const Container = styled.div`
display: flex;
align-items: center;
box-sizing: border-box;
cursor: pointer;
width: 236px;
transition: 0.5s;

img{
    display: flex;
    width: 100%;
    cursor: zoom-in;
    border-radius: 16px;
    object-fit: cover;
    opacity: 0.9;
}
:hover {
    z-index: 2;
    transition: transform 0.5s; 
    -ms-transform: scale(1.2); 
    -webkit-transform: scale(1.2); 
    transform: scale(1.2); 
  }
 :hover img{
      opacity: 1;
      box-shadow: 0px 2px 20px #f8e0e4;
  }
`
