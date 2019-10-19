const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/googlebooks"
);

const bookSeed = [
  {
    title: "Homeland",
    author: "R.A. Salvatore",
    description:
      "Drow ranger Drizzt Do'Urden, first introduced in The Icewind Dale Trilogy, quickly became one of the fantasy genre's standout characters. But Homeland first reveals the startling tale of how this one lone drow walked out of the shadowy depths of the Underdark, leaving behind a society of evil and a family who want him dead. It is here that the story of this amazing dark elf truly began.",
    image: "https://images-na.ssl-images-amazon.com/images/I/512Y-bUvjxL.jpg",
    link: "https://www.amazon.com/Homeland-Legend-Drizzt-Book-I-ebook/dp/B002DOSBMK"
  },
  {
    title: "Fitzpatrick's War",
    author: "Theodore Judson",
    description:
      "In the twenty-sixth century, a new world, devoid of technology, is born after the apocalyptic Storm Times, and, from the ashes, arises a historical document that questions the heroic efforts of Isaac Prophet Fitzpatrick-the Consul and Supreme Commander of the Yukon Confederacy in the twenty-fifth century.",
    image: "https://images-na.ssl-images-amazon.com/images/I/51T2Z2DMXSL._SX314_BO1,204,203,200_.jpg",
    link: "https://www.amazon.com/Fitzpatricks-War-Theodore-Judson/dp/0756401968"
  },
  {
    title: "Nightbringer",
    author: "Graham McNeill",
    description:
      "After replacing his former Captain and mentor, Idaeus, Captain Uriel Ventris embarks on his first mission, to the planet Pavonis with the 4th Company of the Ultramarines. Beset by doubt in his abilities, alien foes and traitorous opportunists, Ventris must battle against them all if he is to defeat an ancient horror soon to be awakened.",
    image: "https://images-na.ssl-images-amazon.com/images/I/51tz%2BIOC42L._SX321_BO1,204,203,200_.jpg",
    link: "https://www.amazon.com/Ultramarines-Omnibus-Graham-McNeill/dp/1844164039"
  },
  {
    title: "The Cleric Quintet",
    author: "R.A. Salvatore",
    description:
      "New York Times best-selling author R. A. Salvatore's beloved Cleric Quintet novels, now in a trade paperback. R.A. Salvatore's Cleric Quintet tells the story of the scholar-priest Cadderly, plucked from the halls of the Edificant Library to fulfill a heroic quest: to stop the chaos curse unleashed upon Faerun. This one-volume collection includes all five of the original Cleric Quintet novels-- Canticle , In Sylvan Shadows , Night Masks , The Fallen Fortress , and The Chaos Curse --complete and unabridged, with an introduction by the author. The Cleric Quintet is the prequel to R.A. Salvatore's best-selling novel, The Ghost King .",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/4/46/The_Cleric_Quintet.jpg/220px-The_Cleric_Quintet.jpg",
    link: "https://www.thriftbooks.com/w/the-cleric-quintet-collectors-edition_ra-salvatore/261610/item/6523315/?mkwid=PH40dz3R%7cdc&pcrid=70112865792&product=6523315&plc=&pgrid=21323651472&ptaid=pla-293630284770&utm_source=google_shopping&utm_content=PH40dz3R%7cdc%7cpcrid%7c70112865792%7cpkw%7c%7cpmt%7c%7cproduct%7c6523315%7cslid%7c%7cpgrid%7c21323651472%7cptaid%7cpla-293630284770%7c&gclid=Cj0KCQjw6KrtBRDLARIsAKzvQIF9eMk0N1ytLOVwgYGD7B3FI8dIsyk3vzAYO17ytDD5pVbHq_z3--4aAs6MEALw_wcB#isbn=0786926902&idiq=6523315"
  },
  {
    title: "Fire in the Blood",
    author: "Erin M. Evans",
    description:
      "In a direct follow-up to the third book in the Sundering series, The Adversary, young warlock Farideh falls into the midst of a battle for the throne of Cormyr. As the war brought on by the Sundering rages across Faerûn, princes and princesses, wizards and rogues scheme to capture the seat of power of the Land of the Purple Dragon—with Farideh and her allies caught squarely in the middle.",
    image: "https://dasg7xwmldix6.cloudfront.net/episodes/238189_ThyF1KKZ.jpg",
    link: "https://www.amazon.com/Fire-Blood-Forgotten-Realms-Evans/dp/0786965290"
  },
  {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    description:
      "Seconds before Earth is demolished to make way for a galactic freeway, Arthur Dent is plucked off the planet by his friend Ford Prefect, a researcher for the revised edition of The Hitchhiker’s Guide to the Galaxy who, for the last fifteen years, has been posing as an out-of-work actor.  Together, this dynamic pair began a journey through space aided by a galaxyful of fellow travelers: Zaphod Beeblebrox—the two-headed, three-armed ex-hippie and totally out-to-lunch president of the galaxy; Trillian (formerly Tricia McMillan), Zaphod’s girlfriend, whom Arthur tried to pick up at a cocktail party once upon a time zone; Marvin, a paranoid, brilliant, and chronically depressed robot; and Veet Voojagig, a former graduate student obsessed with the disappearance of all the ballpoint pens he’s bought over the years.  Where are these pens? Why are we born? Why do we die? For all the answers, stick your thumb to the stars!",
    image: "https://images-na.ssl-images-amazon.com/images/I/81XSN3hA5gL.jpg",
    link: "https://www.amazon.com/Hitchhikers-Guide-Galaxy-Douglas-Adams/dp/0345391802"
  }
];

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
