
// toggle menu on small screens
function toggleMenu() {
  var menu = document.getElementById("menu");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}

// adjust menu on screen resize
window.onresize = function() {
  var menu = document.getElementById("menu");
  if (window.innerWidth > 768) {
    menu.style.display = "flex";
  } else {
    menu.style.display = "none";
  }
};

const services = [
  {
    name: "Emergency Care",
    description: "24/7 emergency care for all types of medical emergencies."
  },
  {
    name: "Surgery",
    description: "Experienced surgeons and state-of-the-art facilities for all types of surgeries."
  },
  {
    name: "Physical Therapy",
    description: "Physical therapists trained in the latest techniques to help patients recover from injury or surgery."
  },
  {
    name: "Diagnostic Imaging",
    description: "Latest technology for diagnostic imaging services including MRI, CT scans, X-rays, and more."
  },
  {
    name: "Pharmacy",
    description: "In-house pharmacy with all the medications and supplies needed for patient care."
  }
];

const showDetailsButton = document.querySelector("#show-details");
const detailsDiv = document.querySelector("#details");

showDetailsButton.addEventListener("click", function() {
  let detailsHTML = "";
  services.forEach(function(service) {
    detailsHTML += `<p><b>${service.name}:</b> ${service.description}</p>`;
  });
  detailsDiv.innerHTML = detailsHTML;
  detailsDiv.style.display = "block";
});
var questions = document.querySelectorAll(".question");

  function validateForm() {
    var name = document.forms["contactForm"]["name"].value;
    var email = document.forms["contactForm"]["email"].value;
    var Question = document.forms["contactForm"]["Questions"].value;
    
    if (name == "") {
      alert("Name is required.");
      return false;
    }
    
    if (email == "") {
      alert("Email is required.");
      return false;
    }
    
    if (Questions == "") {
      alert("Question is required.");
      return false;
    }
  }
  var searchButton = document.getElementById("search-button");
  searchButton.addEventListener("click", function() {
    var searchTerm = document.getElementById("search-input").value;
  });

  var footerLinks = document.querySelectorAll("#footer a");
  footerLinks.forEach(function(link) {
    link.addEventListener("click", function(event) {
      event.preventDefault();
      window.open(this.href, "_blank");
    });
  });
  var video = document.getElementById("Services-video");

video.addEventListener("click", function() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
});

var video = document.getElementById("About-video");

video.addEventListener("click", function() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
});
var video = document.getElementById("Home-video");

video.addEventListener("click", function() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
});
function validateForm() {
  var name = document.forms["contactForm"]["name"].value;
  var email = document.forms["contactForm"]["email"].value;
  var message = document.forms["contactForm"]["message"].value;
  
  if (name == "") {
    alert("Name is required.");
    return false;
  }
  
  if (email == "") {
    alert("Email is required.");
    return false;
  }
  
  if (message == "") {
    alert("Message is required.");
    return false;
  }
}

function validateForm() {
  var name = document.forms["contactForm"]["name"].value;
  var email = document.forms["contactForm"]["email"].value;
  var Question = document.forms["contactForm"]["Questions"].value;

  if (name == "") {
    alert("Name is required.");
    return false;
  }

  if (email == "") {
    alert("Email is required.");
    return false;
  }

  if (Questions == "") {
    alert("Question is required.");
    return false;
  }
}
  





