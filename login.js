function seterror(id, error){
            let element = document.getElementById(id);
            element.getElementsByClassName('formerror')[0].innerHTML = error;
        }
        function validateForm(){
            let returnval = true;
            // 9375803533
            // perform validation and if the validation fails, set the value of returnval to false
            let name = document.forms['myForm']['fname'].value;
            if(name.length<5){
                seterror('name','*Length of the name is too short!');
                returnval = false;
            }
            if(name.length==''){
                seterror('name','*Username cannot be left blank!');
                returnval = false;
            }
            let email = document.forms['myForm']['femail'].value;
            if(email.length==''){
                seterror('email','*Email cannot be left blank!');
                returnval = false; 
            }
            if(email.length>50){
                seterror('email','*Email length is too long!');
                returnval = false;
            }
            let phone = document.forms['myForm']['fphone'].value;
            if(phone.length!=10){
                seterror('phone','*Phone number should be of 10 digits!');
                returnval = false;
            }
            let password = document.forms['myForm']['fpass'].value;
            if(password.length<=8){
                seterror('pass','*Password length should be 8 characters!')
                returnval = false;
            }
            let cpassword = document.forms['myForm']['fcpass'].value;
            if(cpassword != password){
                seterror('cpass','*Password and Confirm Password should match!');
                returnval = false;
            }
            return returnval;
        }
