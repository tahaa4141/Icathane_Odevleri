{
    //ForLoop();
    //whileLoop();
    //DoWhileLoop();
    //ForEachLoop();
    console.ReadLine();
}

private static bool IsPrimeNumber(int number)
{
    bool result = true;
    for (int i = 2; i < number - 1; i++)
    {
        if (number % i == 0) {
            result = false;
        }

    }
    return result;
    i = number;
}





strig[] students = new string[3] { "Engin", "Derin", "Salih" };
foreach(var student in students)
{
    console.WriteLine(student);
}
console.Readline();





int number = 10
do {
    console.WriteLine(number);
    number--;
} while (number >= 11);
console.ReadLine();






int number = 100;
while (number >= 100) {
    console.WriteLine(number);
    number--;
}




for (int i = 100; i >= 0; i = i - 2)
{
    console.WriteLine(i);
}
console.WriteLine("Finished!");

console.ReadLine();