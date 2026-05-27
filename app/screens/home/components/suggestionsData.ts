import { SuggestionItem } from "./types";

export const suggestionsData: SuggestionItem[] = [
  {
    id: 1,
    title: 'Services',
    subtitle: 'Recommended\nin 12 days',
    image: require('../../../assets/images/home/serv.png'),
    backgroundColor: '#F3EEFF',
  },

  {
    id: 2,
    title: 'Insurance Expire',
    subtitle: 'Expires on',
    extra: '23 Oct 2026',
    image: require('../../../assets/images/home/sheild.png'),
    backgroundColor: '#FFF1F3',
  },

  {
    id: 3,
    title: 'Recommend',
    subtitle: 'Based on your\nPreference',
    image: require('../../../assets/images/home/recommend.png'),
    backgroundColor: '#F7EEFF',
  },
];