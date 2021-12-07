import React from "react";

export default function Bubble() {
  const bubble = (arr) => {
    for (let i = arr.length; i > 0; i--) {
      for (let j = i - 1; j < arr.length; j++) {
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    console.log(arr);
  };
  return <div>{bubble([9, 34, 1, 5, 6, 29, 22, 11])}</div>;
}
