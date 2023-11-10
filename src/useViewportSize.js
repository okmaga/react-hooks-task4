import { useState } from "react";
import { useWindowEvent } from "./useWindowEvent";

export function useViewportSize() {
  const initialSize = { height: window.innerHeight, width: window.innerWidth };

  // alternative – if viewport is necessary:
  // window.visualViewport.width
  // window.visualViewport.height

  const [size, setSize] = useState(initialSize);

  const handleResize = () => {
    const newSize = { height: window.innerHeight, width: window.innerWidth };
    setSize(newSize);
  };

  useWindowEvent("resize", handleResize);

  return size;
}
