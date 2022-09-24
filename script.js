function openNav() {
  const navInside = document.getElementById("navInside");
  if (navInside.className == "nav__inside") {
    navInside.className = "nav__inside nav__inside-opened";
  } else if (navInside.className == "nav__inside nav__inside-opened") {
    navInside.className = "nav__inside";
  }
}

function openProduct() {
  const navProduct = document.getElementById("navProduct");
  if (navProduct.className == "nav__product-inside") {
    navProduct.className = "nav__product-inside nav__product-inside-opened";
  } else if (navProduct.className == "nav__product-inside nav__product-inside-opened") {
    navProduct.className = "nav__product-inside";
  }
}

function openCompany() {
  const navCompany = document.getElementById("navCompany");
  if (navCompany.className == "nav__company-inside") {
    navCompany.className = "nav__company-inside nav__company-inside-opened";
  } else if (navCompany.className == "nav__company-inside nav__company-inside-opened") {
    navCompany.className = "nav__company-inside";
  }
}

function openConnect() {
  const navConnect = document.getElementById("navConnect");
  if (navConnect.className == "nav__connect-inside") {
    navConnect.className = "nav__connect-inside nav__connect-inside-opened";
  } else if (navConnect.className == "nav__connect-inside nav__connect-inside-opened") {
    navConnect.className = "nav__connect-inside";
  }
}