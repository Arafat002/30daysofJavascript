let password=document.querySelector("#password");

 function genPassword() {
    let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let passwordLength = 12;
    let password = "";
 for (let i = 0; i <= passwordLength; i++) {
   let randomNumber = Math.floor(Math.random() * chars.length);
   password += chars.substring(randomNumber, randomNumber +1);
  }
        document.querySelector("#password").value = password;
 }

function copyPassword() {
  let copyText = document.querySelector("#password");
  copyText.select();
  document.execCommand("copy");  
}