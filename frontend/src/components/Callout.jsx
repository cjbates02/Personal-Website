export default function Callout({calloutContainerClass, title, desc}) {
    return (
        <div className={`${calloutContainerClass} callout`}>
            <div className="callout-title">{title}</div>
            <div className="callout-title-container">{desc}</div>
        </div>
    )
}