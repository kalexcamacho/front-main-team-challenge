import React, { useState } from "react";
import { Button, TextField, Container, Paper, Grid } from "@mui/material";
import { PlayerData, PlayerDataList } from "../interfaces/PlayerData";
import { AddTrainingData } from "../services/AddTrainingData";

const TrainingDataForm: React.FC = () => {
    const [id, setId] = useState<number>(0);
    const [name, setName] = useState<string>("");
    const [power, setPower] = useState<string>("");
    const [speedDistance, setSpeedDistance] = useState<string>("");
    const [speedTime, setSpeedTime] = useState<string>("");
    const [passes, setPasses] = useState<string>("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        const playerData: PlayerDataList = {
            players: [
                {
                    id,
                    name,
                    stats: [
                        {
                            power,
                            speed: {
                                distance: speedDistance,
                                time: speedTime,
                            },
                            passes,
                        },
                    ],
                },
            ],
        };
    
        AddTrainingData(playerData);
        console.log(playerData);
      };

  return (
    <Container>
      <Paper style={{ padding: "16px" }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Id"
                name="id"
                value={id}
                onChange={(e) => setId(parseInt(e.target.value))}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Power"
                name="stats.power"
                value={power}
                onChange={(e) => setPower(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Distance to Speed"
                name="stats.speed.distance"
                value={speedDistance}
                onChange={(e) => setSpeedDistance(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Time to Speed"
                name="stats.speed.time"
                value={speedTime}
                onChange={(e) => setSpeedTime(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Passes"
                name="stats.passes"
                value={passes}
                onChange={(e) => setPasses(e.target.value)}
              />
            </Grid>
          </Grid>
          <Button type="submit" color="primary" variant="contained">
            Add
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default TrainingDataForm;
