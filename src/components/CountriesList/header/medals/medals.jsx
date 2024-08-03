import goldMedal from '../../../../assets/goldMedal.png';
import silverMedal from '../../../../assets/silverMedal.png';
import bronzeMedal from '../../../../assets/bronzeMedal.png';
import medalAll from '../../../../assets/medalAll.svg';
import styles from './medals.module.scss'

export default function Medals() {
 return (
  <div className={styles.header}>
   <div>
    País
   </div>
   <img src={goldMedal} height={30} />
   <img src={silverMedal} height={30} />
   <img src={bronzeMedal} height={30} />
   <img src={medalAll} height={30} />
  </div>
 )
}