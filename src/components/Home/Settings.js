<<<<<<< HEAD
import React, { useContext } from 'react'
import { Container } from './HomeStyes'
import { SettingsContainer, Button, CenterContent, FormRow, StyledDropdown, StyledDropdownImg } from './SettingsStyles'
import { Formik, Form } from 'formik'
import { i1, i2 } from '../SocialImages'
import 'react-dropdown/style.css'
import { LanguageContext } from '../Context';



const Settings = (props) => {
  const lang = useContext(LanguageContext);
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
          initialValues={props.settings}
          onSubmit={(values) => props.changeSettings(values)}
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
                <Button type="button" onClick={() => props.history.goBack()}>{lang.goBackButton}</Button>
              </CenterContent>
            </Form>
          )}
        />

      </SettingsContainer>
=======
import React, { useState } from 'react'
import { Container, Menu, Item } from './HomeStyes'



export default function Settings(props) {
  const [value] = useState(props.Settings.quantityOfSquares)
  const changeHandler = (e) => {
    const {name, value} = e.target;
    props.changeSettingsHandler({[name]: value})
    
  }
  const backButtonHandler = () =>{
    props.history.goBack();
  }
  return (
    <Container>
        <Menu bgColor='white'>
          <label htmlFor="quantityOfSquares">Ilość elementów: </label> 
          <select name="quantityOfSquares" id="quantityOfSquares" onChange={changeHandler} value={value}>
            <option value="8">8</option>
            <option value="16">16</option>
            <option value="24">24</option>
          </select>
          <Item onClick={backButtonHandler}> {`<- Wróć`} </Item>
        </Menu>
>>>>>>> 5afbe8c15488350c4033c73c108624cc22d7a5e2
    </Container>
  )
}

export default Settings;