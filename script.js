window.addEventListener("DOMContentLoaded", () => {
  function hideDisplay() {
    const selectordisplay = document.querySelectorAll(".set-none");

    selectordisplay.forEach((selectordisplay) => {
      // if (selectordisplay.classList.contains("-set-none")) {
      selectordisplay.classList.remove("--visible");
      selectordisplay.classList.add("--none");
      // }
    });
  }

  function unHideDisplayMobile() {
    const selectordisplay2 = document.querySelectorAll(".set-visible");

    selectordisplay2.forEach((selectordisplay2) => {
      selectordisplay2.classList.remove("--none");
      selectordisplay2.classList.add("--visible");
    });
  }

  ////////////////////////////////////////////////////////////////

  function unHideDisplay() {
    const selectordisplay3 = document.querySelectorAll(".set-none");

    selectordisplay3.forEach((selectordisplay3) => {
      // if (selectordisplay.classList.contains("-set-none")) {
      selectordisplay3.classList.remove("--none");
      selectordisplay3.classList.add("--visible");
      // }
    });
  }

  function hideDisplayMobile() {
    const selectordisplay4 = document.querySelectorAll(".set-visible");

    selectordisplay4.forEach((selectordisplay4) => {
      selectordisplay4.classList.remove("--visible");
      selectordisplay4.classList.add("--none");
    });
  }

  function buildLayout() {
    const tamanhoDaTela = window.innerWidth;

    if (tamanhoDaTela < 801) {
      hideDisplay();
      unHideDisplayMobile();
    } else {
      unHideDisplay();
      hideDisplayMobile();
    }
  }

  window.addEventListener("resize", buildLayout);

  buildLayout();

  ////////////////////////////////////////////////////////////////
});
