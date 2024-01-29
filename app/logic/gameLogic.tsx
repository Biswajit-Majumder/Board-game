import { useEffect } from "react";

export default function MainGaimLogic() {
  // game over logic
  // game start logic
  useEffect(() => {
    // window.addEventListener("")
    window.addEventListener("keydown", (e) => {
      //   console.log(e.key);
      if (e.key === ("ArrowUp" || "w" || "W")) {
        console.log("up arrow pressed");
      } else if (e.key === ("ArrowDown" || "s" || "s")) {
        console.log("down arrow pressed");
      } else if (e.key === ("ArrowLeft" || "a" || "A")) {
        console.log("left arrow pressed");
      } else if (e.key === ("ArrowRight" || "d" || "D")) {
        console.log("right arrow pressed");
      }
    });
  }, []);
  // game event logic

  return (
    <div>
      <div></div>
    </div>
  );
}
