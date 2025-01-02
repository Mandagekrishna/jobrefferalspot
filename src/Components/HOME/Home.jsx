
import Introduction from "./Introduction"
import MiniCard from "./MIniCard"
import style from '../../Styles/App.module.css'
import AdHome from "./AdHome"
import Footer from "./Footer"

export default function Home(){
    return(
        <>
         
            <div className={style.pageContainer}>
            
                        <div className={style.IntroductionContainer}>                                
                                <Introduction></Introduction>
                        </div>

                        <div className={style.MinicardContainer}>
                            <MiniCard></MiniCard>
                        </div>

                        <div className={style.AdHome}>
                            <AdHome></AdHome>
                        </div>

                        <div className={style.FooterContainer}>
                            <Footer></Footer>
                        </div>
            </div>
        </>
    )
}