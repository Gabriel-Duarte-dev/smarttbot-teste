import {api} from '../api';

type PapersDTO = {
  robot_id: number;
  paper: string;
  position: number;
  type: number;
  paper_value: number;
  profit: number;
  id: string;
  created_at: string;
};

type MovimentationsDTO = {
  date: string;
  value: number;
};

export type RobotsDTO = {
  id: number;
  title: string;
  running: 0 | 1;
  updated_at: string;
  mode: 0 | 1;
  simulation: 0 | 1;
  stock_codes: string;
  strategy: string;
  initial_capital: number;
  number_trades: number;
  daily_balance: number;
  type: string;
  created_at: string;
  last_paper?: PapersDTO;
  movimentations: MovimentationsDTO[];
};

export type PostRobotsDTO = {
  title: string;
  mode: number;
  strategy_id: number;
  initial_capital: number;
  simulation: number;
  broker_id: number;
}

const getRobots = async () => {
  const {data} = await api.get('/robot');
  return data;
};

const postRobots = async (body: PostRobotsDTO) => {

  const {data} = await api.post('/robot', body);
  return data;
}

export {getRobots, postRobots};
