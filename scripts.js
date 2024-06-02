var pageNumber = 1;

function showNextScreen() {
    document.querySelectorAll(".content.active").forEach(el => el.classList.remove("active"));
    document.querySelectorAll(".tab-progress span.active").forEach(el => el.classList.remove("active"));
    if (pageNumber == 3) {
        return showLoginScreen();
    }
    
    document.querySelector(".onboarding-image-container img").style.objectPosition = `${50 * pageNumber}% 0`;
    document.querySelector(`.tab-progress span:nth-child(${pageNumber + 1})`).classList.add("active");
    document.querySelector(`#content-${++pageNumber}`).classList.add("active");
}

function showLoginScreen() {
    // document.getElementById("onboarding-screen-next-btn").style.display = 'none';
    pageNumber = 3;
    
    document.querySelectorAll(".content.active").forEach(el => el.classList.remove("active"));
    document.querySelectorAll(".tab-progress span.active").forEach(el => el.classList.remove("active"));
    document.querySelector('.onboarding-screen').style.display = 'none';
    document.querySelector('.login-screen').style.display = 'flex';
}

function showOnboarding() {
    pageNumber = 1;
    document.querySelector(".onboarding-image-container img").style.objectPosition = `0% 0`;
    document.querySelector('.login-screen').style.display = 'none';
    document.querySelector('.onboarding-screen').style.display = 'flex';
    document.querySelector(`.tab-progress span:nth-child(1)`).classList.add("active");
    document.querySelector(`#content-${pageNumber}`).classList.add("active");
}

