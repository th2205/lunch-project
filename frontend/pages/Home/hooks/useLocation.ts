import { useEffect, useState } from "react";

export function useLocation() {
  const [coor, setCoor] = useState({
    lat: 0,
    lng: 0,
  });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const lat = pos.coords.latitude;
      const lng = pos.coords.longitude;

      setCoor({ lat, lng });
      setIsLoaded(true);
    });
  }, []);

  return { coor, isLoaded };
}
