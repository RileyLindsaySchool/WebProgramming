function slide15()
{
    let numbers = [10, 20, 30];

    let [a, b, c] = numbers;

    console.log(a);
    console.log(b);
    console.log(c);
}

function slide16()
{
    const numbers = [1, 2, 3, 4, 5];

    const [first, , third, , fifth] = numbers;

    console.log("First number:", first);
    console.log("Third number:", third);
    console.log("Fifth number:", fifth);
}

console.log("Slide 15");
slide15();
console.log("========\n");

console.log("Slide 16");
slide15();
console.log("========\n");