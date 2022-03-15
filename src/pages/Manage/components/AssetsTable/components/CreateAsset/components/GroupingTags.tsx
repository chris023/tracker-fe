import { Box, Button, Chip, InputAdornment, TextField } from "@tracker/common"
import { useFormikContext } from "formik"
import { ICreateAssetForm } from ".."

const GroupingTags: React.FunctionComponent = () => {
  const {
    values: { tag, tags },
    setFieldValue,
  } = useFormikContext<ICreateAssetForm>()

  const handleAdd = () => {
    const alreadyExists =
      !tag || tags.find((t) => t.toLowerCase() === tag.toLowerCase())

    if (alreadyExists) {
      return
    }

    setFieldValue("tags", [...tags, tag.toLowerCase()])
  }

  const handleDelete = (tag: string) => () => {
    setFieldValue(
      "tags",
      tags.filter((v) => v !== tag)
    )
  }

  return (
    <>
      <TextField
        name="tag"
        label="Grouping Tags"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Button onClick={handleAdd}>Add</Button>
            </InputAdornment>
          ),
        }}
        inputProps={{
          onKeyPress: (e) => {
            if (e.key === "Enter") {
              e.preventDefault()
              handleAdd()
            }
          },
        }}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          flexWrap: "wrap",
          listStyle: "none",
          p: 0,
          mt: 2,
        }}
      >
        {tags.map((tag) => {
          return (
            <Chip
              label={tag}
              onDelete={handleDelete(tag)}
              sx={{ m: 0.5 }}
              color="primary"
              key={`tag-${tag}`}
            />
          )
        })}
      </Box>
    </>
  )
}

export { GroupingTags }
