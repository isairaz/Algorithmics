//print all element of a array
var arr = ["John", "Marc", "Jean-Pustule","Emmanuel-deLaCroixRusse","EmmanuelCaVa", "Marc-Dragon","Emmanuel-Le-Sage","Ben-Laden"]
window.alert(arr)

//maximum
var arr2 = [window.prompt("enter number 1"), window.prompt("enter number 2"), window.prompt("enter number 3")]
window.alert(Math.max(...arr2))

//minimum
var arr3 = [window.prompt("enter number 1"), window.prompt("enter number 2"), window.prompt("enter number 3")]
window.alert(Math.min(...arr3))

//minimum position
var arr4 = [4,5,2]
window.alert(arr4.indexOf(Math.min(...arr4)))


//ascendant 
var arr5 = [window.prompt("enter number 1"), window.prompt("enter number 2"), window.prompt("enter number 3")]
if (arr5[0] < arr5[1] && arr5[0] < arr5[1] && arr5[1] < arr[2]) {
    window.alert("true")
}
else {
    window.alert("false")
}