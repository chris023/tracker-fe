import { useState } from "react"

import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  TextField,
  IconButton,
} from "@tracker/common"

import { Form, Formik } from "formik"
import EditIcon from "@mui/icons-material/Edit"

import { GroupingTags, TrackerAutoComplete } from "./components"

export interface ICreateAssetForm {
  name: string
  description: string
  tag: string
  tags: string[]
  trackerId: string | null
}

interface ICreateAssetProps {
  initialValues?: Omit<ICreateAssetForm, "tag">
}

const CreateAsset: React.FunctionComponent<ICreateAssetProps> = ({
  initialValues,
}) => {
  const [open, setOpen] = useState(false)

  const mode = initialValues ? "editing" : "creating"

  const handleSubmit = (values: ICreateAssetForm) => {
    console.log(values)
    setOpen(false)
  }

  return (
    <>
      {(() => {
        switch (mode) {
          case "editing":
            return (
              <IconButton onClick={() => setOpen(true)}>
                <EditIcon />
              </IconButton>
            )
          case "creating":
          default:
            return (
              <Button variant="contained" onClick={() => setOpen(true)}>
                + Create
              </Button>
            )
        }
      })()}

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="xs"
        fullWidth
      >
        <DialogTitle>Create Asset</DialogTitle>
        <DialogContent>
          <Box sx={{ paddingTop: 1 }}>
            <Formik<ICreateAssetForm>
              initialValues={{
                ...{
                  name: "",
                  description: "",
                  tag: "",
                  tags: [],
                  trackerId: null,
                },
                ...initialValues,
              }}
              onSubmit={handleSubmit}
            >
              <Form id="create-asset-form">
                <Stack spacing={2}>
                  <TextField name="name" label="Name" />
                  <TextField
                    name="description"
                    label="Description"
                    multiline
                    minRows={4}
                  />
                  <TrackerAutoComplete />
                  <GroupingTags />
                </Stack>
              </Form>
            </Formik>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button variant="contained" type="submit" form="create-asset-form">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export { CreateAsset }
