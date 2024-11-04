import Navbar from './components/Navbar.jsx'
import MyTimeline from './components/MyTimeline.jsx'


// Test Milestones, should pull from a database
const milestones = [
  {'key': 1, 'date': 'August 2021'},
  {'key': 2, 'date': 'August 2022'},
  {'key': 3, 'date': 'March 2023'},
  {'key': 4, 'date': 'March 2023'},
  {'key': 5, 'date': 'March 2023'}
]

function App() {
  return (
    <div className="main-container">
      <Navbar />
      <div className="content-container">
        <MyTimeline milestones={milestones}/>
      </div>
    </div>
  );
}

export default App;
