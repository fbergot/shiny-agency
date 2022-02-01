import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Survey from "./pages/Survey";
import Header from "./components/Header";
import Error from "./components/Error";
import Results from "./pages/Results";
import Freelances from "./pages/Freelances";
import Footer from "./components/Footer";
import { SurveyProvider, ThemeProvider } from "./utils/context";
import GlobalStyle from "./utils/style/GlobalStyle";

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <ThemeProvider>
                <SurveyProvider>
                    <GlobalStyle />
                    <Header />
                    <main>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/survey/:questionNumber" element={<Survey />} />
                            <Route path="/results" element={<Results />} />
                            <Route path="/freelances" element={<Freelances />} />
                            <Route path="*" element={<Error />} />
                        </Routes>
                    </main>
                    <Footer />
                </SurveyProvider>
            </ThemeProvider>
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
);
