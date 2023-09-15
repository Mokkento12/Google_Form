function show() {
  let pwd = document.getElementById("pwd");
  let cpwd = document.getElementById("cpwd");
  if (pwd.type == "password" && cpwd.type == "password") {
    pwd.type = "text";
    cpwd.type = "text";
  } else {
    pwd.type = "password";
    cpwd.type = "password";
  }
}
