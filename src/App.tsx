import styles from "./App.module.css"
import Todo from "./components/models/todo";
import Todos from "./components/Todos";

function App() {
  const todos = [
    new Todo("react sucks!"),
    new Todo("what is tsx!!"),
  ]

  return (
    <div className={styles.wrapper}>
      <Todos items={todos}> 
    <div>
       Lorem ipsum dolor sit amet consectetur adipis
       icing elit. Tempora nam, sunt quam amet laborum, 
       veniam quasi rem eveniet sed unde, nisi quo odio neque.
        Molestiae dolor eum ipsum earum optio!
      </div>
        </Todos>
    </div>
  );
}

export default App;
