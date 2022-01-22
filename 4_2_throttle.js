// 實作 Throttle

function test() {
  console.log('test');
}

function throttle(func, timeout) {
  // intialize the timerId
  let timerId;
  return (arg) => {
    // if there has a timerId, means a timeout is working so just do nothing and return
    if (timerId) return;
    // if there is no timerId, let's start a timeout and run the callback function when the time is out
    timerId = setTimeout(() => {
      // run the func passed by 'func' parameter of throttle function
      func(arg);
      // once we run the func, we also assign the timerId to undefined then we can start a new one
      timerId = undefined;
    }, timeout);
  };
}

const throttleFunc = throttle(test, 3000);
