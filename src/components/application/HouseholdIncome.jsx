import React, { Component } from 'react'
import { computed } from 'mobx'
import { observer } from 'mobx-react'
import OtherChildren from './slides/OtherChildren'
import ChildIncome from './slides/ChildIncome'
import Adults from './slides/Adults'
import AdultIncome from './slides/AdultIncome'
import IncomeForYourHousehold from './slides/IncomeForYourHousehold'

@observer
class HouseholdIncome extends Component {
  get allChildCollections() {
    return [this.props.applicationData.students,
      this.props.applicationData.otherChildren]
  }

  @computed get allChildren() {
    const result = this.allChildCollections
                     .map(collection => collection.items.slice())
                     .reduce((a, b) => a.concat(b), [])
    return result
  }

  @computed get anyChildIncome() {
    const result = this.allChildCollections
                     .map(collection => collection.hasAnyIncome)
                     .reduce((a, b) => a || b, false)
    return result
  }

  render() {
    const {
      students,
      otherChildren,
      adults
    } = this.props.applicationData

    return (
      <div>
        <OtherChildren
            otherChildren={otherChildren}
            alreadyNamed={students}
        />
        <Adults adults={adults} />
        <IncomeForYourHousehold />
        <ChildIncome allChildren={this.allChildren} />
        <AdultIncome adults={adults} />
      </div>
    )
  }
}

export default HouseholdIncome
