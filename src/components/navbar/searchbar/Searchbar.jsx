import { useState } from 'react';
import useDebounce from './hooks/useDebounce';
import styles from './SearchBar.module.css';

const SearchBar = ({ fetchData, setResult, suggestionKey }) => {
  const [value, setValue] = useState(''); // Value of the search bar
  const [suggestions, setSuggestions] = useState([]); // Store for the suggestions
  const [hideSuggestions, setHideSuggestions] = useState(true); //Flag for hiding / showing suggestions

  const findResult = (value) => {
    //Retrieves result from the suggestions given a value
    setResult(
      suggestions.find((suggestion) => suggestion[suggestionKey] === value)
    );
  };

  useDebounce(
    async () => {
      //fetches data with debounce delay of 1000ms
      try {
        const suggestions = await fetchData(value);
        setSuggestions(suggestions || []);
      } catch (error) {
        console.log(error);
      }
    },
    1000,
    [value]
  );

  return (
    <>
      <div className={styles.container}>
        <input
          onFocus={() => setHideSuggestions(false)}
          onBlur={async () => {
            setTimeout(() => {
              setHideSuggestions(true);
            }, 200);
          }}
          type="text"
          className={styles.textbox}
          placeholder="Search data..."
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <div
          className={`${styles.suggestions} ${
            hideSuggestions && styles.hidden
          }`}
        >
          {suggestions.map((suggestion) => (
            <div
              className={styles.suggestion}
              onClick={() => findResult(suggestion[suggestionKey])}
            >
              {suggestion[suggestionKey]}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchBar;