export interface CompanyValue {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export interface Mission {
  statement: string;
  description: string;
  target?: string;
}

export interface Purpose {
  statement: string;
  description: string;
}
