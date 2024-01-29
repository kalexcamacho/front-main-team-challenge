import { PlayerData } from "../interfaces/PlayerData";

export const AddTrainingData = async (data: PlayerData) => {
    try {
    const response = await fetch("http://localhost:8080/main-team/training", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    });
    return response.json();
    } catch (error) {
    console.error("Error:", error);
    }
};
