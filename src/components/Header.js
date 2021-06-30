import React, { useState } from 'react';
import styled from 'styled-components'
import ToysIcon from '@material-ui/icons/Toys';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import TextsmsIcon from '@material-ui/icons/Textsms';
import FlareIcon from '@material-ui/icons/Flare';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';





const Header = (props) => {
     const [input, setInput] = useState("");

     const onSearchSubmit = (e) => {
         e.preventDefault();
         console.log(input);
        props.onSubmit(input)
         
     }
      
    const themeToggler = (e) => {
        e.preventDefault();
        console.log("ok")
        props.onToggle()
    }



    return (
      <Wrapper> 
            <LogoWrapper>
                <IconButton>
                    <  ToysIcon  />
                </IconButton>
            </LogoWrapper>

             <HomePageButton>
                 <a href="/">Homepage</a>
            </HomePageButton>

            <FollowingButton onclick >
            <a href="/">following</a>
            </FollowingButton>
            <SearchWrapper>
                <SearchBarWrapper >
                     <IconButton >
                        <SearchIcon style={{color: "#fe98a8"}} />
                    </IconButton> 
                    <form>
                        <input type="text" onChange = {(e) => setInput(e.target.value)} />
                        <button type="submit" onClick = {onSearchSubmit}></button>
                    </form>

                </SearchBarWrapper>
            </SearchWrapper>
            <IconsWrapper>
                <IconButton style={{color: "#fe98a8"}}>
                   <NotificationsIcon />
                   
                </IconButton>
                <IconButton >
                    <TextsmsIcon style={{color: "#fe98a8"}} />
                </IconButton >
                <IconButton type = "button" onClick =  {themeToggler} style={{color: "#fe98a8"}}>
                    <FlareIcon />
                </IconButton>
                <IconButton>
                    <KeyboardArrowDownIcon style = {{color: "#881c12"}}/>
                </IconButton>

            </IconsWrapper> 
        </Wrapper>
    )
}

export default Header

const Wrapper = styled.div`
display: flex;
align-items: center;
height: 56px;


`

const LogoWrapper = styled.div`
.MuiSvgIcon-root {
    color: #0040fc;
    font-size: 32px;
    cursor: pointer;
}`

const HomeButtons = styled.div`
display: flex;
height: 48px;
min-width: 123px;
align-items: center;
justify-content: center;
border-radius: 24px;
cursor: pointer;
`

const HomePageButton = styled(HomeButtons)`

background-color: #e47d8f;

a{
    text-decoration: none;
    color: #f8e6e9;
    font-weight: 700;

}`

const FollowingButton = styled(HomeButtons)`


a{
    text-decoration: none;
    color: #fe98a8;
    font-weight: 700;

}

:hover{
    background-color: #ffecef;
}`

const SearchWrapper = styled.div`
flex: 1;

`
const SearchBarWrapper = styled.div`
background-color: #e2e2e2;
display: flex;
height: 48px;
width: 100%;
border-radius: 50px;
border: none;
padding-left: 10px;

form{
    display: flex;
    flex: 1;
}

form > input{
    color: black;
    background-color: transparent;
    border: none;
    width: 100%;
    font-size: 16px;
}

form > button{
    display: none;

}
input:focus{
    outline: none;
}`

const IconsWrapper = styled.div`
 
     background-color: transparent;
 

`


