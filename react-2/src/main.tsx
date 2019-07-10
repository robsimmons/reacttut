import * as ReactDOM from "react-dom";
import * as React from "react";

import ApplyFunction from "./ApplyFunction";
import { square } from "./functions";

const elem = document.getElementById("main");
ReactDOM.render(<ApplyFunction action={square} />, elem);
