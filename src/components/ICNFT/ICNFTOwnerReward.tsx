import styles from './ICNFTOwnerReward.module.scss';
import ICNFTIconAvatar from './RewardIcons/ICNFTIconAvatar';
import ICNFTIconBrandedGraphic from './RewardIcons/ICNFTIconBrandedGraphic';
import ICNFTIconReward from './RewardIcons/ICNFTIconReward';
import ICNFTIconSanura from './RewardIcons/ICNFTIconSanura';
import ICNFTIconShield from './RewardIcons/ICNFTIconShield';
import ICNFTIconTradingCard from './RewardIcons/ICNFTIconTradingCard';

const ICNFTOwnerReward = () => {
  return (
    <div className={styles.ownerReward}>
      <div className={styles.ownerRewardTitle}>
        All icNFT owners also receive:
      </div>
      <div className={styles.iconSection}>
        <div className={`${styles.iconItem} ${styles.badge}`}>
          <ICNFTIconShield />
          <div className={styles.rewardAmount}>1</div>
          <div className={styles.rewardText}>Limited edition badge</div>
        </div>
        <div className={`${styles.iconItem} ${styles.avatar}`}>
          <ICNFTIconAvatar />
          <div className={styles.rewardAmount}>1</div>
          <div className={styles.rewardText}>Limited edition avatar</div>
        </div>
        <div className={`${styles.iconItem} ${styles.tradingCard}`}>
          <ICNFTIconTradingCard />
          <div className={styles.rewardAmount}>1</div>
          <div className={styles.rewardText}>Limited edition trading card</div>
        </div>
        <div className={`${styles.iconItem} ${styles.brandedGraphic}`}>
          <ICNFTIconBrandedGraphic />
          <div className={styles.rewardAmount}>1</div>
          <div className={styles.rewardText}>Lower third RCM-branded graphic for video</div>
        </div>
        <div className={`${styles.iconItem} ${styles.sanura}`}>
          <ICNFTIconSanura />
          <div className={styles.rewardAmount}>1</div>
          <div className={styles.rewardText}>3D printing file (stl) of Sanura, the Red Cat(drm-free)</div>
        </div>
      </div>
      <div className={styles.icNFTRewardContainer}>
        <ICNFTIconReward />
        <div className={styles.rewardDescription}>
          Exclusive access to RedCat Multiverse Private Beta later in the Fall
        </div>
      </div>
      <div className={styles.multiverseGate}>
        <img src='/images/inception/multiversal_gate.png' />
        <div className={styles.multiverseContent}>
          <p className={styles.multiverseTitle}>THE PORTALS OPEN: LAUNCH EVENT</p>
          <p className={styles.multiverseText}>
            Are you excited to join the multiverse as soon as possible? You’ll have your chance with our LIMITED collection of Inception NFTs!
          </p>
          <p className={styles.multiverseText}>
            Each Inception NFT is one-of-a-kind, featuring variations of our very own Red Cat, Sanura. In addition to being able to appreciate it in your wallet and use it as your PFP, each icNFT includes all of the character NFTs and in-game resources you’ll need to start playing the game upon launch.
          </p>
          <p className={styles.multiverseText}>
            As an Inception NFT holder, you’ll also have exclusive access to early play during the RedCat Multiverse Private Beta.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ICNFTOwnerReward;
