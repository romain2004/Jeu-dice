window.onload = () => {
    // des joueurs, 2 max
    // score temporaire  ROUND qui est initiliase a 0
    // global score qui est initiliase a 0
    // hold qui envoi les points du rounds au global
    // dé 1 a 6
    // Roll dice pour tourner le de
    // possiblite de faire un nouveau jeu en remettant les scores a 0
    // si on a 1 on perd le round et c'est a lautre joueur
    // arrivé a 100 pts score global, le joueur gagne
    console.log('loaded')

    const playerOne = new Player()
    const playerTwo = new Player()
    const game = new Game()
    // BTN ACTION / CTA
    const btnNewGame = document.querySelector('#btn-new-game')
    const btnRollDice = document.querySelector('#btn-roll-dice')
    const btnHold = document.querySelector('#btn-hold')

    // ROUND / GLOBAL POINTS BY PLAYER
    const roundPointsPlayerOne = document.querySelector('#round-score-1')
    const globalPointsPlayerOne = document.querySelector('#global-score-1')
    const roundPointsPlayerTwo = document.querySelector('#round-score-2')
    const globalPointsPlayerTwo = document.querySelector('#global-score-2')

    // Who player has hand
    const playerOneHasHandDiv = document.querySelector('#has-hand-player-one')
    const playerTwoHasHandDiv = document.querySelector('#has-hand-player-two')



    const beginNewGame = () => {
        game.newGame(playerOne, playerTwo)
        game.setHand(playerOne)
        playerOne.setHasHand(true)
        showPlayerHasHand(playerOneHasHandDiv)
        game.setRollDice(0)
        showDe(game.getRollDice())
        console.log("La partie à commencé")

    }
    // Begin new game as soon as the page loads
    beginNewGame()
    // Lancer une nouvelle game
    btnNewGame.addEventListener('click', (e) => {
        e.preventDefault()
        roundPointsPlayerOne = 0
        globalPointsPlayerOne = 0
        roundPointsPlayerTwo = 0
        globalPointsPlayerTwo = 0
        game.newGame(playerOne, playerTwo)
        game.setRollDice(0)
        showDe(game.getRollDice())


    })
    // Lancer le dé
    btnRollDice.addEventListener('click', (e) => {
        e.preventDefault()
        game.setRollDice(getRandomInteger(1, 6))
        showDe(game.getRollDice())
        game.getHand().setRound(game.getRollDice())


        if (game.getRollDice() === 1) {
            game.getHand().resetRound()
            game.setHand(
                playerOne.getHasHand() ? playerTwo : playerOne
            )
            playerOne.setHasHand(!playerOne.getHasHand())
            playerTwo.setHasHand(!playerTwo.getHasHand())
            showPlayerHasHand(
                playerOne.getHasHand() ? playerOneHasHandDiv : playerTwoHasHandDiv
            )
            hidePlayerHasHand(
                !playerOne.getHasHand() ? playerOneHasHandDiv : playerTwoHasHandDiv
            )
        }


        showRound(
            playerOne.getHasHand() ? roundPointsPlayerOne : roundPointsPlayerTwo,
            playerOne.getHasHand() ? playerOne.getRound() : playerTwo.getRound(),
        )

    })
    btnHold.addEventListener('click', (e) => {
        e.preventDefault()
        game.hold(game.getHand())
        showGlobal(
            playerOne.getHasHand() ? globalPointsPlayerOne : globalPointsPlayerTwo,
            playerOne.getHasHand() ? playerOne.getGlobal() : playerTwo.getGlobal(),
        )
        showRound(
            playerOne.getHasHand() ? roundPointsPlayerOne : roundPointsPlayerTwo,
            playerOne.getHasHand() ? playerOne.getRound() : playerTwo.getRound(),
        )
        // scoreAction(game.getHand().getGlobal(), game.getHand())
        game.setHand(
            playerOne.getHasHand() ? playerTwo : playerOne
        )
        playerOne.setHasHand(!playerOne.getHasHand())
        playerTwo.setHasHand(!playerTwo.getHasHand())
        showPlayerHasHand(
            playerOne.getHasHand() ? playerOneHasHandDiv : playerTwoHasHandDiv
        )
        hidePlayerHasHand(
            !playerOne.getHasHand() ? playerOneHasHandDiv : playerTwoHasHandDiv
        )
    })
    showDe(game.getRollDice())


}


