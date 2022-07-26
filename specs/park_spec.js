const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let park;
  let dino1;

  beforeEach(function () {
    park = new Park("Dino World", 10)
    dino1 = new Dinosaur("T-Rex", "Carnivour", 1000)
    dino2 = new Dinosaur("Souropoda", "Herbivour", 500)
    dino3 = new Dinosaur("Omny", "Omnivour", 800)
    dino4 = new Dinosaur("Brontosaurus", "Herbivour", 400)
    dino5 = new Dinosaur("Brontosaurus", "Herbivour", 250)
  })

  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, "Dino World")
  });

  it('should have a ticket price', function () {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 10)
  });

  it('should have a collection of dinosaurs', function (){
    const actual = park.dinosaurCollection;
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to add a dinosaur to its collection', function (){
    park.addDinosaur(dino1);
    const actual = [dino1];
    assert.deepStrictEqual(actual, park.dinosaurCollection);
  });

  it('should be able to remove a dinosaur from its collection', function (){
    park.addDinosaur(dino1);
    park.removeDino(dino1);
    const actual = park.dinosaurCollection.length;
    assert.deepStrictEqual(actual, 0);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function (){
    park.addDinosaur(dino1);
    park.addDinosaur(dino2);
    park.addDinosaur(dino3);
    park.addDinosaur(dino4);
    park.addDinosaur(dino5);
    const actual = park.getMostVisitedDino();
    assert.strictEqual(actual, dino1);
  });

  it('should be able to find all dinosaurs of a particular species', function () {
    park.addDinosaur(dino1);
    park.addDinosaur(dino2);
    park.addDinosaur(dino3);
    park.addDinosaur(dino4);
    park.addDinosaur(dino5);
    const actual = park.findBySpecies("Brontosaurus");
    assert.deepStrictEqual(actual, [dino4, dino5]);
  });

  it('should be able to calculate the total number of visitors per day', function (){
    park.addDinosaur(dino1);
    park.addDinosaur(dino2);
    park.addDinosaur(dino3);
    park.addDinosaur(dino4);
    park.addDinosaur(dino5);
    const actual = park.totalVisitorsEachDay();
    assert.strictEqual(actual, 2950)
  });

  it('should be able to calculate the total number of visitors per year', function (){
    park.addDinosaur(dino1);
    park.addDinosaur(dino2);
    park.addDinosaur(dino3);
    park.addDinosaur(dino4);
    park.addDinosaur(dino5);
    const actual = park.totalVisitorsEachYear();
    assert.strictEqual(actual, 1076750)
  });

  it('should be able to calculate total revenue for one year', function (){
    park.addDinosaur(dino1);
    park.addDinosaur(dino2);
    park.addDinosaur(dino3);
    park.addDinosaur(dino4);
    park.addDinosaur(dino5);
    const actual = park.totalEarningsEachYear();
    assert.strictEqual(actual, 10767500)
  });

});
