// Typing Effect
const text = "Code Designer | Front-End Developer";
let index = 0;

function typeText() {
    const typing = document.getElementById("typing");

    if (typing && index < text.length) {
        typing.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeText, 100);
    }
}

window.onload = typeText;

// Smooth Scrolling
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Resume Download Button
const resumeBtn = document.getElementById("resumeBtn");

if (resumeBtn) {
    resumeBtn.addEventListener("click", function () {
        window.location.href = "resume.pdf"; // Put your resume.pdf in the same folder
    });
}
