"use client";

import { useEffect, useRef, useState } from "react";
import { GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100%",
  height: "600px",
};

const center = {
  lat: 20.5937, // Approximate center of India
  lng: 78.9629,
};

const serviceLocations = [
  {
    lat: 21.2787,
    lng: 81.8661,
    name: "Raipur",
    description: "Served M/s Raipur Handling & Infrastructure. in Raipur, Chhattisgarh.",
  },
  {
    lat: 22.4815,
    lng: 70.0033,
    name: "Ambuja Nagar",
    description: "Served M/s Ambuja Cement Ltd.",
  },
  {
    lat: 22.5645,
    lng: 72.9324,
    name: "Nuvoco",
    description: "Served M/s Nuvoco Vistas Corp Ltd.",
  },

];

const mapOptions = {
  styles: [
    {
      featureType: "all",
      elementType: "all",
      stylers: [
        { saturation: -80 },
        { lightness: 100 },
        { visibility: "simplified" },
      ],
    },
    {
      featureType: "administrative",
      elementType: "geometry.fill",
      stylers: [{ visibility: "off" }],
    },
    {
      featureType: "administrative",
      elementType: "geometry.stroke",
      stylers: [{ visibility: "off" }],
    },
    {
      featureType: "poi",
      elementType: "all",
      stylers: [{ visibility: "off" }],
    },
    {
      featureType: "road",
      elementType: "all",
      stylers: [{ visibility: "simplified" }],
    },
    {
      featureType: "transit",
      elementType: "all",
      stylers: [{ visibility: "off" }],
    },
    {
      featureType: "water",
      elementType: "all",
      stylers: [{ visibility: "simplified" }],
    },
  ],
  mapTypeControl: false,
  streetViewControl: false,
  fullscreenControl: false,
  mapTypeId: "roadmap", // Force roadmap (color mode)
};

export function ServiceMap() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "", // Replace with your API key
  });

  const [selectedMarker, setSelectedMarker] = useState<number | null>(null);

  if (loadError) return <div>Error loading maps!</div>;
  if (!isLoaded) return <div>Loading Maps...</div>;

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      center={center}
      zoom={6}
      options={mapOptions}
    >
      {serviceLocations.map((location, index) => (
        <Marker
          key={index}
          position={{ lat: location.lat, lng: location.lng }}
          title={location.name}
          onClick={() => setSelectedMarker(index)}
        >
          {selectedMarker === index && (
            <InfoWindow onCloseClick={() => setSelectedMarker(null)}>
              <div>
                <h3>{location.name}</h3>
                <p>{location.description}</p>
              </div>
            </InfoWindow>
          )}
        </Marker>
      ))}
    </GoogleMap>
  );
}