document.addEventListener('DOMContentLoaded', () => {
    
    if (!sessionStorage.getItem('contentLoaded')) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                hideLoader();
                showContent();
                sessionStorage.setItem('contentLoaded', 'true');
            }, 500);
        });
    } else {
        hideLoader();
        showContent();
    }

    function hideLoader() {
        const loader = document.getElementById("loader_holder");
        loader.style.display = "none";
    }

    function showContent() {
        const content = document.getElementById("content");
        content.style.display = "block";
        const replaceWordInDOM = (target, replacement) => {
            document.body.innerHTML = document.body.innerHTML.replace(new RegExp(target, 'gi'), replacement);
        };
        replaceWordInDOM('Dexplorer', 'dëxplorer');

        const logo = document.getElementById('logo');
        const letters = logo.textContent.split('');
        logo.innerHTML = letters.map(letter => `<span class="logo-letter">${letter}</span>`).join('');
    
        gsap.from(".logo-letter", {
            y: -50,
            opacity: 0,
            ease: "power2.out",
            stagger: 0.1,
            duration: 1
        });

        gsap.from("h2 small", { duration: 1, opacity: 0, y: -50, ease: "power2.out" });
        const spanElement = document.querySelector(".hero_info h2 span");
        if (spanElement) {
            const spanText = spanElement.textContent;
            spanElement.innerHTML = "";
            spanText.split("").forEach(letter => {
                const span = document.createElement("span");
                span.textContent = letter;
                spanElement.appendChild(span);
            });
        }
    
    
        gsap.from("h2 span span", {
            duration: 1,
            opacity: 0,
            y: -100,
            stagger: 0.1,
            ease: "power2.out"
        });
    
        // Animate hero_section down
        gsap.from(".hero_section", {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power2.out"
        });
        gsap.from(".hero_info p", {
            y: 100,
            opacity: 0,
            duration: 3,
            ease: "power2.out"
        });
        gsap.from(".about_video_info", {
            scrollTrigger: {
                trigger: ".about_video_info h2",
                start: "top 60%",
                end: "bottom 20%",
                scrub: true
            },
            y: 100,
            duration: 1
        });
        gsap.from(".about_info p", {
            duration: 2,
            opacity: 0,
            y: 50,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".about_info",
                start: "top 50%",
                end: "bottom 20%",
                scrub: true
            }
        });
        gsap.from(".about_images", {
            duration: 2,
            opacity: 0,
            y: -50,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".about_images",
                start: "top 50%",
                end: "bottom 20%",
                scrub: true
            }
        });
        console.log('ABOUT IMAGE');
        gsap.from(".highlight_image1", {
            duration: 1.5,
            scale: 0.1,
            opacity: 0,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".highlight_image1",
                start: "top 80%",
                end: "bottom 20%",
                scrub: true
            }
        });
        gsap.from(".highlight_image2 figure img", {
            duration: 1.5,
            scale: 0.1,
            opacity: 0,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".highlight_image2 figure img",
                start: "top 80%",
                end: "bottom 20%",
                scrub: true
            }
        });
        gsap.from(".highlight_image3 figure img", {
            duration: 2.5,
            scale: 0.1,
            opacity: 0,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".highlight_image3 figure img",
                start: "top 60%",
                end: "bottom 20%",
                scrub: true
            }
        });
        gsap.from(".footer_info", {
            duration: 5.5,
            y: 50,
            opacity: 0,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".footer_info h2",
                start: "top 60%",
                end: "bottom 20%",
                scrub: true
            }
        });
        gsap.from(".footer_nav", {
            duration: 1.5,
            y: 50,
            opacity: 0,
            ease: "elastic.out(1,0.3)",
            scrollTrigger: {
                trigger: ".footer_nav",
                start: "top 50%",
                end: "bottom 20%",
                scrub: true
            }
        });
        const text = document.querySelector(".flicker-text");
        text.innerHTML = text.textContent.split("").map(letter => `<span class="letter">${letter}</span>`).join("");
    
        gsap.to(".letter", {
            scrollTrigger: {
                trigger: ".footer_text",
                start: "top bottom",
                end: "bottom bottom",
                scrub: true
            },
            opacity: 0,
            duration: () => Math.random() * 10 + 5, // Random duration between 5 and 15 seconds
            repeat: -1,
            yoyo: true,
            stagger: {
                from: "end",
                ease: "power2.in",
                amount: 1.5,
                each: 50,
                repeat: -1
            },
            ease: "power1.inOut"
        });
    }
    console.log('DOM fully loaded');
});