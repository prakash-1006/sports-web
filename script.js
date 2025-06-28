function change(){

        const username=document.getElementById("username").value;
        const password=document.getElementById("password").value;
        const message=document.getElementById("message");

        const validun="prakash";
        const validpass="1006";

        if(validun==username){
               message.style.color="green" ;
               message.textContent="SUCCESSFULLY LOGGED IN";
        }
        else{
             message.style.color="red" ;
             message.textContent="INVALID PASSWORD OR USERNAME ";

        }
        
    }
