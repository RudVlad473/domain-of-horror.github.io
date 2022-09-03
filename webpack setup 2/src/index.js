import "./styles/index.scss"

const elvenShieldRecipe = {
    leatherStrips: 2,
    ironIngot: 1,
    refinedMoonstrone: 4
}

const elvenGauntletsRecipe = {
    ...elvenShieldRecipe,
    leather: 1,
    refinedMoonstrone: 4
}

console.log(elvenShieldRecipe, elvenGauntletsRecipe)