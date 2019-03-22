const forest = {
  animal: 'elk',
  thirst: 3,
  locationName: 'Forest',
  description: 'There are alot of trees.',
  biomeBackground: 'url("images/forest.jpg")',
};
const desert = {
  animal: 'snake',
  thirst: 5,
  locationName: 'Desert',
  description: 'There is alot of sand.',
  biomeBackground: 'url("images/desert.png.jpg")',
};
const player = { currentBiome: null };
player.currentBiome = forest;

function logClimate() {
  console.log(player.currentBiome.locationName);
  console.log(player.currentBiome.description);
  console.log(player.currentBiome.animal);
}
logClimate();

function setBiomeBackground() {
  $('body').css('background-image', player.currentBiome.biomeBackground);
}

