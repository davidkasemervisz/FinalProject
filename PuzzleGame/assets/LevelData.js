
const GetLevelInfo = (levelNumber) => {
    var firstImage = "";
    var secondImage = "";
    var word = "";

    if(levelNumber == 0) {
        firstImage = require('../assets/images/tree.png');
        secondImage = require('../assets/images/house.png');
        word = 'treehouse';
    } else if(levelNumber == 1) {
        firstImage = require('../assets/images/butter.png');
        secondImage = require('../assets/images/fly.png');
        word = 'butterfly';
    } else if(levelNumber == 2) {
        firstImage = require('../assets/images/collar.png');
        secondImage = require('../assets/images/bone.png');
        word = 'collarbone';
    } else if(levelNumber == 3) {
        firstImage = require('../assets/images/book.png');
        secondImage = require('../assets/images/keeper.png');
        word = 'bookkeeper';
    } else if(levelNumber == 4) {
        firstImage = require('../assets/images/short.png');
        secondImage = require('../assets/images/change.png');
        word = 'shortchange';
    } else if(levelNumber == 5) {
        firstImage = require('../assets/images/under.png');
        secondImage = require('../assets/images/ground.png');
        word = 'underground';
    } else if(levelNumber == 6) {
        firstImage = require('../assets/images/extra.png');
        secondImage = require('../assets/images/ordinary.png');
        word = 'extraordinary';
    }

    var props = {
        firstImage: firstImage,
        secondImage: secondImage,
        word: word,
    }

    return props;
}

export default GetLevelInfo;
