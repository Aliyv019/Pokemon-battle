const pokemons=[
    {
        name:"Bulbasaur",
        type:"grass",
        attack:14,
        defense:11,
        hp:14
    },
    {
        name:"Ivysaur",
        type:"grass",
        attack:8,
        defense:8,
        hp:9
    },
    {
        name:"Venusaur",
        type:"grass",
        attack:8,
        defense:15,
        hp:13
    },
    {
        name:"Charmander",
        type:"fire",
        attack:10,
        defense:15,
        hp:12
    },
    {
        name:"Charmeleon",
        type:"fire",
        attack:13,
        defense:14,
        hp:8
    },
    {
        name:"Charizard",
        type:"fire",
        attack:11,
        defense:15,
        hp:15
    },
    {
        name:"Squirtle",
        type:"water",
        attack:8,
        defense:14,
        hp:15
    },
    {
        name:"Wartortle",
        type:"water",
        attack:10,
        defense:14,
        hp:15
    },
    {
        name:"Blastoise",
        type:"water",
        attack:15,
        defense:14,
        hp:15
    },
    {
        name:"Weedle",
        type:"bug",
        attack:15,
        defense:0,
        hp:11
    },
    {
        name:"Kakuna",
        type:"bug",
        attack:14,
        defense:3,
        hp:11
    },
    {
        name:"Beedrill",
        type:"bug",
        attack:13,
        defense:13,
        hp:14
    },
    {
        name:"Pichu",
        type:"electric",
        attack:10,
        defense:14,
        hp:14
    },
    {
        name:"Pikachu",
        type:"electric",
        attack:14,
        defense:15,
        hp:10
    },
    {
        name:"Raichu",
        type:"electric",
        attack:13,
        defense:15,
        hp:13
    },
    {
        name:"Nidoran",
        type:"poison",
        attack:13,
        defense:11,
        hp:11
    },
    {
        name:"Nidorino",
        type:"poison",
        attack:12,
        defense:1,
        hp:8
    },
    {
        name:"Nidoking",
        type:"poison",
        attack:15,
        defense:7,
        hp:11
    },
    {
        name:"Meowth",
        type:"normal",
        attack:13,
        defense:13,
        hp:13
    },
    {
        name:"Persian",
        type:"normal",
        attack:13,
        defense:10,
        hp:10
    },
    {
        name:"Amaura",
        type:"ice",
        attack:12,
        defense:14,
        hp:13
    },
    {
        name:"Aurorus",
        type:"ice",
        attack:13,
        defense:10,
        hp:14
    },
    {
        name:"Makuhita",
        type:"fighting",
        attack:14,
        defense:10,
        hp:13
    },
    {
        name:"Hariyama",
        type:"fighting",
        attack:15,
        defense:13,
        hp:9
    },
    {
        name:"Diglett",
        type:"ground",
        attack:10,
        defense:10,
        hp:9
    },
    {
        name:"Dugtrio",
        type:"ground",
        attack:14,
        defense:10,
        hp:14
    },
    {
        name:"Gligar",
        type:"ground",
        attack:11,
        defense:15,
        hp:12
    },
    {
        name:"Gliscor",
        type:"ground",
        attack:10,
        defense:15,
        hp:15
    },
    {
        name:"Exeggcute",
        type:"psychic",
        attack:12,
        defense:8,
        hp:10
    },
    {
        name:"Exeggutor",
        type:"psychic",
        attack:5,
        defense:14,
        hp:6
    },
    {
        name:"Shieldon",
        type:"rock",
        attack:13,
        defense:15,
        hp:12
    },
    {
        name:"Bastiodon",
        type:"rock",
        attack:15,
        defense:12,
        hp:15
    },
    {
        name:"Goomy",
        type:"dragon",
        attack:14,
        defense:3,
        hp:12
    },
    {
        name:"Sliggoo",
        type:"dragon",
        attack:12,
        defense:15,
        hp:14
    },
    {
        name:"Duskull",
        type:"ghost",
        attack:10,
        defense:12,
        hp:10
    },
    {
        name:"Dusclops",
        type:"ghost",
        attack:12,
        defense:15,
        hp:15
    },
    {
        name:"Starly",
        type:"flying",
        attack:13,
        defense:12,
        hp:13
    },
    {
        name:"Staraptor",
        type:"flying",
        attack:6,
        defense:15,
        hp:8
    },
    {
        name:"Zigzagoon",
        type:"dark",
        attack:11,
        defense:12,
        hp:14
    },
    {
        name:"Linoone",
        type:"dark",
        attack:12,
        defense:10,
        hp:13
    },
    {
        name:"Sandshrew",
        type:"steel",
        attack:13,
        defense:12,
        hp:11
    },
    {
        name:"Sandslash",
        type:"steel",
        attack:12,
        defense:11,
        hp:13
    },
    {
        name:"Jigglypuff",
        type:"fairy",
        attack:15,
        defense:12,
        hp:14
    },
    {
        name:"Wigglytuff",
        type:"fairy",
        attack:12,
        defense:2,
        hp:8
    },
]
const list=document.querySelector('ul')
pokemons.forEach((pokemon)=>{
    const ListItem=document.createElement('li')
    ListItem.innerHTML=`<img src="./assets/Pokemon_dataset/${pokemon.name.toLocaleLowerCase()}.png">`
    list.appendChild(ListItem)
})

let playerselect = 0
const pokemon_select=document.querySelector('.pokemon_select')
const select_btn=pokemon_select.querySelector('button')
const pokemon_game=document.querySelector('.pokemon_game')

let selected_pokemons=[]
for (let i = 0; i < pokemons.length; i++) {
    const element = list.querySelectorAll('li')[i]
    element.querySelector('img').addEventListener('click', function() {
        if (element.style.border === "2px solid red") {
            element.style.border = "none"
            playerselect--
            selected_pokemons = selected_pokemons.filter((src) => src !== element.querySelector('img').src.slice(45).slice(0,-4))
        } else if (playerselect < 2) {
            element.style.border = "2px solid red"
            playerselect++
            selected_pokemons.push(element.querySelector('img').src.slice(45).slice(0,-4))
        }
        if(playerselect==2){
            select_btn.style.visibility='visible'
        }
        else{
            select_btn.style.visibility='hidden'
        }
    })
}

select_btn.addEventListener('click',()=>{
    pokemon_select.remove()
    pokemon_game.style.display='flex'
    console.log(selected_pokemons);
    const stats1=document.querySelector('#player1')
    let pokemon1=indexfinder(selected_pokemons[0])
    const hp1=stats1.querySelectorAll('p')[0]
    const atk1=stats1.querySelectorAll('p')[1]
    const def1=stats1.querySelectorAll('p')[2]
    hp1.textContent=`HP:${pokemons[pokemon1].hp*20+100}`
    atk1.textContent=`ATK:${pokemons[pokemon1].attack*10+10}`
    def1.textContent=`DEF:${pokemons[pokemon1].defense*10+10}`
    stats1.querySelectorAll('p')[3].textContent=pokemons[pokemon1].name
    stats1.querySelector('img').src=`./assets/Pokemon_dataset/${pokemons[pokemon1].name.toLocaleLowerCase()}.png`

    const stats2=document.querySelector('#player2')
    let pokemon2=indexfinder(selected_pokemons[1])
    const hp2=stats2.querySelectorAll('p')[0]
    const atk2=stats2.querySelectorAll('p')[1]
    const def2=stats2.querySelectorAll('p')[2]
    hp2.textContent=`HP:${pokemons[pokemon2].hp*20+100}`
    atk2.textContent=`ATK:${pokemons[pokemon2].attack*10+10}`
    def2.textContent=`DEF:${pokemons[pokemon2].defense*10+10}`
    stats2.querySelectorAll('p')[3].textContent=pokemons[pokemon2].name
    stats2.querySelector('img').src=`./assets/Pokemon_dataset/${pokemons[pokemon2].name.toLocaleLowerCase()}.png`


    
})
function indexfinder(pokemon_name){
    for (let i = 0; i < pokemons.length; i++) {
        if (pokemon_name==pokemons[i].name.toLocaleLowerCase()){
            return i
        }
    }
}