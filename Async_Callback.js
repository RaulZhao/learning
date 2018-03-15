// return promise object
function fetchStockCode(stockName) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`resolve stock code by name - ${stockName}`);
      resolve("003213");
    }, 2500);
  });
}

// return promise object
function fetchStockPrice(stockId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`resolve stock price by code - ${stockId}`);
      resolve({
        'id': stockId,
        'price': 42
      }, 3000);
    })
  });
}

// use nested callback way
fetchStockCode('Spirent Communications INC').then((data) => {
  fetchStockPrice(data).then(res => console.log(`Stock price is ${res.price}`));
});

/* use async way
*  async function will always return promise
*  function after await should return a promise. The return value from await is from resolve(), not reject()
*/
async function getPrice() {
  const stockId = await fetchStockCode('Spirent Communications INC');
  const stockObj = await fetchStockPrice(stockId);

  console.log('all async functions are resolved');
  return stockObj.price;
}

getPrice().then((result) => {
  console.log(`Stock price is: ${result}`);
})