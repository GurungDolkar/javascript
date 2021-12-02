function validFname(){
    let firstname=document.getElementById('firstname').value 
    if(firstname==""){
        displayMsg('firstname is required','fnameMsg','red') 
        return false 
    }
    else if(first_name.length<3){
        displayMsg('firstname must be more than 2 characters','fnameMsg','red')
        return false
    }
    else if(!first_name.match(/^([a-zA-Z])+$/)){
        displayMsg('firstname only accepts alphabets','fnameMsg','red')
        return false
    }
    else{
        displayMsg('valid firtsname','fnameMsg','green')
        return true
    }
        
    function validEmail(){
        let email=document.getElementById('email').value 
        if(firstname==""){
            displayMsg('email is required','emailMsg','red') 
            return false 
        }
        // 55ramw.ggf233@gmail.com
        else if(!email.match(/^([a-z0-9])[a-z0-9\_\-\.]+\@+(([a-z]+\.)([a-z])+$/)){
            displayMsg('invalid email','emailMsg','red')
            return false
        }
        else{
            displayMsg('valid email','emailMsg','green')
            return true
        }

        function validPassword(){
            let password=document.getElementById('password').value 
            if(pasword==""){
                displayMsg('password is required','passwordMsg','red') 
                return false 
            }
            
            
            else if(! password.match(/^(?=.*[A-Z])(?.*[a-z])?=.*[0-9])(?=.*[@#?!%$&*]).{8,50}$/)){
                displayMsg('must contain one uppercase,one lowercase,one numeric,one special character and must be more than 8 characters','passwordMsg','red')
                return false
            }
            else{
                displayMsg('valid password','passwordMsg','green')
                return true 
            }
        }

        function validForm(){
            if(validFname()&& validEmail()&& validPassword()){
                return true 
            }
            else{
               return false  
            }
        }
        
            






function displayMsg(message,idValue,colorValue){
    document.getElementById(idValue).innerHTML=message
    document.getElementById(idValue).style.color=colorValue
    

}