// TODO: add the rest of the shrines from http://www.ign.com/wikis/the-legend-of-zelda-breath-of-the-wild/Shrines

const regions = [
  {
    name: "Akkala",
    image: "akkala.jpg"
  },
  {
    name: "Central",
    image: "central.jpg"
  },
  {
    name: "Dueling Peaks",
    image: "dueling-peaks.jpg"
  },
  {
    name: "Eldin",
    image: "eldin.jpg"
  },
  {
    name: "Faron",
    image: "faron.jpg"
  },
  {
    name: "Gerudo",
    image: "gerudo.jpg"
  },
  {
    name: "Great Plateau",
    image: "great-plateau.jpg"
  },
  {
    name: "Hateno",
    image: "hateno.jpg"
  },
  {
    name: "Hebra",
    image: "hebra.jpg"
  },
  {
    name: "Lake",
    image: "lake.jpg"
  },
  {
    name: "Lanayru",
    image: "lanayru.jpg"
  },
  {
    name: "Ridgeland",
    image: "ridgeland.jpg"
  },
  {
    name: "Tabantha",
    image: "tabantha.jpg"
  },
  {
    name: "Wasteland",
    image: "wasteland.jpg"
  },
  {
    name: "Woodland",
    image: "woodland.jpg"
  },
];

const shrines = [
  {
    region: "Akkala",
    name: "Dah Hesho",
    trial: "A Minor Test of Strength	Giant",
    treasure: ["Ancient Core"]
  },
  {
    region: "Akkala",
    name: "Katosa Aug",
    trial: "Katosa Aug Apparatus	Great",
    treasure: ["Frostblade"]
  },
  {
    region: "Akkala",
    name: "Ke'nai Shakah",
    trial: "A Modest Test of Strength",
    treasure: ["Sapphire"]
  },
  {
    region: "Akkala",
    name: "Ritaag Zumo",
    trial: "Ritaag Zumo's Blessing / Into the Vortex	Giant",
    treasure: ["Ancient Core"]
  },
  {
    region: "Akkala",
    name: "Tu Ka'loh",
    trial: "Lomei Labyrinth Island / Trial of the Labyrinth",
    treasure: ["Ancient Core"]
  },
  {
    region: "Akkala",
    name: "Tutsuwa Nima",
    trial: "A Major Test of Strength / The Spring of Power",
    treasure: ["Flamespear"]
  },
  {
    region: "Akkala",
    name: "Ze Kasho",
    trial: "Ze Kasho Apparatus	Silverscale",
    treasure: ["Spear"]
  },
  {
    region: "Akkala",
    name: "Zuna Kai",
    trial: "Zuna Kai's Blessing / The Skull's Eye",
    treasure: ["Flame Blade"]
  },
  {
    region: "Central Hyrule",
    name: "Dah Kaso",
    trial: "A Minor Test of Strength",
    treasure: ["Ancient Core"]
  },
  {
    region: "Central Hyrule",
    name: "Kaam Ya'tak",
    trial: "Trial of Power",
    treasure: ["Edge of Duality", "Silver Rupee", "Diamond"]
  },
  {
    region: "Central Hyrule",
    name: "Katah Chuki",
    trial: "A Minor Test of Strength",
    treasure: ["Royal Halberd"]
  },
  {
    region: "Central Hyrule",
    name: "Namika Ozz",
    trial: "A Modest Test of Strength",
    treasure: ["Frostspear"]
  },
  {
    region: "Central Hyrule",
    name: "Noya Neha",
    trial: "A Minor Test of Strength",
    treasure: ["Royal Shield"]
  },
  {
    region: "Central Hyrule",
    name: "Rota Ooh",
    trial: "Passing of the Gates",
    treasure: ["Feathered Edge"]
  },
  {
    region: "Central Hyrule",
    name: "Saas Ko'sah",
    trial: "A Major Test of Strength",
    treasure: ["Flameblade"]
  },
  {
    region: "Central Hyrule",
    name: "Wahgo Katta",
    trial: "Metal Connections",
    treasure: ["Amber"]
  },
];

const data = {
  shrines,
  regions,
  towers: regions,
}

export default data;
