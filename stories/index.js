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
    <CheckboxCog name='checkbox' />
  ))
  .add('"checked"', () => (
    <CheckboxState
      checked>
      <CheckboxCog name='checkbox' />
    </CheckboxState>
  ))
  .add('"defaultChecked"', () => (
    <CheckboxState
      defaultChecked>
      <CheckboxCog name='checkbox' />
    </CheckboxState>
  ))
  .add('"required"', () => (
    <CheckboxCog
      required
      name='checkbox' />
  ))
  .add('"disabled"', () => (
    <CheckboxCog
      disabled
      name='checkbox' />
  ))
  .add('"readOnly"', () => (
    <CheckboxCog
      readOnly
      name='checkbox' />
  ))
  .add('"tabIndex"', () => (
    <CheckboxCog
      tabIndex={0}
      name='checkbox' />
  ))
  .add('"accessKey"', () => (
    <CheckboxCog
      accessKey='A'
      name='checkbox' />
  ))
  .add('"checked" "required"', () => (
    <CheckboxState
      checked>
      <CheckboxCog
        required
        name='checkbox' />
    </CheckboxState>
  ))
  .add('"checked" "disabled"', () => (
    <CheckboxState
      checked>
      <CheckboxCog
        disabled
        name='checkbox' />
    </CheckboxState>
  ))
  .add('"checked" "readOnly"', () => (
    <CheckboxState
      checked>
      <CheckboxCog
        readOnly
        name='checkbox' />
    </CheckboxState>
  ))
  .add('"checked" "tabIndex"', () => (
    <CheckboxState
      checked>
      <CheckboxCog
        tabIndex={0}
        name='checkbox' />
    </CheckboxState>
  ))
  .add('"checked" "accessKey"', () => (
    <CheckboxState
      checked>
      <CheckboxCog
        accessKey='A'
        name='checkbox' />
    </CheckboxState>
  ))
  .add('"checked" "required" "disabled" "readOnly" "tabIndex" "accessKey"', () => (
    <CheckboxState
      checked>
      <CheckboxCog
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
        required
        name='checkbox' />
    </CheckboxState>
  ))
  .add('"defaultChecked" "disabled"', () => (
    <CheckboxState
      defaultChecked>
      <CheckboxCog
        disabled
        name='checkbox' />
    </CheckboxState>
  ))
  .add('"defaultChecked" "readOnly"', () => (
    <CheckboxState
      defaultChecked>
      <CheckboxCog
        readOnly
        name='checkbox' />
    </CheckboxState>
  ))
  .add('"defaultChecked" "tabIndex"', () => (
    <CheckboxState
      defaultChecked>
      <CheckboxCog
        tabIndex={0}
        name='checkbox' />
    </CheckboxState>
  ))
  .add('"defaultChecked" "accessKey"', () => (
    <CheckboxState
      defaultChecked>
      <CheckboxCog
        accessKey='A'
        name='checkbox' />
    </CheckboxState>
  ))
  .add('"defaultChecked" "required" "disabled" "readOnly" "tabIndex" "accessKey"', () => (
    <CheckboxState
      defaultChecked>
      <CheckboxCog
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
      name='email' />
  ))
  .add('"value"', () => (
    <EmailState
      value='Email'>
      <EmailCog
        name='email' />
    </EmailState>
  ))
  .add('"defaultValue"', () => (
    <EmailState
      defaultValue='Email'>
      <EmailCog
        name='email' />
    </EmailState>
  ))
  .add('"required"', () => (
    <EmailCog
      required
      name='email' />
  ))
  .add('"disabled"', () => (
    <EmailCog
      disabled
      name='email' />
  ))
  .add('"readOnly"', () => (
    <EmailCog
      readOnly
      name='email' />
  ))
  .add('"tabIndex"', () => (
    <EmailCog
      tabIndex={0}
      name='email' />
  ))
  .add('"accessKey"', () => (
    <EmailCog
      accessKey='A'
      name='email' />
  ))
  .add('"required" "disabled" "readOnly" "tabIndex" "accessKey"', () => (
    <EmailCog
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
      name='number' />
  ))
  .add('"value"', () => (
    <NumberState
      value={1}>
      <NumberCog
        name='number' />
    </NumberState>
  ))
  .add('"defaultValue"', () => (
    <NumberState
      defaultValue={1}>
      <NumberCog
        name='number' />
    </NumberState>
  ))
  .add('"required"', () => (
    <NumberCog
      required
      name='number' />
  ))
  .add('"disabled"', () => (
    <NumberCog
      disabled
      name='number' />
  ))
  .add('"readOnly"', () => (
    <NumberCog
      readOnly
      name='number' />
  ))
  .add('"tabIndex"', () => (
    <NumberCog
      tabIndex={0}
      name='number' />
  ))
  .add('"accessKey"', () => (
    <NumberCog
      accessKey='A'
      name='number' />
  ))
  .add('"required" "disabled" "readOnly" "tabIndex" "accessKey"', () => (
    <NumberCog
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
      name='password' />
  ))
  .add('"value"', () => (
    <PasswordState
      value='Password'>
      <PasswordCog
        name='password' />
    </PasswordState>
  ))
  .add('"defaultValue"', () => (
    <PasswordState
      defaultValue='Password'>
      <PasswordCog
        name='password' />
    </PasswordState>
  ))
  .add('"required"', () => (
    <PasswordCog
      required
      name='password' />
  ))
  .add('"disabled"', () => (
    <PasswordCog
      disabled
      name='password' />
  ))
  .add('"readOnly"', () => (
    <PasswordCog
      readOnly
      name='password' />
  ))
  .add('"tabIndex"', () => (
    <PasswordCog
      tabIndex={0}
      name='password' />
  ))
  .add('"accessKey"', () => (
    <PasswordCog
      accessKey='A'
      name='password' />
  ))
  .add('"required" "disabled" "readOnly" "tabIndex" "accessKey"', () => (
    <PasswordCog
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
      <RadioCog id='radio-one' name='radio' value='one' />
      <RadioCog id='radio-two' name='radio' value='two' />
    </RadioState>
  ))
  .add('"checked"', () => (
    <RadioState
      value='one'>
      <RadioCog id='radio-one' name='radio' value='one' />
      <RadioCog id='radio-two' name='radio' value='two' />
    </RadioState>
  ))
  .add('"defaultChecked"', () => (
    <RadioState
      defaultValue='one'>
      <RadioCog id='radio-one' name='radio' value='one' />
      <RadioCog id='radio-two' name='radio' value='two' />
    </RadioState>
  ))
  .add('"required"', () => (
    <RadioState>
      <RadioCog id='radio-one' name='radio' value='one' required />
      <RadioCog id='radio-two' name='radio' value='two' required />
    </RadioState>
  ))
  .add('"disabled"', () => (
    <RadioState>
      <RadioCog id='radio-one' name='radio' value='one' disabled />
      <RadioCog id='radio-two' name='radio' value='two' disabled />
    </RadioState>
  ))
  .add('"readOnly"', () => (
    <RadioState>
      <RadioCog id='radio-one' name='radio' value='one' readOnly />
      <RadioCog id='radio-two' name='radio' value='two' readOnly />
    </RadioState>
  ))
  .add('"tabIndex"', () => (
    <RadioState>
      <RadioCog id='radio-one' name='radio' value='one' tabIndex={0} />
      <RadioCog id='radio-two' name='radio' value='two' tabIndex={0} />
    </RadioState>
  ))
  .add('"accessKey"', () => (
    <RadioState>
      <RadioCog id='radio-one' name='radio' value='one' accessKey='1' />
      <RadioCog id='radio-two' name='radio' value='two' accessKey='2' />
    </RadioState>
  ))
  .add('"checked" "required"', () => (
    <RadioState
      value='one'>
      <RadioCog id='radio-one' name='radio' value='one' required />
      <RadioCog id='radio-two' name='radio' value='two' required />
    </RadioState>
  ))
  .add('"checked" "disabled"', () => (
    <RadioState
      value='one'>
      <RadioCog id='radio-one' name='radio' value='one' disabled />
      <RadioCog id='radio-two' name='radio' value='two' disabled />
    </RadioState>
  ))
  .add('"checked" "readOnly"', () => (
    <RadioState
      value='one'>
      <RadioCog id='radio-one' name='radio' value='one' readOnly />
      <RadioCog id='radio-two' name='radio' value='two' readOnly />
    </RadioState>
  ))
  .add('"checked" "tabIndex"', () => (
    <RadioState
      value='one'>
      <RadioCog id='radio-one' name='radio' value='one' tabIndex={0} />
      <RadioCog id='radio-two' name='radio' value='two' tabIndex={0} />
    </RadioState>
  ))
  .add('"checked" "accessKey"', () => (
    <RadioState
      value='one'>
      <RadioCog id='radio-one' name='radio' value='one' accessKey='1' />
      <RadioCog id='radio-two' name='radio' value='two' accessKey='2' />
    </RadioState>
  ))
  .add('"checked" "required" "disabled" "readOnly" "tabIndex" "accessKey"', () => (
    <RadioState
      value='one'>
      <RadioCog id='radio-one' name='radio' value='one' required disabled readOnly tabIndex={0} accessKey='1' />
      <RadioCog id='radio-two' name='radio' value='two' required disabled readOnly tabIndex={0} accessKey='2' />
    </RadioState>
  ))
  .add('"defaultChecked" "required"', () => (
    <RadioState
      defaultValue='one'>
      <RadioCog id='radio-one' name='radio' value='one' required />
      <RadioCog id='radio-two' name='radio' value='two' required />
    </RadioState>
  ))
  .add('"defaultChecked" "disabled"', () => (
    <RadioState
      defaultValue='one'>
      <RadioCog id='radio-one' name='radio' value='one' disabled />
      <RadioCog id='radio-two' name='radio' value='two' disabled />
    </RadioState>
  ))
  .add('"defaultChecked" "readOnly"', () => (
    <RadioState
      defaultValue='one'>
      <RadioCog id='radio-one' name='radio' value='one' readOnly />
      <RadioCog id='radio-two' name='radio' value='two' readOnly />
    </RadioState>
  ))
  .add('"defaultChecked" "tabIndex"', () => (
    <RadioState
      defaultValue='one'>
      <RadioCog id='radio-one' name='radio' value='one' tabIndex={0} />
      <RadioCog id='radio-two' name='radio' value='two' tabIndex={0} />
    </RadioState>
  ))
  .add('"defaultChecked" "accessKey"', () => (
    <RadioState
      defaultValue='one'>
      <RadioCog id='radio-one' name='radio' value='one' accessKey='1' />
      <RadioCog id='radio-two' name='radio' value='two' accessKey='2' />
    </RadioState>
  ))
  .add('"defaultChecked" "required" "disabled" "readOnly" "tabIndex" "accessKey"', () => (
    <RadioState
      defaultValue='one'>
      <RadioCog id='radio-one' name='radio' value='one' required disabled readOnly tabIndex={0} accessKey='1' />
      <RadioCog id='radio-two' name='radio' value='two' required disabled readOnly tabIndex={0} accessKey='2' />
    </RadioState>
  ))

storiesOf('SelectCog', module)
  .add('Required and default props', () => (
    <SelectCog
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
        name='select'>
        <option value='one'>One</option>
        <option value='two'>Two</option>
        <option value='three'>Three</option>
      </SelectCog>
    </SelectState>
  ))
  .add('"required"', () => (
    <SelectCog
      required
      name='select'>
      <option>One</option>
      <option>Two</option>
      <option>Three</option>
    </SelectCog>
  ))
  .add('"disabled"', () => (
    <SelectCog
      disabled
      name='select'>
      <option>One</option>
      <option>Two</option>
      <option>Three</option>
    </SelectCog>
  ))
  .add('"readOnly"', () => (
    <SelectCog
      readOnly
      name='select'>
      <option>One</option>
      <option>Two</option>
      <option>Three</option>
    </SelectCog>
  ))
  .add('"tabIndex"', () => (
    <SelectCog
      tabIndex={0}
      name='select'>
      <option>One</option>
      <option>Two</option>
      <option>Three</option>
    </SelectCog>
  ))
  .add('"accessKey"', () => (
    <SelectCog
      accessKey='A'
      name='select'>
      <option>One</option>
      <option>Two</option>
      <option>Three</option>
    </SelectCog>
  ))
  .add('"required" "disabled" "readOnly" "tabIndex" "accessKey"', () => (
    <SelectCog
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
      required
      name='text' />
  ))
  .add('"disabled"', () => (
    <TextCog
      disabled
      name='text' />
  ))
  .add('"readOnly"', () => (
    <TextCog
      readOnly
      name='text' />
  ))
  .add('"tabIndex"', () => (
    <TextCog
      tabIndex={0}
      name='text' />
  ))
  .add('"accessKey"', () => (
    <TextCog
      accessKey='A'
      name='text' />
  ))
  .add('"required" "disabled" "readOnly" "tabIndex" "accessKey"', () => (
    <TextCog
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
        name='textarea' />
    </TextareaState>
  ))
  .add('"required"', () => (
    <TextareaCog
      required
      name='textarea' />
  ))
  .add('"disabled"', () => (
    <TextareaCog
      disabled
      name='textarea' />
  ))
  .add('"readOnly"', () => (
    <TextareaCog
      readOnly
      name='textarea' />
  ))
  .add('"tabIndex"', () => (
    <TextareaCog
      tabIndex={0}
      name='textarea' />
  ))
  .add('"accessKey"', () => (
    <TextareaCog
      accessKey='A'
      name='textarea' />
  ))
  .add('"required" "disabled" "readOnly" "tabIndex" "accessKey"', () => (
    <TextareaCog
      required
      disabled
      readOnly
      tabIndex={0}
      accessKey='A'
      name='textarea' />
  ))
