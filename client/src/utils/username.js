


    export const username = (name) => {
        if (!name || name.length < 2) {
          return ''; 
        }
        
        let A = name.slice(0, 2); // Get the first two characters
        return A.toUpperCase();    // Convert them to uppercase
      };
      