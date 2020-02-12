 //Require the generate text function from the util file
 
 const { generateText, checkAndGenerate} = require('./util');

 //Make sure it returns the valid response

 test('should output name and age', () => {

    const text = generateText('Max', 29);

    expect(text).toBe('Max (29 years old)');

 });

 //What happens if the user passes nothing into the function?
 //The function should return undefined

 test('Should output data-less text', () => {

    const text = generateText();
    expect(text).toBe('undefined (undefined years old)');

 });

 test('Should generate a valid text output', ()=>{
     const text = checkAndGenerate('Max', 29);
     expect(text).toBe('Max (29 years old)')
 });

