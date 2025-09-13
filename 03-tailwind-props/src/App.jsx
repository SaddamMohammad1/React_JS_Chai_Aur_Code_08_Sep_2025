import './App.css'
import Card from './components/Card'

function App() {

  const cards = [
    {
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=600&auto=format&fit=crop",
      title: "Card One",
      description: "This is the first card description.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=600&auto=format&fit=crop",
      title: "Card Two",
      description: "This is the second card description.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop",
      title: "Card Three",
      description: "This is the third card description.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Heading */}
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Props Feature & Tailwind Inject with React</h1>


      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  )
}

export default App
