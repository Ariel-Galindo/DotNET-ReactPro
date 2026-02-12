import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Typography,
} from "@mui/material";
import { useActivities } from "../../../lib/hooks/useActivities";
import { Link } from "react-router";

type Props = {
  activity: Activity;
};

export default function ActivityCard({ activity }: Props) {
  const { deleteActivity } = useActivities();

  const formatted = new Intl.DateTimeFormat("es-ES", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(activity.date));

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{activity.title}</Typography>
        <Typography sx={{ color: "text.secondary", mb: 1 }}>
          {formatted}
        </Typography>
        <Typography variant="body2">{activity.description}</Typography>
        <Typography variant="subtitle1">
          {activity.city} / {activity.venue}
        </Typography>
        <CardActions
          sx={{ display: "flex", justifyContent: "space-between", pb: 2 }}
        >
          <Chip label={activity.category} variant="outlined" />
          <Box display="flex" gap={1}>
            <Button
              component={Link}
              to={`/activities/${activity.id}`}
              size="medium"
              variant="contained"
              sx={{ backgroundColor: "#23395B" }}
            >
              View
            </Button>
            <Button
              size="medium"
              variant="outlined"
              color="inherit"
              onClick={async () =>
                await deleteActivity.mutateAsync(activity.id)
              }
              loading={deleteActivity.isPending}
              loadingPosition="start"
            >
              Delete
            </Button>
          </Box>
        </CardActions>
      </CardContent>
    </Card>
  );
}
