const main_roster = ["Higgsbo", "ObliviousSky", "Ashley", "SK", "Polska_1999", "Raid", "Space_Keet", "Ripr", "Cookie", "CoVid", "Bowms"]
const backups = ["Illiamna", "Perk", "Jonuto", "LittleMagilla"]


new Vue({
    el: "#roster",
    template: 
    `
    <article id="roster">
        <h2>VPS Mudballers Roster</h2>
        <h3>Core Team</h3>
        <ul><li v-for="p in main_roster">{{p}}</li></ul>
        <h3>Backups</h3>
        <ul><li v-for="p in backups">{{p}}</li></ul>
    </article>
    `,
    data: {
        main_roster: main_roster,
        backups: backups
    }
})