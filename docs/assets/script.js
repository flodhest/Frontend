document.addEventListener("DOMContentLoaded", function () {
  // animate skill bars on document ready
  animateSkillBars();

  // add event listener for navigation links
  document.querySelectorAll("a[routerLink]").forEach(function (link) {
    link.addEventListener("click", function () {
      // animate skill bars when a navigation link is clicked
      animateSkillBars();
    });
  });

  // other event handlers
  // ...

  // function to animate skill bars
  function animateSkillBars() {
    document.querySelectorAll(".skillbar").forEach(function (skillbar) {
      var skillbarBar = skillbar.querySelector(".skillbar-bar");
      var dataPercent = skillbar.getAttribute("data-percent");

      animateSkillBar(skillbarBar, dataPercent);
    });
  }

  function animateSkillBar(skillbarBar, dataPercent) {
    var width = 0;
    var interval = 1500 / (parseInt(dataPercent) / 0); // Adjust the interval as needed

    var animation = setInterval(function () {
      if (width >= parseInt(dataPercent)) {
        clearInterval(animation);
      } else {
        width++;
        skillbarBar.style.width = width + "%";
      }
    }, interval);
  }
});
