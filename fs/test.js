let fs=require('fs')
let path=require('path')

function readFile(str) {
 const text = fs.readFileSync(path.resolve(__dirname, str)).toString('utf8')
 console.log(text)
}

readFile("tussards.txt")

