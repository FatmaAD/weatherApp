import React from 'react';
import Map from '../components/map';
import styled from "styled-components";
import { color, font } from '../themes/utilities'
import StartForm from '../components/startForm';
const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px;
  flex-wrap: wrap;
  text-align: center;
`;
const Wrapper = styled.div`
    height: 80vh; 
    width: 80%;
    background-color: ${color.prime};
    padding: 15px;
    box-shadow: 1px 1px 7px 0px;
`;
const Title = styled.h3`
    color:${color.prime};
    font-family: ${font.family};
    text-transform: capitalize;
`;
const FormContainer = styled.div`
    display:flex;
  justify-content:flex-end;
  flex-wrap: nowrap;
  width:100%;
`;
const HomeView = () => {

    return (<Container>
        <FormContainer><StartForm />
        </FormContainer>
        <div style={{ width: '100%' }}><Title>weather and forecasts in cities</Title></div>
        <Wrapper>
            <Map />
        </Wrapper>
    </Container>)
}
export default HomeView;