export type PlayerScore = {
    id: number;
    name: string;
    score: number;
}

export interface TeamSelectionResponse {
    playerScores: PlayerScore[] | null;
    errorMessage?: string;
}