import styled from "styled-components";
import background from '../../Assets/background.jpeg';


export const Container = styled.div`
    display: flex;
    flex-wrap:wrap;
    min-height: 90vh;
    justify-content: center;
    align-items: center;
    gap:2em;
    /* object-fit:cover; */
    background: url(${background})center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    background-position-y: bottom;

    img{
        min-height:12em;
    }
`

export const FormAdd = styled.form`
    font-family: 'dongle',sans-serif;
    font-weight: 500;
    font-size: larger;
    border: 1px solid #55a3ab;
    min-height:250px;
    min-width: 200px;
    background-color: rgb(245, 250, 202);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`

