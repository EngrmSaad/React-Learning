import { useState } from "react";
import Button from "../../Components/CustomButton/CustomButton.jsx";

function BGChanger() {
  const [bgColor, setBgColor] = useState("black");

  return (
    <>
      <div
        className="w-full h-screen duration-200 "
        style={{ backgroundColor: bgColor }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <Button color="red" setColor={setBgColor} />
            <Button color="green" setColor={setBgColor} />
            <Button color="blue" setColor={setBgColor} />
            <Button color="olive" setColor={setBgColor} />
            <Button color="yellow" setColor={setBgColor} txtColor="black" />
            <Button color="black" setColor={setBgColor} />
          </div>
        </div>
      </div>
    </>
  );
}

export default BGChanger;
