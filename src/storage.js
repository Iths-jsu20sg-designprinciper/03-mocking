let storage;

function store(value) { storage = value; }

function retrieve() { return storage; }

module.exports = { store, retrieve }
