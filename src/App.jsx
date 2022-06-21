import React from 'react';
import {Helmet} from "react-helmet";

const App = ({ initialText }) => {
  const [text, setText] = React.useState(initialText);

  const handleTextChange = () => {
    setText('changed in the browser!');
  };

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Title</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <p>{text}</p>
      <button onClick={handleTextChange}>change text</button>
    </div>
  );
};

export default App;
