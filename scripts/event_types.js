const event_types = [
    {
        type: "Farming Party",
        num_people: "3-12",
        desc: "A farming party is exactly what it sounds like -- everyone groups up together and farms for items in a zone for a set amount of time while having fun! It's a good way to gather up some resources without having it be a boring and tedious task that is done alone."
    },
    {
        type: "World Boss Run",
        num_people: "3-8",
        desc: "Want WB clears or even need a set piece that drops from them? Then this is the event for you! A world boss run is exactly what it sounds like. A zone is picked and we annihilate every world boss in the area. If the zone offers dailies, we will go through the dailies first and then switch to rotating through any uncompleted bosses; otherwise, we'll just run around and rotate through the bosses. We will do as many bossfights as people want to do."
    },
    {
        type: "World Event Sprint",
        num_people: "4-12",
        desc: "Most zones have world events, such as dolmen, geysers, dragon hunts, harrowstorms, etc. These events can sometimes be done alone, but where's the fun in that? Let's all do them together! (Note, if you request to schedule a dolmen run in Alik'r Desert, we may need to politely decline.)"
    },
    {
        type: "Public Dungeon Dive",
        num_people: "2-8",
        desc: "Public Dungeons are pretty nice. They offer a skillpoint when the group event is done for the first time, and they also have a skyshard, not to mention potentially good drops. Let's breeze through one together!"
    },
    {
        type: "Skyshard Hunt",
        num_people: "2-12",
        desc: "Skyshard hunting on new alts or gaining skillpoints at max level sucks when done alone. Let's do it together, share stories, and be less bored!"
    }
]


new Vue({
    el: "#main",
    template: `
    <main id="main">
        <section>
            <h1>Types of Mini-Events</h1>
            <div v-for="event_type in event_types" :key="event_type.type">
                <h2>{{event_type.type}}</h2>
                <h3>Suggested group size: {{event_type.num_people}}</h3>
                <p>{{event_type.desc}}</p>
            </div>
        </section>
        <aside>
            <article>
                <h2>Mini-Events List</h2>
                <ul>
                    <li v-for="event_type in event_types" :key="event_type.type">{{event_type.type}}</li>
                </ul>
            </article>
        </aside>
    </main>
    `,
    data: {
        event_types: event_types
    }
})