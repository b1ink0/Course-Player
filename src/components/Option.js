import React, { useEffect, useState } from "react";
import { useStateContext } from "../context/StateContext";
import $ from "jquery";
import SubOption from "./SubOption";
import useFunction from "../hooks/useFunction";
import Video from "./Video";

export default function Option() {
  const { link, setInputCon, tempArr, tempLink, autoplay, setAutoPlay } =
    useStateContext();
  const {
    handleGetData,
    handleBack,
    handleUpdate,
    handleClearAll,
    handleAutoPlay,
  } = useFunction();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(false);
  }, [tempArr]);
  useEffect(() => {
    // handleGetData("");
    setLoading(true);
  }, []);
  return (
    <>
      <div className="wrapper" style={{ width: "40vw" }}>
        <div className="wrapper_1">
          {loading && <h1>Loading...</h1>}
          <button
            onClick={() => {
              handleGetData("");
              setLoading(true);
            }}
          >
            Retry
          </button>
          <button onClick={() => handleBack()}>Back</button>
          <button onClick={() => handleUpdate()}>Update</button>
          <button onClick={() => handleClearAll()}>Clear</button>
          <button onClick={() => handleAutoPlay()}>
            AutoPlay: {autoplay ? "On" : "Off"}
          </button>
        </div>
        <div>{!loading && <SubOption />}</div>
      </div>
    </>
  );
}
