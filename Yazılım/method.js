{
    Add();
    Add();
    Add();
    console.ReadLine();
}

static void Add()
{
    console.WriteLine("Added!!!");
}
static int Add2(int number1=20, int number2=30)
{
    var result = number1 ++ number2;
    return result
}