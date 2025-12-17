import CategoriesGrid from '@/components/CategoriesGrid';
import CategoriesHero from '@/components/CategoriesHero';
import NomineeSection from '@/components/NomineeSection';

const allCategories = [
  {
    id: 'bestartdirection',
    title: 'Best Art Direction',
    description:
      'The Canadian Game Award for Best Art Direction recognizes the achievement for an art direction in games. Judges will be looking at the quality of the visual and its consistency across all aspects of game production. They will look at the visual signature, its uniqueness, the animation, rendering and impact on storytelling, as well as its high level of immersion in the game environment or story.',
    nominees: [
      {
        id: '1',
        title: 'Lil Guardsman',
        studio: 'Hilltop Studios',
        imageUrl:
          'https://framerusercontent.com/images/EmOAPyy74AQeagXuf620wp1Qw.webp',
        link: 'https://store.steampowered.com/app/1924360/Lil_Guardsman/',
        isWinner: false,
      },
      {
        id: '2',
        title: 'Été',
        studio: 'Impossible',
        imageUrl:
          'https://framerusercontent.com/images/tVZfzyrB838sBQGQlm8JUZ4jlU.webp',
        link: 'https://store.steampowered.com/app/1065070/t/',
        isWinner: false,
      },
      {
        id: '3',
        title: 'Dragon Age: The Veilguard',
        studio: 'BioWare',
        imageUrl:
          'https://framerusercontent.com/images/58nVxcI9XUFNFgzXZKoQGhX5NQ.jpg',
        link: 'https://store.steampowered.com/agecheck/app/1845910/',
        isWinner: false,
      },
      {
        id: '4',
        title: 'WINNER - 1000xRESIST',
        imageUrl:
          'https://framerusercontent.com/images/kSY2Ls1CpfmHIccncV77g6G8.jpg',
        link: 'https://store.steampowered.com/app/1675830/1000xRESIST/',
        isWinner: true,
      },
      {
        id: '5',
        title: 'Venture to the Vile',
        studio: 'Cut to Bits',
        imageUrl:
          'https://framerusercontent.com/images/7pdJpCtGMn2TFeYMS5iUM6LfeNg.jpg',
        link: 'https://store.steampowered.com/app/2153750/Venture_to_the_Vile/',
        isWinner: false,
      },
    ],
  },
  {
    id: 'bestgamedesign',
    title: 'Best Game Design',
    description:
      'The Canadian Game Award for Best Game Design recognizes the achievement for game design in a video game. It looks at its innovative side, its features depending on the platform, the experience it offers as well as its level of engagement in a genre, or if it defines a new genre/new standards.',
    nominees: [
      {
        id: '1',
        title: 'Balatro',
        studio: 'LocalThunk',
        imageUrl:
          'https://framerusercontent.com/images/qBq5kM8Jw2SNLnqhhX5BPPkmS30.jpeg',
        link: 'https://store.steampowered.com/app/2379780/Balatro/',
        isWinner: false,
      },
      {
        id: '2',
        title: 'Été',
        studio: 'Impossible',
        imageUrl:
          'https://framerusercontent.com/images/tVZfzyrB838sBQGQlm8JUZ4jlU.webp',
        link: 'https://store.steampowered.com/app/1065070/t/',
        isWinner: false,
      },
      {
        id: '3',
        title: 'WINNER - Dragon Age: The Veilguard',
        studio: 'BioWare',
        imageUrl:
          'https://framerusercontent.com/images/58nVxcI9XUFNFgzXZKoQGhX5NQ.jpg',
        link: 'https://store.steampowered.com/agecheck/app/1845910/',
        isWinner: true,
      },
      {
        id: '4',
        title: 'Beastieball',
        studio: 'Wishes Unlimited',
        imageUrl:
          'https://framerusercontent.com/images/srdhmkMJaMJZewKTEbDfYzW9ho.jpg',
        link: 'https://store.steampowered.com/app/1864950/Beastieball/',
        isWinner: false,
      },
      {
        id: '5',
        title: 'The Outlast Trials',
        studio: 'Red Barrels',
        imageUrl:
          'https://framerusercontent.com/images/qUC7vhHQtMPH10s2Gd43Fpjfc.jpg',
        link: 'https://store.steampowered.com/app/1304930/The_Outlast_Trials/',
        isWinner: false,
      },
    ],
  },
  {
    id: 'bestscore',
    title: 'Best Score/Soundtrack',
    description:
      'The Canadian Game Award for Best Score/Soundtrack recognizes the achievement for a game soundtrack. It has to present a high quality of integration within the game as well as its impact on the game experience.',
    nominees: [
      {
        id: '1',
        title: 'Lil Guardsman',
        studio: 'Hilltop Studios',
        imageUrl:
          'https://framerusercontent.com/images/EmOAPyy74AQeagXuf620wp1Qw.webp',
        link: 'https://store.steampowered.com/app/1924360/Lil_Guardsman/',
        isWinner: false,
      },
      {
        id: '2',
        title: 'Été',
        studio: 'Impossible',
        imageUrl:
          'https://framerusercontent.com/images/tVZfzyrB838sBQGQlm8JUZ4jlU.webp',
        link: 'https://store.steampowered.com/app/1065070/t/',
        isWinner: false,
      },
      {
        id: '3',
        title: 'Dragon Age: The Veilguard',
        studio: 'BioWare',
        imageUrl:
          'https://framerusercontent.com/images/58nVxcI9XUFNFgzXZKoQGhX5NQ.jpg',
        link: 'https://store.steampowered.com/agecheck/app/1845910/',
        isWinner: false,
      },
      {
        id: '4',
        title: '1000xRESIST',
        studio: 'Sunset Visitor',
        imageUrl:
          'https://framerusercontent.com/images/kSY2Ls1CpfmHIccncV77g6G8.jpg',
        link: 'https://store.steampowered.com/app/1675830/1000xRESIST/',
        isWinner: false,
      },
      {
        id: '5',
        title: 'Spirit City: Lofi Sessions (Homework Radio)',
        studio: 'Mooncube Games',
        imageUrl:
          'https://framerusercontent.com/images/5ujWG1mHqDpjhlBtf2rGwJ7Y.jpg',
        link: 'https://store.steampowered.com/app/2113850/Spirit_City_Lofi_Sessions/',
        isWinner: false,
      },
    ],
  },
  {
    id: 'bestnarrative',
    title: 'Best Narrative',
    description:
      'The Canadian Game Award for Best Narrative recognizes the achievement for a game narrative. It will be awarded based on the story and vision, as well as the dialogues (if applicable) and the emotional impact of the story on the player.',
    nominees: [
      {
        id: '1',
        title: 'Lil Guardsman',
        studio: 'Hilltop Studios',
        imageUrl:
          'https://framerusercontent.com/images/EmOAPyy74AQeagXuf620wp1Qw.webp',
        link: 'https://store.steampowered.com/app/1924360/Lil_Guardsman/',
        isWinner: false,
      },
      {
        id: '2',
        title: 'Times & Galaxy',
        studio: 'Copychaser Games',
        imageUrl:
          'https://framerusercontent.com/images/zdqAhqSqmwLw0OOi5cNcxXV92k.jpeg',
        link: 'https://store.steampowered.com/app/883230/Times_and_Galaxy/',
        isWinner: false,
      },
      {
        id: '3',
        title: 'WINNER - Dragon Age: The Veilguard',
        studio: 'BioWare',
        imageUrl:
          'https://framerusercontent.com/images/58nVxcI9XUFNFgzXZKoQGhX5NQ.jpg',
        link: 'https://store.steampowered.com/agecheck/app/1845910/',
        isWinner: true,
      },
      {
        id: '4',
        title: '1000xRESIST',
        studio: 'Sunset Visitor',
        imageUrl:
          'https://framerusercontent.com/images/kSY2Ls1CpfmHIccncV77g6G8.jpg',
        link: 'https://store.steampowered.com/app/1675830/1000xRESIST/',
        isWinner: false,
      },
    ],
  },
  {
    id: 'bestperformance',
    title: 'Best Performance',
    description:
      'The Canadian Game Award for Best Performance recognizes the achievement for character performance in a game. It has to demonstrate an original, creative and engaging performance that creates an indelible impression and contributes to a compelling experience. The judges will also consider the quality of voice artistry and motion capture (if applicable).',
    nominees: [
      {
        id: '1',
        title: 'Humberly González',
        studio: 'Star Wars: Outlaws',
        imageUrl:
          'https://framerusercontent.com/images/JzVYu1RKeJoWstyzCopS1B7KE.jpg',
        link: 'https://www.imdb.com/name/nm8744341/',
        isWinner: true,
      },
      {
        id: '2',
        title: 'Nhi Do',
        studio: '1000xRESIST',
        imageUrl:
          'https://framerusercontent.com/images/rgqnSnqhtaNqN9M8pLBRGICOA.jpg',
        link: 'https://www.imdb.com/name/nm2785427/?ref_=fn_all_nme_1',
        isWinner: false,
      },
      {
        id: '3',
        title: 'Ben Burnes',
        studio: 'Moving Houses',
        imageUrl:
          'https://framerusercontent.com/images/6vnZRxObnGkdwEIkAyJAwW3qq44.jpg',
        link: 'https://music.apple.com/us/song/moving-houses-credits/1766965099',
        isWinner: false,
      },
      {
        id: '4',
        title: 'Matthew Mercer',
        studio: 'Dragon Age: The Veilguard',
        imageUrl:
          'https://framerusercontent.com/images/dx5BpL3KqGPgYSgTCrUGtNvWb7s.webp',
        link: 'https://www.imdb.com/name/nm2233310/?ref_=fn_all_nme_1',
        isWinner: false,
      },
    ],
  },
  {
    id: 'bestaudiodesign',
    title: 'Best Audio Design',
    description:
      'The Canadian Game Award for Best Audio Design recognizes the achievement for audio design in a game. Judges will be looking at its coherence with the title/brand, its immersiveness, quality of integration and of composition.',
    nominees: [
      {
        id: '1',
        title: 'Lil Guardsman',
        studio: 'Hilltop Studios',
        imageUrl:
          'https://framerusercontent.com/images/EmOAPyy74AQeagXuf620wp1Qw.webp',
        link: 'https://store.steampowered.com/app/1924360/Lil_Guardsman/',
        isWinner: false,
      },
      {
        id: '2',
        title: 'Été',
        studio: 'Impossible',
        imageUrl:
          'https://framerusercontent.com/images/tVZfzyrB838sBQGQlm8JUZ4jlU.webp',
        link: 'https://store.steampowered.com/app/1065070/t/',
        isWinner: false,
      },
      {
        id: '3',
        title: 'Dragon Age: The Veilguard',
        studio: 'BioWare',
        imageUrl:
          'https://framerusercontent.com/images/58nVxcI9XUFNFgzXZKoQGhX5NQ.jpg',
        link: 'https://store.steampowered.com/agecheck/app/1845910/',
        isWinner: false,
      },
      {
        id: '4',
        title: '1000xRESIST',
        studio: 'Sunset Visitor',
        imageUrl:
          'https://framerusercontent.com/images/kSY2Ls1CpfmHIccncV77g6G8.jpg',
        link: 'https://store.steampowered.com/app/1675830/1000xRESIST/',
        isWinner: false,
      },
      {
        id: '5',
        title: 'Balatro',
        studio: 'LocalThunk',
        imageUrl:
          'https://framerusercontent.com/images/qBq5kM8Jw2SNLnqhhX5BPPkmS30.jpeg',
        link: 'https://store.steampowered.com/app/2379780/Balatro/',
        isWinner: false,
      },
    ],
  },
  {
    id: 'bestinnovation',
    title: 'Best Technology/Innovation',
    description:
      'The Canadian Game Award for Best Technology and Innovation recognizes a game that holistically utilizes all modern technology across PC and console to deliver an incredibly satisfying and rich experience. The Canadian Game Awards identify the game that leverages innovative gameplay mechanics, the use of hardware and pushes the medium in new ways.',
    nominees: [
      {
        id: '1',
        title: 'Times & Galaxy',
        studio: 'Copychaser Games',
        imageUrl:
          'https://framerusercontent.com/images/zdqAhqSqmwLw0OOi5cNcxXV92k.jpeg',
        link: 'https://store.steampowered.com/app/883230/Times_and_Galaxy/',
        isWinner: false,
      },
      {
        id: '2',
        title: 'Moving Houses',
        studio: 'Gordon Little',
        imageUrl:
          'https://framerusercontent.com/images/x3TGkbUvR724LibtxQl4GbSdwQ.png',
        link: 'https://store.steampowered.com/app/2831060/Moving_Houses/',
        isWinner: false,
      },
      {
        id: '3',
        title: 'Dragon Age: The Veilguard',
        studio: 'BioWare',
        imageUrl:
          'https://framerusercontent.com/images/58nVxcI9XUFNFgzXZKoQGhX5NQ.jpg',
        link: 'https://store.steampowered.com/agecheck/app/1845910/',
        isWinner: false,
      },
      {
        id: '4',
        title: 'WINNER - Homeworld 3',
        studio: 'Blackbird Interactive',
        imageUrl:
          'https://framerusercontent.com/images/kCNj4CyCkyfEQD17vfSvbAxjWTc.jpg',
        link: 'https://store.steampowered.com/agecheck/app/1840080/',
        isWinner: true,
      },
      {
        id: '5',
        title: 'Balatro',
        studio: 'LocalThunk',
        imageUrl:
          'https://framerusercontent.com/images/qBq5kM8Jw2SNLnqhhX5BPPkmS30.jpeg',
        link: 'https://store.steampowered.com/app/2379780/Balatro/',
        isWinner: false,
      },
    ],
  },
  {
    id: 'bestdebutindie',
    title: 'Best Debut Indie',
    description:
      "The Canadian Game Award for Indie game recognizes the achievement in an Indie game's usability and playability, experience, its use of the platform strengths and innovation and/or originality. It rewards small, independent studios/developers (< 50 full time equivalents) whom took some chances.",
    nominees: [
      {
        id: '1',
        title: 'Spiral',
        studio: 'Folklore Games',
        imageUrl:
          'https://framerusercontent.com/images/oIrzTorCi361z2KBXFpjXQIbeLo.jpg',
        link: 'https://store.steampowered.com/app/1579390/Spiral/',
        isWinner: false,
      },
      {
        id: '2',
        title: 'Été',
        studio: 'Impossible',
        imageUrl:
          'https://framerusercontent.com/images/tVZfzyrB838sBQGQlm8JUZ4jlU.webp',
        link: 'https://store.steampowered.com/app/1065070/t/',
        isWinner: false,
      },
      {
        id: '3',
        title: '1000xRESIST',
        studio: 'Sunset Visitor',
        imageUrl:
          'https://framerusercontent.com/images/kSY2Ls1CpfmHIccncV77g6G8.jpg',
        link: 'https://store.steampowered.com/app/1675830/1000xRESIST/',
        isWinner: false,
      },
      {
        id: '4',
        title: 'Nightingale',
        studio: 'Inflexion Studios',
        imageUrl:
          'https://framerusercontent.com/images/Yukv8oMYx3q3FO5vMeQLZTLsc.jpg',
        link: 'https://store.steampowered.com/app/1928980/Nightingale/',
        isWinner: false,
      },
      {
        id: '5',
        title: 'WINNER - Balatro',
        studio: 'LocalThunk',
        imageUrl:
          'https://framerusercontent.com/images/qBq5kM8Jw2SNLnqhhX5BPPkmS30.jpeg',
        link: 'https://store.steampowered.com/app/2379780/Balatro/',
        isWinner: true,
      },
    ],
  },
  {
    id: 'bestdebutstudio',
    title: 'Best Debut Studio',
    description:
      'The Canadian Game Award for Best Debut Studio gives acknowledgement to a brand new studio, delivering its first game in the calendar year. From larger AAA studios breaking through into the Canadian scene or small grassroots indie developers making a name for themselves, this category gives flowers to the developers for their breakthrough success.',
    nominees: [
      {
        id: '1',
        title: 'WINNER - LocalThunk',
        studio: 'Balatro',
        imageUrl:
          'https://framerusercontent.com/images/dvuKUNYBRUhQ9j2p0aYCHCTey2E.jpg',
        link: 'https://x.com/LocalThunk?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor',
        isWinner: true,
      },
      {
        id: '2',
        title: 'Folklore Games',
        studio: 'Spiral',
        imageUrl:
          'https://framerusercontent.com/images/7RlZ7KhmFRlL5WL3QIOjsMDh3AQ.jpg',
        link: 'https://folklore.games/',
        isWinner: false,
      },
      {
        id: '3',
        title: 'Sunset Visitor',
        studio: '1000xRESIST',
        imageUrl:
          'https://framerusercontent.com/images/FLf4EUY8SHqThS7jzGzgFbObPI.jpg',
        link: 'https://www.sunsetvisitor.studio/',
        isWinner: false,
      },
      {
        id: '4',
        title: 'Inflexion Games',
        studio: 'Nightingale',
        imageUrl:
          'https://framerusercontent.com/images/r4aT6H1QTmqHMP1qKSfDG128yUw.jpg',
        link: 'https://www.inflexion.io/',
        isWinner: false,
      },
      {
        id: '5',
        title: 'Impossible',
        studio: 'Été',
        imageUrl:
          'https://framerusercontent.com/images/NLcgVQuocHOgkUZudRf6zPFY.jpg',
        link: 'https://x.com/impossible_dev?lang=en',
        isWinner: false,
      },
    ],
  },
  {
    id: 'mostinnovativestudio',
    title: 'Most Innovative Studio',
    description:
      "The Canadian Game Award for Most Innovative Studio identifies a Canadian studio leading in innovative design and technical prowess. Whether implementing refreshing mechanics or striving to break through a new genre, this studio's impact broke through the industry, standing out amongst its peers.",
    nominees: [
      {
        id: '1',
        title: 'Lucid Dreams Studio',
        studio: 'BIOMORPH',
        imageUrl:
          'https://framerusercontent.com/images/1JMzGQpEYnBpjRlYxy21VW6KNAU.jpg',
        link: 'https://www.luciddreamsstudio.com/',
        isWinner: false,
      },
      {
        id: '2',
        title: 'Bioware',
        studio: 'Dragon Age: The Veilguard',
        imageUrl:
          'https://framerusercontent.com/images/K0AiexfmY8FYtBAKsMJr8K2XJM.jpg',
        link: 'https://www.bioware.com/',
        isWinner: true,
      },
      {
        id: '3',
        title: 'Red Barrels',
        studio: 'The Outlast Trials',
        imageUrl:
          'https://framerusercontent.com/images/B3mrziDxyLtQ36YOQ7V4fmmmqDM.jpg',
        link: 'https://redbarrelsgames.com/',
        isWinner: false,
      },
      {
        id: '4',
        title: 'Folklore Games',
        studio: 'Spiral',
        imageUrl:
          'https://framerusercontent.com/images/7RlZ7KhmFRlL5WL3QIOjsMDh3AQ.jpg',
        link: 'https://folklore.games/',
        isWinner: false,
      },
    ],
  },
  {
    id: 'esportsplayer',
    title: 'Esports Player',
    description:
      'The Canadian Game Award for Esports Player recognizes the impact of an esport player within their community, and their overall performance in the game they play.',
    nominees: [
      {
        id: '1',
        title: 'WINNER - Sarah_frags',
        studio: 'Esports Player',
        imageUrl:
          'https://framerusercontent.com/images/cCZEzgrFYaLjyQBoAdgJlRZsiyw.jpg',
        link: 'https://x.com/sarah_frags?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor',
        isWinner: true,
      },
      {
        id: '2',
        title: 'Twistzz',
        studio: 'Esports Player',
        imageUrl:
          'https://framerusercontent.com/images/oYeEPBOsicqkqtnvmjEtgfNpny4.jpeg',
        link: 'https://x.com/Twistzz',
        isWinner: false,
      },
      {
        id: '3',
        title: 'Scarlett',
        studio: 'Esports Player',
        imageUrl:
          'https://framerusercontent.com/images/eN8KprL3KqGPgYSgTCrUGtNvWb7s.jpg',
        link: 'https://x.com/onfirescarlett?lang=en',
        isWinner: false,
      },
      {
        id: '4',
        title: 'TenZ',
        studio: 'Esports Player',
        imageUrl:
          'https://framerusercontent.com/images/ZDUR4ZDcFeWTbudNeGrWCuyk.jpg',
        link: 'https://x.com/TenZOfficial',
        isWinner: false,
      },
      {
        id: '5',
        title: 'Arteezy',
        studio: 'Esports Player',
        imageUrl:
          'https://framerusercontent.com/images/p9COOGjEuOR4JTXmShhNKCcuG20.png',
        link: 'https://x.com/Arteezy',
        isWinner: false,
      },
    ],
  },
  {
    id: 'esportsorg',
    title: 'Esports Org',
    description:
      'The Canadian Game Award for Esports Org recognizes the engagement and positive impact in their community, as well as their overall player performances across games.',
    nominees: [
      {
        id: '1',
        title: 'Lazarus Esports',
        studio: 'Esports Org',
        imageUrl:
          'https://framerusercontent.com/images/o9vAR1WKnIyw6Ptr0hqfkzh7ETs.jpg',
        link: 'https://x.com/Lazarus',
        isWinner: false,
      },
      {
        id: '2',
        title: 'Toronto Defiant',
        studio: 'Esports Org',
        imageUrl:
          'https://framerusercontent.com/images/tUGVSW2XPmppHcnS1dakIW2eUBI.png',
        link: 'https://x.com/TorontoDefiant',
        isWinner: false,
      },
      {
        id: '3',
        title: 'WINNER - Toronto Ultra',
        studio: 'Esports Org',
        imageUrl:
          'https://framerusercontent.com/images/xgepQ4dQemnTMlHLdP20nbaycls.png',
        link: 'https://x.com/TorontoUltra',
        isWinner: true,
      },
      {
        id: '4',
        title: 'Luminosity Gaming',
        studio: 'Esports Org',
        imageUrl:
          'https://framerusercontent.com/images/03xtyNdbranXuCck7kDhoyTZJk.jpg',
        link: 'https://x.com/Luminosity',
        isWinner: false,
      },
      {
        id: '5',
        title: 'Shopify Rebellion',
        studio: 'Esports Org',
        imageUrl:
          'https://framerusercontent.com/images/4uPNSvGAasYFlSiYp9vktKpTSI.png',
        link: 'https://x.com/ShopifyRebels',
        isWinner: false,
      },
    ],
  },
  {
    id: 'esportsevent',
    title: 'Esports Event',
    description:
      'The Canadian Game Award for Esports Event recognizes the tournament organizers that had a big impact on the Canadian community, and offered an outstanding production quality with high entertainment value.',
    nominees: [
      {
        id: '1',
        title: 'Electric Clash Tekken World Tour Challenger Event',
        studio: 'Esports Event',
        imageUrl:
          'https://framerusercontent.com/images/BO90OOsTVVVKEwQym2dqH4I1lM.jpg',
        link: 'https://x.com/Incendium_GG',
        isWinner: false,
      },
      {
        id: '2',
        title: 'Toronto Ultra Major III Tournament 2024',
        studio: 'Esports Event',
        imageUrl:
          'https://framerusercontent.com/images/jji9avxtnq1U56Y4RDxvOUyxuw.jpg',
        link: 'https://callofdutyleague.com/en-us/events/ultra-major',
        isWinner: false,
      },
      {
        id: '3',
        title: 'Bell Esports Challenge',
        studio: 'Esports Event',
        imageUrl:
          'https://framerusercontent.com/images/FL2gDHAdPKJYSl0fmk4yUaduxU.jpg',
        link: 'https://bellesportschallenge.ca/',
        isWinner: false,
      },
      {
        id: '4',
        title: 'Battle of BC 6',
        studio: 'Esports Event',
        imageUrl:
          'https://framerusercontent.com/images/Bk5o7NAvPfShDualM81BAbbomAs.png',
        link: 'https://x.com/battleofbc?lang=en',
        isWinner: false,
      },
      {
        id: '5',
        title: 'BLAST R6 Major Montreal 2024',
        studio: 'Esports Event',
        imageUrl:
          'https://framerusercontent.com/images/NU4cvhcp1T9nmXPNuxxzlhDEees.jpg',
        link: 'https://www.ubisoft.com/fr-ca/esports/rainbow-six/siege/news-updates/3B2zPQqqn23gVCY38zHrzK/welcome-the-blast-r6-montreal-major',
        isWinner: false,
      },
    ],
  },
  {
    id: 'contentcreator',
    title: 'Content Creator/Show',
    description:
      'The Canadian Game Award for Content Creator/Show recognizes a TV Show, Web Show, or Web Clips that have a big impact on the gaming industry or community, and have an outstanding entertainment value.',
    nominees: [
      {
        id: '1',
        title: 'GHOST Cece',
        studio: 'Content Creator',
        imageUrl:
          'https://framerusercontent.com/images/0hfu5ou1r0O3kYDsMNmYkTUj4.jpg',
        link: 'https://x.com/cecefps?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor',
        isWinner: false,
      },
      {
        id: '2',
        title: 'NickEh30',
        studio: 'Content Creator',
        imageUrl:
          'https://framerusercontent.com/images/TmHpFPmatSIX3DJ5vRErXw7yvI.jpg',
        link: 'https://x.com/NickEh30',
        isWinner: false,
      },
      {
        id: '3',
        title: 'Aiekillu',
        studio: 'Content Creator',
        imageUrl:
          'https://framerusercontent.com/images/EZzcvAWXr8m8K1IW52GaEKvMnAM.jpg',
        link: 'https://x.com/Aiekillu',
        isWinner: false,
      },
      {
        id: '4',
        title: 'AshleyRoboto',
        studio: 'Content Creator',
        imageUrl:
          'https://framerusercontent.com/images/2kGrWreM0iLbyWTtTLzNr5Oqu4.jpg',
        link: 'https://x.com/AshleyRoboto',
        isWinner: false,
      },
      {
        id: '5',
        title: 'WINNER - Pokimane',
        studio: 'Content Creator',
        imageUrl:
          'https://framerusercontent.com/images/5PZJDm6fjCbTcXoszamLJEzgs.jpg',
        link: 'https://x.com/pokimanelol',
        isWinner: true,
      },
    ],
  },
  {
    id: 'frcontentcreator',
    title: 'French Content Creator/Show',
    description: 'SPONSORED CATEGORY PRESENTED BY LOTO QUEBEC',
    nominees: [
      {
        id: '1',
        title: 'WINNER - Cocottee',
        studio: 'Content Creator',
        imageUrl:
          'https://framerusercontent.com/images/lxCjygj0yiSSL79Z1meNl2V7vw.png',
        link: 'https://www.instagram.com/cocottee._',
        isWinner: true,
      },
      {
        id: '2',
        title: 'Lewisle Fou',
        studio: 'Content Creator',
        imageUrl:
          'https://framerusercontent.com/images/IIcKYBLemTH97e6821rbfFTB0jA.png',
        link: 'https://www.instagram.com/lewislefou/',
        isWinner: false,
      },
      {
        id: '3',
        title: 'Achille FPS',
        studio: 'Content Creator',
        imageUrl:
          'https://framerusercontent.com/images/Kdxi1PhGMEdEDQGhFFH27ePOo.png',
        link: 'https://www.instagram.com/achillefps/',
        isWinner: false,
      },
      {
        id: '4',
        title: 'Madame Zoum',
        studio: 'Content Creator',
        imageUrl:
          'https://framerusercontent.com/images/eRVEKR8ojKxbDygtmSAZMO8Jg.png',
        link: 'https://www.instagram.com/madamezoum/',
        isWinner: false,
      },
      {
        id: '5',
        title: 'Math Pellerin',
        studio: 'Content Creator',
        imageUrl:
          'https://framerusercontent.com/images/UHbE05jVw7MaYV4OLIyLrGoE2U.png',
        link: 'https://www.instagram.com/mathieupellerin._/?hl=en',
        isWinner: false,
      },
    ],
  },
  {
    id: 'gameoftheyear',
    title: 'Game of the Year',
    description:
      'The Canadian Game Award for Game of the Year recognizes a trailblazing title that embodies cutting-edge design, technical performance, and innovative entertainment. Game of the Year is a crowning achievement in Canadian game development, raising the bar in games.',
    nominees: [
      {
        id: '1',
        title: 'BIOMORPH',
        studio: 'Lucid Dreams Studio',
        imageUrl:
          'https://framerusercontent.com/images/yOdjg4nHZlrSGJFAQBrNR2BY.jpg',
        link: 'https://store.steampowered.com/app/1430220/BIOMORPH/',
        isWinner: false,
      },
      {
        id: '2',
        title: 'Lil Guardsman',
        studio: 'Hilltop Studios',
        imageUrl:
          'https://framerusercontent.com/images/EmOAPyy74AQeagXuf620wp1Qw.webp',
        link: 'https://store.steampowered.com/app/1924360/Lil_Guardsman/',
        isWinner: false,
      },
      {
        id: '3',
        title: 'Été',
        studio: 'Impossible',
        imageUrl:
          'https://framerusercontent.com/images/tVZfzyrB838sBQGQlm8JUZ4jlU.webp',
        link: 'https://store.steampowered.com/app/1065070/t/',
        isWinner: false,
      },
      {
        id: '4',
        title: 'Dragon Age: The Veilguard',
        studio: 'BioWare',
        imageUrl:
          'https://framerusercontent.com/images/58nVxcI9XUFNFgzXZKoQGhX5NQ.jpg',
        link: 'https://store.steampowered.com/agecheck/app/1845910/',
        isWinner: false,
      },
      {
        id: '5',
        title: '1000xRESIST',
        studio: 'Sunset Visitor',
        imageUrl:
          'https://framerusercontent.com/images/kSY2Ls1CpfmHIccncV77g6G8.jpg',
        link: 'https://store.steampowered.com/app/1675830/1000xRESIST/',
        isWinner: false,
      },
      {
        id: '6',
        title: 'WINNER - Balatro',
        studio: 'LocalThunk',
        imageUrl:
          'https://framerusercontent.com/images/qBq5kM8Jw2SNLnqhhX5BPPkmS30.jpeg',
        link: 'https://store.steampowered.com/app/2379780/Balatro/',
        isWinner: true,
      },
    ],
  },
  {
    id: 'studiooftheyear',
    title: 'Studio of the Year',
    description:
      "The Canadian Game Award for Studio of the Year recognizes a Canadian studio that represents the impeccable pool of talent the country supports. This studio launched a brand new, engaging game into the market. Studio of the Year identifies a development house that's fostered positivity and created an impact within the industry thanks to its passion, dedication, and vision.",
    nominees: [
      {
        id: '1',
        title: 'Inflexion Games',
        studio: 'Nightingale',
        imageUrl:
          'https://framerusercontent.com/images/r4aT6H1QTmqHMP1qKSfDG128yUw.jpg',
        link: 'https://www.inflexion.io/',
        isWinner: false,
      },
      {
        id: '2',
        title: 'WINNER - LocalThunk',
        studio: 'Balatro',
        imageUrl:
          'https://framerusercontent.com/images/dvuKUNYBRUhQ9j2p0aYCHCTey2E.jpg',
        link: 'https://x.com/LocalThunk?ref_src=twsrc%5Egoogle%7Cfolklore%20gametwcamp%5Eserp%7Ctwgr%5Eauthor',
        isWinner: true,
      },
      {
        id: '3',
        title: 'Hilltop Studio',
        studio: 'Lil Guardsman',
        imageUrl:
          'https://framerusercontent.com/images/C66cKJUojuRlOW2oK3RJoFfdiI0.jpg',
        link: 'https://www.hilltop.so/',
        isWinner: false,
      },
      {
        id: '4',
        title: 'Behaviour Interactive',
        studio: 'The Outlast Trials',
        imageUrl:
          'https://framerusercontent.com/images/EnJSxjtihCT8PERd7ggNuhz74g.jpg',
        link: 'https://www.bhvr.com/',
        isWinner: false,
      },
      {
        id: '5',
        title: 'Bioware',
        studio: 'Dragon Age: The Veilguard',
        imageUrl:
          'https://framerusercontent.com/images/K0AiexfmY8FYtBAKsMJr8K2XJM.jpg',
        link: 'https://www.bioware.com/',
        isWinner: false,
      },
    ],
  },
];

export default function Ehgameexpo() {
  return (
    <section className="bg-[#5630bf]">
      <CategoriesHero />
      {allCategories.map((category) => (
        <NomineeSection
          key={category.id}
          categoryId={category.id}
          categoryTitle={category.title}
          categoryDescription={category.description}
          nominees={category.nominees}
        />
      ))}
    </section>
  );
}
