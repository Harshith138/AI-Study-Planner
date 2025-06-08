function getSuggestions() {
  const topic = document.getElementById("topicInput").value.trim();
  const suggestionsDiv = document.getElementById("suggestions");

  if (!topic) {
    suggestionsDiv.innerHTML = "<p>Please enter a topic.</p>";
    return;
  }

  const tips = {
    java: [
      "Break down concepts like OOP, inheritance, polymorphism.",
      "Practice coding on platforms like HackerRank or LeetCode.",
      "Build small projects like a calculator or to-do list."
    ],
    calculus: [
      "Focus on limits, derivatives, and integrals.",
      "Watch YouTube videos (e.g., 3Blue1Brown visual explanations).",
      "Practice problems daily from your textbook."
    ],
    history: [
      "Create timelines to understand events chronologically.",
      "Summarize chapters in bullet points.",
      "Relate events to real-world scenarios to remember better."
    ]
  };

  const key = topic.toLowerCase();
  const selectedTips = tips[key] || [
    "Break down the topic into subtopics.",
    "Study with active recall and spaced repetition.",
    "Watch explainer videos for better understanding.",
    "Take short notes and quiz yourself."
  ];

  suggestionsDiv.innerHTML = `<h3>Tips for ${topic}:</h3><ul>` + selectedTips.map(t => `<li>${t}</li>`).join('') + "</ul>";
}
