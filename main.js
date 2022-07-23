let pwd = document.getElementById("password");
function genPwd() { 
let chars = "1234567890abcdefghijklmnopqrstvwxyzABCDEFGHIJKLMNOPRSTVWXYZ!@#$%^&*()+\][]\';/.,'`` ";
let pwdLength = 16
let pwd = "";
for (let i = 0; i <= pwdLength ; i++){
  let RandomPwd = Math.floor(Math.random() * chars.length);
  pwd += chars.substring(RandomPwd , RandomPwd +1);
}
document.getElementById("pwd").value = pwd; 
}
function copyPwd(){
  let copyPswd = document.getElementById("pwd");
  copyPswd.select();
  document.execCommand("copy");
  alert("Password Copied successfully !");
}