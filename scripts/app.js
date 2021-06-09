function initAside() {
    if (document.querySelector("#newsfeed")) {
        document.querySelector("#newsfeed").innerHTML = `
            <article>
                <h2>New Website!</h2>
                <p>With the end of the academic year coming to a close for some on the admin team, they are faced with final projects for various classes. One of these admins happens to be taking a web development course. and so, this site was born.</p>
                <p>It's still very much a work in progress, so please let the guild admin team know if something is broken or not working.</p>
            </article>
            <article>
                <h2>Quick Links</h2>
                <p>Beyond the navigation bar, you can also use these quick links to go to commonly-used pages.</p>
                <ul>
                    (Insert Links Here)
                </ul>
            </article>
                `
    }
}

function initFooter() {
    document.querySelector("footer").innerHTML = `
    <p>Website designed initally as assignment for Northwestern's CS 396 Web Development Course. This is one of those initial versions.</p>
    <button onclick="window.scroll(0,0);">Return to top</button>`
}


initAside()
initFooter()