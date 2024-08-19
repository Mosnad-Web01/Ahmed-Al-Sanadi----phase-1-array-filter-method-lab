
const findMatching = (drivers, name) => {
  const lowerCaseName = name.toLowerCase();
  return drivers.filter(driver => driver.toLowerCase() === lowerCaseName);
};


const fuzzyMatch = (drivers, query) => {
  return drivers.filter(driver => driver.startsWith(query));
};

const matchName = (drivers, name) => {
  return drivers.filter(driver => driver.name === name);
};


