export const mUrl = {
  toString: () => '/',
  local: {
    toString: () => '/local',
    game: {
      toString: () => '/local/game',
    },
    ranking: {
      toString: () => '/local/ranking',
    },
  },
};
