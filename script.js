const cta = document.querySelector(".cta");
const modal = document.querySelector(".s3-modal");
const closeBtn = document.querySelector(".close-modal");
const overlay = document.querySelector(".s3-modal-overlay");

cta.addEventListener("click", () => {
  modal.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("active");
});

overlay.addEventListener("click", () => {
  modal.classList.remove("active");
});

const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    
    tabs.forEach(t => t.classList.remove("active"));
    contents.forEach(c => c.classList.remove("active"));

    tab.classList.add("active");

    const target = tab.getAttribute("data-tab");
    document.getElementById(target).classList.add("active");
  });
});

const ctaLight = document.querySelector(".cta.light");
const ctaDark = document.querySelector(".cta.dark");

const modal1 = document.querySelector(".s6-modal-1");
const modal2 = document.querySelector(".s6-modal-2");

const closeButtons = document.querySelectorAll(".s6-modal .close-modal");
const overlays = document.querySelectorAll(".s6-modal-overlay");

ctaLight.addEventListener("click", () => {
  modal1.classList.add("active");
});

ctaDark.addEventListener("click", () => {
  modal2.classList.add("active");
});

closeButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    btn.closest(".s6-modal").classList.remove("active");
  });
});

overlays.forEach(overlay => {
  overlay.addEventListener("click", () => {
    overlay.parentElement.classList.remove("active");
  });
});

const s7Modal = document.querySelector(".s7-modal")
const s7Open = document.querySelector(".s7 .cta")
const s7Close = document.querySelector(".s7-modal .close-modal")
const s7Overlay = document.querySelector(".s7-modal-overlay")

s7Open.addEventListener("click", () => {
  s7Modal.classList.add("active")
})

s7Close.addEventListener("click", () => {
  s7Modal.classList.remove("active")
})

s7Overlay.addEventListener("click", () => {
  s7Modal.classList.remove("active")
})


  const btn = document.getElementById("backToTop");
  const s2 = document.querySelector(".s2");

  window.addEventListener("scroll", () => {
    const s2Bottom = s2.offsetTop + s2.offsetHeight;

    if (window.scrollY > s2Bottom) {
      btn.classList.add("show");
    } else {
      btn.classList.remove("show");
    }
  });

  btn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });


  const track = document.querySelector('.carousel-track');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

function getScrollAmount() {
  const item = document.querySelector('.carousel-item');
  const style = window.getComputedStyle(track);
  const gap = parseInt(style.gap) || 0;
  return item.offsetWidth + gap;
}

next.addEventListener('click', () => {
  track.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
});

prev.addEventListener('click', () => {
  track.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
});