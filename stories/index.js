import React from 'react'

import { storiesOf } from '@storybook/react'

import {
  CheckboxCog,
  RadioCog,
  EmailCog,
  NumberCog,
  PasswordCog,
  SelectCog,
  TextCog,
  TextareaCog
} from 'shinkansen-cogs'

import CheckboxState from './state/checkbox'
import RadioState from './state/radio'
import EmailState from './state/email'
import NumberState from './state/number'
import PasswordState from './state/password'
import SelectState from './state/select'
import TextState from './state/text'
import TextareaState from './state/textarea'

storiesOf('CheckboxCog', module)
  .add('Required and default props', () => (
    <div className='group'>
      <CheckboxState>
        <CheckboxCog
          title='Title'
          name='checkbox-one' />
      </CheckboxState>
      <CheckboxState>
        <CheckboxCog
          title='Title'
          name='checkbox-two' />
      </CheckboxState>
      <CheckboxState>
        <CheckboxCog
          title='Title'
          name='checkbox-three' />
      </CheckboxState>
    </div>
  ))
  .add('"description"', () => (
    <CheckboxCog
      title='Title'
      description='Description'
      name='checkbox-one' />
  ))
  .add('"errorMessage"', () => (
    <CheckboxCog
      title='Title'
      errorMessage='Error Message'
      name='checkbox-one' />
  ))
  .add('"checked"', () => (
    <div className='group'>
      <CheckboxState
        checked>
        <CheckboxCog
          title='Title'
          name='checkbox-one' />
      </CheckboxState>
      <CheckboxState
        checked>
        <CheckboxCog
          title='Title'
          name='checkbox-two' />
      </CheckboxState>
      <CheckboxState
        checked>
        <CheckboxCog
          title='Title'
          name='checkbox-three' />
      </CheckboxState>
    </div>
  ))
  .add('"defaultChecked"', () => (
    <div className='group'>
      <CheckboxState
        defaultChecked>
        <CheckboxCog
          title='Title'
          name='checkbox-one' />
      </CheckboxState>
      <CheckboxState
        defaultChecked>
        <CheckboxCog
          title='Title'
          name='checkbox-two' />
      </CheckboxState>
      <CheckboxState
        defaultChecked>
        <CheckboxCog
          title='Title'
          name='checkbox-three' />
      </CheckboxState>
    </div>
  ))
  .add('"required"', () => (
    <CheckboxCog
      title='Title'
      description='Checkbox Cog'
      required
      name='checkbox' />
  ))
  .add('"disabled"', () => (
    <CheckboxCog
      title='Title'
      description='Checkbox Cog'
      disabled
      name='checkbox' />
  ))
  .add('"readOnly"', () => (
    <CheckboxCog
      title='Title'
      description='Checkbox Cog'
      readOnly
      name='checkbox' />
  ))
  .add('"tabIndex"', () => (
    <CheckboxCog
      title='Title'
      description='Checkbox Cog'
      tabIndex={0}
      name='checkbox' />
  ))
  .add('"accessKey"', () => (
    <CheckboxCog
      title='Title'
      description='Checkbox Cog'
      accessKey='A'
      name='checkbox' />
  ))
  .add('"checked" "required"', () => (
    <CheckboxState
      checked>
      <CheckboxCog
        title='Title'
        description='Checkbox Cog'
        required
        name='checkbox' />
    </CheckboxState>
  ))
  .add('"checked" "disabled"', () => (
    <CheckboxState
      checked>
      <CheckboxCog
        title='Title'
        description='Checkbox Cog'
        disabled
        name='checkbox' />
    </CheckboxState>
  ))
  .add('"checked" "readOnly"', () => (
    <CheckboxState
      checked>
      <CheckboxCog
        title='Title'
        description='Checkbox Cog'
        readOnly
        name='checkbox' />
    </CheckboxState>
  ))
  .add('"checked" "tabIndex"', () => (
    <CheckboxState
      checked>
      <CheckboxCog
        title='Title'
        description='Checkbox Cog'
        tabIndex={0}
        name='checkbox' />
    </CheckboxState>
  ))
  .add('"checked" "accessKey"', () => (
    <CheckboxState
      checked>
      <CheckboxCog
        title='Title'
        description='Checkbox Cog'
        accessKey='A'
        name='checkbox' />
    </CheckboxState>
  ))
  .add('"checked" "required" "disabled" "readOnly" "tabIndex" "accessKey"', () => (
    <CheckboxState
      checked>
      <CheckboxCog
        title='Title'
        description='Checkbox Cog'
        required
        disabled
        readOnly
        tabIndex={0}
        accessKey='A'
        name='checkbox' />
    </CheckboxState>
  ))
  .add('"defaultChecked" "required"', () => (
    <CheckboxState
      defaultChecked>
      <CheckboxCog
        title='Title'
        description='Checkbox Cog'
        required
        name='checkbox' />
    </CheckboxState>
  ))
  .add('"defaultChecked" "disabled"', () => (
    <CheckboxState
      defaultChecked>
      <CheckboxCog
        title='Title'
        description='Checkbox Cog'
        disabled
        name='checkbox' />
    </CheckboxState>
  ))
  .add('"defaultChecked" "readOnly"', () => (
    <CheckboxState
      defaultChecked>
      <CheckboxCog
        title='Title'
        description='Checkbox Cog'
        readOnly
        name='checkbox' />
    </CheckboxState>
  ))
  .add('"defaultChecked" "tabIndex"', () => (
    <CheckboxState
      defaultChecked>
      <CheckboxCog
        title='Title'
        description='Checkbox Cog'
        tabIndex={0}
        name='checkbox' />
    </CheckboxState>
  ))
  .add('"defaultChecked" "accessKey"', () => (
    <CheckboxState
      defaultChecked>
      <CheckboxCog
        title='Title'
        description='Checkbox Cog'
        accessKey='A'
        name='checkbox' />
    </CheckboxState>
  ))
  .add('"defaultChecked" "required" "disabled" "readOnly" "tabIndex" "accessKey"', () => (
    <CheckboxState
      defaultChecked>
      <CheckboxCog
        title='Title'
        description='Checkbox Cog'
        required
        disabled
        readOnly
        tabIndex={0}
        accessKey='A'
        name='checkbox' />
    </CheckboxState>
  ))

storiesOf('EmailCog', module)
  .add('Required and default props', () => (
    <EmailCog
      title='Title'
      name='email' />
  ))
  .add('"description"', () => (
    <EmailCog
      title='Title'
      description='Description'
      name='email' />
  ))
  .add('"errorMessage"', () => (
    <EmailCog
      title='Title'
      errorMessage='Error Message'
      name='email' />
  ))
  .add('"value"', () => (
    <EmailState
      value='Email'>
      <EmailCog
        title='Title'
        name='email' />
    </EmailState>
  ))
  .add('"defaultValue"', () => (
    <EmailState
      defaultValue='Email'>
      <EmailCog
        title='Title'
        name='email' />
    </EmailState>
  ))
  .add('"required"', () => (
    <EmailCog
      title='Title'
      required
      name='email' />
  ))
  .add('"disabled"', () => (
    <EmailCog
      title='Title'
      disabled
      name='email' />
  ))
  .add('"readOnly"', () => (
    <EmailCog
      title='Title'
      readOnly
      name='email' />
  ))
  .add('"tabIndex"', () => (
    <EmailCog
      title='Title'
      tabIndex={0}
      name='email' />
  ))
  .add('"accessKey"', () => (
    <EmailCog
      title='Title'
      accessKey='A'
      name='email' />
  ))
  .add('"required" "disabled" "readOnly" "tabIndex" "accessKey"', () => (
    <EmailCog
      title='Title'
      required
      disabled
      readOnly
      tabIndex={0}
      accessKey='A'
      name='email' />
  ))

storiesOf('NumberCog', module)
  .add('Required and default props', () => (
    <NumberCog
      title='Title'
      name='number' />
  ))
  .add('"description"', () => (
    <NumberCog
      title='Title'
      description='Description'
      name='number' />
  ))
  .add('"errorMessage"', () => (
    <NumberCog
      title='Title'
      errorMessage='Error Message'
      name='number' />
  ))
  .add('"value"', () => (
    <NumberState
      value={1}>
      <NumberCog
        title='Title'
        name='number' />
    </NumberState>
  ))
  .add('"defaultValue"', () => (
    <NumberState
      defaultValue={1}>
      <NumberCog
        title='Title'
        name='number' />
    </NumberState>
  ))
  .add('"required"', () => (
    <NumberCog
      title='Title'
      required
      name='number' />
  ))
  .add('"disabled"', () => (
    <NumberCog
      title='Title'
      disabled
      name='number' />
  ))
  .add('"readOnly"', () => (
    <NumberCog
      title='Title'
      readOnly
      name='number' />
  ))
  .add('"tabIndex"', () => (
    <NumberCog
      title='Title'
      tabIndex={0}
      name='number' />
  ))
  .add('"accessKey"', () => (
    <NumberCog
      title='Title'
      accessKey='A'
      name='number' />
  ))
  .add('"required" "disabled" "readOnly" "tabIndex" "accessKey"', () => (
    <NumberCog
      title='Title'
      required
      disabled
      readOnly
      tabIndex={0}
      accessKey='A'
      name='number' />
  ))

storiesOf('PasswordCog', module)
  .add('Required and default props', () => (
    <PasswordCog
      title='Title'
      name='password' />
  ))
  .add('"description"', () => (
    <PasswordCog
      title='Password Cog'
      description='Description'
      name='password' />
  ))
  .add('"errorMessage"', () => (
    <PasswordCog
      title='Password Cog'
      errorMessage='Error Message'
      name='password' />
  ))
  .add('"value"', () => (
    <PasswordState
      value='Password'>
      <PasswordCog
        title='Title'
        name='password' />
    </PasswordState>
  ))
  .add('"defaultValue"', () => (
    <PasswordState
      defaultValue='Password'>
      <PasswordCog
        title='Title'
        name='password' />
    </PasswordState>
  ))
  .add('"required"', () => (
    <PasswordCog
      title='Title'
      required
      name='password' />
  ))
  .add('"disabled"', () => (
    <PasswordCog
      title='Title'
      disabled
      name='password' />
  ))
  .add('"readOnly"', () => (
    <PasswordCog
      title='Title'
      readOnly
      name='password' />
  ))
  .add('"tabIndex"', () => (
    <PasswordCog
      title='Title'
      tabIndex={0}
      name='password' />
  ))
  .add('"accessKey"', () => (
    <PasswordCog
      title='Title'
      accessKey='A'
      name='password' />
  ))
  .add('"required" "disabled" "readOnly" "tabIndex" "accessKey"', () => (
    <PasswordCog
      title='Title'
      required
      disabled
      readOnly
      tabIndex={0}
      accessKey='A'
      name='password' />
  ))

storiesOf('RadioCog', module)
  .add('Required and default props', () => (
    <RadioState>
      <RadioCog
        id='radio-one'
        title='Title'
        name='radio'
        value='one' />
      <RadioCog
        id='radio-two'
        title='Title'
        name='radio'
        value='two' />
      <RadioCog
        id='radio-three'
        title='Title'
        name='radio'
        value='three' />
    </RadioState>
  ))
  .add('"description"', () => (
    <RadioState
      value='one'>
      <RadioCog
        id='radio-one'
        title='Radio Cog'
        description='Description'
        name='radio'
        value='one' />
      <RadioCog
        id='radio-two'
        title='Radio Cog'
        description='Description'
        name='radio'
        value='two' />
      <RadioCog
        id='radio-three'
        title='Radio Cog'
        description='Description'
        name='radio'
        value='three' />
    </RadioState>
  ))
  .add('"errorMessage"', () => (
    <RadioState
      value='one'>
      <RadioCog
        id='radio-one'
        title='Radio Cog'
        errorMessage='Error Message'
        name='radio'
        value='one' />
      <RadioCog
        id='radio-two'
        title='Radio Cog'
        errorMessage='Error Message'
        name='radio'
        value='two' />
      <RadioCog
        id='radio-three'
        title='Radio Cog'
        errorMessage='Error Message'
        name='radio'
        value='three' />
    </RadioState>
  ))
  .add('"checked"', () => (
    <RadioState
      value='one'>
      <RadioCog
        id='radio-one'
        title='Title'
        name='radio'
        value='one' />
      <RadioCog
        id='radio-two'
        title='Title'
        name='radio'
        value='two' />
      <RadioCog
        id='radio-three'
        title='Title'
        name='radio'
        value='three' />
    </RadioState>
  ))
  .add('"defaultChecked"', () => (
    <RadioState
      defaultValue='one'>
      <RadioCog
        id='radio-one'
        title='Title'
        name='radio'
        value='one' />
      <RadioCog
        id='radio-two'
        title='Title'
        name='radio'
        value='two' />
      <RadioCog
        id='radio-three'
        title='Title'
        name='radio'
        value='three' />
    </RadioState>
  ))
  .add('"required"', () => (
    <RadioState>
      <RadioCog
        id='radio-one'
        title='Title'
        name='radio'
        value='one'
        required />
      <RadioCog
        id='radio-two'
        title='Title'
        name='radio'
        value='two'
        required />
      <RadioCog
        id='radio-three'
        title='Title'
        name='radio'
        value='three'
        required />
    </RadioState>
  ))
  .add('"disabled"', () => (
    <RadioState>
      <RadioCog
        id='radio-one'
        title='Title'
        name='radio'
        value='one'
        disabled />
      <RadioCog
        id='radio-two'
        title='Title'
        name='radio'
        value='two'
        disabled />
      <RadioCog
        id='radio-three'
        title='Title'
        name='radio'
        value='three'
        disabled />
    </RadioState>
  ))
  .add('"readOnly"', () => (
    <RadioState>
      <RadioCog
        id='radio-one'
        title='Title'
        name='radio'
        value='one'
        readOnly />
      <RadioCog
        id='radio-two'
        title='Title'
        name='radio'
        value='two'
        readOnly />
      <RadioCog
        id='radio-three'
        title='Title'
        name='radio'
        value='three'
        readOnly />
    </RadioState>
  ))
  .add('"tabIndex"', () => (
    <RadioState>
      <RadioCog
        id='radio-one'
        title='Title'
        name='radio'
        value='one'
        tabIndex={0} />
      <RadioCog
        id='radio-two'
        title='Title'
        name='radio'
        value='two'
        tabIndex={0} />
      <RadioCog
        id='radio-three'
        title='Title'
        name='radio'
        value='three'
        tabIndex={0} />
    </RadioState>
  ))
  .add('"accessKey"', () => (
    <RadioState>
      <RadioCog
        id='radio-one'
        title='Title'
        name='radio'
        value='one'
        accessKey='1' />
      <RadioCog
        id='radio-two'
        title='Title'
        name='radio'
        value='two'
        accessKey='2' />
      <RadioCog
        id='radio-three'
        title='Title'
        name='radio'
        value='three'
        accessKey='3' />
    </RadioState>
  ))
  .add('"checked" "required"', () => (
    <RadioState
      value='one'>
      <RadioCog
        id='radio-one'
        title='Title'
        name='radio'
        value='one'
        required />
      <RadioCog
        id='radio-two'
        title='Title'
        name='radio'
        value='two'
        required />
      <RadioCog
        id='radio-three'
        title='Title'
        name='radio'
        value='three'
        required />
    </RadioState>
  ))
  .add('"checked" "disabled"', () => (
    <RadioState
      value='one'>
      <RadioCog
        id='radio-one'
        title='Title'
        name='radio'
        value='one'
        disabled />
      <RadioCog
        id='radio-two'
        title='Title'
        name='radio'
        value='two'
        disabled />
      <RadioCog
        id='radio-three'
        title='Title'
        name='radio'
        value='three'
        disabled />
    </RadioState>
  ))
  .add('"checked" "readOnly"', () => (
    <RadioState
      value='one'>
      <RadioCog
        id='radio-one'
        title='Title'
        name='radio'
        value='one'
        readOnly />
      <RadioCog
        id='radio-two'
        title='Title'
        name='radio'
        value='two'
        readOnly />
      <RadioCog
        id='radio-three'
        title='Title'
        name='radio'
        value='three'
        readOnly />
    </RadioState>
  ))
  .add('"checked" "tabIndex"', () => (
    <RadioState
      value='one'>
      <RadioCog
        id='radio-one'
        title='Title'
        name='radio'
        value='one'
        tabIndex={0} />
      <RadioCog
        id='radio-two'
        title='Title'
        name='radio'
        value='two'
        tabIndex={0} />
      <RadioCog
        id='radio-three'
        title='Title'
        name='radio'
        value='three'
        tabIndex={0} />
    </RadioState>
  ))
  .add('"checked" "accessKey"', () => (
    <RadioState
      value='one'>
      <RadioCog
        id='radio-one'
        title='Title'
        name='radio'
        value='one'
        accessKey='1' />
      <RadioCog
        id='radio-two'
        title='Title'
        name='radio'
        value='two'
        accessKey='2' />
      <RadioCog
        id='radio-three'
        title='Title'
        name='radio'
        value='three'
        accessKey='3' />
    </RadioState>
  ))
  .add('"checked" "required" "disabled" "readOnly" "tabIndex" "accessKey"', () => (
    <RadioState
      value='one'>
      <RadioCog
        id='radio-one'
        title='Title'
        name='radio'
        value='one'
        required
        disabled
        readOnly
        tabIndex={0}
        accessKey='1' />
      <RadioCog
        id='radio-two'
        title='Title'
        name='radio'
        value='two' required
        disabled
        readOnly
        tabIndex={0}
        accessKey='2' />
      <RadioCog
        id='radio-three'
        title='Title'
        name='radio'
        value='three' required
        disabled
        readOnly
        tabIndex={0}
        accessKey='3' />
    </RadioState>
  ))
  .add('"defaultChecked" "required"', () => (
    <RadioState
      defaultValue='one'>
      <RadioCog
        id='radio-one'
        title='Title'
        name='radio'
        value='one'
        required />
      <RadioCog
        id='radio-two'
        title='Title'
        name='radio'
        value='two'
        required />
      <RadioCog
        id='radio-three'
        title='Title'
        name='radio'
        value='three'
        required />
    </RadioState>
  ))
  .add('"defaultChecked" "disabled"', () => (
    <RadioState
      defaultValue='one'>
      <RadioCog
        id='radio-one'
        title='Title'
        name='radio'
        value='one'
        disabled />
      <RadioCog
        id='radio-two'
        title='Title'
        name='radio'
        value='two'
        disabled />
      <RadioCog
        id='radio-three'
        title='Title'
        name='radio'
        value='three'
        disabled />
    </RadioState>
  ))
  .add('"defaultChecked" "readOnly"', () => (
    <RadioState
      defaultValue='one'>
      <RadioCog
        id='radio-one'
        title='Title'
        name='radio'
        value='one'
        readOnly />
      <RadioCog
        id='radio-two'
        title='Title'
        name='radio'
        value='two'
        readOnly />
      <RadioCog
        id='radio-three'
        title='Title'
        name='radio'
        value='three'
        readOnly />
    </RadioState>
  ))
  .add('"defaultChecked" "tabIndex"', () => (
    <RadioState
      defaultValue='one'>
      <RadioCog
        id='radio-one'
        title='Title'
        name='radio'
        value='one'
        tabIndex={0} />
      <RadioCog
        id='radio-two'
        title='Title'
        name='radio'
        value='two'
        tabIndex={0} />
      <RadioCog
        id='radio-three'
        title='Title'
        name='radio'
        value='three'
        tabIndex={0} />
    </RadioState>
  ))
  .add('"defaultChecked" "accessKey"', () => (
    <RadioState
      defaultValue='one'>
      <RadioCog
        id='radio-one'
        title='Title'
        name='radio'
        value='one'
        accessKey='1' />
      <RadioCog
        id='radio-two'
        title='Title'
        name='radio'
        value='two'
        accessKey='2' />
      <RadioCog
        id='radio-three'
        title='Title'
        name='radio'
        value='three'
        accessKey='3' />
    </RadioState>
  ))
  .add('"defaultChecked" "required" "disabled" "readOnly" "tabIndex" "accessKey"', () => (
    <RadioState
      defaultValue='one'>
      <RadioCog
        id='radio-one'
        title='Title'
        name='radio'
        value='one' required
        disabled
        readOnly
        tabIndex={0}
        accessKey='1' />
      <RadioCog
        id='radio-two'
        title='Title'
        name='radio'
        value='two' required
        disabled
        readOnly
        tabIndex={0}
        accessKey='2' />
      <RadioCog
        id='radio-three'
        title='Title'
        name='radio'
        value='three' required
        disabled
        readOnly
        tabIndex={0}
        accessKey='3' />
    </RadioState>
  ))

storiesOf('SelectCog', module)
  .add('Required and default props', () => (
    <SelectCog
      title='Title'
      name='select'>
      <option>One</option>
      <option>Two</option>
      <option>Three</option>
    </SelectCog>
  ))
  .add('"description"', () => (
    <SelectCog
      title='Select Cog'
      description='Description'
      name='select'>
      <option value='one'>One</option>
      <option value='two'>Two</option>
      <option value='three'>Three</option>
    </SelectCog>
  ))
  .add('"errorMessage"', () => (
    <SelectCog
      title='Select Cog'
      errorMessage='Error Message'
      name='select'>
      <option value='one'>One</option>
      <option value='two'>Two</option>
      <option value='three'>Three</option>
    </SelectCog>
  ))
  .add('"value"', () => (
    <SelectState
      value='one'>
      <SelectCog
        title='Title'
        name='select'>
        <option value='one'>One</option>
        <option value='two'>Two</option>
        <option value='three'>Three</option>
      </SelectCog>
    </SelectState>
  ))
  .add('"defaultValue"', () => (
    <SelectState
      defaultValue='one'>
      <SelectCog
        title='Title'
        name='select'>
        <option value='one'>One</option>
        <option value='two'>Two</option>
        <option value='three'>Three</option>
      </SelectCog>
    </SelectState>
  ))
  .add('"required"', () => (
    <SelectCog
      title='Title'
      required
      name='select'>
      <option>One</option>
      <option>Two</option>
      <option>Three</option>
    </SelectCog>
  ))
  .add('"disabled"', () => (
    <SelectCog
      title='Title'
      disabled
      name='select'>
      <option>One</option>
      <option>Two</option>
      <option>Three</option>
    </SelectCog>
  ))
  .add('"readOnly"', () => (
    <SelectCog
      title='Title'
      readOnly
      name='select'>
      <option>One</option>
      <option>Two</option>
      <option>Three</option>
    </SelectCog>
  ))
  .add('"tabIndex"', () => (
    <SelectCog
      title='Title'
      tabIndex={0}
      name='select'>
      <option>One</option>
      <option>Two</option>
      <option>Three</option>
    </SelectCog>
  ))
  .add('"accessKey"', () => (
    <SelectCog
      title='Title'
      accessKey='A'
      name='select'>
      <option>One</option>
      <option>Two</option>
      <option>Three</option>
    </SelectCog>
  ))
  .add('"required" "disabled" "readOnly" "tabIndex" "accessKey"', () => (
    <SelectCog
      title='Title'
      required
      disabled
      readOnly
      tabIndex={0}
      accessKey='A'
      name='select'>
      <option>One</option>
      <option>Two</option>
      <option>Three</option>
    </SelectCog>
  ))

storiesOf('TextCog', module)
  .add('Required and default props', () => (
    <TextCog
      title='Title'
      name='text' />
  ))
  .add('"description"', () => (
    <TextCog
      title='Title'
      name='text'
      description='Description' />
  ))
  .add('"errorMessage"', () => (
    <TextCog
      title='Title'
      name='text'
      errorMessage='Error Message' />
  ))
  .add('"value"', () => (
    <TextState
      value='Text'>
      <TextCog
        title='Title'
        name='text' />
    </TextState>
  ))
  .add('"defaultValue"', () => (
    <TextState
      defaultValue='Text'>
      <TextCog
        title='Title'
        name='text' />
    </TextState>
  ))
  .add('"required"', () => (
    <TextCog
      title='Title'
      required
      name='text' />
  ))
  .add('"disabled"', () => (
    <TextCog
      title='Title'
      disabled
      name='text' />
  ))
  .add('"readOnly"', () => (
    <TextCog
      title='Title'
      readOnly
      name='text' />
  ))
  .add('"tabIndex"', () => (
    <TextCog
      title='Title'
      tabIndex={0}
      name='text' />
  ))
  .add('"accessKey"', () => (
    <TextCog
      title='Title'
      accessKey='A'
      name='text' />
  ))
  .add('"required" "disabled" "readOnly" "tabIndex" "accessKey"', () => (
    <TextCog
      title='Title'
      required
      disabled
      readOnly
      tabIndex={0}
      accessKey='A'
      name='text' />
  ))

storiesOf('TextareaCog', module)
  .add('Required and default props', () => (
    <TextareaCog
      title='Title'
      name='textarea' />
  ))
  .add('"description"', () => (
    <TextareaCog
      title='Title'
      description='Description'
      name='textarea' />
  ))
  .add('"errorMessage"', () => (
    <TextareaCog
      title='Title'
      errorMessage='Error Message'
      name='textarea' />
  ))
  .add('"value"', () => (
    <TextareaState
      value='Textarea'>
      <TextareaCog
        title='Title'
        name='textarea' />
    </TextareaState>
  ))
  .add('"defaultValue"', () => (
    <TextareaState
      defaultValue='Textarea'>
      <TextareaCog
        title='Title'
        name='textarea' />
    </TextareaState>
  ))
  .add('"required"', () => (
    <TextareaCog
      title='Title'
      required
      name='textarea' />
  ))
  .add('"disabled"', () => (
    <TextareaCog
      title='Title'
      disabled
      name='textarea' />
  ))
  .add('"readOnly"', () => (
    <TextareaCog
      title='Title'
      readOnly
      name='textarea' />
  ))
  .add('"tabIndex"', () => (
    <TextareaCog
      title='Title'
      tabIndex={0}
      name='textarea' />
  ))
  .add('"accessKey"', () => (
    <TextareaCog
      title='Title'
      accessKey='A'
      name='textarea' />
  ))
  .add('"required" "disabled" "readOnly" "tabIndex" "accessKey"', () => (
    <TextareaCog
      title='Title'
      required
      disabled
      readOnly
      tabIndex={0}
      accessKey='A'
      name='textarea' />
  ))
