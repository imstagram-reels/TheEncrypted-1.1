let decodedText = "";
    function analyze() {
      const morseInput = document.getElementById('input').value.trim();

      const morseToTextMap = {
        '.-': 'a', '-...': 'b', '-.-.': 'c', '-..': 'd', '.': 'e',
        '..-.': 'f', '--.': 'g', '....': 'h', '..': 'i', '.---': 'j',
        '-.-': 'k', '.-..': 'l', '--': 'm', '-.': 'n', '---': 'o',
        '.--.': 'p', '--.-': 'q', '.-.': 'r', '...': 's', '-': 't',
        '..-': 'u', '...-': 'v', '.--': 'w', '-..-': 'x', '-.--': 'y',
        '--..': 'z',
        '.----': '1', '..---': '2', '...--': '3', '....-': '4', '.....': '5',
        '-....': '6', '--...': '7', '---..': '8', '----.': '9', '-----': '0',
        '/': ' ',
        '.-.-.-': '.', '--..--': ',', '..--..': '?', '.----.': "'", '-.-.--': '!',
        '-..-.': '/', '-.--.': '(', '-.--.-': ')', '.-...': '&', '---...': ':',
        '-.-.-.': ';', '-...-': '=', '.-.-.': '+', '-....-': '-', '..--.-': '_',
        '.-..-.': '"', '...-..-': '$', '.--.-.': '@'
      };

      let words = morseInput.split(" ");

      for (let code of words) {
        if (morseToTextMap[code]) {
          decodedText += morseToTextMap[code];
        } else {
          decodedText += "#"; // رمز غير معروف
        }
      }

      // document.getElementById("result").innerText = decodedText;
      // console.log(decodedText)
      window.analyze = analyze; // نخليها global باش onclick يقدر يناديها
    }


// userIdInput
// getUserBtn
// userData



const results = document.getElementById("result");
// const userIdInput = decodedText;
const analyzeBtn = document.getElementById("button-analyze-and-time"); // زر جديد

analyzeBtn.addEventListener("click", function() {
  const userId = decodedText.trim();
  if (userId) {
    getUserById(userId);
  } else {
    results.textContent = "⚠️ المرجو إدخال معرف المستخدم";
  }
});

function getUserById(userId) {
  const dbRef = ref(database);
  get(child(dbRef, 'users/' + userId))
    .then((snapshot) => {
      if (snapshot.exists()) {
        const user = snapshot.val();
        results.innerHTML = (user.input);
      } else {
        results.textContent = "Server error. Please try again later."
;
      }
    })
    .catch((error) => {
      console.error(error);
      results.textContent = "❌ حدث خطأ، تحقق من Console";
    });
}
