
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import Box from '@mui/material/Box';
import SupportIcon from '@mui/icons-material/Support';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';

export default function ContactCard() {
    const contactCards = [
        {
            name: 'Contact Agent',
            title: "Normal Support Agent",
            description: "Contact our support Agent Cyna online with the Button Below",
            icon: SupportAgentIcon,
        },
        {
            name: 'Contact Agent',
            title: "Online Contact",
            description: "Contact our support Agent Cyna online with the Button Below",
            icon: SupportIcon,
        },
        {
            name: 'Contact Agent',
            title: "Immediate Contact",
            description: "Contact our support Agent Cyna online with the Button Below",
            icon: HelpCenterIcon,
        },

    ];

    return (
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            {contactCards.map((card, index) => (
                <Card sx={{ maxWidth: 345, height: 300 }} key={index}>
                    <CardContent sx={{ textAlign: 'center' }}>
                        <card.icon sx={{ fontSize: 100 }} />
                        <Typography variant="h5" component="div">
                            {card.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {card.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {card.description}
                        </Typography>
                    </CardContent>
                    <CardActions sx={{ justifyContent: 'center' }}>
                        <Button size="small" variant="contained" color="primary">
                            Contact
                        </Button>
                    </CardActions>
                </Card>
            ))}
        </Box>
    );
}

