import React, { useState, useEffect } from 'react'
import Form from './Form'
import axios from 'axios'

const quotesURL = 'http://localhost:3333/api/quotes'

const initialFormState = {
 
}

export default function Container() {
  ////////////// STATES //////////////
  ////////////// STATES //////////////
  ////////////// STATES //////////////
  const [] = useState()
  const [] = useState()

  ////////////// NETWORK HELPERS //////////////
  ////////////// NETWORK HELPERS //////////////
  ////////////// NETWORK HELPERS //////////////
  const getQuotes = () => {
   
  }

  const postQuote = ({ , }) => {
   
  }

  const putQuote = ({ ,, }) => {
  
  }

  const deleteQuote = () => {
   
  }

  ////////////// OTHER HELPERS //////////////
  ////////////// OTHER HELPERS //////////////
  ////////////// OTHER HELPERS //////////////
  const editQuote = (id) => {
    const quote = quotes.find(q => q.id === id)
    setFormValues({ ...quote })
  }

  const resetForm = () => setFormValues(initialFormState)

  ////////////// SIDE EFFECTS //////////////
  ////////////// SIDE EFFECTS //////////////
  ////////////// SIDE EFFECTS //////////////


  return (
    <div className='container'>
      <h3>Quotes</h3>
      <ul>
        {
          quotes.map((q, i) => (
            <li key={q.id}>
              <div>{q.text} ({q.author})</div>

              <button data-cy={`editBtn${i}`} onClick={() => editQuote(q.id)}>Edit</button>
              
              <button data-cy={`deleteBtn${i}`} onClick={() => deleteQuote(q.id)}>Delete</button>
            </li>
          ))
        }
      </ul>
      <Form
        ___
        ___
        submitHandlers={{ postQuote, putQuote }}
      />
    </div>
  )
}
