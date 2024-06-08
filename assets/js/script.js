/**
 * main
 */
const label = document.querySelectorAll("[data-label]");
const DD = document.querySelector("[data-DD]");
const MM = document.querySelector("[data-MM]");
const YYYY = document.querySelector("[data-YYYY]");
const submit = document.querySelector("[data-submit]");
const valueYears = document.querySelector("[data-value-years]");
const valueMonths = document.querySelector("[data-value-months]");
const valueDays = document.querySelector("[data-value-days]");
const errorDD = document.querySelector("[data-error-DD]");
const errorMM = document.querySelector("[data-error-MM]");
const errorYYYY = document.querySelector("[data-error-YYYY]");

submit.addEventListener("click", () => {
    let isValid = true;

    if (DD.value.length != 2 || DD.value == "") {
        DD.classList.add("active");
        errorDD.classList.add("active");
        isValid = false;
    } else {
        DD.classList.remove("active");
        errorDD.classList.remove("active");
    }

    if (MM.value == "") {
        MM.classList.add("active");
        errorMM.classList.add("active");
        isValid = false;
    } else {
        MM.classList.remove("active");
        errorMM.classList.remove("active");
    }

    // Check year input
    if (YYYY.value.length != 4 || YYYY.value == "") {
        YYYY.classList.add("active");
        errorYYYY.classList.add("active");
        isValid = false;
    } else {
        YYYY.classList.remove("active");
        errorYYYY.classList.remove("active");
    }

    if (isValid) {
        let birthDate = `${YYYY.value}-${MM.value}-${DD.value}`;
        let today = new Date();
        let birth = new Date(birthDate);

        let years = today.getFullYear() - birth.getFullYear();
        let months = today.getMonth() - birth.getMonth();
        let days = today.getDate() - birth.getDate();

        if (days < 0) {
            months -= 1;
            days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        }

        if (months < 0) {
            years -= 1;
            months += 12;
        }

        valueDays.innerHTML = days;
        valueMonths.innerHTML = months;
        valueYears.innerHTML = years;
    }
});
