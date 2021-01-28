
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});
signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});


var objPeople = [
    { // Object @ 0 index
        username: "Admin",
        password: "1234"
    },
    { // Object @ 1 index
        username: "matt",
        password: "academy"
    },
    { // Object @ 2 index
        username: "chris",
        password: "forever"
    }

]

function validate() {
    var username = document.getElementById('username').value
    var password = document.getElementById('password').value

    for (var i = 0; i < objPeople.length; i++) {
        if (username == objPeople[i].username && password == objPeople[i].password) {
            alert(username + " is logged in!!!");
            window.location = ""
            return
        }
    }
    alert("incorrect username or password")
}
