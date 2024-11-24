import { Box, Card, CardContent, Typography } from '@mui/material';
import categoryCellPhone from "@assets/icons/Category-CellPhone.png"

export default function CategoryCard({ iconSrc, label}) {
    return (
        <>
        <Box>
                <Card sx={{
                        width: 290,
                        height: 290,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: 2,

                    }}
                >
                    <CardContent
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}>
                            <img src={iconSrc} style={{ width: 60, height: 60}}/>
                        <Typography sx={{ fontSize: '20px', marginTop: 3 }}>{label}
                        </Typography>
                    </CardContent>
                </Card>
                </Box>
        </>
    );
}



