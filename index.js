const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];
let n = 0
const newTutorials = []
function fn(sent) {
  let newSent = ""
  for (let i in sent) {
    if (sent[i] == sent[i].toLowerCase() && sent[i-1] == " ") {
      newSent+=(sent[i].toUpperCase())
    } else {
      newSent+=(sent[i])
    }
  }
  return newSent[0].toUpperCase() + newSent.slice(1)
}
const titleCased = () => {
  return tutorials.map(fn)
}
