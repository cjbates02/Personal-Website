export default function Node({ date, dateClass }) {
    dateClass = `node ${dateClass}`;
    let dateContent = `content: '${date}'`
    return (
        <div className={dateClass} style={{dateContent}}></div>
    )
}