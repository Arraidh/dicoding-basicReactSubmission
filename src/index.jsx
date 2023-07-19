import React from "react";
import { createRoot } from "react-dom/client";
// import header from "./components/header";
import NoteApp from "./NoteApp";

import "./styles/style.css";

// const element = header;

const root = createRoot(document.getElementById("root"));
root.render(<NoteApp />);
