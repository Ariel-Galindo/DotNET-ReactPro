import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Skeleton,
  Typography,
} from "@mui/material";
import { Link, useNavigate, useParams } from "react-router";
import { useActivities } from "../../../lib/hooks/useActivities";

export default function ActivityDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { activity, isLoadingActivity } = useActivities(id);

  if (isLoadingActivity)
    return (
      <Box display="flex" flexDirection="column" gap={2}>
        <Skeleton variant="rectangular" width={1487} height={807} />
      </Box>
    );

  if (!activity) return <Typography>Activity Not Found</Typography>;

  const formatted = new Intl.DateTimeFormat("es-ES", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(activity.date));

  return (
    <Card>
      <CardMedia
        component="img"
        src={`/images/categoryImages/${activity.category}.jpg`}
      />
      <CardContent>
        <Typography variant="h5">{activity.title}</Typography>
        <Typography variant="subtitle1" fontWeight="light">
          {formatted}
        </Typography>
        <Typography variant="body1">{activity.description}</Typography>
      </CardContent>
      <CardActions>
        <Button
          component={Link}
          to={`/manage/${activity.id}`}
          variant="contained"
          sx={{ backgroundColor: "#23395B" }}
        >
          Edit
        </Button>
        <Button
          variant="outlined"
          color="inherit"
          onClick={() => navigate("/activities")}
        >
          Cancel
        </Button>
      </CardActions>
    </Card>
  );
}
