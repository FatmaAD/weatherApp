import React from 'react';
import CityDetails from '../components/cityDetails';
import styled from "styled-components";
import WeatherTable from '../components/weatherTable';
import { color } from '../themes/utilities'

const Container = styled.div`
width:100%;
height:100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;
`;
const Wrapper = styled.div`
    width: 65%;
    background-color: ${color.prime};
    padding: 15px;
    box-shadow: 1px 1px 7px 0px;
`;

const CityView = () => {
    return (<Container>
        <WeatherTable />
        <Wrapper>
            <CityDetails />
        </Wrapper>
    </Container>)
}
export default CityView;