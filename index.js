function introduction(name) {
    return(`Hi, my name is ${name}.`);
}   
function introductionWithLanguage(name, language){
    return(`Hi, my name is ${name} and I am learning to program in ${language}.`);
}
function sayHelloTo(firstName) {
    console.log(`Hello, ${firstName}!`);
  }
  function sayHelloTo(firstName = "User") {
    console.log(`Hello, ${firstName}!`);
  }
  function introductionWithLanguageOptional(name, language = "JavaScript") {
    console.log(`The two values are ${value1} and ${value2}.`);
  }
  