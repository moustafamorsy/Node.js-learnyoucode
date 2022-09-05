const myModule = require('./mymodule.js');

const directory = process.argv[2];
const extentions = process.argv[3];

myModule(directory , extentions, (err , list) =>{

    if(err) return console.error(err);

    list.forEach(file => {
        console.log(file);
    });
});