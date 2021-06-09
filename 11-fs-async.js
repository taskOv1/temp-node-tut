const {readFile, writeFile, read} = require('fs');

console.log('start');
readFile('./content/first.txt', 'utf-8', (err, result) => {
  if(err){
    console.log(err);
    return;
  }
  const first = result;
  console.log('enter first read');
  readFile('./content/second.txt', 'utf-8', (err, result) => {
    if(err){
      console.log(err);
      return;
    }
    const second = result;
    console.log('enter second read');
    writeFile(
      './content/result-asunc.txt',
      `Here is the result : ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log('done with this task');
      }
    )
  })
});
console.log('starting next task');