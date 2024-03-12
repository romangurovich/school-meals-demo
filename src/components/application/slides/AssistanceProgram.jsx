import React, { Component, PropTypes } from 'react'
import InputField from '../InputField'
import Checkbox from '../Checkbox'
import { observer } from 'mobx-react'
import { FormattedMessage } from 'react-intl'

@observer
class AssistanceProgram extends Component {
  render() {
    const { program, onChange } = this.props

    return (
      <div key={program.id}>
        <Checkbox object={program} name="isApplicable" onChange={onChange}>
          {program.name}
        </Checkbox>
        {program.isApplicable &&
        <InputField
            name="caseNumber"
            placeholder="Case number"
            label=""
            object={program}
        />
        }
        <p>
          <FormattedMessage
              id="app.slides.assistanceProgram.noCaseNumber"
              description="Text directing user to enter income information if no case number is available."
              defaultMessage="If you don't have a case number, we'll ask you to enter your income information to make sure you qualify."
          />
        </p>
      </div>
    )
  }
}

AssistanceProgram.propTypes = {
  onChange: PropTypes.func,
  program: PropTypes.object.isRequired
}

export default AssistanceProgram
