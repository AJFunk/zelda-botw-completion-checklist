// TODO: add the rest of the shrines from http://www.ign.com/wikis/the-legend-of-zelda-breath-of-the-wild/Shrines

const regions = [
  {
    name: "Akkala",
    image: "akkala.jpg",
    korokImage: ""
  },
  {
    name: "Central",
    image: "central.jpg",
    korokImage: ""
  },
  {
    name: "Dueling Peaks",
    image: "dueling-peaks.jpg",
    korokImage: ""
  },
  {
    name: "Eldin",
    image: "eldin.jpg",
    korokImage: ""
  },
  {
    name: "Faron",
    image: "faron.jpg",
    korokImage: ""
  },
  {
    name: "Gerudo",
    image: "gerudo.jpg",
    korokImage: ""
  },
  {
    name: "Great Plateau",
    image: "great-plateau.jpg",
    korokImage: "http://cdn.mos.cms.futurecdn.net/NMWUxtpUasq9F8UX8d5ar.jpg"
  },
  {
    name: "Hateno",
    image: "hateno.jpg",
    korokImage: ""
  },
  {
    name: "Hebra",
    image: "hebra.jpg",
    korokImage: ""
  },
  {
    name: "Lake",
    image: "lake.jpg",
    korokImage: ""
  },
  {
    name: "Lanayru",
    image: "lanayru.jpg",
    korokImage: ""
  },
  {
    name: "Ridgeland",
    image: "ridgeland.jpg",
    korokImage: ""
  },
  {
    name: "Tabantha",
    image: "tabantha.jpg",
    korokImage: ""
  },
  {
    name: "Wasteland",
    image: "wasteland.jpg",
    korokImage: ""
  },
  {
    name: "Woodland",
    image: "woodland.jpg",
    korokImage: ""
  },
];

const shrines = [
  {
    region: "Akkala",
    name: "Dah Hesho",
    trial: "A Minor Test of Strength",
    treasure: ["Giant Ancient Core"],
  },
  {
    region: "Akkala",
    name: "Katosa Aug",
    trial: "Katosa Aug Apparatus",
    treasure: ["Great Frostblade"]
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
    trial: "Ritaag Zumo's Blessing",
    treasure: ["Giant Ancient Core"],
    quest: "Into the Vortex"
  },
  {
    region: "Akkala",
    name: "Tu Ka'loh",
    trial: "Lomei Labyrinth Island",
    treasure: ["Ancient Core"],
    quest: "Trial of the Labyrinth"
  },
  {
    region: "Akkala",
    name: "Tutsuwa Nima",
    trial: "A Major Test of Strength",
    treasure: ["Flamespear"],
    quest: "The Spring of Power"
  },
  {
    region: "Akkala",
    name: "Ze Kasho",
    trial: "Ze Kasho Apparatus",
    treasure: ["Silverscale Spear"]
  },
  {
    region: "Akkala",
    name: "Zuna Kai",
    trial: "Zuna Kai's Blessing",
    treasure: ["Flame Blade"],
    quest: "The Skull's Eye",
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

const koroks = [
  {
    region: "Great Plateau",
    ord: 1,
    type: "Cube formation"
  },
  {
    region: "Great Plateau",
    ord: 2,
    type: "Hiding Korok"
  },
  {
    region: "Great Plateau",
    ord: 3,
    type: "Flowers"
  },
  {
    region: "Great Plateau",
    ord: 4,
    type: "Hiding Korok"
  },
  {
    region: "Great Plateau",
    ord: 5,
    type: "Hiding Korok"
  },
  {
    region: "Great Plateau",
    ord: 6,
    type: "Boulder puzzle"
  },
  {
    region: "Great Plateau",
    ord: 7,
    type: "Petals (Inside Shrine of Resurrection)"
  },
  {
    region: "Great Plateau",
    ord: 8,
    type: "Rings"
  },
  {
    region: "Great Plateau",
    ord: 9,
    type: "Petals"
  },
  {
    region: "Great Plateau",
    ord: 1,
    type: "Hiding Korok"
  },
  {
    region: "Great Plateau",
    ord: 1,
    type: "Cube formation"
  },
  {
    region: "Great Plateau",
    ord: 1,
    type: "Rock formation"
  },
  {
    region: "Great Plateau",
    ord: 1,
    type: "Hiding Korok"
  },
  {
    region: "Great Plateau",
    ord: 1,
    type: "Hiding Korok"
  },
  {
    region: "Great Plateau",
    ord: 1,
    type: "Petals"
  },
  {
    region: "Great Plateau",
    ord: 1,
    type: "Petals"
  },
  {
    region: "Great Plateau",
    ord: 1,
    type: "Hiding Korok"
  },
];

const data = {
  shrines,
  regions,
  towers: regions,
  koroks,
}

export default data;
