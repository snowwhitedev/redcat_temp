import styles from './ICNFTCharacterRoster.module.scss';
import ICNFTRosterCard from './ICNFTRosterCard';

const ICNFTCharacterRoster = () => {
  const rosterContents = [
    {
      category: 'common',
      title: 'A few Common characters from our first set include:',
      data: [
        'Call-Me-Steve, the Little Green Man',
        'Cato, the Avatar of Mind',
        'Citrine, the Sunflower Knight',
        'Fuku, the Bakeneko',
        'K’kagim, the Death - Leaper',
        'Lusid, the Equanimity',
        'Ronan, Child of the Beast',
        'Sari, the Human Android',
        'Song Gang, the Dreaming Firefly'
      ]
    },
    {
      category: 'uncommon',
      title: 'A few Uncommon characters from our first set include:',
      data: [
        'Despair, the Slow Poison',
        'Fayde, the Shadowcat',
        'Femi, the Avatar of Love',
        'Fu Yijun, Dragon of Wisdom',
        'Gishkim, the Anunnaki of Nibiru',
        'Malia, Priestess of the Sea',
        'Maroc, of the Oaken Clan',
        'The Reaper',
        'Wells, the Temporal Explorer'
      ]
    },
    {
      category: 'rare',
      title: 'A few Rare characters from our first set include:',
      data: [
        'Ellon, the Avatar of Freedom',
        'Fairness, the Compassionate',
        'Lulu, the Ghostess with the Mostess',
        'Plikplik, the Cosmic Culinarian',
        'Orchid, the Violet Queen',
        'The Undying, the Spectral Circuit'
      ]
    },
    {
      category: 'legendary',
      title: 'The two Legendary characters available in the first set are:',
      data: [
        'The King in Yellow',
        'Scatr, the Distributed Human'
      ]
    }
  ]

  return (
    <div className={styles.characterRosterContainer}>
      <p className={styles.rosterTitle}>
        A Sampling of the Character Roster
      </p>
      <p className={styles.rosterText}>
        Here’s a sneak-peek look at just a few of the many possibilities you will have for character selections through your icNFT
      </p>
      <div className={styles.rosterCardContainer}>
        {rosterContents.map((roster, idx) => {
          return (
            // <div key={idx} className={styles.rosterCardWrapper}>
            //   <ICNFTRosterCard title={roster.title} content={roster.data} category={roster.category} />
            // </div>
            <ICNFTRosterCard key={idx} title={roster.title} content={roster.data} category={roster.category} />
          )
        })}
      </div>
    </div>
  )
}

export default ICNFTCharacterRoster;
