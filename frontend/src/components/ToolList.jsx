export default function ToolList(toolList) {
    return (
        <div className="tool-list-container">
            {toolList.map((tool) => {
                return <div className="tool-list-item">{tool}</div>
            })}
        </div>
    )
} 