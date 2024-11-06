import Navbar from './components/Navbar.jsx'
import MyTimeline from './components/MyTimeline.jsx'


// Test Milestones, should pull from a database
const milestones = [
  {
    'key': 1,
    'date': 'August 2021',
    'title': 'Project Kickoff',
    'description': 'The project officially begins with initial planning and team formation.'
  },
  {
    'key': 6,
    'date': 'August 2021',
    'title': 'Initial Research',
    'description': 'The team conducts market research to understand user needs and competitive landscape.'
  },
  {
    'key': 2,
    'date': 'August 2022',
    'title': 'Prototype Completion',
    'description': 'The first version of the product prototype is completed and tested.'
  },
  {
    'key': 7,
    'date': 'August 2022',
    'title': 'Final Design Approval',
    'description': 'The product design is finalized and approved by all stakeholders.'
  },
  {
    'key': 3,
    'date': 'March 2023',
    'title': 'Beta Launch',
    'description': 'The product enters beta testing with a select group of users.'
  },
  {
    'key': 4,
    'date': 'March 2023',
    'title': 'User Feedback Collection',
    'description': 'User feedback is gathered and analyzed to improve the product before full launch.'
  },
  {
    'key': 5,
    'date': 'March 2023',
    'title': 'Performance Optimization',
    'description': 'The product undergoes performance optimization to ensure scalability and speed.'
  },
  {
    'key': 8,
    'date': 'March 2023',
    'title': 'Full Product Launch',
    'description': 'The product is released to the public, marking the completion of the first phase.'
  },
  {
    'key': 9,
    'date': 'March 2023',
    'title': 'Customer Support Setup',
    'description': 'A customer support system is set up to handle queries and issues from users.'
  },
  {
    'key': 10,
    'date': 'March 2023',
    'title': 'First Major Update',
    'description': 'The first major product update is released, including new features and improvements.'
  }
];



function App() {
  return (
    <div className="main-container">
      <Navbar />
      <MyTimeline milestones={milestones}/>
    </div>
  );
}

export default App;
