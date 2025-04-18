import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Home from "./component/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import Detail from "./component/Detail";
import SearchByKeyword from "./component/SearchByKeyword";
import SearchByAvg from "./component/SearchByAvg";
import SearchByGender from "./component/SearchByGender";
import Introduction from "./component/Introduction";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        Trần Đăng Khoa
                    </Link>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/home">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/search-by-keyword">
                                    Search By Key Word
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/search-by-avg">
                                    Search By Avg
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/search-by-gender">
                                    Search By Gender
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="container mt-4">
                <Routes>
                    <Route path="/" element={<Introduction />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/detail/:id" element={<Detail />} />
                    <Route path="/search-by-keyword" element={<SearchByKeyword />} />
                    <Route path="/search-by-avg" element={<SearchByAvg />} />
                    <Route path="/search-by-gender" element={<SearchByGender />} />
                </Routes>
            </div>
        </BrowserRouter>
    </React.StrictMode>
);

reportWebVitals();
