// document.getElementById("mybutton").onclick = () => {
//     location.href = "https://stackoverflow.com/questions/16562577/how-can-i-make-a-button-redirect-my-page-to-another-page";
// };

let USN1 = "";
let YEAR1 = "";
const xxx = "http://localhost:4003/users"

function chalo() {
    // var USN = '1DT17IS074';
    // document.getElementById("USN").innerText = 'Student USN: ' + USN;
    getUsers();
    redirectFarmerProduct();
}


// var fs = require('fs');

// function log(text, callback) {
//   fs.writeFile('log.txt', text, callback);
// }

// app.get('/', function (req, res) {
//   log('This is my text', function (err) {
//     if (err) throw err;
//     res.send('Replaced!');
//   });
// });
// let value = []

function doSomething(success) {
    var e = document.getElementById('t1')
    var p = document.createElement('p');
    var q = document.createElement('q');
    var r = document.createElement('r');
    p.className = "heading1";
    p.id = "USN";
    q.className = "heading1";
    q.id = "CGPA";
    r.className = "heading1";
    r.id = "backlog";
    p.innerText = "Student USN : " + String(success[0].USN);
    q.innerText = "Student CGPA : " + String(success[0].CGPA);
    r.innerText = "   Student Backlog: " + String(success[0].BACKLOG);
    e.appendChild(p);
    e.appendChild(q);
    e.appendChild(r);

}

getUsers = _ => {
    USN1 = document.getElementById("usn").value;
    YEAR1 = document.getElementById("year").value;
    let StudentUSN = '';
    let StudyYear = '';
    let data2;


    fetch(`http://localhost:4003/users/`)
        .then(response => response.json())
        .then(response => {
            doSomething(response);
        })
        .then(success => doSomething(success));
}




// let customerUser = "";
// let customerPwd = "";
// const farmerproduct = "/home/stoneduser/Desktop/FarmerCustomerBidding/farmerproduct.html";
// const customerproduct = "/home/stoneduser/Desktop/FarmerCustomerBidding/customerProfile.html";



function redirectFarmerProduct() {

    USN1 = document.getElementById("usn").value;
    YEAR1 = document.getElementById("year").value;
    let StudentUSN = '';
    let StudyYear = '';
    let data2;


    fetch(`http://localhost:4003/users/`)
        .then(response => response.json())
        .then(response => {
            doSomething(response);
        })
        .then(success => doSomething(success));

    // fetch('http://127.0.0.1:5500/sd.html')
    //         .then(response => response.json())
    //         .then(data => data2 = data)
    //         .then(() => transferfarmer(data2))

    function transferfarmer(val) {
        for (let i = 0; i < val.length; i++) {
            let obj = val[i];
            if (obj.USN === USN1) {
                StudyYear = obj.year;
                StudentUSN = obj._USN;
                localStorage.setItem('Student USN', StudentUSN);
                if (String(YEAR1) === String(StudyYear)) {
                    window.location.href = xxx;
                } else {
                    alert("Email or Password is wrong");
                }
                return false;
            }
        }
    }
}

/*page redirecting*/
// function redirectHome(){
//     window.location = "file:///home/stoneduser/Desktop/FarmerCustomerBidding/home.html";
// }

// function redirectcustomerSignup(){
//     window.location = "file:///home/stoneduser/Desktop/FarmerCustomerBidding/customerSignup.html";
// }

// function redirectfarmerSignup(){
//     window.location = "file:///home/stoneduser/Desktop/FarmerCustomerBidding/farmerSignup.html";
// }


// function redirectCustomerProfile(){
//     customerUser = document.getElementById("Cuname").value;
//     customerPwd = document.getElementById("Cpwd").value;
//     let CustomerId='';
//     let Cpwd='';
//     let data2;
//     fetch('http://localhost:3000/customerLogin/item')
//         .then(response => response.json())
//         .then(data => data2 = data)
//         .then(setTimeout(3000))
//         .then(() => transfercustomer(data2))

//     function transfercustomer(val){
//         for(let i = 0; i < val.length; i++) {
//             let obj = val[i];
//             if(obj.Email === customerUser){
//                 Cpwd = obj.Password;
//                 CustomerId = obj._id;
//                 localStorage.setItem('CustomerID', CustomerId);
//                 if(String(customerPwd) === String(Cpwd)) {
//                     window.location.href = customerproduct;
//                 }
//                 else{
//                     alert("Email or Password is wrong");
//                 }
//                 return false;
//             }
//         }
//     }
// }