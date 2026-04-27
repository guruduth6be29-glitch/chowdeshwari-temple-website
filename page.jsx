export default function ChowdeshwariTempleWebsite() {
  return (
    <div className="min-h-screen bg-orange-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-200 to-yellow-100 py-16 px-6 text-center shadow-sm">
        <h1 className="text-5xl font-bold text-orange-900 mb-4">Chowdeshwari Temple</h1>
        <p className="text-lg max-w-2xl mx-auto">
          A sacred place of devotion and blessings in Shrirampuram, Bangalore.
        </p>
      </section>

      {/* About Section */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-4">Temple Address</h2>
          <p>
            1st Cross, 7th Main,<br />
            Shrirampuram, Bangalore – 560021
          </p>
          <p className="mt-4">
            <strong>Contact:</strong> 9845128868
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-4">Temple Timings</h2>
          <p><strong>Morning:</strong> 6:00 AM – 12:00 PM</p>
          <p className="mt-2"><strong>Evening:</strong> 6:00 PM – 9:00 PM</p>
        </div>
      </section>

      {/* Sevas Section */}
      <section className="bg-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Poojas & Sevas</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-2xl shadow-md p-6 bg-orange-50">
              <h3 className="font-semibold text-lg">Abhishekam</h3>
              <p className="mt-2">₹300</p>
            </div>

            <div className="rounded-2xl shadow-md p-6 bg-orange-50">
              <h3 className="font-semibold text-lg">Saree Offering</h3>
              <p className="mt-2">Devotees can offer saree to the Goddess.</p>
            </div>

            <div className="rounded-2xl shadow-md p-6 bg-orange-50">
              <h3 className="font-semibold text-lg">Annadanam</h3>
              <p className="mt-2">Contribute towards sacred food donation.</p>
            </div>

            <div className="rounded-2xl shadow-md p-6 bg-orange-50">
              <h3 className="font-semibold text-lg">Dasara Alankara</h3>
              <p className="mt-2">Special October festival decoration booking available.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Festival Section */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="bg-yellow-50 rounded-2xl shadow-md p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Special Festival</h2>
          <p className="text-lg">
            Dasara celebrations are conducted grandly every October with
            special Alankara bookings for devotees.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-orange-900 text-white text-center py-6 mt-8">
        <p>© 2026 Chowdeshwari Temple | Welcome All Devotees</p>
      </footer>
    </div>
  );
}
