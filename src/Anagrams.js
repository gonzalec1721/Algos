import React from "react";

export default function Anagrams() {
  /**
   * Given a single input string, write a function that produces all possible anagrams
   * of a string and outputs them as an array. At first, don't worry about
   * repeated strings.  What time complexity is your solution?
   *
   * Extra credit: Deduplicate your return array without using uniq().
   */

  /**
   * example usage:
   * var anagrams = allAnagrams('abc');
   * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
   */
  const ana = (gram) => {
    // let strGram = gram.split("");
    // // console.log(strGram);
    let data = {};
    function anagram(ana, str) {
      if (str === "") {
        data[ana] = 1;
      }

      for (var i = 0; i < str.length; i++) {
        console.log(ana + str[i], str.slice(0, i) + str.slice(i + 1));
        anagram(ana + str[i], str.slice(0, i) + str.slice(i + 1));
      }
    }
    anagram("", gram);
    console.log(Object.keys(data));
  };
  return <div>{ana("abc")}</div>;
}
