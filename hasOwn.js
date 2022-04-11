const levelStack = {
  JavaScript: "90%",
  TypeScript: "80%",
  Angular: "60%",
  React: "80%",
  Vue: "10%",
};

console.log(Object.prototype.hasOwnProperty.call(levelStack, "JavaScript"));
//Al estilo tradicional💻

console.log(Object.hasOwn(levelStack, "JavaScript"));
//Al estilo Ecma2022✅
