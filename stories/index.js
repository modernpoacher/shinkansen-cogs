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
          title='Checkbox Cog'
          name='checkbox-one' />
      </CheckboxState>
      <CheckboxState>
        <CheckboxCog
          title='Checkbox Cog'
          name='checkbox-two' />
      </CheckboxState>
      <CheckboxState>
        <CheckboxCog
          title='Checkbox Cog'
          name='checkbox-three' />
      </CheckboxState>
    </div>
  ))
  .add('"checked"', () => (
    <div className='group'>
      <CheckboxState
        checked>
        <CheckboxCog
          title='Checkbox Cog'
          name='checkbox-one' />
      </CheckboxState>
      <CheckboxState
        checked>
        <CheckboxCog
          title='Checkbox Cog'
          name='checkbox-two' />
      </CheckboxState>
      <CheckboxState
        checked>
        <CheckboxCog
          title='Checkbox Cog'
          name='checkbox-three' />
      </CheckboxState>
    </div>
  ))
  .add('"defaultChecked"', () => (
    <div className='group'>
      <CheckboxState
        defaultChecked>
        <CheckboxCog
          title='Checkbox Cog'
          name='checkbox-one' />
      </CheckboxState>
      <CheckboxState
        defaultChecked>
        <CheckboxCog
          title='Checkbox Cog'
          name='checkbox-two' />
      </CheckboxState>
      <CheckboxState
        defaultChecked>
        <CheckboxCog
          title='Checkbox Cog'
          name='checkbox-three' />
      </CheckboxState>
    </div>
  ))
  .add('"required"', () => (
    <CheckboxCog
      title='Checkbox Cog'
      required
      name='checkbox' />
  ))
  .add('"disabled"', () => (
    <CheckboxCog
      title='Checkbox Cog'
      disabled
      name='checkbox' />
  ))
  .add('"readOnly"', () => (
    <CheckboxCog
      title='Checkbox Cog'
      readOnly
      name='checkbox' />
  ))
  .add('"tabIndex"', () => (
    <CheckboxCog
      title='Checkbox Cog'
      tabIndex={0}
      name='checkbox' />
  ))
  .add('"accessKey"', () => (
    <CheckboxCog
      title='Checkbox Cog'
      accessKey='A'
      name='checkbox' />
  ))
  .add('"checked" "required"', () => (
    <CheckboxState
      checked>
      <CheckboxCog
        title='Checkbox Cog'
        required
        name='checkbox' />
    </CheckboxState>
  ))
  .add('"checked" "disabled"', () => (
    <CheckboxState
      checked>
      <CheckboxCog
        title='Checkbox Cog'
        disabled
        name='checkbox' />
    </CheckboxState>
  ))
  .add('"checked" "readOnly"', () => (
    <CheckboxState
      checked>
      <CheckboxCog
        title='Checkbox Cog'
        readOnly
        name='checkbox' />
    </CheckboxState>
  ))
  .add('"checked" "tabIndex"', () => (
    <CheckboxState
      checked>
      <CheckboxCog
        title='Checkbox Cog'
        tabIndex={0}
        name='checkbox' />
    </CheckboxState>
  ))
  .add('"checked" "accessKey"', () => (
    <CheckboxState
      checked>
      <CheckboxCog
        title='Checkbox Cog'
        accessKey='A'
        name='checkbox' />
    </CheckboxState>
  ))
  .add('"checked" "required" "disabled" "readOnly" "tabIndex" "accessKey"', () => (
    <CheckboxState
      checked>
      <CheckboxCog
        title='Checkbox Cog'
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
        title='Checkbox Cog'
        required
        name='checkbox' />
    </CheckboxState>
  ))
  .add('"defaultChecked" "disabled"', () => (
    <CheckboxState
      defaultChecked>
      <CheckboxCog
        title='Checkbox Cog'
        disabled
        name='checkbox' />
    </CheckboxState>
  ))
  .add('"defaultChecked" "readOnly"', () => (
    <CheckboxState
      defaultChecked>
      <CheckboxCog
        title='Checkbox Cog'
        readOnly
        name='checkbox' />
    </CheckboxState>
  ))
  .add('"defaultChecked" "tabIndex"', () => (
    <CheckboxState
      defaultChecked>
      <CheckboxCog
        title='Checkbox Cog'
        tabIndex={0}
        name='checkbox' />
    </CheckboxState>
  ))
  .add('"defaultChecked" "accessKey"', () => (
    <CheckboxState
      defaultChecked>
      <CheckboxCog
        title='Checkbox Cog'
        accessKey='A'
        name='checkbox' />
    </CheckboxState>
  ))
  .add('"defaultChecked" "required" "disabled" "readOnly" "tabIndex" "accessKey"', () => (
    <CheckboxState
      defaultChecked>
      <CheckboxCog
        title='Checkbox Cog'
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
      title='Email Cog'
      name='email' />
  ))
  .add('"value"', () => (
    <EmailState
      value='Email'>
      <EmailCog
        title='Email Cog'
        name='email' />
    </EmailState>
  ))
  .add('"defaultValue"', () => (
    <EmailState
      defaultValue='Email'>
      <EmailCog
        title='Email Cog'
        name='email' />
    </EmailState>
  ))
  .add('"required"', () => (
    <EmailCog
      title='Email Cog'
      required
      name='email' />
  ))
  .add('"disabled"', () => (
    <EmailCog
      title='Email Cog'
      disabled
      name='email' />
  ))
  .add('"readOnly"', () => (
    <EmailCog
      title='Email Cog'
      readOnly
      name='email' />
  ))
  .add('"tabIndex"', () => (
    <EmailCog
      title='Email Cog'
      tabIndex={0}
      name='email' />
  ))
  .add('"accessKey"', () => (
    <EmailCog
      title='Email Cog'
      accessKey='A'
      name='email' />
  ))
  .add('"required" "disabled" "readOnly" "tabIndex" "accessKey"', () => (
    <EmailCog
      title='Email Cog'
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
      title='Number Cog'
      name='number' />
  ))
  .add('"value"', () => (
    <NumberState
      value={1}>
      <NumberCog
        title='Number Cog'
        name='number' />
    </NumberState>
  ))
  .add('"defaultValue"', () => (
    <NumberState
      defaultValue={1}>
      <NumberCog
        title='Number Cog'
        name='number' />
    </NumberState>
  ))
  .add('"required"', () => (
    <NumberCog
      title='Number Cog'
      required
      name='number' />
  ))
  .add('"disabled"', () => (
    <NumberCog
      title='Number Cog'
      disabled
      name='number' />
  ))
  .add('"readOnly"', () => (
    <NumberCog
      title='Number Cog'
      readOnly
      name='number' />
  ))
  .add('"tabIndex"', () => (
    <NumberCog
      title='Number Cog'
      tabIndex={0}
      name='number' />
  ))
  .add('"accessKey"', () => (
    <NumberCog
      title='Number Cog'
      accessKey='A'
      name='number' />
  ))
  .add('"required" "disabled" "readOnly" "tabIndex" "accessKey"', () => (
    <NumberCog
      title='Number Cog'
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
      title='Password Cog'
      name='password' />
  ))
  .add('"value"', () => (
    <PasswordState
      value='Password'>
      <PasswordCog
        title='Password Cog'
        name='password' />
    </PasswordState>
  ))
  .add('"defaultValue"', () => (
    <PasswordState
      defaultValue='Password'>
      <PasswordCog
        title='Password Cog'
        name='password' />
    </PasswordState>
  ))
  .add('"required"', () => (
    <PasswordCog
      title='Password Cog'
      required
      name='password' />
  ))
  .add('"disabled"', () => (
    <PasswordCog
      title='Password Cog'
      disabled
      name='password' />
  ))
  .add('"readOnly"', () => (
    <PasswordCog
      title='Password Cog'
      readOnly
      name='password' />
  ))
  .add('"tabIndex"', () => (
    <PasswordCog
      title='Password Cog'
      tabIndex={0}
      name='password' />
  ))
  .add('"accessKey"', () => (
    <PasswordCog
      title='Password Cog'
      accessKey='A'
      name='password' />
  ))
  .add('"required" "disabled" "readOnly" "tabIndex" "accessKey"', () => (
    <PasswordCog
      title='Password Cog'
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
        title='Radio Cog'
        name='radio'
        value='one' />
      <RadioCog
        id='radio-two'
        title='Radio Cog'
        name='radio'
        value='two' />
      <RadioCog
        id='radio-three'
        title='Radio Cog'
        name='radio'
        value='three' />
    </RadioState>
  ))
  .add('"checked"', () => (
    <RadioState
      value='one'>
      <RadioCog
        id='radio-one'
        title='Radio Cog'
        name='radio'
        value='one' />
      <RadioCog
        id='radio-two'
        title='Radio Cog'
        name='radio'
        value='two' />
      <RadioCog
        id='radio-three'
        title='Radio Cog'
        name='radio'
        value='three' />
    </RadioState>
  ))
  .add('"defaultChecked"', () => (
    <RadioState
      defaultValue='one'>
      <RadioCog
        id='radio-one'
        title='Radio Cog'
        name='radio'
        value='one' />
      <RadioCog
        id='radio-two'
        title='Radio Cog'
        name='radio'
        value='two' />
      <RadioCog
        id='radio-three'
        title='Radio Cog'
        name='radio'
        value='three' />
    </RadioState>
  ))
  .add('"required"', () => (
    <RadioState>
      <RadioCog
        id='radio-one'
        title='Radio Cog'
        name='radio'
        value='one'
        required />
      <RadioCog
        id='radio-two'
        title='Radio Cog'
        name='radio'
        value='two'
        required />
      <RadioCog
        id='radio-three'
        title='Radio Cog'
        name='radio'
        value='three'
        required />
    </RadioState>
  ))
  .add('"disabled"', () => (
    <RadioState>
      <RadioCog
        id='radio-one'
        title='Radio Cog'
        name='radio'
        value='one'
        disabled />
      <RadioCog
        id='radio-two'
        title='Radio Cog'
        name='radio'
        value='two'
        disabled />
      <RadioCog
        id='radio-three'
        title='Radio Cog'
        name='radio'
        value='three'
        disabled />
    </RadioState>
  ))
  .add('"readOnly"', () => (
    <RadioState>
      <RadioCog
        id='radio-one'
        title='Radio Cog'
        name='radio'
        value='one'
        readOnly />
      <RadioCog
        id='radio-two'
        title='Radio Cog'
        name='radio'
        value='two'
        readOnly />
      <RadioCog
        id='radio-three'
        title='Radio Cog'
        name='radio'
        value='three'
        readOnly />
    </RadioState>
  ))
  .add('"tabIndex"', () => (
    <RadioState>
      <RadioCog
        id='radio-one'
        title='Radio Cog'
        name='radio'
        value='one'
        tabIndex={0} />
      <RadioCog
        id='radio-two'
        title='Radio Cog'
        name='radio'
        value='two'
        tabIndex={0} />
      <RadioCog
        id='radio-three'
        title='Radio Cog'
        name='radio'
        value='three'
        tabIndex={0} />
    </RadioState>
  ))
  .add('"accessKey"', () => (
    <RadioState>
      <RadioCog
        id='radio-one'
        title='Radio Cog'
        name='radio'
        value='one'
        accessKey='1' />
      <RadioCog
        id='radio-two'
        title='Radio Cog'
        name='radio'
        value='two'
        accessKey='2' />
      <RadioCog
        id='radio-three'
        title='Radio Cog'
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
        title='Radio Cog'
        name='radio'
        value='one'
        required />
      <RadioCog
        id='radio-two'
        title='Radio Cog'
        name='radio'
        value='two'
        required />
      <RadioCog
        id='radio-three'
        title='Radio Cog'
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
        title='Radio Cog'
        name='radio'
        value='one'
        disabled />
      <RadioCog
        id='radio-two'
        title='Radio Cog'
        name='radio'
        value='two'
        disabled />
      <RadioCog
        id='radio-three'
        title='Radio Cog'
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
        title='Radio Cog'
        name='radio'
        value='one'
        readOnly />
      <RadioCog
        id='radio-two'
        title='Radio Cog'
        name='radio'
        value='two'
        readOnly />
      <RadioCog
        id='radio-three'
        title='Radio Cog'
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
        title='Radio Cog'
        name='radio'
        value='one'
        tabIndex={0} />
      <RadioCog
        id='radio-two'
        title='Radio Cog'
        name='radio'
        value='two'
        tabIndex={0} />
      <RadioCog
        id='radio-three'
        title='Radio Cog'
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
        title='Radio Cog'
        name='radio'
        value='one'
        accessKey='1' />
      <RadioCog
        id='radio-two'
        title='Radio Cog'
        name='radio'
        value='two'
        accessKey='2' />
      <RadioCog
        id='radio-three'
        title='Radio Cog'
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
        title='Radio Cog'
        name='radio'
        value='one'
        required
        disabled
        readOnly
        tabIndex={0}
        accessKey='1' />
      <RadioCog
        id='radio-two'
        title='Radio Cog'
        name='radio'
        value='two' required
        disabled
        readOnly
        tabIndex={0}
        accessKey='2' />
      <RadioCog
        id='radio-three'
        title='Radio Cog'
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
        title='Radio Cog'
        name='radio'
        value='one'
        required />
      <RadioCog
        id='radio-two'
        title='Radio Cog'
        name='radio'
        value='two'
        required />
      <RadioCog
        id='radio-three'
        title='Radio Cog'
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
        title='Radio Cog'
        name='radio'
        value='one'
        disabled />
      <RadioCog
        id='radio-two'
        title='Radio Cog'
        name='radio'
        value='two'
        disabled />
      <RadioCog
        id='radio-three'
        title='Radio Cog'
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
        title='Radio Cog'
        name='radio'
        value='one'
        readOnly />
      <RadioCog
        id='radio-two'
        title='Radio Cog'
        name='radio'
        value='two'
        readOnly />
      <RadioCog
        id='radio-three'
        title='Radio Cog'
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
        title='Radio Cog'
        name='radio'
        value='one'
        tabIndex={0} />
      <RadioCog
        id='radio-two'
        title='Radio Cog'
        name='radio'
        value='two'
        tabIndex={0} />
      <RadioCog
        id='radio-three'
        title='Radio Cog'
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
        title='Radio Cog'
        name='radio'
        value='one'
        accessKey='1' />
      <RadioCog
        id='radio-two'
        title='Radio Cog'
        name='radio'
        value='two'
        accessKey='2' />
      <RadioCog
        id='radio-three'
        title='Radio Cog'
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
        title='Radio Cog'
        name='radio'
        value='one' required
        disabled
        readOnly
        tabIndex={0}
        accessKey='1' />
      <RadioCog
        id='radio-two'
        title='Radio Cog'
        name='radio'
        value='two' required
        disabled
        readOnly
        tabIndex={0}
        accessKey='2' />
      <RadioCog
        id='radio-three'
        title='Radio Cog'
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
      title='Select Cog'
      name='select'>
      <option>One</option>
      <option>Two</option>
      <option>Three</option>
    </SelectCog>
  ))
  .add('"value"', () => (
    <SelectState
      value='one'>
      <SelectCog
        title='Select Cog'
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
        title='Select Cog'
        name='select'>
        <option value='one'>One</option>
        <option value='two'>Two</option>
        <option value='three'>Three</option>
      </SelectCog>
    </SelectState>
  ))
  .add('"required"', () => (
    <SelectCog
      title='Select Cog'
      required
      name='select'>
      <option>One</option>
      <option>Two</option>
      <option>Three</option>
    </SelectCog>
  ))
  .add('"disabled"', () => (
    <SelectCog
      title='Select Cog'
      disabled
      name='select'>
      <option>One</option>
      <option>Two</option>
      <option>Three</option>
    </SelectCog>
  ))
  .add('"readOnly"', () => (
    <SelectCog
      title='Select Cog'
      readOnly
      name='select'>
      <option>One</option>
      <option>Two</option>
      <option>Three</option>
    </SelectCog>
  ))
  .add('"tabIndex"', () => (
    <SelectCog
      title='Select Cog'
      tabIndex={0}
      name='select'>
      <option>One</option>
      <option>Two</option>
      <option>Three</option>
    </SelectCog>
  ))
  .add('"accessKey"', () => (
    <SelectCog
      title='Select Cog'
      accessKey='A'
      name='select'>
      <option>One</option>
      <option>Two</option>
      <option>Three</option>
    </SelectCog>
  ))
  .add('"required" "disabled" "readOnly" "tabIndex" "accessKey"', () => (
    <SelectCog
      title='Select Cog'
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
      title='Text Cog'
      name='text' />
  ))
  .add('"value"', () => (
    <TextState
      value='Text'>
      <TextCog
        name='text' />
    </TextState>
  ))
  .add('"defaultValue"', () => (
    <TextState
      defaultValue='Text'>
      <TextCog
        name='text' />
    </TextState>
  ))
  .add('"required"', () => (
    <TextCog
      title='Text Cog'
      required
      name='text' />
  ))
  .add('"disabled"', () => (
    <TextCog
      title='Text Cog'
      disabled
      name='text' />
  ))
  .add('"readOnly"', () => (
    <TextCog
      title='Text Cog'
      readOnly
      name='text' />
  ))
  .add('"tabIndex"', () => (
    <TextCog
      title='Text Cog'
      tabIndex={0}
      name='text' />
  ))
  .add('"accessKey"', () => (
    <TextCog
      title='Text Cog'
      accessKey='A'
      name='text' />
  ))
  .add('"required" "disabled" "readOnly" "tabIndex" "accessKey"', () => (
    <TextCog
      title='Text Cog'
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
      title='Textarea Cog'
      name='textarea' />
  ))
  .add('"value"', () => (
    <TextareaState
      value='Textarea'>
      <TextareaCog
        name='textarea' />
    </TextareaState>
  ))
  .add('"defaultValue"', () => (
    <TextareaState
      defaultValue='Textarea'>
      <TextareaCog
        title='Textarea Cog'
        name='textarea' />
    </TextareaState>
  ))
  .add('"required"', () => (
    <TextareaCog
      title='Textarea Cog'
      required
      name='textarea' />
  ))
  .add('"disabled"', () => (
    <TextareaCog
      title='Textarea Cog'
      disabled
      name='textarea' />
  ))
  .add('"readOnly"', () => (
    <TextareaCog
      title='Textarea Cog'
      readOnly
      name='textarea' />
  ))
  .add('"tabIndex"', () => (
    <TextareaCog
      title='Textarea Cog'
      tabIndex={0}
      name='textarea' />
  ))
  .add('"accessKey"', () => (
    <TextareaCog
      title='Textarea Cog'
      accessKey='A'
      name='textarea' />
  ))
  .add('"required" "disabled" "readOnly" "tabIndex" "accessKey"', () => (
    <TextareaCog
      title='Textarea Cog'
      required
      disabled
      readOnly
      tabIndex={0}
      accessKey='A'
      name='textarea' />
  ))
