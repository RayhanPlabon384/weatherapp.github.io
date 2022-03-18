const submitBtn = document.getElementById("submitBtn")


const getInfo = (e) =>{
    e.preventDefault();
    alert("Hi")
}
submitBtn.addEventListener("click",getInfo)