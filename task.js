<script>
    var data = [
        {
            FirstName: "Sam",
            LastName: "Jackson",
            employeeID: 5698523,
            Designation: "Manager",
            LanguageExpertise: [
                "Java",
                "C#",
                "Python"
            ],
            Car: {
                Model: "Maruti Suzuki Swift",
                MakeYear: 2017,
                Color: "Red",
                Type: "Hatchback",
                broughtOn: 1611326817
            }
        },
        {
            FirstName: "Tam",
            LastName: "Richard",
            employeeID: 896586,
            Designation: "Senior Manager",
            LanguageExpertise: [
                "Ruby",
                "C#"
            ],
            Car: {
                Model: "Hyundai Verna",
                MakeYear: 2015,
                Color: "Black",
                Type: "Sedan",
                broughtOn: 2222222222
            }
        },

        {
            FirstName: "John",
            LastName: "Cena",
            employeeID: 896580,
            Designation: "Senior Manager",
            LanguageExpertise: [
                "Ruby", "Java",
                "C#"
            ],
            Car: {
                Model: "Hyundai Creta",
                MakeYear: 2015,
                Color: "White",
                Type: "SUV",
                broughtOn: 1611326817
            }
        },
        {
            FirstName: "Ram",
            LastName: "K",
            employeeID: 890580,
            Designation: "Developer",
            LanguageExpertise: [
                "Javascript",
                "HTML"
            ],
            Car: {
                Model: "Innova",
                MakeYear: 2017,
                Color: "White",
                Type: "MPV",
                broughtOn: 1611499617
            }
        }
    ]
    //6666666666666666666666666666666666666
    data.map(values=>{
        
        console.log(new Date(values.Car.broughtOn))
        
    })
    
    
    //11111111111111111111111111111111111111111
  
    // data.map(values=>{
        
    //   if (new.Date(values.Car.broughtOn==1611499617))
    //   {
    //       console.log(values.FirstName,values.LastName,values.employeeID,values.Designation);
    //   }
      
        
    //  })

</script>
