import toast from "react-hot-toast";
import css from './SearchBar.module.css'

const SearchBar = ({onSubmit}) => {

const handleSubmit = (evt) => {
  evt.preventDefault();
  const form = evt.target;
  const topic = form.elements.topic.value;
  
  

  if (form.elements.topic.value.trim() === "") {
    alert("Please enter search term!")
			return;
  }
  onSubmit(topic);
  form.reset();
}

  return (
    <header>
  <form onSubmit={handleSubmit}>
      <input type="text" name="topic" placeholder="Search articles..." />
      <button>Search</button>
    </form>
</header>
  )
}

export default SearchBar