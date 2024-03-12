import React, { Component, PropTypes } from 'react'
import Slide from '../Slide'
import Form from '../Form'
import Fieldset from '../Fieldset'
import InputField from '../InputField'
import { observer } from 'mobx-react'
import { FormattedMessage } from 'react-intl'

@observer
class Attestation extends Component {
  get isValid() {
    return this.props.attestor.firstName &&
           this.props.attestor.lastName &&
           this.props.attestation.date
  }

  render() {
    const { attestation, attestor } = this.props

    const headerText =
      <FormattedMessage
          id="app.slides.attestation.header"
          description="Text for the header of the slide."
          defaultMessage="I certify (promise)..."
      />

    return (
      <Slide header={headerText} id="attestation" nextDisabled={!this.isValid}>
        <p className="usa-font-lead">
          <FormattedMessage
              id="app.slides.attestation.intro"
              description="Introductory paragraph."
              defaultMessage="that all information I will provide on this application is true and that all income is reported."
          />
        </p>
        <p>
          <FormattedMessage
              id="app.slides.attestation.inAddition"
              description="Additional certification"
              defaultMessage="In addition, I certify (promise) that I am not already receiving Summer EBT benefits in another State or ITO (Indian Tribal Organization)."
          />
        </p>

        <p>
          <FormattedMessage
              id="app.slides.attestation.understand"
              description="Phrase"
              defaultMessage="I understand that..."
          />
          <ul className="usa-content-list">
            <li>
              <FormattedMessage
                  id="app.slides.attestation.understanding1"
                  description="Federal funds"
                  defaultMessage="My application is being made in connection with the receipt of Federal funds."
              />
            </li>
            <li>
              <FormattedMessage
                  id="app.slides.attestation.understanding2"
                  description="Risk of revocation of benefits"
                  defaultMessage="Summer EBT agencies may verify the information on the application, and that deliberate misrepresentation of the information may subject me to prosecution under applicable State and Federal criminal statutes."
              />
            </li>
          </ul>
        </p>

        <Form>
          <Fieldset legend="Attestation">
            <InputField
                name="firstName"
                object={attestor}
                required
            >
              <FormattedMessage
                  id="app.slides.attestation.firstName.label"
                  description="Field label."
                  defaultMessage="First name (official name)"
              />
            </InputField>

            <InputField
                name="middleName"
                object={attestor}
            >
              <FormattedMessage
                  id="app.slides.attestation.middleName.label"
                  description="Field label."
                  defaultMessage="Middle name"
              />
            </InputField>

            <InputField
                name="lastName"
                object={attestor}
                required
            >
              <FormattedMessage
                  id="app.slides.attestation.lastName.label"
                  description="Field label."
                  defaultMessage="Last name(s)"
              />
            </InputField>

            <InputField
                name="suffix"
                object={attestor}
            >
              <FormattedMessage
                  id="app.slides.attestation.suffix.label"
                  description="Field label."
                  defaultMessage="Suffix (e.g. Jr., Sr., I, II, III)"
              />
            </InputField>

            <InputField
                name="date"
                object={attestation}
                required
            >
              <FormattedMessage
                  id="app.slides.attestation.date.label"
                  description="Field label."
                  defaultMessage="Today's date"
              />
            </InputField>
          </Fieldset>
        </Form>
      </Slide>
    )
  }
}

Attestation.propTypes = {
  attestor: PropTypes.object.isRequired,
  attestation: PropTypes.shape({
    date: PropTypes.string.isRequired
  }).isRequired
}

export default Attestation
