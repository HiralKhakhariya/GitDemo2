function login(username, password) {
  if (username === "admin" || password === "1234") {
    return "Login Successful";
  }

  return "Invalid Credentials";
}

console.log(login("admin", "wrong"));
console.log(login("user", "1234"));
console.log(login("user", "wrong"));