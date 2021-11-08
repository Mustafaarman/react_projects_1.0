import React from "react";
import Header from "./Header";
import Note from "./Note";
          import Footer from "./Footer";
s
const customappdesign = {
    backgoundColor: "#F5BA13",
    height: "100%",
    margin: "0%"
}



function App() {
    return (
        <div className="appdiv" style={customappdesign}>
            <Header />
            <Note title="This is prop tittle" body="This is prop body" />
            <Footer />

        </div>
    );
}

export default App;