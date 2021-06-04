function CheckOverlap(t1Start, t1End, t2Start, t2End) {

    if( t1Start ==t2Start || t1End ==t2End || t1End == t2Start  ){
        return 'overlap'
    }else {
        return 'no overlap'
    }
}



console.log(
    CheckOverlap(
      "13/5/2021 13:00",
      "14/5/2021 13:00",
      "14/5/2021 13:00",
      "16/5/2021 13:00"
    ))
   console.log(CheckOverlap("13/5/2021 13:00","14/5/2021 13:00", "15/5/2021 13:00","16/5/2021 13:00" ))