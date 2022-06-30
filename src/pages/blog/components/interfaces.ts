export interface KeyValuePair {
  name: string;
  value: number;
}

export interface ReportData {
  month: string;
  year: number;
  investments: KeyValuePair[];
  countries: KeyValuePair[];
}
