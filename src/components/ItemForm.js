import React,{useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {

  const[name,setInputs] = useState("")
  const[category,setCategory] = useState("Produce")

  function valChange (event) {setInputs(event.target.value)}
  function categoryChange (event){setCategory(event.target.value)}


  function handleSubmit(e){
    e.preventDefault();
    const data=({
      id: uuid(),
      name,
      category
    });
    onItemFormSubmit(data)
    // onsubmitForm(data);
    // console.log(data);
  }
  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={valChange} value={name}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={categoryChange} value={category}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
