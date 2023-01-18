// import { Sahitya, Quicksand } from '@next/font/google'
// import styles from './page.module.scss'
// import Home from './home/index.jsx';
// import Shop from './shop/index.jsx';

// const sahitya = Sahitya({ subsets: ['latin'], weight: '400'});
// const quicksand = Quicksand({ subsets: ['latin']});

const tabs = [
  'Home',
  'Shop',
  'Meet our Ambassadors',
  'Shipping & Returns',
  'About'
];

const Banner = () => {
  return (
    <div>in react</div>
    // <body className={styles.neutral}>
    //   <main className={styles.main}>
    //     <div className={styles.banner}>
    //       <div className={`${sahitya.className} ${styles.title}`}>GINNY AND CO.</div>
    //       <div className={styles.menu}>
    //         {tabs.map(tab => {
    //           return (
    //             <a
    //               className={`${quicksand.className} ${styles.menu_links}`} 
    //               href={`${tab.toLowerCase()}`}>
    //                 {tab}
    //             </a>);
    //         })}
    //       </div>
    //     </div>
        {/* <Home /> */}
    //   </main>
    // </body>
  )
}

export default App;