export interface RunEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  distance: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
}

export interface ClubStat {
  label: string;
  value: string;
}
