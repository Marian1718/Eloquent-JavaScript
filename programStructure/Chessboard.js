let size = 8;
for(let i = 0; i < size; i++)
{
  let stringForChess = "";
  for(let k = 0; k < size; k++)
  {
    if(i % 2 === 0)
    {
      if(k % 2 === 0)
      {
      	stringForChess = stringForChess + " ";
      }
      else {stringForChess = stringForChess + "#";}
    }
    else
    {
      if(k % 2 === 0)
      {
      	stringForChess = stringForChess + "#";
      }
      else {stringForChess = stringForChess + " ";}
    }
    
  }
  console.log(stringForChess);
}