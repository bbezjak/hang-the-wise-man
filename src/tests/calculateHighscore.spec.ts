import calculateHighscore from "../helpers/calculateHighscore";

const genericObject = { length: 25, uniqueCharacters: 14, duration: 25, errors: 2 };

test("2 different lengths", () => {
  const object1 = Object.assign({}, genericObject);
  const object2 = Object.assign({}, genericObject);

  object1.length = 40;
  object2.length = 30;

  const highscore1 = calculateHighscore(object1);
  const highscore2 = calculateHighscore(object2);

  expect(highscore1).toBeGreaterThan(highscore2);
});

test("2 different unique characters", () => {
    const object1 = Object.assign({}, genericObject);
    const object2 = Object.assign({}, genericObject);
  
    object1.uniqueCharacters = 70;
    object2.uniqueCharacters = 40;
  
    const highscore1 = calculateHighscore(object1);
    const highscore2 = calculateHighscore(object2);
  
    expect(highscore1).toBeGreaterThan(highscore2);
  });

  test("2 different durations", () => {
    const object1 = Object.assign({}, genericObject);
    const object2 = Object.assign({}, genericObject);
  
    object1.duration = 60;
    object2.duration = 30;
  
    const highscore1 = calculateHighscore(object1);
    const highscore2 = calculateHighscore(object2);
  
    expect(highscore1).toBeLessThan(highscore2);
  });

  test("2 different error number", () => {
    const object1 = Object.assign({}, genericObject);
    const object2 = Object.assign({}, genericObject);
  
    object1.errors = 5;
    object2.errors = 3;
  
    const highscore1 = calculateHighscore(object1);
    const highscore2 = calculateHighscore(object2);
  
    expect(highscore1).toBeLessThan(highscore2);
  });
