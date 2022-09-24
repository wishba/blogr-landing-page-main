function openNav() {
  const navInside = document.getElementById("navInside");
  // .className = "nav__inside nav__inside-opened";
  if (navInside.className == "nav__inside") {
    navInside.className = "nav__inside nav__inside-opened";
  } else if (navInside.className == "nav__inside nav__inside-opened") {
    navInside.className = "nav__inside";
  }
}