'use client';
import { useEffect, useState } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPhoneBrandsOpen, setPhoneBrandsOpen] = useState(false);

  const handleResize = () => {
    if (window.innerWidth > 780 && isOpen) {
      setIsOpen(false);
    }
    if (window.innerWidth > 780 && isPhoneBrandsOpen) {
      setPhoneBrandsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen, isPhoneBrandsOpen]);

  return (
    <header>
      <nav className={styles.navbar}>
        <div>
          <a href="/">
            <img
              className={styles.nav_image}
              src="/Logo.jpg"
              alt="SkillUpLines logo - Business Ideas, Management, Marketing & Innovative Blog"
            />
          </a>
        </div>

        <ul
          className={`${styles.nav_link_list} ${isOpen ? styles.showMenu : styles.closeMenu
            }`}
        >
          <a className={styles.nav_link} onClick={() => setIsOpen(false)} href="/">Phone</a>
          <a className={styles.nav_link} onClick={() => setIsOpen(false)} href="/Gadgets">Gadgets & Accessories</a>
          <a className={styles.nav_link} onClick={() => setIsOpen(false)} href="/LuxuryProducts">Luxury</a>
        </ul>

        <ul
          className={`${styles.phone_brands} ${isPhoneBrandsOpen ? styles.showphoneBrands : styles.closephoneBrands
            }`}
        >
          <li>
            <p className={styles.phone_brand_heading}>Menu</p>
          </li>
          <li className={styles.phone_brand} >
            <a className={styles.phone_brand_link} onClick={() => setIsOpen(false)} href="/">Phone</a>
          </li>
          <li className={styles.phone_brand} >
            <a className={styles.phone_brand_link} onClick={() => setIsOpen(false)} href="/Gadgets">Gadgets & Accessories</a>
          </li>
          <li className={styles.phone_brand} >
            <a className={styles.phone_brand_link} onClick={() => setIsOpen(false)} href="/LuxuryProducts">Luxury</a>
          </li>


          <li className={styles.link_heading}>
            <p className={styles.phone_brand_heading}>Phone Brands</p>
          </li>
          <li>
            <div className={styles.nav_link_row}>
              <a href='/AllPhoneBrands/SamsungPhones' onClick={() => setPhoneBrandsOpen(false)} className={styles.phone_brand_link}>
                Samsung
              </a>
              <a href='/AllPhoneBrands/ApplePhones' onClick={() => setPhoneBrandsOpen(false)} className={styles.phone_brand_link}>
                Apple
              </a>
              <a href='/AllPhoneBrands/GooglePixelPhones' onClick={() => setPhoneBrandsOpen(false)} className={styles.phone_brand_link}>
                Google
              </a>
            </div>
            <div className={styles.nav_link_row}>
              <a href='/AllPhoneBrands/OnePlusPhones' onClick={() => setPhoneBrandsOpen(false)} className={styles.phone_brand_link}>
                OnePlus
              </a>
              <a href='/AllPhoneBrands/OppoPhones' onClick={() => setPhoneBrandsOpen(false)} className={styles.phone_brand_link}>
                Oppo
              </a>
              <a href='/AllPhoneBrands/IQOOPhones' onClick={() => setPhoneBrandsOpen(false)} className={styles.phone_brand_link}>
                IQOO
              </a>
            </div>
            <div className={styles.nav_link_row}>
              <a href='/AllPhoneBrands/VivoPhones' onClick={() => setPhoneBrandsOpen(false)} className={styles.phone_brand_link}>
                Vivo
              </a>
              <a href='/AllPhoneBrands/RealmePhones' onClick={() => setPhoneBrandsOpen(false)} className={styles.phone_brand_link}>
                Realme
              </a>
              <a href='/AllPhoneBrands/DooGeePhones' onClick={() => setPhoneBrandsOpen(false)} className={styles.phone_brand_link}>
                Googee
              </a>
            </div>
            <div className={styles.nav_link_row}>
              <a href='/AllPhoneBrands/PocoPhones' onClick={() => setPhoneBrandsOpen(false)} className={styles.phone_brand_link}>
                Poco
              </a>
              <a href='/AllPhoneBrands/XiaoMIPhones' onClick={() => setPhoneBrandsOpen(false)} className={styles.phone_brand_link}>
                XiaoMI
              </a>
              <a href='/AllPhoneBrands/MotarolaPhones' onClick={() => setPhoneBrandsOpen(false)} className={styles.phone_brand_link}>
                Motorola
              </a>
            </div>
            <div className={styles.nav_link_row}>
              <a href='/AllPhoneBrands/BlackViewPhones' onClick={() => setPhoneBrandsOpen(false)} className={styles.phone_brand_link}>
                BlackView
              </a>
              <a href='/AllPhoneBrands/SonyPhones' onClick={() => setPhoneBrandsOpen(false)} className={styles.phone_brand_link}>
                Sony
              </a>
              <a href='/AllPhoneBrands/LavaPhones' onClick={() => setPhoneBrandsOpen(false)} className={styles.phone_brand_link}>
                Lava
              </a>
            </div>
          </li>

          <li className={styles.link_heading}>
            <p className={styles.phone_brand_heading}>Gadgets & Accessories</p>
          </li>
          <li>
            <div className={styles.nav_link_row}>
              <a href='/AllGadgets/BoatGadgets' className={styles.phone_brand_link}>
                Boat
              </a>
              <a href='/AllGadgets/JBLGadgets' className={styles.phone_brand_link}>
                JBL
              </a>
              <a href='/AllGadgets/SonyGadgets' className={styles.phone_brand_link}>
                Sony
              </a>
            </div>
            <div className={styles.nav_link_row}>
              <a href='/AllGadgets/AppleGadgets' className={styles.phone_brand_link}>
                Apple
              </a>
              <a href='/AllGadgets/SamsungGadgets' className={styles.phone_brand_link}>
                Samsung
              </a>
              <a href='/AllGadgets/OnePlusGadgets' className={styles.phone_brand_link}>
                OnePlus
              </a>
            </div>
            <div className={styles.nav_link_row}>
              <a href='/AllGadgets/SonyGadgets' className={styles.phone_brand_link}>
                Sony
              </a>
              <a href='/AllGadgets/OppoGadgets' className={styles.phone_brand_link}>
                Oppo
              </a>
              <a href='/AllGadgets/pTronGadgets' className={styles.phone_brand_link}>
                pTron
              </a>
            </div>
            <div className={styles.nav_link_row}>
              <a href='/AllGadgets/PortonicsGadgets' className={styles.phone_brand_link}>
                Portonics
              </a>
              <a href='/AllGadgets/UbonGadgets' className={styles.phone_brand_link}>
                Ubon
              </a>
              <a href='/AllGadgets/SoundcoreGadgets' className={styles.phone_brand_link}>
                Soundcore
              </a>
            </div>
            <div className={styles.nav_link_row}>
              <a href='/AllGadgets/SennheiserGadgets' className={styles.phone_brand_link}>
                Sennheiser
              </a>
              <a href='/AllGadgets/GoboultGadgets' className={styles.phone_brand_link}>
                Goboult
              </a>
              <a href='/AllGadgets/NoiseGadgets' className={styles.phone_brand_link}>
                Noise
              </a>
            </div>
            <div className={styles.nav_link_row}>
              <a href='/AllGadgets/MiviGadgets' className={styles.phone_brand_link}>
                Mivi
              </a>
              <a href='/AllGadgets/AmazonBasisGadgets' className={styles.phone_brand_link}>
                Amazon Basis
              </a>
              <a href='/AllGadgets/DigitekGadgets' className={styles.phone_brand_link}>
                Digitek
              </a>
            </div>
          </li>
          <li className={styles.link_heading}>
            <p className={styles.phone_brand_heading}>Luxury Items</p>
          </li>
          <li className={styles.all_lists}>
            <div className={styles.nav_link_row}>
              <a href='/AllLuxuryProducts/LuxuryWatchs' className={styles.phone_brand_link}>
                Watch
              </a>
              <a href='/AllLuxuryProducts/LuxuryHandBags' className={styles.phone_brand_link}>
                Hand Bag
              </a>
              <a href='/AllLuxuryProducts/LuxuryBracelets' className={styles.phone_brand_link}>
                Bracelet
              </a>
            </div>
            <div className={styles.nav_link_row}>
              <a href='/AllLuxuryProducts/LuxuryPerfume' className={styles.phone_brand_link}>
                Perfume
              </a>
              <a href='/AllLuxuryProducts/LuxuryShose' className={styles.phone_brand_link}>
                Shose
              </a>
              <a href='/AllLuxuryProducts/LuxuryNeckLace' className={styles.phone_brand_link}>
                NeckLace
              </a>
            </div>
            <div className={styles.nav_link_row}>
              <a href='/AllLuxuryProducts/LuxuryGoggles' className={styles.phone_brand_link}>
                Goggles
              </a>
              <a href='/AllLuxuryProducts/LuxuryMackUpKit' className={styles.phone_brand_link}>
                MackUp
              </a>
              <a href='/AllLuxuryProducts/LuxuryBag' className={styles.phone_brand_link}>
                Bag
              </a>
            </div>

          </li>
        </ul>



        <div className={styles.menu}>
          <button
            onClick={() => (setIsOpen(!isOpen), setPhoneBrandsOpen(false))}
          >
            {isOpen ?
              <img className={styles.Toggle_Button} src="/menuclose.jpg" alt="OpenMenu" />
              :
              <img className={styles.Toggle_Button} src="/menu.jpg" alt="ShowMenu" />
            }
          </button>
          <button
            onClick={() => (setPhoneBrandsOpen(!isPhoneBrandsOpen), setIsOpen(false))}
          >
            {isPhoneBrandsOpen ?
              <img className={styles.Toggle_Button} src="/menuclose.jpg" alt="OpenMenu" />
              :
              <img className={styles.Toggle_Button} src="/PhoneSelect.jpg" alt="ShowMenu" />
            }
          </button>
        </div>
      </nav>
    </header>
  );
}
