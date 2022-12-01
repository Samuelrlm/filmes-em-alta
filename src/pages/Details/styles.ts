import styled from "styled-components";

export const Card = styled.div`
    background: #FFFFFF21;
    padding: 1rem;
    border-radius: 5px;
    p{
        text-align: center;
        font-size: x-large;
    }
    img{
        width: 180px;
        border-radius: 1rem;
    }
`
export const Meio = styled.div`
    display: flex;
    margin-top: 1rem;
    gap: 1rem;
    span{
        justify-content: center;
        text-align: center;
    }
`

export const Voltar = styled.div`
    align-items: center;
    justify-content: center;
    display: flex;
    margin-top: 3rem;
    button{
        padding: 5px;
        background: #0039D4;
        color: white;
        width: 300px;
        height: 50px;
        font-size: x-large;
        border-radius: 5px;
        transition: all 300ms;
    }
    button:hover{
        background: #235AF1;
    }
`
