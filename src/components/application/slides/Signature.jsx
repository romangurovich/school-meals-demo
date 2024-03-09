import React, { Component, PropTypes } from 'react'
import Slide from '../Slide'
import Form from '../Form'
import Checkbox from '../Checkbox'
import Checkboxes from '../Checkboxes'
import InputField from '../InputField'
import { observer } from 'mobx-react'
import { informalName } from '../../../helpers'
import { FormattedMessage } from 'react-intl'

@observer
class Signature extends Component {
  constructor(props) {
    super(props)
    this.handleSsnChange = this.handleSsnChange.bind(this)
    this.handleNoSsnChange = this.handleNoSsnChange.bind(this)
  }

  handleSsnChange(name, value) {
    // Only allow numbers.
    if (!value.match(/^\d{0,4}$/)) {
      return
    }

    this.props.signature.ssnLastFour = value
  }

  handleNoSsnChange(fieldName, value, object) {
    object[fieldName] = value

    if (value) {
      this.props.signature.ssnLastFour = ''
    }
  }

  get isValid() {
    const signature = this.props.signature
    return signature.noSsn || signature.ssnLastFour.match(/^\d{4}$/)
  }

  render() {
    const { attestor, signature } = this.props

    return (
      <Slide id="ssn" nextDisabled={!this.isValid}>
        <strong>
          <p>
            <FormattedMessage
                id="app.slides.signature.optional"
                description="This questions is optional"
                defaultMessage="This is an optional question for {adult}"
                values={{
                  adult: informalName(attestor)
                }}
            />
          </p>
        </strong>

        <p>
          <FormattedMessage
              id="app.slides.signature.yourSocial"
              description="Provide your social"
              defaultMessage="Please provide the last four digits of your Social Security number."
          />
        </p>

        <p>
          <FormattedMessage
              id="app.slides.signature.noWorries"
              description="US Law about no need to be a documented citizen"
              defaultMessage="United States citizenship or immigration status are {bolded} conditions of eligibility for Summer EBT benefits.
            The benefits received through Summer EBT programs are not subject to public charge consideration.
            In other words, you will not be deported, denied entry to the country, or denied permanent status because you apply for or receive Summer EBT benefits."
              values={{
                bolded: <strong><FormattedMessage
                    id="app.slides.signature.noWorries.bolded"
                    description="The word 'not' bolded"
                    defaultMessage="not"
                                /></strong>
              }}
          />
        </p>

        <Form>
          <InputField
              type="tel"
              name="ssnLastFour"
              placeholder="xxxx"
              className="usa-input-medium"
              object={signature}
              value={signature.noSsn ? '' : signature.ssnLastFour}
              disabled={signature.noSsn}
              pattern="^\d{4}$"
              onChange={this.handleSsnChange}
          />
          <br />
          <Checkboxes legend="No <abbr title='Social Security number'>SSN</abbr>">
            <Checkbox
                object={signature}
                name="noSsn"
                onChange={this.handleNoSsnChange}
            >
              <FormattedMessage
                  id="app.slides.signature.noSSN"
                  description="No SSN"
                  defaultMessage="I prefer not to share this information"
              />

            </Checkbox>
          </Checkboxes>
        </Form>
      </Slide>
    )
  }
}

Signature.propTypes = {
  attestor: PropTypes.object.isRequired,
  signature: PropTypes.object.isRequired
}

export default Signature
