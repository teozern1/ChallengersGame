import { useNavigate } from "react-router-dom";
import { styled } from "@mui/system";
import { Button, Typography } from "@mui/material";

export default function BackButton() {
    const ShadowButton = styled(Button)({
        position: 'relative',
        '&::before': {
            content: '""',
            position: 'absolute',
            top: '0px',
            left: '0px',
            right: '0px',
            bottom: '0px',
            borderRadius: 'inherit',
            boxShadow: '0px 0px 30px 15px rgba(255, 0, 153, 0.6)',
            pointerEvents: 'none',
        },
    });
        
    const navigate = useNavigate();
    
    const handleStartClick = () => {
    navigate("/");
    }

    return (
        <ShadowButton
        size="large"
        sx={{ bgcolor: "rgba(255, 0, 153, 0.3)",
              border: "3px solid", 
              borderColor: "#FF97D5", 
              borderRadius: "10px",
              color: "#FF97D5",
              '&:hover': {
              bgcolor: "rgba(255, 0, 153, 0.8)",
              border: "3px solid",
              borderRadius: "10px",
              } }}
        type="submit"
        variant="outlined"
        onClick={handleStartClick}
        >
        <Typography variant="subtitle2" fontFamily="'Oswald', sans-serif">
            BACK
        </Typography>
        </ShadowButton>
    ) 
}