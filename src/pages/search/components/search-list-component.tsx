import { Pagination, Stack } from "@mui/material";
import { useState } from "react";

import styles from "../search.module.scss";

interface SearchListProps {
  totalEstimatedMatches: number;
  values: Array<any>;
}

const pageSize = 15;

export default function Component({
  totalEstimatedMatches,
  values,
}: SearchListProps) {
  const [page, setPage] = useState(1);

  var data = showWindow(values, pageSize, page);
  const numberOfPages = parseInt((values.length / pageSize).toString(), 10);

  const handleChange = (ev: any, value: number) => setPage(value);

  return (
    <section className={styles["search-list-section"]}>
      <Stack spacing={2}>
        {data.map(({ url, snippet, name }, index) => (
          <div key={`index_${index}`}>
            <div className={styles["name"]}>
              <a href={url} target="_blank" rel="noreferrer">
                {name}
              </a>
            </div>
            <div className={styles["url"]}>
              <a href={url} target="_blank" rel="noreferrer">
                {url}
              </a>
            </div>
            <div>{snippet}</div>
          </div>
        ))}
      </Stack>
      <h5>{totalEstimatedMatches} results</h5>
      <div>
        <Pagination
          variant="outlined"
          color="primary"
          count={numberOfPages}
          page={page}
          onChange={handleChange}
        />
      </div>
    </section>
  );
}

function showWindow(data: Array<any>, pageSize: number, pageNumber = 1) {
  return data.filter((v, index) => {
    return (
      index >= pageSize * (pageNumber - 1) && index < pageSize * pageNumber
    );
  });
}
