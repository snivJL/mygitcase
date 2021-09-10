export interface Owner {
  login: string;
  id: number;
  avatar_url: string;
  url: string;
  followers_url: string;
  following_url: string;
  repos_url: string;
}
interface IObjectKeys {
  [key: string]: string | number | boolean | Owner;
}

export default interface Repos extends IObjectKeys {
  id: number;
  name: string;
  full_name: string;
  private: boolean;
  owner: Owner;
  html_url: string;
  description: string;
  url: string;
  created_at: string;
  updated_at: string;
  clone_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
}
