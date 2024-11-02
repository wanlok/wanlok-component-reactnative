import {useState, useEffect, RefObject} from 'react';
import {RiveRef} from 'rive-react-native';

const useFetch = (urlString: string, riveRef: RefObject<RiveRef>) => {
  const [htmlString, setHtmlString] = useState<string>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>();
  useEffect(() => {
    const fetchHTMLString = async () => {
      try {
        const response = await fetch(urlString);
        if (!response.ok) {
          throw new Error('Error');
        }
        const result = await response.text();
        setHtmlString(result);
        riveRef.current?.play();
      } catch (error) {
        setError(`${error}`);
      } finally {
        setLoading(false);
      }
    };
    fetchHTMLString();
  }, [urlString]);
  return {htmlString, loading, error};
};

export default useFetch;
