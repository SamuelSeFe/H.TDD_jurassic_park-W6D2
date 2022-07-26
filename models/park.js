const Park = function (name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurCollection = [];
}

Park.prototype.addDinosaur = function (dinosaur){
    this.dinosaurCollection.push(dinosaur)
  };

Park.prototype.checkDinos = function (){
    this.dinosaurCollection.length;
};

Park.prototype.removeDino = function (){
    this.dinosaurCollection.pop();
}

Park.prototype.getMostVisitedDino = function (){
    mostPopularDinos = []
    let highestDinoVisits = 0;
    for (const dinosaur of this.dinosaurCollection){
        if (dinosaur.guestsAttractedPerDay > highestDinoVisits) {
            mostPopularDinos.unshift(dinosaur)
            highestDinoVisits = dinosaur.guestsAttractedPerDay
        } else {
            mostPopularDinos.push(dinosaur);
        }
    }
    mostAttractedDino = mostPopularDinos[0];
    return mostAttractedDino;
};

Park.prototype.findBySpecies = function(species){
    sameSpeciesDino = [];
    for (dinosaur of this.dinosaurCollection){
        if (dinosaur.species == species){
            sameSpeciesDino.push(dinosaur);
        }
    }
    return sameSpeciesDino;
};

Park.prototype.totalVisitorsEachDay = function(){
    let visitorsEachDay = 0;
    for (dinosaur of this.dinosaurCollection){
        visitorsEachDay += dinosaur.guestsAttractedPerDay
    }
    return visitorsEachDay;
};

Park.prototype.totalVisitorsEachYear = function(){
    let visitorsEachYear = 0;
    let visitorsEachDay = this.totalVisitorsEachDay();
    visitorsEachYear = visitorsEachDay * 365;
    return visitorsEachYear;
};

Park.prototype.totalEarningsEachYear = function(){
    let yearlyEarnings = 0
    let totalVisitorsEachYear = this.totalVisitorsEachYear();
    yearlyEarnings = totalVisitorsEachYear * this.ticketPrice;
    return yearlyEarnings;
};

  module.exports = Park;
  