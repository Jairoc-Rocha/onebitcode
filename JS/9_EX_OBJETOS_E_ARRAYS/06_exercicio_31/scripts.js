let arr01 = [1, 2, 3, 4];
let arr02 = [2, 5, 8, 7, 1, 9, 10, 3];

const elementos = (el) => {
  if (el.length < 5) {
    console.log("Poucos elementos");
  } else {
    console.log("Muitos elementos");
  }
};

elementos(arr01);
elementos(arr02);
