(() => {
  console.log("IIFE");
  const model = document.querySelector("#model");
  const hotspots = document.querySelectorAll(".Hotspot");

  const InfoBoxes = [
    {
      title: "Orion logo",
      text: "The Orion logo symbolizes innovation, precision, and a forward-thinking vision.",
      image: "../img/Group.png",
    },
    {
      title: "Soft Buds ",
      text: "Soft Buds Orion: Innovating comfort and quality in every product.",
      image: "../img/buds.jpeg",
    },

    {
      title: "Sleek design",
      text: "Sleek design : blends sophistication with minimalism for a refined asthetic ",
    },
    {
      title: "Fast charging",
      text: "Colors : A wide range of colors to choose from, offering endless possiblities",
    },
  ];

  function modelLoaded() {
    hotspots.forEach((hotspot) => {
      hotspot.style.display = "block";
    });
  }

  function loadInfo() {
    InfoBoxes.forEach((infoBox, index) => {
      let selected = document.querySelector(`#hotspot-${index + 1}`);

      if (selected) {
        const titleElement = document.createElement("h2");
        titleElement.textContent = infoBox.title;
        titleElement.style.color = "#0000";

        const textElement = document.createElement("p");
        textElement.textContent = infoBox.text;

        textElement.style.color = "#161616";

        selected.appendChild(titleElement);
        selected.appendChild(textElement);

        if (infoBox.image) {
          const imgElement = document.createElement("img");
          imgElement.src = infoBox.image;
          imgElement.classList.add("hotspot-image");
          selected.appendChild(imgElement);
        }
      } else {
        console.log(`#hotspot-${index + 1} not found`);
      }
    });
  }

  loadInfo();

  function showInfo() {
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, {
      duration: 0.5,
      autoAlpha: 1,
      visibility: "visible",
    });
  }

  function hideInfo() {
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, {
      duration: 0.5,
      autoAlpha: 0,
      visibility: "hidden",
    });
  }

  model.addEventListener("load", modelLoaded);

  hotspots.forEach(function (hotspot) {
    hotspot.addEventListener("mouseover", showInfo);
    hotspot.addEventListener("mouseout", hideInfo);
  });
})();
