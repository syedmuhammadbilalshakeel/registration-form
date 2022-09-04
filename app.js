

function signIN() {
    localStorage.setItem("email", "admin@gmail.com");
    localStorage.setItem("pasword", "admin");
    var emai = document.getElementById("emai").value;
    var pass = document.getElementById("pass").value;


    var P2 = localStorage.getItem('pasword');
    var e1 = localStorage.getItem('email');
    // console.log(el);

    if (emai == e1 && pass == P2) {
        window.location.href = "Student_Deatil.html";
    } else {
        // alert("em & pasw are in correct")
        // SVGViewElement()
        swal({
            icon: "warning",
            text: "You email and pasword is worng!",
          } );
    }
}

// console.log(signIN());



// if(Email === ){

// }
