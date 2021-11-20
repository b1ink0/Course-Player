import React, { useEffect } from "react";
import { useStateContext } from "../context/StateContext";
import useFunction from "../hooks/useFunction";
import Input from "./Input";
import Option from "./Option";
import Video from "./Video";
import "./scss/Dashboard.scss";

export default function Dashboard() {
  const { inputCon, setTempLink, setInputCon, setAutoplay } = useStateContext();
  const { handleGetData } = useFunction();
  useEffect(() => {
    if (typeof Storage !== "undefined") {
      let temp_1 = localStorage.getItem("arrBtn");
      let temp = localStorage.getItem("tempLink");
      let temp_3 = localStorage.getItem("autoPlay");
      if (temp_3 !== null) {
        setAutoplay(JSON.parse(temp_3));
      }
      if (temp !== null) {
        setTempLink(temp);
        setInputCon(false);
        if (temp_1 !== null) {
          handleGetData(temp, true);
        } else {
          handleGetData(temp);
        }
      }
    }
  }, []);
  return (
    <div className="dashboard">
      {inputCon ? (
        <Input />
      ) : (
        <>
          <Video />
          <Option />
        </>
      )}
    </div>
  );
}
