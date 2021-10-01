const studentDetails = [];
const studentlists = document.querySelector('#listItems');


function view() {
    const studentName = document.getElementById('stName').value;
    const studentNumber = document.getElementById('stNumber').value;
    const studentEmail = document.getElementById('stEmail').value;
    const phoneNum = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/; 
    const email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // console.log(studentName,studentNumber,studentEmail);
    if(studentName == "" && studentNumber == "" && studentEmail == "") {
        return;
    } else {
        if(studentNumber.match(phoneNum) && studentEmail.match(email)) {
                const studentObject = {
                    id : studentDetails.length,
                    name : studentName,
                    phone : studentNumber,
                    email : studentEmail
                };
                console.log(studentObject);
                studentDetails.unshift(studentObject);
                console.log(studentDetails);
                
            }   else {
                return;
            }
    }

    stDisplay();
}

function stDisplay() {
    // console.log('hi');
    studentlists.innerHTML = "";
    document.querySelector('#stName').value = "";
    document.querySelector('#stNumber').value = "";
    document.querySelector('#stEmail').value = "";
    studentDetails.forEach((item) => {
        
        const stList = document.createElement('li');
        stList.innerHTML = item.name+ " , " +item.phone+ " , " +item.email+ " . ";
        studentlists.appendChild(stList);

        
        
        
        console.log(stList);
    })
    
    
}