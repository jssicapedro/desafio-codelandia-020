document.addEventListener('DOMContentLoaded', () => {
    new TypeIt(".animated", {
        /* strings: ["Web Developer", "Fron-end Developer"], */
        speed: 100,
        loop: true,
        waitUntilVisible: true,
    }).type('Web Developer', {delay: 700}).delete(13).type('Front-end Developer', {delay: 700}).delete(19).type('Técnica de multimédia', {delay: 700})
    .go();
})



