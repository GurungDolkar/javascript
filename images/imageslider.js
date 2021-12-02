const image_array=['a.jpg','b.jpg','c.jpg','d.jpg','e.jpg']
let array_length=image_array.length
let i=0
let slider=setInterval(slider,5000)



function slider(){
    i++
    document.getElementById('image').src=`images/${image_array[i]}`
}
