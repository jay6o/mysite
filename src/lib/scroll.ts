export default function scrollHandlerHome(scroll) {
  const nav: HTMLElement | null = document.querySelector("nav");
  const hero: HTMLElement | null = document.querySelector(".hero");
  const sec2: HTMLElement | null = document.querySelector(".section-2");

  const navRect = nav.getBoundingClientRect();
  const scrollTop = window.pageYOffset;
  const navTop: number = navRect.bottom + scrollTop;
}
