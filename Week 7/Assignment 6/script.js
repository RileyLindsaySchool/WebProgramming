let form = document.getElementById("birth-year-form");
form.addEventListener("submit", function (event)
{
    // Do not reload the page
    event.preventDefault();

    // Proceed to the checkAgePrime() function
    checkAgePrime();
})


function calculateAge(birthYear)
{
    let currentYear = new Date().getFullYear();
    return currentYear - birthYear;
}


function isPrime(number)
{
    // No number less than 2 can be prime
    if (number < 2)
    {
        return false;
    }

    // Only check for factors less than or equal to the square
    // root, since a factor can only ever be less than or equal
    // to the square root.
    let squareRoot = Math.sqrt(number);
    for (let factor = 2; factor <= squareRoot; factor++)
    {
        // If factor is a factor of number, then number is not prime
        if ((number % factor) == 0)
        {
            return false
        }
    }

    // If none of the above checks return false, then the number
    // must be prime.
    return true;
}


function checkAgePrime()
{
    let currentYear = new Date().getFullYear();
    let birthYear = document.getElementById("birth-year").value;

    // Only display age statistics if year is valid
    if (birthYear != "" && birthYear >= 1900 && birthYear <= currentYear)
    {
        let age = calculateAge(birthYear);
        let prime = isPrime(age);
        if (prime)
        {
            alert("Your age is: " + age + "\n" + age + " is a Prime number.");
        }
        else
        {
            alert("Your age is: " + age + "\n" + age + " is NOT Prime number.");
        }
    }
    else
    {
        alert("Please enter a valid birth year.");
    }
}