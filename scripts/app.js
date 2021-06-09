Vue.component('newsfeed-item', {
    props: ['title', 'content'],
    template: `
    <article>
        <h2>{{title}}</h2>
        <p v-for="c in this.content">{{c}}</p>
    </article>
    `
})

function initAside() {
    if (document.querySelector("#newsfeed")) {
        new Vue({
            el: '#newsfeed',
            template: `
            <aside  id="newsfeed">
            <newsfeed-item v-for="announcement in announcements" :title="announcement.title" :content="announcement.content" :key='announcement.title'></newsfeed-item>
            </aside>
            `,
            data: {
                announcements: announcements
            }
        })
    }
}

function initFooter() {
    document.querySelector("footer").innerHTML = `
    <p>Website designed initally as assignment for Northwestern's CS 396 Web Development Course. This is one of those initial versions.</p>
    <button onclick="window.scroll(0,0);">Return to top</button>`
}


initAside()
initFooter()