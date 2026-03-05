document.getElementById("admissionForm")
.addEventListener("submit", function(e){

e.preventDefault();

let formData = new FormData(this);

fetch("https://your-backend-url/enquiry",{

method:"POST",
body:formData

})

.then(res=>res.json())
.then(data=>{

alert("Thank you. We will contact you soon.")

})

})