const names = (firstName, lastName) => {
  return {
    firstName,
    lastName,
  };
};
console.log(names("Lucio", "Acri"));

module.exports = names;
