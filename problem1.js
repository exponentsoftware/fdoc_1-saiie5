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


