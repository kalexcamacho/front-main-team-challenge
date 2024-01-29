import { useState } from "react";
import { Container, Paper, Grid, TextField, Button } from "@mui/material";
import { TeamSelectionParams } from "../interfaces/TeamSelectionParams";
import { CalculateMainTeam } from "../services/CalculateMainTeam";

const TeamSelectionForm: React.FC = () => {
    const [teamSelectionParams, setTeamSelectionParams
    ] = useState<TeamSelectionParams>({
        teamSize: '',
        powerPercentage: '',
        speedPercentage: '',
        passesPercentage: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTeamSelectionParams
        ({ ...teamSelectionParams, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        CalculateMainTeam(teamSelectionParams);
        console.log(teamSelectionParams);
    };

    return (
        <Container>
            <Paper style={{ padding: '16px' }}>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Team Size"
                                name="team-size"
                                value={teamSelectionParams.teamSize}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Power Percentage"
                                name="power-percentage"
                                value={teamSelectionParams.powerPercentage}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Speed Percentage"
                                name="speed-percentage"
                                value={teamSelectionParams.speedPercentage}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Passes Percentage"
                                name="passes-percentage"
                                value={teamSelectionParams.passesPercentage}
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

export default TeamSelectionForm;