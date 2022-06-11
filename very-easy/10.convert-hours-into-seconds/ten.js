//----------------------------Write a function that converts hours into seconds.------------------------------ //

//----------------------------Examples----------------------------//

// howManySeconds(2) ➞ 7200

// howManySeconds(10) ➞ 36000

// howManySeconds(24) ➞ 86400

//---------------------------Code---------------------------------//

function howManySeconds(hours) {
    let min = 60
    let sec = 60
    return (min * sec) * hours
}