document.addEventListener("DOMContentLoaded", function () {
    // ✅ Menu Mobile Toggle
    const menuBtn = document.getElementById("menuBtn");
    const mobileMenu = document.getElementById("mobileMenu");

    menuBtn.addEventListener("click", function (event) {
        event.stopPropagation(); // Mencegah langsung menutup
        mobileMenu.classList.toggle("hidden");

        if (!mobileMenu.classList.contains("hidden")) {
            setTimeout(() => {
                mobileMenu.classList.remove("opacity-0", "scale-95");
            }, 10);
        } else {
            mobileMenu.classList.add("opacity-0", "scale-95");
            setTimeout(() => {
                mobileMenu.classList.add("hidden");
            }, 300);
        }
    });

    // ✅ Menutup menu jika klik di luar area menu
    document.addEventListener("click", function (event) {
        if (!menuBtn.contains(event.target) && !mobileMenu.contains(event.target)) {
            mobileMenu.classList.add("opacity-0", "scale-95");
            setTimeout(() => {
                mobileMenu.classList.add("hidden");
            }, 300);
        }
    });

    // ✅ Animasi Muncul dari Kanan & Kiri
    const textSection = document.getElementById("textSection");
    const imageSection = document.getElementById("imageSection");

    if (textSection && imageSection) {
        setTimeout(() => {
            textSection.classList.remove("opacity-0", "-translate-x-10");
            textSection.classList.add("opacity-100", "translate-x-0");

            imageSection.classList.remove("opacity-0", "translate-x-10");
            imageSection.classList.add("opacity-100", "translate-x-0");
        }, 300);
    }

    // ✅ Animasi Muncul dari Bawah (Scroll Effect)
    const elements = document.querySelectorAll(".fade-slide");
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }
            });
        },
        { threshold: 0.2 } // Saat elemen terlihat 20%
    );

    elements.forEach((element) => observer.observe(element));

    // ✅ Swiper Carousel
    var swiper = new Swiper(".mySwiper", {
        loop: true,
        autoplay: {
            delay: 3000, // Ganti slide setiap 3 detik
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        effect: "slide",
    });
});


// KRitik dan Saran

document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const responseMessage = document.getElementById("responseMessage");

    if (name === "" || email === "" || message === "") {
        responseMessage.textContent = "Harap isi semua kolom!";
        responseMessage.classList.remove("hidden");
        responseMessage.classList.add("text-red-500");
        return;
    }

    // Simulasi pengiriman email menggunakan EmailJS (atau backend API)
    // Gantilah ini dengan integrasi backend sebenarnya
    setTimeout(() => {
        responseMessage.textContent = "Terima kasih! Kritik dan saran Anda telah terkirim.";
        responseMessage.classList.remove("hidden", "text-red-500");
        responseMessage.classList.add("text-green-500");

        document.getElementById("feedbackForm").reset();
    }, 1500);
});
