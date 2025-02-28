import React from 'react';

interface LoaderProps {
  text?: string;
}

const Loader: React.FC<LoaderProps> = ({ text = "dëxplorer" }) => {
  return (
    <div className="loader_holder" id="loader_holder">
      <div id="loader" className="loader">
        <h2 id="loader-text" className="loader-text">
          {text.split("").map((letter, index) => (
            <span
              key={index}
              className="letter"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {letter}
            </span>
          ))}
        </h2>
      </div>
    </div>
  );
};

export default Loader;
