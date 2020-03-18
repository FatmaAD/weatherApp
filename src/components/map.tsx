import React, { useState, useEffect, useCallback } from "react";
import GoogleMapReact from "google-map-react";
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { getForecast } from '../redux/actions/weatherHandlers'
import { IState } from "../interfaces/redux/states.interface";

interface IMapProps extends RouteComponentProps<any> {
  appId: string;
  getForecast: Function;
}

const Map = (props: IMapProps) => {
  //random cities data
  const [cities] = useState([
    { lat: 25.204849, lng: 55.270782, title: "Dubai UAE" },
    { lat: 30.04442, lng: 31.23571, title: "Cairo Egypt" },
    { lat: 37.9838, lng: 23.7275, title: "Athens Greece" },
    { lat: 41.015137, lng: 28.979530, title: "Istanbul Turkey" },
    { lat: 32.8925, lng: 13.18, title: "Tripoli Libya" }
  ]);
  const [map, setMap] = useState();
  const [maps, setMaps] = useState();

  useEffect(() => {
    createMarkers();
  }, [maps, props.appId, map])

  const createMarkers = () => {
    const arr: Array<any> = [];
    if (!map || !maps) {
      console.log("no map")
      return;
    }
    for (let i = 0; i < cities.length; i++) {
      const city = cities[i];
      const marker = new (maps as any).Marker({
        position: { lat: city.lat, lng: city.lng },
        map,
        title: city.title
      });
      marker.addListener("click", async () => {
        if (!props.appId) { alert("please enter AppId"); return }
        await props.getForecast(props.appId, marker.title.split(" ")[0])
        props.history.push(`/${marker.title.split(" ")[0]}`)
      });
      arr.push(marker)
    }
  }

  //cities markers on the map handelrs
  let renderMarkers = (map: any, maps: any) => {
    setMap(map);
    setMaps(maps);
  };

  return (
    // Important! Always set the container height explicitly
    <GoogleMapReact
      onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
      bootstrapURLKeys={{ key: 'AIzaSyBsjunwPHzyRBLzdiBdMb9D-Q8cUU7xqjA' }}
      defaultCenter={{
        lat: 41.015137,
        lng: 28.979530
      }}
      defaultZoom={4}
    ></GoogleMapReact>
  );
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    getForecast: (appId: string, cityName: string) => dispatch(getForecast(appId, cityName))
  }
}
const mapStateToProps = (state: IState) => {
  return { appId: state.appId }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Map));
