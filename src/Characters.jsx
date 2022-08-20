
const Characters = ({features}) => {

    return (
        <div className="row">
            {
                features.map((item, index) => (
                    <div key={index} className="col">
                        <div className="card" style={{width:'200px'}}>
                            <img src={item.image} alt=""/>
                            <div className="card-body">
                                <h5 className="card-title">{item.title}{item.name}</h5>    
                            </div>
                           <hr></hr>
                             
                             
                        </div>  
                    </div>

                ))
            }
        </div>
    );
};

export default Characters;