(() => {
    
    NextExercice("3.1");

    let FirstArray = [1, 2, 3, 4, 5]
    let SecondArray = [100,101,102]

    let DisplayArray = 0;
    FirstArray.forEach(x => { DisplayArray += x })
    console.log("Array 1 : " + DisplayArray);
    DisplayArray = 0;
    SecondArray.forEach(x => { DisplayArray += x })
    console.log("Array 2 : " + DisplayArray);

    NextExercice("3.2")

    console.log("Array 1 : " + FirstArray[Math.round(FirstArray.length / 2)-1]);
    console.log("Array 2 : " + SecondArray[Math.round(SecondArray.length / 2) - 1]);
    
    NextExercice("3.3");

    let CopyArray = [];
    FirstArray.forEach(x => { CopyArray.push(x) });
    
    // CopyArray = [...FirstArray];

    console.log("Original: " + FirstArray);
    console.log("Copy: " + CopyArray);

    NextExercice("3.4");

    console.log("Array: " + FirstArray);
    console.log("First element: " + FirstArray[0])
    console.log("Last element: " + FirstArray[FirstArray.length-1])

    
})();

function NextExercice(Tittle)
{
    console.log("")
    console.log("")
    console.log(Tittle)
    console.log("")
}