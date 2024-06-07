function  SendMail(){
    var params = {
        from_name : document.getElementById("fullName").value,
        email_id : document.getElementById("email_id").value,
        message: document.getElementById("message").value

    }
    emailjs.send("service_uy6y6mr","template_9efvywa",params).then(function(res){
        alert("Your details has been successfully submitted. Thanks!")
    })
}