//1 to n
const printNumbers = () => {
    var n = window.prompt("enter a number")
    var count = 0
      do {
        count = count + 1
        window.alert(count)
    } while (count != n)
}
printNumbers()

//descending order
const printNumbersDescendingOrder = () => {
    var n = window.prompt("enter a number")
    var count = 0
    do {
        n = n - 1
        window.alert(n)
    } while (n != count)
}
printNumbersDescendingOrder()

//-n to n
const printNumbersNegativeToPositive = () => {
    var n = window.prompt("enter a number")
    var count = ( n -n ) -n
    do {
        count = count + 1
        window.alert(count)
    } while (count != n)
}
printNumbersNegativeToPositive()

//impairs number
const printNumbersImpairToN = () => {
    var n = window.prompt("enter a number")
    var count = 0
    do {
        count = count + 1
        if ( count % 2 != 0 ) {
            window.alert(count)
        }
        

    }while (count != n)
}
printNumbersImpairToN()

//random number to it

const printNumberRandom = () => {
    var n = Math.ceil(Math.random() * 10)
    var count = 0
    do {
        count = count + 1
        window.alert(count)
    } while (count != n)
}
printNumberRandom()

//throw dices
const throwDices = () => {
    var numberOfThrow = 3
    do {
        var dices = Math.ceil(Math.random() * 3)
        numberOfThrow = numberOfThrow - 1
        window.alert(dices)
        
    } while (numberOfThrow != 0)
    
}
throwDices()

//pairs number
const printNumbersPairsToN = () => {
    var n = window.prompt("enter a number")
    var count = 0
    do {
        count = count + 1
        if ( count % 2 == 0 ) {
            window.alert(count)
        }
        

    }while (count != n)
}
printNumbersPairsToN()

//perfectNumber 



