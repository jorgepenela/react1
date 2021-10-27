import "bootstrap/dist/css/bootstrap.css"

function Cabecera(props) {
    return(
        <header className="App-header">
            <h1 className="text-center alert alert-info">
               {props.titulo} 
            </h1>            
        </header>
    )

}

export default Cabecera;