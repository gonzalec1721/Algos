import React from "react";

export default function Selection() {
  const select = (arr) => {
    for (var i = 0; i < arr.length; i++) {
      let smallest = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[smallest] > arr[j]) {
          smallest = j;
        }
        var temp = arr[i];
        arr[i] = arr[smallest];
        arr[smallest] = temp;
      }
      console.log(arr);
    }
  };

  return <div>{select([8, 5, 2, 9, 5, 6, 3])}</div>;
}
