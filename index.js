//Typing effect on the header
const textElement = document.getElementById('typed-text')

const textToType = "Benny"
let index = 0;

    function typeText(){
    if (index < textToType.length){
        textElement.textContent += textToType.charAt(index)
        index++
        setTimeout(typeText, 100);
        }
        }

        window.addEventListener('load', () =>{
            typeText()
        })


// //send form data to email
// emailjs.init("KLO6FqOjUs1avthme")
// document.getElementById("contact-me").addEventListener("submit", function (event)){
//     event.preventDefault()

//     const formData = new Formdata(event.target)
    
//     emailjs.sendForm("service_ez9k4qx", "my_template_id", formData).then(function (response)){
//         console.log("Email sent succesfully:", response)
//         alert("Thank you, your message has been sent.")
//     }, function (error){
//         console.log("Email send failed", error)
//         alert("Oops! Something went wrong. Please try again later.")
//     }
// }

function getLinks(){
    const links = document.querySelectorAll('a[href^="#"]');
    return Array.from(links);
}

function scrollToSection(event){
    event.preventDefault();
    const targetId = event.target.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if(targetElement){
        targetElement.scrollIntoView({
            behavior: 'smooth'
        })
    }
}

const links = getLinks();
links.forEach(link => {
    link.addEventListener('click', scrollToSection);
})