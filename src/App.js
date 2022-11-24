
import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';


function App() {

  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
      locationOfExpenditure:'Delhi'
    },
    {
    id: 'e2', 
    title: 'New TV', 
    amount: 799.49, 
    date: new Date(2021, 2, 12), 
    locationOfExpenditure:'Mumbai'
     },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
      locationOfExpenditure:'Hyderabad'
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
      locationOfExpenditure:'Banglore'
    }
  ];

return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h2>Let's Get Started</h2>

        <div>
      {expenses.map( expense=> (
        <li>
          <ExpenseItem title={expense.title}
                   amount={expense.amount}
                   date={expense.date}
                  locationOfExpenditure={expense.locationOfExpenditure}
          ></ExpenseItem>
        </li>
      ))}
    </div>

      <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
