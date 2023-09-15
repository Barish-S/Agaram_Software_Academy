my_resume={    Name:"Barish S",
               E_Mail:"barishs28@gmail.com",
               PhoneNo:6383456559,
               objective:"A hard working individual looking for a challenging position where I can showcase my skills and contribute to the growth of the organization.",
               SoftSkills:["Punctuality","Well In Communication","Team Player"],
               HardSkills:["CSS","HTML","JavaScript DOM"],
               Educational_Qualification:[{level:"SSLC",
                                          ins_name:"GHSS",
                                          paasout_year:2016,
                                          mark_percentage:84,
                                          place:"Madhavalayam"},
                                          {level:"HSC",
                                          ins_name:"GHSS",
                                          paasout_year:2018,
                                          mark_percentage:70,
                                          place:"Madhavalayam"},
                                          {level:"UG",
                                          ins_name:"GASC",
                                          paasout_year:2021,
                                          mark_percentage:7.8,
                                          place:"Nagercoil"},
                                          {level:"PG",
                                          ins_name:"NICAS",
                                          paasout_year:2023,
                                          mark_percentage:8.9,
                                          place:"Kumaracoil"}],
                Projects:{UG:"Online College Management System Using HTML",
                         PG:"Child Monitoring mobile Application"},
                Experience:[{company_name:"Notified",experience:2,role:"FullStack Developer"}],
                Hobbies:["Cricket","Cooking","Care Taking"],
                PersonalDetails:{FatherName:"Sheik Mydeen I",
                                    FatherOccupation:"Painter",
                                    LanguagesKnown:["Tamil","English","Malayalam"],
                                    DOB:"28/10/2000",
                                    Gender:"Male",
                                    MaritalSatus:"Single",
                                    Address:{DoorNo:"8/100",
                                               Street:"Mydeenpuram",
                                               Village:"Madhavalayam",
                                               City:"Nagercoil",
                                               State:"Tamilnadu",
                                               Country:"India",
                                               Pincode:629302}},
        Declaration:"I hereby declare that all the above furnished details are true to the best of my knowledge."                     
            }
edu=my_resume.Educational_Qualification
function getDetails(edu){
    for(var i=edu.length-1;i>=0;i--)
    {
        console.log(i+1+"."+edu[i].level)
     }
}
getDetails(edu)

