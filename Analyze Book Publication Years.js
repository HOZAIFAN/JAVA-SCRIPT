let Books = {

    Japi: { year: 1998, author: "hozaifa", title: "Japi way to success" },
    Brook: { year: 1945, author: "saim", title: "saimayub injury before champion trophy" },
    zolfan: { year: 2022, author: "zolfan", title: "zolfan toxic relatives" },
    mastan: { year: 1945, author: "shehzad malang", title: "a great evil" },
  };
  
  let filteration = (Books) => {
    for (let key in Books) {
      if (Books[key].year >= 2000) {
        console.log(`"${Books[key].title}" was published after ${Books[key].year}.`);
      } else {
        console.log(
          `"${Books[key].title}" by ${Books[key].author} was published in ${Books[key].year}, before 2000.`
        );
      }
    }
  };




  filteration(Books);
  