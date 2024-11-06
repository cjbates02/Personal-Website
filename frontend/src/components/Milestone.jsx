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
                <Node />
                <Callout calloutContainerClass={calloutContainerClass} />
                <div className={dateClass}>{date}</div>
            </div>
            <Edge />
        </div>
    )
}
