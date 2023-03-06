export interface Action {
  actionName: string;
  id: number;
}

const actions: Action[] = [
  {
    actionName: 'Login',
    id: 0
  },
  {
    actionName: 'Track Event',
    id: 1
  }
];

export const getActions = () => actions;

export const getAction = (id: number) => actions.find(m => m.id === id);
