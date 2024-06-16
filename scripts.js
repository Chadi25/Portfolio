document.addEventListener("DOMContentLoaded", function() {
    const miniPlanets = document.querySelectorAll(".loader-mini1, .loader-mini2, .loader-mini3, .loader-mini4");
  
    miniPlanets.forEach(planet => {
      planet.addEventListener("click", function() {
        const targetPage = planet.getAttribute("data-page");
        if (targetPage) {
          window.location.href = targetPage;
        }
      });
    });
  });
  