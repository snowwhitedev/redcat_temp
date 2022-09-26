import styles from './ICNFTFAQ.module.scss';
import FAQItem from './FAQItem/FAQItem';

const ICNFTFAQ = () => {
  const faqItems = [
    {
      question: "What is the Red Cat Multiverse?",
      answer: "Characters are the main assets players use to interact with the game, each with proof of ownership stored on blockchain. Characters are the main assets players use to interact with the game, each with proof of ownership stored on blockchain."
    },
    {
      question: "What are character NFTs?",
      answer: "Characters are the main assets players use to interact with the game, each with proof of ownership stored on blockchain."
    },
    {
      question: "What are character NFTs?",
      answer: "Characters are the main assets players use to interact with the game, each with proof of ownership stored on blockchain."
    },
    {
      question: "What are character NFTs?",
      answer: "Characters are the main assets players use to interact with the game, each with proof of ownership stored on blockchain."
    },
    {
      question: "What are character NFTs?",
      answer: "Characters are the main assets players use to interact with the game, each with proof of ownership stored on blockchain."
    },
    {
      question: "What are character NFTs?",
      answer: "Characters are the main assets players use to interact with the game, each with proof of ownership stored on blockchain."
    }
  ]

  return (
    <div className={styles.faqContainer}>
      <div className={styles.faqTitle}>
        FAQ
      </div>
      {faqItems.map((faq: any, idx: any) => (
        <FAQItem key={idx} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  )
}

export default ICNFTFAQ;

