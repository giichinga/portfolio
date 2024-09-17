// Menu functionality
const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const menu = document.getElementById("menu");

if (openMenu && closeMenu && menu) {
  openMenu.addEventListener("click", () => {
    menu.style.display = "flex";
    openMenu.style.display = "none";
    closeMenu.style.display = "block";
  });

  closeMenu.addEventListener("click", () => {
    menu.style.display = "none";
    openMenu.style.display = "block";
    closeMenu.style.display = "none";
  });
}

// Career buttons functionality
const careerWebBtn = document.getElementById("careerWeb");
const careerElecBtn = document.getElementById("careerElec");
const careerWeb = document.getElementById("techWeb");
const careerElec = document.getElementById("techEEE");

if (careerWebBtn && careerElecBtn && careerWeb && careerElec) {
  careerElecBtn.addEventListener("click", () => {
    careerWebBtn.classList.remove("active");
    careerElecBtn.classList.add("active");
    careerWeb.style.display = "none";
    careerElec.style.display = "block";
  });

  careerWebBtn.addEventListener("click", () => {
    careerElecBtn.classList.remove("active");
    careerWebBtn.classList.add("active");
    careerElec.style.display = "none";
    careerWeb.style.display = "block";
  });
}

// Project buttons functionality
// Get the buttons
const projectWebBtn = document.getElementById("projectWebBtn");
const projectElecBtn = document.getElementById("projectElecBtn");

// Check if both buttons exist before running the code
if (projectWebBtn && projectElecBtn) {
    // Add event listeners for Web Dev projects button
    projectWebBtn.addEventListener("click", function() {
        // Show Web Projects, hide Electrical Projects
        document.getElementById("projectWeb").style.display = "block";
        document.getElementById("projectElec").style.display = "none";
        
        // Add 'selected' class to the clicked button
        this.classList.add("selected");
        projectElecBtn.classList.remove("selected");
    });

    // Add event listeners for EEE projects button
    projectElecBtn.addEventListener("click", function() {
        // Show Electrical Projects, hide Web Projects
        document.getElementById("projectElec").style.display = "block";
        document.getElementById("projectWeb").style.display = "none";
        
        // Add 'selected' class to the clicked button
        this.classList.add("selected");
        projectWebBtn.classList.remove("selected");
    });
}
