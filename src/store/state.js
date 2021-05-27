import { createSlice } from '@reduxjs/toolkit';

const rootState = createSlice({
  name: "root",
  initialState: {
    name: "",
    email: "",
    cpf: "",
    phone: "",
    cep: "",
    address: "",
    neighborhood: "",
    city: "",
    password: "",
    confirmPassword: ""
  },

  reducers: {
    newName: (state, action) => { state.name = action.payload },
    newEmail: (state, action) => { state.email = action.payload },
    newCpf: (state, action) => { state.cpf = action.payload },
    newPhone: (state, action) => { state.phone = action.payload },
    newCep: (state, action) => { state.cep = action.payload },
    newAddress: (state, action) => { state.address = action.payload },
    newNeighborhood: (state, action) => { state.neighborhood = action.payload },
    newCity: (state, action) => { state.city = action.payload },
    newPassword: (state, action) => { state.password = action.payload },
    newConfirmPassword: (state, action) => { state.confirmPassword = action.payload },
  }

})

export const reducer = rootState.reducer;

export const { 
  newName,  
  newEmail, 
  newCpf, 
  newPhone, 
  newCep, 
  newAddress, 
  newNeighborhood, 
  newCity, 
  newPassword, 
  newConfirmPassword
} = rootState.actions