import React from 'react'

function SetLocalStorage(itemName, initialValue){
  const [item, setItem] = React.useState(initialValue)
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(false)

  React.useEffect(() => {
    setTimeout(() => {
      try{
        const localStorageItem = localStorage.getItem(itemName)
        // eslint-disable-next-line
        if (localStorageItem) initialValue = JSON.parse(localStorageItem)
        setItem(initialValue)
        setLoading(false)
      } catch (err){
        setError(true)
      }
    }, 1300)
  })

  const saveItem = (newItem) => {
    try{
      localStorage.setItem(itemName, JSON.stringify(newItem))
      setItem(newItem)
    } catch (err){
      setError(true)
    }
  }

  return {item, saveItem, loading, error}
}

export { SetLocalStorage }