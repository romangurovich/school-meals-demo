import React, { Component } from 'react'
import { observer } from 'mobx-react'

import Welcome from './slides/Welcome'
import BeforeYouBegin from './slides/BeforeYouBegin'
import GettingReady from './slides/GettingReady'
import DocumentsYoullNeed from './slides/DocumentsYoullNeed'
import LegalStatements from './slides/LegalStatements'
import Attestation from './slides/Attestation'
import Students from './slides/Students'
import AssistancePrograms from './slides/AssistancePrograms'
import NoAssistancePrograms from './NoAssistancePrograms'
import Contact from './slides/Contact'
import Demographics from './slides/Demographics'
import Summary from './slides/Summary'
import ThankYou from './slides/ThankYou'
import Household from './slides/Household'
import Signature from './slides/Signature'

@observer
class Application extends Component {
  render() {
    const { applicationData } = this.props
    const {
      attestation,
      students,
      contact,
      adults,
      assistancePrograms,
      signature
    } = applicationData

    return (
      <div>
        <Welcome />
        <BeforeYouBegin />
        <GettingReady />
        <DocumentsYoullNeed />
        <Attestation attestation={attestation} attestor={adults.first} />
        <Students students={students} />
        <Household />
        <AssistancePrograms applicationData={applicationData} />

        {assistancePrograms.hasAny !== true &&
        <NoAssistancePrograms applicationData={this.props.applicationData} />
        }

        <Contact contact={contact} />
        <Demographics students={students} />
        <Signature attestor={adults.first} signature={signature} />
        <LegalStatements />
        <Summary applicationData={this.props.applicationData} />
        <ThankYou applicationData={this.props.applicationData} />
      </div>
    )
  }
}

export default Application
