document.getElementById('contact-us').addEventListener('submit', (event) => {
    event.preventDefault();

    form = document.getElementById("contact-us").value
    names = document.getElementById("names").value
    email = document.getElementById("emails").value
    phone = document.getElementById("phone").value
    ramen = document.getElementById("ramen")
    dryRamen = document.getElementById("dry-ramen")
    newsletter = document.getElementById("newsletter")

    if (email == ""){
        alert("Email must be filled");
        return false;
    } 
    else if (validateEmail(email) == false){
        alert("Email is not valid");
        return false;
    } 
    else if(phone == ""){
        alert("Phone number must be filled");
        return false;
    }
    else if(!validatePhone(phone)){
        alert("Make sure your phone number is only contained with numbers, more than 10 characters, start with '08' or '+628' and should not consist of any alphabet or symbol")
    }
    else if(!ramen.checked && !dryRamen.checked){
        alert("Preference must be picked!")
        return;
    }
    else if(!newsletter.checked){
        alert("You must agree to receive the newsletter!")
    }
    else{
        alert("Login Success");
        form.submit()
    }
    
    console.log("CLICK")
});

validateEmail = (email) => {
    if(email.startsWith("@") || email.startsWith(".")){
		return false;
	}
	else if(email.endsWith("@") || email.endsWith("."))	{
		return false;
	}
	else if(email.indexOf("@.") > -1 || email.indexOf(".@") > -1 ){
		return false;
	}
	else if(email.indexOf("@") < 0 || email.indexOf(".") < 0){
		return false;
	}
	else{
		return true;
	}
}

validatePhone = (phone) => {
    phonePattern = /(\+62|0)8[1-9][0-9]{6,9}$/

    if(phone.length < 10){
        console.log("tes")
        return false;
    }
    else if(!phone.match(phonePattern)){
        console.log("testestes")
        return false;
    }
    else return true
}