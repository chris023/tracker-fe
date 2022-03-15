import {
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
} from "@mui/material"
import { useFormikContext } from "formik"

/** Extends the @mui/material TextField component for use with Formik */
const TextField: React.FunctionComponent<
  MuiTextFieldProps & { name: string }
> = (props) => {
  const { values, handleChange, touched, errors } = useFormikContext<any>()

  return (
    <MuiTextField
      {...props}
      value={values[props.name]}
      onChange={handleChange}
      error={Boolean(errors[props.name])}
      helperText={touched[props.name] && errors[props.name]}
    />
  )
}

export { TextField }
