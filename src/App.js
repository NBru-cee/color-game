import Form from "./Form";
import Box from "./Box";
import { useState } from "react";
function App() {
    const [color, setColor] = useState("");
    const [hex, setHex] = useState("");
    const [dark, setDark] = useState(true);
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <Box color={color} hex={hex} dark={dark} />
            <Form
                color={color}
                setColor={setColor}
                setHex={setHex}
                dark={dark}
                setDark={setDark}
            />
        </div>
    );
}

export default App;
