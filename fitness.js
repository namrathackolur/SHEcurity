/* burger= document.querySelector('.burger')
navbar= document.querySelector('.navbar')
navList= document.querySelector('.nav-list')
rightNav= document.querySelector('.rightNav')
burger.addEventListener('click',()=>{
   rightNav.classList.toggle('v-class-resp');
   navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
})*/

// JS for Submit button
function submit() {
    // Getting Form data
    var nonvalid = 0;
    var name = document.getElementById("name");
    var phone = document.getElementById("phone");
    var email = document.getElementById("email");
    var text = document.getElementById("text");

    // Validation
    if (name.value == "" || phone.value == "" || email == "" || text == "") {
        alert("Please fill all fields");
        nonvalid = 1;
    }
    if (nonvalid == 0) {
        var str = `${name.value},${phone.value},${email.value},${text.value}`;
        localStorage.setItem(localStorage.length + 1, str);
        alert("Thakyou! your response has been submitted");
    }
}
