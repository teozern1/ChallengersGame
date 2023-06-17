import { Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";
import StartButton from "./StartButton";

const NeonText = styled(Typography)({
  textShadow: "0 0 8px #FF0099, 0 0 10px #fff, 0 0 12px #FF0099, 0 0 14px #FF0099, 0 0 16px #FF0099, 0 0 18px #FF0099",
  color: "#FF97D5",
  fontFamily: "'Oswald', sans-serif",
  marginBottom: "2rem"
});

export default function HomePage() {
  return (
    <div 
      className="HomePage"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: "url(/background.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: '100vh',
        width: '100vw',
      }}>
        <NeonText variant="h1">
            CHALLENGERS
        </NeonText>
        <StartButton />
    </div>
  );
}