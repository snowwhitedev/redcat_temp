import type { NextPage } from 'next'
import { useTheme } from 'next-themes'
import styles from '../src/styles/icnft.module.scss'
import ICNFTSlide from '../src/components/ICNFT/TopSlide/ICNFTSlide'
import ICNFTRarityCard from '../src/components/ICNFT/ICNFTRarityCard'
import ICNFTOwnerReward from '../src/components/ICNFT/ICNFTOwnerReward'
import ICNFTMintingDetail from '../src/components/ICNFT/ICNFTMintingDetail'
import ICNFTCharacterRoster from '../src/components/ICNFT/ICNFTCharacterRoster'
import ICNFTBuiltStatus from '../src/components/ICNFT/ICNFTBuiltStatus'
import ICNFTFAQ from '../src/components/ICNFT/ICNFTFAQ'

const ICNFT: NextPage = () => {
  const { theme, systemTheme } = useTheme()
  const currentTheme = theme === "system" ? systemTheme : theme
  const rarityData = {
    essential: {
      category: 'essential',
      available: '6222 Available',
      character: [
        '3 Common',
        '3 Uncommon'
      ],
      playCard: [
        '2 Common',
        '1 Uncommon'
      ],
      inGame: [
        '30 Common',
        '30 Uncommon (random)'
      ]
    },
    rare: {
      category: 'rare',
      available: '1778 Available',
      character: [
        '2 Common',
        '2 Uncommon',
        '2 Rare'
      ],
      playCard: [
        '1 Common',
        '1 Uncommon',
        '1 Rare'
      ],
      inGame: [
        '30 Common',
        '20 Uncommon',
        '10 Rare'
      ]
    },
    legendary: {
      category: 'legendary',
      available: '888 Available',
      character: [
        '1 Common',
        '2 Uncommon',
        '2 Rare',
        '1 Legendary'
      ],
      playCard: [
        '1 Common',
        '2 Uncommon',
        '1 Legendary'
      ],
      inGame: [
        '40 Common',
        '20 Uncommon',
        '10 Rare (random)',
        '5 Legendary (random)'
      ]
    }
  }

  return (
    <div className={styles.icNFTContainer}>
      <ICNFTSlide />
      <div className={styles.collectionAdvertSection}>
        <p className={styles.collectionAdvertTitle}>
          A collection built with utility & community at the foundation
        </p>
        <p className={styles.collectionAdvertDescription}>
          Each Inception NFT is a collection of in-game assets, and each type of icNFT will provide you with different levels of rarity for those resources. Remember two things: both characters and play cards are NFTs and both will be chosen by you at the launch.
        </p>
        <div className={styles.collectionAdvertComment}>
          If you&apos; ve got your eye on a Rare or Legendary icNFT, you might want to arrive to the party early.
        </div>
      </div>
      <div className={styles.raritySection}>
        <div className={styles.rarityCardWrapper}>
          <ICNFTRarityCard className='essential' data={rarityData.essential} />
        </div>
        <div className={styles.rarityCardWrapper}>
          <ICNFTRarityCard className='rare' data={rarityData.rare} />
        </div>
        <div className={styles.rarityCardWrapper}>
          <ICNFTRarityCard className='legendary' data={rarityData.legendary} />
        </div>
      </div>
      <ICNFTOwnerReward />
      <ICNFTMintingDetail />
      <ICNFTCharacterRoster />
      <ICNFTBuiltStatus />
      <ICNFTFAQ />
    </div>
  )
}

export default ICNFT;
