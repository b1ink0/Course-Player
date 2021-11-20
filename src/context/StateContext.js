import React, { useContext, useState } from "react";

const StateContext = React.createContext();

export const useStateContext = () => {
  return useContext(StateContext);
};

export const StateProvider = ({ children }) => {
  const [link, setLink] = useState([]);
  const [videoUrl, setVideoUrl] = useState("");
  const [tempLink, setTempLink] = useState("");
  const [now, setNow] = useState([]);
  const [inputCon, setInputCon] = useState(true);
  const [tempArr, setTempArr] = useState([]);
  const [index, setIndex] = useState(1);
  const [rootObject, setRootObject] = useState([]);
  const [tempArrBtn, setTempArrBtn] = useState([]);
  const [arrBtn, setArrBtn] = useState([]);
  const [autoplay, setAutoplay] = useState(true);
  const value = {
    link,
    setLink,
    tempLink,
    setTempLink,
    inputCon,
    setInputCon,
    tempArr,
    setTempArr,
    index,
    setIndex,
    now,
    setNow,
    videoUrl,
    setVideoUrl,
    rootObject,
    setRootObject,
    tempArrBtn,
    setTempArrBtn,
    arrBtn,
    setArrBtn,
    autoplay,
    setAutoplay,
  };
  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
};
