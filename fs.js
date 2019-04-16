const fs = require ('fs');

fs.readFile('target.txt/index.js', (err,data)=>{
if(err){
    console.log('hello from error:', err);
    return;
}
console.log(data.toString());
});
console.log('after reading file');


// const fs = require ('fs');
fs.writeFile('target.txt', 'hello HYF', (err)=>{
if(err){
    console.log(err);
    return;
}
});
console.log('file seved !!');





