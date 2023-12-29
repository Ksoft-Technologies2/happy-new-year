window.onload = () => {
  gsap.to(".heading", {
    duration: 0.5,
    opacity: 0,
    display: "none",
    delay: 6.5,
});
  gsap.to(".three", {
    duration: 0.5,
    opacity: 1,
    display: "block",
    delay: 7,
});
  gsap.to(".three", {
    duration: 0.5,
    opacity: 0,
    display: "none",
    delay: 7.5,
});
  gsap.to(".two", {
    duration: 0.5,
    opacity: 1,
    display: "block",
    delay: 8,
});
  gsap.to(".two", {
    duration: 0.5,
    opacity: 0,
    display: "none",
    delay: 8.5,
});
  gsap.to(".one", {
    duration: 0.5,
    opacity: 1,
    display: "block",
    delay: 9,
});
  gsap.to(".one", {
    duration: 0.5,
    opacity: 0,
    display: "none",
    delay: 9.5,
});
  gsap.to(".loader", {
    duration: 0.2,
    opacity: 0,
    display: "none",
    delay: 10,
});
  gsap.to(".front", {
    duration: 2.5,
    left:"-100%",
    delay: 10.2,
    ease: "power4.inOut",
});
  gsap.to(".back-page", {
    duration: 2,
    left:"-100%",
    delay: 11.8,
    ease: "power4.inOut",
});
};