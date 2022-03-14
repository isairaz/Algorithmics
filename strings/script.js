//concatenation
const concatenation = () => {
    var firstTring  = window.prompt("put a text")
    var secondString = window.prompt("put a second text")
    var oneString = firstTring + " " + secondString
    window.alert(oneString)
}
concatenation()

//lowercase 
const lowercase = () => {
    var charachter = window.prompt("put a uppercase charachter ")
    window.alert(charachter.toLowerCase())
}
lowercase()

//uppercase
const uppercase = () => {
    var charachter = window.prompt("put a lowercase sentence")
    window.alert(charachter.toUpperCase())
}
uppercase()

//convert name
const convertName = () => {
    var name = [window.prompt("enter a surname"), window.prompt("enter a name") ]
    window.alert(name[1] + " " +  name[0])
}
convertName()

//delete white space
const deleteWhiteSpace = () => {
    var sentence = window.prompt("enter a sentence with white space")
    window.alert(sentence.replace(/\s+/g))
}
deleteWhiteSpace()