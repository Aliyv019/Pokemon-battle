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
const fight_btn=document.querySelector('.fight')

select_btn.addEventListener('click',()=>{
    pokemon_select.remove()
    pokemon_game.style.display='flex'
    console.log(selected_pokemons);
    const stats1=document.querySelector('#player1')
    let pokemon1=indexfinder(selected_pokemons[0])
    const hp1=stats1.querySelectorAll('p')[0]
    const atk1=stats1.querySelectorAll('p')[1]
    const def1=stats1.querySelectorAll('p')[2]
    const type1=stats1.querySelectorAll('p')[3]
    type1.textContent=`TYPE:${pokemon1.type.toUpperCase()}`
    hp1.textContent=`HP:${pokemon1.hp*20+100}`
    atk1.textContent=`ATK:${pokemon1.attack*10+10}`
    def1.textContent=`DEF:${pokemon1.defense*2+0}`
    stats1.querySelectorAll('p')[4].textContent=pokemon1.name
    stats1.querySelector('img').src=`./assets/Pokemon_dataset/${pokemon1.name.toLocaleLowerCase()}.png`

    const stats2=document.querySelector('#player2')
    let pokemon2=indexfinder(selected_pokemons[1])
    const hp2=stats2.querySelectorAll('p')[0]
    const atk2=stats2.querySelectorAll('p')[1]
    const def2=stats2.querySelectorAll('p')[2]
    const type2=stats2.querySelectorAll('p')[3]
    type2.textContent=`TYPE:${pokemon2.type.toUpperCase()}`
    hp2.textContent=`HP:${pokemon2.hp*20+100}`
    atk2.textContent=`ATK:${pokemon2.attack*10+10}`
    def2.textContent=`DEF:${pokemon2.defense*2+0}`
    stats2.querySelectorAll('p')[4].textContent=pokemon2.name
    stats2.querySelector('img').src=`./assets/Pokemon_dataset/${pokemon2.name.toLocaleLowerCase()}.png`

    const opp_stats1=document.querySelector('#opponent1')
    let opp_pokemon1=opp_pokemon_finder()
    const opp_hp1=opp_stats1.querySelectorAll('p')[0]
    const opp_atk1=opp_stats1.querySelectorAll('p')[1]
    const opp_def1=opp_stats1.querySelectorAll('p')[2]
    const opp_type1=opp_stats1.querySelectorAll('p')[3]
    opp_type1.textContent=`TYPE:${opp_pokemon1.type.toUpperCase()}`
    opp_hp1.textContent=`HP:${opp_pokemon1.hp*20+100}`
    opp_atk1.textContent=`ATK:${opp_pokemon1.attack*10+10}`
    opp_def1.textContent=`DEF:${opp_pokemon1.defense*2+0}`
    opp_stats1.querySelectorAll('p')[4].textContent=opp_pokemon1.name
    opp_stats1.querySelector('img').src=`./assets/Pokemon_dataset/${opp_pokemon1.name.toLocaleLowerCase()}.png`

    const opp_stats2=document.querySelector('#opponent2')
    let opp_pokemon2=opp_pokemon_finder()
    const opp_hp2=opp_stats2.querySelectorAll('p')[0]
    const opp_atk2=opp_stats2.querySelectorAll('p')[1]
    const opp_def2=opp_stats2.querySelectorAll('p')[2]
    const opp_type2=opp_stats2.querySelectorAll('p')[3]
    opp_type2.textContent=`TYPE:${opp_pokemon2.type.toUpperCase()}`
    opp_hp2.textContent=`HP:${opp_pokemon2.hp*20+100}`
    opp_atk2.textContent=`ATK:${opp_pokemon2.attack*10+10}`
    opp_def2.textContent=`DEF:${opp_pokemon2.defense*2+0}`
    opp_stats2.querySelectorAll('p')[4].textContent=opp_pokemon2.name
    opp_stats2.querySelector('img').src=`./assets/Pokemon_dataset/${opp_pokemon2.name.toLocaleLowerCase()}.png`

    fight_btn.addEventListener('click',()=>{
        if(hp1.textContent.slice(3)>0 && opp_hp1.textContent.slice(3)>0){
            if(pokemon1.type=="normal"){
                if(opp_pokemon1.type=="rock"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4)/2)+parseInt(opp_def1.textContent.slice(4))}`
                }
                else if(opp_pokemon1.type=="ghost"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)}`
                }
                else if(opp_pokemon1.type=="steel"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4)/2)+parseInt(opp_def1.textContent.slice(4))}`
                }
                else{
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4))+parseInt(opp_def1.textContent.slice(4))}`
                }
            }
            else if(pokemon1.type=="fire"){
                if(opp_pokemon1.type=="fire"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4)/2)+parseInt(opp_def1.textContent.slice(4))}`
                }
                else if(opp_pokemon1.type=="water"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4)/2)+parseInt(opp_def1.textContent.slice(4))}`
                }
                else if(opp_pokemon1.type=="rock"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4)/2)+parseInt(opp_def1.textContent.slice(4))}`
                }
                else if(opp_pokemon1.type=="dragon"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4)/2)+parseInt(opp_def1.textContent.slice(4))}`
                }
                else if(opp_pokemon1.type=="grass"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4)*2)+parseInt(opp_def1.textContent.slice(4))}`
                }
                else if(opp_pokemon1.type=="ice"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4)*2)+parseInt(opp_def1.textContent.slice(4))}`
                }
                else if(opp_pokemon1.type=="bug"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4)*2)+parseInt(opp_def1.textContent.slice(4))}`
                }
                else if(opp_pokemon1.type=="steel"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4)*2)+parseInt(opp_def1.textContent.slice(4))}`
                }
                else{
                        opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4))+parseInt(opp_def1.textContent.slice(4))}`
                }
            }
            else if(pokemon1.type=="water"){
                if(opp_pokemon1.type=="water"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4)/2)+parseInt(opp_def1.textContent.slice(4))}`
                }
                else if(opp_pokemon1.type=="grass"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4)/2)+parseInt(opp_def1.textContent.slice(4))}`
                }
                else if(opp_pokemon1.type=="dragon"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4)/2)+parseInt(opp_def1.textContent.slice(4))}`
                }
                else if(opp_pokemon1.type=="fire"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4)*2)+parseInt(opp_def1.textContent.slice(4))}`
                }
                else if(opp_pokemon1.type=="ground"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4)*2)+parseInt(opp_def1.textContent.slice(4))}`
                }
                else if(opp_pokemon1.type=="rock"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4)*2)+parseInt(opp_def1.textContent.slice(4))}`
                }
                else{
                        opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4))+parseInt(opp_def1.textContent.slice(4))}`
                }
            }
            else if(pokemon1.type=="grass"){
                if(opp_pokemon1.type=="fire"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4)/2)+parseInt(opp_def1.textContent.slice(4))}`
                }
                else if(opp_pokemon1.type=="grass"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4)/2)+parseInt(opp_def1.textContent.slice(4))}`
                }
                else if(opp_pokemon1.type=="poison"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4)/2)+parseInt(opp_def1.textContent.slice(4))}`
                }
                else if(opp_pokemon1.type=="flying"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4)/2)+parseInt(opp_def1.textContent.slice(4))}`
                }
                else if(opp_pokemon1.type=="bug"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4)/2)+parseInt(opp_def1.textContent.slice(4))}`
                }
                else if(opp_pokemon1.type=="dragon"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4)/2)+parseInt(opp_def1.textContent.slice(4))}`
                }
                else if(opp_pokemon1.type=="steel"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4)/2)+parseInt(opp_def1.textContent.slice(4))}`
                }
                else if(opp_pokemon1.type=="water"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4)*2)+parseInt(opp_def1.textContent.slice(4))}`
                }
                else if(opp_pokemon1.type=="ground"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4)*2)+parseInt(opp_def1.textContent.slice(4))}`
                }
                else if(opp_pokemon1.type=="rock"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4)*2)+parseInt(opp_def1.textContent.slice(4))}`
                }
                else{
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4))+parseInt(opp_def1.textContent.slice(4))}`
                }
            }
            else if(pokemon1.type=="electric"){
                if(opp_pokemon1.type=="grass"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4)/2)+parseInt(opp_def1.textContent.slice(4))}`
                }
                else if(opp_pokemon1.type=="electric"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4)/2)+parseInt(opp_def1.textContent.slice(4))}`
                }
                else if(opp_pokemon1.type=="dragon"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4)/2)+parseInt(opp_def1.textContent.slice(4))}`
                }
                else if(opp_pokemon1.type=="water"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4)*2)+parseInt(opp_def1.textContent.slice(4))}`
                }
                else if(opp_pokemon1.type=="flying"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4)*2)+parseInt(opp_def1.textContent.slice(4))}`
                }
                else if(opp_pokemon1.type=="ground"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)}`
                }
                else{
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4))+parseInt(opp_def1.textContent.slice(4))}`
                }
            }
            else if(pokemon1.type=="ice"){
                if(opp_pokemon1.type=="fire"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4)/2)+parseInt(opp_def1.textContent.slice(4))}`
                }
                else if(opp_pokemon1.type=="water"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4)/2)+parseInt(opp_def1.textContent.slice(4))}`
                }
                else if(opp_pokemon1.type=="ice"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4)/2)+parseInt(opp_def1.textContent.slice(4))}`
                }
                else if(opp_pokemon1.type=="steel"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4)/2)+parseInt(opp_def1.textContent.slice(4))}`
                }
                else if(opp_pokemon1.type=="grass"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4)*2)+parseInt(opp_def1.textContent.slice(4))}`
                }
                else if(opp_pokemon1.type=="ground"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4)*2)+parseInt(opp_def1.textContent.slice(4))}`
                }
                else if(opp_pokemon1.type=="flying"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4)*2)+parseInt(opp_def1.textContent.slice(4))}`
                }
                else if(opp_pokemon1.type=="dragon"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4)*2)+parseInt(opp_def1.textContent.slice(4))}`
                } 
                else{
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4))+parseInt(opp_def1.textContent.slice(4))}`
                }
            }
            else if(pokemon1.type=="fighting"){
                if(opp_pokemon1.type=="poison"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4)/2)+parseInt(opp_def1.textContent.slice(4))}`
                }
                else if(opp_pokemon1.type=="flying"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4)/2)+parseInt(opp_def1.textContent.slice(4))}`
                }
                else if(opp_pokemon1.type=="psychic"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4)/2)+parseInt(opp_def1.textContent.slice(4))}`
                }
                else if(opp_pokemon1.type=="bug"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4)/2)+parseInt(opp_def1.textContent.slice(4))}`
                }
                else if(opp_pokemon1.type=="fairy"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4)/2)+parseInt(opp_def1.textContent.slice(4))}`
                }
                else if(opp_pokemon1.type=="normal"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4)*2)+parseInt(opp_def1.textContent.slice(4))}`
                }
                else if(opp_pokemon1.type=="ice"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4)*2)+parseInt(opp_def1.textContent.slice(4))}`
                }
                else if(opp_pokemon1.type=="rock"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4)*2)+parseInt(opp_def1.textContent.slice(4))}`
                }
                else if(opp_pokemon1.type=="dark"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4)*2)+parseInt(opp_def1.textContent.slice(4))}`
                } 
                else if(opp_pokemon1.type=="steel"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4)*2)+parseInt(opp_def1.textContent.slice(4))}`
                }
                else if(opp_pokemon1.type=="ghost"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)}`
                }
                else{
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4))+parseInt(opp_def1.textContent.slice(4))}`
                }
            }
            else if(pokemon1.type=="poison"){
                if(opp_pokemon1.type=="poison"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4)/2)+parseInt(opp_def1.textContent.slice(4))}`
                }
                else if(opp_pokemon1.type=="ground"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4)/2)+parseInt(opp_def1.textContent.slice(4))}`
                }
                else if(opp_pokemon1.type=="rock"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4)/2)+parseInt(opp_def1.textContent.slice(4))}`
                }
                else if(opp_pokemon1.type=="ghost"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4)/2)+parseInt(opp_def1.textContent.slice(4))}`
                }
                else if(opp_pokemon1.type=="grass"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4)*2)+parseInt(opp_def1.textContent.slice(4))}`
                }
                else if(opp_pokemon1.type=="fairy"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4)*2)+parseInt(opp_def1.textContent.slice(4))}`
                }
                else if(opp_pokemon1.type=="steel"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)}`
                }
                else{
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4))+parseInt(opp_def1.textContent.slice(4))}`
                }
            }
            else if(pokemon1.type=="ground"){
                if(opp_pokemon1.type=="grass"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4)/2)+parseInt(opp_def1.textContent.slice(4))}`
                }
                else if(opp_pokemon1.type=="bug"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4)/2)+parseInt(opp_def1.textContent.slice(4))}`
                }
                else if(opp_pokemon1.type=="fire"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4)*2)+parseInt(opp_def1.textContent.slice(4))}`
                }
                else if(opp_pokemon1.type=="electric"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4)*2)+parseInt(opp_def1.textContent.slice(4))}`
                }
                else if(opp_pokemon1.type=="poison"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4)*2)+parseInt(opp_def1.textContent.slice(4))}`
                }
                else if(opp_pokemon1.type=="rock"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4)*2)+parseInt(opp_def1.textContent.slice(4))}`
                }
                else if(opp_pokemon1.type=="steel"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4)*2)+parseInt(opp_def1.textContent.slice(4))}`
                }
                else if(opp_pokemon1.type=="flying"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)}`
                }
                else{
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4))+parseInt(opp_def1.textContent.slice(4))}`
                }
            }
            else if(pokemon1.type=="flying"){
                if(opp_pokemon1.type=="electric"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4)/2)+parseInt(opp_def1.textContent.slice(4))}`
                }
                else if(opp_pokemon1.type=="rock"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4)/2)+parseInt(opp_def1.textContent.slice(4))}`
                }
                else if(opp_pokemon1.type=="steel"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4)/2)+parseInt(opp_def1.textContent.slice(4))}`
                }
                else if(opp_pokemon1.type=="grass"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4)*2)+parseInt(opp_def1.textContent.slice(4))}`
                }
                else if(opp_pokemon1.type=="fighting"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4)*2)+parseInt(opp_def1.textContent.slice(4))}`
                }
                else if(opp_pokemon1.type=="bug"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4)*2)+parseInt(opp_def1.textContent.slice(4))}`
                }
                else{
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4))+parseInt(opp_def1.textContent.slice(4))}`
                }
            }
            else if(pokemon1.type=="psychic"){
                if(opp_pokemon1.type=="fighting"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4)/2)+parseInt(opp_def1.textContent.slice(4))}`
                }
                else if(opp_pokemon1.type=="poison"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4)/2)+parseInt(opp_def1.textContent.slice(4))}`
                }
                else if(opp_pokemon1.type=="psychic"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4)*2)+parseInt(opp_def1.textContent.slice(4))}`
                }
                else if(opp_pokemon1.type=="steel"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4)*2)+parseInt(opp_def1.textContent.slice(4))}`
                }
                else if(opp_pokemon1.type=="dark"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)}`
                }
                else{
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4))+parseInt(opp_def1.textContent.slice(4))}`
                }
            }
            else if(pokemon1.type=="bug"){
                if(opp_pokemon1.type=="fire"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4)/2)+parseInt(opp_def1.textContent.slice(4))}`
                }
                else if(opp_pokemon1.type=="fighting"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4)/2)+parseInt(opp_def1.textContent.slice(4))}`
                }
                else if(opp_pokemon1.type=="poison"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4)/2)+parseInt(opp_def1.textContent.slice(4))}`
                }
                else if(opp_pokemon1.type=="flying"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4)/2)+parseInt(opp_def1.textContent.slice(4))}`
                }
                else if(opp_pokemon1.type=="ghost"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4)/2)+parseInt(opp_def1.textContent.slice(4))}`
                }
                else if(opp_pokemon1.type=="steel"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4)/2)+parseInt(opp_def1.textContent.slice(4))}`
                }
                else if(opp_pokemon1.type=="fairy"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4)/2)+parseInt(opp_def1.textContent.slice(4))}`
                }
                else if(opp_pokemon1.type=="grass"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4)*2)+parseInt(opp_def1.textContent.slice(4))}`
                }
                else if(opp_pokemon1.type=="dark"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4)*2)+parseInt(opp_def1.textContent.slice(4))}`
                }
                else if(opp_pokemon1.type=="psychic"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4)*2)+parseInt(opp_def1.textContent.slice(4))}`
                }
                else{
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4))+parseInt(opp_def1.textContent.slice(4))}`
                }
            }
            else if(pokemon1.type=="rock"){
                if(opp_pokemon1.type=="fighting"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4)/2)+parseInt(opp_def1.textContent.slice(4))}`
                }
                else if(opp_pokemon1.type=="ground"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4)/2)+parseInt(opp_def1.textContent.slice(4))}`
                }
                else if(opp_pokemon1.type=="steel"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4)/2)+parseInt(opp_def1.textContent.slice(4))}`
                }
                else if(opp_pokemon1.type=="bug"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4)*2)+parseInt(opp_def1.textContent.slice(4))}`
                }
                else if(opp_pokemon1.type=="fire"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4)*2)+parseInt(opp_def1.textContent.slice(4))}`
                }
                else if(opp_pokemon1.type=="ice"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4)*2)+parseInt(opp_def1.textContent.slice(4))}`
                }
                else if(opp_pokemon1.type=="flying"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4)*2)+parseInt(opp_def1.textContent.slice(4))}`
                }
                else{
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4))+parseInt(opp_def1.textContent.slice(4))}`
                }
            }
            else if(pokemon1.type=="ghost"){
                if(opp_pokemon1.type=="dark"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4)/2)+parseInt(opp_def1.textContent.slice(4))}`
                }
                else if(opp_pokemon1.type=="psychic"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4)*2)+parseInt(opp_def1.textContent.slice(4))}`
                }
                else if(opp_pokemon1.type=="ghost"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4)*2)+parseInt(opp_def1.textContent.slice(4))}`
                }
                else if(opp_pokemon1.type=="normal"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)}`
                }
                else{
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4))+parseInt(opp_def1.textContent.slice(4))}`
                }
            }
            else if(pokemon1.type=="dragon"){
                if(opp_pokemon1.type=="steel"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4)/2)+parseInt(opp_def1.textContent.slice(4))}`
                }
                else if(opp_pokemon1.type=="dragon"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4)*2)+parseInt(opp_def1.textContent.slice(4))}`
                }
                else if(opp_pokemon1.type=="fairy"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)}`
                }
                else{
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4))+parseInt(opp_def1.textContent.slice(4))}`
                }
            }
            else if(pokemon1.type=="dark"){
                if(opp_pokemon1.type=="fighting"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4)/2)+parseInt(opp_def1.textContent.slice(4))}`
                }
                else if(opp_pokemon1.type=="dark"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4)/2)+parseInt(opp_def1.textContent.slice(4))}`
                }
                else if(opp_pokemon1.type=="fairy"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4)/2)+parseInt(opp_def1.textContent.slice(4))}`
                }
                else if(opp_pokemon1.type=="ghost"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4)*2)+parseInt(opp_def1.textContent.slice(4))}`
                }
                else if(opp_pokemon1.type=="psychic"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4)*2)+parseInt(opp_def1.textContent.slice(4))}`
                }
                else{
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4))+parseInt(opp_def1.textContent.slice(4))}`
                }
            }
            else if(pokemon1.type=="steel"){
                if(opp_pokemon1.type=="fire"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4)/2)+parseInt(opp_def1.textContent.slice(4))}`
                }
                else if(opp_pokemon1.type=="water"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4)/2)+parseInt(opp_def1.textContent.slice(4))}`
                }
                else if(opp_pokemon1.type=="electric"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4)/2)+parseInt(opp_def1.textContent.slice(4))}`
                }
                else if(opp_pokemon1.type=="steel"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4)/2)+parseInt(opp_def1.textContent.slice(4))}`
                }
                else if(opp_pokemon1.type=="ice"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4)*2)+parseInt(opp_def1.textContent.slice(4))}`
                }
                else if(opp_pokemon1.type=="rock"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4)*2)+parseInt(opp_def1.textContent.slice(4))}`
                }
                else if(opp_pokemon1.type=="fairy"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4)*2)+parseInt(opp_def1.textContent.slice(4))}`
                }
                else{
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4))+parseInt(opp_def1.textContent.slice(4))}`
                }
            }
            else if(pokemon1.type=="fairy"){
                if(opp_pokemon1.type=="fire"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4)/2)+parseInt(opp_def1.textContent.slice(4))}`
                }
                else if(opp_pokemon1.type=="poison"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4)/2)+parseInt(opp_def1.textContent.slice(4))}`
                }
                else if(opp_pokemon1.type=="steel"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4)/2)+parseInt(opp_def1.textContent.slice(4))}`
                }
                else if(opp_pokemon1.type=="fighting"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4)*2)+parseInt(opp_def1.textContent.slice(4))}`
                }
                else if(opp_pokemon1.type=="dragon"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4)*2)+parseInt(opp_def1.textContent.slice(4))}`
                }
                else if(opp_pokemon1.type=="dark"){
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4)*2)+parseInt(opp_def1.textContent.slice(4))}`
                }
                else{
                    opp_hp1.textContent=`HP:${opp_hp1.textContent.slice(3)-(atk1.textContent.slice(4))+parseInt(opp_def1.textContent.slice(4))}`
                }
            }

            if(opp_pokemon1.type=="normal"){
                if(pokemon1.type=="rock"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4)/2)+parseInt(def1.textContent.slice(4))}`
                }
                else if(pokemon1.type=="ghost"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)}`
                }
                else if(pokemon1.type=="steel"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4)/2)+parseInt(def1.textContent.slice(4))}`
                }
                else{
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4))+parseInt(def1.textContent.slice(4))}`
                }
            }
            else if(opp_pokemon1.type=="fire"){
                if(pokemon1.type=="fire"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4)/2)+parseInt(def1.textContent.slice(4))}`
                }
                else if(pokemon1.type=="water"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4)/2)+parseInt(def1.textContent.slice(4))}`
                }
                else if(pokemon1.type=="rock"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4)/2)+parseInt(def1.textContent.slice(4))}`
                }
                else if(pokemon1.type=="dragon"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4)/2)+parseInt(def1.textContent.slice(4))}`
                }
                else if(pokemon1.type=="grass"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4)*2)+parseInt(def1.textContent.slice(4))}`
                }
                else if(pokemon1.type=="ice"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4)*2)+parseInt(def1.textContent.slice(4))}`
                }
                else if(pokemon1.type=="bug"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4)*2)+parseInt(def1.textContent.slice(4))}`
                }
                else if(pokemon1.type=="steel"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4)*2)+parseInt(def1.textContent.slice(4))}`
                }
                else{
                        hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4))+parseInt(def1.textContent.slice(4))}`
                }
            }
            else if(opp_pokemon1.type=="water"){
                if(pokemon1.type=="water"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4)/2)+parseInt(def1.textContent.slice(4))}`
                }
                else if(pokemon1.type=="grass"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4)/2)+parseInt(def1.textContent.slice(4))}`
                }
                else if(pokemon1.type=="dragon"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4)/2)+parseInt(def1.textContent.slice(4))}`
                }
                else if(pokemon1.type=="fire"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4)*2)+parseInt(def1.textContent.slice(4))}`
                }
                else if(pokemon1.type=="ground"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4)*2)+parseInt(def1.textContent.slice(4))}`
                }
                else if(pokemon1.type=="rock"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4)*2)+parseInt(def1.textContent.slice(4))}`
                }
                else{
                        hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4))+parseInt(def1.textContent.slice(4))}`
                }
            }
            else if(opp_pokemon1.type=="grass"){
                if(pokemon1.type=="fire"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4)/2)+parseInt(def1.textContent.slice(4))}`
                }
                else if(pokemon1.type=="grass"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4)/2)+parseInt(def1.textContent.slice(4))}`
                }
                else if(pokemon1.type=="poison"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4)/2)+parseInt(def1.textContent.slice(4))}`
                }
                else if(pokemon1.type=="flying"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4)/2)+parseInt(def1.textContent.slice(4))}`
                }
                else if(pokemon1.type=="bug"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4)/2)+parseInt(def1.textContent.slice(4))}`
                }
                else if(pokemon1.type=="dragon"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4)/2)+parseInt(def1.textContent.slice(4))}`
                }
                else if(pokemon1.type=="steel"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4)/2)+parseInt(def1.textContent.slice(4))}`
                }
                else if(pokemon1.type=="water"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4)*2)+parseInt(def1.textContent.slice(4))}`
                }
                else if(pokemon1.type=="ground"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4)*2)+parseInt(def1.textContent.slice(4))}`
                }
                else if(pokemon1.type=="rock"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4)*2)+parseInt(def1.textContent.slice(4))}`
                }
                else{
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4))+parseInt(def1.textContent.slice(4))}`
                }
            }
            else if(opp_pokemon1.type=="electric"){
                if(pokemon1.type=="grass"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4)/2)+parseInt(def1.textContent.slice(4))}`
                }
                else if(pokemon1.type=="electric"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4)/2)+parseInt(def1.textContent.slice(4))}`
                }
                else if(pokemon1.type=="dragon"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4)/2)+parseInt(def1.textContent.slice(4))}`
                }
                else if(pokemon1.type=="water"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4)*2)+parseInt(def1.textContent.slice(4))}`
                }
                else if(pokemon1.type=="flying"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4)*2)+parseInt(def1.textContent.slice(4))}`
                }
                else if(pokemon1.type=="ground"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)}`
                }
                else{
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4))+parseInt(def1.textContent.slice(4))}`
                }
            }
            else if(opp_pokemon1.type=="ice"){
                if(pokemon1.type=="fire"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4)/2)+parseInt(def1.textContent.slice(4))}`
                }
                else if(pokemon1.type=="water"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4)/2)+parseInt(def1.textContent.slice(4))}`
                }
                else if(pokemon1.type=="ice"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4)/2)+parseInt(def1.textContent.slice(4))}`
                }
                else if(pokemon1.type=="steel"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4)/2)+parseInt(def1.textContent.slice(4))}`
                }
                else if(pokemon1.type=="grass"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4)*2)+parseInt(def1.textContent.slice(4))}`
                }
                else if(pokemon1.type=="ground"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4)*2)+parseInt(def1.textContent.slice(4))}`
                }
                else if(pokemon1.type=="flying"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4)*2)+parseInt(def1.textContent.slice(4))}`
                }
                else if(pokemon1.type=="dragon"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4)*2)+parseInt(def1.textContent.slice(4))}`
                } 
                else{
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4))+parseInt(def1.textContent.slice(4))}`
                }
            }
            else if(opp_pokemon1.type=="fighting"){
                if(pokemon1.type=="poison"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4)/2)+parseInt(def1.textContent.slice(4))}`
                }
                else if(pokemon1.type=="flying"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4)/2)+parseInt(def1.textContent.slice(4))}`
                }
                else if(pokemon1.type=="psychic"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4)/2)+parseInt(def1.textContent.slice(4))}`
                }
                else if(pokemon1.type=="bug"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4)/2)+parseInt(def1.textContent.slice(4))}`
                }
                else if(pokemon1.type=="fairy"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4)/2)+parseInt(def1.textContent.slice(4))}`
                }
                else if(pokemon1.type=="normal"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4)*2)+parseInt(def1.textContent.slice(4))}`
                }
                else if(pokemon1.type=="ice"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4)*2)+parseInt(def1.textContent.slice(4))}`
                }
                else if(pokemon1.type=="rock"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4)*2)+parseInt(def1.textContent.slice(4))}`
                }
                else if(pokemon1.type=="dark"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4)*2)+parseInt(def1.textContent.slice(4))}`
                } 
                else if(pokemon1.type=="steel"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4)*2)+parseInt(def1.textContent.slice(4))}`
                }
                else if(pokemon1.type=="ghost"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)}`
                }
                else{
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4))+parseInt(def1.textContent.slice(4))}`
                }
            }
            else if(opp_pokemon1.type=="poison"){
                if(pokemon1.type=="poison"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4)/2)+parseInt(def1.textContent.slice(4))}`
                }
                else if(pokemon1.type=="ground"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4)/2)+parseInt(def1.textContent.slice(4))}`
                }
                else if(pokemon1.type=="rock"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4)/2)+parseInt(def1.textContent.slice(4))}`
                }
                else if(pokemon1.type=="ghost"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4)/2)+parseInt(def1.textContent.slice(4))}`
                }
                else if(pokemon1.type=="grass"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4)*2)+parseInt(def1.textContent.slice(4))}`
                }
                else if(pokemon1.type=="fairy"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4)*2)+parseInt(def1.textContent.slice(4))}`
                }
                else if(pokemon1.type=="steel"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)}`
                }
                else{
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4))+parseInt(def1.textContent.slice(4))}`
                }
            }
            else if(opp_pokemon1.type=="ground"){
                if(pokemon1.type=="grass"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4)/2)+parseInt(def1.textContent.slice(4))}`
                }
                else if(pokemon1.type=="bug"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4)/2)+parseInt(def1.textContent.slice(4))}`
                }
                else if(pokemon1.type=="fire"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4)*2)+parseInt(def1.textContent.slice(4))}`
                }
                else if(pokemon1.type=="electric"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4)*2)+parseInt(def1.textContent.slice(4))}`
                }
                else if(pokemon1.type=="poison"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4)*2)+parseInt(def1.textContent.slice(4))}`
                }
                else if(pokemon1.type=="rock"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4)*2)+parseInt(def1.textContent.slice(4))}`
                }
                else if(pokemon1.type=="steel"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4)*2)+parseInt(def1.textContent.slice(4))}`
                }
                else if(pokemon1.type=="flying"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)}`
                }
                else{
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4))+parseInt(def1.textContent.slice(4))}`
                }
            }
            else if(opp_pokemon1.type=="flying"){
                if(pokemon1.type=="electric"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4)/2)+parseInt(def1.textContent.slice(4))}`
                }
                else if(pokemon1.type=="rock"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4)/2)+parseInt(def1.textContent.slice(4))}`
                }
                else if(pokemon1.type=="steel"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4)/2)+parseInt(def1.textContent.slice(4))}`
                }
                else if(pokemon1.type=="grass"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4)*2)+parseInt(def1.textContent.slice(4))}`
                }
                else if(pokemon1.type=="fighting"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4)*2)+parseInt(def1.textContent.slice(4))}`
                }
                else if(pokemon1.type=="bug"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4)*2)+parseInt(def1.textContent.slice(4))}`
                }
                else{
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4))+parseInt(def1.textContent.slice(4))}`
                }
            }
            else if(opp_pokemon1.type=="psychic"){
                if(pokemon1.type=="fighting"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4)/2)+parseInt(def1.textContent.slice(4))}`
                }
                else if(pokemon1.type=="poison"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4)/2)+parseInt(def1.textContent.slice(4))}`
                }
                else if(pokemon1.type=="psychic"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4)*2)+parseInt(def1.textContent.slice(4))}`
                }
                else if(pokemon1.type=="steel"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4)*2)+parseInt(def1.textContent.slice(4))}`
                }
                else if(pokemon1.type=="dark"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)}`
                }
                else{
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4))+parseInt(def1.textContent.slice(4))}`
                }
            }
            else if(opp_pokemon1.type=="bug"){
                if(pokemon1.type=="fire"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4)/2)+parseInt(def1.textContent.slice(4))}`
                }
                else if(pokemon1.type=="fighting"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4)/2)+parseInt(def1.textContent.slice(4))}`
                }
                else if(pokemon1.type=="poison"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4)/2)+parseInt(def1.textContent.slice(4))}`
                }
                else if(pokemon1.type=="flying"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4)/2)+parseInt(def1.textContent.slice(4))}`
                }
                else if(pokemon1.type=="ghost"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4)/2)+parseInt(def1.textContent.slice(4))}`
                }
                else if(pokemon1.type=="steel"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4)/2)+parseInt(def1.textContent.slice(4))}`
                }
                else if(pokemon1.type=="fairy"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4)/2)+parseInt(def1.textContent.slice(4))}`
                }
                else if(pokemon1.type=="grass"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4)*2)+parseInt(def1.textContent.slice(4))}`
                }
                else if(pokemon1.type=="dark"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4)*2)+parseInt(def1.textContent.slice(4))}`
                }
                else if(pokemon1.type=="psychic"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4)*2)+parseInt(def1.textContent.slice(4))}`
                }
                else{
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4))+parseInt(def1.textContent.slice(4))}`
                }
            }
            else if(opp_pokemon1.type=="rock"){
                if(pokemon1.type=="fighting"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4)/2)+parseInt(def1.textContent.slice(4))}`
                }
                else if(pokemon1.type=="ground"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4)/2)+parseInt(def1.textContent.slice(4))}`
                }
                else if(pokemon1.type=="steel"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4)/2)+parseInt(def1.textContent.slice(4))}`
                }
                else if(pokemon1.type=="bug"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4)*2)+parseInt(def1.textContent.slice(4))}`
                }
                else if(pokemon1.type=="fire"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4)*2)+parseInt(def1.textContent.slice(4))}`
                }
                else if(pokemon1.type=="ice"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4)*2)+parseInt(def1.textContent.slice(4))}`
                }
                else if(pokemon1.type=="flying"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4)*2)+parseInt(def1.textContent.slice(4))}`
                }
                else{
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4))+parseInt(def1.textContent.slice(4))}`
                }
            }
            else if(opp_pokemon1.type=="ghost"){
                if(pokemon1.type=="dark"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4)/2)+parseInt(def1.textContent.slice(4))}`
                }
                else if(pokemon1.type=="psychic"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4)*2)+parseInt(def1.textContent.slice(4))}`
                }
                else if(pokemon1.type=="ghost"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4)*2)+parseInt(def1.textContent.slice(4))}`
                }
                else if(pokemon1.type=="normal"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)}`
                }
                else{
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4))+parseInt(def1.textContent.slice(4))}`
                }
            }
            else if(opp_pokemon1.type=="dragon"){
                if(pokemon1.type=="steel"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4)/2)+parseInt(def1.textContent.slice(4))}`
                }
                else if(pokemon1.type=="dragon"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4)*2)+parseInt(def1.textContent.slice(4))}`
                }
                else if(pokemon1.type=="fairy"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)}`
                }
                else{
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4))+parseInt(def1.textContent.slice(4))}`
                }
            }
            else if(opp_pokemon1.type=="dark"){
                if(pokemon1.type=="fighting"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4)/2)+parseInt(def1.textContent.slice(4))}`
                }
                else if(pokemon1.type=="dark"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4)/2)+parseInt(def1.textContent.slice(4))}`
                }
                else if(pokemon1.type=="fairy"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4)/2)+parseInt(def1.textContent.slice(4))}`
                }
                else if(pokemon1.type=="ghost"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4)*2)+parseInt(def1.textContent.slice(4))}`
                }
                else if(pokemon1.type=="psychic"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4)*2)+parseInt(def1.textContent.slice(4))}`
                }
                else{
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4))+parseInt(def1.textContent.slice(4))}`
                }
            }
            else if(opp_pokemon1.type=="steel"){
                if(pokemon1.type=="fire"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4)/2)+parseInt(def1.textContent.slice(4))}`
                }
                else if(pokemon1.type=="water"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4)/2)+parseInt(def1.textContent.slice(4))}`
                }
                else if(pokemon1.type=="electric"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4)/2)+parseInt(def1.textContent.slice(4))}`
                }
                else if(pokemon1.type=="steel"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4)/2)+parseInt(def1.textContent.slice(4))}`
                }
                else if(pokemon1.type=="ice"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4)*2)+parseInt(def1.textContent.slice(4))}`
                }
                else if(pokemon1.type=="rock"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4)*2)+parseInt(def1.textContent.slice(4))}`
                }
                else if(pokemon1.type=="fairy"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4)*2)+parseInt(def1.textContent.slice(4))}`
                }
                else{
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4))+parseInt(def1.textContent.slice(4))}`
                }
            }
            else if(opp_pokemon1.type=="fairy"){
                if(pokemon1.type=="fire"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4)/2)+parseInt(def1.textContent.slice(4))}`
                }
                else if(pokemon1.type=="poison"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4)/2)+parseInt(def1.textContent.slice(4))}`
                }
                else if(pokemon1.type=="steel"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4)/2)+parseInt(def1.textContent.slice(4))}`
                }
                else if(pokemon1.type=="fighting"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4)*2)+parseInt(def1.textContent.slice(4))}`
                }
                else if(pokemon1.type=="dragon"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4)*2)+parseInt(def1.textContent.slice(4))}`
                }
                else if(pokemon1.type=="dark"){
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4)*2)+parseInt(def1.textContent.slice(4))}`
                }
                else{
                    hp1.textContent=`HP:${hp1.textContent.slice(3)-(opp_atk1.textContent.slice(4))+parseInt(def1.textContent.slice(4))}`
                }
            }





            if(opp_hp1.textContent.slice(3)<=0){
                opp_stats1.style.background="red"
                IsEnd(opp_stats1,opp_stats2,stats1,stats2)
            }
            if(hp1.textContent.slice(3)<=0){
                stats1.style.background='red'
                IsEnd(opp_stats1,opp_stats2,stats1,stats2)
            }
        }
        
        if(hp2.textContent.slice(3)>0 && opp_hp2.textContent.slice(3)>0){
            if(pokemon2.type=="normal"){
                if(opp_pokemon2.type=="rock"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4)/2)+parseInt(opp_def2.textContent.slice(4))}`
                }
                else if(opp_pokemon2.type=="ghost"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)}`
                }
                else if(opp_pokemon2.type=="steel"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4)/2)+parseInt(opp_def2.textContent.slice(4))}`
                }
                else{
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4))+parseInt(opp_def2.textContent.slice(4))}`
                }
            }
            else if(pokemon2.type=="fire"){
                if(opp_pokemon2.type=="fire"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4)/2)+parseInt(opp_def2.textContent.slice(4))}`
                }
                else if(opp_pokemon2.type=="water"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4)/2)+parseInt(opp_def2.textContent.slice(4))}`
                }
                else if(opp_pokemon2.type=="rock"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4)/2)+parseInt(opp_def2.textContent.slice(4))}`
                }
                else if(opp_pokemon2.type=="dragon"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4)/2)+parseInt(opp_def2.textContent.slice(4))}`
                }
                else if(opp_pokemon2.type=="grass"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4)*2)+parseInt(opp_def2.textContent.slice(4))}`
                }
                else if(opp_pokemon2.type=="ice"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4)*2)+parseInt(opp_def2.textContent.slice(4))}`
                }
                else if(opp_pokemon2.type=="bug"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4)*2)+parseInt(opp_def2.textContent.slice(4))}`
                }
                else if(opp_pokemon2.type=="steel"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4)*2)+parseInt(opp_def2.textContent.slice(4))}`
                }
                else{
                        opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4))+parseInt(opp_def2.textContent.slice(4))}`
                }
            }
            else if(pokemon2.type=="water"){
                if(opp_pokemon2.type=="water"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4)/2)+parseInt(opp_def2.textContent.slice(4))}`
                }
                else if(opp_pokemon2.type=="grass"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4)/2)+parseInt(opp_def2.textContent.slice(4))}`
                }
                else if(opp_pokemon2.type=="dragon"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4)/2)+parseInt(opp_def2.textContent.slice(4))}`
                }
                else if(opp_pokemon2.type=="fire"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4)*2)+parseInt(opp_def2.textContent.slice(4))}`
                }
                else if(opp_pokemon2.type=="ground"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4)*2)+parseInt(opp_def2.textContent.slice(4))}`
                }
                else if(opp_pokemon2.type=="rock"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4)*2)+parseInt(opp_def2.textContent.slice(4))}`
                }
                else{
                        opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4))+parseInt(opp_def2.textContent.slice(4))}`
                }
            }
            else if(pokemon2.type=="grass"){
                if(opp_pokemon2.type=="fire"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4)/2)+parseInt(opp_def2.textContent.slice(4))}`
                }
                else if(opp_pokemon2.type=="grass"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4)/2)+parseInt(opp_def2.textContent.slice(4))}`
                }
                else if(opp_pokemon2.type=="poison"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4)/2)+parseInt(opp_def2.textContent.slice(4))}`
                }
                else if(opp_pokemon2.type=="flying"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4)/2)+parseInt(opp_def2.textContent.slice(4))}`
                }
                else if(opp_pokemon2.type=="bug"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4)/2)+parseInt(opp_def2.textContent.slice(4))}`
                }
                else if(opp_pokemon2.type=="dragon"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4)/2)+parseInt(opp_def2.textContent.slice(4))}`
                }
                else if(opp_pokemon2.type=="steel"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4)/2)+parseInt(opp_def2.textContent.slice(4))}`
                }
                else if(opp_pokemon2.type=="water"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4)*2)+parseInt(opp_def2.textContent.slice(4))}`
                }
                else if(opp_pokemon2.type=="ground"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4)*2)+parseInt(opp_def2.textContent.slice(4))}`
                }
                else if(opp_pokemon2.type=="rock"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4)*2)+parseInt(opp_def2.textContent.slice(4))}`
                }
                else{
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4))+parseInt(opp_def2.textContent.slice(4))}`
                }
            }
            else if(pokemon2.type=="electric"){
                if(opp_pokemon2.type=="grass"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4)/2)+parseInt(opp_def2.textContent.slice(4))}`
                }
                else if(opp_pokemon2.type=="electric"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4)/2)+parseInt(opp_def2.textContent.slice(4))}`
                }
                else if(opp_pokemon2.type=="dragon"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4)/2)+parseInt(opp_def2.textContent.slice(4))}`
                }
                else if(opp_pokemon2.type=="water"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4)*2)+parseInt(opp_def2.textContent.slice(4))}`
                }
                else if(opp_pokemon2.type=="flying"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4)*2)+parseInt(opp_def2.textContent.slice(4))}`
                }
                else if(opp_pokemon2.type=="ground"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)}`
                }
                else{
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4))+parseInt(opp_def2.textContent.slice(4))}`
                }
            }
            else if(pokemon2.type=="ice"){
                if(opp_pokemon2.type=="fire"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4)/2)+parseInt(opp_def2.textContent.slice(4))}`
                }
                else if(opp_pokemon2.type=="water"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4)/2)+parseInt(opp_def2.textContent.slice(4))}`
                }
                else if(opp_pokemon2.type=="ice"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4)/2)+parseInt(opp_def2.textContent.slice(4))}`
                }
                else if(opp_pokemon2.type=="steel"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4)/2)+parseInt(opp_def2.textContent.slice(4))}`
                }
                else if(opp_pokemon2.type=="grass"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4)*2)+parseInt(opp_def2.textContent.slice(4))}`
                }
                else if(opp_pokemon2.type=="ground"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4)*2)+parseInt(opp_def2.textContent.slice(4))}`
                }
                else if(opp_pokemon2.type=="flying"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4)*2)+parseInt(opp_def2.textContent.slice(4))}`
                }
                else if(opp_pokemon2.type=="dragon"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4)*2)+parseInt(opp_def2.textContent.slice(4))}`
                } 
                else{
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4))+parseInt(opp_def2.textContent.slice(4))}`
                }
            }
            else if(pokemon2.type=="fighting"){
                if(opp_pokemon2.type=="poison"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4)/2)+parseInt(opp_def2.textContent.slice(4))}`
                }
                else if(opp_pokemon2.type=="flying"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4)/2)+parseInt(opp_def2.textContent.slice(4))}`
                }
                else if(opp_pokemon2.type=="psychic"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4)/2)+parseInt(opp_def2.textContent.slice(4))}`
                }
                else if(opp_pokemon2.type=="bug"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4)/2)+parseInt(opp_def2.textContent.slice(4))}`
                }
                else if(opp_pokemon2.type=="fairy"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4)/2)+parseInt(opp_def2.textContent.slice(4))}`
                }
                else if(opp_pokemon2.type=="normal"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4)*2)+parseInt(opp_def2.textContent.slice(4))}`
                }
                else if(opp_pokemon2.type=="ice"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4)*2)+parseInt(opp_def2.textContent.slice(4))}`
                }
                else if(opp_pokemon2.type=="rock"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4)*2)+parseInt(opp_def2.textContent.slice(4))}`
                }
                else if(opp_pokemon2.type=="dark"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4)*2)+parseInt(opp_def2.textContent.slice(4))}`
                } 
                else if(opp_pokemon2.type=="steel"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4)*2)+parseInt(opp_def2.textContent.slice(4))}`
                }
                else if(opp_pokemon2.type=="ghost"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)}`
                }
                else{
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4))+parseInt(opp_def2.textContent.slice(4))}`
                }
            }
            else if(pokemon2.type=="poison"){
                if(opp_pokemon2.type=="poison"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4)/2)+parseInt(opp_def2.textContent.slice(4))}`
                }
                else if(opp_pokemon2.type=="ground"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4)/2)+parseInt(opp_def2.textContent.slice(4))}`
                }
                else if(opp_pokemon2.type=="rock"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4)/2)+parseInt(opp_def2.textContent.slice(4))}`
                }
                else if(opp_pokemon2.type=="ghost"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4)/2)+parseInt(opp_def2.textContent.slice(4))}`
                }
                else if(opp_pokemon2.type=="grass"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4)*2)+parseInt(opp_def2.textContent.slice(4))}`
                }
                else if(opp_pokemon2.type=="fairy"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4)*2)+parseInt(opp_def2.textContent.slice(4))}`
                }
                else if(opp_pokemon2.type=="steel"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)}`
                }
                else{
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4))+parseInt(opp_def2.textContent.slice(4))}`
                }
            }
            else if(pokemon2.type=="ground"){
                if(opp_pokemon2.type=="grass"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4)/2)+parseInt(opp_def2.textContent.slice(4))}`
                }
                else if(opp_pokemon2.type=="bug"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4)/2)+parseInt(opp_def2.textContent.slice(4))}`
                }
                else if(opp_pokemon2.type=="fire"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4)*2)+parseInt(opp_def2.textContent.slice(4))}`
                }
                else if(opp_pokemon2.type=="electric"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4)*2)+parseInt(opp_def2.textContent.slice(4))}`
                }
                else if(opp_pokemon2.type=="poison"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4)*2)+parseInt(opp_def2.textContent.slice(4))}`
                }
                else if(opp_pokemon2.type=="rock"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4)*2)+parseInt(opp_def2.textContent.slice(4))}`
                }
                else if(opp_pokemon2.type=="steel"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4)*2)+parseInt(opp_def2.textContent.slice(4))}`
                }
                else if(opp_pokemon2.type=="flying"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)}`
                }
                else{
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4))+parseInt(opp_def2.textContent.slice(4))}`
                }
            }
            else if(pokemon2.type=="flying"){
                if(opp_pokemon2.type=="electric"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4)/2)+parseInt(opp_def2.textContent.slice(4))}`
                }
                else if(opp_pokemon2.type=="rock"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4)/2)+parseInt(opp_def2.textContent.slice(4))}`
                }
                else if(opp_pokemon2.type=="steel"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4)/2)+parseInt(opp_def2.textContent.slice(4))}`
                }
                else if(opp_pokemon2.type=="grass"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4)*2)+parseInt(opp_def2.textContent.slice(4))}`
                }
                else if(opp_pokemon2.type=="fighting"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4)*2)+parseInt(opp_def2.textContent.slice(4))}`
                }
                else if(opp_pokemon2.type=="bug"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4)*2)+parseInt(opp_def2.textContent.slice(4))}`
                }
                else{
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4))+parseInt(opp_def2.textContent.slice(4))}`
                }
            }
            else if(pokemon2.type=="psychic"){
                if(opp_pokemon2.type=="fighting"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4)/2)+parseInt(opp_def2.textContent.slice(4))}`
                }
                else if(opp_pokemon2.type=="poison"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4)/2)+parseInt(opp_def2.textContent.slice(4))}`
                }
                else if(opp_pokemon2.type=="psychic"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4)*2)+parseInt(opp_def2.textContent.slice(4))}`
                }
                else if(opp_pokemon2.type=="steel"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4)*2)+parseInt(opp_def2.textContent.slice(4))}`
                }
                else if(opp_pokemon2.type=="dark"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)}`
                }
                else{
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4))+parseInt(opp_def2.textContent.slice(4))}`
                }
            }
            else if(pokemon2.type=="bug"){
                if(opp_pokemon2.type=="fire"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4)/2)+parseInt(opp_def2.textContent.slice(4))}`
                }
                else if(opp_pokemon2.type=="fighting"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4)/2)+parseInt(opp_def2.textContent.slice(4))}`
                }
                else if(opp_pokemon2.type=="poison"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4)/2)+parseInt(opp_def2.textContent.slice(4))}`
                }
                else if(opp_pokemon2.type=="flying"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4)/2)+parseInt(opp_def2.textContent.slice(4))}`
                }
                else if(opp_pokemon2.type=="ghost"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4)/2)+parseInt(opp_def2.textContent.slice(4))}`
                }
                else if(opp_pokemon2.type=="steel"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4)/2)+parseInt(opp_def2.textContent.slice(4))}`
                }
                else if(opp_pokemon2.type=="fairy"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4)/2)+parseInt(opp_def2.textContent.slice(4))}`
                }
                else if(opp_pokemon2.type=="grass"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4)*2)+parseInt(opp_def2.textContent.slice(4))}`
                }
                else if(opp_pokemon2.type=="dark"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4)*2)+parseInt(opp_def2.textContent.slice(4))}`
                }
                else if(opp_pokemon2.type=="psychic"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4)*2)+parseInt(opp_def2.textContent.slice(4))}`
                }
                else{
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4))+parseInt(opp_def2.textContent.slice(4))}`
                }
            }
            else if(pokemon2.type=="rock"){
                if(opp_pokemon2.type=="fighting"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4)/2)+parseInt(opp_def2.textContent.slice(4))}`
                }
                else if(opp_pokemon2.type=="ground"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4)/2)+parseInt(opp_def2.textContent.slice(4))}`
                }
                else if(opp_pokemon2.type=="steel"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4)/2)+parseInt(opp_def2.textContent.slice(4))}`
                }
                else if(opp_pokemon2.type=="bug"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4)*2)+parseInt(opp_def2.textContent.slice(4))}`
                }
                else if(opp_pokemon2.type=="fire"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4)*2)+parseInt(opp_def2.textContent.slice(4))}`
                }
                else if(opp_pokemon2.type=="ice"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4)*2)+parseInt(opp_def2.textContent.slice(4))}`
                }
                else if(opp_pokemon2.type=="flying"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4)*2)+parseInt(opp_def2.textContent.slice(4))}`
                }
                else{
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4))+parseInt(opp_def2.textContent.slice(4))}`
                }
            }
            else if(pokemon2.type=="ghost"){
                if(opp_pokemon2.type=="dark"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4)/2)+parseInt(opp_def2.textContent.slice(4))}`
                }
                else if(opp_pokemon2.type=="psychic"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4)*2)+parseInt(opp_def2.textContent.slice(4))}`
                }
                else if(opp_pokemon2.type=="ghost"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4)*2)+parseInt(opp_def2.textContent.slice(4))}`
                }
                else if(opp_pokemon2.type=="normal"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)}`
                }
                else{
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4))+parseInt(opp_def2.textContent.slice(4))}`
                }
            }
            else if(pokemon2.type=="dragon"){
                if(opp_pokemon2.type=="steel"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4)/2)+parseInt(opp_def2.textContent.slice(4))}`
                }
                else if(opp_pokemon2.type=="dragon"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4)*2)+parseInt(opp_def2.textContent.slice(4))}`
                }
                else if(opp_pokemon2.type=="fairy"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)}`
                }
                else{
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4))+parseInt(opp_def2.textContent.slice(4))}`
                }
            }
            else if(pokemon2.type=="dark"){
                if(opp_pokemon2.type=="fighting"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4)/2)+parseInt(opp_def2.textContent.slice(4))}`
                }
                else if(opp_pokemon2.type=="dark"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4)/2)+parseInt(opp_def2.textContent.slice(4))}`
                }
                else if(opp_pokemon2.type=="fairy"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4)/2)+parseInt(opp_def2.textContent.slice(4))}`
                }
                else if(opp_pokemon2.type=="ghost"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4)*2)+parseInt(opp_def2.textContent.slice(4))}`
                }
                else if(opp_pokemon2.type=="psychic"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4)*2)+parseInt(opp_def2.textContent.slice(4))}`
                }
                else{
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4))+parseInt(opp_def2.textContent.slice(4))}`
                }
            }
            else if(pokemon2.type=="steel"){
                if(opp_pokemon2.type=="fire"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4)/2)+parseInt(opp_def2.textContent.slice(4))}`
                }
                else if(opp_pokemon2.type=="water"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4)/2)+parseInt(opp_def2.textContent.slice(4))}`
                }
                else if(opp_pokemon2.type=="electric"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4)/2)+parseInt(opp_def2.textContent.slice(4))}`
                }
                else if(opp_pokemon2.type=="steel"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4)/2)+parseInt(opp_def2.textContent.slice(4))}`
                }
                else if(opp_pokemon2.type=="ice"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4)*2)+parseInt(opp_def2.textContent.slice(4))}`
                }
                else if(opp_pokemon2.type=="rock"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4)*2)+parseInt(opp_def2.textContent.slice(4))}`
                }
                else if(opp_pokemon2.type=="fairy"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4)*2)+parseInt(opp_def2.textContent.slice(4))}`
                }
                else{
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4))+parseInt(opp_def2.textContent.slice(4))}`
                }
            }
            else if(pokemon2.type=="fairy"){
                if(opp_pokemon2.type=="fire"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4)/2)+parseInt(opp_def2.textContent.slice(4))}`
                }
                else if(opp_pokemon2.type=="poison"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4)/2)+parseInt(opp_def2.textContent.slice(4))}`
                }
                else if(opp_pokemon2.type=="steel"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4)/2)+parseInt(opp_def2.textContent.slice(4))}`
                }
                else if(opp_pokemon2.type=="fighting"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4)*2)+parseInt(opp_def2.textContent.slice(4))}`
                }
                else if(opp_pokemon2.type=="dragon"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4)*2)+parseInt(opp_def2.textContent.slice(4))}`
                }
                else if(opp_pokemon2.type=="dark"){
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4)*2)+parseInt(opp_def2.textContent.slice(4))}`
                }
                else{
                    opp_hp2.textContent=`HP:${opp_hp2.textContent.slice(3)-(atk2.textContent.slice(4))+parseInt(opp_def2.textContent.slice(4))}`
                }
            }

            if(opp_pokemon2.type=="normal"){
                if(pokemon2.type=="rock"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4)/2)+parseInt(def2.textContent.slice(4))}`
                }
                else if(pokemon2.type=="ghost"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)}`
                }
                else if(pokemon2.type=="steel"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4)/2)+parseInt(def2.textContent.slice(4))}`
                }
                else{
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4))+parseInt(def2.textContent.slice(4))}`
                }
            }
            else if(opp_pokemon2.type=="fire"){
                if(pokemon2.type=="fire"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4)/2)+parseInt(def2.textContent.slice(4))}`
                }
                else if(pokemon2.type=="water"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4)/2)+parseInt(def2.textContent.slice(4))}`
                }
                else if(pokemon2.type=="rock"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4)/2)+parseInt(def2.textContent.slice(4))}`
                }
                else if(pokemon2.type=="dragon"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4)/2)+parseInt(def2.textContent.slice(4))}`
                }
                else if(pokemon2.type=="grass"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4)*2)+parseInt(def2.textContent.slice(4))}`
                }
                else if(pokemon2.type=="ice"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4)*2)+parseInt(def2.textContent.slice(4))}`
                }
                else if(pokemon2.type=="bug"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4)*2)+parseInt(def2.textContent.slice(4))}`
                }
                else if(pokemon2.type=="steel"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4)*2)+parseInt(def2.textContent.slice(4))}`
                }
                else{
                        hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4))+parseInt(def2.textContent.slice(4))}`
                }
            }
            else if(opp_pokemon2.type=="water"){
                if(pokemon2.type=="water"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4)/2)+parseInt(def2.textContent.slice(4))}`
                }
                else if(pokemon2.type=="grass"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4)/2)+parseInt(def2.textContent.slice(4))}`
                }
                else if(pokemon2.type=="dragon"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4)/2)+parseInt(def2.textContent.slice(4))}`
                }
                else if(pokemon2.type=="fire"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4)*2)+parseInt(def2.textContent.slice(4))}`
                }
                else if(pokemon2.type=="ground"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4)*2)+parseInt(def2.textContent.slice(4))}`
                }
                else if(pokemon2.type=="rock"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4)*2)+parseInt(def2.textContent.slice(4))}`
                }
                else{
                        hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4))+parseInt(def2.textContent.slice(4))}`
                }
            }
            else if(opp_pokemon2.type=="grass"){
                if(pokemon2.type=="fire"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4)/2)+parseInt(def2.textContent.slice(4))}`
                }
                else if(pokemon2.type=="grass"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4)/2)+parseInt(def2.textContent.slice(4))}`
                }
                else if(pokemon2.type=="poison"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4)/2)+parseInt(def2.textContent.slice(4))}`
                }
                else if(pokemon2.type=="flying"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4)/2)+parseInt(def2.textContent.slice(4))}`
                }
                else if(pokemon2.type=="bug"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4)/2)+parseInt(def2.textContent.slice(4))}`
                }
                else if(pokemon2.type=="dragon"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4)/2)+parseInt(def2.textContent.slice(4))}`
                }
                else if(pokemon2.type=="steel"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4)/2)+parseInt(def2.textContent.slice(4))}`
                }
                else if(pokemon2.type=="water"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4)*2)+parseInt(def2.textContent.slice(4))}`
                }
                else if(pokemon2.type=="ground"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4)*2)+parseInt(def2.textContent.slice(4))}`
                }
                else if(pokemon2.type=="rock"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4)*2)+parseInt(def2.textContent.slice(4))}`
                }
                else{
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4))+parseInt(def2.textContent.slice(4))}`
                }
            }
            else if(opp_pokemon2.type=="electric"){
                if(pokemon2.type=="grass"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4)/2)+parseInt(def2.textContent.slice(4))}`
                }
                else if(pokemon2.type=="electric"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4)/2)+parseInt(def2.textContent.slice(4))}`
                }
                else if(pokemon2.type=="dragon"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4)/2)+parseInt(def2.textContent.slice(4))}`
                }
                else if(pokemon2.type=="water"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4)*2)+parseInt(def2.textContent.slice(4))}`
                }
                else if(pokemon2.type=="flying"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4)*2)+parseInt(def2.textContent.slice(4))}`
                }
                else if(pokemon2.type=="ground"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)}`
                }
                else{
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4))+parseInt(def2.textContent.slice(4))}`
                }
            }
            else if(opp_pokemon2.type=="ice"){
                if(pokemon2.type=="fire"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4)/2)+parseInt(def2.textContent.slice(4))}`
                }
                else if(pokemon2.type=="water"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4)/2)+parseInt(def2.textContent.slice(4))}`
                }
                else if(pokemon2.type=="ice"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4)/2)+parseInt(def2.textContent.slice(4))}`
                }
                else if(pokemon2.type=="steel"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4)/2)+parseInt(def2.textContent.slice(4))}`
                }
                else if(pokemon2.type=="grass"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4)*2)+parseInt(def2.textContent.slice(4))}`
                }
                else if(pokemon2.type=="ground"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4)*2)+parseInt(def2.textContent.slice(4))}`
                }
                else if(pokemon2.type=="flying"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4)*2)+parseInt(def2.textContent.slice(4))}`
                }
                else if(pokemon2.type=="dragon"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4)*2)+parseInt(def2.textContent.slice(4))}`
                } 
                else{
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4))+parseInt(def2.textContent.slice(4))}`
                }
            }
            else if(opp_pokemon2.type=="fighting"){
                if(pokemon2.type=="poison"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4)/2)+parseInt(def2.textContent.slice(4))}`
                }
                else if(pokemon2.type=="flying"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4)/2)+parseInt(def2.textContent.slice(4))}`
                }
                else if(pokemon2.type=="psychic"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4)/2)+parseInt(def2.textContent.slice(4))}`
                }
                else if(pokemon2.type=="bug"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4)/2)+parseInt(def2.textContent.slice(4))}`
                }
                else if(pokemon2.type=="fairy"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4)/2)+parseInt(def2.textContent.slice(4))}`
                }
                else if(pokemon2.type=="normal"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4)*2)+parseInt(def2.textContent.slice(4))}`
                }
                else if(pokemon2.type=="ice"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4)*2)+parseInt(def2.textContent.slice(4))}`
                }
                else if(pokemon2.type=="rock"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4)*2)+parseInt(def2.textContent.slice(4))}`
                }
                else if(pokemon2.type=="dark"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4)*2)+parseInt(def2.textContent.slice(4))}`
                } 
                else if(pokemon2.type=="steel"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4)*2)+parseInt(def2.textContent.slice(4))}`
                }
                else if(pokemon2.type=="ghost"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)}`
                }
                else{
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4))+parseInt(def2.textContent.slice(4))}`
                }
            }
            else if(opp_pokemon2.type=="poison"){
                if(pokemon2.type=="poison"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4)/2)+parseInt(def2.textContent.slice(4))}`
                }
                else if(pokemon2.type=="ground"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4)/2)+parseInt(def2.textContent.slice(4))}`
                }
                else if(pokemon2.type=="rock"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4)/2)+parseInt(def2.textContent.slice(4))}`
                }
                else if(pokemon2.type=="ghost"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4)/2)+parseInt(def2.textContent.slice(4))}`
                }
                else if(pokemon2.type=="grass"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4)*2)+parseInt(def2.textContent.slice(4))}`
                }
                else if(pokemon2.type=="fairy"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4)*2)+parseInt(def2.textContent.slice(4))}`
                }
                else if(pokemon2.type=="steel"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)}`
                }
                else{
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4))+parseInt(def2.textContent.slice(4))}`
                }
            }
            else if(opp_pokemon2.type=="ground"){
                if(pokemon2.type=="grass"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4)/2)+parseInt(def2.textContent.slice(4))}`
                }
                else if(pokemon2.type=="bug"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4)/2)+parseInt(def2.textContent.slice(4))}`
                }
                else if(pokemon2.type=="fire"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4)*2)+parseInt(def2.textContent.slice(4))}`
                }
                else if(pokemon2.type=="electric"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4)*2)+parseInt(def2.textContent.slice(4))}`
                }
                else if(pokemon2.type=="poison"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4)*2)+parseInt(def2.textContent.slice(4))}`
                }
                else if(pokemon2.type=="rock"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4)*2)+parseInt(def2.textContent.slice(4))}`
                }
                else if(pokemon2.type=="steel"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4)*2)+parseInt(def2.textContent.slice(4))}`
                }
                else if(pokemon2.type=="flying"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)}`
                }
                else{
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4))+parseInt(def2.textContent.slice(4))}`
                }
            }
            else if(opp_pokemon2.type=="flying"){
                if(pokemon2.type=="electric"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4)/2)+parseInt(def2.textContent.slice(4))}`
                }
                else if(pokemon2.type=="rock"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4)/2)+parseInt(def2.textContent.slice(4))}`
                }
                else if(pokemon2.type=="steel"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4)/2)+parseInt(def2.textContent.slice(4))}`
                }
                else if(pokemon2.type=="grass"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4)*2)+parseInt(def2.textContent.slice(4))}`
                }
                else if(pokemon2.type=="fighting"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4)*2)+parseInt(def2.textContent.slice(4))}`
                }
                else if(pokemon2.type=="bug"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4)*2)+parseInt(def2.textContent.slice(4))}`
                }
                else{
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4))+parseInt(def2.textContent.slice(4))}`
                }
            }
            else if(opp_pokemon2.type=="psychic"){
                if(pokemon2.type=="fighting"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4)/2)+parseInt(def2.textContent.slice(4))}`
                }
                else if(pokemon2.type=="poison"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4)/2)+parseInt(def2.textContent.slice(4))}`
                }
                else if(pokemon2.type=="psychic"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4)*2)+parseInt(def2.textContent.slice(4))}`
                }
                else if(pokemon2.type=="steel"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4)*2)+parseInt(def2.textContent.slice(4))}`
                }
                else if(pokemon2.type=="dark"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)}`
                }
                else{
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4))+parseInt(def2.textContent.slice(4))}`
                }
            }
            else if(opp_pokemon2.type=="bug"){
                if(pokemon2.type=="fire"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4)/2)+parseInt(def2.textContent.slice(4))}`
                }
                else if(pokemon2.type=="fighting"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4)/2)+parseInt(def2.textContent.slice(4))}`
                }
                else if(pokemon2.type=="poison"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4)/2)+parseInt(def2.textContent.slice(4))}`
                }
                else if(pokemon2.type=="flying"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4)/2)+parseInt(def2.textContent.slice(4))}`
                }
                else if(pokemon2.type=="ghost"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4)/2)+parseInt(def2.textContent.slice(4))}`
                }
                else if(pokemon2.type=="steel"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4)/2)+parseInt(def2.textContent.slice(4))}`
                }
                else if(pokemon2.type=="fairy"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4)/2)+parseInt(def2.textContent.slice(4))}`
                }
                else if(pokemon2.type=="grass"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4)*2)+parseInt(def2.textContent.slice(4))}`
                }
                else if(pokemon2.type=="dark"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4)*2)+parseInt(def2.textContent.slice(4))}`
                }
                else if(pokemon2.type=="psychic"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4)*2)+parseInt(def2.textContent.slice(4))}`
                }
                else{
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4))+parseInt(def2.textContent.slice(4))}`
                }
            }
            else if(opp_pokemon2.type=="rock"){
                if(pokemon2.type=="fighting"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4)/2)+parseInt(def2.textContent.slice(4))}`
                }
                else if(pokemon2.type=="ground"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4)/2)+parseInt(def2.textContent.slice(4))}`
                }
                else if(pokemon2.type=="steel"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4)/2)+parseInt(def2.textContent.slice(4))}`
                }
                else if(pokemon2.type=="bug"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4)*2)+parseInt(def2.textContent.slice(4))}`
                }
                else if(pokemon2.type=="fire"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4)*2)+parseInt(def2.textContent.slice(4))}`
                }
                else if(pokemon2.type=="ice"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4)*2)+parseInt(def2.textContent.slice(4))}`
                }
                else if(pokemon2.type=="flying"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4)*2)+parseInt(def2.textContent.slice(4))}`
                }
                else{
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4))+parseInt(def2.textContent.slice(4))}`
                }
            }
            else if(opp_pokemon2.type=="ghost"){
                if(pokemon2.type=="dark"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4)/2)+parseInt(def2.textContent.slice(4))}`
                }
                else if(pokemon2.type=="psychic"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4)*2)+parseInt(def2.textContent.slice(4))}`
                }
                else if(pokemon2.type=="ghost"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4)*2)+parseInt(def2.textContent.slice(4))}`
                }
                else if(pokemon2.type=="normal"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)}`
                }
                else{
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4))+parseInt(def2.textContent.slice(4))}`
                }
            }
            else if(opp_pokemon2.type=="dragon"){
                if(pokemon2.type=="steel"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4)/2)+parseInt(def2.textContent.slice(4))}`
                }
                else if(pokemon2.type=="dragon"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4)*2)+parseInt(def2.textContent.slice(4))}`
                }
                else if(pokemon2.type=="fairy"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)}`
                }
                else{
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4))+parseInt(def2.textContent.slice(4))}`
                }
            }
            else if(opp_pokemon2.type=="dark"){
                if(pokemon2.type=="fighting"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4)/2)+parseInt(def2.textContent.slice(4))}`
                }
                else if(pokemon2.type=="dark"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4)/2)+parseInt(def2.textContent.slice(4))}`
                }
                else if(pokemon2.type=="fairy"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4)/2)+parseInt(def2.textContent.slice(4))}`
                }
                else if(pokemon2.type=="ghost"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4)*2)+parseInt(def2.textContent.slice(4))}`
                }
                else if(pokemon2.type=="psychic"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4)*2)+parseInt(def2.textContent.slice(4))}`
                }
                else{
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4))+parseInt(def2.textContent.slice(4))}`
                }
            }
            else if(opp_pokemon2.type=="steel"){
                if(pokemon2.type=="fire"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4)/2)+parseInt(def2.textContent.slice(4))}`
                }
                else if(pokemon2.type=="water"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4)/2)+parseInt(def2.textContent.slice(4))}`
                }
                else if(pokemon2.type=="electric"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4)/2)+parseInt(def2.textContent.slice(4))}`
                }
                else if(pokemon2.type=="steel"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4)/2)+parseInt(def2.textContent.slice(4))}`
                }
                else if(pokemon2.type=="ice"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4)*2)+parseInt(def2.textContent.slice(4))}`
                }
                else if(pokemon2.type=="rock"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4)*2)+parseInt(def2.textContent.slice(4))}`
                }
                else if(pokemon2.type=="fairy"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4)*2)+parseInt(def2.textContent.slice(4))}`
                }
                else{
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4))+parseInt(def2.textContent.slice(4))}`
                }
            }
            else if(opp_pokemon2.type=="fairy"){
                if(pokemon2.type=="fire"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4)/2)+parseInt(def2.textContent.slice(4))}`
                }
                else if(pokemon2.type=="poison"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4)/2)+parseInt(def2.textContent.slice(4))}`
                }
                else if(pokemon2.type=="steel"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4)/2)+parseInt(def2.textContent.slice(4))}`
                }
                else if(pokemon2.type=="fighting"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4)*2)+parseInt(def2.textContent.slice(4))}`
                }
                else if(pokemon2.type=="dragon"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4)*2)+parseInt(def2.textContent.slice(4))}`
                }
                else if(pokemon2.type=="dark"){
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4)*2)+parseInt(def2.textContent.slice(4))}`
                }
                else{
                    hp2.textContent=`HP:${hp2.textContent.slice(3)-(opp_atk2.textContent.slice(4))+parseInt(def2.textContent.slice(4))}`
                }
            }
            if(opp_hp2.textContent.slice(3)<=0){
                opp_stats2.style.background="red"
                IsEnd(opp_stats1,opp_stats2,stats1,stats2)
            }
            if(hp2.textContent.slice(3)<=0){
                stats2.style.background='red'
                IsEnd(opp_stats1,opp_stats2,stats1,stats2)
            }
        }
    })
})
function indexfinder(pokemon_name){
    for (let i = 0; i < pokemons.length; i++) {
        if (pokemon_name==pokemons[i].name.toLocaleLowerCase()){
            return pokemons[i]
        }
    }
}

function opp_pokemon_finder(){
    return pokemons[Math.floor(Math.random()*pokemons.length)]
}
const GameOvertxt=document.querySelector('h3')

function IsEnd(opp_stats1,opp_stats2,stats1,stats2){
    if(opp_stats1.style.background=="red" && opp_stats2.style.background=="red"){
        pokemon_game.style.display="none"
        document.querySelector('.game_over').style.display="flex"
        GameOvertxt.textContent="Congratulations, You won!"
    }
    else if(stats1.style.background=="red" && stats2.style.background=="red"){
        pokemon_game.style.display="none"
        document.querySelector('.game_over').style.display="flex"
        GameOvertxt.textContent="You Lose!"
    }
    else if((stats1.style.background=="red" && opp_stats2.style.background=="red") || (opp_stats1.style.background=="red" && stats2.style.background=="red")){
        pokemon_game.style.display="none"
        document.querySelector('.game_over').style.display="flex"
        GameOvertxt.textContent="It's a Tie!!"
    }
}
document.querySelector('.reply').addEventListener('click',()=>{window.location.reload()})