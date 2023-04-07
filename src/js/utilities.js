const getRandomInteger = (min, max) => {
    // Renvoie un nombre entier aléatoire compris entre les arguments min et max inclus.
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const showPlayerHasHand = (div) => {
    div.style.display = 'block'
}
const hidePlayerHasHand = (div) => {
    div.style.display = 'none'
}
const showRound = (div, round) => {
    div.textContent = round.toString()
}
const showGlobal = (div, global) => {
    div.textContent = global.toString()
}
const showDe = (value) => {
    // roll dice container
    const rollDiceContainer = document.querySelector("#roll-dice")
    document.querySelector("#svg-de") && document.querySelector("#svg-de").remove()
    let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    let path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    svg.setAttribute("id", "svg-de");
    // Créer une balise SVG
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svg.setAttribute("viewBox", "0 0 448 512");
    switch (value) {
        case 1:
            // Créer un chemin dans la balise SVG
            path.setAttribute("d", "M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM224 288c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z");
            // Ajouter le chemin à la balise SVG
            svg.appendChild(path);
            // Ajouter la balise SVG en tant qu'enfant de la balise DIV
            rollDiceContainer.appendChild(svg);
            svg.replaceWith(svg)
            break;
        case 2:
            path.setAttribute("d", "M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM352 352c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32zM128 192c17.7 0 32-14.3 32-32s-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32z");
            // Ajouter le chemin à la balise SVG
            svg.appendChild(path);
            svg.replaceWith(svg)
            // Ajouter la balise SVG en tant qu'enfant de la balise DIV
            rollDiceContainer.appendChild(svg);
            break;
        case 3:
            // Créer une balise SVG
            path.setAttribute("d", "M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm64 160c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32zm128 64c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32zm64 128c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z");
            // Ajouter le chemin à la balise SVG
            svg.appendChild(path);
            // Ajouter la balise SVG en tant qu'enfant de la balise DIV
            rollDiceContainer.appendChild(svg);
            break;
        case 4:
            path.setAttribute("d", "M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zm160 64c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32zM128 384c17.7 0 32-14.3 32-32s-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32zM352 160c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32zM320 384c17.7 0 32-14.3 32-32s-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32z");
            // Ajouter le chemin à la balise SVG
            svg.appendChild(path);
            // Ajouter la balise SVG en tant qu'enfant de la balise DIV
            rollDiceContainer.appendChild(svg);
            break;
        case 5:
            path.setAttribute("d", "M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm64 160c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32zm32 160c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32zm64-64c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32zM352 160c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32zM320 384c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z");
            // Ajouter le chemin à la balise SVG
            svg.appendChild(path);
            // Ajouter la balise SVG en tant qu'enfant de la balise DIV
            rollDiceContainer.appendChild(svg);
            break;
        case 6:
            path.setAttribute("d", "M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zm160 64c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32zM128 288c17.7 0 32-14.3 32-32s-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32zm32 64c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32zM320 192c17.7 0 32-14.3 32-32s-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32zm32 64c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32zM320 384c17.7 0 32-14.3 32-32s-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32z");
            // Ajouter le chemin à la balise SVG
            svg.appendChild(path);
            // Ajouter la balise SVG en tant qu'enfant de la balise DIV
            rollDiceContainer.appendChild(svg);
            break;
        default:
            path.setAttribute("d", "M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm64 160c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32zm32 160c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32zm64-64c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32zM352 160c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32zM320 384c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z");

    }
    // Ajouter le chemin à la balise SVG
    svg.appendChild(path);
    // Ajouter la balise SVG en tant qu'enfant de la balise DIV
    rollDiceContainer.appendChild(svg);
}