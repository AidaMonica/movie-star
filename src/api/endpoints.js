import { OMDB_API_URL } from "../config/omdb-urls"

const TOP_MOVIES_ALL_TIME = ['tt0111161', 'tt0068646', 'tt0468569', 'tt0167260', 'tt0108052', 'tt0133093'];

const TOP_MOVIES_BY_YEAR = {
  2024: ['tt15239678', 'tt12037194', 'tt22022452', 'tt30321095', 'tt16426418', 'tt12584954'],
  2023: ['tt15398776', 'tt13238346', 'tt14230458', 'tt14849194', 'tt5537002', 'tt9603212'],
  2022: ['tt6710474', 'tt1745960', 'tt1877830', 'tt11813216', 'tt1630029', 'tt11138512'],
  2021: ['tt10872600', 'tt11131464', 'tt12361974', 'tt11389748', 'tt10366460', 'tt6467266'],
  2020: ['tt8503618', 'tt7146812', 'tt1051906', 'tt7504726', 'tt8544498', 'tt1502397'],
};

export function getMovieById(id) {
  const url = `${OMDB_API_URL}&i=${id}`
  return fetch(url);
}

export function getTopMovieIdsAllTime() {
  return TOP_MOVIES_ALL_TIME;
}

export function getTopMovieIdsByYear(year) {
  return TOP_MOVIES_BY_YEAR[year] || [];
}