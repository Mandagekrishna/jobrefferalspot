import {NavLink,useNavigate} from 'react-router-dom'
import styles from '../Styles/Navbar.module.css'
export default function Nav()
{
    let Navigate = useNavigate();

 
    let goBack =()=>{
        Navigate(-1);
    }
    return(
        <>
            <div className={styles.navdivContainer}>
                <div className={styles.website}><h3>JobRefferalSpot.in</h3></div>
                <div className={styles.itema}><NavLink className={styles.itema} to='/Home'><li>Home</li></NavLink></div> 
              
                {/* <div className={styles.itemb}><li>Menu</li>
                    <div className={styles.linkMenu}>
                        <ul>
                            <li>freshers jobs</li>
                            <li>Experienced jobs</li>
                            <li>Internships jobs</li>
                        </ul>

                    </div>
                </div> */}
               <div className={styles.itemc}><li onClick={goBack}>Back</li></div> 
           

            
               
        
                
            </div>

            
                
        
        </>
    )
}