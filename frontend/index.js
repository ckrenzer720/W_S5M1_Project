function moduleProject1() {
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  // 👇 WORK WORK BELOW THIS LINE 👇

  // 👉 TASK 1 - Add a "widget" class name to widgets so CSS kicks in
  //  ✨ add your code here
  const widgetTag = document.querySelectorAll('section div');
  widgetTag.forEach((widget, idx) => {
    widget.classList.add('widget');
    widget.setAttribute('tabindex', idx + 1)
  });

  // 👉 TASK 2 - Build a "Quote of the Day" widget
  //  ✨ add your code here
  const randomIdx = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIdx];
  const quoteDiv = document.createElement('div');
  const quoteText = randomQuote.quote;
  quoteDiv.textContent = quoteText;
  const widget1 = document.querySelector(".quoteoftheday");
  widget1.appendChild(quoteDiv);

  const authorDate = document.createElement('div');
  const { author, date } = randomQuote;
  authorDate.textContent = `${author} in ${date || "an unknown date"}`;
  widget1.appendChild(authorDate);

  // 👉 TASK 3 - Build a "Corporate Speak" widget
  //  ✨ add your code here
  const randomVerb1 = Math.floor(Math.random() * verbs.length);
  const randomVerb2 = Math.floor(Math.random() * verbs.length);

  const randomAdverb1 = Math.floor(Math.random() * adverbs.length);
  const randomAdverb2 = Math.floor(Math.random() * adverbs.length);

  const randomNoun1 = Math.floor(Math.random() * nouns.length);
  const randomNoun2 = Math.floor(Math.random() * nouns.length);

  const corporateSpeak = ` We need to ${verbs[randomVerb1]} our ${nouns[randomNoun1]} ${adverbs[randomAdverb1]}
    in order to ${verbs[randomVerb2]} our ${nouns[randomNoun2]} ${adverbs[randomAdverb2]}.`;
    // console.log(corporateSpeak);

  const speak = document.createElement('p');
  speak.textContent = corporateSpeak;
  const corporateWidget = document.querySelector('.corporatespeak');
  corporateWidget.appendChild(speak);

  // 👉 TASK 4 - Build a "Countdown" widget
  //  ✨ add your code here
  const countdownWidget = document.querySelector('.countdown');
  const countdownElement = document.createElement('p');
  let count = 5;
  countdownElement.textContent = `T-minus ${count}...`
  countdownWidget.appendChild(countdownElement);
  const id = setInterval(() => {
    if (count === 1) {
      countdownElement.textContent = "Liftoff! 🚀"
      clearInterval(id)
    } else {
      countdownElement.textContent = `T-minus ${--count}...`
    }
  }, 1000)


  // 👉 TASK 5 - Build a "Friends" widget
  //  ✨ add your code here
  const randomPerson = people[Math.floor(Math.random() * people.length)];
  console.log(randomPerson);
  const personPara = document.createElement('p');
  document.querySelector('.friends').appendChild(personPara)
  const year = randomPerson.dateOfBirth.split('-')[0];
  let friendsSentence = `${randomPerson.fname} ${randomPerson.lname} was born in ${year} and `

  if (!randomPerson.friends.length) {
    friendsSentence += 'has no friends'
  } else {
    // friendsSentence += 'is friends with others'
    for ( let idx = 0; idx < randomPerson.friends.length; idx++) {
      const friendID = randomPerson.friends[idx]
      const friend = people.find(p => p.id === friendID);
      const fullName = `${friend.fname} ${friend.lname}`
      console.log(fullName);
      let isLastIdx = idx === randomPerson.friends.length - 1
      let isNextToLastIdx = idx === randomPerson.friends.length - 2
      if (isLastIdx) {
        friendsSentence += `${fullName}.`
      } else if (isNextToLastIdx) {
        friendsSentence += `${fullName} and `
      } else {
        friendsSentence += `${fullName}, `
      }
    }
  }
  personPara.textContent = friendsSentence
  // 👉 TASK 6 - Make it so user can tab through the widgets
  //  ✨ add your code here

  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject1 }
else moduleProject1()
