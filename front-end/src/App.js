import { Dashboard, Header, Footer, Navigation } from "./sections";

function App() {
  return (
    <>
      <section>
        <Header />
      </section>
      <section>
        <Navigation />
      </section>
      <section>
        <Dashboard />
      </section>
      <section>
        <Footer />
      </section>
    </>
  );
}

export default App;
