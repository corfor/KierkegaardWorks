export interface Publication {
  id:number;
  title:string;
  date:Date;
  author:string;
  subtitle?:string;
  type?:string;
  publishedIn?:string;
}
