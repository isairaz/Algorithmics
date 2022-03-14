//Algorithm who calculate the sum of 2 numbers//
const sum = () => {
    var a = 5
    var b = 7
    var results =  a + b
    console.log(results)
}

sum()
//Algorithm who calculate the division of 2 numbers//
const division = () => {
    var a = 85
    var b = 15
    var results = a / b
    console.log(results)
}
division()

// //Algorith who calculate the modulo of two input numbers
const modulo = () => {
    var a = window.prompt("enter a value for a")
    var b = window.prompt("enter a value for b")
    var results = a % b
    console.log(results)
}
modulo()

// //Algorithm who concatenates two sentences together//
const concatenate = () => {
    var a = "Hello world"
    var b = " , how are you ?"
    var results = a + b
    console.log(results)

}
concatenate()

//algorithm which receives a price without VAT and returns the price with VAT//
const vat = () => {
    var a = window.prompt("enter the price without VAT")
    var results = a % 21 + a
    console.log(results)
}
vat()

//algorithm which receives the radius of a circle and calculate its surface.
const radius = () => {
    var a = window.prompt("put the radius of the circle")
    var pi =  3.1415926
    var results = a * pi
    console.log(results)
}
radius()

// algorithm which receives the time of day in three different numbers, the hour, the minutes and the seconds and returns the number of seconds since midnight//
const time = () => {
    var hour = window.prompt("give the hour")
    var minutes = window.prompt("give the minutes")
    var seconds = window.prompt("give the seconds")
    var timeOfTheDay = [hour, minutes, seconds]
    var results =  ( hour * 60 * 60 ) + (minutes * 60 )  + seconds
    console.log(results)
}
time()
