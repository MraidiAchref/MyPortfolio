function checkEntry(){
    const emailEntry = document.querySelector('#email_entry') ;
    const emailText = emailEntry.value ;


    const subject_entry = document.querySelector('#subject_entry') ;
    const SubjectText = subject_entry.value ;

    const message_entry = document.querySelector('#message_entry') ;
    const messageText = message_entry.value ;

    console.log("test") ;
    if (!emailEntry.checkValidity()) {
        window.alert('Please enter a valid email address.');
        return; 
    }else if (  SubjectText=== '' || messageText=== '' ) {
        window.alert('Please complete all fields ! ') ;
    }else {
        window.alert('Thank you for contacting me !')
    }



}