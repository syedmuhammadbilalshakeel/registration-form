var arr = [];

function submit() {
    var name1 = document.getElementById("name");
    var span1 = document.getElementById("span1");
    var fullNameRegix = /^\s*$/.test(name1.value);

    var father1 = document.getElementById("father");
    var span2 = document.getElementById("span2");
    var fatherNameRegix = /^\s*$/.test(father1.value);
    // console.log(father1)

    var emailOfStudent1 = document.getElementById("emailOfStudent");
    var span3 = document.getElementById("span2");
    var emailRegix = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/.test(emailOfStudent1.value);


    var number1 = document.getElementById("number");
    var span4 = document.getElementById("span4");
    var PhoneNumberRegix = /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/.test(number1.value);

    var CNIC_NO1 = document.getElementById("CNIC_NO");
    var span5 = document.getElementById("span2");
    var cnicRegix = /^[0-9]{5}-[0-9]{7}-[0-9]$/.test(CNIC_NO1.value);

    var father_CNIC_no1 = document.getElementById("father_CNIC_no");
    var span6 = document.getElementById("span2");
    var fatherCnicGergix = /^[0-9]{5}-[0-9]{7}-[0-9]$/.test(father_CNIC_no1.value)

    var Date_of_birth1 = document.getElementById("Date_of_birth");
    // var span7 = document.getElementById("span2");


    var permentAddress = document.getElementById("permentAddress");
    let addressRegex = /^\s*$/.test(permentAddress.value);
    // var span8 = document.getElementById("span2");

    var address1 = document.getElementById("address");
    let addressRegexno1 = /^\s*$/.test(address1.value);
    // var span9 = document.getElementById("span2");



    var data;
    arr.push(
        data = {
            Name: name1.value,
            fathername: father1.value,
            fatherCnic: father_CNIC_no1.value,
            Address1: permentAddress.value,
            Address2: address1.value,
            Phone: number1.value,
            CNIC: CNIC_NO1.value,
            Dateofbirth: Date_of_birth1.value,
            Email: emailOfStudent1.value

        });
localStorage.setItem(JSON.stringify(arr));


    if (fullNameRegix === true) {
        name1.style.border = "2px solid red";
        // span1.innerHTML = "please give the name first";
        swal({
            icon: "warning",
            text: "please give the full-name  !",
        });
    }
    else if (fatherNameRegix === true) {
        father1.style.border = "2px solid red";
        // span2.innerHTML = "father give the father name";
        swal({
            icon: "warning",
            text: "please give the father-name full-name  !",
        });
    }
    else if (emailRegix === false) {
        emailOfStudent1.style.border = "2px solid red";
        // span3.innerHTML = " please give the email";
        swal({
            icon: "warning",
            text: "please give the email-addresss  !",
        });

    }
    else if (PhoneNumberRegix === false) {

        number1.style.border = "2px solid red";
        // span4.innerHTML = "pleas give the phone number"
        swal({
            icon: "warning",
            text: "please give the phone number!",
        });


    } else if (cnicRegix === false) {
        CNIC_NO1.style.border = "2px solid red";
        // span5.innerHTML = "please give the valid cnic";
        swal({
            icon: "warning",
            text: "give the valid  cnic no!",
        });

    } else if (fatherCnicGergix === false) {
        father_CNIC_no1.style.border = "2px boder red";
        // span6.innerHTML = "give the valid  cnic no";
        swal({
            icon: "warning",
            text: "please give the father cnic number!",
        });
    }
    else if (Date_of_birth1.value.length === 0) {
        Date_of_birth1.style.border = "2px boder red"
        swal({
            icon: "warning",
            text: "please give the date!",
        });

    }
    else if (addressRegex === false) {
        permentAddress.style.border = "2px solid red"
        swal({
            icon: "warning",
            text: "please give the perment address!",
        });

    }
    else if (addressRegexno1 === false) {
        address1.style.border = "2px solid red"
        swal({
            icon: "warning",
            text: "please give the address!",
        });

    }

    else if (fullNameRegix === false && fatherNameRegix === false && emailOfStudent1 === true && PhoneNumberRegix === true && cnicRegix === true && fatherCnicGergix === true && Date_of_birth1.value.length > 0 && addressRegex === true && addressRegexno1 === true) {
        window.location.href = "conform_of_Submited_form.html"
        // swal("Good job!", "you form is ubmites", "success");
        // alert("thet is not fill")
        // swal({
        //     icon: "warning",
        //     text: "!",
        //   } );
    }





    // var city1 = document.getElementById("city").value;
    // var course1 = document.getElementById("course").value;
    // localStorage.setItem("city",city1);
    // localStorage.setItem("course",course1);
    // localStorage.setItem("name",name1);
    // localStorage.setItem("father",father1);
    // localStorage.setItem("emailOfStudent",emailOfStudent1);
    // localStorage.setItem("CNIC_NO",CNIC_NO1);
    // localStorage.setItem("father_CNIC_no",father_CNIC_no1);
    // localStorage.setItem("Date_of_birth",Date_of_birth1);
    // localStorage.setItem("gender",gender1);
    // localStorage.setItem("address",address1);


    // var obj = {
    //     city: city1,

    // }


}