let slides = document.querySelectorAll(".slide");
let index = 0;

setInterval(() => {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}, 4000);

function shareSite() {
  if (navigator.share) {
    navigator.share({
      title: "BestChildCare",
      text: "Help save a child’s life by supporting medical treatment.",
      url: window.location.href
    });
  } else {
    alert("Please share this link:\n" + window.location.href);
  }
}
