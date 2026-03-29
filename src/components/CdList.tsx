import AlbumIcon from '@mui/icons-material/Album'
import MusicNoteIcon from '@mui/icons-material/MusicNote'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

interface Cd {
  id: number
  number: string
  title: string
  subtitle: string
  year: number
  duration: string
}

const cds: Cd[] = [
  {
    id: 1,
    number: '76',
    title: 'Fünf Freunde und der Schatz im Bergsee',
    subtitle: 'Hörspiel nach dem Roman von Enid Blyton',
    year: 2024,
    duration: '48 Min.',
  },
  {
    id: 2,
    number: '75',
    title: 'Fünf Freunde auf der Geisterinsel',
    subtitle: 'Hörspiel nach dem Roman von Enid Blyton',
    year: 2023,
    duration: '51 Min.',
  },
  {
    id: 3,
    number: '74',
    title: 'Fünf Freunde und das Geheimnis der alten Mühle',
    subtitle: 'Hörspiel nach dem Roman von Enid Blyton',
    year: 2023,
    duration: '46 Min.',
  },
  {
    id: 4,
    number: '73',
    title: 'Fünf Freunde und der verschwundene Leuchtturm',
    subtitle: 'Hörspiel nach dem Roman von Enid Blyton',
    year: 2022,
    duration: '52 Min.',
  },
  {
    id: 5,
    number: '72',
    title: 'Fünf Freunde im Tal der Dinosaurier',
    subtitle: 'Hörspiel nach dem Roman von Enid Blyton',
    year: 2022,
    duration: '49 Min.',
  },
]

export default function CdList() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: 'background.default',
        py: 4,
      }}
    >
      <Container maxWidth="md">
        <Box sx={{ mb: 4, textAlign: 'center' }}>
          <AlbumIcon sx={{ fontSize: 56, color: 'primary.main', mb: 1 }} />
          <Typography variant="h3" component="h1" gutterBottom fontWeight={700}>
            Fünf Freunde
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Die aktuellen 5 Hörspiel-CDs
          </Typography>
        </Box>

        <Paper elevation={3} sx={{ borderRadius: 3, overflow: 'hidden' }}>
          <List disablePadding>
            {cds.map((cd, index) => (
              <Box key={cd.id}>
                <ListItem
                  alignItems="flex-start"
                  sx={{
                    py: 2.5,
                    px: 3,
                    transition: 'background-color 0.2s',
                    '&:hover': {
                      bgcolor: 'action.hover',
                    },
                  }}
                >
                  <ListItemAvatar>
                    <Avatar
                      sx={{
                        bgcolor: 'primary.main',
                        width: 52,
                        height: 52,
                        mr: 1,
                      }}
                    >
                      <MusicNoteIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
                        <Chip
                          label={`Nr. ${cd.number}`}
                          size="small"
                          color="secondary"
                          sx={{ fontWeight: 700 }}
                        />
                        <Typography variant="subtitle1" fontWeight={600}>
                          {cd.title}
                        </Typography>
                      </Box>
                    }
                    secondary={
                      <Box sx={{ mt: 0.5, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                        <Typography variant="body2" color="text.secondary">
                          {cd.subtitle}
                        </Typography>
                        <Typography variant="body2" color="text.disabled">
                          {cd.year} · {cd.duration}
                        </Typography>
                      </Box>
                    }
                  />
                </ListItem>
                {index < cds.length - 1 && <Divider variant="inset" component="li" />}
              </Box>
            ))}
          </List>
        </Paper>

        <Typography variant="body2" color="text.disabled" sx={{ mt: 3, textAlign: 'center' }}>
          © {new Date().getFullYear()} Fünf Freunde · Europa Verlag
        </Typography>
      </Container>
    </Box>
  )
}
