const btn = document.getElementById("loginBtn");

btn.addEventListener("click", () => {

    btn.innerHTML = "Loading...";

    setTimeout(() => {
        btn.innerHTML = "Success ✓";
    }, 1500);

});
