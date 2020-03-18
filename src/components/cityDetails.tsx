import React, { useEffect, useState } from 'react';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { connect } from 'react-redux';
import Spinner from '../components/spinner';

export interface ICityDetailsProps {
    city: any;
    weather: any;
}

const CityDetails = (props: ICityDetailsProps) => {
    const [mainTemp, setmainTemp] = useState([] as any);
    const [options, setOptions] = useState({} as Highcharts.Options);
    useEffect(() => {
        if (props.weather.length > 0) {
            weatherInit(props.weather)
            console.log("optionss", options)
        }
        console.log("CityDetails", props)
    }, [props.city, props.weather])

    const weatherInit = (weatherList: Array<any>) => {
        setOptions({
            title: {
                text: `Weather and forecasts in ${props.city.name}, ${props.city.country}`
            },
            subtitle: {
                text: `${props.weather[0].weather[0].description}`
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Temperature'
                }
            },
            series: [
                {
                    id: 'min',
                    name: 'c°',
                    data: mainTemp,
                    cursor: 'pointer',
                    type: 'line',
                }
            ]
        });
        for (let i = 0; i < weatherList.length; i++) {
            const w = weatherList[i];
            setmainTemp((_maintemp: Array<any>) => [..._maintemp, w.main.temp_min, w.main.temp_max])
        }
    }

    return <>
        {props.weather.length > 0 ?
            <div style={{width: '100%'}}>
                <HighchartsReact
                    highcharts={Highcharts}
                    options={options}
                    {...props}
                />
            </div> : <Spinner/>}
    </>
}

const mapStateToProps = (state: any) => {
    return { city: state.city, weather: state.weather }
}

export default connect(mapStateToProps)(CityDetails) 