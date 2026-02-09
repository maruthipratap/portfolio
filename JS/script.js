/* NAVBAR ACTIVE LINK */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 200;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});


/* SCROLL FADE ANIMATION */
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.25
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach(el => observer.observe(el));

/* video view */
function openDemo() {
    const videoWindow = window.open("", "_blank");

    videoWindow.document.write(`
        <html>
        <head>
            <title>Project Demo</title>
            <style>
                body{
                    margin:0;
                    background:#020617;
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    height:100vh;
                    flex-direction:column;
                    color:white;
                    font-family:Arial;
                }
                h2{
                    color:#22d3ee;
                    margin-bottom:20px;
                }
                video{
                    width:90%;
                    max-width:900px;
                    border-radius:12px;
                    box-shadow:0 0 30px rgba(0,0,0,0.6);
                }
            </style>
        </head>

        <body>
            <h2>Smart LPG Gas Detection System — Demo</h2>
            <video controls autoplay>
                <source src="images/lpg_demo.mp4" type="video/mp4">
                Your browser does not support video.
            </video>
        </body>
        </html>
    `);
}
