import BeginBlock from "./components/BeginBlock/BeginBlock";
import Footer from "./components/Footer/Footer";
import Head from "./components/Head/Head";
import Header from "./components/Header/Header";
import KnowledgeBase from "./components/KnowledgeBase/KnowledgeBase";
import ReferencesBlock from "./components/ReferencesBlock/ReferencesBlock";
import Repetition from "./components/Repetition/Repetition";
import Tests from "./components/Tests/Tests";
function App() {
  return (
    <>
      <Header />
      <main>
        <Head />
        <KnowledgeBase/>
        <ReferencesBlock/>
        <Repetition/>
        <Tests/>
        <BeginBlock/>
      </main>
      <Footer/>
    </>
  );
}

export default App;
