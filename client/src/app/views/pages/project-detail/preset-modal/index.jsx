import React from 'react'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'

import { mapDispatch } from 'services/redux-helpers'
import { actions, selectors } from 'state/interface'
import { Button, Container, ErrorBox, Paragraph } from 'ui/elements'
import { modal } from 'views/common/decorators'
import { Redirect, withParams } from 'views/router'

import { ConfirmDeletePresetDialog } from '../dialog'

import _PresetForm from './form'

const PresetForm = reduxForm({
  form: 'preset',
  enableReinitialize: true
})(_PresetForm)

const PresetModal = ({
  deletePreset,
  confirmDeletePreset,
  removeDialogDeletePreset,
  preset,
  savePreset,
  slug,
  ui: {
    idle,
    createError, createResult,
    deleteError, deleteResult,
    updateError
  }
}) => {
  return (
    <Container>
      { createError &&
        <ErrorBox>An error happens when creating the new preset.</ErrorBox>
      }
      { updateError &&
        <ErrorBox>An error happens when updating the preset.</ErrorBox>
      }
      { deleteError &&
        <ErrorBox>An error happens when deleting the preset.</ErrorBox>
      }
      { createResult &&
        <Redirect to={ `/projects/${ slug }/presets/${ createResult.hash }` } />
      }
      { deleteResult &&
        <Redirect to={ `/projects/${ slug }` } />
      }
      <PresetForm
        idle={ idle }
        onSubmit={ preset => savePreset({ preset, slug }) }
        initialValues={ preset }
        isDefault={ !!preset.isDefault }
        isEditing={ !!preset.hash }
        confirmDeletePreset={ () => confirmDeletePreset(preset, slug) }
      />
      <ConfirmDeletePresetDialog
        width='narrow'
        content={ ({ params }) => <Paragraph>{ `Do you want to delete the preset ${ params.preset.name } from the project? ` }</Paragraph> }
        choices={ ({ params }) => (
          <Button.Group>
            <Button
              variant="primary"
              onClick={ () => deletePreset(params.preset, slug) }>
              Delete
            </Button>
            <Button
              variant="secondary"
              onClick={ () => removeDialogDeletePreset() }>
              Cancel
            </Button>
          </Button.Group>
        ) }
      />
    </Container>
  )
}

export default withParams(
  modal({
    name: 'Preset'
  })(
  // withParams(
    connect(
      (state, { params: { slug, hash } }) => {
        return {
          preset: selectors.findPreset(state, { hash, slug }) || {},
          slug
        }
      },
      mapDispatch({
        savePreset: ({ preset, slug }) => preset.hash ?
          actions.updatePreset({ preset, slug }) :
          actions.createPreset({ preset, slug }),
        deletePreset: ({ preset, slug }) => actions.deletePreset({ preset, slug }),
        removeDialogDeletePreset: () => actions.hideDialog({ dialog: 'ConfirmDeletePresetDialog' }),
        confirmDeletePreset: (preset, slug) => actions.showDialog({ dialog: 'ConfirmDeletePresetDialog', params: { preset, slug } })
      })
    )(PresetModal)
  )
)
