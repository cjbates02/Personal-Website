import Node from './Node.jsx';
import Edge from './Edge.jsx';
import Callout from './Callout.jsx';

export default function Milestone({ isLeft, date }) {
    let nodeCalloutContainerClass = isLeft ? 'node-callout-container-left' : 'node-callout-container-left';
    let calloutContainerClass = isLeft ? 'callout-left' : 'callout-right';
    let dateClass = isLeft ? 'date-right' : 'date-left'; // we want the date on the opposite side of the callout
    return (
        <div className="milestone-container">
            <div className={nodeCalloutContainerClass}>
                <Node date={date} dateClass={dateClass} />
                <Callout calloutContainerClass={calloutContainerClass} />
            </div>
            <Edge />
        </div>
    )
}

// switching callout to right
// first switch node-callout-container flex direction to row
// change callout container left to 60px
// remove right

// switching to left
// first switch node-callout-container flex direction to row-reverse
// change callout container right to 60px
// remove left