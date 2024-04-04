(() => {

    NextExercice("Extra ( Change )");

    console.log(computeChange(parseFloat(prompt("Price ?")), parseFloat(prompt("You have ?"))));
    
    NextExercice("Extra ( Manhattan )");

    console.log(manhattan(1, 1, 2, 2)); // return 2
    console.log(manhattan(1, 1, 1, 1)); // return 0
    console.log(manhattan(5, 4, 3, 2)); // returns 4

    NextExercice("Extra ( Space-age )");

    console.log(spaceAge(365.25 * 24 * 60 * 60, 'Earth'));
    console.log(spaceAge(365.25 * 24 * 60 * 60, 'Mars'));
    console.log(spaceAge(365.25 * 24 * 60 * 60, 'Mercury'));
    console.log(spaceAge(365.25 * 24 * 60 * 60, 'Venus'));
    console.log(spaceAge(365.25 * 24 * 60 * 60, 'Jupiter'));


})();

function manhattan(streetA, avenueA, streetB, avenueB) {
    return Math.abs((streetA - streetB) + (avenueA - avenueB));
}

function spaceAge(Age, Planete) {
    let EarthBase = 31557600;
    var PlaneteScale = { "Earth": 1, "Mars": 1.8808158, "Mercury": 0.2408467, "Venus": 0.61519726, "Jupiter": 11.862615 }

    return (Age / EarthBase) * PlaneteScale[Planete];
}

function computeChange(price, moneyHanded) {
    let Money = []; 
    price = parseFloat(price);
    moneyHanded = parseFloat(moneyHanded);


    let TypeMoney = [200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.01]
    if (price > moneyHanded) { return Money; }
    

    let i = 0;

    while (price >= 0.01) {
        let Temp = parseFloat(TypeMoney[i]);

        if (Temp <= price)
        {
            price -= Temp;
            Money.push(Temp);
        }
        else
        {
            i++;
        }
    }
    

    return Money;
}

function NextExercice(Tittle)
{
    console.log("");
    console.log("");
    console.log(Tittle);
    console.log("");
}
