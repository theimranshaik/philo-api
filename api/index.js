// Sample data to power your mobile-first webapp
const philosophyData = [
  {
    id: 1,
    author: "Albert Camus",
    school: "Absurdism",
    quote: "The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion."
  },
  {
    id: 2,
    author: "Friedrich Nietzsche",
    school: "Existentialism / Nihilism",
    quote: "He who has a why to live for can bear almost any how."
  },
  {
    id: 3,
    author: "Marcus Aurelius",
    school: "Stoicism",
    quote: "You have power over your mind - not outside events. Realize this, and you will find strength."
  }
];

export default function handler(request, response) {
  // Enable CORS so your mobile webapp can fetch it from any domain
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', 'GET');
  response.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (request.method === 'OPTIONS') {
    return response.status(200).end();
  }

  // Return the philosophy data
  return response.status(200).json({
    success: true,
    data: philosophyData
  });
}

