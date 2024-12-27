{
    customermanager customermanager = new customermanager();
    customermanager.Add();
    customermanager.Update();

    productmanager productmanager = new productmanager();
    productmanager.Add();
    productmanager.Update();

    console.ReadLine();
}

public void addEventListener()
{
    console.WriteLine("Customer Added!");
}

public void Update()
{
    console.WriteLine("Customer Updated!");
}



namespace Classes {
    class Customer {
        public int Id { get; set; }
        public string FirstName { get; set; }
        get { return _firstName; }
        set { _firstName = value }
}
}