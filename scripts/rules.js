const full_rules_list = [
    {
        type: "General",
        rules: [
            { short: "Respect your guildmates. ", rest: "You don't have to be friends with everyone here, interests will collide, people have different views etc. Just be respectful and kind."},
            { short: "Don't cause drama. ", rest: "We don't care what side you're on in the argument or if you right/wrong. There will be no bias. If you cause drama, you will be kicked." },
            { short: "Respect the guild staff. ", rest: "Our guild staff, from the Guildmaster to the Vampguin Raidmasters, all work really hard to keep the guild a friendly and fun place. They put in a lot of hours every week to make this place awesome. Don't be rude to them just because trial signups were posted a few hours late or something."}
        ]
    },
    {
        type: "Discord",
        rules: [
            { short: "Use channels for what they are for. ", rest:  "We are not super picky about where conversation happens; sometimes, people make mistakes, or conversations change topic. That is totally fine. But don't go spamming bot commands in #events-discussion or something."}
        ]
    }
]

Vue.component("rules-list", {
    props: ['type', 'rules', 'full'],
    template:
    `
    <div>
    <h2 v-if="full">{{type}}</h2>
    <h3 v-else>{{type}}</h3>
    <ol v-if="full">
        <li v-for="(rule, num) in rules" :key="num"><strong>{{rule.short}}</strong>{{rule.rest}}</li>
    </ol>
    <ol v-else>
    <li v-for="(rule, num) in rules" :key="num">{{rule.short}}</li>
    </ol>
    </div>
    `
})




new Vue({
    el: '#main',
    template: `
        <main id="main">
            <section>
                <h1>Rules</h1>
                <rules-list v-for="rules_list in full_rules_list" :key="rules_list.type" :type="rules_list.type" :rules="rules_list.rules" :full="true"></rules-list>
            </section>
            <aside>
                <article>
                    <h2>Quick Rules</h2>
                    <rules-list v-for="rules_list in full_rules_list" :key="rules_list.type" :type="rules_list.type" :rules="rules_list.rules" :full="false"></rules-list>
                </article>
            </aside>
        </main>
    `,
    data: {
        full_rules_list: full_rules_list
    }
})