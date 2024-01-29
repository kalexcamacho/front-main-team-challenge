export type Speed = {
    distance: string,
    time: string
}

export type Stats = {
    power: string,
    speed: Speed,
    passes: string
}

export type PlayerData = {
    id: number;
    name: string;
    stats: Stats[]
}

export interface PlayerDataList {
    players: PlayerData[]
}