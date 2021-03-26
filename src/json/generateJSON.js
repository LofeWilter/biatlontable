import random from 'random-name';

export const generateJSON = () => new Promise((resolve,reject)=>{
    let athletes = [];
    for (let i=0; i<40; i++) {
        athletes.push({
            place: i+1,
            name: `${random.first()} ${random.last()}`,
            hits: Math.floor(Math.random() * (10 - 1) + 1),
            shootingspeed: Math.floor(Math.random() * (10 - 1) + 1)
        })
    }
    resolve(JSON.stringify(athletes));
})
