class Vector2 { // cree une class Vector2 pour reprensenter un point sur deux axe
    constructor(x, y) {
        this.x = x;
        this.y = y;

        console.log("New vector2: " + this.x +" , " + this.y)
    }

    static Distance(A, B) {
        let x_calc = A.x - B.x; // calcul la distance en X
        let y_calc = A.y - B.y; // calcul la distance en Y

        return Math.sqrt((x_calc * x_calc) + (y_calc * y_calc)); // renvoie la distance des deux point sqrt(x²+y²)
    }
}


(() => {

    NextExercice("4.1");


    console.log(calcSurface(5, 5));
    

    NextExercice("4.2");


    console.log(Rand10());

    NextExercice("4.3");


    let grp = multiRand(6);
    console.log(grp);

    NextExercice("4.4");

    console.log(pickLearner(grp, 3));

    NextExercice("4.5");

    p1 = new Vector2(-2,2);
    p2 = new Vector2(2, -2);
    console.log(Vector2.Distance(p1, p2));

    NextExercice("4.6");

    console.log("Factorial of number 10 :" + factorial(10))

})();

function calcSurface(Length, Width)
{
    return Length * Width; // renvoie l'air d'un rectangle
}

function Rand10() {
    return Math.round(Math.random() * 10); // renvoie un nombre entre 0 et 10
}

function multiRand(n) {
    let Array = []; // cree un tableau pour stocker les nombre aleatoire
    
    for (let i = 0; i < n; i++){
        Array.push(Rand10()) //rajoute les nombre aleatoire dans le tableau
    }

    return Array;
}

function pickLearner(Array, n) {
    n = n < 0 ? 0 : n > Array.Length ? n = Array.Length - 1 : n;
    let TempArray = [];

    Array.forEach(x => {
        TempArray.push(x);
    });

    let ReturnArray = [];

    let i = 0;
    while (i < n) {
        ReturnArray.push(TempArray.splice(randomRange(0, Object.keys(TempArray).length - 1), 1)[0])
        i++;
    }


    return ReturnArray;
}

function randomRange(Min, Max) {
    let Diff = parseInt(Math.abs(Max - Min));
    let R = parseInt(Math.random() * Diff);
    console.log((Min + R) + " -> " + Min + " , " + Max);
    return Min + R;
}

function factorial(Value) {
    return Value != 1 ? Value * factorial(Value - 1) : 1;
}

function NextExercice(Tittle)
{
    console.log("");
    console.log("");
    console.log(Tittle);
    console.log("");
}
