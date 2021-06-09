const ranks = ["Vampguin Lord", "Master Vampguin", "Royal Vampguin", "Vampguin Raidmaster"]
const rank_descriptions = {
    "Vampguin Lord": { common_name: "Guildmaster", description: "Also known as the guildmaster rank, the Vampguin Lord holds the highest position of power in the guild and has final say on all things guild-related." },
    "Master Vampguin": { common_name: "Discord Admin", description: "Also known as a discord/tech admin and also the head of the admin team, a Master Vampguin is the Vampguin Lord's right-hand person and in charge of many things, from organizing the rest of the admin team to managing the discord server and other guild tech. They can jump into in-game situations if needed, but that is not their primary role." },
    "Royal Vampguin": { common_name: "Guild Admin", description: "Also known as guild admins, Royal Vampguins are the primary handlers of in-game situations and responsibilities, ranging from recruitment of new members to moderating in-game chat to handing out punishments if needed." },
    "Vampguin Raidmaster": {common_name: "Event Manager", description: "Though not an admin by the traditional sense, Raidmasters help form the backbone of the VPS community, organizing and managing events like trials, gear farms, etc."}
}
const admins = {
    "Vampguin Lord": [{
        name: "Space_Keet",
        desc: "As the primary founder of VPS, Space_Keet is the vampguin dice-goblin overlord and Guildmaster of VPS. Her word is law. Though she may be very scatter-brained at times, she is one of the most passionate members of the guild admin team."
    }],
    "Master Vampguin": [{
        name: "Polska_1999",
        desc: "As the discord and tech admin of VPS, Polska_1999 is the tech nerd of the admin team. Responsible for much of the setup on the discord server as well as this website, she is the tech-overlord sibling of the Guildmaster -- just with a shorter fuse at times. She mostly plays a DPS character in ESO; the Raidmasters have tried to convince her to bring a different role to a trial, but thus far that has been mostly a vain attempt."}],
    "Royal Vampguin": [
        {
            name: "Higgsbo",
            desc: "Higgsbo is an in-game guild admin and probably the most chill of the admin team. If you see him online, he's probably playing on his tank. He also has the unique responsibility of not only being a guild admin but also being the leader of VPS's progression team, the VPS Mudballers."
        },
        {
            name: "SK",
            desc: "SK is an in-game guild admin and generally a great person. If you need help with something, she's usually among the first to offer help. She usually plays on a healer toon, and if you ever see her bringing some other role to a trial, you might just be hallucinating."
        }
    ],
    "Vampguin Raidmaster": [
        {
            name: "Ashley",
            desc: "If you don't know Ashley yet, then you've probably never signed up for one of our trials. Beyond being a frequent trial host, Ashley is also usually the one posting signups. Her main toon is a healer, but she's known to have tanked content a few times."
        },
        {
            name: "Raid",
            desc: "If you are ever uncertain about a mechanic in ESO (or another game for that matter), you can ask Raid, as he probably knows about it. And if he doesn't know... well crap, that means probably no one in the group knows."
        },
        {
            name: "ObliviousSky",
            desc: "As one of the more experienced raidmasters, Oblivious has a lot of say about what is hosted and when, sometimes hosting several himself. When participating in events, he often brings plenty of humor for all."
        }
    ]
}

for (rank of ranks) {
    console.log(rank_descriptions[rank])
}

new Vue({
    el: '#main',
    template: `
        <main id="main">
        <section>
            <h1>Admin Team</h1>
            <article v-for="rank in ranks" :key="rank">
                <h2>{{rank}} ({{rank_descriptions[rank].common_name}})</h2>
                <p><em>{{rank_descriptions[rank].description}}</em></p>
                <ul>
                <li v-for="member in admins[rank]">
                    <p><strong>{{member.name}}</strong><br>
                    {{member.desc}}</p>
                </li>
                </ul>
            </article>
        </section>
        <aside>
            <article>
                <h2>Overview</h2>
                <div v-for="rank in ranks" :key="rank">
                <h3>{{rank}}</h3> <strong>({{rank_descriptions[rank].common_name}})</strong>
                <ul>
                    <li v-for="member in admins[rank]">{{member.name}}</li>
                </ul>
                </div>
            </article>
        </aside>
        </main>
    `,
    data: {
        ranks: ranks,
        rank_descriptions: rank_descriptions,
        admins: admins
    }
})