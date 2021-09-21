// importing PATH module
const path = require('path')

// concatenating paths with join() method [right to left(/...)]
const file_path = path.join('/content', 'subfolder', 'text.txt')
console.log(file_path)

// to print out base file name
console.log(path.basename(file_path))

// normalizing the path with resolve() method [right to left(/...)]
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'text.txt')
console.log(absolute)