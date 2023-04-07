class Player {
    // initialise attribute
    constructor(name) {
        this.name = ''
        this.round = 0
        this.global = 0
        this.hasHand = false
    }

    // getter round
    getName() {
        return this.name
    }
    // setter round
    setRound(point) {
        console.log(`Nouvelle entrée de point dans le round`)
        this.round += point
    }
    // getter round
    getRound() {
        console.log(`Nouvelle récuperation de point dans le round`)
        return this.round
    }

    // setter global
    setGlobal() {
        console.log(`Nouvelle entrée de point dans le global`)
        this.global += this.round
    }
    // getter global
    getGlobal() {
        console.log(`Nouvelle récuperation de point dans le global`)
        return this.global
    }
    // reset round when score is 1
    resetRound() {
        console.log('reset round')
        this.round = 0
    }
    // reset round when score is 1
    resetGlobal() {
        console.log('reset global')
        this.global = 0
    }
    // getter hasHand
    getHasHand() {
        return this.hasHand
    }
    // setter hasHand
    setHasHand(value) {
        this.hasHand = value
    }
}