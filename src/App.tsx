import styles from "./App.module.css";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import TodosContextProvider from "./store/todos-context";

function App() {
    return (
        <TodosContextProvider>
            <div className={styles.wrapper}>
                <NewTodo />

                <Todos>
                    {/* <div>
       Lorem ipsum dolor sit amet consectetur adipis
       icing elit. Tempora nam, sunt quam amet laborum, 
       veniam quasi rem eveniet sed unde, nisi quo odio neque.
       Molestiae dolor eum ipsum earum optio!
      </div> */}
                </Todos>
            </div>
        </TodosContextProvider>
    );
}

export default App;
