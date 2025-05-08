const names = require("./names.js");
const hobbies = require("./hobbies.js");

const init = () => {
  const nameEl = names("Lucio", "Acri");
  const fullName = `${nameEl.firstName} ${nameEl.lastName}`;
  const fullHobbies = hobbies("film", "calcio", "videogames");
  return {
    fullName,
    hobbies: fullHobbies,
  };
};
console.log(init());
