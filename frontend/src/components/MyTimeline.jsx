import Milestone from './Milestone.jsx'
import StartNode from './StartNode.jsx'
import EndNode from './EndNode.jsx'

export default function MyTimeline({milestones}) {
    return (
        <div className="timeline-container">
            <StartNode />
            {milestones.map((milestone) => {
                return (<Milestone date={milestone.date} key={milestone.key}/>)
            })}
            <EndNode />
        </div>
    )
}