import Node from './Node.jsx';
import Edge from './Edge.jsx';
import Callout from './Callout.jsx';

export default function Milestone({ date }) {
    return (
        <div className="milestone-container">
            <div className="node-callout-container">
                <Node />
                <Callout />
            </div>
            <Edge />
        </div>
    )
}