let tabList = document.querySelector('.menu');
let tabContent = document.querySelectorAll('.tab');
let tablinks = document.querySelectorAll('.tablink');

tabList.addEventListener('click', (e) => {
    e.preventDefault()
    let targetElement = e.target;
    const dataCity = targetElement.dataset.city;
    for (let item of tabContent) {
        item.classList.remove('active');
        if (item.id == dataCity) {
            item.classList.add('active');
        }
    }
    for (let tab of tablinks) {
        tab.classList.remove('active')
        if (tab.id == dataCity) {
            tab.classList.add('active');
        }
    }
})