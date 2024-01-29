import Image from "next/image";
import styles from "./page.module.css";
import GameBoard from "./_components/gameBoard";
import ShiftControler from "./_components/shiftControls";
import { useEffect } from "react";

export default function Home() {
  // useEffect(() => {
  //   const keyDownMoment = window.addEventListener("keydown", (e) => {
  //     if (e.key === "shift") {
  //       // return true;
  //     }
  //   });
  // }, []);
  return (
    <>
      <GameBoard />
      <ShiftControler />
    </>
  );
}
