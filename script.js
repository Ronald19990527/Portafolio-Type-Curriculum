/* Menu Navigation */
((d) => {
  const $btnMenuNavigation = d.querySelector(".navBar"),
  $menuNavigation = d.querySelector(".menu-navigation"),
  id = [1, 2, 3, 4, 5, 6];
  let carouselMoveAuto = true;

  $btnMenuNavigation.addEventListener("click", e => {
    $btnMenuNavigation.firstElementChild.classList.toggle("no-show-closed-navBar");

    $btnMenuNavigation.lastElementChild.classList.toggle("no-show-closed-navBar");

    $menuNavigation.classList.toggle("show-menu-navigation")
  });

  d.addEventListener("click", e => {
    if (!e.target.matches(".menu-navigation > a")) {
      return false;
    }

    $btnMenuNavigation.firstElementChild.classList.toggle("no-show-closed-navBar");

    $btnMenuNavigation.lastElementChild.classList.toggle("no-show-closed-navBar");

    $menuNavigation.classList.toggle("show-menu-navigation");
  });

  if (carouselMoveAuto) {
    let time = 3000;

    for (let index = 1; index < 5; index++) {
      setTimeout(() => {
        d.querySelector(".cards-clients").style.setProperty("transform", `translateX(${(index - 1) * (-100)}%)`);
      }, time);

      time += 3000;
    }

    setTimeout(() => {
      d.querySelector(".cards-clients").style.setProperty("transform", `translateX(0)`);
    }, time);

    carouselMoveAuto = false;
  }

  id.forEach(element => {
    d.querySelector(`#closed-${element}`).addEventListener("click", e => {
      d.querySelector(`#modal-window-tutorship-${element}`).classList.add("no-modal-window");
    });

    d.querySelector(`#aside-tutorship-${element}`).addEventListener("click", e => {
      d.querySelector(`#modal-window-tutorship-${element}`).classList.remove("no-modal-window");
    });

    if (element <= 4) {
      d.querySelector(`#button-card-${element}`).addEventListener("click", e => {
        for (let index = 1; index < 5; index++) {
          if (d.querySelector(`#button-card-${index}`).classList.contains("select")) {
            d.querySelector(`#button-card-${index}`).classList.remove("select");
          }
        }

        d.querySelector(`#button-card-${element}`).classList.add("select");

        d.querySelector(".cards-clients").style.setProperty("transform", `translateX(${(element - 1) * (-100)}%)`);
      });
    }
  });
})(document);