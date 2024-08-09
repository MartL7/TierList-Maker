interface Tier {
  id: string
  imagePresentation: string
  name: string
}

export const listTiers: Tier[] = [
  {
    id: 'tier-1',
    imagePresentation: '/img/tierLists/waifus-tier-image-presentation.webp',
    name: 'Anime'
  },

  {
    id: 'tier-2',
    imagePresentation: '/img/tierLists/marvel-tier-image-presentation.webp',
    name: 'Marvel'
  },

  {
    id: 'tier-3',
    imagePresentation: '/img/tierLists/futbolistas-tier-image-presentation.webp',
    name: 'Futbolistas'
  },

  {
    id: 'tier-4',
    imagePresentation: '/img/tierLists/games-tier-image-presentation.webp',
    name: 'VideoJuegos'
  }
]
