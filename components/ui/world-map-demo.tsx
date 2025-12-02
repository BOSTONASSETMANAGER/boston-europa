"use client";
import { WorldMap } from "@/components/ui/world-map";
import { motion } from "motion/react";

export default function WorldMapDemo() {
  return (
    <div className="py-20 w-full">
      <WorldMap
        dots={[
          // Conexiones europeas
          {
            start: { lat: 52.5200, lng: 13.4050 }, // Berlín, Alemania
            end: { lat: 40.4168, lng: -3.7038 }, // Madrid, España
          },
          {
            start: { lat: 40.4168, lng: -3.7038 }, // Madrid, España
            end: { lat: 48.8566, lng: 2.3522 }, // París, Francia
          },
          {
            start: { lat: 48.8566, lng: 2.3522 }, // París, Francia
            end: { lat: 41.9028, lng: 12.4964 }, // Roma, Italia
          },
          {
            start: { lat: 41.9028, lng: 12.4964 }, // Roma, Italia
            end: { lat: 59.3293, lng: 18.0686 }, // Estocolmo, Suecia
          },
          {
            start: { lat: 59.3293, lng: 18.0686 }, // Estocolmo, Suecia
            end: { lat: 52.5200, lng: 13.4050 }, // Berlín, Alemania
          },
          // Conexión EEUU - Europa
          {
            start: { lat: 40.7128, lng: -74.0060 }, // Nueva York, EEUU
            end: { lat: 40.4168, lng: -3.7038 }, // Madrid, España
          },
          // Conexión Argentina - Europa
          {
            start: { lat: -34.6037, lng: -58.3816 }, // Buenos Aires, Argentina
            end: { lat: 40.4168, lng: -3.7038 }, // Madrid, España
          },
          // Conexión Argentina - EEUU
          {
            start: { lat: -34.6037, lng: -58.3816 }, // Buenos Aires, Argentina
            end: { lat: 40.7128, lng: -74.0060 }, // Nueva York, EEUU
          },
        ]}
        lineColor="#FFD700"
      />
    </div>
  );
}
