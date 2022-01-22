function debounce(func, delay) {
  let timerId = null;
  return () => {
    clearTimeout(timerId);
    timerId = setTimeout(func, delay);
  };
}

function updateCountHandler() {
  document.querySelector('.count').innerHTML++;
}

const debouncedUpdateCount = debounce(updateCountHandler, 400);

window.addEventListener('scroll', () => {
  debouncedUpdateCount();
});
