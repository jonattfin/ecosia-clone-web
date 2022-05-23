export interface IProject {
  id: string;
  name: string;
  scope: string;
  image: string;
  desc: string;
}

export interface IProjectDetails {
  id: string;
  name: string;
  scope: string;
  image: string;
  desc: string;
  tags: any[];
}

export interface INews {
  id: string;
  name: string;
  image: string;
  desc: string;
}

export interface IReport {
  id: string;
  name: string;
  country: string;
  image: string;
  desc: string;
}

export interface IApiProjects {
  data: IProject[],
  isLoading: boolean,
  isError: any
}

export interface IApiProject {
  data: IProjectDetails,
  isLoading: boolean,
  isError: any
}

export interface IApiNews {
  data: INews[],
  isLoading: boolean,
  isError: any
}

export interface IApiReports {
  data: IReport[],
  isLoading: boolean,
  isError: any
}
