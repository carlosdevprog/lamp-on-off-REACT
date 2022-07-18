import styled from "styled-components"


export const Container = styled.div`
 display: flex;
    align-items: center;
    justify-content: center;
    gap: 100px;
    height: 100vh;    
`


export const Button = styled.button`
 width: 150px;
    height: 35px;
    background-color: #8080808a;
    border: none;
    border-radius: 30px;
    font-size: 20px;
    cursor: pointer;
    &:hover#on{
        background-color: #ffff00a7;
    }
    &:hover#off{
        background-color: #808080;
    }
`


export const Image = styled.img`
height: 300px;
`
