
let currMoleTile;
let currPlantTile;

window.onload=function()
{
    setGame();
    setPlant();
}

function setGame()
{
    for(let i =0;i<9;i++)

        {
            const tile =document.createElement("div");
            tile.id=i.toString();
            document.getElementById("board").appendChild(tile);
        }
        setInterval(setMole,500);
        setInterval(setPlant,500);
        
}

function getRandomTile()
{
    let num=Math.floor(Math.random()*9);
    return num.toString();
}

function setMole()
{

    if(currMoleTile)
    {
        currMoleTile.innerHTML="";
    }
    let mole=document.createElement("img");
    mole.src="assets/images/monty-mole.png"
    let num = getRandomTile();
    currMoleTile=document.getElementById(num);
    currMoleTile.appendChild(mole);
}

function setPlant()
{
    if(currPlantTile )
    {
        currPlantTile.innerHTML="";
    }
    let plant=document.createElement("img");
    plant.src="assets/images/piranha-plant.png";
    let num=getRandomTile();
    
    currPlantTile=document.getElementById(num);
    currPlantTile.innerHTML="";
    currPlantTile.appendChild(plant);
}
