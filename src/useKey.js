import { useEffect } from "react";
export function useKey(key, action) {
  useEffect(
    function () {
      function callbackFunction(e) {
        if (e.code.toLowerCase() === key.toLowerCase()) {
          action();
        }
      }
      document.addEventListener("keydown", callbackFunction);
      return function () {
        document.removeEventListener("keydown", callbackFunction);
      };
    },
    [action, key]
  );
}
