import classes from '../LandingPage/LandingPage.module.scss';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box } from '@mui/material';

export default function LandingPage() {
  return (
    <div className={classes['container']}>
      <Box p={1}>
      <Box p={1}>Hello, I'm <span className={classes['nameContainer']}>Narendra Pratap Singh</span>.</Box>
      <Box p={1}>I'm a fullstack web-developer.</Box>
      <Box p={0.5} m={1}>
        <span className={classes['buttonContainer']}>
        View my works <ArrowForwardIcon/>
        </span>
      </Box>
      </Box>
    </div>
  )
}
