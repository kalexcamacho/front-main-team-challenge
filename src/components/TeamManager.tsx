import { useState, useEffect } from "react";
import { TeamSelectionParams } from "../interfaces/TeamSelectionParams";
import {
  Container,
  Paper,
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import { CalculateMainTeam } from "../services/CalculateMainTeam";
import { TeamSelectionResponse } from "../interfaces/TeamSelectionResponse";

const TeamManager: React.FC = () => {
  const [teamData, setTeamData] = useState<TeamSelectionResponse | null>(null);
  const [showTeam, setShowTeam] = useState(false);
  const [teamSize, setTeamSize] = useState<number>(0);
  const [powerPercentage, setPowerPercentage] = useState<number>(0);
  const [passesPercentage, setPassesPercentage] = useState<number>(0);
  const [speedPercentage, setSpeedPercentage] = useState<number>(0);

  const teamSelectionParams: TeamSelectionParams = {
    teamSize: teamSize,
    powerPercentage: powerPercentage,
    passesPercentage: passesPercentage,
    speedPercentage: speedPercentage
};

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const teamSelectionParams: TeamSelectionParams = {
    teamSize,
    powerPercentage,
    passesPercentage,
    speedPercentage
  };
    const response = await CalculateMainTeam(teamSelectionParams);
    setTeamData(response);
    console.log(response);
};

useEffect(() => {
  setShowTeam(!!teamData);
}, [teamData]);

  return (
    <div>
      {!showTeam ? (
        <Container>
          <Paper style={{ padding: "16px" }}>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Team Size"
                    name="teamSize"
                    value={teamSize}
                    onChange={(e) => setTeamSize(Number(e.target.value))}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Power Percentage"
                    name="powerPercentage"
                    value={teamSelectionParams.powerPercentage}
                    onChange={(e) => setPowerPercentage(Number(e.target.value))}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Speed Percentage"
                    name="speedPercentage"
                    value={teamSelectionParams.speedPercentage}
                    onChange={(e) => setSpeedPercentage(Number(e.target.value))}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Passes Percentage"
                    name="passesPercentage"
                    value={teamSelectionParams.passesPercentage}
                    onChange={(e) => setPassesPercentage(Number(e.target.value))}
                  />
                </Grid>
              </Grid>
              <Button type="submit" color="primary" variant="contained">
                Submit
              </Button>
            </form>
          </Paper>
        </Container>
      ) : (
        <Card>
          <CardContent>
            <Typography variant="h5" component="h2">
              Main Team Data
            </Typography>
            {teamData?.errorMessage ? (
              <Typography variant="body1">{teamData.errorMessage}</Typography>
            ) : (
              teamData?.playerScores &&
              teamData.playerScores.map((player) => (
                <div key={player.id}>
                  <Typography variant="body1">{`Id: ${player.id}`}</Typography>
                  <Typography variant="body1">{`Name: ${player.name}`}</Typography>
                  <Typography variant="body1">{`Score: ${player.score}`}</Typography>
                </div>
              ))
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default TeamManager;
