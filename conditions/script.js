const priceToPay = () => {

    var priceFullTarif = 10
    var priceTarifReduce = 8
    var ageOfClient = window.prompt("enter you're age")

    if (ageOfClient < 18) {
        window.alert("the price for you is " + priceTarifReduce)
    }
    else {
        window.alert("the price for you is " + priceFullTarif)

    }
}

priceToPay()

const maximum = () => {

    var number1 = window.prompt("enter first a number")
    var number2 = window.prompt("enter a second number")
    var number3 = window.prompt("enter a third number")
    if (number1 > number2 && number1 > number3)  {

        window.alert("the biggest number is " + number1)

    }

    else if (number2 > number1 && number2 > number3) {

        window.alert("the biggest number is " + number2)
    }

    else if (number3 > number2 && number3 > number1) {

        window.alert("the biggest number is " + number3) 
    }

    else {

        window.alert("error")
    }
}

maximum()

const dices = () => {

    var dice1 = Math.floor(Math.random()*3)
    var dice2 = Math.floor(Math.random()*3)
    var dice3 = Math.floor(Math.random()*3) 

    if (dice1 == dice2 && dice1 == dice3) {

        window.alert("there is 3 identical value, the first dice : " + dice1 + " and the dice 2 : " + dice2 + " and the dice 3 : " + dice3)
    }

    else if (dice1 == dice2) {

        window.alert("there is 2 identical value, the first dice : " + dice1 + "and the dice 2 : " + dice2 )
    }
    else if (dice1 == dice3) {

        window.alert("there is 2 identical value, the first dice : " + dice1 + "and the dice 3 : " + dice3 )
    }

    else {
        window.alert(" there is no identical values " )
    }

}

dices()

const day = () => {

    var numberOfDay = window.prompt( "enter a number of day ")
    if (numberOfDay == 1) {

        window.alert(" it's monday ")
    }
    
    else if  (numberOfDay == 2) {

        window.alert(" it's thuesday ")

    }

    else if  (numberOfDay == 3) {

        window.alert(" it's wednesday ")

    }

    else if (numberOfDay == 4) {

        window.alert("it's thursday")
    }

    else if  (numberOfDay == 5) {

        window.alert(" it's friday ")

    }

    else if  (numberOfDay == 6) {

        window.alert(" it's saturday ")

    }

    else if  (numberOfDay == 7) {

        window.alert(" it's sunday ")

    }

}

day()

const printer = () => {

    numberOfCopy = window.prompt( " how much copy do you want ? ")
    if (numberOfCopy <= 10) {
        window.alert( "the price for " + numberOfCopy + " is 0.12 $")
    }

    else if (numberOfCopy > 10 && numberOfCopy <= 20) {
        window.alert( "the price for " + numberOfCopy + " is 0.11 $")
    }
    
    else  {
        window.alert( "the price for " + numberOfCopy + " is 0.10 $")
    }
}

printer()