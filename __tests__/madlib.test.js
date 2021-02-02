import Madlib from './../src/madlib.js';

describe('Madlib', () => {
 
  test('should correctly create a madlib object with 6 responses', () => {

    const madlib = new Madlib("hi","hello","wassup","hola","greetings","hey")
    expect(madlib.response1).toEqual("hi");
    expect(madlib.response2).toEqual("hello");
    expect(madlib.response3).toEqual("wassup");
    expect(madlib.response4).toEqual("hola");
    expect(madlib.response5).toEqual("greetings");
    expect(madlib.response6).toEqual("hey");

  });
});