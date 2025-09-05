let decodedText = "";
    function analyze() {
      const morseInput = document.getElementById('input').value.trim();

      const morseToTextMap = {
        '.----': '1', '..---': '2', '...--': '3', '....-': '4', '.....': '5',
        '-....': '6', '--...': '7', '---..': '8', '----.': '9', '-----': '0',
      };

      let words = morseInput.split(" ");

      for (let code of words) {
        if (morseToTextMap[code]) {
          decodedText += morseToTextMap[code];
        }
        else if (morseInput.trim() === "") {
            document.getElementById("result").innerHTML = "Data entry is required to complete the process.";
        }
        else {
          decodedText += "#"; 
        }
      }

      console.log(decodedText)
      window.analyze = analyze;
    }

const results = document.getElementById("result");
const analyzeBtn = document.getElementById("button-analyze-and-time"); 

analyzeBtn.addEventListener("click", function() {
  const userId = decodedText.trim();
  if (userId) {
    getUserById(userId);
  } else {
    results.textContent = "Data entry is required to complete the process.";
  }
});

function getUserById(userId) {
  const dbRef = ref(database);
  get(child(dbRef, 'users/' + userId))
    .then((snapshot) => {
      if (snapshot.exists()) {
        const user = snapshot.val();
        results.innerHTML = `<strong></strong> ${user.input}`;
      } else {
        results.textContent = "Server error. Please try again later.";
      }
    })
    .catch((error) => {
      console.error(error);
      results.textContent = "❌ حدث خطأ، تحقق من Console";
    });
}
