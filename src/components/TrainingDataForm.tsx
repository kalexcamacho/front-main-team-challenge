import React, { useState } from 'react';
import { Button, TextField, Container, Paper, Grid } from '@mui/material';
import { PlayerData } from '../interfaces/PlayerData';
import { AddTrainingData } from '../services/AddTrainingData';

const TrainingDataForm: React.FC = () => {
    const [playerData, setPlayerData] = useState<PlayerData>({
        id: 0,
        name: '',
        power: '',
        speedDistance: '',
        speedTime: '',
        passes: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPlayerData({ ...playerData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        AddTrainingData(playerData);
        console.log(playerData);
    };

    return (
        <Container>
            <Paper style={{ padding: '16px' }}>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Name"
                                name="name"
                                value={playerData.name}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Power"
                                name="power"
                                value={playerData.power}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Speed Distance"
                                name="speed-distance"
                                value={playerData.speedDistance}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Speed Time"
                                name="speed-time"
                                value={playerData.speedTime}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Passes"
                                name="passes"
                                value={playerData.passes}
                                onChange={handleChange}
                            />
                        </Grid>
                    </Grid>
                    <Button type="submit" color="primary" variant="contained">
                        Submit
                    </Button>
                </form>
            </Paper>
        </Container>
    );
};

export default TrainingDataForm;