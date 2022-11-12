import { signInFirebase } from '../config/firebase.js'

window.signIn = async function () {

    const email = document.getElementById("signIn-email").value;
    const password = document.getElementById("signIn-password").value

        try{
            await signInFirebase(email, password)
            swal("Good job!", "You've logged in!", "success");
            setTimeout(window.location.href = './adminDashboard/admin.html', 2000)
        }
        catch(e){
            // console.log(e.message )
            swal("Error", "Incorrect email or password", "error");

            
        }
}