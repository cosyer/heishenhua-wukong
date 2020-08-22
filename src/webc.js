import axios from "axios";
import qs from "qs";
import store from "./store";
import router from "./router";
import B1 from "js-md5";

var tk = "e42YfaRWeiKWFGx7";
var suf = "ejL6PlceLbT49i2j";

// list or dict copy
function objectCopy(o) {
  var output, v, key;
  output = Array.isArray(o) ? [] : {};
  for (key in o) {
    v = o[key];
    output[key] = typeof v === "object" ? objectCopy(v) : v;
  }
  return output;
}

// string format: strFormat("test{1} aaa{2}bbb", ["arg1", "arg2"])
function strFormat(s, args = []) {
  return s.replace(/\{(\d+)\}/g, function(m, n) {
    return args[n];
  });
}

// date format: dateFormat(new Date(), "yyyy-mm-dd HH:MM:SS")
function dateFormat(d, fmt) {
  var o = {
    "m+": d.getMonth() + 1,
    "d+": d.getDate(),
    "H+": d.getHours(),
    "M+": d.getMinutes(),
    "S+": d.getSeconds(),
    "q+": Math.floor((d.getMonth() + 3) / 3),
    s: d.getMilliseconds(),
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (d.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  }
  for (var k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)
      );
    }
  }
  return fmt;
}

// random num, min <= x <= max
function randomNum(min, max) {
  return Math.round(Math.random() * (max - min)) + min;
}

// copy to clipboard
function copyToClipboard(cptext) {
  let el = document.createElement("textarea");
  document.body.appendChild(el);
  el.innerText = cptext;
  el.innerHTML = cptext;
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
  return true;
}

// get url param
function getUrlParam(k) {
  var result = new RegExp(k + "=([^&]*)", "i").exec(window.location.search);
  return (result && decodeURIComponent(result[1])) || "";
}

// url redirect
function urlRedirect(url) {
  window.open(url, "_blank");
}

// http client
function http(method, url, data = {}, callbackFunction, timeout = 5000) {
  let params = {};
  let data2 = {};
  if (method == "get" || method == "delete") {
    params = data;
  } else {
    data2 = data;
  }
  axios({
    method: method,
    url: url,
    baseURL: store.state.base.currentServerUrl,
    params: params,
    data: data2,
    timeout: timeout,
    paramsSerializer: (params) => {
      return qs.stringify(params, { arrayFormat: "repeat" });
    },
  })
    .then(function(response) {
      callbackFunction(0, response.data);
    })
    .catch(function(error) {
      console.log(error);
      let rc = 1;
      let msg = error;
      if (error.response) {
        // if (error.response.status === 401) {
        //   // window.location = error.response.data;
        //   // return false;
        //   if (!tokenRefreshLock) {
        //     tokenRefreshLock = true;
        //     http(
        //       "get",
        //       gsucAuthRefreshUrl,
        //       {
        //         redirect_uri: window.location.href
        //       },
        //       tokenRefreshCallback
        //     );
        //   }
        //   return false;
        // }
        rc = error.response.status;
        msg = error.response.data;
      }
      // if (errorAlert) {
      //   message("error", msg);
      // }
      callbackFunction(rc, msg);
    });
}

// set global variable
function gSet(gkey, data) {
  store.commit("setGlobalData", { k: gkey, v: data });
}

// get global variable
function gGet(gkey) {
  return store.state.custom.globalData[gkey];
}

// reload router-view
function routerReload() {
  store.commit("setRouterLoad", false);
}

// check if dict is not empty
function dictNotEmpty(o) {
  for (let i in o) {
    return true;
  }
  return false;
}

// check if window is active
function checkWindowActive() {
  if ("hidden" in document) {
    return !document.hidden;
  } else if ("webkitHidden" in document) {
    return !document.webkitHidden;
  } else if ("mozHidden" in document) {
    return !document.mozHidden;
  }
  return true;
}

// generate encrypt key
function genEncryptKey(data) {
  return B1(tk + data + suf);
}

// generate encrypt token
function genEncryptToken(k) {
  let d = genEncryptKey(k);
  let b = d.split("");
  let sp = 3;
  let stmp = "";
  for (let i = 0, j = b.length - sp; i + sp < j; i = i + sp, j = j - sp) {
    for (let k = 0; k < sp; k++) {
      stmp = b[i + k];
      b[i + k] = b[j + k];
      b[j + k] = stmp;
    }
  }
  return b.join("");
}

export default {
  store,
  router,
  objectCopy,
  strFormat,
  dateFormat,
  randomNum,
  copyToClipboard,
  getUrlParam,
  http,
  gSet,
  gGet,
  urlRedirect,
  routerReload,
  dictNotEmpty,
  checkWindowActive,
  genEncryptToken,
};
