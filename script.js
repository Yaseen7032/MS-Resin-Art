$(document).ready(function () {

    /* ================= SMOOTH SCROLLING ================= */
    $("a").on("click", function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;

            $("html, body").animate(
                {
                    scrollTop: $(hash).offset().top,
                },
                800,
                function () {
                    window.location.hash = hash;
                }
            );
        }
    });

    /* ================= WHATSAPP FORM SUBMIT ================= */

document.getElementById("whatsappForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("wa-name").value;
    let phone = document.getElementById("wa-phone").value;
    let message = document.getElementById("wa-message").value;

    let whatsappNumber = "917093030899"; // your number

    let text =
        "* New Customer Enquiry\n\n" +
        "* Name    : " + name + "\n" +
        "* Mobile  : " + phone + "\n" +
        "* Order   : " + message;

    let url = "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(text);

    window.open(url, "_blank");
});
});