## 使用 Event Loop 結合實際操作範例擇一敘述 Debounce 的運作方式

1. 當 script.js 執行後，第一個被 call 的 function 是 `debounce(updateCountHandler, 400)` ，將其放入 call stack 中執行：

    - 宣告變數 timerId 並賦值為 null。
    - 將第 3 行的 `() => {...}` 賦值給 `debouncedUpdateCount`。
    - 由於此 function 有對 `debounce` 作用域中變數 timerId 的引用，所以 `debounce` 執行完後仍被保留。

2. 在 call stack 執行 `window.addEventListener()`，透過 Web API 來監聽 client 端的 scroll 事件，scroll 時便會將第二個參數 (callback function) 放入 call stack 執行：

          ```js
          () => {
            debouncedUpdateCount();
          };
          ```

3. 接著將 `debouncedUpdateCount` 放入 call stack 並執行，也就是執行：

    ```js
    () => {
      clearTimeout(timerId);
      timerId = setTimeout(func, delay);
    };
    ```

    當 client 端不斷 scroll，將一直觸發執行 `debouncedUpdateCount` ，若還未到達倒數計時器的時間，就透過 `clearTimeout` 清除計時器，並由 `setTimeout` 重設一個計時器，將其回傳的 timerId 賦值給 `debounce` function 中的 timerId。

    由於這是一個 closure，對 `debounce` 作用域中的變數 timerId 在其還需要被引用前並不會被消滅，可以被取用。

4.  若順利完成倒數 400 毫秒後會將 `updateCountHandler` 放入 `callback queue` 等待執行。

5.  此時所有的 function call 都被執行完後，call stack 為空，將 updateCountHandler 放入 `call stack` 中執行，執行完畢，畫面上的 count 增加 1。
