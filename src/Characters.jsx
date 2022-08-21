import './index.css';


const Characters = ({features}) => {
    //card
// despues de img className="card-body"
//card-title
    return (
        <>
            { features.map((item, index) => (
                <section className="col-xl-4 col-md-6  mt-3 ">
                    <div className="card-colums">
                        <div key={index} className="card gray">
                            <div className="card-header ">
                                <h5 className="card-title">{item.name}</h5>
                            </div> 
                            <section className="row align-items-center">
                                <div  className="col-7">
                                    <img className="card-img-top" src={item.image} alt=""/>
                                </div>
                                <div  className="col-5">
                                    <h6 className="card-subtitle mt-2 mb-2  mt-sm-3  mb-sm-3">Gender: {item.gender}</h6>
                                    <h6 className="card-subtitle mt-2 mb-2  mt-sm-3  mb-sm-3">Location: {item.location.name}</h6>
                                    <h6 className="card-subtitle mt-2 mb-2  mt-sm-3  mb-sm-3">Species: {item.species}</h6>
                                    <h6 className="card-subtitle mt-2 mb-2  mt-sm-3  mb-sm-3">Status: {item.status}</h6>
                                </div>
                            </section>


                             
                             
                        </div>  
                    </div>
                </section>

                ))
            }
        </>
    );
};

export default Characters;