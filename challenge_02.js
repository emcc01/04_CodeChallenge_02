/*********   CODE CHALLENGE 02 **********/

/*
Geben über eine Prompt-Anforderung einen Namen ein
Geben über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus :

Alter 0-5 // Milch  --> age > 0 AND age < 6
Alter 6-12 // Saft
Alter 13-17 // Cola
18 + // Wein

-->zB: "Max trinkt Cola."

/* Getränke-Challenge */

let firstname = prompt("Wie lautet der Name");
let age =  parseInt(prompt("wie alt ist " + firstname));

if (age > 0 && age < 6)   // && = Und-Verknüfung
{
    console.log(firstname + " trinkt Milch.");
}
else if (age < 13)
{
    console.log(firstname + " trinkt Saft.");
}
else if (age < 18)
{
    console.log(firstname + " trinkt Cola.");
}
else if (age >= 18)
{
    console.log(firstname + " trinkt Wein.");
}
else 
{
    console.log(firstname + " trinkt Tee.");
}

