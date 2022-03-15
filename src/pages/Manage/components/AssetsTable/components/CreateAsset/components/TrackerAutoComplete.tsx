import { useState } from "react"

import { Autocomplete, TextField } from "@tracker/common"
import { useFormikContext } from "formik"
import { ICreateAssetForm } from ".."

const options = ["T129837632", "T847953762"]

const TrackerAutoComplete = () => {
  const { values, setFieldValue } = useFormikContext<ICreateAssetForm>()
  const [inputValue, setInputValue] = useState("")

  return (
    <Autocomplete
      value={values.trackerId}
      onChange={(event, newValue) => {
        console.log("onChange", newValue)
        setFieldValue("trackerId", newValue || null)
      }}
      onClose={() => console.log("onClose")}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => {
        console.log("onInputChange")
        setInputValue(newInputValue)
      }}
      options={options}
      renderInput={(params) => (
        <TextField name="trackerId" label="Tracker" {...params} />
      )}
    />
  )
}

export { TrackerAutoComplete }
