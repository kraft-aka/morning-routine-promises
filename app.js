const item = document.querySelector(".item");

function getUp() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Getting Up! 😒"), 1500);
  });
}

function makeBed() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Making my bed! 😥"), 1000);
  });
}

function brushTeeth() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Brushing my teeth! 😒"), 3000);
  });
}

function makeBreakfast() {
  return new Promise((resolve, reject) => {
    setTimeout(
      () => resolve("Cooking eggs, toasting bread, making tea! 😃"),
      4000
    );
  });
}

function eatBreakfast() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Eating my brakfast 😋"), 4000);
  });
}

function readNews() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Reading Spiegel, BBC news! 😜"), 1500);
  });
}

const successHanlder = (res) => console.log(res);
const rejectHandler = (rej) => console.log(rej);

//getUp().then(successHanlder,rejectHandler)

// async function Routine() {
//   await brushTeeth(),
//   await makeBed(),
//   await brushTeeth(),
//   await makeBreakfast(),
//   await eatBreakfast(),
//   await readNews()
// }

// resolving all promises
async function routine() {
  await Promise.all([
    getUp(),
    brushTeeth(),
    makeBed(),
    makeBreakfast(),
    eatBreakfast(),
    readNews(),
  ]).then((values) => {
    values.forEach(value=> item.innerHTML += `<li>${value}</li>`)
  });
}

