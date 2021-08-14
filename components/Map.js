import { useState } from "react";
import { getCenter } from "geolib";
import Image from "next/image";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
const Map = ({ searchResult }) => {
  const [SelectedLocation, setSelectedLocation] = useState({});
  // Transform the objects to find only langitude and latitude
  const requireResults = searchResult.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));
  const center = getCenter(requireResults);
  const [Viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 10,
  });
  return (
    <ReactMapGL
      mapStyle="mapbox://styles/muzammil144/cks2c83v45ln218p6fgm92o8k"
      mapboxApiAccessToken={process.env.mapbox_key}
      {...Viewport}
      onViewportChange={(nextViewPort) => setViewport(nextViewPort)}
    >
      {searchResult.map((result) => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              role="img"
              onClick={() => setSelectedLocation(result)}
              className=" cursor-pointer  text-2xl  animate-bounce  "
              aria-label="pin"
            >
              📍
            </p>
          </Marker>
          {SelectedLocation.long === result.long && (
            <Popup
              closeOnClick={true}
              onClose={() => setSelectedLocation({})}
              latitude={result.lat}
              longitude={result.long}
            >
              <div >
                <div className="relative h-44 w-64  ">
                  <Image
                    className="rounded-2xl hover:scale-150  transition duration-300 ease-in-out "
                    src={result.img}
                    layout="fill"
                    objectFit="cover"
                  />
                  <p className="absolute text-white font-bold bottom-0 left-0 p-3">
                    {result.title}
                  </p>
                </div>
              </div>
            </Popup>
          )}
        </div>
      ))}
    </ReactMapGL>
  );
};

export default Map;
