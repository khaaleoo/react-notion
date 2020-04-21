import * as React from "react";
import { highlight, languages } from "prismjs";
import "prismjs/components/prism-jsx";

const Code: React.FC<{ code: string; language: string }> = ({
  code,
  language = "javascript"
}) => {
  const prismLanguage =
    languages[language.toLowerCase()] || languages.javascript;

  return (
    <pre>
      <code
        className="notion-code"
        dangerouslySetInnerHTML={{
          __html: highlight(code, prismLanguage, language)
        }}
      />
    </pre>
  );
};

export default Code;
