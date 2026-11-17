
document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for navigation links
  const navigationLinks = document.querySelectorAll(
    '.nav-links a[href^="#"]'
  );

  navigationLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      const targetId = link.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        event.preventDefault();

        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

  // Highlight the active navigation link
  const sections = document.querySelectorAll("main section");

  window.addEventListener("scroll", function () {
    let currentSection = "";

    sections.forEach(function (section) {
      const sectionTop = section.offsetTop - 120;

      if (window.scrollY >= sectionTop) {
        currentSection = section.getAttribute("id");
      }
    });

    navigationLinks.forEach(function (link) {
      link.classList.remove("active");

      if (link.getAttribute("href") === "#" + currentSection) {
        link.classList.add("active");
      }
    });
  });
  
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const name = document.getElementById("visitorName").value.trim();
      const email = document.getElementById("visitorEmail").value.trim();
      const message = document.getElementById("visitorMessage").value.trim();

      const subject = encodeURIComponent("Portfolio Contact Message");
      const body = encodeURIComponent(
        "Name: " + name +
        "\nEmail: " + email +
        "\n\nMessage:\n" + message
      );

      const mailtoLink =
        "mailto:sameerasifsameerasif999@gmail.com" +
        "?subject=" + subject +
        "&body=" + body;

      window.location.href = mailtoLink;
    });
  }

});
