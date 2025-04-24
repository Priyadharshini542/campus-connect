fetch("https://api-inference.huggingface.co/models/j-hartmann/emotion-english-distilroberta-base", {
    method: "POST",
    headers: {
      "Authorization": "Bearer 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",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ inputs: "I am feeling overwhelmed with exams." })
  })
  .then(res => res.json())
  .then(console.log)
  .catch(console.error);
  