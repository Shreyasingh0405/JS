async function testing(){
    const check = await fetch("https://jsonplaceholder.typicode.com/users")
    console.log(check)
  }
  testing()