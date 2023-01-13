const yosh=prompt("nechi yoshsiz")

const yil=2023-Number(yosh)

alert(`siz ${yil} yilsiz`)

const maktab=confirm("san maktaba o'qisanmi?")

if (maktab==true) {
    prompt("nechinchi sinfda o'qisa")
} else {
    alert("kirma")
}
const son1=prompt("1 chi sonni kiriting")
const son2=prompt("2 chi sonni kiriting")

const amal=prompt("qaysi amalni bajarsin")

if (amal=="+") {
    const y=son1+son2
    alert(`ikki soning yigindisi ${y}`)
}else if (amal=="-") {
    const a=son1-son2
    alert(`ikki sonning ayirmasi ${a}`)
}else if (amal=="*") {
    const k=son1*son2
    alert(`ikki sonning kopaytmasi ${k}`)
}else if (amal=="/") {
    const b=son1/son2
    alert(`ikki sonning bolinmasi ${b}`)
}else{
    alert("bunday amal yoq, amal belgisini kiriting, misol ucn <<+>>")
}