import {
  LoadingButton,
  Container,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@tracker/common";
import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";

const Login: React.FunctionComponent = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="xs">
      <Paper sx={{ p: 3, mt: 10 }}>
        <Stack sx={{ mt: 2, mb: 4 }}>
          <Typography variant="h4" align="center">
            Welcome
          </Typography>
          <Typography align="center">Let's get you logged in.</Typography>
        </Stack>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={() => navigate("/dashboard")}
        >
          <Form>
            <Stack spacing={2}>
              <TextField name="email" label="email" />
              <TextField name="password" label="password" type="password" />
              <LoadingButton
                fullWidth
                variant="contained"
                type="submit"
                size="large"
                loading={false}
                loadingPosition="start"
              >
                Sign in
              </LoadingButton>
            </Stack>
          </Form>
        </Formik>
      </Paper>
    </Container>
  );
};

export { Login };
