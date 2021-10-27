/*
const alumnos = [
    <li className="list-group-item active">Los crack de reacts son:</li>,
    <li className="list-group-item">Agustin</li>,
    <li className="list-group-item">Diego</li>,
    <li className="list-group-item">jorge</li>,
    <li className="list-group-item">Tobias</li>
]
*/


export default function Lista(props) {
    return (
        <ul className="list-group">
            {
                props.alumnos.map((alumno) => {
                    return <li key={alumno.id} className="list-group-item">
                        {alumno.nombre}
                    </li>
                })
            }
        </ul>
    )
}