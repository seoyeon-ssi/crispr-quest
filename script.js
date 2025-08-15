function checkAnswer(choice) {
  const result = document.getElementById("result");

  if (choice === 'A') {
    result.innerHTML = "✅ Correct! Cas9 cut at the mutation site. Sam is saved!";
  } else {
    result.innerHTML = "⚠️ Off-target effect! Hint: Guide RNA must bind near PAM.";
  }
}
