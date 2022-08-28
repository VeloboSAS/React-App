import Cards from '../Components/Cards'
import data from '../Components/Data/Data'
import fon from '../assets/4.jpg';


const fonStyles = {
    background: `url(${fon})`,
    height: 'auto',
    color: '#000000', 
    maxWidth: '100%',
    '-webkit-background-size': 'cover', 
    '-moz-background-size': 'cover', 
    '-o-background-size': 'cover', 
    backgroundSize: 'cover', 
    backgroundAttachment: 'relative',
    paddingTop: '2rem',
    paddingBottom: '2rem',
    paddingLeft: '2rem',
};


const Services = () => {
    return (

            <div className="container-fluid" style={fonStyles}>
                <h1 className="text-center mt-5" style = {{display: 'flex', justifyContent: 'center', paddingTop: '4rem', color: 'white'}}>Наши Услуги</h1>
                <div className="container py-4">
                    <div className="row" style={{paddingTop: '2rem'}}>
                        {data.products.map((item, index) => {
                            return (
                                <Cards img={item.img} title={item.title} key={index}/>
                            )
                        })
                    }
                    </div>
                </div>
            </div>
    )
}

export default Services;

