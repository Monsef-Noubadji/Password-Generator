var pwd = document.getElementById("password");
function genPwd() { 
var chars = "1234567890abcdefghijklmnopqrstvwxyzABCDEFGHIJKLMNOPRSTVWXYZ!@#$%^&*()+\][]\';/.,'`` ";
var pwdLength = 12;
var pwd = "";
for (var i = 0; i <= pwdLength ; i++){
  var RandomPwd = Math.floor(Math.random() * chars.length);
  pwd += chars.substring(RandomPwd , RandomPwd +1);
}
document.getElementById("pwd").value = pwd; 
}
function copyPwd(){
  var copyPswd = document.getElementById("pwd");
  copyPswd.select();
  document.execCommand("copy");
  alert("Password Copied successfully !")
}