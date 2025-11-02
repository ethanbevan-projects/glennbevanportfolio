function toggleMenu() {
  const nav = document.querySelector(".nav-links");
  const menuIcon = document.querySelector(".menu-icon");

  nav.classList.toggle("active");
  menuIcon.classList.toggle("active");

  // Disable scroll when menu open
  document.body.style.overflow = nav.classList.contains("active")
    ? "hidden"
    : "auto";
}

document.addEventListener("DOMContentLoaded", () => {
  const projects = [
    { slug: "leadership", title: "Leading a Design Team" },
    { slug: "clients", title: "Working with Global Clients" },
    { slug: "designawards", title: "Design Awards" },
    { slug: "usercentreddesign", title: "User Centred Design" },
    { slug: "designedbusiness", title: "Design Led Business" },
    { slug: "consumerelectronics", title: "Consumer Electronics" },
    { slug: "homewares", title: "Homewares Design" },
    { slug: "sportsequipment", title: "Sports Equipment Design" },
    { slug: "medicalscientific", title: "Medical and Scientific" },
    { slug: "mining", title: "Mining and Construction Products" },
    { slug: "industrial", title: "Industrial Products" },
    { slug: "architectural", title: "Architectural and Building Products" },
    { slug: "hotel", title: "Hotel Operating Equipment" },
    { slug: "lighting", title: "Lighting Design" },
    { slug: "lockers", title: "Smart Locks and Parcel Lockers" },
  ];

  const pathParts = location.pathname.split("/").filter(Boolean); // ["work","leadership"]
  const currentSlug = pathParts[1];
  const i = projects.findIndex((p) => p.slug === currentSlug);
  if (i === -1) return;

  const prev = projects[i - 1];
  const next = projects[i + 1];

  const prevEl = document.getElementById("prevItem");
  const nextEl = document.getElementById("nextItem");

  if (prev && prevEl) {
    prevEl.href = `/work/${prev.slug}/`;
    const lbl = prevEl.querySelector("#prevLabel");
    if (lbl) lbl.textContent = prev.title;
    prevEl.style.display = "";
  } else if (prevEl) prevEl.style.display = "none";

  if (next && nextEl) {
    nextEl.href = `/work/${next.slug}/`;
    const lbl = nextEl.querySelector("#nextLabel");
    if (lbl) lbl.textContent = next.title;
    nextEl.style.display = "";
  } else if (nextEl) nextEl.style.display = "none";
});

document.addEventListener("DOMContentLoaded", () => {
  const prevItem = document.querySelector("#prevItem .arrow");
  const nextItem = document.querySelector("#nextItem .arrow");

  if (prevItem) {
    prevItem.outerHTML = `
      <svg class="caret-left-icon--small" viewBox="0 0 9 16">
        <polyline fill="none" stroke="#000" stroke-width="1.2" stroke-miterlimit="10"
          points="7.3,14.7 2.5,8 7.3,1.2"></polyline>
      </svg>`;
  }

  if (nextItem) {
    nextItem.outerHTML = `
      <svg class="caret-right-icon--small" viewBox="0 0 9 16">
        <polyline fill="none" stroke="#000" stroke-width="1.2" stroke-miterlimit="10"
          points="1.7,1.2 6.5,8 1.7,14.7"></polyline>
      </svg>`;
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const studies = [
    { slug: "designforsocialgood", title: "Design for Social Good" },
    { slug: "embertec", title: "Embertec Power Saving Device" },
    { slug: "acoustic3d", title: "Acoustic 3D Speakers" },
  ];

  const pathParts = location.pathname.split("/").filter(Boolean); // ["casestudies","embertec"]
  if (pathParts[0] !== "casestudies") return;

  const currentSlug = pathParts[1];
  const i = studies.findIndex((p) => p.slug === currentSlug);
  if (i === -1) return;

  const prev = studies[i - 1];
  const next = studies[i + 1];
  const prevEl = document.getElementById("prevItem");
  const nextEl = document.getElementById("nextItem");

  if (prev && prevEl) {
    prevEl.href = `/casestudies/${prev.slug}/`;
    prevEl.querySelector("#prevLabel").textContent = prev.title;
    prevEl.style.display = "";
  } else if (prevEl) prevEl.style.display = "none";

  if (next && nextEl) {
    nextEl.href = `/casestudies/${next.slug}/`;
    nextEl.querySelector("#nextLabel").textContent = next.title;
    nextEl.style.display = "";
  } else if (nextEl) nextEl.style.display = "none";
});
