import Header from "./components/Header";
import HelloMessage from "./components/HelloMessage";
import Features from "./components/Features";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-gray-900">
      <Header />
      <main>
        <HelloMessage />
        <Features />
      </main>
      <Footer />
    </div>
  );
}
