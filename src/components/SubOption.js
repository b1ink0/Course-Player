import React, { useState, useEffect } from "react";
import { useStateContext } from "../context/StateContext";
import useFunction from "../hooks/useFunction";
import "./scss/SubOption.scss";

export default function SubOption() {
  const { tempArr, tempArrBtn, arrBtn, now, rootObject } = useStateContext();
  const { handleGetData, handleVideo, handleDone, handleCheck } = useFunction();
  const handleMove = (t) => {
    if (t.endsWith(".mp4")) {
      handleVideo(t);
    } else {
      handleGetData(t);
    }
  };
  return (
    <div className="option">
      <h4>{now[now.length - 1]}</h4>
      <ol>
        {tempArrBtn &&
          tempArrBtn.map((t) => (
            <li key={t.name}>
              <button
                onClick={() => handleMove(t.name)}
                className={`${t.name.endsWith(".mp4") && "mp4"}`}
              >
                {t.name}
              </button>
              <span onClick={() => handleCheck(t)}>{t.flag ? "✔" : "  "}</span>
            </li>
          ))}
      </ol>
    </div>
  );
}
