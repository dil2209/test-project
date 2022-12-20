import { createSlice } from '@reduxjs/toolkit'

export const oquvchiSlice = createSlice({
  name: 'Oquvchi',
  initialState: {
    oquvchi:[
        {fio: 'Jane Cooper',
         yonalish:'Microsoft',
         tel:'(225) 555-0118',
        tolov:'697 000',
        guruh:'Frontend 010',
        active: true},

        {fio: 'Floyd Miles',
        yonalish:'Yahoo',
        tel:'(205) 555-0100',
       tolov:'597 000',
       guruh:'Frontend 010',
       active: false},

       {fio: 'Ronald Richards',
        yonalish:'Adobe',
        tel:'(302) 555-0107',
       tolov:'ronald@adobe.com',
       guruh:'Frontend 010',
       active: false},
        
       {fio: 'Marvin Mackinney',
       yonalish:'Tesla',
       tel:'(252) 555-0126',
       tolov:'marvin@tesla.com',
       guruh:'Frontend 010',
       active: true},
       
       {fio: 'Jerome Bell',
       yonalish:'Google',
       tel:'(629) 555-0129',
       tolov:'jerome@google.com',
       guruh:'Frontend 010',
       active: true},

       {fio: 'Kathryn Murphy',
       yonalish:'Microsoft',
       tel:'(406) 555-0120',
       tolov:'kathryn@microsoft.com',
       guruh:'Frontend 010',
       active: true},

       {fio: 'Jacob Jones',
       yonalish:'Yahoo',
       tel:'(208) 555-0112',
       tolov:'jacob@yahoo.com',
       guruh:'Frontend 010',
       active: true},

       {fio: 'Kristin Watson',
       yonalish:'Facebook',
       tel:'(704) 555-0127',
       tolov:'kristin@facebook.com',
       guruh:'Frontend 010',
       active: false}
    ]
  },
  reducers: {
     changeActive: (state, action) =>{
        state.oquvchi[action.payload].active = !state.oquvchi[action.payload].active
     },
     addOquvchi: (state, action) =>{
         state.oquvchi[state.oquvchi.length+1] = action.payload
      
     }
   
  },
})

// Action creators are generated for each case reducer function
export const { changeActive, addOquvchi } = oquvchiSlice.actions

export default oquvchiSlice.reducer