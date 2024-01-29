"use client";
import {
  MutableRefObject,
  ReactNode,
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import "../styles/shiftControlerStyles.scss";

export default function ShiftControler() {
  let [isShiftOn, setIsShiftON] = useState(false);
  let shiftControlRef: RefObject<HTMLDivElement> = useRef(HTMLDivElement);
  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.key === "Shift") {
        setIsShiftON(true);
      }
    });
    if (isShiftOn) {
      window.addEventListener("mouseover", (e) => {
        let currentXPosition = e.pageX;
        let currentYPosition = e.pageY;
        console.log(currentXPosition, currentYPosition);
        if (shiftControlRef) {
          shiftControlRef.current.style.top = currentXPosition;
          shiftControlRef.current.style.left = currentYPosition;
        }
      });
    }
  }, [isShiftOn]);

  return (
    <div className="outerMostRadial" ref={shiftControlRef}>
      <div>
        {/* <div >

                </div> */}
      </div>
    </div>
  );
}
