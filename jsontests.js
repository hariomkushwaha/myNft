const output = [];
let input = ["John","Hari","James"]
let tmp;

for(let i = 0; i < 5000000; i++){
  tmp = {"name" : input[i%3],"id": 0,
  "work": "Unilogic",
  "email": "adam.carter@unilogic.com",
  "dob": "1978",
  "address": "83 Warner Street",
  "city": "Boston"
  };
  output.push(tmp);
}

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




const json = require('big-json');


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
   dataJ+=strChunk;
   dataJs.push(dataJ);
    // console.log(strChunk);
    // console.log(dataJ);
});
setTimeout(() => {
  console.log(dataJs[dataJs.length-1]);

console.log("done")
  //Runs one at a time, need to use a callback for that part to work
}, 120000);

}
asyncCall(output);

// console.log(dataJs);