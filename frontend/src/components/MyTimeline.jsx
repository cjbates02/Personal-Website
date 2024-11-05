import Milestone from './Milestone.jsx'
import StartNode from './StartNode.jsx'
import EndNode from './EndNode.jsx'

export default function MyTimeline({milestones}) {
    let isLeft = false;
    return (
        <div className="timeline-container">
            <StartNode />
            {milestones.map((milestone) => {
                isLeft = !isLeft;
                return (<Milestone isLeft={isLeft} date={milestone.date} key={milestone.key}/>)
            })}
            <EndNode />
        </div>
    )
}