import styles from './ICNFTRarityCard.module.scss';

const ICNFTRarityCard = ({ className, data }: any) => {
  const catImg = () => {
    switch (className) {
      case 'essential':
        return '/images/inception/cat_essential.png';
      case 'rare':
        return '/images/inception/cat_rare.png';
      case 'legendary':
        return '/images/inception/cat_legendary.png';
      default:
        return '/images/inception/cat_essential.png';
    }
  }

  return (
    <div className={`${styles.rarityCard} ${styles[className]}`}>
      <div className={styles.cardHeader}>
        <p className={styles.rarityCategory}>{data.category}</p>
        <p className={styles.rarityCategoryNFT}>INCEPTION NFT</p>
      </div>
      <div className={`${styles.rarityCat} ${styles[className]}`}>
        <div className={styles.catBanner}>
          <div>PFP</div>
          <div>Ready</div>
        </div>
      </div>
      <div className={`${styles.availableNumber} ${styles[className]}`}>
        {data.available}
      </div>
      <div className={styles.cardContent}>
        <div className={`${styles.cardContentItem} ${styles.character} ${styles[className]}`}>
          <div className={styles.characterIcon}></div>
          <div className={styles.content}>
            <div className={styles.contentTitle}>CHARACTER NFTs</div>
            {data.character.map((item: any, idx: any) => {
              return (
                <div key={idx}>{item}</div>
              )
            })}
          </div>
        </div>
        <div className={`${styles.cardContentItem} ${styles.card} ${styles[className]}`}>
          <div className={styles.cardIcon}></div>
          <div className={styles.content}>
            <div className={styles.contentTitle}>PLAY CARD NFTs</div>
            {data.playCard.map((item: any, idx: any) => {
              return (
                <div key={idx}>{item}</div>
              )
            })}
          </div>
        </div>
        <div className={`${styles.cardContentItem} ${styles.game} ${styles[className]}`}>
          <div className={styles.gameIcon}></div>
          <div className={styles.content}>
            <div className={styles.contentTitle}>IN-GAME NFTs</div>
            {data.inGame.map((item: any, idx: any) => {
              return (
                <div key={idx}>{item}</div>
              )
            })}
          </div>
        </div>
        <img className={`${styles.catImg} ${styles[className]}`} src={catImg()} />
      </div>
    </div>
  )
}

export default ICNFTRarityCard;
