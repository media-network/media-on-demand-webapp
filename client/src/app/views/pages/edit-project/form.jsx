import React from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import { Form } from 'ui/compounds'
import { Button, TextButton, Break } from 'ui/elements'
import { CopyIcon } from 'ui/icons'
import { TextLine } from 'ui/typo'

import { CheckBox, TextBox } from 'views/common/form'
import { validateRequired } from 'views/common/validate'

const ProjectForm = ({
  copyDomainLink,
  handleSubmit,
  domain,
  status,
  isActive,
  showRemoveProjectDialog,
  idle
}) => (
  <Form
    handleSubmit={ handleSubmit }
    idle={ idle=true }
  >
    <TextBox
      label="Project Name"
      name="name"
      readOnly={ status === 'UPDATING' || status === 'INITIALIZING' }
      placeholder="My Awesome Project"
      validate={ validateRequired }
      maxLength={ 50 }
    />
    <Break />
    <TextBox
      label="Domain"
      name="domain"
      placeholder="Domain"
      readOnly
      validate={ validateRequired }
      trailing={ () => (
        <CopyToClipboard onCopy={ copyDomainLink } text={ domain }>
          <Button plain >
            <CopyIcon />
          </Button>
        </CopyToClipboard>
      ) }
    />
    <Break />
    {
      (status === 'UPDATING' || status === 'INITIALIZING')
        ? <TextLine>{ status }</TextLine>
        : <React.Fragment>
          <CheckBox
            name="isActive"
            label="Enable"
          />

          <Break double />
          <Button
            type="submit"
          >
            Save
          </Button>
          {
            isActive ?
              null :
              <TextButton
                disabled={ !idle }
                onClick={ showRemoveProjectDialog }
              >
                Permanently delete
              </TextButton>
          }
        </React.Fragment>
    }
  </Form>
)

export default ProjectForm
