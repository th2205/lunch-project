import GoogleMapReact from "google-map-react";
import { useLocation } from "../hooks/useLocation";
import style from "./GoogleMap.module.scss";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function GoogleMap() {
  const { coor, isLoaded } = useLocation();

  return (
    <div className={style.container}>
      {isLoaded && (
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBfdy0N7iobHx90Y6lnNYQ8jD9ze6Yg1bU" }}
          defaultZoom={17}
          center={coor}
        >
          <AnyReactComponent text="My Marker" />
        </GoogleMapReact>
      )}
    </div>
  );
}
