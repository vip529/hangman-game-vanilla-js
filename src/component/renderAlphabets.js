
// function renderAlphabets(handleAlphabetClick){
  
//   let alphabets = Array.apply(null, { length: 26 }).map((_, i) =>
//     String.fromCharCode(i + 97)
//   );
//   let alphabetDiv = document.getElementById('alphabets');
//   alphabetDiv.addEventListener('click',handleAlphabetClick)
//   for(let i =0;i<26;i++){
//     let letter = document.createElement('div');
//     letter.id = `letter${i}`;
//     letter.classList.add("letter");
//     letter.innerHTML = alphabets[i].toUpperCase();
//     alphabetDiv.appendChild(letter);
    
//   }
// }