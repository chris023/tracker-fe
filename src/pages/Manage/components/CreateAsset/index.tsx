import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@tracker/common";
import { Form, Formik } from "formik";

const CreateAsset: React.FunctionComponent = (props) => {
  return (
    <>
      <Button variant="contained">SS</Button>
      <Dialog open {...props}>
        <DialogTitle>Add New Asset</DialogTitle>
        <DialogContent>
          <Formik
            initialValues={{ name: "", description: "", tags: [] }}
            onSubmit={() => undefined}
          >
            <Form>
              <Stack spacing={2}>
                <TextField name="name" label="Name" />
                <TextField
                  name="description"
                  label="Description"
                  multiline
                  minRows={4}
                />
                <TextField
                  name="tag"
                  label="tags"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Button>Add</Button>
                      </InputAdornment>
                    ),
                  }}
                />
              </Stack>
            </Form>
          </Formik>
        </DialogContent>
        <DialogActions>
          <Button>Cancel</Button>
          <Button variant="contained">Save</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export { CreateAsset };
