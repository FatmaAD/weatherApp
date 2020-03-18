
import React from "react";
import { connect } from 'react-redux';
import { IState } from "../interfaces/redux/states.interface";
import styled from "styled-components";
import { color, font } from '../themes/utilities'

const Container = styled.div`
display: flex;
width: 20%;
flex-wrap: wrap;
justify-content: center;
`;
const Td = styled.td`
    text-transform: capitalize;
    color: ${color.black};
    border: 1px solid ${color.gray};
    font-family: ${font.family};
    padding: 5px;
    background-color: ${color.primeLight};
`;
const H3 = styled.h3`
    text-transform: capitalize;
    font-family: ${font.family};
`;
const P = styled.p`
    text-transform: capitalize;
    font-family: ${font.family};
    font-size: 20px;
`;
const IconContainer = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
`;


interface ICityDetailsProps {
    city: any;
    weather: any;
}
const WeatherTable = (props: ICityDetailsProps) => {
    return <>
        {props.weather.length > 0 ?
            <Container>
                <H3>Weather in {props.city.name}, {props.city.country}</H3>
                <IconContainer>
                    <img style={{ width: '50px', height: '50px' }} src="data:image/png;base64,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" alt="clouds" />
                    <H3>{props.weather[1].main.temp} °C</H3>
                </IconContainer>
                <P>{props.weather[1].weather[0].description}</P>
                <table>
                    <tbody>
                        <tr>
                            <Td>Wind</Td>
                            <Td>{props.weather[1].wind.speed} m/h</Td>
                        </tr>
                        <tr>
                            <Td>Cloudiness</Td>
                            <Td>{props.weather[1].weather[0].description}</Td>
                        </tr>
                        <tr>
                            <Td>Humidity</Td>
                            <Td>{props.weather[1].main.humidity} %</Td>
                        </tr>
                        <tr>
                            <Td>Sunrise</Td>
                            <Td>{props.city.sunrise}</Td>
                        </tr>
                        <tr>
                            <Td>Sunset</Td>
                            <Td>{props.city.sunset}</Td>
                        </tr>
                        <tr>
                            <Td>Geo coords</Td>
                            <Td>{props.city.coord.lat}, {props.city.coord.lon}</Td>
                        </tr>
                    </tbody>
                </table></Container>
            : null
        }
    </>
}

const mapStateToProps = (state: IState) => {
    return { city: state.city, weather: state.weather }
}
export default connect(mapStateToProps)(WeatherTable);