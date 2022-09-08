// // var arr = [];

// function submit() {
//     var name1 = document.getElementById("name");
//     // var span1 = document.getElementById("span1");
//     var fullNameRegix = /^\s*$/.test(name1.value);

//     var father1 = document.getElementById("father");
//     // var span2 = document.getElementById("span2");
//     var fatherNameRegix = /^\s*$/.test(father1.value);
//     // console.log(father1)

//     var emailOfStudent1 = document.getElementById("emailOfStudent");
//     // var span3 = document.getElementById("span2");
//     var emailRegix = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/.test(emailOfStudent1.value);


//     var number1 = document.getElementById("number");
//     // var span4 = document.getElementById("span4");
//     var PhoneNumberRegix = /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/.test(number1.value);

//     var Cnic_NO1 = document.getElementById("CNIC");
//     // console.log(CNIC_NO1)
//     // var span5 = document.getElementById("span2");
//     // var cnicRegix = /^[0-9]{5}-[0-9]{7}-[0-9]$/.test(CNIC_NO1.value);
// // console.log(cnicRegix)



//     var father_CNIC_no1 = document.getElementById("father_CNIC_no");
//     var span6 = document.getElementById("span2");
//     // var fatherCnicGergix = /^[0-9]{5}-[0-9]{7}-[0-9]$/.test(father_CNIC_no1.value)

//     var Date_of_birth1 = document.getElementById("Date_of_birth");
//     // var span7 = document.getElementById("span2");


//     var permentAddress = document.getElementById("permentAddress");
//     let addressRegex = /^\s*$/.test(permentAddress.value);
//     // var span8 = document.getElementById("span2");

//     var address1 = document.getElementById("address");
//     let addressRegexno1 = /^\s*$/.test(address1.value);
//     // var span9 = document.getElementById("span2");



// //     var data;
// //     arr.push(
// //         data = {
// //             Name: name1.value,
// //             fathername: father1.value,
// //             fatherCnic: father_CNIC_no1.value,
// //             Address1: permentAddress.value,
// //             Address2: address1.value,
// //             Phone: number1.value,
// //             CNIC: CNIC_NO1.value,
// //             Dateofbirth: Date_of_birth1.value,
// //             Email: emailOfStudent1.value

// //         });
// // localStorage.setItem("table"(JSON.stringify(arr)));


//     if (fullNameRegix === true) {
//         name1.style.border = "2px solid red";
//         // span1.innerHTML = "please give the name first";
//         swal({
//             icon: "warning",
//             text: "please give the full-name  !",
//         });
//     }
//     else if (fatherNameRegix === true) {
//         father1.style.border = "2px solid red";
//         // span2.innerHTML = "father give the father name";
//         swal({
//             icon: "warning",
//             text: "please give the father-name full-name  !",
//         });
//     }
//     else if (emailRegix === false) {
//         emailOfStudent1.style.border = "2px solid red";
//         // span3.innerHTML = " please give the email";
//         swal({
//             icon: "warning",
//             text: "please give the email-addresss  !",
//         });

//     }
//     else if (PhoneNumberRegix === false) {

//         number1.style.border = "2px solid red";
//         // span4.innerHTML = "pleas give the phone number"
//         swal({
//             icon: "warning",
//             text: "please give the phone number!",
//         });


//     } else if (Cnic_NO1.value.length === 0) {
//         Cnic_NO1.style.border = "2px solid red";
//         // span5.innerHTML = "please give the valid cnic";
//         swal({
//             icon: "warning",
//             text: "give the valid  cnic no!",
//         });

//     } else if (father_CNIC_no1.value.length === 0) {
//         father_CNIC_no1.style.border = "2px boder red";
//         // span6.innerHTML = "give the valid  cnic no";
//         swal({
//             icon: "warning",
//             text: "please give the father cnic number!",
//         });
//     }
//     else if (Date_of_birth1.value.length === 0) {
//         Date_of_birth1.style.border = "2px boder red"
//         swal({
//             icon: "warning",
//             text: "please give the date!",
//         });

//     }
//     else if (addressRegex === true) {
//         permentAddress.style.border = "2px solid red"
//         swal({
//             icon: "warning",
//             text: "please give the perment address!",
//         });

//     }
//     else if (addressRegexno1 === true) {
//         address1.style.border = "2px solid red"
//         swal({
//             icon: "warning",
//             text: "please give the address!",
//         });

//     }

//     else if (fullNameRegix === false && fatherNameRegix === false && emailOfStudent1 === true && PhoneNumberRegix === true && CNIC_NO1 > 0 && father_CNIC_no1 > 0 && Date_of_birth1.value.length > 0 && addressRegex === false && addressRegexno1 === false) {
//         window.location.href = "conform_of_Submited_form.html";
//     }





//     // var city1 = document.getElementById("city").value;
//     // var course1 = document.getElementById("course").value;
//     // localStorage.setItem("city",city1);
//     // localStorage.setItem("course",course1);
//     // localStorage.setItem("name",name1);
//     // localStorage.setItem("father",father1);
//     // localStorage.setItem("emailOfStudent",emailOfStudent1);
//     // localStorage.setItem("CNIC_NO",CNIC_NO1);
//     // localStorage.setItem("father_CNIC_no",father_CNIC_no1);
//     // localStorage.setItem("Date_of_birth",Date_of_birth1);
//     // localStorage.setItem("gender",gender1);
//     // localStorage.setItem("address",address1);


//     // var obj = {
//     //     city: city1,

//     // }


// }
// console.log(
//     submit()
// )


let arr = [];
let tableRow1 = localStorage.getItem("tableRow");
if (tableRow1) {
    arr = JSON.parse(tableRow1);
}

let tr = document.getElementById("tr");

if (tr !== null) {
    loadAll = () => {
        tr.innerHTML = " ";
        for (let i = 0; i < arr.length; i++) {
            let row = "<tr>";
            for (let key in arr[i]) {
                row += `
                <td class="td">${arr[i][key]}</td>
                    `
            }
            row += `</tr>`;
            tr.innerHTML += row
        }
    }
    loadAll();
}

/* <i onclick="delete1(${arr.length});" id="icon1" class="fa-solid fa-trash"></i> */

// delete1 = (i) => {
//     arr.splice(i, 1);
//     // localStorage.setItem("todo-list", JSON.stringify(arr));
//     event.target.parentNode.lastChild.remove();
//     // loadAll();
// }



submit = () => {
    // full name 
    let fullName = document.getElementById("fullName");
    let span = document.getElementById("span");
    let fullNameRegix = /^\s*$/.test(fullName.value);

    // father Name
    let fatherName = document.getElementById("fatherName");
    let span1 = document.getElementById("span1");
    let fatherNameRegix = /^\s*$/.test(fatherName.value);

    // email
    let email = document.getElementById("email");
    let span2 = document.getElementById("span2");
    let emailRegix = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/.test(email.value);

    // phone
    let phone = document.getElementById("phone");
    let span3 = document.getElementById("span3");
    let phoneRegex = /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/.test(phone.value);

    // CNIC
    let cnic = document.getElementById("cnic");
    let span4 = document.getElementById("span4");
    let cnciRegex = /^[0-9]{5}-[0-9]{7}-[0-9]$/.test(cnic.value);


    // date 
    let date = document.getElementById("date");
    let span5 = document.getElementById("span5");

    // Address
    let address = document.getElementById("address");
    let span6 = document.getElementById("span6");
    let addressRegex = /^\s*$/.test(address.value);
    var ir;
    arr.push(
        ir = {
            Name: fullName.value,
            Fathername: fatherName.value,
            Address: address.value,
            Phone: phone.value,
            CNIC: cnic.value,
            Dateofbirth: date.value,
            Email: email.value
        });
    localStorage.setItem("tableRow", JSON.stringify(arr));

    // full name 
    if (fullNameRegix === true) {
        fullName.style.border = "2px solid red";
        span.innerHTML = "Name must be filled out";
    }

    // father Name
    else if (fatherNameRegix === true) {
        fatherName.style.border = "2px solid red";
        span1.innerHTML = "Father name must be filled out";
    }

    // email
    else if (emailRegix === false) {
        email.style.border = "2px solid red";
        span2.innerHTML = "Please valid Email address"
    }

    // phone
    else if (phoneRegex === false) {
        phone.style.border = "2px solid red";
        span3.innerHTML = "Please Correct Phone Number"
    }

    // CNIC
    else if (cnciRegex === false) {
        cnic.style.border = "2px solid red";
        span4.innerHTML = "Please valid CNIC number"
    }

    // date 
    else if (date.value.length === 0) {
        date.style.border = "2px solid red";
        span5.innerHTML = "Date must be Filled Out"
    }

    // Address
    else if (addressRegex === true) {
        address.style.border = "2px solid red";
        span6.innerHTML = "Address must be filled out"
    }

    else if (fullNameRegix === false && fatherNameRegix === false && emailRegix === true && phoneRegex === true && cnciRegex === true && date.value.length > 0 && addressRegex === false) {

        window.location.href = "./Student_Deatil.html";
    }


    fullName.value = " ";
    fatherName.value = " ";
    email.value = " ";
    phone.value = " ";
    cnic.value = " ";
    date.value = "";
    address.value = " ";
}


// login = () => {
//     // userName
//     let userName = document.getElementById("userName");
//     let span10 = document.getElementById("span10");
//     let userNameRegix = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/.test(userName.value);

//     // Password
//     let password = document.getElementById("password");
//     let span11 = document.getElementById("span11");
//     let passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{7,}$/.test(password.value);
//     // console.log(passwordRegex);

//     // userName
//     if (userNameRegix === false) {
//         // userName.style.border = "2px solid red";
//         span10.innerHTML = "Please valid Email address"
//     }

//     // password
//     else if (passwordRegex === false) {
//         span11.innerHTML = "Password Should have must be 8 letter"
//     }

//     else if (userNameRegix === true && passwordRegex === true) {
//         window.location.href = "./local.html"
//     }


//     userName.value = "";
//     password.value = "";
// }



// // '.tbl-content' consumed little space for vertical scrollbar, scrollbar width depend on browser/os/platfrom. Here calculate the scollbar width .
// $(window).on("load resize ", function () {
//     var scrollWidth = $('.tbl-content').width() - $('.tbl-content table').width();
//     $('.tbl-header').css({ 'padding-right': scrollWidth });
// }).resize();