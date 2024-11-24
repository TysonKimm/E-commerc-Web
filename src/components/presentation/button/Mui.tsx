
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { LoadingButton } from "@mui/lab";
import SendIcon from "@mui/icons-material/send";
import { useState } from "react";

export default function Mui() {
    const [send, setsend] = useState(false);
    function handleSend(){
        setsend(true);
    }
    return (
        <div>
            <h1>Hiiiiiiii</h1>
                <ButtonGroup>
                    <Button size= "small" color="success" variant="contained">Success</Button>
                    <Button size= "small" color="secondary" variant="contained">Warning</Button>
                    <Button size= "small" color="error" variant="contained">Error</Button>
                </ButtonGroup>
                <LoadingButton onClick={handleSend} loading={send} loadingPosition="start" endIcon={<SendIcon/>}  variant="outlined"/>Start
        </div>
    )
  }