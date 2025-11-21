document.addEventListener("DOMContentLoaded", () => {
  // --- Header Scroll Effect ---
  const header = document.getElementById("header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // --- Mobile Menu Toggle ---
  const menuBtn = document.getElementById("menu-btn");
  const navLinks = document.getElementById("nav-links");
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    // Toggle icon between bars and close
    const icon = menuBtn.querySelector("i");
    if (navLinks.classList.contains("active")) {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-times");
    } else {
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
    }
  });

  // --- Close mobile menu when a link is clicked ---
  document.querySelectorAll("#nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      if (navLinks.classList.contains("active")) {
        navLinks.classList.remove("active");
        menuBtn.querySelector("i").classList.remove("fa-times");
        menuBtn.querySelector("i").classList.add("fa-bars");
      }
    });
  });

  // --- Typing Animation ---
  if (document.getElementById("typing-text")) {
    new Typed("#typing-text", {
      strings: [
        "Network Engineer",
        "AI Enthusiast",
        "Embedded Systems Developer",
        "Problem Solver",
      ],
      typeSpeed: 70,
      backSpeed: 50,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });
  }

  // --- Particles.js Background ---
  if (document.getElementById("particles-js")) {
    particlesJS("particles-js", {
      particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: { type: "circle", stroke: { width: 0, color: "#000000" } },
        opacity: {
          value: 0.5,
          random: false,
          anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
        },
        size: {
          value: 3,
          random: true,
          anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 6,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: { enable: false, rotateX: 600, rotateY: 1200 },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: true, mode: "repulse" },
          onclick: { enable: true, mode: "push" },
          resize: true,
        },
        modes: {
          grab: { distance: 400, line_linked: { opacity: 1 } },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3,
          },
          repulse: { distance: 200, duration: 0.4 },
          push: { particles_nb: 4 },
          remove: { particles_nb: 2 },
        },
      },
      retina_detect: true,
    });
  }

  // --- Scroll-to-Top Button ---
  const scrollTopBtn = document.querySelector(".scroll-to-top");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollTopBtn.classList.add("visible");
    } else {
      scrollTopBtn.classList.remove("visible");
    }
  });

  // --- Active Nav Link Highlighting on Scroll ---
  const sections = document.querySelectorAll("section[id]");
  const observerOptions = { root: null, rootMargin: "0px", threshold: 0.4 };

  const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const navLink = document.querySelector(
          `nav a[href="#${entry.target.id}"]`
        );
        document
          .querySelectorAll("nav a")
          .forEach((link) => link.classList.remove("active"));
        if (navLink) {
          navLink.classList.add("active");
        }
      }
    });
  }, observerOptions);

  sections.forEach((section) => sectionObserver.observe(section));

  // --- Reveal Elements on Scroll ---
  const revealElements = document.querySelectorAll(".reveal");
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  revealElements.forEach((el) => revealObserver.observe(el));

  // --- Contact Form Handling ---
  const form = document.getElementById("contact-form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    // Simple validation
    if (name && email && subject && message) {
      // Using mailto: for simple client-side handling.
      // For a production site, you'd use a backend service or a form service like Formspree.
      const mailtoLink = `mailto:nhlanhlapomba@gmail.com?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(
        "Name: " + name + "\nEmail: " + email + "\n\nMessage:\n" + message
      )}`;
      window.location.href = mailtoLink;
      alert("Thank you! Your email client will now open.");
      form.reset();
    } else {
      alert("Please fill out all fields.");
    }
  });
});
