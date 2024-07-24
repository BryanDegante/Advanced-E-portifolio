//template_lkqpnxm
//service_ii2olnh
//JEF6oOdWYGdzqxUFN

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible"
    emailjs
        .sendForm(
            'service_ii2olnh',
            'template_lkqpnxm',
            event.target,
            'JEF6oOdWYGdzqxUFN'
    ).then(() => {
            loading.classList.remove("modal__overlay--visible");
            success.classList += " modal__overlay--visible"
        }).catch(() => {
            loading.classList.remove("modal__overlay--visible")
            alert(
                "The email service is temorarily unavaliable. Please contact me directly on bdegante0906@gmail.com"
            )
        })
}

function toggleModal() {
    
}