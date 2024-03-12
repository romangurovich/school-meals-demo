import React, { Component, PropTypes } from 'react'
import Slide from '../Slide'
import AssistanceProgramList from './AssistanceProgramList'
import { observer } from 'mobx-react'
import { ApplicationData } from '../../../stores/ApplicationData'
import { FormattedMessage } from 'react-intl'

@observer
class AssistancePrograms extends Component {
  render() {
    const { applicationData } = this.props
    const {
      assistancePrograms
    } = applicationData
    const headerText =
      <FormattedMessage
          id="app.slides.assistancePrograms.header"
          description="Text for the header of the slide."
          defaultMessage="Programs"
      />
    return (
      <Slide
          header={headerText} id="assistance-programs"
          nextDisabled={!assistancePrograms.isValid}
      >
        <p>
          <FormattedMessage
              id="app.slides.assistancePrograms.followingPrograms"
              description="Household people who participates in programs"
              defaultMessage="Does anyone in your household, including you, currently partipate in the programs below? If so, check the box and add your case number."
          />
        </p>

        <AssistanceProgramList applicationData={applicationData} />
      </Slide>
    )
  }
}

AssistancePrograms.propTypes = {
  aplicationData: PropTypes.instanceOf(ApplicationData).isRequired
}

export default AssistancePrograms
