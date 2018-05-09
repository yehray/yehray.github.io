function sendEmail(){
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
    if (subject == ''){
        window.alert("Please fill in the subject");
    }
    else if (message == ''){
        window.alert("Please fill in the message");
    }
    else{
        var link = "mailto:yehray@gmail.com?"
        + "subject=" + escape(subject)
        + "&body=" + escape(message);
        window.location.href = link;
    }
}