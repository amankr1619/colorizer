import React from 'react'
import styled from 'styled-components'
import Pin from './Pin'


const Mainboard = (props) => {
   let { pins } = props;

    return (
        <Wrapper>
            <Container className = "mainboard_container">
              {pins.map((pin, index) => {
                    let {urls} = pin;
                
              return <Pin key={index} urls={urls} />
            })}
            </Container>
        </Wrapper>
    )
}

export default Mainboard

const Wrapper = styled.div`

display: flex;
width: 100%;
height: 100%;
margin-top: 15px;
justify-content: center;


`
const Container = styled.div`
padding-right: 16px;
margin: 0 auto;
height: 100%;
`