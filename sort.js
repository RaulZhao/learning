function insertionSort(arrs) {
  let result = arrs.slice(0);
  let tmp;

  if (arrs.length <= 1) {
    return arrs;
  }
  for(let i = 1; i < arrs.length; i++) {
    tmp = arrs[i];
    let j = i-1;
    for( j ; j >= 0; j--) {
      if(tmp >= result[j]) {
        break;
      } else {
        result[j+1] = result[j];
      }
    }
    result[j+1] = tmp;
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


// jquery deffered
var jq = document.createElement('script');
jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js";
document.getElementsByTagName('head')[0].appendChild(jq);

var defered = jQuery.Deferred();
var wait = function(dfd) {

  setTimeout(function() {
    // throw new Error("Bomb");
    dfd.resolve("******success callback...");
  }, 5000);

  setTimeout(function() {
    dfd.reject("*******error callback...");
  }, 6000);

  return dfd;
}

try {
  $.when(wait(defered))
    .done((res) => console.log("from first done ",res))
    .done((res) => console.log("from second done ", res))
    .fail((res) => console.log("from fail ", res))
    .then((res) => console.log("from then ", res), (res) => {console.log("from then", res)})
    .always((res) => console.log("from always ", res));
} catch (e) {
  console.log("Error happened", e);
}


// then() will return new Promise object. The return value of .then() callback will become the parameter for next promise chain callback
var defer = jQuery.Deferred();

defer.done(function(a,b){
            return a * b;
}).done(function( result ) {
            console.log("result = " + result);
}).then(function( a, b ) {
            return a * b;
}).done(function( result ) {
            console.log("result = " + result);
}).then(function( a, b ) {
            return a * b;
}).done(function( result ) {
            console.log("result = " + result);
});

defer.resolve( 2, 3 );

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
