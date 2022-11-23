import React, { useState } from "react";


//create your first component
const Home = () => {
	const [tarea, setTarea] = useState([
		"Levantarme",
		"Ir al baño"
	]);
	const [nuevaTarea, setNuevaTarea] = useState("")

	function agregarTarea(e) {
		if (e.code == "Enter" && nuevaTarea != "") {
			setTarea([...tarea, nuevaTarea])
			nuevaTarea("")
		}

		function removeTarea(index) {

		}
	}
	return (
		<div classNameName="container-fluid d-flex mt-5 justify-content-center">
			<h1>TODO LIST</h1>

			<div className="input-group flex-nowrap">
				<input type="text" className="form-control" placeholder="What we have to do?" aria-label="Username" aria-describedby="addon-wrapping" />
			</div>
			<ul className="list-group w-50">
				<li className="list-group-item d-flex justify-content-between align-items-center">
					<input 
					className="form-control" 
					type="text" 
					onKeyDown={e => agregarTarea(e)} 
					onchange={e => setNuevaTarea(e.target.value)} 
					value={nuevaTarea} 
					name="agregarTarea">{tarea.map}</input>
				</li>
				{nuevaTarea.map((tarea, index) =>(
				<li key={index} className="list-group-item d-flex justify-content-between align-items-center">{tarea}
					A second list item
					<button className="badge bg-primary rounded-pill">2</button>
				</li>
				))}
				<li className="list-group-item d-flex justify-content-between align-items-center">
					A third list item
					<small className="badge bg-primary rounded-pill">{tarea.lenght} items.</small>
				</li>
			</ul>
		</div>

	);
};

export default Home;
