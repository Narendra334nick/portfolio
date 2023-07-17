import classes from '../LandingPage/LandingPage.module.scss';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function LandingPage() {
  return (
    <div className={classes['container']}>
      <div>
      <div>Hello, I'm <span className={classes['nameContainer']}>Narendra Pratap Singh</span>.</div>
      <div>I'm a fullstack web-developer.</div>
      <div>
        <span className={classes['buttonContainer']}>
        View my works
        </span>
      </div>
      </div>
    </div>
  )
}
