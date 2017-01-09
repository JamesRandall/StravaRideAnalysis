import React from 'react'
import { Panel } from 'react-bootstrap'
import TitleLabel from '../../common/components/TitleLabel'
import WeekSummaryContainer from '../containers/WeekSummaryContainer'
import YearSummaryContainer from '../containers/YearSummaryContainer'

export default () => {
    return <div>
        <h3 className="m-t-0">History</h3>
        <Panel>
            <TitleLabel text="This Week" />
            <div>
                <WeekSummaryContainer />
            </div>
            <TitleLabel className="m-t-2" text="This Year" />
            <div>
                <YearSummaryContainer  />          
            </div>
        </Panel>
    </div>
}
