export interface FoodProps  {
    id: number;
    title: string;
    image: string;
    price: string;
    category: string;
    description: string;
   
  }

export interface Props{
  term?: any;
  onhandleChange?: any;
  
}

export interface ActionType {
  type: string;
  payload: any;
}


