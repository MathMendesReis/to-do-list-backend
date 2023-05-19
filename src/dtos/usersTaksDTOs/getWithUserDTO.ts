export interface getWithUserOutputDTO {
  id: string;
  title: string;
  description:string;
  created_at:string; 
  status:number;
  responsibles: [
    {
      id: string;
      name: string;
      email: string;
      password: string;
    }
  ];
}
