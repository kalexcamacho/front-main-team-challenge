import { TeamSelectionParams } from "../interfaces/TeamSelectionParams";
import { TeamSelectionResponse } from "../interfaces/TeamSelectionResponse";

export const CalculateMainTeam = async (params: TeamSelectionParams) => {
    const url = buildUrlWithParams('http://localhost:8080/main-team/team', params);

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        const data: TeamSelectionResponse = await response.json();
        return data;
    } catch (error) {
        console.error("Error al realizar la solicitud GET:", error);
        throw error;
    }
};

function buildUrlWithParams(baseUrl: string, params: TeamSelectionParams): string {
    const url = new URL(baseUrl);
    Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined) {
            url.searchParams.append(key, value.toString());
        }
    });
    return url.toString();
};
