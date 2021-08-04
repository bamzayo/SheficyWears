
const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");
const [...navLinks] = document.querySelectorAll("li");
const vdate = [...document.getElementsByClassName("vdate")];
const submit = document.getElementById("submit");
const form = [...document.querySelectorAll("input")];

console.log(vdate)

menu.addEventListener("click", ()=>{
    menu.classList.toggle("active");
    nav.classList.toggle("active");
})

navLinks.forEach(link =>{
    link.addEventListener("click", ()=>{
        if(menu.classList.contains("active") && nav.classList.contains("active")){
            menu.classList.remove("active");
            nav.classList.remove("active");
        }

        document.querySelector('html').style.scrollBehavior="smooth";
        setTimeout(() => {
            document.querySelector('html').style.scrollBehavior="unset"
        }, 1000);
    })
})

vdate.forEach(v=>{
    v.style.display = "none";
})

// const alertVdate = (index) => {
//     console.log(index)
//     console.log(vdate[index])
//     vdate[index].style.display = "block"
// }

// submit.addEventListener("click", (event)=>{
//     // event.preventDefault();

// })

// form.forEach((a, index) => {
//     a.addEventListener("focusout", (event)=> {
//         if(event.target.value = " "){
//             alertVdate(index)
//         }
//         console.log()
//     })
// })
