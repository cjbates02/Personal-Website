export default function Callout({calloutContainerClass, title, desc}) {
    return (
        <div className={`${calloutContainerClass} callout`}>
            <div className="callout-title-container">{desc}</div>
        </div>
    )
}