import './ExpenseItem.css'

const ExpenseItem = () => {
  return (
    <div className="expense-item">
        <div className="expense-item__description">
            <h2>Title</h2>
        </div>
        <div className="expense-item__price">
            <p>Price</p>
        </div>
    </div>
  )
}
export default ExpenseItem
