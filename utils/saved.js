// savedItemsManager.js

const savedItems = new Set();

function addItem(itemId) {
    savedItems.add(itemId);
}

function hasItem(itemId) {
    return savedItems.has(itemId);
}

module.exports = {
    addItem,
    hasItem
};
