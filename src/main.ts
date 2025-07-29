const balanceEl = document.getElementById("balance") as HTMLElement;
const incomeAmountEl = document.getElementById("income-amount") as HTMLElement;
const expenseAmountEl = document.getElementById(
  "expense-amount"
) as HTMLElement;
const transactionListEl = document.getElementById(
  "transaction-list"
) as HTMLElement;
const transactionFormEl = document.getElementById(
  "transaction-form"
) as HTMLFormElement;
const descriptionEl = document.getElementById(
  "description"
) as HTMLInputElement;
const amountEl = document.getElementById("amount") as HTMLInputElement;

type TransactionType = {
  id: number;
  description: string;
  amount: number;
};

const stored = localStorage.getItem("transactions");

let transactions: TransactionType[];
if (stored) {
  transactions = JSON.parse(stored);
} else {
  transactions = [];
}

const removeTransaction = (id: number) => {
  transactions = transactions.filter((transaction) => transaction.id !== id);

  localStorage.setItem("transactions", JSON.stringify(transactions));
  updateTransactionList();
  updateSummary();
};
const createTransactionElement = (transaction: TransactionType) => {
  const li = document.createElement("li");
  li.classList.add("transaction");
  li.classList.add(transaction.amount > 0 ? "income" : "expenses");

  const descrptionspan: HTMLSpanElement = document.createElement("span");
  descrptionspan.textContent = transaction.description;

  const amountSpan: HTMLSpanElement = document.createElement("span");
  amountSpan.textContent = formatCurrency(transaction.amount);

  const deleteButton: HTMLButtonElement = document.createElement("button");
  deleteButton.classList.add("delete-button");
  deleteButton.textContent = "X";

  deleteButton.addEventListener("click", (): void => {
    removeTransaction(transaction.id);
  });

  amountSpan.appendChild(deleteButton);
  li.appendChild(descrptionspan);
  li.appendChild(amountSpan);
  return li;
};
const updateTransactionList = () => {
  transactionListEl.innerHTML = "";

  const sortedTransactions = [...transactions].reverse();

  sortedTransactions.forEach((transaction) => {
    const transactionEl = createTransactionElement(transaction);
    transactionListEl.appendChild(transactionEl);
  });
};

const formatCurrency = (number: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number);
};

const updateSummary = () => {
  const balance = transactions.reduce((acc, item) => item.amount + acc, 0);

  const income = transactions
    .filter((item) => item.amount > 0)
    .reduce((acc, item) => acc + item.amount, 0);
  const expenses = transactions
    .filter((item) => item.amount < 0)
    .reduce((acc, item) => acc + item.amount, 0);

  balanceEl.textContent = ` ${formatCurrency(balance)}`;
  incomeAmountEl.textContent = ` ${formatCurrency(income)}`;
  expenseAmountEl.textContent = ` ${formatCurrency(expenses)}`;
};

const addTransaction = (e: SubmitEvent) => {
  e.preventDefault();

  const description: string = descriptionEl.value.trim();
  console.log(description);
  const amount: number = parseFloat(amountEl.value);

  transactions.push({
    id: Date.now(),
    description,
    amount,
  });

  localStorage.setItem("transactions", JSON.stringify(transactions));
  updateTransactionList();
  updateSummary();

  transactionFormEl.reset();
};

transactionFormEl.addEventListener("submit", addTransaction);

updateTransactionList();
updateSummary();
