function analyze() {
    const text = document.getElementById('Input').value.toLowerCase();
    const letters = {
        '----.': '1',
        '---..': '2',
        '--...': '3',
        '-....': '4',
        '.....': '5',
        '....-': '6',
        '...--': '7',
        '..---': '8',
        '.----': '9',
        '-----': '0'
  };

  let dis = "";
const regex = /([.-]{5})/g;
  const codes = text.match(regex);

  if (!codes) {
        dis = "#!";
      } else {
            for (let code of codes) {
                  if (letters[code]) {
                        dis += letters[code];
                      } else if (letters === " "){
        dis += " ";
      }
      else {
        dis += "#!";
      }
    }
  }

  document.getElementById("result").innerHTML = dis;
}




// les espase mamgadch
// const morseMapping = {
//   '----.': '1',
//   '---..': '2',
//   '--...': '3',
//   '-....': '4',
//   '.....': '5',
//   '....-': '6',
//   '...--': '7',
//   '..---': '8',
//   '.----': '9',
//   '-----': '0'
// };

// function analyze() {
//     let str = String(Date.now());
//     let output = "";
//     for (let char of str) {
//         output += morseMapping[char] || '#!';
//         output += " ";
//     }
//     resultDiv.innerHTML = output;
//     return output;
// }