const importmap = {
  imports: {
    calculator: "./src/Calculator.js",
    utilities: "./src/utilities/Utilities.js",
    types: "./src/Types.js",
    object: "./src/Object.js",
    tuple: "./src/Tuple.js",
  },
};

const injectImportmap = (importmap) => {
  const element = document.createElement("script");
  element.type = "importmap";
  element.textContent = JSON.stringify(importmap);
  document.currentScript.after(element);
};

injectImportmap(importmap);
