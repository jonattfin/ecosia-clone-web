import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import useWebSocket, { ReadyState } from "react-use-websocket";
import { debounce } from "lodash";

import HomeComponent from "./home-component";
import { LanguageContext } from "../../providers/context";
import { ResultQuery, searchByQueryAsync, wssBaseUrl } from "../../api";

export default function Component() {
  const [counter, setCounter] = useState(1500);
  const [query, setQuery] = useState("");
  const [data, setData] = useState<ResultQuery[]>([]);

  const [socketUrl] = useState(wssBaseUrl);
  const { sendJsonMessage, lastMessage } = useWebSocket(socketUrl);

  const onSearch = (q: string) => {
    setQuery(q);
    console.log(`called with ${q}`);
  };

  const router = useRouter();
  const onSearchValueSelected = (q: string) => router.push(`/search/${q}`);

  useEffect(() => {
    if (!lastMessage) return;

    const { data } = lastMessage;
    const dataObj = JSON.parse(data);
    console.log(dataObj);
    setCounter(dataObj.data || 0);
  }, [lastMessage]);

  useEffect(() => {
    async function fetchData() {
      const data = await searchByQueryAsync(query);
      setData(data);
    }
    if (query.length > 0) fetchData();
  }, [query]);

  useEffect(() => {
    sendJsonMessage({ event: "events" });
  }, []);

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
