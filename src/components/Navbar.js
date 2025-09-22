'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
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
        <div className={styles.logo}>
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
          <a className={styles.nav_link} onClick={() => setIsOpen(false)} href="/">Home</a>
          <a className={styles.nav_link} onClick={() => setIsOpen(false)} href="/Accessories">Gadgets & Accessories</a>
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
            <a className={styles.phone_brand_link} onClick={() => setIsOpen(false)} href="/">Home</a>
          </li>
          <li className={styles.phone_brand} >
            <a className={styles.phone_brand_link} onClick={() => setIsOpen(false)} href="/Gadgets">Gadgets</a>
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
              <a href='/AllPhoneBrands/GoogeePhones' onClick={() => setPhoneBrandsOpen(false)} className={styles.phone_brand_link}>
                Googee
              </a>
            </div>
            <div className={styles.nav_link_row}>
              <a href='/AllPhoneBrands/PocoPhones' onClick={() => setPhoneBrandsOpen(false)} className={styles.phone_brand_link}>
                Poco
              </a>
              <a href='/AllPhoneBrands/XiaoMIPhone' onClick={() => setPhoneBrandsOpen(false)} className={styles.phone_brand_link}>
                XiaoMI
              </a>
              <a href='/AllPhoneBrands/InfinixPhones' onClick={() => setPhoneBrandsOpen(false)} className={styles.phone_brand_link}>
                Infinix
              </a>
            </div>
            <div className={styles.nav_link_row}>
              <a href='/AllPhoneBrands/BlackViewPhones' onClick={() => setPhoneBrandsOpen(false)} className={styles.phone_brand_link}>
                BlackView
              </a>
              <a href='/AllPhoneBrands/SonyPhones' onClick={() => setPhoneBrandsOpen(false)} className={styles.phone_brand_link}>
                Sony
              </a>
              <a href='/AllPhoneBrands/LenovoPhones' onClick={() => setPhoneBrandsOpen(false)} className={styles.phone_brand_link}>
                Lenovo
              </a>
            </div>
            <div className={styles.nav_link_row}>
              <a href='/AllPhoneBrands/MotarolaPhones' onClick={() => setPhoneBrandsOpen(false)} className={styles.phone_brand_link}>
                Motorola
              </a>
              <a href='/AllPhoneBrands/XoloPhones' onClick={() => setPhoneBrandsOpen(false)} className={styles.phone_brand_link}>
                Xolo
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
              <a href='/AllAccessories/AppleAccessories' className={styles.phone_brand_link}>
                Apple
              </a>
              <a href='/AllAccessories/SamsungAccessories' className={styles.phone_brand_link}>
                Samsung
              </a>
              <a href='/AllAccessories/OnePlusAccessories' className={styles.phone_brand_link}>
                OnePlus
              </a>
            </div>
            <div className={styles.nav_link_row}>
              <a href='/AllAccessories/BoatAccessories' className={styles.phone_brand_link}>
                Boat
              </a>
              <a href='/AllAccessories/JBLAccessories' className={styles.phone_brand_link}>
                JBL
              </a>
              <a href='/AllAccessories/SonyAccessories' className={styles.phone_brand_link}>
                Sony
              </a>
            </div>
            <div className={styles.nav_link_row}>
              <a href='/AllAccessories/OppoAccessories' className={styles.phone_brand_link}>
                Oppo
              </a>
              <a href='/AllAccessories/ZebronicsAccessories' className={styles.phone_brand_link}>
                Zebronics
              </a>
              <a href='/AllAccessories/PortonicsAccessories' className={styles.phone_brand_link}>
                Portonics
              </a>
            </div>
            <div className={styles.nav_link_row}>
              <a href='/AllAccessories/InfinixAccessories' className={styles.phone_brand_link}>
                Infinix
              </a>
              <a href='/AllAccessories/GoboultAccessories' className={styles.phone_brand_link}>
                Goboult
              </a>
              <a href='/AllAccessories/NoiseAccessories' className={styles.phone_brand_link}>
                Noise
              </a>
            </div>
            <div className={styles.nav_link_row}>
              <a href='/AllAccessories/MiviAccessories' className={styles.phone_brand_link}>
                Mivi
              </a>
              <a href='/AllAccessories/AmazonBasisAccessories' className={styles.phone_brand_link}>
                Amazon
              </a>
              <a href='/AllPhoneBrands/DigitekAccessories' className={styles.phone_brand_link}>
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
              <a href='/AllLuxuryProducts/LuxuryBreslate' className={styles.phone_brand_link}>
                Breslate
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
