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
    <CheckboxState>
      <CheckboxCog name='checkbox' />
    </CheckboxState>
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
    <CheckboxState>
      <CheckboxCog
        required
        name='checkbox' />
    </CheckboxState>
  ))
  .add('"disabled"', () => (
    <CheckboxState>
      <CheckboxCog
        disabled
        name='checkbox' />
    </CheckboxState>
  ))
  .add('"readOnly"', () => (
    <CheckboxState>
      <CheckboxCog
        readOnly
        name='checkbox' />
    </CheckboxState>
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
  .add('"checked" "required" "disabled" "readOnly"', () => (
    <CheckboxState
      checked>
      <CheckboxCog
        required
        disabled
        readOnly
        name='checkbox' />
    </CheckboxState>
  ))

storiesOf('EmailCog', module)
  .add('Required and default props', () => (
    <EmailState>
      <EmailCog
        name='email' />
    </EmailState>
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
    <EmailState
      required>
      <EmailCog
        name='email' />
    </EmailState>
  ))
  .add('"disabled"', () => (
    <EmailState
      disabled>
      <EmailCog
        name='email' />
    </EmailState>
  ))
  .add('"readOnly"', () => (
    <EmailState
      readOnly>
      <EmailCog
        name='email' />
    </EmailState>
  ))
  .add('"required" "disabled" "readOnly"', () => (
    <EmailState
      required
      disabled
      readOnly>
      <EmailCog
        name='email' />
    </EmailState>
  ))

storiesOf('NumberCog', module)
  .add('Required and default props', () => (
    <NumberState>
      <NumberCog name='number' />
    </NumberState>
  ))
  .add('"value"', () => (
    <NumberState
      value={1}>
      <NumberCog name='number' />
    </NumberState>
  ))
  .add('"defaultValue"', () => (
    <NumberState
      defaultValue={1}>
      <NumberCog name='number' />
    </NumberState>
  ))
  .add('"required"', () => (
    <NumberState
      required>
      <NumberCog name='number' />
    </NumberState>
  ))
  .add('"disabled"', () => (
    <NumberState
      disabled>
      <NumberCog name='number' />
    </NumberState>
  ))
  .add('"readOnly"', () => (
    <NumberState
      readOnly>
      <NumberCog name='number' />
    </NumberState>
  ))
  .add('"required" "disabled" "readOnly"', () => (
    <NumberState
      required
      disabled
      readOnly>
      <NumberCog name='number' />
    </NumberState>
  ))

storiesOf('PasswordCog', module)
  .add('Required and default props', () => (
    <PasswordState>
      <PasswordCog name='password' />
    </PasswordState>
  ))
  .add('"value"', () => (
    <PasswordState
      value='Password'>
      <PasswordCog name='password' />
    </PasswordState>
  ))
  .add('"defaultValue"', () => (
    <PasswordState
      defaultValue='Password'>
      <PasswordCog name='password' />
    </PasswordState>
  ))
  .add('"required"', () => (
    <PasswordState
      required>
      <PasswordCog name='password' />
    </PasswordState>
  ))
  .add('"disabled"', () => (
    <PasswordState
      disabled>
      <PasswordCog name='password' />
    </PasswordState>
  ))
  .add('"readOnly"', () => (
    <PasswordState
      readOnly>
      <PasswordCog name='password' />
    </PasswordState>
  ))
  .add('"required" "disabled" "readOnly"', () => (
    <PasswordState
      required
      disabled
      readOnly>
      <PasswordCog name='password' />
    </PasswordState>
  ))

storiesOf('RadioCog', module)
  .add('Required and default props', () => (
    <RadioState>
      <RadioCog id='radio-one' name='radio' value='one' />
      <RadioCog id='radio-two' name='radio' value='two' />
    </RadioState>
  ))
  .add('"checked"', () => (
    <RadioState>
      <RadioCog id='radio-one' name='radio' value='one' checked />
      <RadioCog id='radio-two' name='radio' value='two' />
    </RadioState>
  ))
  .add('"defaultChecked"', () => (
    <RadioState>
      <RadioCog id='radio-one' name='radio' value='one' defaultChecked />
      <RadioCog id='radio-two' name='radio' value='two' />
    </RadioState>
  ))
  .add('"required"', () => (
    <RadioState
      required>
      <RadioCog id='radio-one' name='radio' value='one' />
      <RadioCog id='radio-two' name='radio' value='two' />
    </RadioState>
  ))
  .add('"disabled"', () => (
    <RadioState
      disabled>
      <RadioCog id='radio-one' name='radio' value='one' />
      <RadioCog id='radio-two' name='radio' value='two' />
    </RadioState>
  ))
  .add('"readOnly"', () => (
    <RadioState
      readOnly>
      <RadioCog id='radio-one' name='radio' value='one' />
      <RadioCog id='radio-two' name='radio' value='two' />
    </RadioState>
  ))
  .add('"checked" "required"', () => (
    <RadioState
      required>
      <RadioCog id='radio-one' name='radio' value='one' checked />
      <RadioCog id='radio-two' name='radio' value='two' />
    </RadioState>
  ))
  .add('"checked" "disabled"', () => (
    <RadioState
      disabled>
      <RadioCog id='radio-one' name='radio' value='one' checked />
      <RadioCog id='radio-two' name='radio' value='two' />
    </RadioState>
  ))
  .add('"checked" "readOnly"', () => (
    <RadioState
      readOnly>
      <RadioCog id='radio-one' name='radio' value='one' checked />
      <RadioCog id='radio-two' name='radio' value='two' />
    </RadioState>
  ))
  .add('"checked" "required" "disabled" "readOnly"', () => (
    <RadioState
      required
      disabled
      readOnly>
      <RadioCog id='radio-one' name='radio' value='one' checked />
      <RadioCog id='radio-two' name='radio' value='two' />
    </RadioState>
  ))

storiesOf('SelectCog', module)
  .add('Required and default props', () => (
    <SelectState>
      <SelectCog name='select'>
        <option>One</option>
        <option>Two</option>
        <option>Three</option>
      </SelectCog>
    </SelectState>
  ))
  .add('"value"', () => (
    <SelectState
      value='one'>
      <SelectCog name='select'>
        <option value='one'>One</option>
        <option value='two'>Two</option>
        <option value='three'>Three</option>
      </SelectCog>
    </SelectState>
  ))
  .add('"defaultValue"', () => (
    <SelectState
      defaultValue='one'>
      <SelectCog name='select'>
        <option value='one'>One</option>
        <option value='two'>Two</option>
        <option value='three'>Three</option>
      </SelectCog>
    </SelectState>
  ))
  .add('"required"', () => (
    <SelectState
      required>
      <SelectCog name='select'>
        <option>One</option>
        <option>Two</option>
        <option>Three</option>
      </SelectCog>
    </SelectState>
  ))
  .add('"disabled"', () => (
    <SelectState
      disabled>
      <SelectCog name='select'>
        <option>One</option>
        <option>Two</option>
        <option>Three</option>
      </SelectCog>
    </SelectState>
  ))
  .add('"readOnly"', () => (
    <SelectState
      readOnly>
      <SelectCog name='select'>
        <option>One</option>
        <option>Two</option>
        <option>Three</option>
      </SelectCog>
    </SelectState>
  ))

storiesOf('TextCog', module)
  .add('Required and default props', () => (
    <TextState>
      <TextCog name='text' />
    </TextState>
  ))
  .add('"value"', () => (
    <TextState
      value='Text'>
      <TextCog name='text' />
    </TextState>
  ))
  .add('"defaultValue"', () => (
    <TextState
      defaultValue='Text'>
      <TextCog name='text' />
    </TextState>
  ))
  .add('"required"', () => (
    <TextState
      required>
      <TextCog name='text' />
    </TextState>
  ))
  .add('"disabled"', () => (
    <TextState
      disabled>
      <TextCog name='text' />
    </TextState>
  ))
  .add('"readOnly"', () => (
    <TextState
      readOnly>
      <TextCog name='text' />
    </TextState>
  ))
  .add('"required" "disabled" "readOnly"', () => (
    <TextState
      required
      disabled
      readOnly>
      <TextCog name='text' />
    </TextState>
  ))

storiesOf('TextareaCog', module)
  .add('Required and default props', () => (
    <TextareaState>
      <TextareaCog name='textarea' />
    </TextareaState>
  ))
  .add('"value"', () => (
    <TextareaState
      value='Textarea'>
      <TextareaCog name='textarea' />
    </TextareaState>
  ))
  .add('"defaultValue"', () => (
    <TextareaState
      defaultValue='Textarea'>
      <TextareaCog name='textarea' />
    </TextareaState>
  ))
  .add('"required"', () => (
    <TextareaState
      required>
      <TextareaCog name='textarea' />
    </TextareaState>
  ))
  .add('"disabled"', () => (
    <TextareaState
      disabled>
      <TextareaCog name='textarea' />
    </TextareaState>
  ))
  .add('"readOnly"', () => (
    <TextareaState
      readOnly>
      <TextareaCog name='textarea' />
    </TextareaState>
  ))
  .add('"required" "disabled" "readOnly"', () => (
    <TextareaState
      required
      disabled
      readOnly>
      <TextareaCog name='textarea' />
    </TextareaState>
  ))
