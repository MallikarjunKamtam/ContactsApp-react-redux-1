const initialState = [
  {
    id: 0,
    name: "Arjun Kamtam",
    number: 9550660375,
    email: "mallikarjunkamtam@gmail.com",
  },
  {
    id: 1,
    name: "Manish Kumar",
    number: 953445334,
    email: "manishkumar@gmail.com",
  },
  {
    id: 2,
    name: "Vaishnavi",
    number: 9876543210,
    email: "vaishnavi@gmail.com",
  },
  {
    id: 3,
    name: "Captain America",
    number: 9757575578,
    email: "Captainamerica@email.com",
  },
  {
    id: 4,
    name: "Tony Start",
    number: 9999999999,
    email: "tony@starkindustries.com",
  },
  {
    id: 5,
    name: "thor odinson",
    number: 9090909090,
    email: "thorhammer@yahoo.com",
  },
];

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      state = [...state, action.payload];
      return state;

    case "UPDATE_CONTACT":
      const updatedState = state.map((contact) =>
        contact.id === action.payload.id ? action.payload : contact
      );
      state = updatedState;
      return state;

    case "DELETE_CONTACT":
      const filteredContact = state.filter(
        (contact) => contact.id !== action.payload && contact
      );
      state = filteredContact;
      return state;

    default:
      return state;
  }
};

export default contactReducer;
