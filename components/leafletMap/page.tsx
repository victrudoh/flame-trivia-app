"use client"; // Ensure this component is rendered client-side

import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";

// Define types for the hospital data
interface Hospital {
  lat: number;
  lon: number;
  name: string;
}

// Define props for LocationMarker
interface LocationMarkerProps {
  position: LatLngExpression | null;
  onMapReady: (map: L.Map) => void;
}

// Component for the location marker
const LocationMarker: React.FC<LocationMarkerProps> = ({
  position,
  onMapReady,
}) => {
  const map = useMap();

  // Set the map view to the user's position when available
  useEffect(() => {
    if (map && position) {
      map.setView(position, map.getZoom());
    }
  }, [map, position]);

  // Call the onMapReady function when the map is initialized
  useEffect(() => {
    if (map) {
      onMapReady(map);
    }
  }, [map, onMapReady]);

  return (
    position && (
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    )
  );
};

const LeafletMap: React.FC = () => {
  const [userPosition, setUserPosition] = useState<LatLngExpression | null>(
    null
  );
  const [hospitals, setHospitals] = useState<Hospital[]>([]);

  // Get user's current location using Geolocation API
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setUserPosition([latitude, longitude] as LatLngExpression);
    });
  }, []);

  // Fetch nearby hospitals using Overpass API
  useEffect(() => {
    if (userPosition) {
      const [latitude, longitude] = userPosition as any;

      // Query hospitals near the user's location (within a 5km radius)
      const overpassQuery = `
        [out:json];
        (
          node["amenity"="hospital"](around:5000, ${latitude}, ${longitude});
        );
        out body;
      `;
      const overpassUrl = `https://overpass-api.de/api/interpreter?data=${encodeURIComponent(
        overpassQuery
      )}`;

      // Fetch hospital data
      fetch(overpassUrl)
        .then((response) => response.json())
        .then((data) => {
          const hospitalData: Hospital[] = data.elements.map(
            (element: any) => ({
              lat: element.lat,
              lon: element.lon,
              name: element.tags.name || "Unnamed Hospital",
            })
          );
          setHospitals(hospitalData);
        })
        .catch((error) =>
          console.error("Error fetching hospital data:", error)
        );
    }
  }, [userPosition]);

  // Handler for when the map is ready
  const handleMapReady = (map: L.Map) => {
    if (userPosition) {
      map.setView(userPosition, 13); // Set the view to the user's location
    }
  };

  return (
    <MapContainer
      style={{ height: "100vh", width: "100%" }}
      center={userPosition || [51.505, -0.09]} // Default to London if user position is unavailable
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {/* Location marker for the user's position */}
      <LocationMarker position={userPosition} onMapReady={handleMapReady} />

      {/* Markers for nearby hospitals */}
      {hospitals.map((hospital, index) => (
        <Marker
          key={index}
          position={[hospital.lat, hospital.lon] as LatLngExpression}
        >
          <Popup>{hospital.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default LeafletMap;
