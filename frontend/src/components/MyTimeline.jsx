import Milestone from './Milestone.jsx'

export default function MyTimeline({milestones}) {
    return (
        <div className="timeline-container">
            {milestones.map((milestone) => {
                return (<Milestone date={milestone.date} key={milestone.key}/>)
            })}
        </div>
    )
}