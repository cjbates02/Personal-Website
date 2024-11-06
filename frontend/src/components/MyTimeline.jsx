import Milestone from './Milestone.jsx'
import StartNode from './StartNode.jsx'
import EndNode from './EndNode.jsx'

export default function MyTimeline({milestones}) {
    let isLeft = false;
    return (
        <div className="timeline-container">
            <div className="timeline-title-container">{'<MyTimeline />'}</div>
            <StartNode />
            {milestones.slice().reverse().map((milestone) => {
                isLeft = !isLeft;
                return (<Milestone 
                            isLeft={isLeft} 
                            date={milestone.date} 
                            key={milestone.key}
                            title={milestone.title}
                            desc={milestone.description}
                        />)
            })}
            <EndNode />
        </div>
    )
}