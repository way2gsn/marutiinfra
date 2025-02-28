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
    description: "Served M/s Raipur Handling & Infrastructure Pvt Ltd. in Raipur, Chhattisgarh.",
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
  {
    lat: 21.57,
    lng: 83.99,
    name: "Kukurdih",
    description: "Served M/ MACMET Engg (UTCL.Kukurdih).",
  },
  {
    lat: 21.16,
    lng: 81.33,
    name: "Real Ispat",
    description: "Served M/s Real Ispat & Energy Pvt Ltd. (GK TMT).",
  },
  {
    lat: 22.09,
    lng: 82.01,
    name: "Sambhv Sponge",
    "description": "Served M/s Sambhv sponge and Power Pvt Ltd."
  },
  {
    "lat": 24.36,
    "lng": 73.7,
    "name": "Shree Cement",
    "description": "Served M/s Shree Cement Ltd."
  },
    {
    "lat": 28.7041,
    "lng": 77.1025,
    "name": "Delhi",
    "description": "Served in Delhi."
  },
  {
    "lat": 19.0760,
    "lng": 72.8777,
    "name": "Mumbai",
    "description": "Served in Mumbai, Maharashtra."
  },
  {
    "lat": 12.9716,
    "lng": 77.5946,
    "name": "Bangalore",
    "description": "Served in Bangalore, Karnataka."
  },
  {
    "lat": 26.8467,
    "lng": 80.9462,
    "name": "Lucknow",
    "description": "Served in Lucknow, Uttar Pradesh."
  },
  {
    "lat": 17.3850,
    "lng": 78.4867,
    "name": "Hyderabad",
    "description": "Served in Hyderabad, Telangana."
  },
  {
    "lat": 22.5726,
    "lng": 88.3639,
    "name": "Kolkata",
    "description": "Served in Kolkata, West Bengal."
  },
  {
    "lat": 26.9124,
    "lng": 75.7873,
    "name": "Jaipur",
    "description": "Served in Jaipur, Rajasthan."
  },
  {
    "lat": 11.0168,
    "lng": 76.9558,
    "name": "Coimbatore",
    "description": "Served in Coimbatore, Tamil Nadu."
  },
  {
    "lat": 15.3616,
    "lng": 75.1240,
    "name": "Hubli",
    "description": "Served in Hubli, Karnataka."
  },
   {
    "lat": 23.2599,
    "lng": 77.4126,
    "name": "Bhopal",
    "description": "Served in Bhopal, Madhya Pradesh."
  }
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