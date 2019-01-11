function takeANumber(arr,name)
{
  var n=arr.length+1;
  arr.push(name);
  return `Welcome, ${name}. You are number ${n} in line.`;
  
}

function nowServing(arr)
{
  if(arr.length>0)
  {
    return `Currently serving ${arr.shift()}.`;
    
  }
  else
  {
    
    return "There is nobody waiting to be served!";
  }
}

function currentLine(arr)
{
  var str="The line is currently:";
  for(var i=0;i<arr.length;i++)
  {
   str=str+(i+1)+". " + arr[i]+", ";
    console.log(str);
  }
  
  return str;
  
}