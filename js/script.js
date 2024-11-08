(() => {
  console.log("IIFE Fired");
  const model = document.querySelector("#model");
  const hotspots = document.querySelectorAll(".Hotspot");

  const InfoBoxes = [{
          title: "Touch sensitive controls",
          text: "touch to control play, pause, stop and skip",
      },
      {
          title: "+24 hrs battery backup",
          text: "long lasting music playback",
          image: "img/battery.png",

      },
      {
          title: "Noise cancelling mic",
          text: "blocks outside noise with new AI powered software",
      },
      {
          title: "Fast charging",
          text: "full charge in under 30 minutes",
      },
      {
          title: "Earpiece",
          text: "confort fit for every ear type",
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
              titleElement.style.color = "#9cacac";

              const textElement = document.createElement("p");
              textElement.textContent = infoBox.text;

              textElement.style.color = "#161616";



              selected.appendChild(titleElement);
              selected.appendChild(textElement);



/*this chunk of code is AI generated. Encounterd bugs while adding images to the info box*/
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
          visibility: "visible"
      });
  }

  function hideInfo() {
      let selected = document.querySelector(`#${this.slot}`);
      gsap.to(selected, {
          duration: 0.5,
          autoAlpha: 0,
          visibility: "hidden"
      });
  }


  // event listeners
  model.addEventListener("load", modelLoaded);

  hotspots.forEach(function(hotspot) {
      hotspot.addEventListener("mouseover", showInfo);
      hotspot.addEventListener("mouseout", hideInfo);
  });
})();