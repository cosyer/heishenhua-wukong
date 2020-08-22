import store from "./store";

// var scrollDefaultTime = 3000;
var scrollDefaultTime = 500;
var scrollInterval = 10;
// var scrollDefaultScale = 20;
var scrollDefaultScale = 2;

var lastTouchY;
var mouseLock = false;
var mouseForceLock = false;
var scrollElement;
var scrollStart = 0;
var scrollOffset = 0;
var scrollTime;
var scrollTimeCurrent;
var scrollScale = 3;
var isScrolling = false;
var scrollLockTime = 0;
var scrollCallback;

var storeBase = store.state.base;

function scrollRegister(el) {
  scrollElement = el;
  let mouseEvent =
    "onwheel" in document.createElement("div")
      ? "wheel"
      : document.onmousewheel !== undefined
      ? "mousewheel"
      : "DOMMouseScroll";

  if (mouseEvent == "mousewheel") {
    scrollElement.addEventListener(
      "mousewheel",
      (e) => {
        let y = -0.83 * e.wheelDelta;
        onMouseWheel(y);
      },
      false
    );
  } else if (mouseEvent == "DOMMouseScroll") {
    scrollElement.addEventListener(
      "DOMMouseScroll",
      (e) => {
        onMouseWheel(e.detail);
      },
      false
    );
    scrollElement.addEventListener(
      "MozMousePixelScroll",
      (e) => {
        onMouseWheel(e.detail);
      },
      false
    );
  } else {
    scrollElement.addEventListener(
      mouseEvent,
      (e) => {
        let y = e.deltaY;
        if (e.deltaMode == 1) {
          y = e.deltaY * 32;
        }
        onMouseWheel(y);
      },
      false
    );
  }

  scrollElement.addEventListener(
    "touchstart",
    (e) => {
      lastTouchY = e.targetTouches[0].pageY;
    },
    false
  );
  scrollElement.addEventListener(
    "touchmove",
    (e) => {
      let deltaY = lastTouchY - e.targetTouches[0].pageY;
      lastTouchY = e.targetTouches[0].pageY;
      onMouseWheel(deltaY * 2);
    },
    false
  );
  scrollElement.addEventListener(
    "touchend",
    () => {
      // onMouseWheel(scrollOffset);
    },
    false
  );
}

function onMouseWheel(deltaY) {
  if (mouseLock) {
    return;
  }
  if (!deltaY) {
    return;
  }
  if (storeBase.isPhone) {
    return;
  }
  if (scrollOffset >= 0 && deltaY < 0) {
    setScroll(scrollElement.scrollTop, deltaY);
  } else if (scrollOffset < 0 && deltaY >= 0) {
    setScroll(scrollElement.scrollTop, deltaY);
  } else {
    setScroll(
      scrollElement.scrollTop,
      scrollStart + scrollOffset - scrollElement.scrollTop + deltaY
    );
  }
  startScroll();
}

function setScroll(
  start,
  offset,
  stime = scrollDefaultTime,
  scale = scrollDefaultScale
) {
  scrollStart = start;
  scrollOffset = offset;
  scrollTime = stime;
  scrollTimeCurrent = 0;
  scrollScale = scale;
}

function startScroll() {
  if (isScrolling) {
    return;
  }
  gsScrollControl();
}

function endScroll() {
  scrollLockTime = 0;
  isScrolling = false;
  mouseLock = mouseForceLock;
  if (scrollCallback) {
    scrollCallback();
  }
  scrollCallback = null;
}

function gsScrollControl() {
  isScrolling = true;

  // scroll end
  if (scrollTimeCurrent > scrollTime) {
    if (scrollLockTime > 0) {
      setTimeout(endScroll, scrollLockTime);
      return;
    }
    endScroll();
    return;
  }

  let x = scrollTimeCurrent / scrollTime;
  let y = 1 - Math.pow(1 - x, scrollScale);
  scrollElement.scrollTop = scrollStart + y * scrollOffset;
  scrollTimeCurrent += scrollInterval;

  setTimeout(gsScrollControl, scrollInterval);
}

function scrollLinear(offset, useTime, timeLock, callback = null) {
  mouseLock = true;
  setScroll(scrollElement.scrollTop, offset, useTime, 1);
  scrollLockTime = timeLock;
  scrollCallback = callback;
  startScroll();
}

function scrollSmoothNoLock(offset, timeLock, callback = null) {
  if (mouseLock) {
    return;
  }
  setScroll(scrollElement.scrollTop, offset);
  scrollLockTime = timeLock;
  scrollCallback = callback;
  startScroll();
}

function setMouseLock(isLock) {
  mouseLock = isLock;
  mouseForceLock = isLock;
}

export default {
  scrollRegister,
  scrollLinear,
  scrollSmoothNoLock,
  setMouseLock,
};
