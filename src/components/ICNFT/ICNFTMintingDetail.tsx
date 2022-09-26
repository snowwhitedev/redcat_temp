import styles from './ICNFTMintingDetail.module.scss';

const ICNFTMintingDetail = () => {
  return (
    <div className={styles.icNFTMintingDetailContainer}>
      <p className={styles.detailTitle}>
        Inception Collection Minting Details
      </p>
      <div className={styles.mintingContent}>
        <div className={styles.contentItem}>
          <div className={styles.itemName}>Launch Date</div>
          <div className={styles.itemContent}>Fall, 2022</div>
        </div>
        <div className={styles.contentItem}>
          <div className={styles.itemName}>Supply</div>
          <div className={styles.itemContent}>8888</div>
        </div>
        <div className={styles.contentItem}>
          <div className={styles.itemName}>Minting Limit</div>
          <div className={styles.itemContent}>Max 5 icNFTs per wallet</div>
        </div>
      </div>
    </div>
  )
}

export default ICNFTMintingDetail;
