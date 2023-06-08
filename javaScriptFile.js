let planetBtn = document.querySelectorAll(".planet-btn");
let absoluteFlexContainer = document.querySelectorAll('.absoluteFlexContainer');
let fcontainer = document.querySelector(".fcontainer");
planetBtn.forEach(btn => {
    // console.log(btn.innerText);
    btn.addEventListener("click", () => {
        planetBtn.forEach(btn => {
            btn.classList.remove("active-p-btn");
        });
        btn.classList.add("active-p-btn");

        if (btn.innerText == "Moon") {
            absoluteFlexContainer.forEach(afc => {
                afc.classList.remove("active-planet");
            });
            document.getElementById('Moon').classList.add("active-planet");
        }
        if (btn.innerText == "Mars") {
            absoluteFlexContainer.forEach(afc => {
                afc.classList.remove("active-planet");
            });
            document.getElementById('Mars').classList.add("active-planet");
        }
        if (btn.innerText == "Europa") {
            absoluteFlexContainer.forEach(afc => {
                afc.classList.remove("active-planet");
            });
            document.getElementById('Europa').classList.add("active-planet");
        }
        if (btn.innerText == "Titan") {
            absoluteFlexContainer.forEach(afc => {
                afc.classList.remove("active-planet");
            });
            document.getElementById('Titan').classList.add("active-planet");
        }

    });
});
