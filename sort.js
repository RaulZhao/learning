function insertionSort(arrs) {
  const result = arrs.slice(0);
  let tmp;

  if(arrs.length <= 1) {
    return arrs;
  }
  for(let i=1; i < result.length; i++) {
    let j = i-1;
    while (j >= 0) {
      tmp = result[j+1];
      if(tmp >= result[j]) {
        break;
      }

      [result[j], result[j+1]] = [result[j+1], result[j]];
      j--;
    }
  }
  return result;
}

// When we go through the array (j), if there is no exchange (changed === false), that means it has already sorted.
function bubbleSort(arrs) {
  let tmp;
  let changed;

  if (arrs.length <= 1) {
    return arrs;
  }
  for(let i = 0; i < arrs.length; i++) {
    changed = false
    for(let j = 0; j < arrs.length - 1 - i; j++) {
      if (arrs[j] > arrs[j+1]) {
        tmp = arrs[j];
        arrs[j] = arrs[j+1];
        arrs[j+1] = tmp;
        changed = true;
      }
    }
    if (!changed) {
      return arrs;
    }
  }
  return arrs;
}


function quickSort(array) {
  let arr = array.slice(0);

  function sort(arr) {
    if (arr.length < 2) {
      return arr;
    }
    let left = [];
    let right = [];
    let pivot = arr[0];

    for (let i = 1; i < arr.length; i++) {
      if (pivot < arr[i]) {
        right.push(arr[i]);
      } else {
        left.push(arr[i]);
      }
    }
    return sort(left).concat(pivot, sort(right));
  }

  return sort(arr);
}


function mergeSort(array) {
  function sort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
    let midIndex = Math.floor(arr.length / 2);
    return merge(sort(arr.slice(0, midIndex)), sort(arr.slice(midIndex)));
  }

  function merge(left, right) {
    let temp = [];
    while(left.length > 0 && right.length > 0) {
      let current = left[0] < right[0] ? left.shift() : right.shift();
      temp.push(current);
    }
    return temp.concat(left, right);
  }

  return sort(array);
}


// multiple Ajax call with dependencies
var promise1 = $.ajax({
  url: "/domain/user",
  method: "get",
  data: { "message": "hello" },
  dataType: "json"
});

var promise2 = promise1.then((res) => {
  return $.ajax({
    url: "/domain/order",
    data: { "userId": res.data },
    method: "get",
    dataType: "json"
  });
})

promise2.done((res) => console.log(res));


// Suggested way
var myDeferred = $.post('/url/json/', {json:JSON.stringify({'error':true})})
  .then(function (response) {
      if (response.error) {
        return $.Deferred().reject(response);
      }
      return response;
    },function () {
      return $.Deferred().reject({error:true});
    }
  );

return myDeferred.promise();

// closure
var O = {
  m: function() {
    var self = this;
    console.log(this);
    console.log(this === O); // true
    f();

    function f() {
      console.log(this === O); // false
      console.log(this);
      console.log(self === O); // true
    }
  }
}

function A(name) {
	this.name = name;
	this.print = function() {
    console.log(this.name);
  }
	console.log("+++++Current this is ", this);
}

A.apply(O, ["Magic Happen"]);
