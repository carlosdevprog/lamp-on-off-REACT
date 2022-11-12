import styled from "styled-components"


export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 120px;
    margin-top: 10px;
    
   
`


export const Button = styled.button`
    width: 150px;
    height: 40px;
    background-color: #8080808a;
    border: none;
    font-size: 20px;
    cursor: pointer;
    box-shadow: 10px 5px 5px 	#1C1C1C;

    &:hover#on{
        background-color: #ffff00a7;
    }
    &:hover#off{
        background-color: #808080;
    }

    &:active#on{
        opacity: 0.5;
    }

    &:active#off{
        opacity: 0.5;
    }
`


export const Image = styled.img`
height: 300px;
`

export const H1 = styled.h1`
text-align: center;
margin-top: 30px;
font-weight: 600;
font-size: 60px;
`

export const P = styled.p`
font-size: 30px;
padding: 20px;

`
