document.addEventListener("DOMContentLoaded", () => {
    console.log("Website loaded successfully!");
  
    const bioBtn = document.getElementById("bioBtn");
    const funFactSection = document.getElementById("funFact");
  
    bioBtn.addEventListener("click", () => {
      funFactSection.style.display = "block";
      bioBtn.style.display = "none";
    });
  });