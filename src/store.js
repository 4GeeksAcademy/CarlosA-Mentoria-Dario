export const initialStore=()=>{
  return{
    contactos: []
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'add_task':

      const { id,  color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };

    case 'add_contact':
      return {
        ...store,
        contactos: action.payload
      }

    case 'set_slug':
      // Store the slug in local storage for persistence
      localStorage.setItem('slug', action.payload);
      return {
       ...store,
        slug: action.payload
      }
    case 'delete_contact':
    default:
      throw Error('Unknown action.');
  }
}
