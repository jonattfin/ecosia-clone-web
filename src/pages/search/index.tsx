import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { debounce } from "lodash";

import SearchComponent, { SearchProps } from "./search-component";
import { ResultQuery, searchByQueryAsync } from "../../api";

interface IndexSearchProps {
  incrementTreeCount: () => void;
}

interface ResultsState {
  totalEstimatedMatches: number;
  values: ResultQuery[];
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
      const data = await searchByQueryAsync(pid?.toString());
      setResultsObject({ values: data, totalEstimatedMatches: data.length });
      setProgress(false);
    };
    if (pid) {
      fetchData();
    }

    incrementTreeCount();
  }, [pid]);

  const props: SearchProps = {
    query: (pid || "").toString(),
    resultsObject,
    doSearch: debounce(doSearch, 200),
    progress,
  };

  return <SearchComponent {...props} />;
}
