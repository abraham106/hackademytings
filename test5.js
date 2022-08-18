function getFrequencies(arr){
    let frequencyObject = {}
    arr.forEach((element)=>{
        if(!frequencyObject.hasOwnProperty(element)){
            frequencyObject[element]=1
        }else{
            frequencyObject[element]+=1
        }
    })
    console.log(frequencyObject)
}

getFrequencies(['A','B','C','B'])