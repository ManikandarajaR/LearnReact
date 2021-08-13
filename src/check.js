data = [
     {
          id:1,
         names : "fname"
     },
     {
          id:2,
         names : "lname"
     },
     {
          id:3,
         names : "age"
     }
];

function FindIndex(element)
{
     datas = data;
     const index = datas.findIndex((el) => el.id == element )
     console.log(index);
     datas.splice(index,1);
     console.log(datas);
     data = [];
     console.log(data);
     data = datas;
     console.log(data);
}

FindIndex(2)






