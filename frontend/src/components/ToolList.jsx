export default function ToolList(toolList) {
    return (
        <div className="tool-list-container">
            {toolList.map((tool, i) => {
                return <div className="tool-list-item" key={i}>{tool}</div>
            })}
        </div>
    )
} 