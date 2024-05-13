const btnElements = document.querySelectorAll('button')


btnElements.forEach(btnEl => {
    let isOpen = true;
    btnEl.addEventListener('click', () => {
        btnEl.parentElement.parentElement.classList.toggle('h-[67px]')
        if (!isOpen) {
            btnEl.classList.remove('bg-[#341635]')
            btnEl.classList.add('bg-[#AD28EB]')
            btnEl.innerText = '+'
        }
        else {
            btnEl.classList.add('bg-[#341635]')
            btnEl.classList.remove('bg-[#AD28EB]')
            btnEl.innerText = '-'
        }
        isOpen = !isOpen

        // btnEl.classList.add('bg-[#AD28EB]')
        // let inner = btnEl.firstElementChild
        // if (inner.getAttribute('src') == "images/pilus.svg") {
        //     inner.setAttribute('src', 'images/minus.svg')
        // } else {
        //     inner.setAttribute('src', 'images/pilus.svg')
        // }
    })
})