import React from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import { useDispatch, useSelector } from "react-redux";
import { handleCodChange, handleMapChange } from "../redux/userSlice";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

import icon from "../assets/npc/mark.png";
export const Maps = ({ google }) => {
  const containerStyle = {
    position: "relative",
    width: "100%",
    height: "300px",
    marginTop: "2px",
  };
  const { address, mapCenter } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleCng = (address) => {
    const name = "address";
    const value = address;
    dispatch(handleMapChange({ name, value }));
  };

  const handleCodCng = (cod) => {
    const name = "mapCenter";
    const value = cod;
    dispatch(handleCodChange({ name, value }));
  };

  const handleSelect = (address) => {
    handleCng(address);
    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => {
        console.log("Success", latLng);

        // update center state
        handleCodCng(latLng);
      })
      .catch((error) => console.error("Error", error));
  };
  return (
    <div id="googleMaps">
      <PlacesAutocomplete
        value={address}
        onChange={handleCng}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: "Search Places ...",
                className: "form_input shadow-none",
                required:true
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map((suggestion, i) => {
                const className = suggestion.active
                  ? "suggestion-item--active"
                  : "suggestion-item";
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: "#fafafa", cursor: "pointer" }
                  : { backgroundColor: "#ffffff", cursor: "pointer" };
                return (
                  <div
                    key={i}
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>

      <Map
        containerStyle={containerStyle}
        google={google}
        // google={props.google}
        initialCenter={{
          lat: mapCenter.lat,
          lng: mapCenter.lng,
        }}
        center={{
          lat: mapCenter.lat,
          lng: mapCenter.lng,
        }}
      >
        <Marker
        icon={icon}
       
          position={{
            lat: mapCenter.lat,
            lng: mapCenter.lng,
          }}
        />
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyAxilHHgYI8vAoeAo9t1EDn2b6fF1YLUhI",
})(Maps);
