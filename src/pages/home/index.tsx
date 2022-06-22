import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";

import HomeComponent from "./home-component";
import { LanguageContext } from "../../providers/context";
import { ResultQuery, searchByQueryAsync } from "../../api";
import { debounce } from "lodash";

export default function Component() {
  const initialValue = 146000000;
  const [counter, setCounter] = useState(initialValue);
  const [query, setQuery] = useState("");
  const [data, setData] = useState<ResultQuery[]>([]);

  const onSearch = (q: string) => { 
    setQuery(q) 
    console.log(`called with ${q}`);
  };

  const router = useRouter();
  const onSearchValueSelected = (q: string) => router.push(`/search/${q}`);

  // useEffect(() => {
  //   const subscription = interval(5000)
  //     .pipe(tap((value) => console.log(value + 1)))
  //     .subscribe((value) => setCounter(initialValue + (value + 1)));
  //   return () => subscription.unsubscribe();
  // }, []);

  useEffect(() => {
    async function fetchData() {
      const data = await searchByQueryAsync(query);
      setData(data);
    }
    if (query.length > 0) fetchData();
  }, [query]);

  const language = useContext(LanguageContext);

  return (
    <HomeComponent
      {...{
        counter,
        onSearch: debounce(onSearch, 10),
        onSearchValueSelected,
        language,
        data,
      }}
    />
  );
}
