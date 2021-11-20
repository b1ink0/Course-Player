import React, { useState, useEffect } from "react";
import { useStateContext } from "../context/StateContext";
import useFunction from "../hooks/useFunction";

export default function Input() {
  const { link, setLink, setInputCon, tempLink, setTempLink } =
    useStateContext();
  const { handleGetData, handleValid, handleObject } = useFunction();
  const [valid, setValid] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (await handleValid()) {
      handleGetData(tempLink);
      setInputCon(false);
      setValid(false);
    } else {
      setValid(true);
    }
  };
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <input
            type="text"
            value={tempLink}
            onChange={(e) => setTempLink(e.target.value)}
            required
          />
          <button type="submit">Next</button>
        </div>
        {valid && <h1>Enter a Valid Url</h1>}
      </form>
    </div>
  );
}
