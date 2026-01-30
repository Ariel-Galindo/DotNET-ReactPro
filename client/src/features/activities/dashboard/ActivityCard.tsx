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

type Props = {
  activity: Activity;
  selectActivity: (id: string) => void;
};

export default function ActivityCard({ activity, selectActivity }: Props) {

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
            size="medium"
            variant="contained"
            sx={{ backgroundColor: "#23395B" }}
            onClick={() => selectActivity(activity.id)}
          >
            View
          </Button>
          <Button
            size="medium"
            variant="outlined"
            color="inherit"
            onClick={async () => await deleteActivity.mutateAsync(activity.id)}
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
