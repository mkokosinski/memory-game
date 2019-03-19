import React, { useContext } from 'react'
import { Container } from '../Home/HomeStyes'
import { SettingsContainer, Button, CenterContent, FormRow, StyledDropdown, StyledDropdownImg } from './SettingsStyles'
import { Formik, Form } from 'formik'
import { i1, i2 } from '../SocialImages'
import 'react-dropdown/style.css'
import { LanguageContext } from '../Context';



const Settings = ({changeSettings, history}) => {
  const settings = useContext(LanguageContext);
  const lang = settings.language.dictionary;
  const difficultyOptions = [
    { label: lang.difficulty.easy, value: 0 }, { label: lang.difficulty.hard, value: 1 }
  ]

  const languageOptions = [
    { label: lang.lang.polish, value: 0, img: i1 }, { label: lang.lang.english, value: 1, img: i2 }
  ]
  return (
    <Container>
      <SettingsContainer>
        <Formik
          enableReinitialize={true}
          initialValues={settings}
          onSubmit={(values) => changeSettings(values)}
          render={({ setFieldValue, values }) => (
            <Form>
              <FormRow className="t">
                <label htmlFor="difficulty">{lang.difficultyLabel}</label>
                <StyledDropdown
                  options={difficultyOptions}
                  value={{label: values.difficulty.label, value: values.difficulty.value }}
                  onChange={(e) => setFieldValue('difficulty', {label: e.label, value: e.value })}
                />
              </FormRow>
              <FormRow className="t2">
                <label htmlFor="language">{lang.langLabel}</label>
                <StyledDropdownImg
                  options={languageOptions}
                  value={{ label: values.language.label, value: 1 }}
                  onChange={(e) => setFieldValue('language', { label: e.label, value: e.value })}
                />

              </FormRow>
              <CenterContent>
                <Button type="submit">{lang.saveButton}</Button>
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