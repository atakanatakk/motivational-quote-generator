const quotes = [
	{ text: "The only way to do great work is to love what you do.", emoticon: "❤️" },
	{ text: "The best time to plant a tree was 20 years ago. The second best time is now.", emoticon: "🌳" },
	{ text: "Your time is limited, don’t waste it living someone else’s life.", emoticon: "⏳" },
	{ text: "Not everything that is faced can be changed, but nothing can be changed until it is faced.", emoticon: "🔄" },
	{ text: "Hardships often prepare ordinary people for an extraordinary destiny.", emoticon: "🌟" },
	{ text: "Success is not the key to happiness. Happiness is the key to success.", emoticon: "🔑" },
	{ text: "The only limit to our realization of tomorrow is our doubts of today.", emoticon: "🤔" },
	{ text: "The future belongs to those who believe in the beauty of their dreams.", emoticon: "🌠" },
	{ text: "The best way to predict the future is to create it.", emoticon: "🛠️" },
	{ text: "Believe you can and you’re halfway there.", emoticon: "🧗" },
	{ text: "Don't watch the clock; do what it does. Keep going.", emoticon: "⏰" },
	{ text: "Success is walking from failure to failure with no loss of enthusiasm.", emoticon: "🚶" },
	{ text: "The only place where success comes before work is in the dictionary.", emoticon: "📖" },
	{ text: "Don’t be afraid to give up the good to go for the great.", emoticon: "🚀" },
	{ text: "I find that the harder I work, the more luck I seem to have.", emoticon: "🍀" },
	{ text: "You miss 100% of the shots you don’t take.", emoticon: "🏀" },
	{ text: "If you are not willing to risk the usual, you will have to settle for the ordinary.", emoticon: "🌌" },
	{ text: "Success is not how high you have climbed, but how you make a positive difference to the world.", emoticon: "🌍" },
	{ text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", emoticon: "💪" },
	{ text: "The only way to achieve the impossible is to believe it is possible.", emoticon: "🌈" },
	{ text: "Your limitation—it’s only your imagination.", emoticon: "💭" },
	{ text: "Push yourself, because no one else is going to do it for you.", emoticon: "🏋️" },
	{ text: "Great things never come from comfort zones.", emoticon: "🔥" },
	{ text: "Dream it. Wish it. Do it.", emoticon: "🌠" },
	{ text: "Success doesn’t just find you. You have to go out and get it.", emoticon: "🏃" },
	{ text: "The harder you work for something, the greater you’ll feel when you achieve it.", emoticon: "🏆" },
	{ text: "Don’t stop when you’re tired. Stop when you’re done.", emoticon: "🛑" },
	{ text: "Do something today that your future self will thank you for.", emoticon: "🤗" },
	{ text: "It’s going to be hard, but hard does not mean impossible.", emoticon: "💪" },
	{ text: "Don’t wait for opportunity. Create it.", emoticon: "🔨" },
	{ text: "Sometimes we’re tested not to show our weaknesses, but to discover our strengths.", emoticon: "🧠" },
	{ text: "The key to success is to focus on goals, not obstacles.", emoticon: "🎯" },
	{ text: "Dream bigger. Do bigger.", emoticon: "✨" },
	{ text: "You don’t have to be great to start, but you have to start to be great.", emoticon: "🚀" }
    ];
    
    document.getElementById('generate-quote').addEventListener('click', generateQuote);
    
    function generateQuote() {
	const randomIndex = Math.floor(Math.random() * quotes.length);
	const quote = quotes[randomIndex];
    
	document.getElementById('quote').innerText = quote.text;
	document.getElementById('emoticon').innerText = quote.emoticon;
    }
    