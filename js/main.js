function getOrders() {
  const END_POINT = "/orders/list";
  const BASE_URL = "https://my.prom.ua/api/v1";
  const API_KEY = "78d8fe6d2f7c7a14b22bd069a39f91ad3635ddc6";
  const params = new URLSearchParams({
    Authorization: API_KEY,
  });

  return fetch(`${BASE_URL}${END_POINT}?${params}`).then((res) => {
    if (!res.ok) {
      throw new Error(res.status);
    }
    return res.json();
  });
}

getOrders();

// function onlyDuplicates(str) {
//   let newStr = "";

//   for (let i = 0; i < str.length; i++) {
//     if (str.slice(i + 1).includes(str[i])) {
//       newStr += str[i];
//       console.log(newStr);
//     }
//   }
//   let finalStr = "";
//   for (let i = 0; i <= str.length; i++) {
//     if (newStr.includes(str[i])) {
//       finalStr += str[i];
//       console.log(finalStr);
//     }
//   }
//   str = newStr;
//   return str;
// }
// onlyDuplicates("instinctive");

// const str = "instinctive";

// String.prototype.isDuplicate = function (char) {
//   return this.split(char).length > 2;
// };
// console.log(String.prototype);
// function onlyDuplicates(str) {
//   return [...str].filter((s) => str.isDuplicate(s)).join``;
// }
// console.log(onlyDuplicates(str));
