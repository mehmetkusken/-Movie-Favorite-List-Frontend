const Home = () => {
    return(
        <div>
           <img src={"https://variety.com/wp-content/uploads/2022/12/100-Greatest-Movies-Variety.jpg?w=1920&h=1080&crop=1"} className="emage-src" style={styles.homeBgImage}/> 
            
        </div>
    )


}

const styles = {

    homeBgImage: {
        padding: "0px",
        height: "100%",
        width: "100%",
        overflow: "hidden",
        position: "relative",
    }
}


export default Home