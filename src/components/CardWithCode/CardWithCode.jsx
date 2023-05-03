import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import './style.css'
import { darcula } from "react-syntax-highlighter/dist/cjs/styles/hljs";

export const CardWithCode = ({ codeString }) => {
  return (
    <div className="codecard">
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        customStyle={{
          padding: "10px",
          borderRadius: "10px",
        }}
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};
