// Step 1: Importing the functions from utils.js  
import { uploadPhoto, createUser } from './utils.js';  

// Step 2: Defining the handleProfileSignup function  
async function handleProfileSignup() {  
  try {  
    // Step 3: Resolving both promises collectively  
    const [photo, user] = await Promise.all([uploadPhoto(), createUser()]);  

    // Step 4: Logging firstName and lastName to the console  
    console.log(`Body: ${user.firstName} ${user.lastName}`);  
    
    // Optionally log the photo response if needed  
    // console.log(photo);  
    
  } catch (error) {  
    // Step 5: Handling any errors  
    console.error('Signup system offline');  
  }  
}  

// Assuming this function is called somewhere in your code  
handleProfileSignup(); 