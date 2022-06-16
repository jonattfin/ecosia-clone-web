import { Pagination, Stack } from "@mui/material";
import { useState } from "react";

export interface SearchListProps {
  totalEstimatedMatches: number;
  values: Array<any>;
}

export default function Component({
  totalEstimatedMatches,
  values,
}: SearchListProps) {
  const [page, setPage] = useState(1);

  const data = showWindow(values, PAGE_SIZE, page);
  const numberOfPages = parseInt((values.length / PAGE_SIZE).toString(), 10);

  const handleChange = (_ev: any, value: number) => setPage(value);

  return (
    <section>
      <Stack spacing={2}>
        {data.map(({ url, snippet, name }, index) => (
          <div key={`index_${index}`}>
            <div>
              <a href={url} target="_blank" rel="noreferrer">
                {name}
              </a>
            </div>
            <div>
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

const PAGE_SIZE = 15;

function showWindow(data: Array<any>, pageSize: number, pageNumber = 1) {
  return data.filter((_v, index) => {
    return (
      index >= pageSize * (pageNumber - 1) && index < pageSize * pageNumber
    );
  });
}
