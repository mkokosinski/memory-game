import React, { useContext, useState, useEffect } from 'react'
import { Formik, Form } from 'formik'
import 'react-dropdown/style.css'

//own components
import { LanguageContext } from '../Context';
import { Container } from '../Home/HomeStyes'
import { SettingsContainer, Button, CenterContent, FormRow, StyledDropdown, StyledDropdownImg } from './SettingsStyles'

const Settings = ({changeSettings, history, openToast}) => {
  const settings = useContext(LanguageContext);
  const lang = settings.language.dictionary;
  const difficultyPossibleOptions = [
    { label: lang.difficulty.easy, value: 0 }, { label: lang.difficulty.hard, value: 1 }
  ]
  const languageOptions = [
    { label: lang.lang.polish, value: 0}, { label: lang.lang.english, value: 1}
  ]
  const handleSubmit = (values) =>{
    changeSettings(values);
    openToast();
  }
  return (
    <Container>
      <SettingsContainer>
        <Formik
          initialValues={settings}
          onSubmit={(values) => handleSubmit(values)}
          render={({ setFieldValue, values, status, isSubmitting  }) => (
            <Form>
              <FormRow>
                <label htmlFor="difficulty">{lang.difficultyLabel}</label>
                <StyledDropdown
                  options={difficultyPossibleOptions}
                  value={{label: values.difficulty.label, value: values.difficulty.value }}
                  onChange={(e) => setFieldValue('difficulty', {label: e.label, value: e.value })}
                />
              </FormRow>
              <FormRow>
                <label htmlFor="language">{lang.langLabel}</label>
                <StyledDropdownImg
                  options={languageOptions}
                  value={{ label: values.language.label, value: 1 }}
                  onChange={(e) => setFieldValue('language', { label: e.label, value: e.value })}
                />

              </FormRow>
              <CenterContent>
              {status && status.msg && <div>{status.msg}</div>}
                <Button type="submit" disabled={isSubmitting}>{lang.saveButton}</Button>
                <Button type="button" onClick={() => history.goBack()}>{lang.goBackButton}</Button>
              </CenterContent>
            </Form>
          )}
        />
      </SettingsContainer>
    </Container>
  )
}

export default Settings;