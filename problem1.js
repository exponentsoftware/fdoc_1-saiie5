//// 1.a. Write a function which count the number of occurrence of words in a paragraph or a sentence.The function countWords takes a paragraph and two words as parameters. It compare which word is most frequently occurred in the paragraph.

const paragraph = 'I love teaching. If you do not love teaching what else can you love. I love JavaScript if you do not love something which can give life to your application what else can you love.';

function countWords(paragraph,word1,word2) {
  let temp_paragraph = paragraph.split(" ");
  let word1_count=0,word2_count=0;
//   console.log(temp_paragraph);
    for(let i of temp_paragraph ) {
        if(word1.toLowerCase() == i.toLowerCase()) {
            word1_count++;
        }
        if(word2.toLowerCase() == i.toLowerCase()) {
            word2_count ++;
        }
    }
    if(word1_count >= word2_count)
    {
        return "The word " + word1 + " more frequently occurred than " + word2
    }
    else {
        return "The word " + word2 + " more frequently occurred than " + word1
    }

}

// console.log(countWords(paragraph,'love', 'you'));



// 1.b. Write a function called cleanText. The function takes raw text as a parameter and returns the clean text.

let sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;

function cleanText(sentence) {
   let sentence1=" ";
    for(let i of sentence) {
        
        if((i.charCodeAt() >=65 && i.charCodeAt() <=90) ||  (i.charCodeAt() >=97 && i.charCodeAt() <=122) || i.charCodeAt() == 32 || i.charCodeAt() == 46 ) {
           sentence1=sentence1 + i;
           console.log
        }
    }
    return sentence1;

}
console.log(cleanText(sentence));


// 1.c. After cleaning the text in the sentence from question number b you will get the following text. Count the number of words in this text. Don't include words with only one letter.





function countWords(sentence){
    let wordset = sentence.split(" ");
    let count =0;
    for(let word of wordset){
        // console.log(word)
        if(word.length > 1){
            count++
        }
    }
    return count;
}

let sentence =  `I am a teacher and I love teaching. There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher?`
console.log(countWords(sentence));


// 1.d. How many words were used to construct this sentence. Now, don't exclude one letter words.

function countWords(sentence){
    let ws = sentence.split(" ")
    for(let w1 of ws){
      let last = w1[w1.length-1]
      if(last == "."){
        let nw = w1.split(".")
        ws[ws.indexOf(w1)]= nw[0]
      }
      if(last == "?"){
        let nw = w1.split("?")
        ws[ws.indexOf(w1)]= nw[0]
      }
    }
    let count =0;
    let ar1=[];
    for(let word1 of ws){
      let ct =0;
      for(let word2 of ws){
        if(word1.toLowerCase() == word2.toLowerCase()){
          ct++
        }
      }
      if(count == 1){
        count++
      }else{
        if(ar1.includes(word1)==false){
          ar1.push(word1)
        }
      }
    }
    count = count+ar1.length
    return count
  }
  
  let sentence =  `I am a teacher and I love teaching. There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher?`
  console.log(countWords(sentence));


