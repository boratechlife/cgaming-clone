import CategoriesGrid from "@/components/CategoriesGrid";
import CategoriesHero from "@/components/CategoriesHero";
import NomineeSection from "@/components/NomineeSection";
const nominees = [
  {
    id: "1",
    title: "Lil Guardsman",
    studio: "Hilltop Studios",
    imageUrl:
      "https://framerusercontent.com/images/EmOAPyy74AQeagXuf620wp1Qw.webp",
    link: "https://store.steampowered.com/app/1924360/Lil_Guardsman/",
    isWinner: false,
  },
  {
    id: "2",
    title: "Été",
    studio: "Impossible",
    imageUrl:
      "https://framerusercontent.com/images/tVZfzyrB838sBQGQlm8JUZ4jlU.webp",
    link: "https://store.steampowered.com/app/1065070/t/",
    isWinner: false,
  },
  {
    id: "3",
    title: "Dragon Age: The Veilguard",
    studio: "BioWare",
    imageUrl:
      "https://framerusercontent.com/images/58nVxcI9XUFNFgzXZKoQGhX5NQ.jpg",
    link: "https://store.steampowered.com/agecheck/app/1845910/",
    isWinner: false,
  },
  {
    id: "4",
    title: "WINNER - 1000xRESIST",
    imageUrl:
      "https://framerusercontent.com/images/kSY2Ls1CpfmHIccncV77g6G8.jpg",
    link: "https://store.steampowered.com/app/1675830/1000xRESIST/",
    isWinner: true,
  },
  {
    id: "5",
    title: "Venture to the Vile",
    studio: "Cut to Bits",
    imageUrl:
      "https://framerusercontent.com/images/7pdJpCtGMn2TFeYMS5iUM6LfeNg.jpg",
    link: "https://store.steampowered.com/app/2153750/Venture_to_the_Vile/",
    isWinner: false,
  },
];

export default function Ehgameexpo() {
  return (
    <section>
      <CategoriesHero />
      <NomineeSection
        categoryId="bestartdirection"
        categoryTitle="Best Art Direction"
        categoryDescription="The Canadian Game Award for Best Art Direction recognizes the achievement for an art direction in games. Judges will be looking at the quality of the visual and its consistency across all aspects of game production. They will look at the visual signature, its uniqueness, the animation, rendering and impact on storytelling, as well as its high level of immersion in the game environment or story."
        nominees={nominees}
      />
    </section>
  );
}
