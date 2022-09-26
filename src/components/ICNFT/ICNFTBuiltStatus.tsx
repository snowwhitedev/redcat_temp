import ICNFTBuiltIconETH from './BuiltIcons/ICNFTBuiltIconETH';
import ICNFTBuiltIconIPFS from './BuiltIcons/ICNFTBuiltIconIPFS';
import ICNFTBuiltIconKey from './BuiltIcons/ICNFTBuiltIconKey';
import ICNFTBuiltIconUtility from './BuiltIcons/ICNFTBuiltIconUtility';
import styles from './ICNFTBuiltStatus.module.scss';

const ICNFTBuiltStatus = () => {
  return (
    <div className={styles.builtStatus}>
      <div className={styles.builtLabel}>
        Built Right from the Start
      </div>
      <div className={styles.builtContent}>
        <div className={`${styles.builtItem}`}>
          <ICNFTBuiltIconETH />
          <div className={styles.builtItemText}>Minted on ETH, but carbon offset</div>
        </div>
        <div className={`${styles.builtItem}`}>
          <ICNFTBuiltIconIPFS />
          <div className={styles.builtItemText}>IPFS hosted</div>
        </div>
        <div className={`${styles.builtItem}`}>
          <ICNFTBuiltIconUtility />
          <div className={styles.builtItemText}>Utility NFT that unlocks while held</div>
        </div>
        <div className={`${styles.builtItem}`}>
          <ICNFTBuiltIconKey />
          <div className={styles.builtItemText}>Access to the RedCat Multiverse</div>
        </div>
      </div>
    </div>
  )
}

export default ICNFTBuiltStatus;
