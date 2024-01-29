import {
  useState,
  useRef,
  useEffect,
  ReactNode,
  MutableRefObject,
} from "react";

import {
  twoOrFourReturner,
  randomGenerationOfNumber,
} from "../logic/randomNumberGenerator";
let someArray = new Array(16).fill(null);

console.log(someArray.length);
// type gridProps = {
//   randomGenerationOfNumber: () => number;
//   twoOrFourReturner: () => 4 | 2;
// };

export default function GridElements(
  {
    //   randomGenerationOfNumber,
    //   twoOrFourReturner,
  }
) {
  const itemsRef = useRef(new Array(16).fill(null));
  // const itemsRef = useRef(new Map<number, HTMLDivElement>());
  //   const itemsRef = useRef(Array(16).fill(null));
  //   let someOtherArray = [];
  // function getMap() {
  //     if (!itemsRef.current) {
  //       itemsRef.current = new Map();
  //     }
  //     return itemsRef.current;
  //   }
  // function gameElement() {
  //     for (let i = 0; i < 16; i++) {
  //       someArray.push(
  //         <div key={i} ref={(node) => onRender(node, i)}>{children}</div>
  //       );
  //     }
  //   }
  //   console.log(itemsRef.current);
  for (let i = 0; i < 16; i++) {
    someArray[i] = (
      <div
        key={i}
        // ref={(node) => {
        // if(!itemsRef.current)
        //   itemsRef.current[i] = node;
        // }}
      >
        <div
          ref={(node) => {
            itemsRef.current[i] = node;
          }}
          className="littleInside"
        ></div>
      </div>
    );
  }

  //   console.log(itemsRef.current);
  const randNum = randomGenerationOfNumber();
  const randValue = twoOrFourReturner();
  useEffect(() => {
    itemsRef.current[randNum].innerText = randValue;
    console.log("second run");
  }, []);
  //   useEffect(() => {
  //     const thisNumber = randomGenerationOfNumber();
  //     console.log(thisNumber);
  //   }, []);
  //   gameElement();
  // useEffect(() => {
  //     if (itemsRef.current.size > 0) {
  //       const randomElement: HTMLDivElement = Array.from(
  //         itemsRef.current.values()
  //       )[randomIndex];

  //       if (randomElement) {
  //         randomElement.innerHTML = `<div class="something"> 2</div>`;
  //       }
  //     }
  //   }, [randomIndex]);

  return <>{someArray}</>;
}
