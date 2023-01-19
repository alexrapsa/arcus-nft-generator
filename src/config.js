const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "Arcusian Warriors";
const description = "Arcus NFT Warriors";
const baseUri = "https://gateway.pinata.cloud/QmQiVAxgvVyARAqKXGuVbFY9H7TsWYgtNGK7JZF7tj8MjZ";

const solanaMetadata = {
  symbol: "YC",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.youtube.com/c/hashlipsnft",
  creators: [
    {
      address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC",
      share: 100,
    },
  ],
};

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 1, //number of nft to generate
    layersOrder: [
      { name: "Layer_1_Female Skin" },
      { name: "Layer_2_Eyes" },
      { name: "Layer_3_TopClothes" },
      { name: "Layer_4_Armor" },
      { name: "Layer_5_Hair" },
      { name: "Layer_6_Headgear" },
      { name: "Layer_7_LowerClothes" },
      { name: "Layer_8_Boots" },
      { name: "Layer_9_Gauntlet" },
      { name: "Layer_10_Tasset" },
      { name: "Layer_11_Melee Weapon" }
    ],
  },
];

const debugLogs = false;

const format = {
  width: 720,
  height: 1024,
  smoothing: false,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: false,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

const RARITIES = {
  common: { name: "Common", percentage: 70.92 },
  uncommon: { name: "Rare", percentage: 24 },
  rare: { name: "Epic", percentage: 5 },
  legendary: { name: "Legendary", percentage: .08}
};

const ELEMENTS = {
  earth: { name: "earth", percentage: 25 },
  wind: { name: "wind", percentage: 25 },
  fire: { name: "fire", percentage: 25 },
  water: { name: "water", percentage: 25}
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
  RARITIES
};
