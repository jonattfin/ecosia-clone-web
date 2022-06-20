import { useState, useEffect, useContext } from "react";
import { interval, tap } from "rxjs";
import { useRouter } from "next/router";

import HomeComponent from "./home-component";
import { LanguageContext } from "../../providers/context";
import { fetchSearch } from "../../api";

export default function Component() {
  const initialValue = 146000000;
  const [counter, setCounter] = useState(initialValue);
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  const onSearch = (q: string) => setQuery(q);

  const router = useRouter();
  const onSearchValueSelected = (q: string) => router.push(`/search/${q}`);

  // useEffect(() => {
  //   const subscription = interval(5000)
  //     .pipe(tap((value) => console.log(value + 1)))
  //     .subscribe((value) => setCounter(initialValue + (value + 1)));
  //   return () => subscription.unsubscribe();
  // }, []);

  useEffect(() => {
    console.log(query);
    async function fetchData() {
      const data = await fetchSearch(query);
      setData(data);
    }
    if (query.length > 0) fetchData();
  }, [query]);

  const language = useContext(LanguageContext);

  return <HomeComponent {...{ counter, onSearch, onSearchValueSelected, language, data }} />;
}
