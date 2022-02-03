import { useState, useEffect } from "react";

//const user = {};

const Userinfo = () => {
	//variable de estado

	const [userInf, setuserInf] = useState(null);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users/1").then(
			(response: Response) => {
				console.log("responsive");
				return response.json();
			}
		).then((data)=>{

			console.log("data",data)
			setuserInf(data);
		});
	});

	if (!userInf) {
		return "cargando datos...";
	} else {
		return (
			<div>
				<div>
					<strong>Nombre:</strong> {userInf.name}
				</div>
				<div>
					<strong>Username:</strong> {userInf.username}
				</div>
				<div>
					<strong>Email:</strong> {userInf.email}
				</div>
				<div>
					<strong>Web:</strong>{" "}
					<a herf={userInf.website}>{userInf.website}</a>
				</div>
				<div>
					<strong>Teléfono:</strong> {userInf.phone}
				</div>
			</div>
		);
	}
};

export default Userinfo;
