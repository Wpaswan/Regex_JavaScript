let pinRegex=/(^[1-9]{1}[0-9]{2}\\s{0,1}[0-9]{3})$/
let pinCheck=pinRegex.test("A00088")
//It returns false because first character must be from 1 to 9
console.log(pinCheck)
//It returns true
 pinCheck=pinRegex.test(123456)
 console.log(pinCheck)
 //It returns false because no character is allowed at end
 pinCheck=pinRegex.test("12345A")
 console.log(pinCheck)
 //It returns true because spaces are alowed
 pinCheck=pinRegex.test("123 459")
 console.log(pinCheck)
