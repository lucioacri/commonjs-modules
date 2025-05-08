const names = require("./names.js");
const hobbies = require("./hobbies.js");

const init = () => {
  const fullName = names("Lucio", "Acri");
  const fullHobbies = hobbies("film", "calcio", "videogames");
  return {
    fullName,
    fullHobbies,
  };
};
console.log(init());
