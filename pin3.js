let pinRegex=/(^[1-9]{1}[0-9]{4}[0-9]{1})$/
let pinCheck=pinRegex.test("A00088")
//It returns false because first character must be from 1 to 9
console.log(pinCheck)
//It returns true
 pinCheck=pinRegex.test(123456)
 console.log(pinCheck)
 //It returns false because no character is allowed at end
 pinCheck=pinRegex.test("12345A")
 console.log(pinCheck)