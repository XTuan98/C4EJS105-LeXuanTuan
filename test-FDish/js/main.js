/*======================== GRID ========================*/
function resizeGridItem(item) {
  grid = document.getElementsByClassName("grid")[0];
  rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
  rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
  rowSpan = Math.ceil((item.querySelector('.content').getBoundingClientRect().height + rowGap) / (rowHeight + rowGap));
  item.style.gridRowEnd = "span " + rowSpan;
}

function resizeAllGridItems() {
  allItems = document.getElementsByClassName("item");
  for (x = 0; x < allItems.length; x++) {
    resizeGridItem(allItems[x]);
  }
}

function resizeInstance(instance) {
  item = instance.elements[0];
  resizeGridItem(item);
}

window.onload = resizeAllGridItems();
window.addEventListener("resize", resizeAllGridItems);

allItems = document.getElementsByClassName("item");
for (x = 0; x < allItems.length; x++) {
  imagesLoaded(allItems[x], resizeInstance);
}

/*======================== TOP button ========================*/
// / Code Login 

function signupToggle(){
  var container = document.querySelector('.container');
  container.classList.toggle('active');
  var popup = document.querySelector('.signup-form');
  popup.classList.toggle('active')
}
function signinToggle(){
  var container = document.querySelector('.container');
  container.classList.toggle('active');
  var popup = document.querySelector('.signin-form');
  popup.classList.toggle('active')
}
//LOGIN CODE
function logInFunction() {
  registeredStatus = false;
  let userIndex;
  for (i = 0; i < userDatabase.length; i++) {
      if (userDatabase[i].username == document.getElementById('input-username').value && userDatabase[i].password == document.getElementById('input-password').value) {
          registeredStatus = true;
          userIndex = i;
          console.log(userDatabase[i]);
      }
  }
  if (registeredStatus == true) {
      console.log(userDatabase[userIndex]);
      activeUser[0] = userDatabase[userIndex];
      localStorage.setItem('activeUser', JSON.stringify(activeUser));
      console.log(JSON.parse(localStorage.activeUser));
      alert('Login Successfully!');
      hideLoginModal();
      location.reload();
  } else {
      console.log(registeredStatus);
      alert('Username or password not valid');
      document.getElementById('input-username').value = '';
      document.getElementById('input-password').value = '';
  }
}
//SIGNUP CODE
function registerFunction() {
  let dataOverlap = false;
  for (i = 0; i < userDatabase.length; i++) {
      if (userDatabase[i].username == document.getElementById('input-register-name').value) {
          alert('Sorry, this username is already taken');
          document.getElementById('input-register-name').value = '';
          dataOverlap = true;
          break;
      } else if (userDatabase[i].email == document.getElementById('input-register-email').value) {
          alert('Sorry, this email is already registered');
          document.getElementById('input-register-email').value = '';
          dataOverlap = true;
          break;
      }
  }
  if (document.getElementById('input-register-password').value == '' || document.getElementById('input-register-password').value == '' ||
      document.getElementById('input-register-email').value == '' || document.getElementById('input-register-name').value == '') {
      alert('Please fill in all fields');
  } else if (document.getElementById('input-register-password').value == document.getElementById('input-register-confirm-password').value) {
      let newUser = {
          username: `${document.getElementById('input-register-name').value}`,
          password: `${document.getElementById('input-register-password').value}`,
          email: `${document.getElementById('input-register-email').value}`,
          role: 'user',
      }
      console.log(newUser);
      userDatabase.push(newUser);
      console.log(userDatabase);
      localStorage.setItem('userDatabase', JSON.stringify(userDatabase));
      console.log(JSON.parse(localStorage.userDatabase));
      alert('Registered Successfully!');
      redirectToLogin();
  } else {
      alert('Password & confirmed password must match');
      document.getElementById('input-register-password').value = '';
      document.getElementById('input-register-confirm-password').value = '';
  }
}






// ===============================================================================================================================
if(!localStorage.getItem("visited")){
  localStorage.setItem('activeUser', JSON.stringify(activeUser));
  localStorage.setItem('userDatabase', JSON.stringify(userDatabase));
  localStorage.setItem("visited",true);
}
console.log(JSON.parse(localStorage.userDatabase));
userDatabase = JSON.parse(localStorage.userDatabase);
let activeUserObj;
activeUserObj = JSON.parse(localStorage.activeUser);
console.log(activeUserObj);
if (activeUserObj[0].username != 'no user logged in') {
  document.getElementById('active-user').textContent = `Active User: ${activeUserObj[0].username}`;
  document.getElementById('login-btn').style.display = 'none';
  document.getElementById('logout-btn').style.display = 'block';

}
console.log(activeUserObj[0].role);
function showLoginModal() {
  document.getElementById("login-modal").style.display = "block";
}
function hideLoginModal() {
  document.getElementById("login-modal").style.display = "none";
}
function redirectToLogin() {
  document.getElementById("register-form").hidden = true;
  document.getElementById("login-form").hidden = false;
}
function redirectToRegister() {
  document.getElementById("register-form").hidden = false;
  document.getElementById("login-form").hidden = true;
}
document.getElementById("redirect-to-login").addEventListener('click', redirectToLogin);
document.getElementById("redirect-to-register").addEventListener('click', redirectToRegister);