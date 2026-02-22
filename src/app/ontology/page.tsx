import styles from './styles.module.css'
import Sidebar from '@/components/Sidebar'

export default function Ontology() {
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.content}>
        <h1>To Align Agents, give them an Ontology</h1>
      </div>
    </div>
  );
}