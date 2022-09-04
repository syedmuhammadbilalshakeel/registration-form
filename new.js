function submit(){
    var city1 = document.getElementById("city").value;
    var course1 = document.getElementById("course").value;
    var name1 = document.getElementById("name").value;
    var father1 = document.getElementById("father").value;
    var emailOfStudent1 = document.getElementById("emailOfStudent").value;
    var CNIC_NO1 = document.getElementById("CNIC_NO").value;
    var father_CNIC_no1 = document.getElementById("father_CNIC_no").value;
    var Date_of_birth1 = document.getElementById("Date_of_birth").value;
    var gender1 = document.getElementById("gender").value;
    var address1 = document.getElementById("address").value;
    
    localStorage.setItem("city",city1);
    localStorage.setItem("course",course1);
    localStorage.setItem("name",name1);
    localStorage.setItem("father",father1);
    localStorage.setItem("emailOfStudent",emailOfStudent1);
    localStorage.setItem("CNIC_NO",CNIC_NO1);
    localStorage.setItem("father_CNIC_no",father_CNIC_no1);
    localStorage.setItem("Date_of_birth",Date_of_birth1);
    localStorage.setItem("gender",gender1);
    localStorage.setItem("address",address1);
   
    }