export interface Post {
  data: Data[];
  links: Links;
  meta: Meta;
  pay_period_start: DateTimeFormat;
  pay_period_end: DateTimeFormat;
}

interface Data {
  id: number;
  employee_id: number;
  employee_name: string;
  project_id: number;
  project_name: string;
  task_id: number;
  task_name: string;
  description: string;
  start_time: DateTimeFormat;
  end_time: DateTimeFormat;
  duration: number;
  created_at: DateTimeFormat;
  updated_at: DateTimeFormat;
}

interface Links {
  first: string;
  last: string;
  prev: string;
  next: string;
}

interface Meta {
  current_page: number;
  from: number;
  last_page: number;
  path: string;
  per_page: number;
  to: number;
  total: string;
}
