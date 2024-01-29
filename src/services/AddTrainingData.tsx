import { PlayerDataList } from "../interfaces/PlayerData";

export const AddTrainingData = async (data: PlayerDataList) => {
    try {
    const response = await fetch("http://localhost:8080/main-team/training", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    });

    if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
    }

    // Si esperas un JSON como respuesta
    const finalData = await response.json();
    console.log(finalData);

    // Si no esperas un JSON como respuesta
    console.log('Datos enviados con éxito');

    // return response.json();

    } catch (error) {

    console.error("Error:", error);

    }
};
