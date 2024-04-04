(() => {


    NextExercice("5.1");

    let series = askTvSerie()
    console.log(series);

    NextExercice("5.2")

    console.log(randomizeCast(series))

})();

function askTvSerie() { 
        
    let TvObject = {
        name: "",
        Productionyear: 0,
            
        Cast: [],
    }

    TvObject.name = prompt("Name of TV serie");
    TvObject.Productionyear = parseInt(prompt("Production year ?"))

    let array = [];

    let n = parseInt(prompt("Number of casts"))
    for (let i = 0; i < n; i++){
        array.push(prompt("Name of cast"))
    }

    TvObject.Cast = array;

    return TvObject
}

function randomizeCast(series) {
    let array = Array.from(series.Cast);
    let RandomArray = [];


    while (array.length > 0) {
        let rdmKey = Math.round(Math.random() * (array.length - 1));
        let str = "" + array.splice(rdmKey, 1);
        RandomArray.push(str)
    }

    return RandomArray;

}

function NextExercice(Tittle)
{
    console.log("");
    console.log("");
    console.log(Tittle);
    console.log("");
}
