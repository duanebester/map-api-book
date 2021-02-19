const fs = require('fs')
const geo = require('./earthquakes.geo.json')

const transformed = geo.features.map(function(feature) {
    const obj = { }
    obj.location = feature.geometry
    obj.source = feature.properties['Source']
    obj.year = feature.properties['Year']
    obj.area = feature.properties['Area']
    obj.scale = feature.properties['M']
    return obj
})

try {
    fs.unlinkSync('init-mongo.js');
    console.log("Removed old init-mongo.js");
} catch (error) {
    console.log(error);
}

fs.appendFileSync('init-mongo.js', 'db.createCollection("earthquakes")\n');
fs.appendFileSync('init-mongo.js', 'db.earthquakes.createIndex( { "location" : "2dsphere" } )\n');

transformed.forEach(transform => {
    fs.appendFileSync('init-mongo.js', 'db.earthquakes.insertOne('+JSON.stringify(transform)+')\n');
})
