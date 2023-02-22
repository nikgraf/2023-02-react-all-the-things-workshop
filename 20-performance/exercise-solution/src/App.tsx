import { useState } from "react";
import Header from "./Header";
import TextArea from "./TextArea";

function App() {
  const [text, setText] = useState("");
  return (
    <div>
      <Header />
      <TextArea
        value={text}
        onChange={(value: string) => {
          setText(value);
        }}
      />
    </div>
  );
}

export default App;
