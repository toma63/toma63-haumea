const currentDate = new Date();
const thisYear = currentDate.getFullYear();

const footer = document.createElement("footer");
const copyright = document.createElement("p");
copyright.innerHTML = `<small>Tom Arns &copy; ${thisYear}</small>`;

footer.appendChild(copyright);
document.body.appendChild(footer);


let skills = ["Management", "JavaScript", "CSS", "HTML", "C++", "lisp", "Verilog"];
let skillsSection = document.getElementById("skills");
let skillsList = document.createElement("ul");
skillsSection.appendChild(skillsList);

for (let skill of skills) {
    let skillItem = document.createElement("li");
    skillItem.innerText = skill;
    skillsList.appendChild(skillItem);
}