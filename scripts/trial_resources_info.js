const roles = ["Tank", "Healer", "DPS"]
const general_resources = {
    "DPS": [
        { desc: "Magicka DPS sets", link: "", type: ""},
        { desc: "Stamina DPS sets", link: "", type: "" },
    ],
    "Tank": [
        { desc: "Alcast's tanking guide", link: "https://alcasthq.com/eso-tanking-beginner-guide/", type: "webpage" },
        { desc: "Selfless tank sets", link: "", type: "" },
        {desc: "Selfish tank sets", link: "", type: ""}
    ],
    "Healer": [
        { desc: "Alcast's beginner healer guide", link: "https://alcasthq.com/eso-healing-beginner-guide-elder-scrolls-online/", type:"webpage"},
        { desc: "Healer sets", link: "", type: "Google Doc" },
        { desc: "Healer monster sets", link: "", type: "Google Doc" }
    ]
}
const trials = ["HRC", "AA", "SO", "MoL", "HoF", "AS", "CR", "SS", "KA", "RG"]
const trials_full = {
    "HRC": "Hel Ra Citadel",
    "AA" :"Aetherian Archives",
    "SO": "Sanctum Ophidia",
    "MoL": "Maw of Lorkhaj",
    "HoF": "Halls of Fabrication",
    "AS": "Asylum Sanctorium",
    "CR": "Cloudrest",
    "SS": "Sunspire",
    "KA": "Kyne's Aegis",
    "RG": "Rockgrove"}
const trial_resources = {
    "HRC": [{desc: "Alcast's trial guide", link: "https://alcasthq.com/hel-ra-citadel-guide-for-elder-scrolls-online/", type: "webpage"}],
    "AA": [
        {desc: "Xynode's mechanics explanations", link: "https://xynodegaming.com/aetherian-archive", type: "webpage"},
        { desc: "Alcast's trial guide", link: "https://alcasthq.com/eso-aetherian-archive-guide/", type: "webpage" }
    ],
    "SO": [{desc: "Alcast's trial guide", link: "https://alcasthq.com/eso-sanctum-ophidia-guide/", type: "webpage"}],
    "MoL": [
        { desc: "Alcast's trial guide", link: "https://alcasthq.com/eso-maw-of-lorkhaj-guide/", type: "webpage" },
        {desc: "Zhaj'hassa positioning chart", link: "https://media.discordapp.net/attachments/824302717588865036/848685196324765737/MoL_Zhaj.png", type: "image"},
        { desc: "Vashai & S'kinrai twins fight", link: "https://www.youtube.com/watch?v=cQJ_UEywqeA", type: "video", note: "Convergence only happens on veteran difficulty." },
        {desc: "Rakkat fight: backyard path", link: "https://i0.wp.com/alcasthq.com/wp-content/uploads/2018/08/vmol-backyard-runner.jpg?fit=377%2C404&ssl=1", type: "image"}
    ],
    "HoF": [{desc: "Alcast's trial guide", link: "https://alcasthq.com/eso-halls-of-fabrication-guide/", type: "webpage"}],
    "AS": [
        { desc: "Alcast's trial guide", link: "https://alcasthq.com/eso-asylum-sanctorium-guide/", type: "webpage" },
        { desc: "Saint Olms full kite paths gif", link: "https://cdn.discordapp.com/attachments/817129965308346430/822466904610045952/AS_Kite_Phase.gif", type: "gif"},
        { desc: "Saint Olms DPS kite paths", link: "https://i2.wp.com/alcasthq.com/wp-content/uploads/2018/08/asylum-2-hardmode-guide-asylum-sanctorium-guide.jpg?resize=847%2C644&ssl=1", type:"image"}
    ],
    "CR": [
        { desc: "Xynode's mechanics explanations", link: "https://xynodegaming.com/Cloudrest/", type: "webpage"},
        { desc: "Alcast's trial guide", link: "https://alcasthq.com/eso-cloudrest-guide/", type: "webpage" }
    ],
    "SS": [
        { desc: "Alcast's trial guide", link: "https://alcasthq.com/eso-sunspire-trial-guide/", type: "webpage" }
    ],
    "KA": [{desc: "Alcast's trial guide", link: "https://alcasthq.com/eso-kynes-aegis-trial-guide/", type: "webpage"}],
    "RG": [
        { desc: "Alcast's trial guide", link: "https://alcasthq.com/eso-rockgrove-trial-guide/", type: "webpage" },
        { desc: "Oaxiltso positioning guide", link: "https://cdn.discordapp.com/attachments/817129965308346430/855586962932891648/vRG_Oax.png", type: "image" },
        { desc: "Bahsei positioning guide", link: "https://cdn.discordapp.com/attachments/817129965308346430/855592630946365460/vRG_Bahsei_2.png", type: "image" },
        { desc: "Qcell's Rockgrove Helper ESO Addon", link: "https://www.esoui.com/downloads/info3060-QcellsRockgroveHelper.html", type: "addon" } 
    ]
}

/*
    {desc: "", link: "", type: ""}
*/