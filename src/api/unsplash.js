import axios from "axios";



export default axios.create({

  baseURL: "https://api.unsplash.com",
  headers:{
      Authorization: 'Client-ID 9H9xRlx2XE4SaoRxu1eT9plcVe_QzBPjvQDlPjHC-3c'
    }
});
