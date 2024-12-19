import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

// Lazy load pages
const HomePage = lazy(() => import("./pages/HomePage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const ProfilePage = lazy(() => import("./pages/ProfilePage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const WatchPage = lazy(() => import("./pages/WatchesPage"));
const GlassesPage = lazy(() => import("./pages/GlassesPage"));
const JewelryPage = lazy(() => import("./pages/JewelryPage"));

// Not Found Page Component
const NotFound = () => (
    <div className="text-center p-5">
        <h1 className="text-4xl font-bold mb-3">404 - Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
    </div>
);

const App = () => (
    <Provider store={store}>
        <Router>
            <Header />
            <Suspense fallback={<div className="text-center p-5">Loading...</div>}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/contacts" element={<ContactPage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/watch" element={<WatchPage />} />
                    <Route path="/glasses" element={<GlassesPage />} />
                    <Route path="/jewelry" element={<JewelryPage />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Suspense>
            <Footer />
        </Router>
    </Provider>
);

export default App;
