import { NavLink } from 'react-router-dom';

function Home() {
  return (
    <main
      className="min-h-screen w-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=1920&q=80)",
      }}
    >
      <div className="min-h-screen w-full bg-black bg-opacity-40 flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-white md:max-w-3xl mx-auto mb-6 leading-tight">
          Fresh Styles for <span className="text-blue-300">Him</span> &amp;{' '}
          <span className="text-pink-300">Her</span>
        </h1>
        <p className="text-lg text-white/90 md:max-w-xl mx-auto mb-8">
          Discover our latest collection of trendy wear for boys and girls. Quality fabrics, vibrant colors, and comfortable fits await you.
        </p>
        <NavLink
          to="/clothes"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md shadow hover:bg-blue-700 transition-colors"
        >
          Shop Now
        </NavLink>
      </div>
    </main>
  );
}

export default Home;