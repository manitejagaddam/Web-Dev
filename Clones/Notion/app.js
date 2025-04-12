
var section2_img = document.querySelector(".section2_img");

var wiki = document.querySelector(".wikis");
var docs = document.querySelector(".Docs");
var projects = document.querySelector(".Projects");
var ai = document.querySelector(".AI");
var calendar = document.querySelector(".calendar");
var sites = document.querySelector(".sites");


wiki.addEventListener("click", () => {
    section2_img.src = "http://127.0.0.1:5500/templates/assets/images/Wiki-V2.png"; 
    wiki.style.backgroundColor = "#f2f2f2"; 

    docs.style.backgroundColor = "#ffffff"; 
    projects.style.backgroundColor = "#ffffff"; 
    ai.style.backgroundColor = "#ffffff"; 
    calendar.style.backgroundColor = "#ffffff"; 
    sites.style.backgroundColor = "#ffffff"; 

});

docs.addEventListener("click", () => {
    section2_img.src = "http://127.0.0.1:5500/templates/assets/images/Docs-V2.png"; 
    docs.style.backgroundColor = "#f2f2f2"; 

    wiki.style.backgroundColor = "#ffffff"; 
    projects.style.backgroundColor = "#ffffff"; 
    ai.style.backgroundColor = "#ffffff"; 
    calendar.style.backgroundColor = "#ffffff"; 
    sites.style.backgroundColor = "#ffffff"; 
});

projects.addEventListener("click", () => {
    section2_img.src = "http://127.0.0.1:5500/templates/assets/images/Projects-V2.png"; 
    projects.style.backgroundColor = "#f2f2f2"; 

    wiki.style.backgroundColor = "#ffffff"; 
    docs.style.backgroundColor = "#ffffff"; 
    ai.style.backgroundColor = "#ffffff"; 
    calendar.style.backgroundColor = "#ffffff"; 
    sites.style.backgroundColor = "#ffffff";  
});

ai.addEventListener("click", () => {
    section2_img.src = "http://127.0.0.1:5500/templates/assets/images/AI-V2.png"; 
    ai.style.backgroundColor = "#f2f2f2"; 

    wiki.style.backgroundColor = "#ffffff"; 
    docs.style.backgroundColor = "#ffffff"; 
    projects.style.backgroundColor = "#ffffff"; 
    calendar.style.backgroundColor = "#ffffff"; 
    sites.style.backgroundColor = "#ffffff";  
});

calendar.addEventListener("click", () => {
    section2_img.src = "http://127.0.0.1:5500/templates/assets/images/calendar.png"; 
    calendar.style.backgroundColor = "#f2f2f2"; 

    wiki.style.backgroundColor = "#ffffff"; 
    docs.style.backgroundColor = "#ffffff"; 
    projects.style.backgroundColor = "#ffffff"; 
    ai.style.backgroundColor = "#ffffff"; 
    sites.style.backgroundColor = "#ffffff";  
});

sites.addEventListener("click", () => {
    section2_img.src = "http://127.0.0.1:5500/templates/assets/images/sites.png";
    sites.style.backgroundColor = "#f2f2f2"; 

    wiki.style.backgroundColor = "#ffffff"; 
    docs.style.backgroundColor = "#ffffff"; 
    projects.style.backgroundColor = "#ffffff"; 
    ai.style.backgroundColor = "#ffffff"; 
    calendar.style.backgroundColor = "#ffffff"; 
});


