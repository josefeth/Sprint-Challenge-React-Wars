import React from 'react';
import styled from "styled-components"
import logoa from './starwa.png';
import Form from './Form';

const SwCard= styled.section`
border: 1px solid black;
margin:1%;
background: black;
color:white;
`;

const H1= styled.h1`
font-size:2rem;
`;

const Logoa = styled.img`
width: 300px;
height: 150px;
`;

const StarWarCards = props => {
    return(
    <SwCard>
        <div>
        {/* <Form /> */}
        {/* <Logoa src={logoa}/> */}
        <H1> Name: {props.name}</H1>
        <h2> Birth_Year: {props.birth_year}</h2>
        <h2> Gender: {props.gender}</h2>
        <h2> Created: {props.created}</h2>
        <h2> Eye Color: {props.eye_color}</h2>

        </div>
    </SwCard>
    )
}
export default StarWarCards; 