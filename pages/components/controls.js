import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import logoPic from '../../public/logo-with-text.png'

export default function controls() {
  return (
  	<div className={styles.box_wrapper}>

	    <div className={styles.control_med_box}>
	    	<div className={styles.button_wrapper}>
		    	<div className={styles.button_box}>1 min</div>
		    	<div className={styles.button_box}>5 min</div>
		    	<div className={styles.button_box}>15 min</div>
	    	</div>
	    	<div className={styles.div_wrapper}>Round Status: Running</div>
	    	<div className={styles.div_wrapper}>Start Price: 30090</div>
	    	<div className={styles.div_wrapper}>Position: Long</div>
	    </div>
	    <div className={styles.control_small_box}>
	    	<p className={styles.bet_p}>Your Bet:</p>
	    	<div className={styles.div_wrapper}>
	    		<input />
	    		<span>KOIN</span>
	    	</div>
	    </div>
	    <div className={styles.control_big_box}>
	    	<p className={styles.time_left}>Time Left:</p>
	    	<p className={styles.final_time}>110 Seconds</p>
		    <div className={styles.button_box_send}>Bet!</div>
	    </div>

  	</div>  
  	)
}
