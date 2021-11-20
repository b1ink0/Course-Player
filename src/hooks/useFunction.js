import { useStateContext } from "../context/StateContext";
import $, { cssNumber, parseJSON } from "jquery";

export default function useFunction() {
  const {
    tempArr,
    setTempArr,
    tempLink,
    index,
    setIndex,
    now,
    setNow,
    setVideoUrl,
    setInputCon,
    rootObject,
    setRootObject,
    tempArrBtn,
    setTempArrBtn,
    arrBtn,
    setArrBtn,
    autoplay,
    setAutoplay,
  } = useStateContext();
  const handleUrl = () => {
    let url = "";
    for (let i = 0; i < index; i++) {
      if (now[i] !== undefined) {
        url = `${url}${now[i]}/`;
      }
    }
    return url;
  };
  const handleGetData = (l, f = false) => {
    let url = handleUrl() + l;
    $.getJSON(url, (data) => {
      setTempArr(data);
      let arr = [];
      data.forEach((d) => {
        let t = {
          name: d,
          flag: false,
        };
        arr.push(t);
      });
      let t;
      if (f) {
        if (localStorage.getItem("arrBtn") !== null) {
          t = JSON.parse(localStorage.getItem("arrBtn"));
        } else {
          t = arrBtn;
        }
      } else {
        t = arrBtn;
      }
      if (t[0] !== undefined) {
        arr.forEach((d) => {
          let flag = true;
          t.forEach((l) => {
            if (d.name === l.name) {
              flag = false;
            }
          });
          if (flag) {
            t.push(d);
          }
        });
        setArrBtn(t);
        localStorage.setItem("arrBtn", JSON.stringify(t));
        let temp = [];
        t.forEach((d) => {
          arr.forEach((l) => {
            if (d.name === l.name) {
              temp.push(d);
            }
          });
        });
        setTempArrBtn(temp);
      } else {
        setArrBtn(arr);
        setTempArrBtn(arr);
        if (localStorage.getItem("arrBtn") === null) {
          localStorage.setItem("arrBtn", JSON.stringify(arr));
        }
      }
    }).catch((err) => {
      console.log("Invalid Url");
    });
    if (l !== "") {
      setNow((arr) => [...arr, l]);
      setIndex(index + 1);
    }
  };
  const handleBack = () => {
    if (now[1] !== undefined) {
      now.pop();
      setNow(now);
      setIndex(index - 1);
      handleGetData("");
    }
  };
  const handleVideo = (t) => {
    setVideoUrl(handleUrl() + t);
    handleObject(t);
  };
  const handleValid = async () => {
    let flag = true;
    await $.getJSON(tempLink, (data) => {})
      .then(async () => {
        localStorage.setItem("tempLink", tempLink);
        flag = true;
      })
      .catch(() => {
        flag = false;
      });
    return flag;
  };
  const handleUpdate = () => {
    setInputCon(true);
    setNow([]);
    setIndex(1);
    setVideoUrl("");
    setTempArr([]);
    localStorage.clear();
  };
  const getArr = async (l) => {
    let temp = [];
    await $.getJSON(l, (data) => {
      temp = data;
    });
    return temp;
  };
  const handleObject = (v) => {
    let flag = true;
    for (let i = 0; i < rootObject.length; i++) {
      if (rootObject[i] !== undefined && rootObject[i].name === v) {
        flag = false;
      }
    }
    if (flag) {
      setRootObject([
        ...rootObject,
        {
          name: v,
          flag: false,
        },
      ]);
    }
  };
  const handleDone = (v) => {};
  const handleCheck_1 = (t) => {
    let arr = [];
    t.forEach((d) => {
      tempArrBtn.forEach((l) => {
        if (d.name === l.name) {
          arr.push(d);
        }
      });
    });
    setTempArrBtn(arr);
  };
  const handleCheck = (v) => {
    let t = arrBtn;
    for (let i = 0; i < arrBtn.length; i++) {
      if (t[i].name === v.name) {
        if (!t[i].flag) {
          t[i] = {
            ...t[i],
            flag: true,
          };
        } else {
          t[i] = {
            ...t[i],
            flag: false,
          };
        }
      }
    }
    handleCheck_1(t);
    localStorage.setItem("arrBtn", JSON.stringify(t));
    setArrBtn(t);
  };
  const handleClearAll = () => {
    localStorage.clear();
  };
  const handleAutoPlay = () => {
    localStorage.setItem("autoPlay", !autoplay);
    setAutoplay(!autoplay);
  };
  return {
    handleGetData,
    handleBack,
    handleVideo,
    handleValid,
    handleUpdate,
    handleObject,
    handleDone,
    handleCheck,
    handleClearAll,
    handleAutoPlay,
  };
}
