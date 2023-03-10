export interface ListItem {
  title: string;
  id: number;
}

const analytic: ListItem[] = [
  {
    title: 'Perform Login',
    id: 0
  },
  {
    title: 'Perform Logout',
    id: 1
  },
  {
    title: 'Set First Name',
    id: 2
  },
  {
    title: 'Set Second Name',
    id: 3
  },
  {
    title: 'Set User Email',
    id: 4
  },
  {
    title: 'Set User Hashed Email',
    id: 5
  },
  {
    title: 'Set User Phone',
    id: 6
  },
  {
    title: 'Set User Hashed Phone',
    id: 7
  },
  {
    title: 'Set User Location',
    id: 8
  }
];

const event: ListItem[] = [
  {
    title: 'Set Screen Name',
    id: 0
  },
  {
    title: 'Set Event Name',
    id: 1
  }
];

export const getAnalytics = () => analytic;

export const getAnalytic = (id: number) => analytic.find(m => m.id === id);

export const getEvents = () => event;
  
export const getEvent = (id: number) => event.find(m => m.id === id);