// GET all stored receipes
const getStoredReceipes = async () => {
  const response = await fetch('http://localhost:3001/users/storedReceipes', {
    method: 'GET'
  });
  return response.json();
};

// GET all deleted receipes
const getDeletedReceipes = async () => {
  const response = await fetch('http://localhost:3001/users/deletedReceipes', {
    method: 'GET'
  });
  return response.json();
};

// ADD a new receipe to stored receipes
const addReceipe = async (receipe) => {
    const response = await fetch('http://localhost:3001/users/storedReceipes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(receipe)
    });
  
    const data = await response.json();
    if (!response.ok) {
      const errorMsg = data?.message;
      throw new Error(errorMsg)
    }
    
    return data;
  };
  
  // DELETE a receipe from stored receipes
  const deleteReceipe = async (receipe) => {
    const response = await fetch('http://localhost:3001/users/storedReceipes', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(receipe)
    });
    const data = await response.json();
    if (!response.ok) {
      const errorMsg = data?.message;
      throw new Error(errorMsg)
    }
    
    return data;
  };

  // RESTORE a receipe from deleted receipes
  const restoreReceipe = async (receipe) => {
    const response = await fetch('http://localhost:3001/users/deletedReceipes', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(receipe)
    });
  
    const data = await response.json();
    if (!response.ok) {
      const errorMsg = data?.message;
      throw new Error(errorMsg)
    }
    
    return data;
  };

 // EDIT a receipe from stored receipes
 const editReceipe = async (receipe) => {
  const response = await fetch('http://localhost:3001/users/storedReceipes', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(receipe)
  });

  const data = await response.json();
  if (!response.ok) {
    const errorMsg = data?.message;
    throw new Error(errorMsg)
  }
  
  return data;
};

  export default {
    getStoredReceipes,
    getDeletedReceipes,
    addReceipe,
    deleteReceipe,
    restoreReceipe,
    editReceipe
  };

  
  