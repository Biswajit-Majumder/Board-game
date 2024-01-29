"use client";
import { ReactNode, RefObject, useEffect, useRef, useState } from "react";
import "../styles/boardStyles.scss";
import GridElements from "./grids";
import MainGaimLogic from "../logic/gameLogic";
import {
  randomGenerationOfNumber,
  twoOrFourReturner,
} from "../logic/randomNumberGenerator";

export default function GameBoard() {
  return (
    <div className="boardContainer">
      <GridElements
      // randomGenerationOfNumber={randomGenerationOfNumber}
      // twoOrFourReturner={twoOrFourReturner}
      />
      {/* <MainGaimLogic /> */}
    </div>
  );
}
