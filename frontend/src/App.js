import "./App.css";
import Header from "./sections/Header";
import Body from "./sections/Body";
import Footer from "./sections/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-950 text-gray-200">
      <Header />

      <main className="flex flex-col flex-grow">
        <Body />
      </main>

      <Footer />
     <ToastContainer
  position="top-right"
  autoClose={2500}
  theme="dark"
  toastStyle={{
    backgroundColor: "#111827",
    color: "#e5e7eb",
    border: "1px solid #374151",
  }}
/>
    </div>
  );
}

export default App;
