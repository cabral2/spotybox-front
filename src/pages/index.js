import { makeStyles } from "@mui/styles";
import UserCard from "../components/user-card";
const useStyles = makeStyles({});

export default function Home() {
  const classes = useStyles();

  return (
    <div>
      <UserCard
        name="Davi Emediato"
        location="Belo Horizonte - MG"
        description="Apreciador  da natureza."
        unfollow
      />
    </div>
  );
}
