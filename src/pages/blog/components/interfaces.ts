export interface KeyValuePair {
  name: string;
  value: number;
}

export interface ReportData {
  month: string;
  investments: KeyValuePair[];
  countries: KeyValuePair[];
}
