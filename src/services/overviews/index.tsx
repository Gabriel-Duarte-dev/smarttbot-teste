import {api} from '../api';

type PapersDTO = {
    name: string;
    trasactions: number;
}

export type OverviewsDTO = {
    moviment_summary: number;
    transactions: string;
    open_positions: number;
    papers: PapersDTO[];
}

const getOverview = async () => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        mode: 1,
        limit: '10',
      },
    };
  
    const {data} = await api.get('/robot/overview', config);
    return data;
  };
  
  export {getOverview};