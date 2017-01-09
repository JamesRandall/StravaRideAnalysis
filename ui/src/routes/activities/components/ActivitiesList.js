import React from 'react'
import ActivityListItem from './ActivityListItem'
import {ButtonGroup, Button, Glyphicon} from 'react-bootstrap' 

export default ({activities, canMoveNext, canMovePrevious, moveNext, movePrevious}) =>
    <div>
        <ButtonGroup className="pull-right" bsSize="small">
            <Button disabled={!canMovePrevious} onClick={canMovePrevious ? movePrevious : undefined}><Glyphicon glyph="chevron-left" /></Button>
            <Button disabled={!canMoveNext} onClick={canMoveNext ? moveNext : undefined}><Glyphicon glyph="chevron-right" /></Button>
        </ButtonGroup>
        <h3 className="m-t-0">Activities</h3>
        {activities.map((activity,index) =>
            <ActivityListItem activity={activity} key={index} includeHyperlinks={true} />
        )}
    </div>
