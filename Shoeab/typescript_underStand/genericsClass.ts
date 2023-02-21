class DataStorage<T>{
    private data:T[]=[];

addItem(item:T)
{
    this.data.push(item);
}
removeItem(item:T)
{
    this.data.splice(this.data.indexOf(item),1);
}
getItem()
{
    return [...this.data];
}
}

const textStorage=new DataStorage<string|number>
textStorage.addItem('shoeab');
textStorage.addItem(4);
textStorage.removeItem('patel');
console.log(textStorage.getItem);

