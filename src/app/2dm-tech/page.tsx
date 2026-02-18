import Image from "next/image";
import styles from "./styles.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.contentBox}>
        <main className={styles.main}>
          {/* Header Section */}
          <header className={styles.header}>
            <div className={styles.logoContainer}>
              <div className={styles.companyInfo}>
                <Image
                  src="/2dm-logo-new.png"
                  alt="2DM Technologies"
                  width={205}
                  height={62}
                  priority
                  className={styles.companyLogo}
                />
              </div>
              <p className={styles.tagline}>Be quick, even when standing still!</p>
            </div>
          </header>

          {/* Main Content */}
          <div className={styles.content}>
            <p className={styles.paragraph}>
              Applied AI Consulting for your startup, offered by{" "}
              <a href="https://noahputnam.computer/about" target="_blank" rel="noopener noreferrer">
                Noah Putnam
              </a>{" ("}
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              {"). "}
              I blend my differentiated experience working in Forward Deployed Engineering at Palantir and, recently, as Technical Director of Deployment Engineering at a leading Regulatory AI startup, to offer a toolkit and engineering strategy framework for implementing SoTA AI products that serve large-scale, important businesses.
            </p>

            <p className={styles.paragraph}>
              LLM Context Engineering is the key paradigm to understand when building AI Agents for enterprise (see:{" "}
              <a href="https://arxiv.org/abs/2507.13334" target="_blank" rel="noopener noreferrer">
                arxiv 2507.13334
              </a>
              ). By taking a domain-specific approach to LLM orchestration, Context Engineering allows for the systematic elimination of hallucinations by hyper-personalizing the business logic of your Agents to the exact context of the customer they are serving. I bring the best practices, engineering expertise, and proprietary code ready-to-deploy for my clients to get to the next level of Applied AI for enterprise.
            </p>
          </div>

          {/* Links Section */}
          <div className={styles.linksSection}>
            <h2 className={styles.linksHeading}>Links</h2>
            <ul className={styles.linksList}>
              {/* <li>
                <a href="#">To Align Agents, give them an Ontology</a>
              </li>
              <li>
                <a href="#">Forward Deployed Engineering in the GenAI Paradigm</a>
              </li> */}
              <li>
                <a href="https://www.noahputnam.computer/decks/FDE_GenAI.pdf" target="_blank" rel="noopener noreferrer">Forward Deployed Engineering in the GenAI Paradigm</a>
              </li>
              <li>
                <a href="https://www.noahputnam.computer/decks/Ownership_Culture.pdf" target="_blank" rel="noopener noreferrer">Ownership Culture</a>
              </li>
              <li>
                <a href="https://calendly.com/comingsoon" target="_blank" rel="noopener noreferrer">Book an intro call</a>
              </li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
}

