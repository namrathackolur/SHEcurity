function navigateTo(section) {
  const content = document.getElementById('content');

  switch (section) {
    case 'home':
      content.innerHTML = \`<h2>Welcome to Femisy</h2><p>Your hub for health, safety, and empowerment!</p>\`;
      break;

    case 'about':
      content.innerHTML = \`
        <h2>About Us</h2>
        <p>Welcome to Femisy, your trusted platform dedicated to empowering women by prioritizing security, safety, and good health...</p>
        <p>Our health section offers valuable information on fitness, exercises, and nutrition...</p>
        <p>In our Safety and Security section, you will find essential safety tips and resources...</p>
        <p>Femisy also fosters community and connection through our chat section...</p>
        <p>Our Virtual Skill Swap Platform allows you to exchange skills and services...</p>
        <p><strong>Contact us:</strong> Phone: 1111111111 | Email: abc@gmail.com</p>
      \`;
      break;

    case 'health':
      content.innerHTML = \`
        <h2>Health & Fitness</h2>

        <h3>Cycle Tracker</h3>
        <input type="date" id="periodStart" />
        <button onclick="predictCycle()">Predict Next Cycle</button>
        <p id="cycleResult"></p>

        <h3>Mood Quiz</h3>
        <p>How are you feeling today?</p>
        <select id="mood">
          <option value="happy">Happy</option>
          <option value="sad">Sad</option>
          <option value="stressed">Stressed</option>
          <option value="energetic">Energetic</option>
        </select>
        <button onclick="suggestMoodTip()">Get Tip</button>
        <p id="moodTip"></p>

        <h3>Nutrition Plan</h3>
        <ul>
          <li>Iron-rich food: Spinach, beans, tofu</li>
          <li>Hydration: Drink 2-3L of water daily</li>
          <li>Snack: Nuts, seeds, dark chocolate</li>
        </ul>
      \`;
      break;

    case 'safety':
      content.innerHTML = \`
        <h2>Safety & Security</h2>
        <button onclick="alert('Emergency Contacted!')">Emergency SOS</button>
        <h3>Important Emergency Numbers</h3>
        <ul>
          <li>Police: 100</li>
          <li>Women Helpline: 1091</li>
          <li>Ambulance: 108</li>
          <li>Fire: 101</li>
        </ul>
        <p><a href="https://www.safetipin.com/" target="_blank">Find Safe Locations</a></p>
        <p><a href="https://play.google.com/store/apps/details?id=com.safety.app" target="_blank">Download Safety Apps</a></p>
      \`;
      break;

    case 'skill':
      content.innerHTML = \`
        <h2>Skill House</h2>
        <h3>Free Courses</h3>
        <ul>
          <li><a href="https://www.coursera.org" target="_blank">Coursera</a></li>
          <li><a href="https://www.udemy.com" target="_blank">Udemy</a></li>
        </ul>

        <h3>Skill Exchange</h3>
        <form onsubmit="event.preventDefault(); alert('Skill submitted!');">
          <input type="text" placeholder="What can you teach?" required />
          <input type="text" placeholder="What do you want to learn?" required />
          <button type="submit">Submit</button>
        </form>
      \`;
      break;

    default:
      content.innerHTML = \`<p>Section not found.</p>\`;
  }
}

function predictCycle() {
  const start = document.getElementById('periodStart').value;
  if (!start) {
    alert("Please select a start date.");
    return;
  }
  const startDate = new Date(start);
  const nextCycle = new Date(startDate.setDate(startDate.getDate() + 28));
  document.getElementById('cycleResult').innerText = \`Estimated next cycle: \${nextCycle.toDateString()}\`;
}

function suggestMoodTip() {
  const mood = document.getElementById('mood').value;
  const tips = {
    happy: "Stay positive and share your joy!",
    sad: "Take time to rest, listen to music, or talk to someone.",
    stressed: "Try deep breathing or a short walk.",
    energetic: "Use your energy to learn something new today!"
  };
  document.getElementById('moodTip').innerText = tips[mood];
}

function toggleChatbot() {
  const bot = document.getElementById('chatbot-container');
  bot.style.display = (bot.style.display === "block") ? "none" : "block";
}
