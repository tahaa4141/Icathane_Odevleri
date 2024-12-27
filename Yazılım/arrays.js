String[] students = new String[3];
students[0] = "Engin";
students[1] = "Derin";
students[2] = "Salih";
String[] students2 = { "Engin", "Derin", "Salih"}
students2[3] = "Ahmet";

foreach(var student in students2)
{
    console.WriteLine(student);
}

String[,] region = new String[7, 3]
{
    { "İstanbul", "İzmit", "Balıkesir" },
    { "Ankara", "Konya", "Kırıkkale" },
    { "Antalya", "Adana", "Mersin" },
    { "Rize", "Trabzon", "Samsun" },
    { "İzmir", "Muğla", "Manisa" },
};

for (int i =0; i < regions.GetUpperBound(0); i++)
{
    for(int j=0; j < regions.GetUpperBound(1); j++)
    {
        console.WriteLine(regions[i,j]);
    }
    console.WriteLine("*********");
}

console.WriteLine();
console.ReadLine();