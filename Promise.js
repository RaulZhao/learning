// ES6 Promise
let p1 = function() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("I am Promise 1");
    }, 2000);
  });
}

let p2 = function () {
  return new Promise((resolve, reject) => {
    setTimeout(reject, 4000, "I am Promise 2");
  });
}

let p3 = "I am just a String";

p1().then( val => {
  console.log(val);
  return p2();
}).then( val2 => {
  console.log(val2);
}).then(() => {
  console.log(p3);
}).catch(e => {
  console.log("Error:", e);
});

Promise.all([p1(), p2(), p3]).then((values, sec) => {
  console.log(sec);
  console.log(values);
}).catch(e => {
  console.log.apply(console, ["Error:", e]);
})


// JQuery deffered
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
