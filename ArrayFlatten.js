/** input: [[1,2],3,{"name": "Alice"},5,8,[8,9]]
 *  output: [1, 2, 3, {"name": "Alice"}, 5, 8, 8, 9]
*/

// solution1
function flatten(array) {
  const result = [];
  if (!Array.isArray(array)) {
    return array;
  }

  function flat(arr) {
    arr.forEach((value) => {
      if(Array.isArray(value)) {
        flat(value);
      } else {
        result.push(value);
      }
    })
  }

  flat(array);
  return result;
}

//solution2
function flatten(array) {
  if(!Array.isArray(array)) {
    return array;
  }
  return array.reduce((res, val) => {
    let tmp = Array.isArray(val) ? flatten(val) : val;

    return res.concat(tmp);
  }, []);
}
