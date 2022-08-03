// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

describe("betterThanGrammarly", () => {
  it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized", () => {
      const people = [
          { name: "ford prefect", occupation: "a hitchhiker" },
          { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
          { name: "arthur dent", occupation: "a radio employee" }
        ]
    expect(betterThanGrammarly(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})

//  ReferenceError: betterThanGrammarly is not defined


// b) Create the function that makes the test pass.

// const betterThanGrammarly = (array) => 
//   return array.map =(({key1,key2}) => {
//     return key1.charAt(0).toUpperCase() +
//   })
// }


//Yall really know how to pick some hard prompts, cause boy..... this is a doozy. I've eaten three plates of cheez-its trying to figure this out. I'm stressed and eating my feelings. 


// const betterThanGrammarly = (array) => {
//   for (let i=0; i<array.length; i++) {
//     let value = array[i];
//     for (let key in value) {
//       if (value.hasOwnProperty(key)) {
//           return value[key].charAt(0).toUpperCase() + value[key].substring(1) 
//       }
//     } 
//   }
// }

//I feel like a somehow have to nest a for in loop inside the .map but I could be delious. 

// const betterThanGrammarly = (people) => {
//   let rows = people.length;
//   for(let i=0; i<rows; i++) {
//     for(let prop in people[i]) {
//       // console.log(people[i][prop])
//       return people[i][prop].charAt(0).toUpperCase() + people[i][prop].substring(1)
//     }
//   }
// }

// I was delirious. It didnt work 

//---Puesdocode---//
  //declare a function called betterThanGrammarly 
  //set param of array
  //declare a variable called name 
    // use .split to convert the name key into an array
  //declare a variable firstName 
    // use chartAt and toUppercase to captialize the first letter of the first word in the name key array
  //declare a variable lastName 
    // use chartAt and toUppercase to captialize the first letter of the second word in the name key array
  //use string interpolation to return the sentence.

const betterThanGrammarly = (array) => {
  return array.map(value => {
    let name = value.name.split(" ")
    let firstName = name[0].charAt(0).toUpperCase() + name[0].slice(1)
    let lastName = name [1].charAt(0).toUpperCase() + name [1]. slice(1)
    return `${firstName} ${lastName} is ${value.occupation}.`
  })
}

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

describe("numbersOnly", () => {
  it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3", () => {
    const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
    const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
    expect(numbersOnly(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(numbersOnly(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})

// ReferenceError: numbersOnly is not defined

// b) Create the function that makes the test pass. 

  //----Puesdocode---//
    // declare a function called numbersOnly
    // set a param of array
    // declare a variable newArray
        // use .filter to create and array of numbers using typeof
    // use .map on newArray to return an array with the remainder of the values divided by 3 

    const numbersOnly = (array) => {
      let newArray = array.filter (value => 
        typeof value === "number");
        return newArray.map (value => {
          return value % 3})
    }

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

describe("cubedSum", () => {
  it("takes in an array of numbers and returns the sum of all the numbers cubed", () => {
    const cubeAndSum1 = [2, 3, 4]
    const cubeAndSum2 = [0, 5, 10]
    expect(cubedSum(cubeAndSum1)).toEqual(99)
    expect(cubedSum(cubeAndSum2)).toEqual(1125)
  })
})

// b) Create the function that makes the test pass.

    //----Puesdocode----//
      // declare a function called cubedSum
      // set param of array
      // declare a variable called newArray
        //use .map to return an array with the values cubed 
      // use .reduce on newArray, with arguments of sum and value, to return to sum of the newArray

  const cubedSum = (array) => {
    let newArray = array.map(value => value**3)
    return newArray.reduce((sum, value) => {
      return sum + value
    }, 0)
  }

  
  // Test Suites: 1 passed, 1 total
  // Tests:       2 passed, 2 total