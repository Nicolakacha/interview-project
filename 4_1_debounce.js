// 實作 Debounce

function test() {
  console.log('test');
}

function debounce(func, delay) {
  // intialize the timerId
  let timerId = null;
  return (arg) => {
    // if there has a timeId already, clear the timeout and set a new one
    clearTimeout(timerId);
    // set a new timeout
    timerId = setTimeout(() => {
      func(arg);
    }, delay);
  };
}

const debounceFunc = debounce(test, 2000);
