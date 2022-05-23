import { LinearProgress } from "@mui/material";

interface ContentProps {
  children?: React.ReactNode;
  isLoading: boolean;
  isError: any;
}

export default function ContentLoader(props: ContentProps) {
  const { children, isLoading, isError } = props;

  if (isLoading) {
    return <LinearProgress />;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return <div>{children}</div>;
}
