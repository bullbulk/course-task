import Header from "./Header";
import Footer from "./Footer"
import Body from "./Body";

function App() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Header/>
            <Body/>
            <Footer/>
        </div>
    );
}

export default App;
