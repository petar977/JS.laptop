var x = prompt("Unesi prvi broj: ");
var o = prompt("Unesi operator(+, -, *, /): ");
var y = prompt("Unesi drugi broj: ");

if (Number.isInteger(parseInt(x)) & Number.isInteger(parseInt(y)))
    {
        alert ("Rezultat je: " + calculator(parseInt(x),o,parseInt(y)));
    }
else{
    alert ("Pogresan unos. Unesi broj za racunanje!")
}



function calculator (x,o,y){
    if (o == "+"){
        return x+y
    }
    else if (o =="-"){
        return x-y
    }
    else if (o =="*"){
        return x*y
    }
    else if (o =="/"){
        return x/y
    }
    else
    {
        alert("Pogresan unos. Unesi (+, -, *, /) za racunanje!")
    }
}
