// data for Imgword.vue

const imgWord1 = {
  url: "fs-beachclean-q5s40.jpg",
  title: "Welcome to Action Green",
  words:
    "We are a nonprofit organisation focusing on the ocean plastic problem. We are dedicated to raising awareness about plastic recycling, reduction of single-use plastics, and ocean preservation. We organise beach cleanup events monthly and support large-scale ocean cleanup projects. We appreciate your support and sincerely urge you to become more green to protect our ocean."
};

const imgWord2 = {
  url: "fs-dairy-q1s22.jpg",
  title: "",
  words:
    "Since the emergence of the first man-made plastics in 1856, plastic has played an indispensable role. Due to the fact that this super material, manufactured from petroleum, is light, flexible, and cheap to produce, it is used in all aspects of our lives, ranging from food containers to construction materials. However, despite the numerous advantages of plastic, it has one fatal flaw, it is very hard for plastic to biodegrade. While we enjoy the convenience plastic brings to our life, we seem to ignore the enormous amounts of plastic waste. Most of the plastic waste ends up in the ocean, the big plastic dumpster..."
};

// PlainWordCards: paragraph, imgurlObj, imgtxtObj
// PlainWordCard1
const plainWordCard1Para =
  "Have you ever noticed how much single-use plastic we consume everyday? Do you know where this plastic ends up?";

const plainWordCard1First = {
  img1: "bag-q3s20.jpg",
  img2: "fs-littlerecycle-q20s20.jpg"
};
const plainWordCard1Second = {
  img3: "fs-trashmt-q3s60.jpg",
  img4: "fs-seatrash-q3s50.jpg"
};
const plainWordCardtxt1First = {
  img1: "How much plastic waste does a European create each week on average?",
  img2: "Only 10% of plastic waste in the world is recycled!"
};
const plainWordCardtxt1Second = {
  img3: "The unresolved waste problem is a threat to our environment on the same scale as global warming.",
  img4:
    "More than 6 billion kilograms of waste is dumped in to the ocean each year."
};

// PlainWordCard2
const plainWordCard2Para =
  "Marine creatures and sea birds fall victim to plastic waste, suffering from loss of habitat and the danger of ingesting plastic.";

const plainWordCard2First = {
  img1: "fs-birdnet-q3s90.jpg",
  img2: "seaturtle-trash-q5s80.jpg"
};
const plainWordCard2Second = {};
const plainWordCardtxt2First = {
  img1:
    "Plastic is found in 90% of sea birds on Earth, and the percentage is still growing.",
  img2:
    "Deadly diet: Sea turtles think plastic bags are jelly fish, and plastic nets are sea weed."
};
const plainWordCardtxt2Second = {};

//Imgwordcards: flexFirst, flexSecond
const imgWordCard1First = { img1: "fs-recycle-q3s100.jpg" };

const imgWordCard1Second = {
  img1: "fs-vegstand-q5s20.jpg",
  img2: "fs-reusablebottle-q5s20.jpg"
};

const imgWordCardtxt1First = {
  img1: "How to make recycling a daily habit, the DO's and DON'Ts"
};

const imgWordCardtxt1Second = {
  img1:
    "Shop smart: minimise plastic consumption starting from grocery shopping",
  img2: "Great alternative ideas for single-use plastic"
};
const imgWordCard1BgImg = "fs-cart-q3s35.jpg";
const imgWordCard1Title = "Everyday Life";

//Plainword: title, paragraph 
const plainWord1Title = "Let's Take Action";
const plainWord2Title = "Join Us !";

//Learnmoreimgcard : learnMoreImg, learnMoreHeight, learnMoreWidth
const learnMore = {
  learnMore1: {
    img: "fs-beachrecycle.jpg",
    height: "500px",
    width: "500",
    title: "Join Action Green Beach Cleanup",
    paragraph:
      "We organise beach cleanup events every month, join us and have fun cleaning up the beach together!"
  },
  learnMore2: {
    img: false,
    height: "300px",
    width: "325",
    title: "One Off Donation",
    paragraph:
      "One-off donation to Action Green and get Action Green stickers."
  },
  learnMore3: {
    img: false,
    height: "300px",
    width: "325",
    title: "Monthly Donation",
    paragraph:
      "Monthly donation to Action Green and get Action Green stickers, two posters of your choice, and an Action Green t-shirt."
  }
};

//export
export default {
  imgWord1: imgWord1,
  imgWord2: imgWord2,

  plainWordCard1Para: plainWordCard1Para,
  plainWordCard1First: plainWordCard1First,
  plainWordCard1Second: plainWordCard1Second,
  plainWordCardtxt1First: plainWordCardtxt1First,
  plainWordCardtxt1Second: plainWordCardtxt1Second,

  plainWordCard2Para: plainWordCard2Para,
  plainWordCard2First: plainWordCard2First,
  plainWordCard2Second: plainWordCard2Second,
  plainWordCardtxt2First: plainWordCardtxt2First,
  plainWordCardtxt2Second: plainWordCardtxt2Second,

  imgWordCard1First: imgWordCard1First,
  imgWordCard1Second: imgWordCard1Second,
  imgWordCardtxt1First: imgWordCardtxt1First,
  imgWordCardtxt1Second: imgWordCardtxt1Second,
  imgWordCard1BgImg: imgWordCard1BgImg,
  imgWordCard1Title: imgWordCard1Title,
  plainWord1Title: plainWord1Title,
  plainWord2Title: plainWord2Title,

  learnMore: learnMore,




};
