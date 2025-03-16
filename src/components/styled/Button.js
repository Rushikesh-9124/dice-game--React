import styled from "styled-components"
export const Button = styled.button`
    min-width : 220px;
    border : none;
    padding : 10px 18px;
    background : #000000;
    border-radius : 5px;
    color : white;
    font-size : 13px;
    border : 1px solid transparent;
    transition : all 0.3s ease-in;
    cursor : pointer;

    &:hover{
        background-color: white; 
        color : black;
        border : 1px solid black;
    }

`