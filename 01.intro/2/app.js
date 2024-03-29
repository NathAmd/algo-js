(() => {
    NextExercice("2.1");

    let message = prompt("Your Age ?");
    console.log("Your age is: " + message);

    if (message >= 18)
    {
        console.log("You are an adult");
    } else {
        console.log("You are not yet an adult");
    }

    NextExercice("2.2");

    let pass = true;

    while (pass) {
        let min = prompt("Give me a minimum number ?");
        let max = prompt("Give me an maximum number ?");
        let current = prompt("Give me your Number ?");

        if (current <= max && current >= min) {
            console.log("Your number is good");
            pass = false;
        } else {
            console.error("Your number is not good, retry");
        }
    }

        //Ex 2.3

    let w = 0;
    let LoadingBar = "";
    let oneOnTwo = false;
    while (w < 100) {
        w++;
        oneOnTwo = !oneOnTwo;
        //console.clear();
        NextExercice("2.3");


        console.log("Loading: " + w + "%")
        console.log(LoadingBar)
        LoadingBar = oneOnTwo ? LoadingBar + "#" : LoadingBar;
    }

    NextExercice("2.5");

    pass = true;
    let echec = false
    while (pass) {
        let Fnumber = echec ? prompt("No No No, is not a good number...")  : prompt("What is your favorite number ? the reponse is not 42");

        if (Fnumber != 42 ) {
            echec = true;
        } else {
            pass = false;
        }
    }

    NextExercice("2.6")

    let nbr = prompt("Give a number of the week") 
    nbr = nbr < 1 ? 1 : nbr > 7 ? 7 : nbr;

    let NameOfDay = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"]
    nbr--;
    console.log(NameOfDay[nbr]);

    NextExercice("2.7")

    let Nbr = [];

    let nbrOperation = prompt("Number of repeat operation ?")
    let repeat = 0;
    while (repeat < nbrOperation) {
        repeat++;
        Nbr.push(prompt("Give me your " + repeat + " number"));
    }

    let Addnumber = 0;
    Nbr.forEach(x => {
        Addnumber += parseFloat(x);
    });

    console.log("new number with last " + repeat +" number : " + Addnumber)


})();

function NextExercice(Tittle)
{
    console.log("")
    console.log("")
    console.log(Tittle)
    console.log("")
}