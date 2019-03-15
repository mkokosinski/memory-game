import React from 'react'
import { Container } from './HomeStyes'
import { SettingsContainer, Button, CenterContent, FormRow, StyledDropdown } from './SettingsStyles'
import { Field, Formik, Form } from 'formik'
import 'react-dropdown/style.css'

const quntityOptions = [
  {label: 'Łatwy', value: 16},{label: 'Trudny', value: 36} 
]

const Settings = (props) => {
  // const handleChange = (e) => {
  //   const { value, name } = e.target;
  //   props.changeSettings({ value, name })
  // }
  return (
    <Container>
      <SettingsContainer>
        <Formik
          initialValues={props.settings}
          onSubmit={(values) => props.changeSettings(values)}
          render={({ handleBlur, setValues, handleChange, values }) => (
            <Form>
              <FormRow>
                <label htmlFor="difficulty">Poziom</label>
                <StyledDropdown
                  options={quntityOptions}
                  value={{ label: values.difficulty.label, value: values.difficulty.value }}
                  onChange={(e) => setValues({difficulty: {label: e.label, value: e.value}})}
                />
              </FormRow>
              <CenterContent>
                <Button type="submit">Zapisz</Button>
                <Button type="button" onClick={() => props.history.goBack()}>Wróć</Button>
              </CenterContent>
            </Form>
          )}
        />

      </SettingsContainer>
    </Container>
  )
}

export default Settings;