Promise.resolve().then(() => {
  console.log(1);
});

queueMicrotask(() => console.log(2));

setTimeout(() => console.log(3), 0);
console.log(4);

new Promise((_) => console.log(5))
  
(async () => console.log(6))();


async function asyncFunction() {
  console.log(1);
  new Promise((_) => console.log(2))
 
  await new Promise(res => {
    setTimeout(() => console.log(3), 0);
    res();
  });
}

new Promise((res) => {
  console.log(4);
  (async () => {
    console.log(5);
    await asyncFunction();
    console.log(6);
  })();
  res();
}).then(() => console.log(7));

console.log(8);


(async () => {
  const asyncFunction = async () => "asyncFunction";
  const promise = new Promise((res) => {
    console.log("promise");
  }).then(() => console.log("promise resolved"));
  console.log("async body");

  queueMicrotask(() => console.log("queueMicrotask"));

  const results = await Promise.all([asyncFunction(), promise]);

  return results;
})();

console.log("script end");
