let navbtns = document.querySelectorAll(".btn");
let anchorTag = document.querySelectorAll(".anchorTag");
navbtns.forEach(btn => {
    btn.addEventListener("click", function (e) {
        console.log(e);
        navbtns.forEach(btn => {
            btn.classList.remove("activebtn");
        });
        btn.classList.add("activebtn");
    });
});

