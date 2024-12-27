

{
    class Program
    {
        static void Main(string[] args)
        {
            //Value Types
            //Console.WriteLine("Hello World");
            double number5 = 10.4;
            decimal number6 = 10;
            char character = 'A';
            bool condition = false;
            byte number4 = 255;
            short number3 = 1030;
            int number1 = 1010;
            long number2 = 1020;
            var number7 = 10;
            Console.WriteLine("Number1 is {0}",number1);
            Console.WriteLine("Number2 is {0}", number2);
            Console.WriteLine("Number3 is {0}", number3);
            Console.WriteLine("Numnber4 is {0}",number4);
            Console.WriteLine("Character is : {0}", (int)character);
            Console.WriteLine(((int)Days.Friday));
                Console.ReadLine();
        }
    }
    enum days
    {
        Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday
    }
}