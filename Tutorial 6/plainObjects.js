function monsterAttack()
{
    console.log('The ' + this.name + ' monster attacks >>> ');
    let totalAttack=0;
    for(let a=0;a<this.attacks.length;a++)
        {
            totalAttack+=this.attacks[a].dealDamage();
        }
        return totalAttack;
};

function dealDamage()
{
    console.log('The '+ this.name + ' attack dealt ' + this.damage +' damage');
    return this.damage
};

function getStrength()
{
        console.log('The ' + this.name + ' monster\'s strength is '+this.strength);
        return this.strength
};

function getDamaged(damage)
{
    this.strength-=damage; 
    return this.strength
};

let attack1 = {name:'flying', damage:30, dealDamage};
let attack2 = {name:'surprise', damage:25, dealDamage};
let attack3 = {name:'sneak', damage:35, dealDamage};
let attack4 = {name:'boss', damage:40, dealDamage};


let monster1 = {name: 'Fairy', 
        strength: 300, 
        attacks: [attack1, attack2],
        monsterAttack };

let monster2 = {name: 'Werewolf', 
            strength: 1000, 
            attacks: [attack3, attack4],
            monsterAttack };

getStrength.call(monster1)
getDamaged.call(monster1,monster2.monsterAttack());
getStrength.call(monster1)
getStrength.call(monster2)
getDamaged.call(monster2,monster1.monsterAttack());
getStrength.call(monster2)
