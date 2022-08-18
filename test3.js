function hasPositives(arr){
    let hasPositives = false
    for(let i = 0; i <= arr.length; i++){
        if(arr[i]>0){
            hasPositives = true
        }
    }
    return hasPositives
}

function getNegativesArray(arr){
    return arr.filter(element=>element<0)
}

function getArrayWithoutZeroes(arr){
    return arr.filter(element=>element!=0)
}

function getPositivesArray(arr){
    return arr.filter(element=>element>0)
}

function getUnrepeatedArray(arr){
    let uniqueNums = arr.filter((c,index)=>{
        return arr.indexOf(c) === index;
    })
    return uniqueNums
}


function isPositiveDominant(arr){
    if(!hasPositives(arr)){
        return false
    }
    let unzeroedArray = getArrayWithoutZeroes(arr)
    let negativesArray = getNegativesArray(unzeroedArray)
    let positivesArray = getPositivesArray(unzeroedArray)
    let uniquePositivesArray = getUnrepeatedArray(positivesArray)
    let uniqueNegativesArray = getUnrepeatedArray(negativesArray)
    if(uniqueNegativesArray.length > uniquePositivesArray.length)
    {
        return false
    }
    return true
}