class Game {
    constructor() {
        this.rollDiceScore = 0
        this.hand = null,
            this.gameBegin = false
    }

    getRollDice() {
        return this.rollDiceScore
    }
    setRollDice(value) {
        this.rollDiceScore = value
    }
    getHand() {
        return this.hand
    }
    setHand(player) {
        this.hand = player
    }
    scoreAction(scoreRound, player) {
        if (scoreRound === 1) {
            player.resetRound()
        }
        if (scoreGlobal >= 100) {
            this.win(`Le ${player.getName()} à gagné la partie avec : ${player.getGlobal()}`)
        }
    }
    win(text) {
        console.log(text)
        return text
    }
    hold(player) {
        player.setGlobal()
        player.resetRound()
    }
    newGame(playerOne, playerTwo) {
        playerOne.resetRound()
        playerOne.resetGlobal()
        playerOne.setHasHand(false)

        playerTwo.resetRound()
        playerTwo.resetGlobal()
        playerTwo.setHasHand(false)
    }
    getGameBegin() {
        return this.gameBegin
    }
    setGameBegin(value) {
        this.gameBegin = value
    }
} 