const json = require('big-json');
const fs = require('fs')
async function main(){

const output = []
for (let i = 0; i < 1000000; i++) {
  output.push({
    name: "John",
    id: 0,
    work: "Unilogic",
    email: "adam.carter@unilogic.com",
    dob: "1978",
    address: "83 Warner Street",
    city: "Boston",
  });
  output.push({
    name: "Hari",
    id: 0,
    work: "Unilogic",
    email: "adam.carter@unilogic.com",
    dob: "1978",
    address: "83 Warner Street",
    city: "Boston",
  });
  output.push({
    name: "James",
    id: 0,
    work: "Unilogic",
    email: "adam.carter@unilogic.com",
    dob: "1978",
    address: "83 Warner Street",
    city: "Boston",
  });
}

console.log("json gen..");

// console.log(JSON.stringify(output));
// let out="[";
//   for(var indx=0;indx<output.length-1;indx++){
//     out+=JSON.stringify(output[indx],null,4) + ",";
//     console.log(out+ " inside");
//     console.log(output[indx]);
//     }
    // console.log(output);
//   out+=JSON.stringify(output[output.length-1],null,4)+"]";
// console.log(JSON.stringify(out));







// // setTimeout(() => {
// //   console.log(dataJs[dataJs.length-1]);
// //   //Runs one at a time, need to use a callback for that part to work
// // }, 1000);

async function asyncCall(output) {
  let dataJ="";
  const dataJs=[];

  const stringifyStream = json.createStringifyStream({
    body: output
  });
 
await stringifyStream.on('data', function(strChunk) {
  
  let s = dataJ+=strChunk;
  s+='\n'
fs.appendFile('output.txt',s, (err) => {
  if (err) throw err;
});
// console.log(strChunk);

});

// setTimeout(() => {
//   fs.writeFile('output.txt', dataJ, (err) => {

//     if (err) throw err;
// })
// console.log("file written...")
//   //Runs one at a time, need to use a callback for that part to work
// }, 6000);



}
asyncCall(output);

// uncomment from 94 to 97 and run file again to append the str a last

// let str ="this is end"
//   fs.appendFile('Output.txt',str, (err) => {
//     if (err) throw err;
//   });



}

main()
// console.log(dataJs);


  //  dataJs.push(dataJ);
//    fs.writeFile('Output.txt', strChunk, (err) => {

//     if (err) throw err;
//     // console.log("file written...")
// })