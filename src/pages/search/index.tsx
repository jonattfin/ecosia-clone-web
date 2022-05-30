import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import _ from "lodash";

import SearchComponent, { SearchProps } from "./search-component";

interface IndexSearchProps {
  incrementTreeCount: () => void;
}

interface ResultsState {
  totalEstimatedMatches: number;
  values: ResultQuery[];
}

interface ResultQuery {
  url: string;
  snippet: string;
  name: string;
}

export default function Component({ incrementTreeCount }: IndexSearchProps) {
  const router = useRouter();
  const { pid } = router.query;

  const [resultsObject, setResultsObject] = useState<ResultsState>({
    totalEstimatedMatches: 0,
    values: [],
  });

  const [progress, setProgress] = useState(false);

  const doSearch = (query: string) => {
    console.log(query);
    router.push(`/search/${query}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      setProgress(true);
      const data = await searchByQueryAsync(pid);
      setResultsObject({ values: data, totalEstimatedMatches: data.length });
      setProgress(false);
    };
    fetchData();

    incrementTreeCount();
  }, [pid]);

  const props: SearchProps = {
    query: (pid || "").toString(),
    resultsObject,
    doSearch,
    progress,
  };

  return <SearchComponent {...props} />;
}

function searchByQueryAsync(
  query: string | string[] | undefined
): Promise<ResultQuery[]> {
  return new Promise((resolve, _reject) => {
    setTimeout(() => {
      const max = _.random(50, 1000);

      const data = _.range(1, max).map((i: number) => {
        return {
          url: `https://${query}.com`,
          snippet: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
          name: `name ${i}`,
        };
      });
      resolve(data);
    }, 500);
  });
}
